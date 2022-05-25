import { Link } from "react-router-dom";
export default function TaskAction(props) {
  return (
    <div className="d-flex align-items-center">
      <Link to={`tasks/edit/${props.taskId}`} className="btn btn-info">
        Edit
      </Link>

      <button
        type="button"
        className="btn btn-warning"
        onClick={() => props.handleDelete(props.taskId)}
      >
        Delete
      </button>
    </div>
  );
}
