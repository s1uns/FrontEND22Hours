import React from "react";
import './styles/TaskGrid.css';
import Task from "./Task";

function TaskGrid(props) {
    const { tasks, ...other } = props

    return (
        <div className="task-grid">
            {
            tasks.map((item, index) => {
                return <Task key={item.id}>
                            {item.name} {item.description}
                </Task>

            })}
        </div>
    )
}

export default TaskGrid;