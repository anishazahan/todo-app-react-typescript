import Todo from "./Todo";
import './todo.css'

type todosType= {
    todos:{
        id: number;
        title: string;
    }[];
    handleDeleteTodo: (id: number) => any;

}




const Todos = (props:todosType,) => {
    // console.log(props);
  return (
    <div className="todos">
      {
         props.todos.map(todo => < Todo key={todo.id} todo={todo} handleDeleteTodo={props.handleDeleteTodo}  />)
      }
    </div>
  )
}

export default Todos