import TaskAction from "./TaskAction"
import {Link} from "react-router-dom";

export default function Task (props) {
    const handleChange = (checkbox) =>{
        // console.log(checkbox.target.checked);
        return checkbox.target.checked? <TaskAction /> : "";
    }
    return (
        <section className="d-flex align-items-center justify-content-evenly border-bottom pb-5">
            <div>
                <input type="checkbox" onChange={(e)=>handleChange(e)} />
            </div>
            <Link to={`tasks}`}>{props.task}</Link>
        <TaskAction />
        </section>
    )

}