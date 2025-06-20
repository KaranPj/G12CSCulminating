
export class user{
    // variable for user idenification
    private _userId : string;

    // variable for username
    private _userName : string;

    // variable for users colour
    private _usernameColour : string;

    // variable for users password
    private _passwordHash : string;

    // variable for user status
    private _status : string;

    // variable for the id of user - for socket chatting
    private _socketId : string;

    // variable for list of contacts a user has
    private _contacts : user[];

    // variable for avatar user chose
    private _avatarUrl : string;
    

    // variable for the last time the user was active
    private _lastActive : Date;

    constructor(_userId: string,
        _userName: string,
        _userNameColour: string,
        _passwordHash: string,
        _status: string, 
        _socketId: string, 
        _contacts: user[], 
        _avatarUrl: string, 
        _lastActive: Date){
        this._userId = _userId;
        this._userName = _userName;
        this._usernameColour = _userNameColour;
        this._passwordHash = _passwordHash;
        this._status = _status;
        this._socketId = _socketId;
        this._contacts = _contacts;
        this._avatarUrl = _avatarUrl;
        this._lastActive = _lastActive;
    }

    /**
     * Get the user Id
     */
    public get UserId() : string{
        return this._userId;
    }

    public set UserId(id: string) {
        this._userId = id;
    }

    public get Username(): string {
        return this._userName;
    }

    public set Username(name: string) {
        this._userName = name;
    }

    public get UsernameColour() {
        return this._usernameColour;
    }

    public set UsernameColour(colour: string) {
        this._usernameColour = colour;
    }

    public get Password(): string {
        return this._passwordHash;
    }

    public set Password(password: string) {
        if (password.length <= 10) {
            this._passwordHash = password;
        } else {
            throw new Error('Not A Valid Password');
        }
    }
}