import { useContext } from "react";
import TaskCard from "./TaskCard";
import { context } from "../context/TaskContext";



function Tasklist() {

  const { task } = useContext(context);
  if (task.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {task.map((task) => (
        <TaskCard key={task.id}  task={task}  />
      ))}
    </div >
  );
}

export default Tasklist;
