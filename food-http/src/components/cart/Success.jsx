import React, { useContext } from "react";

import { Button } from "../commons";
import { ModalContext } from "../../store";
const Success = () => {
  const { handleCartClose } = useContext(ModalContext);
  return (
    <>
      <h2>Success!</h2>
      <p>Your order was submitted successfully.</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes
      </p>
      <div className="modal-actions">
        <Button onClick={handleCartClose}>Okay</Button>
      </div>
    </>
  );
};

export default Success;
