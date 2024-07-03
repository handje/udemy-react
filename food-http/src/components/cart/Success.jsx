import React, { useContext } from "react";

import { Button, Modal } from "../commons";
const Success = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <h2>Success!</h2>
      <p>Your order was submitted successfully.</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes
      </p>
      <div className="modal-actions">
        <Button onClick={onClose}>Okay</Button>
      </div>
    </Modal>
  );
};

export default Success;
