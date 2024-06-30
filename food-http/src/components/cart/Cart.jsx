import React, { useContext } from "react";

import { Button } from "../commons";
import { CartContext, ModalContext } from "../../store";

const Cart = () => {
  const { cart, total, addFoodCount, removeFoodCount } =
    useContext(CartContext);
  const { handleCartClose, handleCheckoutOpen } = useContext(ModalContext);
  return (
    <>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((food) => {
          return (
            <div className="cart-item" key={food.id}>
              <li>
                <p>{`${food.name} - ${food.count} x $${food.price}`}</p>
              </li>
              <div className="cart-item-actions">
                <button
                  onClick={() => {
                    removeFoodCount(food.id);
                  }}
                >
                  -
                </button>
                <p>{food.count}</p>
                <button
                  onClick={() => {
                    addFoodCount(food.id);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </ul>
      <p className="cart-total">${total <= 0 ? "0.00" : total.toFixed(2)}</p>
      <div className="modal-actions">
        <button className="text-button" onClick={handleCartClose}>
          Close
        </button>
        <Button onClick={handleCheckoutOpen}>Go to Checkout</Button>
      </div>
    </>
  );
};

export default Cart;
