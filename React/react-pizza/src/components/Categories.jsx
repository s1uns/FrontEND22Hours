import React, { useState } from "react";

export default function Categories() {
    const [activeIndex, setActiveIndex] = useState(5);
    const categories = [
        "All",
        "Meat",
        "Vegetarian",
        "Grill",
        "Spicy",
        "Closed",
    ];

    return (
        <div className="categories">
            <ul>
                {categories.map((item, index) => {
                    return (
                        <li
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={activeIndex === index ? "active" : ""}
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
