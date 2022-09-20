import React, {useEffect} from "react";
import uuid from "react-uuid";
const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
 
    const onInputChange = (event) => {
    setInput(event.target.value);
  };
 
 const updateTodo= (title,id,completed)=>{
    const newTodo = todos.map ((todo)=> todo.id===id? {title,id,completed}:todo
    )
    setTodos(newTodo)
    setEditTodo("")
 }
 useEffect(()=>{
    if(editTodo){
        setInput(editTodo.title)

    }
    else{
        setInput("")
    }
 },[setInput,editTodo])

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("going");
    if (!editTodo) {
      setTodos([...todos, { id: uuid(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  console.log("form.hx");
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo"
        className="task-input m-1 p-2"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
      {editTodo?"OK":"Add"}
    {/* 25:02 */}
      </button>
    </form>
  );
};
export default Form;
