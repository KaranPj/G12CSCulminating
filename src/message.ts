<<<<<<< HEAD
class Message{
    private _messageId: string

    protected _senderId: string

    private _receiverId: string

    protected _content: string

    private _time: Date

    private _isPrivate: boolean

    protected _roomId: string

    private _edited: boolean

    private _editedTimestamp: Date

    private _deleted: boolean

    private _isEncrypted: boolean

    public getContent(): string{
        return this._content
    }

    public setContent(content: string){

    }

    public getTime(): Date{

         return this._content
    }

    public formatMessage():string{

         return this._content
    }

    public getSenderId(): string{

         return this._content
    }

    public getRoomId(): string{

         return this._content
    }
}