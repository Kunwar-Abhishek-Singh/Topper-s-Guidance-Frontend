import React from 'react';
import classes from "./Ended_Event.module.css";
import "./Ended_Event";

const EndedEventData = (props) => {
  return (
    <>
    <div className={classes.ended_card_div}>
        <img className={classes.ended_img} src={props.imageUrl} alt="ended img"/>
        
        <div className={classes.ended_date}>
        <p>{props.date}</p>
        </div>
        <div className={classes.ended_topic}>
        <p>{props.topic}</p>
        </div>
        <div className={classes.ended_location}>
        <p>{props.location}</p>
        </div>
    </div>
    </>
  )
}

export default EndedEventData;