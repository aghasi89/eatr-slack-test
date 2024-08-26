
import React from 'react';
import {SafeAreaView} from 'react-native';

import { ChatContextProvider } from './src/contexts/ChatContext';
import AuthContextProvider from './src/contexts/AuthContext';
import Main from './src/Main';
import './global.css';


function App(): React.JSX.Element {
  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <SafeAreaView className='flex-1 pt-[16]'>
          <Main/>
        </SafeAreaView>
      </ChatContextProvider>
    </AuthContextProvider>
  );
}


export default App;
