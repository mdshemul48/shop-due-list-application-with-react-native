import React from 'react';
import {StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';

import Header from './components/Header';
const App = () => {
  return (
    <NativeBaseProvider>
      <Header />
    </NativeBaseProvider>
  );
};

export default App;
