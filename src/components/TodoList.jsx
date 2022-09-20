import React from "react";
const TodoList = ({ todos, setTodos,setEditTodo }) => {
  let a="aaaa"
   
  const handleDelete= (currTodo)=>{
    console.log("entered handledelete")
    console.log(currTodo.id)
    setTodos(todos.filter((todo)=>todo.id!==currTodo.id))
  }
  const handleEdit= (currTodo)=>{
    console.log("entered handleedit")
    console.log(currTodo.id)
    const foundTodo = todos.find ((todo)=> todo.id===currTodo.id)
    setEditTodo(foundTodo)


  }
  const handleDone= (currTodo)=>{
    console.log("entered handleDone")
    setTodos(
    todos.map((todo)=>{
      console.log(todo)
      if(currTodo.id === todo.id)  {return {...todo,completed: !todo.completed } }
      console.log(todo)
      return todo;

    }))

  }
 
  return (
   
   
    <div>

      {todos.map((todo,i) => (         
      <li className="todo-list" key={todo.id} >
         <input type="text" value={todo.title} className="list-item" onChange={(event)=> event.preventDefault()}/>
          <div>
<button className="button-complete task-button" onClick={()=>{handleDone(todo)}}>
  <i className="fa fa-check-circle"></i>
</button>
<button className="button-edit task-button" onClick={()=>{handleEdit(todo)}}>
  <i className="fa fa-edit"></i>
</button>
<button className="button-delete task-button" onClick={()=>{handleDelete(todo)}}>
  <i className="fa fa-trash"></i>
</button>
          </div>
        </li>

        
            // console.log(todo.title)
          

      ))}

    </div>
  );
};
export default TodoList;
