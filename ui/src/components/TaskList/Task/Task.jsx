import TaskAction from "./TaskAction"
import {Link} from "react-router-dom";

export default function Task (props) {
    return (
        <section className="d-flex align-items-center justify-content-evenly border-bottom pb-5">
            <div>
                <input type="checkbox" name="" id="" />
            </div>
            <Link to={`tasks}`}>{props.task}</Link>
        <TaskAction />
        </section>
    )

}