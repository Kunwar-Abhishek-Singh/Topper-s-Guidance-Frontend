import React from "react";
import classes from "./TestSeries.module.css";

const SeriesData = (props) => {
  return (
    <>
      <div className={classes.test_cards}>
        <div className={classes.test_cards_img}>
        <img
          className={classes.test_image}
          src={props.url}
          alt="Book_4th edition"
        />
        </div>
        <h2>{props.exam}</h2>
        <p className={classes.test_type}>{props.type}</p>
        {/* <p className={classes.price}> price: {props.price}</p> */}
        <p>{props.publication}</p>
      </div>
    </>
  );
};

export default SeriesData;
