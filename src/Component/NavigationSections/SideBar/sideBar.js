import React from "react";
import Classes from "./sideBar.module.css";

import Aux from "../../../HOC/AUX/aux";
import NavItems from "../NavItems/navItems";

const sideBar = ({ showSideBar, closingSideBar }) => {
  let sideBarClasses = [Classes.SideBar, Classes.Close];
  if (showSideBar) {
    sideBarClasses = [Classes.SideBar, Classes.Open];
  }
  return (
    <Aux>
      <div className={sideBarClasses.join(" ")}>
        <NavItems />
      </div>
    </Aux>
  );
};
export default sideBar;
