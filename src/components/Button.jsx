import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out ${styles}`}
  >
    Get Started
  </button>
);

export default Button;
