import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ title, children }) => {
  return createPortal(
    <dialog className="modal cart">
      <h2>{title}</h2>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
