import { useRef, useState } from "react";

export default function Login() {
  const email = useRef();
  const pwd = useRef();
  const [invalidEmail, setInvalidEmail] = useState(false);
  const handleSumit = (event) => {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPwd = pwd.current.value;

    if (!enteredEmail.includes("@")) {
      setInvalidEmail(true);
      return;
    }
    setInvalidEmail(false);
    console.log(enteredEmail, enteredPwd);
  };
  return (
    <form onSubmit={handleSumit}>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" ref={email} />
          <div className="control-error">
            {invalidEmail && <p>invalid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={pwd} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
