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
      // todo.className+=" comtrue"
      return todo;

    }))



  }
 
  return (
   
   
    <div>

      {todos.map((todo,i) => (    
        <div className="d-flex li-div">

      <li className="todo-list m-1 p-1" key={todo.id} >
         <input type="text" value={todo.title}  className= {`list ${todo.completed? "taskdone": "" } p-2`} onChange={(event)=> event.preventDefault()}/>
          
<button className="button-done task-button" onClick={()=>{handleDone(todo)}}>
  <i className="fa fa-check-circle"></i>
</button>
<button className="button-edit task-button" onClick={()=>{handleEdit(todo)}}>
  <i className="fa fa-edit"></i>
</button>
<button className="button-delete task-button" onClick={()=>{handleDelete(todo)}}>
  <i className="fa fa-trash"></i>
</button>
          
        </li>
        </div>

        
            // console.log(todo.title)
          

      ))}

    </div>
  );
};
export default TodoList;
