import React, { useContext, useEffect } from 'react';
import { AuthContext } from './contexts/AuthContext';
import ChatScreen from './screens/Chat';
import LoginScreen from './screens/Login';

const Main: React.FC = () => {
    const {isAuthenticated} = useContext(AuthContext);
    return isAuthenticated ? <ChatScreen/>:<LoginScreen/>;
}
    

export default Main;