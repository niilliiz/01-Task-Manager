import React, { Component } from "react";
import Toolbar from "../NavigationSections/Toolbar/toolbar";
import AuthContext from "../../Context/context";
import Classes from "./layout.module.css";
import TaskManager from "../../Container/TaskManager/taskManager";

class layout extends Component {
  state = {
    showSideDrawer: false,
    inbox: 0,
    completed: 0,
  };
  closingSideBarHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sidBarToggleHandler = () => {
    console.log("sidebar");
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  toDoListHandler = () => {
    let newCount = this.state.inbox + 1;

    this.setState({ inbox: newCount });
  };
  toBeDoListHandler = () => {
    let toDoCound = this.state.inbox - 1;
    let isDoCound = this.state.completed + 1;

    this.setState({ inbox: toDoCound, completed: isDoCound });
  };

  render() {
    return (
      <div className={Classes.Layout}>
        <AuthContext.Provider
          value={{ inbox: this.state.inbox, completed: this.state.completed }}
        >
          <Toolbar
            menuClicked={this.sidBarToggleHandler}
            showSideBar={this.state.showSideDrawer}
            closingSideBar={this.closingSideBarHandler}
          />
        </AuthContext.Provider>

        <div className={Classes.Container}>
          <TaskManager
            isDoing={this.toDoListHandler}
            toBeDon={this.toBeDoListHandler}
          />
        </div>
      </div>
    );
  }
}

export default layout;
