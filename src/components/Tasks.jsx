import { useState, useEffect } from "react";

import Stack from "@mui/material/Stack";

import Task from "./Task";


// SOURCE: https://learn.microsoft.com/en-us/training/modules/build-web-api-minimal-spa/3-exercise-create-front-end?tabs=github-codespaces
// 
// TODO
// - Update task use to "id" instead of "key"
// - Write handeCreate() function to create task(s)
// - Write handleUpdate() function to edit task(s)
// - Write handleDelete() function to delete tasks
// - Move task list handling into a file named TaskList.jsx
export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    return(() => {
      fetchTasks();
    });
  }, []);

  const fetchTasks = () => {
    const sampleTasks = [
      {id: 1, name: "I am task #1", completed: false},
      {id: 2, name: "I am task #2", completed: false},
      {id: 3, name: "I am task #3", completed: false},
      {id: 4, name: "I am task #4", completed: true},
    ];

    setTasks(sampleTasks);
  };

  // item.id -- The ID of the task
  // item.name -- The name of the task
  // item.isCompleted -- Whether or not the item is completed
  const handleCreate = (item) => {
    const newItem = {...item, id: tasks.length + 1};
    setTasks([...tasks, newItem]);
  };

  const handleUpdate = (id, newName) => {
    const newTasks = tasks.map((item) => item.id === id ? {...item, name: newName} : item);
    setTasks(newTasks);
  };

  const handleDelete = (id) => {
    // this deletes ALL tasks 
    // fix this lol
    const newTasks = tasks.map(item => item !== id);
    setTasks(newTasks);
  }

  const handleComplete = (id) => {
    const newTasks = tasks.map((item) => item.id === id ? {...item, completed: !item.completed} : item);
    setTasks(newTasks);
  }

  const listOfTasks = (
      tasks.map((task) => (
        <>
          <Task 
              id={task.id}
              name={task.name}
              completed={task.completed}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              onComplete={handleComplete}
          />
        </>
      ))
  );

  return (
    <Stack alignItems="center" spacing={1}>
        <h1>Tasks</h1>
        {listOfTasks}
    </Stack>
  )
}