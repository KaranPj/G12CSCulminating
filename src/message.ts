
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

    public get Time(): Date{

         return this._content
    }

    public get formatMessage():string{

         return this._content
    }

    public get SenderId(): string{

         return this._content
    }

    public get RoomId(): string{

         return this._content
    }

    public set RoomId(room : string){

     this._roomId= room
    }
}