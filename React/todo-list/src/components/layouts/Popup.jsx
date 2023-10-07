import React, { useState } from "react";
import './styles/Popup.css';

function Popup(props) {
    const [showPopup, setShowPopup] = useState(false)
    const [taskName, setTaskName] = useState();
    
    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    return(
        <>
        
        <button
        onClick={togglePopup}
        className="btn-popup">
            Open
        </button>
        
        <div className="popup">
            <div className="overlay">
                <div className="popup-content">
                    <button className="close-popup"
                    onClick={togglePopup}>
                        CLOSE
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Popup;