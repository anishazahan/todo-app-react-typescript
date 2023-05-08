
import './todo.css'

type todoType= {
    todo:{
        id: number;
        title: string;
    };
    handleDeleteTodo: (id: number) => any;
}


const Todo = (props:todoType) => {
    const {handleDeleteTodo,todo} = props;
    // console.log(todo);
    const {id,title} = todo;

    const deleteTodo = (id:number)=>{
        handleDeleteTodo(id);
    }
   
  return (
    <div className='todo'>
        <h2>{id}</h2>
        <h2>{title}</h2>
        <div className="">
            <button onClick={()=>deleteTodo(id)} className='delete'>Delete</button>
        </div>
    </div>
  )
}

export default Todo