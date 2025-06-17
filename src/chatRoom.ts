import { user } from './user';
import { Message } from './message';

export class ChatRoom {
    private _roomId: string;
    private _roomName: string;
    private _category: string;
    private _tags: string[];
    protected _participants: user[];
    protected _messages: Message[];
    private _maxNumberParticipant: number = 50;
    private _isPrivate: boolean;

    public getRoomId(): string {
        return this._roomId;
    }

    public getRoomName(): string {
        return this._roomName;
    }

    public getCategory(): string {
        return this._category;
    }

    public getTags(): string[] {
        return this._tags;
    }

    public getParticipants(): user[] {
        return this._participants;
    }

    public getMessages(): Message[] {
        return this._messages;
    }

    public getMaxNumberParticipant(): number {
        return this._maxNumberParticipant;
    }

    public getIsPrivate(): boolean {
        return this._isPrivate;
    }

    
}