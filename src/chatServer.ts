import { user } from './user';
import { ChatRoom } from './chatRoom';
import { Message } from './message';
import { SocketManager } from './socketManager';
import express from 'express';
import { createServer } from 'node:http';
import { join } from 'node:path';
import { Server as SocketIOServer } from 'socket.io';
import { sqlite3 } from 'sqlite3';
import { open, Database as SQLiteDatabase } from 'sqlite';

export class chatServer {
    protected _users: user[];
    private _chatRooms: ChatRoom[];
    private _db: SQLiteDatabase | null = null;
    private _io: SocketIOServer | null = null;
    private _socketManager: SocketManager | null = null;

    constructor() {
        this._users = [];
        this._chatRooms = [];
        this.initializeServer();
    }

    private async initializeServer(): Promise<void> {
        // Initialize database
        this._db = await open({
            filename: 'chatOne.db',
            driver: sqlite3.Database
        });

        await this._db.exec(`
            CREATE TABLE IF NOT EXISTS messages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                client_offset TEXT UNIQUE,
                content TEXT
            );
        `);

        // Set up Express app and HTTP server
        const app = express();
        const server = createServer(app);

        // Initialize Socket.IO
        this._io = new SocketIOServer(server, {
            connectionStateRecovery: {}
        });

        // Initialize SocketManager
        this._socketManager = new SocketManager(this._io, this, this._db);

        // Serve index.html
        app.get('/', (req: any, res: { sendFile: (arg0: string) => void; }) => {
            res.sendFile(join(process.cwd(), 'index.html'));
        });

        // Start server
        server.listen(3000, () => {
            console.log('server running at http://localhost:3000');
        });
    }

    addParticipant(user: user): void {
        if (!this._users.includes(user)) {
            this._users.push(user);
        }
    }

    removeParticipants(userId: string): void {
        this._users = this._users.filter(u => u.UserId !== userId);
    }

    broadcastMessage message: Message): void {
        if (this._io) {
            this._io.emit('chat message', message.getContent(), message.RoomId);
        }
    }

    createRoom(room: ChatRoom): void {
        this._chatRooms.push(room);
    }

    deleteRoom(roomId: string): void {
        this._chatRooms = this._chatRooms.filter(r => r.getRoomId() !== roomId);
    }

    getRoomById(roomId: string): ChatRoom | undefined {
        return this._chatRooms.find(r => r.getRoomId() === roomId);
    }
}