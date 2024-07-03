import React from "react";

const CustomButton = ({ children, textOnly, className, ...props }) => {
  const cssClasses = `${textOnly ? "text-button" : "button"} ${className}`;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
