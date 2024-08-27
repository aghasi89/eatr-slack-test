import React, { useContext, useMemo, useState } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import InputMessage from '../components/input';
import Message from '../components/message';
import ChatContext from '../contexts/ChatContext';
import exitIcon from '../../assets/icons/exit.png';
import { AuthContext } from '../contexts/AuthContext';
import tailwind from 'twrnc';
const PAGE_SIZE = 25;
const ChatScreen: React.FC = () => {
    const { messages } = useContext(ChatContext);
    const { logout } = useContext(AuthContext);

    const [page, setPage] = useState(1);
    const paginationMessages = useMemo(() => {
        return messages.slice(0, page * PAGE_SIZE);
    }, [messages, page]);    
    
    return (<View style={tailwind`flex-col flex-1 w-full`}>
        <View style={tailwind`justify-end flex-row w-full bg-slate-300 mb-[8]`} >
            <TouchableOpacity onPress={logout} style={tailwind`p-[6]`}>
                <View style={tailwind`p-[6]`} >
                <Image source={exitIcon} />
                </View>
            </TouchableOpacity>
        </View>
        <FlatList
            style={tailwind`px-[8] flex-1`}
            data={paginationMessages.filter((message) => message.parent === null)}
            keyExtractor={(item) => {
                return item.id.toString();
            }}
            onEndReached={() => {
                setPage((prev) => prev + 1);

            }}
            renderItem={({ item }) => <Message message={item} />}
        />
        <InputMessage></InputMessage>
    </View>
    );
};

export default ChatScreen;