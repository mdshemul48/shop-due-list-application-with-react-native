import React from "react";
import { ScrollView } from "react-native";
import { NativeBaseProvider } from "native-base";

import { ContextProvider } from "./store/context";

import Header from "./components/Header";
import Item from "./components/Item";
import Entry from "./components/Entry";
const App = () => {
  return (
    <ContextProvider>
      <NativeBaseProvider>
        <Header />
        <ScrollView>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </ScrollView>
        <Entry />
      </NativeBaseProvider>
    </ContextProvider>
  );
};

export default App;
