import React from "react";

function Button({ label, styles, handleBtnClick }) {
  return (
    <button
      className={`${styles} inline-flex items-center cursor-pointer hover:opacity-60 transition-all duration-300`}
    >
      {label}
    </button>
  );
}

export default Button;
