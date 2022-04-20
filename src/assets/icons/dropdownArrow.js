import React from "react";

export const DropdownArrow = ({ color }) => {
  return (
    <svg
      width="18"
      height="9"
      viewBox="0 0 18 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L8.3415 7.42381C8.71852 7.75371 9.28148 7.75371 9.6585 7.42381L17 1"
        stroke={color === "blue" ? "#0c265c" : "#fff"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DropdownArrow;