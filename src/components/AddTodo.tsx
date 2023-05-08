import React ,{useState}from 'react'
import './todo.css'

type TodoType = {
    id:number;
    title:string;
  }
  

type Props = {
    handleAddNewTodo:(newTodo: TodoType) => any;
}

const AddTodo = (props:Props) => {

 const [title, settitle] = useState<string>("");

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
            settitle(event.target.value)
    }

        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault(); 
            const newTodo = {id:new Date().getTime(),title}
            props.handleAddNewTodo(newTodo);
            settitle("");
        };


  return (
    <div className='addTodo'>

        <p>Add todo</p>
        <form onSubmit={handleSubmit} >
            <input className='titleField' type="text" placeholder='title' value={title} onChange={handleChange} required autoFocus/>
             <input className='input-btn' type="submit" value="Add Todo" />
        </form>
    </div>
  )
}

export default AddTodo