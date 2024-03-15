import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function Task(props) {
    const task = props.task;

    return (
        <ListItem>
            <ListItemText primary={`Key: ${task.key}`}/>
            <ListItemText primary={`Name: ${task.name}`}/>
            <ListItemText primary={`Completed: ${task.completed}`}/>
        </ListItem>
    );
}