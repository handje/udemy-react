import React from "react";

import { Button } from "../commons";

const ButtonContainer = ({ label }) => {
  return (
    <div className="modal-actions">
      <button className="text-button">Close</button>
      <Button>{label}</Button>
    </div>
  );
};

export default ButtonContainer;
