import React, { useContext, useState } from "react";

import { Button, Input } from "../commons";
import { ModalContext } from "../../store";
import Success from "./Success";

const Checkout = () => {
  const { handleCartClose } = useContext(ModalContext);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckoutSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return <Success />;
  }

  return (
    <>
      <h2>Checkout</h2>
      <p>Total Amount</p>
      <form onSubmit={handleCheckoutSubmit}>
        <Input label="Full Name" name="name" />
        <Input label="E-Mail Address" />
        <Input label="Street" />
        <div className="control-row">
          <Input label="Postal Code" />
          <Input label="City" />
        </div>
        <div className="modal-actions">
          <button
            className="text-button"
            type="button"
            onClick={handleCartClose}
          >
            Close
          </button>
          <Button>Submit Order</Button>
        </div>
      </form>
    </>
  );
};

export default Checkout;
