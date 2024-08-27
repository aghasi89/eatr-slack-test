import React, { useContext } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SendIcon from "../../../assets/icons/send.png";
import ChatContext from '../../contexts/ChatContext';
import CloseIcon from '../../../assets/icons/close.png';
import { useProfile } from '../../hooks/useProfile';
import { InputMessageProps } from '../../utils/interfaces';
import tailwind from 'twrnc';



const InputMessage: React.FC<InputMessageProps> = () => {
    const {sendMessage,reply,setReply} = useContext(ChatContext);
    const [message, setMessage] = React.useState('');
    const replyUser  = useProfile(reply?.senderId)
    const handleInputChange = (text: string) => {
        setMessage(text);
    };

    const handleSubmit = () => {
        if (message.trim() !== '') {
            sendMessage(message,reply?reply.id:null);
            setMessage('');
            setReply(null);
        }
    };
    return (
        <View style={tailwind`flex-col`}>
            {
                reply && <View style={tailwind`flex-row justify-between items-center bg-[#f0f0f0] p-[4px]`}>
                    <View style={tailwind`flex-row items-center gap-1`}>
                        <View style={tailwind`flex-row items-center`}>
                            <Text style={tailwind`font-bold text-[20px] text-black`}>{`${replyUser?.username}:`}</Text>
                        </View>
                        <Text style={tailwind`text-black`}>{reply.body.message}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setReply(null)}>
                        <Image style={tailwind`w-[20px] h-[20px]`} source={CloseIcon}/>
                    </TouchableOpacity>
                </View>                        
            }
        <View style={tailwind`flex-row items-center bg-white border-t border-gray-300`}>
            <TextInput
                style={tailwind`flex-1 p-2`}
                placeholder={'Type a message'}
                value={message}
                onChangeText={handleInputChange}
            />
            <TouchableOpacity onPress={handleSubmit}>
                <View style={tailwind`p-4`}>
                <Image  style={tailwind`w-[16px] h-[16px]`} source={SendIcon}/>
                </View>
            </TouchableOpacity>
        </View>
        </View>
    );
};

export default InputMessage;