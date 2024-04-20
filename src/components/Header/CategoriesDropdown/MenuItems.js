import React from "react";
import Dropdown from "./Drowdown";
import { useState, useEffect, useRef } from "react";
import { cleanup } from "@testing-library/react";
import { Link } from "react-router-dom";


const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
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
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
   
    <div
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
    
    {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) =>!prev)}
          >   
            {depthLevel === 0 ? (items.title) : (              
                <li className="list">
                <img src={require(`../../Images/ssclogo.png`)} alt="categories"/>
                {items.title}
                </li>              
            )}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <li className="list">
              <img src="./images/banklogo.jpg"/>
              {items.title}{" "}    
            </li>
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>

          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        
          <li className="list">
            <img src="./images/banklogo.jpg"/>
            {items.title}
          </li>
        
      )}

    </div>
   
  );
};

export default MenuItems;
