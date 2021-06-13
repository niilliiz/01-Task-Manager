import React from "react";
import Classes from "./toolbar.module.css";
import Menu from "./Menu/menu";
import ShowCase from "./ShowCase/showCase";
import SideBar from "../SideBar//sideBar";

const toolbar = ({ menuClicked, showSideBar, closingSideBar }) => {
  return (
    <header className={Classes.Toolbar}>
      <SideBar closingSideBar={closingSideBar} showSideBar={showSideBar} />
      <Menu menuClicked={menuClicked} />
      <ShowCase />
      {/* <div>+creat btn</div> */}
    </header>
  );
};

export default toolbar;
