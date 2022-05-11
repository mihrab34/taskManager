import React, { Component } from 'react';
import {withRouter, connectToApi} from '../lib/helper';


class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task:{
        task: "",
        task_date: "",
        note: "",
        completed: false
      }
    }
  }

  handleChange =(event) => {
    const value = event.target.value;
    this.setState({...this.state, [event.target.name]:value})
  }

  getFullDate=(date)=> {
    const year = new Date(date).getFullYear();
    let month = new Date(date).getMonth();
    let day = new Date(date).getDate();
    if(day <= 9 ) {
       day = `0${day}`;
    }
    if (month <= 9) {
      month = `0${month + 1}`;
    }
    return `${year}-${month}-${day}`;
  } 

  async componentDidMount(){
    try {
      const { id } = this.props.router.params;
      // if(this.props.action === 'edit'){
        const response = await connectToApi("/tasks/" + id,);
        if (response.success) {
          const task = { ...this.state.task, ...response.data };
          this.setState({ task: task });
        // }
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const {task, task_date,note} = this.state.task;
    return (
      <form className="pt-5">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Task Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleFormControlInput1"
            name="task_date"
            onChange={(e) => this.handleChange(e)}
            value={this.getFullDate(task_date)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Task
          </label>
          <input
            type="text"
            className="form-control"
            id="task"
            placeholder="Task"
            name="task"
            onChange={(e) => this.handleChange(e)}
            value={task}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="note" className="form-label">
            Note
          </label>
          <textarea
            className="form-control"
            id="note"
            rows="3"
            name="note"
            onChange={(e) => this.handleChange(e)}
            value={note}
          ></textarea>
        </div>
        {this.props.action === "edit" || this.props.action === "add" ? (
          <button type="submit" className="btn btn-success">
            Save
          </button>
        ) : (
          ""
        )}
      </form>
    );
  }
  
};

export default withRouter(TaskForm);
