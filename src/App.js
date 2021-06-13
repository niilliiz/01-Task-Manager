import React, { Component } from "react";
import Classes from "./App.module.css";
import Layout from "./Component/Layout/layout";

import TaskManager from "./Container/TaskManager/taskManager";

class App extends Component {
  render() {
    return (
      <div className={Classes.App}>
        <Layout>
          <TaskManager />
        </Layout>
      </div>
    );
  }
}

export default App;
