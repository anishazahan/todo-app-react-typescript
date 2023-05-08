import Todo from "./Todo";
import './todo.css'

type todosType= {
    todos:{
        id: number;
        title: string;
    }[]
}


const Todos = ({todos}:todosType) => {
    console.log(todos);
  return (
    <div className="todos">
      {
          todos.map(todo => < Todo key={todo.id} todo={todo}/>)
      }
    </div>
  )
}

export default Todos