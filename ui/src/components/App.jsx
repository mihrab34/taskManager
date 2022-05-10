import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TaskList from "./TaskList/TaskList";
import TaskForm from './TaskForm';

function App() {
  return (
    <section className="row">
      <article className="col-md-6 offset-md-3 bg-light">
        <Router>
          <Switch>
            <Route path="/" exact>
              <TaskList />
            </Route>
            <Route path="/tasks" exact>
              <TaskList />
            </Route>
            <Route path="/tasks/add">
              <TaskForm action={"add"} />
            </Route>
            <Route path="/tasks/edit/:id">
              <TaskForm action={"edit"} />
            </Route>
            <Route path="/tasks/:id">
              <TaskForm action={""} />
            </Route>
          </Switch>
        </Router>
      </article>
    </section>
  );
}

export default App;
