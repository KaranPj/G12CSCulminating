export class Message {
    private _messageId: string;
    protected _senderId: string;
    private _receiverId: string;
    protected _content: string;
    private _time: Date;
    private _isPrivate: boolean;
    protected _roomId: string;
    private _edited: boolean;
    private _editedTimestamp: Date;
    private _deleted: boolean;
    private _isEncrypted: boolean;

    constructor()

    public getContent(): string {
        return this._content;
    }

    public setContent(content: string) {
        this._content = content;
    }

    public get Time(): Date {
        return this._time;
    }

    public get formatMessage(): string {
        return this._content;
    }

    public get SenderId(): string {
        return this._senderId;
    }

    public get RoomId(): string {
        return this._roomId;
    }

    public set RoomId(room: string) {
        this._roomId = room;
    }
}