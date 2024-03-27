import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Stack from "@mui/material/Stack";

import { useState, useEffect } from "react";

import Task from "./components/Task";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});


export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    const tasksData = [
      {id: 1, name: "I am task #1", completed: false},
      {id: 2, name: "I am task #2", completed: false},
      {id: 3, name: "I am task #3", completed: false},
      {id: 4, name: "I am task #4", completed: true},
    ];

    setData(tasksData);
  };

  // SOURCE: https://learn.microsoft.com/en-us/training/modules/build-web-api-minimal-spa/3-exercise-create-front-end?tabs=github-codespaces
  // 
  // TODO
  // - Update task use to "id" instead of "key"
  // - Write handeCreate() function to create task(s)
  // - Write handleUpdate() function to edit task(s)
  // - Write handleDelete() function to delete tasks
  // - Move task list handling into a file named TaskList.jsx

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Stack alignItems="center" spacing={1}>
          <h1>Todo List</h1>

        </Stack>
    </ThemeProvider>
  )
}