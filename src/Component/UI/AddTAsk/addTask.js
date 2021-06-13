import React from "react";
import Classes from "./addTask.module.css";
import AuthContext from "../../../Context/context";

const addTask = () => {
  return (
    <AuthContext.Consumer>
      {(context) => (
        <div className={Classes.AddTaskBtn} onClick={context.showInputSection}>
          <div className={Classes.AddIcon}>
            <div className={Classes.fLine}></div>
            <div className={Classes.sLine}></div>
          </div>
          <span className={Classes.Label}>Add Task</span>
        </div>
      )}
    </AuthContext.Consumer>
  );
};

export default addTask;
