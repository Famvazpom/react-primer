import React, { useContext } from "react";
import { context } from "../context/TaskContext";


function TaskCard({ task }) {
  const { deleteTask } = useContext(context);
  return (
    <div className="bg-gray-800 text-white text-center m-2 rounded-md">
      <h1 className="capitalize ">{task.titulo}</h1>
      <span className="text-sm">{task.descripcion}</span>
      <button onClick={() => deleteTask(task.id)}> Eliminar </button>
    </div>
  );
}

export default TaskCard;
