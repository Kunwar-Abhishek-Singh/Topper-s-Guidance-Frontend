import React from 'react';
import classes from "./SscTestSeries.module.css";
import "./SscTestSeriesPage";

const SscTestSeriesData = (props) => {
  return (
    // <div className={classes.test_cards}>
    //   <h2>{props.imgUrl}</h2>
    //   <h3>{props.examName}</h3>
    //   <p>{props.totalTest}</p>
    //   <p>{props.medium}</p>      
    //   <p>{props.type1}</p>
    //   <p>{props.type2}</p>
    //   <p>{props.type3}</p>
    //   <p>{props.type4}</p>
    //   <div className={classes.testCard_btn}>
    //   <button>{props.button}</button>
    //   </div>
    // </div>
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
    <div className={classes.button_more}>
      <button className={classes.view_btn}>{props.button}</button>         
    </div>
    <div className={classes.buy_btn_test_portal}>
    <button className={classes.buy_btn_test}>{props.button1}</button> 
    </div>
  </div>
  )
}

export default SscTestSeriesData;