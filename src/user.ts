
export class user{
    // variable for user idenification
    private _userID : string;

    // variable for username
    private _username : string
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

    /**
     * Get the user Id
     */
    public get UserId() : string{
        return this._userID;
    }

    /**
     * Set the user Id
     */
    public set UserId(id : string) {
        id = this._userID;
    }

    /**
     * Get the username
     */
    public get Username() : string{
        return this._username;
    }

    /**
     * Set the username
     */
    public set Username(name : string) {
        name = this._username;
    }

    /**
     * Get the usernames colour
     */
    public get UsernameColour() {
        return this._usernameColour;
    }

    /**
     * Set the usernames colour
     */
    public set UsernameColour(colour : string){
        colour = this._usernameColour;
    }

    /**
     * Get the password
     */
    public  get Password() : string {
        return this._passwordHash;
    }

    /**
     * Set the password
     */
    public  set Password(password : string){
        if (password.length <= 10){
            password = this._passwordHash;
        }
        else{
            alert('Not A Valid Password');
        }
    }
    
}