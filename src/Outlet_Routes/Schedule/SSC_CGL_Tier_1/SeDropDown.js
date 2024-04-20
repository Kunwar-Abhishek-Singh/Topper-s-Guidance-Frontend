import React from 'react';
import SeMenuItem from "./SeMenuItem";
import classes from "./Schedule.module.css";

const SeDropdown = ({ submenus, dropdown, depthlevel}) => {
    depthlevel = depthlevel+1;
    const dropdownClass = depthlevel>1 ? "dropdown-submenu":"";
  return (
    <ul className={`classes.dropdown${dropdownClass} ${dropdown ? "show":""}`}>
        {
            submenus.map((submenu ,index)=>(
                <SeMenuItem items={submenu} key={index} depthlevel={depthlevel}/>
            ))}
    </ul>
  );
};

export default SeDropdown;