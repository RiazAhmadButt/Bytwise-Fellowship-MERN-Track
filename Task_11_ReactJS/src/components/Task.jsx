import { Button } from "./Button"
export const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            <Button text="Delete" onClick={() => onDelete(task.id)} />
        </div>
    )
} 