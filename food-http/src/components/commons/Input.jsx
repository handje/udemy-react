import React from "react";

const Input = ({ id, label, ...props }) => {
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} required {...props} />
    </div>
  );
};

export default Input;
