import React from "react";

import { Modal } from "../commons";
import ButtonContainer from "./ButtonContainer";

const Cart = () => {
  return (
    <Modal title="Your Cart">
      <ul className="cart-item">
        <li>
          <p>food - 1 x $19.99</p>
        </li>
        <div className="cart-item-actions">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
      </ul>
      <p className="cart-total">total</p>
      <ButtonContainer label="Go to Checkout" />
    </Modal>
  );
};

export default Cart;
