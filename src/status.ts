export class Status {
    private _code: string;
    private _description: string;
    private _lastUpdated: Date;

    constructor(_code:string, _description: string, _lastUpdated: Date){
        this._code = _code;
        this._description = _description;
        this._lastUpdated = _lastUpdated
    }

    public get Code(): string {
        return this._code;
    }

    public set Code(code: string) {
        this._code = code;
    }

    public get Description(): string {
        return this._description;
    }

    public set Description(description: string) {
        this._description = description;
    }

    public get LastUpdate(): Date {
        return this._lastUpdated;
    }

    public set LastUpdate(lastUpdate: Date) {
        this._lastUpdated = lastUpdate;
    }
}