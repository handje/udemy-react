import React from "react";

const Input = ({ label, ...props }) => {
  return (
    <div className="control">
      <label>{label}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
