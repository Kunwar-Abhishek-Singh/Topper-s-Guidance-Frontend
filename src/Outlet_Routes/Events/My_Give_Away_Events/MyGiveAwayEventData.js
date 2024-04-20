import React from "react";
import classes from "./My_Give_Away_Events.module.css";
import "./My_Give_Away_Events";

const MyGiveAwayEventData = (props) => {
  return (
    <>
      <div className={classes.event_card_div}>
        <img
          className={classes.card_event_img}
          src={props.imageUrl}
          alt="events"
        />

        <div className={classes.event_dates}>
          <p>{props.date}</p>
        </div>
        <div className={classes.event_topic_div}>
          <h2>{props.topic}</h2>
        </div>
        <div className={classes.event_location_div}>
          <p>{props.location}</p>
        </div>

        <div className={classes.down_div}>
          <div className={classes.event_eventGoals_div}>
            <p>{props.eventGoals}</p>
            <p>{props.number}</p>
          </div>
          <div className={classes.events_ticketSold_div}>
            <p>{props.ticketSold}</p>
            <p>{props.numberI}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyGiveAwayEventData;
