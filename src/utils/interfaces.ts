import { MessageBodyType, MessageType, UserType } from "./types";

export interface AuthContextProps {
    users:UserType[],
    currentUser:UserType|null,
    isAuthenticated: boolean;
    login: (email:string, username:string) => void;
    logout: () => void;
}
export interface IMessageHeaderProps {
    message:MessageType;
}
export interface IMessageBodyProps {
    body: MessageBodyType
}
export interface InputMessageProps {
  
}