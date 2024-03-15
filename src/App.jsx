import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import List from "@mui/material/List";

import Task from "./components/Task";


const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});


export default function App() {
  const taskList = [
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

  const tasks = taskList.map((task) => 
    <Task key={task.key} task={task} />
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