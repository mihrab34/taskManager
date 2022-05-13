import {Link} from 'react-router-dom';
export default function TaskAction(props) {
  
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Button group with nested dropdown"
    >
      <div className="btn-group" role="group">
        <button
          id="btnGroupDrop1"
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></button>
        <ul className="dropdown-menu " aria-labelledby="btnGroupDrop1">
          <li className="p-2">
            <Link to={`tasks/edit/${props.taskId}`} className="btn btn-primary">
              Edit
            </Link>
          </li>
          <li className="p-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => props.handleDelete(props.taskId)}
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
