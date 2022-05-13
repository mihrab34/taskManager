import TaskAction from "./TaskAction";
import { Link } from "react-router-dom";
import { useState } from "react";
import {  connectToApi } from "../../../lib/helper";

export default function Task (props) {
  const [task, SetTask] = useState(props.task);
  
  const handleChange = async(e, id) => {
    const response = await connectToApi("/tasks/" + id+"/toggle", "PUT", task)
    if(response.success) {
      SetTask(response.data)
    }
  };
  
    const { _id, task:title, completed} = task;
    return (
      <section className="d-flex align-items-center justify-content-evenly border-bottom pb-5">
        <div>
          <input type="checkbox" onChange={(e) => handleChange(e, _id)} checked={completed}  />
        </div>
        <Link to={`tasks/${_id}`}>{title}</Link>
        {completed ? "" : <TaskAction taskId={_id} handleDelete={props.handleDelete} />}
      </section>
    );
}
