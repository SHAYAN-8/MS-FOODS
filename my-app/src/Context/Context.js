import React, { createContext, useContext } from "react";

export const Context = createContext({
  itemDetails: [],
  cartItems: [],
  productItem: {},
  addToCart: (obj) => {},
  dynamicPage: (obj) => {},
  removeFromCart: (id) => {},
  amountHandler: (type, id, amount) => {},
});

export const useItemArray = () => {
  return useContext(Context);
};

export const ItemProvider = Context.Provider;
