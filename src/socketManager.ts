import { user } from './user';
import { Message } from './message';
import { Status } from './status';
import { chatServer } from './chatServer';
import { Server as SocketIOServer, Socket } from 'socket.io';
import { Database as SQLiteDatabase } from 'sqlite';

export class SocketManager {
    private socket: SocketIOServer;

    constructor(io: SocketIOServer, chatServer: chatServer, db: SQLiteDatabase) {
        this.socket = io;
        this.initializeSocketEvents(db, chatServer);
    }

    private initializeSocketEvents(db: SQLiteDatabase, chatServer: chatServer): void {
        this.socket.on('connection', (socket: Socket) => {
            socket.on('chat message', async (msg: string, clientOffset: string, callback: () => void) => {
                let result;
                try {
                    result = await db.run(
                        'INSERT INTO messages (content, client_offset) VALUES (?, ?)',
                        msg,
                        clientOffset
                    );
                } catch (e: any) {
                    if (e.errno === 19 /* SQLITE_CONSTRAINT */) {
                        callback();
                    }
                    return;
                }

                // Broadcast message
                this.socket.emit('chat message', msg, result.lastID);
                callback();
            });

            if (!socket.recovered) {
                db.each(
                    'SELECT id, content FROM messages WHERE id > ?',
                    [socket.handshake.auth.serverOffset || 0],
                    (err: any, row: { content: string; id: number }) => {
                        if (err) return;
                        socket.emit('chat message', row.content, row.id);
                    }
                );
            }
        });
    }

    public sendMessage(message: Message): void {
        this.socket.emit('chat message', message.getContent(), message.RoomId);
    }

    public joinRoom(roomId: string, userId: string): void {
        this.socket.socketsJoin(roomId);
    }

    public leaveRoom(roomId: string, userId: string): void {
        this.socket.socketsLeave(roomId);
    }

    public emitTyping(userId: string, roomId: string): void {
        this.socket.to(roomId).emit('typing', userId);
    }

    public emitUserStatus(userId: string, status: Status): void {
        this.socket.emit('user status', userId, status.Code);
    }

    public updateProfile(user: user): void {
        this.socket.emit('profile update', user.UserId, user.Username);
    }
}