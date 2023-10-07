import React from "react";
import './styles/Task.css'

function Task (props){
    const {id, name, description, image, ...other} = props

    return(
        <div className="task">
            <div className="task-info">
                <h6>{name}</h6>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Task;