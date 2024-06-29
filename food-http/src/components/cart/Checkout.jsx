import React from "react";

import { Modal, Input } from "../commons";
import ButtonContainer from "./ButtonContainer";

const Checkout = () => {
  return (
    <Modal title="Checkout">
      <p>Total Amount</p>
      <form>
        <Input label="Full Name" name="name" />
        <Input label="E-Mail Address" />
        <Input label="Street" />
        <div className="control-row">
          <Input label="Postal Code" />
          <Input label="City" />
        </div>
        <ButtonContainer label="Submit Order" />
      </form>
    </Modal>
  );
};

export default Checkout;
