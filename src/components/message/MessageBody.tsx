import { Text, View } from "react-native";
import Message from "./Message";
import { FC } from "react";
import { IMessageBodyProps } from "../../utils/interfaces";


const MessageBody: FC<IMessageBodyProps> = ({ body }) => {
    return <View className="px-[4] flex-co gap-[8] mt-[16]">
        {body.replyOf && <View className="p-[5] border-l-slate-500 border-l-[2px]">
            <Text className="text-[12px] text-black" numberOfLines={1}>{body.replyOf}</Text>
        </View>}
        <Text className="text-[14px] font-normal text-black text-justify">
            {body.message}
        </Text>
        {body.children && <View className="flex-col h-auto pl-[24]">{body.children.map((child, index) => {
            return <Message key={index} message={child} />
        })}</View>}
    </View>;
}
export default MessageBody;