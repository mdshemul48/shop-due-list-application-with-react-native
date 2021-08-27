import React, { createContext, useReducer, useEffect } from "react";
import { AsyncStorage } from "react-native";

const dueContext = createContext({
  addEntry: (productName, price, option, date) => {},
  removeEntry: (id) => {},
  allEntry: [],
  totalPrice: 0,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "addEntry":
      return {
        ...state,
        allEntry: [action.entry, ...state.allEntry],
        totalPrice: state.totalPrice + action.entry.price,
      };

    case "removeEntry":
      const foundedItemIndex = state.allEntry.findIndex(
        (item) => item.id === action.id
      );
      const foundedItem = state.allEntry.splice(foundedItemIndex, 1)[0];
      return {
        ...state,
        totalPrice: state.totalPrice - foundedItem.price,
      };

    case "setData":
      return action.payload;
    default:
      throw new Error();
  }
};

export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    allEntry: [],
    totalPrice: 0,
  });

  const addEntry = (entry) => {
    dispatch({ type: "addEntry", entry });
  };

  const removeEntry = (id) => {
    dispatch({ type: "removeEntry", id });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await AsyncStorage.getItem("savedData");
      if (data) {
        const parsedData = JSON.parse(data);
        dispatch({ type: "setData", payload: parsedData });
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const setData = async () => {
      await AsyncStorage.setItem("savedData", JSON.stringify(state));
    };
    setData();
  }, [state]);
  return (
    <dueContext.Provider
      value={{
        addEntry,
        removeEntry,
        allEntry: state.allEntry,
        totalPrice: state.totalPrice,
      }}
    >
      {props.children}
    </dueContext.Provider>
  );
};

export default dueContext;
