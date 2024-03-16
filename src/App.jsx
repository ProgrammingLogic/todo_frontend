import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import List from "@mui/material/List";

import { UseState, useState } from "react";

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

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});


export default function App() {
  const [taskList, setTaskList] = useState(SAMPLE_TASKS);

  function completeTask(key) {
    const newTaskList = taskList.map((task) => {
      if (task.key === key) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTaskList(newTaskList);
  }

  const tasks = taskList.map((task) => 
    <Task key={task.key} task={task} completeTask={completeTask}/>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <h1>Todo List</h1>
      <List>
        {tasks}
      </List>
    </ThemeProvider>
  )
}