import { user } from './user';

class SocketManager {
  private socket: SocketIO;

  public sendMessage(message: Message): void {
    // code to send a message
  }

  public joinRoom(roomId: string, userId: string): void {
    // code to join a room
  }

  public leaveRoom(roomId: string, userId: string): void {
    // code to leave a room
  }

  public emitTyping(userId: string, roomId: string): void {
    // code to emit typing event
  }

  public emitUserStatus(userId: string, status: Status): void {
    // code to emit user status
  }

  public updateProfile(user: user): void {
    // code to update user profile
  }
}