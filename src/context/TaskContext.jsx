import React, {createContext,useState,useEffect} from 'react'
import { tareas } from "../task";

export const context = createContext()

export function TaskContextProvider(props) {

    const [task, setTask] = useState([]);
    useEffect(() => {
      setTask(tareas);
    }, []);
  
    function createTask(newTask) {
      setTask([...task, newTask]);
    }
  
    function deleteTask(id) {
      const newTask = task.filter((task) => task.id !== id);
      setTask(newTask);
    }

  return (
    <context.Provider value= {{
        task: task,
        createTask: createTask,
        deleteTask: deleteTask
        
    }} >
         {props.children}
    </context.Provider>
  )
}
