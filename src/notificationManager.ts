<<<<<<< HEAD
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
=======
class notificationManager {
    private permission: string

    public requestPermission(): void

    public sendNotification(message: Message): void
>>>>>>> 09bf09802d417da25d2fe4882175b5d56e570a6c
}