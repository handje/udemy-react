import React, { useContext } from "react";

import { Button, Input } from "../commons";
import { ModalContext } from "../../store";

const Checkout = () => {
  const { handleCartClose } = useContext(ModalContext);
  return (
    <>
      <p>Total Amount</p>
      <form>
        <Input label="Full Name" name="name" />
        <Input label="E-Mail Address" />
        <Input label="Street" />
        <div className="control-row">
          <Input label="Postal Code" />
          <Input label="City" />
        </div>
        <div className="modal-actions">
          <button className="text-button" onClick={handleCartClose}>
            Close
          </button>
          <Button>Submit Order</Button>
        </div>
      </form>
    </>
  );
};

export default Checkout;
