import {Link } from "react-router-dom";

const TaskHeader = () => {
  return (
    <section className="p-5 pt-3 ">
      <article className="d-flex align-items-center d-flex justify-content-evenly">
        <div>
          <h3>Task List</h3>
        </div>
        <div className="">
          <input type="checkbox" className="" />
          <span className="p-2">Show All</span>
        </div>
        <Link to="tasks/add" className="btn btn-success ml-5">
          Add Task
        </Link>
      </article>
    </section>
  );
};

export default TaskHeader;
