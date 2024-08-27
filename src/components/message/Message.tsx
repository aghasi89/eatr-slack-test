import { FC } from "react";
import { View } from "react-native";
import MessageHeader from "./MessageHeader";
import MessageBody from "./MessageBody";
import { MessageType } from "../../utils/types";
import tailwind from "twrnc";
type Props = {
    message: MessageType;
  };
const Message :FC<Props> = ({message}) => {
    return (<View style={tailwind`w-full rounded-sm overflow-hidden mb-[8px]`}>
        <MessageHeader message={message}/>
        <MessageBody body={message?.body}/>
    </View>);
}
export default Message;