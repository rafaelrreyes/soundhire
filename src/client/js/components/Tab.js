import React from "react";

const TabView = (props) => {
    const { label, onClick, tabIndex, isActive } = props;

    const handleClick = (event) => {
        event.preventDefault();
        onClick(tabIndex);
    }

    return (
        <li 
            className={`tab-item ${isActive ? 'active' : ''}`}
            onClick={handleClick}
        >
            {label}
        </li>
    )
}

export default TabView;