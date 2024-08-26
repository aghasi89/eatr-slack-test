import { FC } from "react";
import { View } from "react-native";
import MessageHeader from "./MessageHeader";
import MessageBody from "./MessageBody";
import { MessageType } from "../../utils/types";
type Props = {
    message: MessageType;
  };
const Message :FC<Props> = ({message}) => {
    return (<View className="w-full rounded-sm overflow-hidden mb-[8]">
        <MessageHeader message={message}/>
        <MessageBody body={message?.body}/>
    </View>);
}
export default Message;