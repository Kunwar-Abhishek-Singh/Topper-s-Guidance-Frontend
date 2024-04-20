import React from 'react';
import classes from "./ActiveEventSpecificationPage.module.css";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";


const ActiveEventSpecificationPageData = (props) => {
  return (
    <>
    <div className={classes.event_details_card}>
    <div className={classes.event_details_dateBtn}><p>Nov<span>13</span></p></div>
        <div className={classes.event_details_topic}>
        <h1>{props.topic}</h1>
        </div>

        <div className={classes.event_details_subDiv}>            
        <div className={classes.event_details_location}>
        <p><span><CiLocationOn/></span>{props.location}</p>
        </div>
        <div className={classes.event_details_time}>
        <p><span><IoTimeOutline/></span>{props.time}</p>
        </div>
        <div className={classes.event_details_eventRelated}>
        <p>{props.eventRelated}</p>
        </div>
        </div>

        <div className={classes.event_details_imgUrl}>
        <img src={props.imgUrl} alt='img_eventDetails'/>
        </div>
        <div className={classes.description_main_div}>
        <h2>{props.descriptionHeading}</h2>
        <p>{props.descriptionParagrapI}</p>
        <p>{props.descriptionParagrapII}</p>
        <p>{props.descriptionParagrapIII}</p>
        <p>{props.descriptionParagrapIV}</p>
        <p>{props.descriptionParagrapV}</p>
        <p>{props.descriptionParagrapVI}</p>
        </div>
    </div>
    </>
  )
}

export default ActiveEventSpecificationPageData;