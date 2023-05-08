import React from 'react'
import './todo.css'

type todoType= {
    todo:{
        id: number;
        title: string;
    }
}


const Todo = ({todo}:todoType) => {
    // console.log(todo);
   
  return (
    <div className='todo'>
        <h2>{todo.id}</h2>
        <h2>{todo.title}</h2>
        <div className="">
            <button>Edit</button>
            <button className='delete'>Delete</button>
        </div>
    </div>
  )
}

export default Todo