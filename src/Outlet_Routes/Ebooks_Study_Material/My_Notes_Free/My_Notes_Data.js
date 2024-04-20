import React from "react";
import "./My_Notes_Free";
import classes from "./My_Notes_Free.module.css";

const MyNotesData = (props) => {
  return (
    <>
      <div className={classes.notes_full_cards}>
        <div className={classes.notes_img}>
          <img src={props.imgUrl} alt="notes_pic" />
        </div>
        <div className={classes.notes_page_right_side}>
          <h2 className={classes.notes_title}>{props.title}</h2>
          <p className={classes.author_title}>{props.author}</p>
          <div className={classes.rating_title}>
            <p>{props.rating}</p>
          </div>
          <p className={classes.format_title}>{props.format}</p>
          <div className={classes.ages_title}>
            <p>{props.ages}</p>
          </div>          
          <div className={classes.deal_btn}>
            <button>{props.dealBtn}</button>
          </div>
          <div className={classes.price_title}>
          <p>{props.price}</p>
          </div>
          <div className={classes.discount_title}>
          <p>{props.discount}</p>
          </div>
          <div className={classes.delivery_title}>
          <p>{props.delivery}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyNotesData;
