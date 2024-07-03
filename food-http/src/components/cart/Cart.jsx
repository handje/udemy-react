import React, { useContext } from "react";

import { Button, Modal } from "../commons";
import { CartContext, UserProgressContext } from "../../store";
import { currencyFormatter } from "../../utils/formatting";
import CartItem from "./CartItem";

const Cart = () => {
  const { items } = useContext(CartContext);
  const { progress, hideCart, showCheckout } = useContext(UserProgressContext);

  const total = items.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );
  return (
    <Modal
      className="cart"
      open={progress === "cart"}
      onClose={progress === "cart" ? hideCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </ul>
      <p className="cart-total">{currencyFormatter.format(total)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={hideCart}>
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={showCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
