import { createContext, useState } from "react";

export const ModalContext = createContext({
  isOepn: false,
  isCheckoutOpen: false,
  handleModalOpen: () => {},
  handleModalClose: () => {},
  handleCheckoutOpen: () => {},
});

export const ModalContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const handleCartOpen = () => {
    setIsCartOpen(true);
  };
  const handleCartClose = () => {
    setIsCartOpen(false);
  };
  const handleCheckoutOpen = () => {
    setIsCheckoutOpen(true);
  };

  const ctxValue = {
    isCartOpen: isCartOpen,
    isCheckoutOpen: isCheckoutOpen,
    handleCartOpen: handleCartOpen,
    handleCartClose: handleCartClose,
    handleCheckoutOpen: handleCheckoutOpen,
  };

  return (
    <ModalContext.Provider value={ctxValue}>{children}</ModalContext.Provider>
  );
};
