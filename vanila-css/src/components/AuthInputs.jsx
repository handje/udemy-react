import { useState } from "react";
import style from "../styles/Form.module.scss";
export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id={style["auth-inputs"]}>
      <div className={style.controls}>
        <p>
          <label className={emailNotValid ? style.invalid : undefined}>
            Email
          </label>
          <input
            type="email"
            className={emailNotValid ? style.invalid : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label className={passwordNotValid ? style.invalid : undefined}>
            Password
          </label>
          <input
            type="password"
            className={passwordNotValid ? style.invalid : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </div>
      <div className={style.actions}>
        <button type="button" className={style["text-button"]}>
          Create a new account
        </button>
        <button className={style.button} onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}
