
export class user{
    // variable for user idenification
    private _userID : string;

    // variable for username
    private _username : string = document.getElementById('username');

    // variable for users colour
    private _usernameColour : string;

    // variable for users password
    private _passwordHash : string = document.getElementById('password');

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

    /**
     * Get the user Id
     */
    public get UserId() : string{
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