import React from "react";
import './styles/Task.css'
// import exampleImg from '../../img/example.jpg'

function Task(props) {
    const { id, name, description, image, ...other } = props

    return (
        <div className="task">
            {/* <div className="img-container">
                <img className="img" src={exampleImg} alt="" />
            </div> */}
            <div className="task-info">
                <h6>{name}</h6>
                <p>{description.length < 30 ? description : `${description.slice(0, 27)}...`}</p>
            </div>
        </div>
    )
}

export default Task;
