import React from "react";
import "./RrbTestSeries";
import classes from "./RrbTestSeries.module.css";

const RrbTestSeriesData = (props) => {
  return (
    <>
      <div className={classes.rrb_testCards}>
        <div className={classes.rrb_img}>
          <img src={props.imgUrl} alt="rrb" />
        </div>
        <h3>{props.examName}</h3>
        <ul className={classes.b}>
          <li>{props.totalTest}</li>
          <li>{props.medium}</li>
          <li>{props.type1}</li>
          <li>{props.type2}</li>
          <li>{props.type3}</li>
          <li>{props.type4}</li>
        </ul>
        <div className={classes.rrb_viewbtn}>
          <button>{props.button}</button>
        </div>
        <div className={classes.rrb_buy_div}>
          <button className={classes.rrb_buy_btn}>{props.buttonBuy}</button>
        </div>
      </div>
    </>
  );
};

export default RrbTestSeriesData;
