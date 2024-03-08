import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import "./App.css";


function App(props) {
  const taskList = props.tasks?.map((task) => 
    <Todo 
      id={task.id}
      name={task.name} 
      completed={task.completed}
      key={task.id}
    />
  );


  function addTask(name) {
    alert(name);
  }



  let filter = "All";

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


        <h2 id="list-heading">3 tasks remaining</h2>
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