const TaskForm = (props) => {
  console.log(props);
  return (
    <form className="pt-5">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Task Date
        </label>
        <input
          type="date"
          className="form-control"
          id="exampleFormControlInput1"
          
        />
      </div>
      <div className="mb-3">
        <label for="task" className="form-label">
          Task
        </label>
        <input
          type="text"
          className="form-control"
          id="task"
          placeholder="Task"
        />
      </div>
      <div className="mb-3">
        <label for="note" className="form-label">
          Note
        </label>
        <textarea
          className="form-control"
          id="note"
          rows="3"
        ></textarea>
      </div>
      {props.action === 'edit' || props.action === 'add'? <button type="submit" className="btn btn-success">Save</button> : ""}
    </form>
  );
};

export default TaskForm;
