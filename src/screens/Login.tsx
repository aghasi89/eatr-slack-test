import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import tailwind from 'twrnc';

const LoginScreen = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = React.useState('');
    const [username, setusername] = React.useState('');

    const handleLogin = () => {
        if(email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/) === null){
            Alert.alert('Invalid Email');
            return;
        }
        if(username.length < 3){
            Alert.alert('Username must be at least 3 characters');
            return;
        }
        if(email !== '' || username !== ''){
            login(email, username);
        }
    };

    return (
        <View style={tailwind`flex-1 justify-center items-center`}>
            <Text style={tailwind`text-2xl font-bold mb-4`}>Login</Text>
            <TextInput
                style={tailwind`w-64 h-10 border border-gray-300 rounded px-2 mb-2`}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={tailwind`w-64 h-10 border border-gray-300 rounded px-2 mb-4`}
                placeholder="User Name"
                value={username}
                onChangeText={setusername}
            />
            <TouchableOpacity
                
                onPress={handleLogin}
            >
                <View style={tailwind`bg-blue-500 rounded px-4 py-2`}>
                <Text style={tailwind`text-white text-center`}>Login</Text>
                </View>
                
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;