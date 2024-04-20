import React from "react";
import "./Ibps";
import classes from "./Ibps.module.css";

const IbpsData = (props) => {
  return (
    <>
      <div className={classes.banking_cards}>
        <div className={classes.card_img}>
          <img src={props.imageUrl} alt="bank_icon" />
        </div>
        <h3>{props.examName}</h3>
        <ul className={classes.c}>
          <li>{props.totalNo}</li>
          <li>{props.medium}</li>
          <li>{props.type1}</li>
          <li>{props.type2}</li>
          <li>{props.type3}</li>
          <li>{props.type4}</li>
        </ul>
        <div className={classes.view_testBtn}>
          <button>{props.button}</button>
        </div>
      </div>
    </>
  );
};

export default IbpsData;
