import React from 'react';
import MenuItems from './MenuItems';
import "./NavbarCategories.css";


const Drowdown = ({submenus, dropdown, depthLevel }) => {
  depthLevel=depthLevel + 1;

  const dropdownClass = depthLevel > 1 ? 'depthLevel-submenu' : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`}>
      {submenus.map((submenu, index) =>(
        <MenuItems
        items={submenu}
        key={index}
        depthLevel={depthLevel}
        />
      ))}    
    </ul>
  )
}

export default Drowdown;