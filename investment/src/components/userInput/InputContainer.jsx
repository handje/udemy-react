import React, { useState } from "react";
import Input from "./Input";
const INPUT_NAME = [
  "initialInvestment",
  "annualInvestment",
  "expectedReturn",
  "duration",
];
const InputContainer = ({ inputValue, setInputValue }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          name="INITIAL INVESTMENT"
          keyName="initialInvestment"
          value={inputValue}
          setValue={setInputValue}
        />
        <Input
          name="ANNUAL INVESTMENT"
          keyName="annualInvestment"
          value={inputValue}
          setValue={setInputValue}
        />
      </div>
      <div className="input-group">
        <Input
          name="EXPECTED RETURN"
          keyName="expectedReturn"
          value={inputValue}
          setValue={setInputValue}
        />
        <Input
          name="DURATION"
          keyName="duration"
          value={inputValue}
          setValue={setInputValue}
        />
      </div>
    </div>
  );
};

export default InputContainer;
