import { useState } from "react";

import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {
    value: email,
    isEdit: isEmailEdit,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
  } = useInput("");
  const {
    value: pwd,
    isEdit: isPwdEdit,
    handleInputChange: handlePwdChange,
    handleInputBlur: handlePwdBlur,
  } = useInput("");

  const handleSumit = (event) => {
    event.preventDefault();
    if (invalidEmail || invalidPwd) {
      console.log("invalid");
      return;
    }
    console.log(email, pwd);
  };

  //매 입력마다 유효성 검사 or util 사용 가능
  const invalidEmail = isEmailEdit && !email.includes("@");
  const invalidPwd = isPwdEdit && pwd.trim().length < 6;

  return (
    <form onSubmit={handleSumit}>
      <h2>Login</h2>
      <div className="control-row">
        <Input
          id="email"
          type="email"
          name="email"
          value={email}
          isInvalid={invalidEmail}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          required
        />
        <Input
          id="pwd"
          type="password"
          name="pwd"
          value={pwd}
          isInvalid={invalidPwd}
          onChange={handlePwdChange}
          onBlur={handlePwdBlur}
          required
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
