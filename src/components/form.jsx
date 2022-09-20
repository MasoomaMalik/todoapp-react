import React, { useEffect } from "react";
import uuid from "react-uuid";
const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

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

  const handleDeleteAll = () => {
    console.log("me reached")
    todos = [];
    setTodos(todos)
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
      <button className="button-add m-1" type="submit">
        {editTodo ? (
          <i class="fa-solid fa-check"></i>
        ) : (
          <i class="fa-solid fa-plus"></i>
        )}
        {/* 25:02 */}
      </button>
     
      <button
        className="button-delete-all task-button"
        onClick={() => {
          handleDeleteAll();
        }}
      >
        <i className="fa fa-trash"></i>
      </button>
    </form>
    
    
  );
};
export default Form;
