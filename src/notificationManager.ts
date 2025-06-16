
class NotificationManager {
    private _permission: string;

    constructor(){
        this._permission = "denied";
    }

    public requestPermission(): void{
        this._permission = "granted";
        console.log("Permission requested, set to: " + this._permission);
    }

    public sendNotification(message: Message): void{
        if (this._permission === "granted"){
            console.log("Notification sent: New message - " + message.getContent());
            
        }
        else{
            console.log("Can not send notification: Permission denied. Please request permission first.");
        }
    }
}