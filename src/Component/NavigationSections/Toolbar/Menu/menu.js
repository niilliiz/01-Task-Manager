import React from "react";
import Classes from "./menu.module.css";

const menu = ({ menuClicked }) => {
  return (
    <div className={Classes.Menu} onClick={menuClicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default menu;
