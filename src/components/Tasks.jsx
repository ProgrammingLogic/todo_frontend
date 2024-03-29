import { useState, useEffect } from "react";

import Stack from "@mui/material/Stack";


// SOURCE: https://learn.microsoft.com/en-us/training/modules/build-web-api-minimal-spa/3-exercise-create-front-end?tabs=github-codespaces
// 
// TODO
// - Update task use to "id" instead of "key"
// - Write handeCreate() function to create task(s)
// - Write handleUpdate() function to edit task(s)
// - Write handleDelete() function to delete tasks
// - Move task list handling into a file named TaskList.jsx
export default function Tasks() {
  const [data, setData] = useState([]);
  const [tasks, setTasks] = useState([]);

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
    setTasks(data.map(task) => {
        <Task 
            id={task.id}
            name={task.name}
            completed={task.completed}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
        />
    });
  };

  // item.id -- The ID of the task
  // item.name -- The name of the task
  // item.isCompleted -- Whether or not the item is completed
  const handleCreate = (item) => {
    const newItem = {...item, id: data.length + 1};
    setData([...data, newItem]);
  };

  const handleUpdate = (id, newName) => {
    const newData = data.map((item) => item.id === id ? {...item, name: newName} : item);
    setData(newData);
  };

  const handleDelete = (id) => {
    const newData = data.map(item => item !== id);
    setData(newData);
  }

  return (
    <Stack alignItems="center" spacing={1}>
        <h1>Tasks</h1>
        <ul>
            <li>I am a task!</li>
        </ul>
    </Stack>
  )
}