import React, { Component } from "react";
import TaskAction from "./TaskAction";
import { Link } from "react-router-dom";
// import { useState } from "react";


export default class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false,
    };
  }

  handleChange = (e) => {
    if (e.target.checked === false) {
      this.setState({ completed: false });
    } else {
      this.setState({ completed: true });
    }
  };
  render() {
    const { _id, task } = this.props.task;
    return (
      <section className="d-flex align-items-center justify-content-evenly border-bottom pb-5">
        <div>
          <input type="checkbox" onChange={(e) => this.handleChange(e)} />
        </div>
        <Link to={`tasks/${_id}`}>{task}</Link>
        {this.state.completed ? "" : <TaskAction />}
      </section>
    );
  }
}
