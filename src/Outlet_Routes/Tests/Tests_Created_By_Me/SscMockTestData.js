import React from "react";
import "./SscMockTest";
import classes from "./SscTestSeries.module.css";

const SscMockTestData = (props) => {
  return (
    <>
      <div className={classes.mockTest_card}>
        <div className={classes.top_img}>
          <img className={classes.ssc_img} src={props.imgUrl} alt="sscpic" />
        </div>
        <h3>{props.examName}</h3>
        <div className={classes.main_ulDiv}>
          <ul className={classes.a}>
            <li className={classes.total_no}>{props.totalTest}</li>
            <li className={classes.medium}>{props.medium}</li>
            <li className={classes.type_one}>{props.type1}</li>
            <li className={classes.type_two}>{props.type2}</li>
            <li className={classes.type_three}>{props.type3}</li>
            <li className={classes.type_four}>{props.type4}</li>
          </ul>
        </div>
        <div className={classes.button_more_div}>
          <button className={classes.btn_rupees}>{props.button}</button>
        </div>
        <div className={classes.buy_now_div}>
          <button className={classes.buy_now_btn}>{props.buttonBuy}</button>
        </div>
      </div>
    </>
  );
};

export default SscMockTestData;
