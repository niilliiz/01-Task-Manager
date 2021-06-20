import React, { Component } from "react";
import Button from "./Button/button";
import { v4 } from "uuid";
import Classes from "./inputTask.module.css";
import AuthContext from "../../../Context/context";
import axios from "../../../axios.orders";

class InputSection extends Component {
  state = {
    title: false,
  };
  newTask = {};
  inputHandler = (e, type) => {
    this.newTask[type] = e.target.value;
    this.newTask.id = v4();
    this.setState({ title: true });
  };
  componentDidMount() {
    axios
      .get("https://to-do-list-a984b-default-rtdb.firebaseio.com/tasks.json")
      .then((res) => (this.newTask = res.data));
    console.log(this.newTask);
  }

  render() {
    return (
      <div className={Classes.InputSection}>
        <input
          className={Classes.InputTitle}
          type="text"
          placeholder="Add Title: e.g., design meeting at 11am"
          onChange={(e) => this.inputHandler(e, "title")}
        />

        <div className={Classes.InputTask_button}>
          <AuthContext.Consumer>
            {(context) => (
              <Button
                disabled={!this.state.title}
                clicked={context.updatingTask}
                newTask={this.newTask}
                type="Add"
              >
                Add Task
              </Button>
            )}
          </AuthContext.Consumer>

          <AuthContext.Consumer>
            {(context) => (
              <Button
                clicked={context.cancelingAddinTask}
                newTask={this.newTask}
                type="Cancel"
              >
                Cancel
              </Button>
            )}
          </AuthContext.Consumer>
        </div>
      </div>
    );
  }
}

export default InputSection;

// COLORBTN = ["Gray", "Green", "Yellow", "Red", "Blue"].map((clr) => (
//   <button
//     className={[Classes.Button, Classes[clr]].join(" ")}
//     key={clr}
//     onClick={(e) => this.colorHandler(e, clr)}
//   />
// ));

// colorHandler = (e, clr) => {
//   switch (clr) {
//     case "Red":
//       this.newTask["color"] = "red";
//       break;
//     case "Yellow":
//       this.newTask["color"] = "yellow";
//       break;
//     case "Blue":
//       this.newTask["color"] = "blue";
//       break;
//     case "Green":
//       this.newTask["color"] = "green";
//       break;
//     case "Gray":
//       this.newTask["color"] = "gray";
//       break;
//     default:
//       this.newTask["color"] = "";
//   }
// };
// componentDidUpdate() {
//   // console.log(this.props.tasks);
// }
