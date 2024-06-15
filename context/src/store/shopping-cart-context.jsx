import { createContext, useReducer } from "react";

import { reducer } from "./reducer.jsx";

export const CartContext = createContext({
  items: [],
  onAddItemToCart: () => {},
  onUpdateItemQuantity: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [shoppingCart, shoppingCartDispatch] = useReducer(reducer, {
    items: [],
  });
  // const [shoppingCart, setShoppingCart] = useState({
  //   items: [],
  // });

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: { productId, amount },
    });
  }

  const ctxValue = {
    items: shoppingCart.items,
    onAddToCart: handleAddItemToCart,
    onUpdateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
};
