import { useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from "@mui/material/TextField"


export default function Task({id, name, completed, onUpdate, onDelete}) {
    const [editing, setEditing] = useState(false);

    const editingView = (
        <>
            <TextField 
                variant="filled"
                defaultValue={name}
                onChange={(event) => (event.target.value)}
            />

            <IconButton
                onClick={() => {
                    props.editTask(task.key, name);
                    setEditing(false);
                }} 
            >
                <SaveIcon />
            </IconButton>
            
            <IconButton 
                onClick={() => {
                    setName(task.name);
                    setEditing(false);
                }}
            >
                <CancelIcon />
            </IconButton>

            <IconButton
                onClick={() => {
                    props.deleteTask(task.key);
                }} 
            >
                <DeleteIcon />
            </IconButton>
        </>
    );

    const readingView = (
        <>
            <p>{name}</p>

            <IconButton onClick={() => {setEditing(true)}}>
                <EditIcon />
            </IconButton>
        </>
    );

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Checkbox 
                edge="start"
                checked={task.completed || false}
                onChange={() => props.completeTask(task.key)}
            />

            {editing ? editingView : readingView}
        </Stack>
    );
}