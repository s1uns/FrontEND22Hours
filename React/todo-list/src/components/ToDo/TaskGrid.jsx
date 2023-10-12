import React from "react";
import './styles/TaskGrid.css';
import Task from "./Task.jsx";

function TaskGrid(props) {
    const { tasks, ...other } = props

    return (
        <div className="task-grid">
            {
                tasks.map((item, index) => {
                    return <Task key={item.id}
                        name={item.name}
                        description={item.description}>
                        image = {item.image}
                    </Task>

                })}
        </div>
    )
}

export default TaskGrid;