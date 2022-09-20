import React from "react";
import TodoList from "./TodoList";

const Filter = ({todos,filteredTodos,setFilteredTodos})=>{
    const filterHandle = ()=>{
        
    //    todos.completed === true? setFilteredTodos(todos.filter(todo => todo.completed===true)):null

    }
    return (
<div>
    <select>
        <option value="all">All        </option>
        <option value="completed">completed        </option>
        <option value="uncompleted">uncompleted        </option>
    </select>
</div>
    )
}
export default Filter