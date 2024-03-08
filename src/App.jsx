import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);


  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }


  const taskList = tasks?.map((task) => (
    <Todo 
      id={task.id}
      name={task.name} 
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
    />
  ));


  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask])
  }


  let filter = "All";
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <>
      <div className="todoapp stack-large">
        <h1>To-Do App</h1>   

        <Form addTask={addTask}/>


        <div className="filters btn-group stack-exception">
          <FilterButton name="All" filter={filter}/>
          <FilterButton name="Active" filter={filter}/>
          <FilterButton name="Completed" filter={filter}/>
        </div>


        <h2 id="list-heading">{headingText}</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div> 
    </>
  )
}

export default App;