import React, { Component } from "react";
import Aux from "../../HOC/AUX/aux";
// import Modal from "../../Component/UI/Modal/modal";
import TaskSection from "../../Component/TasksSection//tasksSection";
import AuthContext from "../../Context/context";

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      completedTask: [],
      addingTask: false,
      status: false,
    };
    this.updatingTaskHandler = this.updatingTaskHandler.bind(this);
  }

  addingTaskHandler = () => {
    this.setState({ addingTask: true });
  };
  cancelAddingTask = () => {
    this.setState({ addingTask: false });
  };
  updatingTaskHandler = (e, updatedtask) => {
    this.props.isDoing();

    const newTask = [...this.state.tasks, updatedtask];
    this.setState({ tasks: newTask, addingTask: false });
  };

  completeTaskHandler = (e, id) => {
    this.props.toBeDon();
    const oldTasks = this.state.tasks;
    const indexOfTask = oldTasks.findIndex((tsk) => tsk.id === id);
    oldTasks[indexOfTask].status = true;

    const completedList = [...this.state.completedTask, oldTasks[indexOfTask]];
    oldTasks.splice(indexOfTask, 1);
    this.setState({
      tasks: oldTasks,
      completedTask: completedList,
    });
  };

  componentDidUpdate() {
    console.log(this.state.tasks);
  }
  render() {
    return (
      <Aux>
        <AuthContext.Provider
          value={{
            showInputSection: this.addingTaskHandler,
            updatingTask: this.updatingTaskHandler,
            cancelingAddinTask: this.cancelAddingTask,
          }}
        >
          <TaskSection
            addTask={this.state.addingTask}
            tasks={this.state.tasks}
            taskCompleted={this.completeTaskHandler}
            completedTask={this.state.completedTask}
          />
        </AuthContext.Provider>
        {/* 
        <div>
          {this.state.tasks.map((task, i) => {
            return (
              <TaskSection
                task={task}
                key={i + task}
                isDone={this.doneTaskHandler}
              />
            );
          })}
        </div> */}
      </Aux>
    );
  }
}
export default TaskManager;

// eslint-disable-next-line no-lone-blocks

/* <Modal showModal={this.state.addingTask} cancelAdding={this.cancelAddingTask}>
  {this.state.addingTask &&
    {
      <InputSection
              updatingTask={this.updatingTaskHandler}
              cancelingTask={this.cancelAddingTask}
            /> 
    }}
</Modal>; */
