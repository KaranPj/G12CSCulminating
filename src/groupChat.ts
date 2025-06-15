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

    public getGroupchatId(): string{
        return this._groupchatId
    }

    public getGroupchatRoom(): string{
        return this._groupchatId;
    }

    public getName(): string{
        return this._name;
    }

    public setName(name: string){
        return this._name;
    }

    public getParticipantCount(): number{
        return this._participants.length
    }

    public getDescription(): string{
        return this._description;
    }

    public setDescription(description: string){
        return this._description;
    }
}