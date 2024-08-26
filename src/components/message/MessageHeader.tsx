import moment from "moment";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import replyIcon from "../../../assets/icons/reply.png";
import { FC, useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
import { useProfile } from "../../hooks/useProfile";
import { IMessageHeaderProps } from "../../utils/interfaces";

const MessageHeader:FC<IMessageHeaderProps> = ({message}) => {
    const {setReply} = useContext(ChatContext);
    const user = useProfile(message.senderId)
    const handleReply = ()=>{
        setReply(message);
    }

    const data = new Date();
    return <View  className="w-full bg-[#dad6d6] p-[6] flex-row  justify-between items-center gap-[4]">
        <View className="flex-row items-center">
        <View className="w-[40] h-[40] p-[3] bg-white rounded-full mr-[8]">
            {user?.avatar && <Image className="w-full h-full" source={{uri:user?.avatar}}></Image>}
        </View>
        <View className="flex-row gap-[4] items-baseline "><Text className="font-bold text-[20px] text-black" >{user?.username}</Text><Text>{`${moment(data).format("DD.MM.YY")} в ${moment(data).format("hh:mm")}`}</Text></View>
        </View>
        <TouchableOpacity onPress={handleReply} className="p-[6]"><Image className="w-[20] h-[20]" source={replyIcon}/></TouchableOpacity>
    </View>;
}

export default MessageHeader;