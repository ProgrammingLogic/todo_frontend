import Todo from "./components/Todo";
import Form from "./components/Form";
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


  return (
    <>
      <div className="todoapp stack-large">
        <h1>To-Do App</h1>   

        <Form />

        <div className="filters btn-group stack-exception">
          <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span>All</span>
            <span className="visually-hidden"> Tasks</span>
          </button>

          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Active</span>
            <span className="visually-hidden"> Tasks</span>
          </button>

          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Completed</span>
            <span className="visually-hidden"> Tasks</span>
          </button>
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