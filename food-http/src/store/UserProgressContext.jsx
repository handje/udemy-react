import { createContext, useState } from "react";

export const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export const UserProgressContextProvider = ({ children }) => {
  const [progress, setProgress] = useState("");

  const showCart = () => {
    setProgress("cart");
  };
  const hideCart = () => {
    setProgress("");
  };
  const showCheckout = () => {
    setProgress("checkout");
  };
  const hideCheckout = () => {
    setProgress("");
  };
  const ctxValue = {
    progress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };
  return (
    <UserProgressContext.Provider value={ctxValue}>
      {children}
    </UserProgressContext.Provider>
  );
};
