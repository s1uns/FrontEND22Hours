import React, { useState } from 'react'

export default function Categories() {
    const [activeIndex, setActiveIndex] = useState(5);

    const changeIndex = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="categories">
            <ul>
                <li onClick={() => changeIndex(0)} className= {activeIndex === 0 ? 'active' : ''}>All</li>
                <li onClick={() => changeIndex(1)} className= {activeIndex === 1 ? 'active' : ''}>Meat</li>
                <li onClick={() => changeIndex(2)} className= {activeIndex === 2 ? 'active' : ''}>Vegetarian</li>
                <li onClick={() => changeIndex(3)} className= {activeIndex === 3 ? 'active' : ''}>Grill</li>
                <li onClick={() => changeIndex(4)} className= {activeIndex === 4 ? 'active' : ''}>Spicy</li>
                <li onClick={() => changeIndex(5)} className= {activeIndex === 5 ? 'active' : ''}>Closed</li>
            </ul>
        </div>
    );
}
