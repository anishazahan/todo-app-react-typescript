
import './App.css'

import {useState} from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

const todosData = [
  {
    id:1,
    title:"title-1"
  },
  {
    id:2,
    title:"title-2"
  },
  {
    id:3,
    title:"title-3"
  },
  {
    id:4,
    title:"title-4"
  },
  {
    id:5,
    title:"title-5"
  },
  {
    id:6,
    title:"title-6"
  }
]

type TodoType = {
  id:number;
  title:string;
}

function App() {

  const [todos, settodos] = useState(todosData)

  const handleDeleteTodo = (id:number)=>{
    // console.log(id);
    const filterData = todos.filter(todo=> todo.id !== id);
    settodos(filterData)
}

const handleAddNewTodo = (newTodo:TodoType)=>{
  // console.log(newTodo);
  settodos(prevTodos =>[...prevTodos,newTodo])
   
}
  
  return (
    <>
       <AddTodo handleAddNewTodo={handleAddNewTodo}></AddTodo>
      <Todos todos={todos} handleDeleteTodo={handleDeleteTodo}></Todos>
    </>
  )
}

export default App
