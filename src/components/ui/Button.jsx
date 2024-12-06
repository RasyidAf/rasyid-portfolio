import React from "react";

const Button = ({ btn, link, foto }) => {
  return (
    <button className="px-5 rounded-lg py-2 shadow-[5px_5px_20px_0px_rgba(255,_0,_0,_0.35)] bg-red-600 hover:bg-red-800">
      <a href={link} download={foto}>{btn}</a>
    </button>
  );
};

export default Button;
