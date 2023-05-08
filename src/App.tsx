
import './App.css'

import {useState} from 'react'
import Todos from './components/Todos'

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

function App() {

  const [todos, settodos] = useState(todosData)
  
  return (
    <>
      <Todos todos={todos}></Todos>
    </>
  )
}

export default App
