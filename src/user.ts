
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
    get getUserId() : string{
        return this._userID;
    }

    /**
     * Set the user Id
     */
    set setUserId(id : string) {
        id = this._userID;
    }

    /**
     * Get the username
     */
    get getUsername() : string{
        return this._username;
    }

    /**
     * Set the username
     */
    set setUsername(name : string) {
        name = this._username;
    }

    /**
     * Get the usernames colour
     */
    get getUsernameColour() {
        return this._usernameColour;
    }

    /**
     * Set the usernames colour
     */
    public setUsernameColour(colour : string){
        colour = this._usernameColour;
    }

    /**
     * Get the password
     */
    get getPassword() : string {
        return this._passwordHash;
    }

    /**
     * Set the password
     */
    set setPassword(password : string){
        if (password.length <= 10){
            password = this._passwordHash;
        }
        else{
            alert('Not A Valid Password');
        }
    }
}