import React from "react";
import Classes from "./navItems.module.css";
import NavItem from "./NavItem//navItem";
import AuthContext from "../../../Context/context";

const navItems = () => {
  return (
    <div className={Classes.NavItems}>
      <AuthContext.Consumer>
        {(context) => <NavItem number={context.inbox} type="inbox" />}
      </AuthContext.Consumer>
      <AuthContext.Consumer>
        {(context) => <NavItem number={context.completed} type="completed" />}
      </AuthContext.Consumer>
      {/* <div></div> */}
    </div>
  );
};
export default navItems;
