import TaskAction from "./TaskAction"
import {Link} from "react-router-dom";
import { useState } from "react";

export default function Task (props) {
    const[task, setTask]= useState({completed: false});
    const handleChange = (e) => {
        if(e.target.checked === false){
            setTask({ completed: false });
        }else {
            setTask({ completed: true });
        }
    }
    return (
        
        <section className="d-flex align-items-center justify-content-evenly border-bottom pb-5">
            <div>
                <input type="checkbox" onChange={(e)=>handleChange(e)} />
            </div>
            <Link to={`tasks}`}>{props.task}</Link>
            {task.completed ? "" : <TaskAction /> }
        
        </section>
    )

}