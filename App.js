import React from 'react';
import {NativeBaseProvider} from 'native-base';

import Header from './components/Header';
import Item from './components/Item';
const App = () => {
  return (
    <NativeBaseProvider>
      <Header />
      <Item />
    </NativeBaseProvider>
  );
};

export default App;
