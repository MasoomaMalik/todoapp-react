import React from "react";
import TodoList from "./TodoList";

const Filter = ({todos,setTodos,filteredTodos,setFilteredTodos})=>{
    const HandleFilter = (e)=>{
        console.log("fileter handle ka andar")
        console.log(e.target.value)
        filteredTodos=[...todos]
        console.log("filteredTodos copycat")

        console.log(filteredTodos)
        switch (e.target.value)
        {
            case "all": setFilteredTodos(todos);
            case "completed":{  setFilteredTodos(filteredTodos.filter((todo)=>   
            todo.completed === true 
            ))
            console.log("filteredTodos")
            console.log(filteredTodos)
        // setTodos(filteredTodos)
      
        }
            case "uncompleted": { setFilteredTodos(filteredTodos.filter((todo)=>   
            todo.completed == false 
            ))
            setFilteredTodos(filteredTodos)
        
        }
        }
    //    todos.completed === true? setFilteredTodos(todos.filter(todo => todo.completed===true)):null

    }
    return (
<div>
    {/* <button onClick={()=>{




    }}></button> */}


<select className="select m-1" onChange={HandleFilter} >
{/* <option><i class="fa-solid fa-filter"></i> </option> */}
<option value="all" >All        </option>
<option value="completed" >completed        </option>
<option value="uncompleted"  >uncompleted        </option>
</select>
</div>
    )
}
export default Filter