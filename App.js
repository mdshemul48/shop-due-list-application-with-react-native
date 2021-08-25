import React from "react";
import { ScrollView } from "react-native";
import { NativeBaseProvider } from "native-base";

import Header from "./components/Header";
import Item from "./components/Item";
import Entry from "./components/Entry";
const App = () => {
  return (
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
  );
};

export default App;
