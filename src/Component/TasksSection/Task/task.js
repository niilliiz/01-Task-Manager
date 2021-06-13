import React from "react";
import Classes from "./task.module.css";

const task = ({ task, taskCompleted }) => {
  let classes;
  if (task.status) {
    classes = "Completed";
  }
  console.log(task);
  return (
    <div className={[Classes.task_section, Classes[classes]].join(" ")}>
      <button
        disabled={task.status}
        className={Classes.task_completed}
        onClick={(e) => taskCompleted(e, task.id)}
      ></button>
      <p className={Classes.task_tite}>{task.title}</p>
      <button className={Classes.task_more}></button>
      <button className={Classes.task_important}></button>
    </div>
  );
};
export default task;
//  <div className={[Classes.Clr, Classes[color]].join(" ")}></div>
//         <div className={Classes.Title}>{title}</div>
//         <div className={Classes.Detail}>{detail}</div>
//         <div className={Classes.Time}>{time}</div>

//         <button className={Classes.IsDone} onClick={(e) => clicked(e, id)}>
//           <div className={Classes.fLine}></div>
//           <div className={Classes.sLine}></div>
//         </button>
