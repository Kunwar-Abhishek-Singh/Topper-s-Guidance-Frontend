import React from 'react';
import classes from "./Dashboard_Toppers_Spec_pages.module.css";
import "./Dashboard_Tooper_Spec_Pages";

const DashboardToppersSpecPagesData = (props) => {
  return (
    <>
    <div>
        <div className={classes.spec_page_header}>
        <h1>{props.heading}</h1>
        </div>
        <div className={classes.spec_page_video}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hqvOfaAGRL8?si=cATl_b53UtwqjhVr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className={classes.spec_page_sub_title}>
        <p>{props.topperTitle}</p>
        </div>
        <div className={classes.spec_page_date}>
        <p>{props.date}</p>
        </div>
        <div className={classes.spec_page_p1}>
        <p>{props.content1}</p>
        </div>
        <div className={classes.spec_page_p2}>
        <p>{props.content2}</p>
        </div>
        <div className={classes.spec_page_p3}>
        <p>{props.content3}</p>
        </div>
        <div className={classes.spec_page_img1}>
        <img src={props.images1} alt="abcd" />
        </div>
        <div className={classes.spec_page_content_bio1}>
        <p>{props.contentBio1}</p>
        </div>
        <div className={classes.spec_page_content_bio2}>
        <p>{props.contentBio2}</p>
        </div>
        <div className={classes.spec_page_content_bio3}>
        <p>{props.contentBio3}</p>
        </div>
        <div className={classes.spec_page_p4}>
        <p>{props.content4}</p>
        </div>
        <div className={classes.spec_page_img2}>
        <img src={props.imageJourney} alt="xyz" />
        </div>
        <div className={classes.spec_page_journey1}>
        <p>{props.contentJourney1}</p>
        </div>
        <div className={classes.spec_page_journey2}>
        <p>{props.contentJourney2}</p>
        </div>
        </div>
    </>
  )
}

export default DashboardToppersSpecPagesData;