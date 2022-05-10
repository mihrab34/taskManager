import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TaskList from "./TaskList/TaskList";
import TaskForm from "./TaskForm";

function App() {
  return (
    <section className="row">
      <article className="col-md-6 offset-md-3 bg-light">
        <Router>
          <Routes>
            <Route path="/" exact element={<TaskList />} />
            <Route path="/tasks" exact element={<TaskList />} />
            <Route
              path="/tasks/add"
              element={<TaskForm action={"add"} />}
            />
            <Route
              path="/tasks/edit/:id"
              element={<TaskForm action={"edit"} />}
            />
            <Route
              path="/tasks/:id"
              element={<TaskForm action={""} />}
            />
          </Routes>
        </Router>
      </article>
    </section>
  );
}

export default App;
