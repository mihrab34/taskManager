import React, { Component } from "react";
import TaskHeader from "./TaskHeader";
import Task from "./Task/Task";
import { withRouter, connectToApi } from "../../lib/helper";

class TaskList extends Component {
  state = {
    tasks: [],
  };

  handleDelete = async (id) => {
    const response = await connectToApi("/tasks/" + id, "DELETE");
    if (response.success) {
      this.getTasks();
    }
  };

  getTasks = async () => {
    const response = await connectToApi("/tasks");
    if (response.success) {
      this.setState({ tasks: response.data });
    }
  };
  async componentDidMount() {
    this.getTasks();
  }
  render() {
    return (
      <main className="d-flex flex-column justify-content-center">
        {/* <TaskNav /> */}
        <TaskHeader />
        {this.state.tasks.map((task) => (
          <Task key={task._id} task={task} handleDelete={this.handleDelete} />
        ))}
      </main>
    );
  }
}

export default withRouter(TaskList);
