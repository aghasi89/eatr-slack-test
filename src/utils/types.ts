export type MessageBodyType = {
    message: string;
    replyOf: string | null;
    children: MessageType[];
};
export type MessageType = {
    id: number;
    parent: number | null;
    body: MessageBodyType;
    date?: Date;
    senderId: number;
}
export type UserType = {
    id: number;
    username: string;
    email: string;
    avatar: string;
};
export type ChatContextType = {
    messages: MessageType[];
    sendMessage: (message: string, id: number | null) => void;
    reply: MessageType | null;
    setReply: (message: MessageType | null) => void;
};