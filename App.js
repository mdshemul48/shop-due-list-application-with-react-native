import React from "react";
import { ScrollView } from "react-native";
import { NativeBaseProvider } from "native-base";

import { ContextProvider } from "./store/context";

import Header from "./components/Header";
import AllItems from "./components/AllItems";
import CreateEntry from "./components/CreateEntry";

const App = () => {
  return (
    <ContextProvider>
      <NativeBaseProvider>
        <Header />
        <ScrollView>
          <AllItems />
        </ScrollView>
        <CreateEntry />
      </NativeBaseProvider>
    </ContextProvider>
  );
};

export default App;
