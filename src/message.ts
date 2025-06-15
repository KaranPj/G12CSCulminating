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
=======
class message {
    private messageId: string

    protected senderId: string

    private receiverId: string

    private time: Date

    private isPrivate : boolean

    protected roomId: string

    private edited: boolean

    private editedTimestamp: Date

    private deleted: string

    private isEncrypted: boolean

    public getContent(): string

    public setContent(content : string)

    public getTime(): Date

    public formatMessage(): string

    public getSenderId(): string

    public getRoomId(): string
>>>>>>> 09bf09802d417da25d2fe4882175b5d56e570a6c
}