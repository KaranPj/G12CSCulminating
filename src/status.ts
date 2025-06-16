class Status{
    private _code : string;
    private _description : string;
    private _lastUpdated : Date;

    public get Code() : string{
      return this._code
    };
    public set Code(code : string){
        this._code = code;
    };
    public get Description() : string{
        return this._description
    };
    public set Description(description: string){
        this._description = description
    };
    public get LastUpdate() : Date{
        return this._lastUpdated
    };
    public set LastUpdate(lastUpdate : Date){
        this._lastUpdated = lastUpdate;
    };
}