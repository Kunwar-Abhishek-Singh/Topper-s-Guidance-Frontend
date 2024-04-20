import React from "react";
import "./DashboardTopper";
import classes from "./DashboardTopper.module.css";

const Product = (props) => {
  return (
    <>    
    <div className={classes.topper_cards}>
      <img className={classes.topper_image} src={props.url} alt="Book_4th edition" />
      <h2>Name : {props.name}</h2>
      <p className={classes.rank}> Rank  {props.rank}</p>
      <p>{props.description}</p>
      <div className={classes.follow_btn}>
        <button>follow</button>        
      </div>
    </div>
    </>
  );
};

export default Product;
