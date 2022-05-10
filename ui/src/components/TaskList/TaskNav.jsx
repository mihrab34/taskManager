const TaskNav = () => {
  return (
    <nav className="pt-5">
      <ul className="nav justify-content-center align-items-center">
        <li className="nav-item border border-secondary">
          <button type="button" className="btn btn-light btn-lg ">
            Yesterday
          </button>
        </li>
        <li className="nav-item border border-secondary ">
          <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Date
            </span>
            <input
              type="date"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>
        </li>
        <li className="nav-item border border-secondary">
          <button type="button" className="btn btn-light btn-lg ">
            Tomorrow
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default TaskNav;
