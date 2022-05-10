import TaskNav from "./TaskNav";
import TaskHeader from "./TaskHeader";
import Task from "./Task/Task";

const TaskList = () => {
  return (
    <>
      <TaskNav />
      <TaskHeader />
      <Task task="Task1" />
      <Task task="Task2" />
      <Task task="Task3" />
    </>
  );
};

export default TaskList;
