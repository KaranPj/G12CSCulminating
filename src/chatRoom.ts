import { user } from './user';

export class ChatRoom{
    private _roomId : string;
    private _roomName : string;
    private _category : string;
    private _tags : string[];
    protected _participants : user[];
    protected _messages : Message[];
    private  _maxNumberParticipant : number =50;
    private _isPrivate : boolean

    public getRoomId() : string{
        return this._roomId;
    }

    public getRoomName() : string{
        return this._roomName;
    }

    public getCategory() : string{
        return this._category;
    }

    public getTags() : string[]{
        return this._tags;
    }

    public getParticipants() : string{
        return this._roomId;
    }

     public getMessages() : string{
        return this._roomId;
    }

    public getMaxNumberParticipant() : number{
        return this._maxNumberParticipant;
    }

    public getIsPrivate() : boolean {
        return this._isPrivate;
    }

    

   
// Hi this is matthew doing this

}