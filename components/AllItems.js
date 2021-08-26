import React, { useContext } from "react";
import { NativeBaseProvider } from "native-base";

import dueContext from "../store/context";

import Item from "./Item";

const AllItems = () => {
  const { allEntry } = useContext(dueContext);
  return (
    <NativeBaseProvider>
      {allEntry.map((item) => (
        <Item item={item} key={item.time} />
      ))}
    </NativeBaseProvider>
  );
};

export default AllItems;
