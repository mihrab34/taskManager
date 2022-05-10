export default function TaskAction() {
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
            <button type="button" className="btn btn-outline-primary">
              Edit
            </button>
          </li>
          <li className="p-2">
            <button type="button" className="btn btn-outline-danger">
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
