
import React from 'react';
import {SafeAreaView} from 'react-native';

import { ChatContextProvider } from './src/contexts/ChatContext';
import AuthContextProvider from './src/contexts/AuthContext';
import Main from './src/Main';
import tw from 'twrnc';


function App(): React.JSX.Element {
  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <SafeAreaView style={tw`flex-1 pt-[16]`}>
          <Main/>
        </SafeAreaView>
      </ChatContextProvider>
    </AuthContextProvider>
  );
}


export default App;
