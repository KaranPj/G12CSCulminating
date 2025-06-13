class message {
    private messageId: string

    protected senderId: string

    private receiverId: string

    private time: Date

    private isPrivate : boolean

    protected roomId: string

    private edited: boolean

    private editedTimestamp: Date

    private deleted: string

    private isEncrypted: boolean

    public getContent(): string

    public setContent(content : string)

    public getTime(): Date

    public formatMessage(): string

    public getSenderId(): string

    public getRoomId(): string
}