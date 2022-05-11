import React, { Component} from 'react';
import TaskNav from "./TaskNav";
import TaskHeader from "./TaskHeader";
import Task from "./Task/Task";
import { withRouter, connectToApi } from "../../lib/helper";

class TaskList extends Component{
  state = {
    tasks: []
  };

  async componentDidMount () {
    const response = await connectToApi("/tasks");
    if(response.success){
      this.setState({tasks: response.data})
    }
  }
  render() {
    return (
      <>
        <TaskNav />
        <TaskHeader />
        {this.state.tasks.map((task) => (
          <Task 
            key={task._id}
            task={task}
          />
        ))}
      </>
    );
  }
  
};

export default TaskList;
