import React from "react";
import Classes from "./navItem.module.css";

const navItem = ({ type, number }) => {
  return (
    <button className={[Classes.navButton, Classes[type]].join(" ")}>
      <p className={[Classes.navLabel, Classes[type + "-label"]].join(" ")}>
        {type.toUpperCase()}

        <span>{number}</span>
      </p>
    </button>
  );
};

export default navItem;
