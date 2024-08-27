import { Text, View } from "react-native";
import Message from "./Message";
import { FC } from "react";
import { IMessageBodyProps } from "../../utils/interfaces";
import tailwind from "twrnc";


const MessageBody: FC<IMessageBodyProps> = ({ body }) => {
    return <View style={tailwind`px-[4px] flex-co gap-[8px] mt-[16px]`}>
        {body.replyOf && <View style={tailwind`p-[5px] border-l-slate-500 border-l-[2px]`}>
            <Text style={tailwind`text-[12px] text-black`} numberOfLines={1}>{body.replyOf}</Text>
        </View>}
        <Text style={tailwind`text-[14px] font-normal text-black text-justify`}>
            {body.message}
        </Text>
        {body.children && <View style={tailwind`flex-col h-auto pl-[24px]`}>{body.children.map((child, index) => {
            return <Message key={index} message={child} />
        })}</View>}
    </View>;
}
export default MessageBody;