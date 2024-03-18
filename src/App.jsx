import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import { useState, useEffect } from "react";

import Task from "./components/Task";

const SAMPLE_TASKS = [
  {"key": 1, name: "I am task #1", completed: false},
  {"key": 2, name: "I am task #2", completed: false},
  {"key": 3, name: "I am task #3", completed: false},
  {"key": 4, name: "I am task #4", completed: false},
  {"key": 5, name: "I am task #5", completed: false},
  {"key": 6, name: "I am task #6", completed: true},
  {"key": 7, name: "I am task #7", completed: false},
  {"key": 8, name: "I am task #8", completed: false},
  {"key": 9, name: "I am task #9", completed: false},
  {"key": 10, name: "I am task #10", completed: false},
];

const backendURI = "";

function getTasks() {
  let tasks = [];

  fetch(`${backendURI}`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(response => response.json())
    .foreach((task) => {tasks.append({
       "key": task.id,
       "name": task.name,
       "completed": task.isComplete, 
    })});

    return tasks;
}

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});


export default function App() {
  const [taskList, setTaskList] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5120/api/TodoItems", {
      "method": "GET",
    })
      .then((response) => console.log(response));
      // .then(response => response.json())
      // .then((data) => {
      //   console.log(data); 
      //   // const newTaskList = data.foreach((task) => {
      //   //   return {
      //   //     "id": task.key,
      //   //     "name": task.name,
      //   //     "completed": task.isComplete,
      //   //   }
      //   // });

      //   // setTaskList(newTaskList);
      // })
      // .catch(error => console.error(error))
  }, [taskList]);


  function completeTask(key) {
    const newTaskList = taskList.map((task) => {
      if (task.key === key) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTaskList(newTaskList);
  }

  function editTask(key, newName) {
    const newTaskList = taskList.map((task) => {
      if (task.key === key) {
        return {...task, name: newName};
      }
      return task;
    });

    setTaskList(newTaskList);
  }

  function deleteTask(key) {
    const newTaskList = tasks.filter((task) => key != task.key);
    setTaskList(newTaskList);
  }

  const tasks = taskList == null ? null : taskList.map((task) => 
    <Task 
      key={task.key} 
      task={task} 
      completeTask={completeTask}
      editTask={editTask}
      deleteTask={deleteTask}
    />
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Stack alignItems="center" spacing={1}>
          <h1>Todo List</h1>
          {tasks}
        </Stack>
    </ThemeProvider>
  )
}