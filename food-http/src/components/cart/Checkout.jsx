import React, { useContext, useState } from "react";

import { Button, Input, Modal } from "../commons";
import Success from "./Success";
import { UserProgressContext, CartContext } from "../../store";
import { currencyFormatter } from "../../utils/formatting";
import { postOrderForm } from "../../utils/http";
import useHttp from "../../hooks/useHttp";
import Error from "../fallback/Error.jsx";
import Loading from "../fallback/Loading.jsx";

const requestConfig = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

const Checkout = () => {
  const { progress, hideCheckout } = useContext(UserProgressContext);

  const { items, clearCart } = useContext(CartContext);
  const total = items.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  const { data, isLoading, error, sendRequest, clearData } = useHttp(
    "http://localhost:3000/orders",
    requestConfig
  );
  // const handleCheckoutSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const data = Object.fromEntries(formData.entries());
  //   const postOrder = async () => {
  //     try {
  //       const response = await postOrderForm(items, data);
  //       console.log(response);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   postOrder();
  // };
  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: items,
          customer: data,
        },
      })
    );
  };
  const handleFinish = () => {
    hideCheckout();
    clearCart();
    clearData();
  };

  let actions = (
    <>
      <Button textOnly onClick={hideCheckout} type="button">
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );
  if (isLoading) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal open={progress === "checkout"} onClose={handleFinish}>
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes
        </p>
        <div className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      className="checkout"
      open={progress === "checkout"}
      onClose={hideCheckout}
    >
      <form onSubmit={handleCheckoutSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount : {currencyFormatter.format(total)}</p>
        <Input label="Full Name" id="name" type="text" />
        <Input label="E-Mail Address" id="email" type="email" />
        <Input label="Street" id="street" type="text" />
        <div className="control-row">
          <Input label="Postal Code" id="postal-code" type="text" />
          <Input label="City" id="city" type="text" />
        </div>
        {error && <Error title="Failed to submit order" msg={error} />}
        <div className="modal-actions">{actions}</div>
      </form>
    </Modal>
  );
};

export default Checkout;
