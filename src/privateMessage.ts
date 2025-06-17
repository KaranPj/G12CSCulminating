export class PrivateMessage {
    private recipientId: string;
    private isRead: boolean;
    private readTime: Date;

    constructor(recipientId: string) {
        this.recipientId = recipientId;
        this.isRead = false;
        this.readTime = new Date(0);
    }

    public get RecipientId(): string {
        return this.recipientId;
    }

    public get ReadStatus(): boolean {
        return this.isRead;
    }

    public get ReadTime(): Date {
        return this.readTime;
    }

    public set Read(isRead: boolean) {
        this.isRead = isRead;
        if (isRead) {
            this.readTime = new Date();
        } else {
            this.readTime = new Date(0);
        }
    }
}