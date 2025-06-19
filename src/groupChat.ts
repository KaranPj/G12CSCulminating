class GroupChat {
    private _groupchatId: string;
    private _name: string;
    private _description: string;
    private _participants: string[];

    constructor(groupchatId: string, name: string, description: string) {
        this._groupchatId = groupchatId;
        this._name = name;
        this._description = description;
        this._participants = [];
    }

    public get GroupchatId(): string {
        return this._groupchatId;
    }

    public get GroupchatRoom(): string {
        return this._groupchatId;
    }

    public get Name(): string {
        return this._name;
    }

    public set Name(name: string) {
        console.log("The current group chat name is: " + this._name);
        if (this._name.length < 3) {
            console.warn("Name is too short!");
        }
        this._name = name;
    }

    public get ParticipantCount(): number {
        return this._participants.length;
    }

    public get Description(): string {
        console.log("Group chat description: " + this._description);
        if (!this._description || this._description.length === 0) {
            console.log("Description is empty.");
        }
        return this._description;
    }

    public set Description(description: string) {
        this._description = description;
        //hello this is matthew
    }
}    