import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  addFoodCount: () => {},
  removeFoodCount: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(() => {
    const total = cart.reduce(
      (acc, curr) => acc + parseFloat(curr.price) * curr.count,
      0
    );
    return total;
  });

  const addFoodCount = (id, name, price) => {
    const updatedCart = [...cart];
    const updatedFoodIndex = cart.findIndex((x) => x.id === id);

    if (updatedFoodIndex === -1) {
      updatedCart.push({
        id,
        name,
        price,
        count: 1,
      });
      setTotal((prev) => prev + parseFloat(price));
    } else {
      updatedCart[updatedFoodIndex].count += 1;
      setTotal(
        (prev) => prev + parseFloat(updatedCart[updatedFoodIndex].price)
      );
    }

    setCart(updatedCart);
  };

  const removeFoodCount = (id) => {
    const updatedCart = [...cart];
    const updatedFoodIndex = cart.findIndex((x) => x.id === id);

    if (updatedFoodIndex !== undefined) {
      const current = updatedCart[updatedFoodIndex];
      if (current.count <= 1) {
        updatedCart.splice(updatedFoodIndex, 1);
      } else {
        current.count -= 1;
      }
      setTotal((prev) => prev - parseFloat(current.price));
    }

    setCart(updatedCart);
  };

  const ctxValue = {
    cart: cart,
    total: total,
    addFoodCount: addFoodCount,
    removeFoodCount: removeFoodCount,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
};
