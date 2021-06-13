import React from "react";
import Classes from "./button.module.css";
const button = ({ type, clicked, newTask, children, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={[Classes.Button, Classes[type]].join(" ")}
      onClick={(e) => clicked(e, newTask)}
    >
      <strong>{children}</strong>
    </button>
  );
};

export default button;
