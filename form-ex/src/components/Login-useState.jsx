import { useState } from "react";

import Input from "./Input";
//import {isEmail,isNotEmpty,hasMinLength} from "../util/validation.js"

export default function Login() {
  /*1.개별로 관리
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPwd, setEnteredPwd] = useState("");
  const handleInputEmailChange = (event) => {
    setEnteredEmail(event.target.value);
  };
  const handleInputPwdChange = (event) => {
    setEnteredPwd(event.target.value);
  };
  */
  // 2.하나의 객체로 관리
  const [enteredInputs, setEnteredInputs] = useState({
    email: "",
    pwd: "",
  });
  const [editInput, setEditInput] = useState({
    email: false,
    pwd: false,
  });

  const handleInputChange = (identifier, value) => {
    setEnteredInputs((prev) => ({ ...prev, [identifier]: value }));
    setEditInput((prev) => ({ ...prev, [identifier]: false }));
  };

  const handleInputBlur = (identifier) => {
    setEditInput((prev) => ({
      ...prev,
      [identifier]: true,
    }));
  };
  const handleSumit = (event) => {
    event.preventDefault();
    if (invalidEmail || invalidPwd) {
      console.log("invalid");
      return;
    }
    console.log(enteredInputs);
  };

  //매 입력마다 유효성 검사
  const invalidEmail = editInput.email && !enteredInputs.email.includes("@");
  const invalidPwd = editInput.pwd && enteredInputs.pwd.trim().length < 6;
  return (
    <form onSubmit={handleSumit}>
      <h2>Login</h2>
      <div className="control-row">
        <Input
          id="email"
          type="email"
          name="email"
          value={enteredInputs.email}
          isInvalid={invalidEmail}
          onChange={(e) => {
            handleInputChange("email", e.target.value);
          }}
          onBlur={() => {
            handleInputBlur("email");
          }}
          required
        />
        <Input
          id="pwd"
          type="password"
          name="pwd"
          value={enteredInputs.pwd}
          isInvalid={invalidPwd}
          onChange={(e) => {
            handleInputChange("pwd", e.target.value);
          }}
          onBlur={() => {
            handleInputBlur("pwd");
          }}
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
