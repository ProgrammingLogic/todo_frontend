import { useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from "@mui/material/TextField"


export default function Task({id, name, completed, onUpdate, onDelete, onComplete}) {
    const [editing, setEditing] = useState(false);
    const [ nameField, setNameField ] = useState(name);

    const editingView = (
        <>
            <TextField 
                variant="filled"
                defaultValue={nameField}
                onChange={(event) => (setNameField(event.target.value))}
            />

            <IconButton
                onClick={() => {
                    onUpdate(id, nameField)
                    setEditing(false);
                }} 
            >
                <SaveIcon />
            </IconButton>
            
            <IconButton 
                onClick={() => {
                    setNameField(name);
                    setEditing(false);
                }}
            >
                <CancelIcon />
            </IconButton>

            <IconButton
                onClick={() => {
                    onDelete(id);
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
                checked={completed || false}
                onChange={() => onComplete(id)}
            />

            {editing ? editingView : readingView}
        </Stack>
    );
}