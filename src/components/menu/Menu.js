import React from "react";
import './Menu.css'

const Menu = () => {
    const items = ['Home', 'Whitepaper', 'MNLA Token'];
    const renderedItem = items.map( (item, index) => <p className="menu-text" key={index}>{item}</p> )

    return (
        <div className="menu">
            {renderedItem}
        </div>
    )
};

export default Menu;