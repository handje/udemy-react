import React, { useState } from "react";

export const useInput = (defaultValue) => {
  const [enteredInput, setEnteredInput] = useState(defaultValue);
  const [editInput, setEditInput] = useState(false);

  const handleInputChange = (e) => {
    setEnteredInput(e.target.value);
    setEditInput(false);
  };

  const handleInputBlur = () => {
    setEditInput(true);
  };
  return {
    value: enteredInput,
    handleInputChange,
    handleInputBlur,
    isEdit: editInput,
  };
};
