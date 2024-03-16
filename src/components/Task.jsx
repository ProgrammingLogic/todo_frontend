import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";


export default function Task(props) {
    const task = props.task;
    const completeTask = props.completeTask;

    return (
        <ListItem>
            <ListItemIcon>
                <Checkbox 
                    edge="start"
                    checked={task.completed}
                    onChange={() => props.completeTask(task.key)}
                />
            </ListItemIcon>
            <ListItemText primary={task.name}/>
        </ListItem>
    );
}