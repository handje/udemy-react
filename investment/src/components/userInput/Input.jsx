import React from "react";

const Input = ({ name, keyName, value, setValue }) => {
  return (
    <div>
      <label>{name}</label>
      <input
        type="number"
        value={value[keyName]}
        required
        onChange={(e) =>
          setValue((prev) => {
            return { ...prev, [keyName]: parseInt(e.target.value) };
          })
        }
      ></input>
    </div>
  );
};

export default Input;
