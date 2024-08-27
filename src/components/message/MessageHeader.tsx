import moment from "moment";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import replyIcon from "../../../assets/icons/reply.png";
import { FC, useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
import { useProfile } from "../../hooks/useProfile";
import { IMessageHeaderProps } from "../../utils/interfaces";
import tailwind from "twrnc";

const MessageHeader:FC<IMessageHeaderProps> = ({message}) => {
    const {setReply} = useContext(ChatContext);
    const user = useProfile(message.senderId)
    const handleReply = ()=>{
        setReply(message);
    }

    const data = new Date();
    return <View  style={tailwind`w-full bg-[#dad6d6] p-[6px] flex-row  justify-between items-center gap-[4px]`}>
        <View style={tailwind`flex-row items-center`}>
        <View style={tailwind`w-[40px] h-[40px] p-[3px] bg-white rounded-full mr-[8px]`}>
            {user?.avatar && <Image style={tailwind`w-full h-full`} source={{uri:user?.avatar}}></Image>}
        </View>
        <View style={tailwind`flex-row gap-[4px] items-baseline`}><Text style={tailwind`font-bold text-[20px] text-black`} >{user?.username}</Text><Text>{`${moment(data).format("DD.MM.YY")} в ${moment(data).format("hh:mm")}`}</Text></View>
        </View>
        <TouchableOpacity onPress={handleReply} style={tailwind`p-[6px]`}><Image style={tailwind`w-[20px] h-[20px]`} source={replyIcon}/></TouchableOpacity>
    </View>;
}

export default MessageHeader;