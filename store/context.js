import React, { createContext, useReducer } from "react";

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
      const foundedItem = state.allEntry[foundedItemIndex];

      return {
        ...state,
        allEntry: allEntry.splice(foundedItemIndex, 1),
        totalPrice: state.totalPrice - foundedItem.price,
      };
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
