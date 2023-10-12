import React from "react";
import './styles/Task.css'

function Task(props) {
    const { id, name, description, image, ...other } = props
    const baseImg = 'https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg';
    console.log(image)
    return (
        <div className="task">
            <div className="thumbnail">
                <img src={image ? image : baseImg}/>
            </div>
            <div className="task-info">
                <h3>{name}</h3>
                <p>{description.length < 30 ? description : `${description.slice(0, 27)}...`}</p>
            </div>
        </div>
    )
}

export default Task;

