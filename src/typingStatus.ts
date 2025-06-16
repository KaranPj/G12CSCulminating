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

  public set Typing(isTyping: boolean) {
    this._isTyping = isTyping;
    this.updateTime();
  }

  public get TypingStatus(): boolean {
    return this._isTyping;
  }

  public shouldHideTypingIndicator(): boolean {
    const now = new Date().getTime();
    const diff = now - this._lastUpdated.getTime();
    return diff > 5000; // hide if last updated more than 5 seconds ago
  }

  public get UserId(): string {
    return this._userId;
  }

  public get RoomId(): string {
    return this._roomId;
  }

  public get LastUpdated(): Date {
    return this._lastUpdated;
  }

  public updateTime(): void {
    this._lastUpdated = new Date();
  }
}