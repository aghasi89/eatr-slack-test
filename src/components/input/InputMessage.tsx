import React, { useContext } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SendIcon from "../../../assets/icons/send.png";
import ChatContext from '../../contexts/ChatContext';
import CloseIcon from '../../../assets/icons/close.png';
import { useProfile } from '../../hooks/useProfile';
import { InputMessageProps } from '../../utils/interfaces';



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
        <View className='flex-col'>
            {
                reply && <View className='flex-row justify-between items-center bg-[#f0f0f0] p-[4]'>
                    <View className='flex-row items-center gap-1'>
                        <View className='flex-row items-center'>
                            <Text className='font-bold text-[20px] text-black'>{`${replyUser?.username}:`}</Text>
                        </View>
                        <Text className='text-black'>{reply.body.message}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setReply(null)}>
                        <Image className='w-[20] h-[20]' source={CloseIcon}/>
                    </TouchableOpacity>
                </View>                        
            }
        <View className={`flex-row items-center bg-white border-t border-gray-300`}>
            <TextInput
                className={`flex-1 p-2`}
                placeholder={'Type a message'}
                value={message}
                onChangeText={handleInputChange}
            />
            <TouchableOpacity onPress={handleSubmit}>
                <View className={`p-4`}>
                <Image  className='w-[16] h-[16]' source={SendIcon}/>
                </View>
            </TouchableOpacity>
        </View>
        </View>
    );
};

export default InputMessage;