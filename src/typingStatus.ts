import { user } from './user';
import { ChatRoom} from './chatRoom';

export class TypingStatus {
  private _userId: string;
  private _roomId: string;
  private _isTyping: boolean;
  private _lastUpdated: Date;

  constructor(userId: string, roomId: string) {
    this._userId = userId;
    this._roomId = roomId;
    this._isTyping = false;
    this._lastUpdated = new Date();
  }

  setTyping(isTyping: boolean): void {
    this._isTyping = isTyping;
    this.updateTime();
  }

  getTypingStatus(): boolean {
    return this._isTyping;
  }

  shouldHideTypingIndicator(): boolean {
    const now = new Date().getTime();
    const diff = now - this._lastUpdated.getTime();
    return diff > 5000; // hide if last updated more than 5 seconds ago
  }

  getUserId(): string {
    return this._userId;
  }

  getRoomId(): string {
    return this._roomId;
  }

  getLastUpdated(): Date {
    return this._lastUpdated;
  }

  updateTime(): void {
    this._lastUpdated = new Date();
  }
}