import React, { useState } from "react";
import classes from "./Topper_Profile.module.css";
import { useParams } from "react-router-dom";
import scorecard from '../../images/scorecard.jpg'
import double_tick from '../../images/double_tick.png'
const Topper_Profiledata = (props) => {

  const { topper_name } = useParams();
  const [isClicked, setIsClicked] = useState(false);
  const imgClickHandler = () => {
    setIsClicked(true);
  }

  const big_screen_cancel_handler = () => {
    setIsClicked(false);
  }
  return (
    <>
      <div className={classes.main_cards}>
        <div className={classes.card_item}>
          <div className={classes.expert_img}>
            <img src={props.imgUrl} alt="expert_img" />
            <p>{topper_name}</p>
          </div>
          <div className={classes.profile_topperName}>
            {/* <h2><span className={classes.field_name}>Name</span> <span className={classes.colon_char}>:</span> <span className={classes.field_value}> {topper_name}</span></h2>
          
          <h2><span className={classes.field_name}>Exam Qualified</span> <span className={classes.colon_char}>:</span> <span classname={classes.field_value}>
          <h2><span className={classes.field_name}>Roll no.</span>: {props.location}</h2> */}
            <table>
              <tr className={classes.tr_data}>
                <td className={classes.td_data}>Name</td>
                <td className={classes.td_data}>:</td>
                <td className={classes.td_data}>{topper_name}</td>
              </tr>
              <tr className={classes.tr_data}>
                <td className={classes.td_data}>Exam Qualified  </td>
                <td className={classes.td_data}>:</td>
                <td className={classes.td_data}>SSC CGL </td>
              </tr>
              <tr className={classes.tr_data}>
                <td className={classes.td_data}>Roll No.  </td>
                <td className={classes.td_data}>:</td>
                <td className={classes.td_data}>1203003947</td>
              </tr>
              <tr className={classes.tr_data}>
                <td className={classes.td_data}>Exam Year  </td>
                <td className={classes.td_data}>:</td>
                <td className={classes.td_data}>2022</td>
              </tr>
              <tr className={classes.tr_data}>
                <td className={classes.td_data}>Posted at  </td>
                <td className={classes.td_data}>:</td>
                <td className={classes.td_data}>I.T.O.</td>
              </tr>
              <tr className={classes.tr_data}>
                <td className={classes.td_data}>Rank  </td>
                <td className={classes.td_data}>:</td>
                <td className={classes.td_data}>9th</td>
              </tr>
              <tr className={classes.tr_data}>
                <td className={classes.td_data}>Score  </td>
                <td className={classes.td_data}>:</td>
                <td className={classes.td_data}>169 marks</td>
              </tr>
              <tr className={classes.tr_data}>
                <td className={classes.td_data}>Out of Total  </td>
                <td className={classes.td_data}>:</td>
                <td className={classes.td_data}>200 marks</td>
              </tr>
            </table>
          </div>
        </div>
        <div className={classes.credential_items}>
          <h2>My Score-Card</h2>
          <img src={scorecard} alt="scorecard" onClick={imgClickHandler}></img>
          <scorecard />

        </div>
        <div className={classes.double_tick_verification}>
          <div>
            <img src={double_tick} alt="double_tick.png"></img>
          </div>
          <div>
            <h2>Verified</h2>
          </div>
        </div>


        {/* <p>{props.profile}</p>
      <p>{props.overview}</p>
      <p>{props.language}</p>
      <p>{props.languageEng}</p>
      <p>{props.languageHnd}</p>
      <p>{props.education}</p>
      <p>{props.university}</p>
      <p>{props.graduate}</p>
      <p>{props.address}</p>
      <p>{props.permamentAdd}</p>
      <p>{props.verifiedInfo}</p>
      <p>{props.phoneVerify}</p>
      <p>{props.report}</p> */}
      </div>
      <div>
        {isClicked ?
          <div className={classes.big_card_div}>
            <img src={scorecard} alt="scorecard_big_img" className={classes.scorecard_big_img}></img>
            <span><button className={classes.big_screen_cancel_button} onClick={big_screen_cancel_handler}>Cancel ❌</button></span>
          </div>:null}
      </div>
    </>
  );
};

export default Topper_Profiledata;
