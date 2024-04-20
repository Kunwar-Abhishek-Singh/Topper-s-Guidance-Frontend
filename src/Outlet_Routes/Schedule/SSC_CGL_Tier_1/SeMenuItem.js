import React from 'react';
import { useState, useEffect, useRef } from "react";
import SeDropdown from './SeDropDown';
import classes from "./Schedule.module.css";


const SeMenuItem = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);   
  
    let ref = useRef();
  
    useEffect(() => {
      const handler = (event) => {
        if (dropdown && ref.current && !ref.current.contains(event.terget)) {
          setDropdown(false);
          
        }
      };
      document.addEventListener("mousedown", handler);
      document.addEventListener("touchstart", handler);
      return () => {
        // cleanup the event listener
        document.removeEventListener("mousedown", handler);
        document.removeEventListener("touchstart", handler);
      };
    }, [dropdown]);
  
    const onMouseEnter = () => {
      window.innerWidth > 10 && setDropdown(true);
      console.log(ref.current);
    };
  
    const onMouseLeave = () => {
      window.innerWidth > 10 && setDropdown(false);
      
    };
      
    return (
      <li
        className={classes.menu-items}
        ref={ref}
        onMouseOver={onMouseEnter}
        onMouseOut={onMouseLeave}
      >
        {items.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup={dropdown ? "true" : "false"}
              onClick={() => setDropdown((prev) => !prev)}
            >
              {items.title}
              {depthLevel > 0 ? (
                <span> &raquo; </span>
              ) : (
                <span className={classes.arrow}/>
              )}
            </button>
            <SeDropdown
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
            />
          </>
        ) : (
          <a href="/#"> {items.title} </a>
        )}
      </li>
    );
  };

export default SeMenuItem;