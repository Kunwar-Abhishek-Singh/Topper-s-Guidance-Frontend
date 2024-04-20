import React from 'react';
import classes from "./SSC_CHSL_Tier_1_Books.module.css";
import { Link, useParams } from "react-router-dom";

const SSCCHSLTier1Data = (props) => {

  const {topper_name} = useParams();
    return (
      <Link to={`/logged_in_profile_dashboard/${topper_name}/digital_books/digitalBooksPaid`} style={{textDecoration:"none"}}>
        <div className={classes.full_card_ebook}>
          <div className={classes.eBook_img}>
            <img src={props.imgUrl} alt="course_pic" />
          </div>
          <div className={classes.eBook_title}>
            <h2 className={classes.heading_title}>{props.title}</h2>
            <p className={classes.author_title}>by {props.author}</p>
            <div className={classes.kindle_link}>
            <a>{props.format}</a>         
            </div>
            <div className={classes.rs_icon}>               
                <p>₹499  <sub>M.R.P: <s>₹770</s> (35% off)</sub>{props.rsIcon}</p>                       
            </div>
            <p>{props.rating}</p>
            <p>{props.price}</p>
          </div>
        </div>
        </Link>
      );
    };

export default SSCCHSLTier1Data;