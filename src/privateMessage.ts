export class PrivateMessage {
  private recipientId: string;
  private isRead: boolean;
  private readTime: Date;

  constructor(recipientId: string) {
    this.recipientId = recipientId;     // Store the ID of the message recipient
    this.isRead = false;                // By default, the message is unread
    this.readTime = new Date(0);        // Default readTime is Unix epoch (not read yet)
  }

  // Return the ID of the message recipient
  public get RecipientId(): string {
    return this.recipientId;
  }

  // Return true if the message has been read
  public get ReadStatus(): boolean {
    return this.isRead;
  }

  // Return the time the message was read
  public get ReadTime(): Date {
    return this.readTime;
  }

  // Set the read status and update the read time if marked as read
  public set Read(isRead: boolean) {
    this.isRead = isRead;

    if (isRead) {
      this.readTime = new Date();      // Set to current time when marked as read
    } 
    else {
      this.readTime = new Date(0);     // Reset read time if marked as unread
    }
  }
}