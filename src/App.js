import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/form";
import TodoList from "./components/TodoList";
import Filter from "./components/filter";
import "./App.css";

const App = () => {
  // const  initialState =""

  //  const a =JSON.parse(localStorage.getItem("todos"))

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [filteredTodos, setFilteredTodos] = useState([]);

  //  useEffect(()=>{
  //   localStorage.setItem("todos",JSON.stringify(todos))

  // }, [todos])

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
    // getLocalTodos()
  }, [todos]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="container-fluid mainContainer p-2">
      <div className="app-wrapper  p-5">
        <div>
          <Header />
        </div>
        <div className="input-wrapper d-flex align-items-baseline">
          <div>
          
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          </div>
          <div>
            <Filter
              todos={todos}
              filteredTodos={filteredTodos}
              setFilteredTodos={setFilteredTodos}
            />
          </div>
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
