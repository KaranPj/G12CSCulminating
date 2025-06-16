class GroupChat {
    private _groupchatId: string;

    private _name: string;

    private _description: string;

    private _participants: string[]

    constructor (groupchatId: string, name: string, description: string){
        this._groupchatId = groupchatId;
        this._name = name;
        this._description = description;
        this._participants = [];
    }

    public get GroupchatId(): string{
        return this._groupchatId
    }

    public get GroupchatRoom(): string{
        return this._groupchatId;
    }

    public get Name(): string{
        return this._name;
    }

    public set Name(name: string){
       this._name = name
    }

    public get ParticipantCount(): number{
        return this._participants.length
    }

    public get Description(): string{
        return this._description;
    }

    public set Description(description: string){
         this._description = description
    }

    
    
}

