import Todo from "../components/Todo";
import { useState } from "react";


const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

// props.tasks == current list of tasks
function Tasks(props) {
    const [statusFilter, setStatusFilter] = useState("All");
    const [nameFilter, setNameFilter] = useState("");
    const [tasks, setTasks] = useState(props.TaskList);

    const nameFilterSearchBox = (
        <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            value={nameFilter}
            onChange={(event) => {setNameFilter(event.target.value)}}
        />
    );

    function updateStatusFilter(filter) { 
        setStatusFilter(filter);
    }

    const statusFilterOptions = FILTER_NAMES.map((name) => {
        <option
            value={name}
        >
            {name}
        </option>
    });

    const statusFilterDropdown = (
        <div>
           <select
                name="statusFilter" 
                onChange={(event) => {setStatusFilter(event.target.value)}}
           >
                {statusFilterOptions} 
            </select> 
        </div>
    );
        
    return (
        <>
            <div>
                {statusFilterDropdown}
                {nameFilterSearchBox}
            </div>
            
            <div>
                {tasks}
            </div>
        </>
    )
}


export default Tasks;