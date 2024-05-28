import React from "react";
import Input from "./Input";

const InputContainer = () => {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input name="INITIAL INVESTMENT" />
        <Input name="ANNUAL INVESTMENT" />
      </div>
      <div className="input-group">
        <Input name="EXPECTED RETURN" />
        <Input name="DURATION" />
      </div>
    </div>
  );
};

export default InputContainer;
