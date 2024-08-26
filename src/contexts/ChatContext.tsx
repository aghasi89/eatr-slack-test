import { createContext, FC, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import storage from "../utils/stogare";
import { ChatContextType, MessageType } from "../utils/types";

const ChatContext = createContext<ChatContextType>({
    messages: [],
    sendMessage: () => {},
    reply: null,
    setReply: () => {},
});
export const ChatContextProvider = ({children}:{children:React.ReactNode})=>{
    
    const {currentUser} = useContext(AuthContext);
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [reply, setReply] = useState<MessageType | null>(null);
    useEffect(()=>{
        storage.getItem<MessageType[]>('messages').then((messages)=>{
            if(messages){
                for(let i=0;i<messages.length;i++){
                    messages[i].body.children = [];
                    if(messages[i].parent){
                        const parentIndex = messages.findIndex((m)=>m.id===messages[i].parent);           
                        if(parentIndex>-1){
                            messages[parentIndex].body.children.push(messages[i]);
                            messages[i].body.replyOf = messages[parentIndex].body.message;
                        }
                    }
                }
                setMessages(messages)
            }else{
                //setMessages([]);
            }}).catch((e)=>{
                console.log(e)
            });
    },[]);
    const sendMessage = (message:string,id:number | null)=>{
        if(!currentUser) return;

        const newMessage:MessageType = {
            senderId:currentUser.id,
            date: new Date(),
            id:messages.length===0?1:(messages[messages.length-1].id+1),
            parent: id,
            body: {
                message:message,
                replyOf:null,
                children:[],
            },
        };
        const tmp = messages
        tmp.push(newMessage);       
        if(id!==null){
            const parentIndex = tmp.findIndex((m)=>m.id===id);           
            if(parentIndex>-1){
                tmp[parentIndex].body.children.push(newMessage);
            }
        }
                
        storage.setItem('messages',tmp);
        setMessages([...tmp]);
    };     
    
    return (
        <ChatContext.Provider value={{messages,sendMessage,reply,setReply}}>
            {children}
        </ChatContext.Provider>
    );
};

export default ChatContext;