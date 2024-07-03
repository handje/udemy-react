import { createContext, useReducer, useState } from "react";

import { cartReducer } from "./reducer";

export const CartContext = createContext({
  items: [],
  addFoodCount: (item) => {},
  removeFoodCount: (id) => {},
  clearCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  const handleAddFoodCount = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item,
    });
  };
  const handleRemoveFoodCount = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id,
    });
  };
  const handleClearCart = () => {
    dispatchCartAction({
      type: "CLEAR_CART",
    });
  };

  const cartContext = {
    items: cart.items,
    addFoodCount: handleAddFoodCount,
    removeFoodCount: handleRemoveFoodCount,
    clearCart: handleClearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
