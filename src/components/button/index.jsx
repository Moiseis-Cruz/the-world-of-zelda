import React from "react";

const Button = ({ onClick, disabled, label }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;