import React from 'react';
import "./SscPage";
import classes from "./SscTest.module.css";
const SscData = (props) => {
  return (
    <div className={classes.sscTest_card}>
      <img className={classes.test_icon} src={props.image} alt="icons"/>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
        <button>{props.button}<span className={classes.right_arrow}></span></button>   
    </div>
  )
}

export default SscData;