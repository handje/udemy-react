import React from "react";

const Input = ({ name }) => {
  return (
    <div>
      <label>{name}</label>
      <input type="number"></input>
    </div>
  );
};

export default Input;
