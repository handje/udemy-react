import React from "react";

const Input = ({ id, isInvalid, ...props }) => {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{id}</label>
      <input id={id} {...props} />
      <div className="control-error">{isInvalid && <p>invalid {id}</p>}</div>
    </div>
  );
};

export default Input;
