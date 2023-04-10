import React,{useState,useContext} from 'react'
import { context } from '../context/TaskContext'


function TaskForm() {

  const [title, setTitle] = useState("")
  const [descripcion, setDescripcion] = useState("")

  const taskcontext = useContext(context)

  const handlerSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      titulo: title,
      descripcion: descripcion,
      id: Math.random(),
    }
    taskcontext.createTask(newTask)
    setTitle("")
    setDescripcion("")
  }

  return (
    <form onSubmit={handlerSubmit}>
      <input value={title} onChange={  (e) => setTitle(e.target.value) } type="text" />
      <textarea value={descripcion} onChange={  (e) => setDescripcion(e.target.value) } />
      <button > Guardar </button>
    </form>
  )
}

export default TaskForm