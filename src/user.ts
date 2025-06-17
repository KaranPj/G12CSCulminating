export class user {
    private _userID: string;
    private _username: string;
    private _usernameColour: string;
    private _passwordHash: string;
    private _status: string;
    private _socketId: string;
    private _contacts: user[];
    private _avatarUrl: string;
    private _lastActive: Date;

    constructor(userID: string, username: string, passwordHash: string) {
        this._userID = userID;
        this._username = username;
        this._passwordHash = passwordHash;
        this._usernameColour = '#000000';
        this._status = 'offline';
        this._socketId = '';
        this._contacts = [];
        this._avatarUrl = '';
        this._lastActive = new Date();
    }

    public get UserId(): string {
        return this._userID;
    }

    public set UserId(id: string) {
        this._userID = id;
    }

    public get Username(): string {
        return this._username;
    }

    public set Username(name: string) {
        this._username = name;
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