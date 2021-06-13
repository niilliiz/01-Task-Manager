import React from "react";
import Task from "./Task/task";
import Classes from "./taskSection.module.css";
import AddTaskBtn from "../UI/AddTAsk/addTask.js";
import InputSection from "../AddTask/InputSection/InputSection";

const tasksSection = ({ addTask, tasks, taskCompleted, completedTask }) => {
  const eachTask = tasks.map((task) => (
    <Task key={task.id} task={task} taskCompleted={taskCompleted} />
  ));
  const doneTask = completedTask.map((task) => (
    <Task key={task.id} task={task} />
  ));

  // console.log(typeof task.id);
  return (
    <main className={Classes.TaskSection}>
      <div className={Classes.Task}>{eachTask}</div>
      {!addTask ? <AddTaskBtn /> : null}
      {addTask ? <InputSection /> : null}
      <div>{doneTask}</div>
      {/* <Task
        id={task.id}
        isDone={task.isDone}
        title={task.title}
        detail={task.detail}
        time={task.time}
        color={task.color}
        clicked={isDone}
      />{" "} */}
    </main>
  );
};

export default tasksSection;
