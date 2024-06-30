import React, { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { ModalContext } from "../../store";
import { Cart, Checkout } from "./";

const Modal = () => {
  const dialog = useRef();
  const { isCartOpen, handleCartClose, isCheckoutOpen } =
    useContext(ModalContext);

  useEffect(() => {
    if (isCartOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isCartOpen]);

  return createPortal(
    <dialog ref={dialog} className="modal cart" onClose={handleCartClose}>
      <h2>{isCheckoutOpen ? "Checkout" : "Your Cart"}</h2>
      {isCheckoutOpen ? <Checkout /> : <Cart />}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
