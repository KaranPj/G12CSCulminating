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

    constructor(
        _messageId: string,
        _receiverId: string,
        _content: string,
        _time: Date = new Date(),
        _isPrivate: boolean = false,
        _edited: boolean = false,
        _roomId: string,
        _editedTimestamp: Date = new Date(0),
        _senderId: string,
        _deleted: boolean = false,
        _isEncrypted: boolean = false
    ) {
        this._messageId = _messageId;
        this._receiverId = _receiverId;
        this._content = _content;
        this._time = _time;
        this._isPrivate = _isPrivate;
        this._edited = _edited;
        this._roomId = _roomId
        this._editedTimestamp = _editedTimestamp;
        this._senderId = _senderId
        this._deleted = _deleted;
        this._isEncrypted = _isEncrypted;
    }

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