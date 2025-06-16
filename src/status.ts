class Status{
    private _code : string;
    private _description : string;
    private _lastUpdated : Date;

    public getCode() : string{
      return this._code
    };
    public setCode(code : string){
        this._code = code;
    };
    public getDescription() : string{
        return this._description
    };
    public setDescription(description: string){
        this._description = description
    };
    public getLastUpdate() : Date{
        return this._lastUpdated
    };
    public setLastUpdate(lastUpdate : Date){
        this._lastUpdated = lastUpdate;
    };
}