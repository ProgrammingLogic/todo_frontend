import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Task(props) {
    const task = props.task;
    const completeTask = props.completeTask;

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Checkbox 
                edge="start"
                checked={task.completed}
                onChange={() => props.completeTask(task.key)}
            />

            <p>{task.name}</p>

            <IconButton>
                <EditIcon />
            </IconButton>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Stack>
    );
}