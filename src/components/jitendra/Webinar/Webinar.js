import React from "react";
import classes from "./Webinar.module.css";
import { BsChevronRight, BsArrowRightCircle } from "react-icons/bs";

const Webinar = () => {
  return (
    <>
      <div className={classes.webinar_top}>
        <div className={classes.upcoming_web}>
          <div className={classes.webinar_head}>
            <h1> Upcoming Webinars :- </h1>
          </div>
          <div className={classes.web_card}>
            <div className={classes.webinar_card}>
              <h5 className={classes.webinar_title}>
                How to be consistent during <br /> preparation of GK / GS
              </h5>
              <div className={classes.webinar_body}>
                <img src="./images/webinar.png" className={classes.webinar_img_middle} alt="webinar"/>
                <h6>Name : Jitendra Kumar</h6>
                <p>Date & Time : 23rd July sept.(6p.m)</p>
              </div>
              <div className={classes.web_btn}>
                <button>Register now<BsChevronRight style={{ color: "black", position: "relative", top: "2px" }}/></button>
              </div>
            </div>
            <div className={classes.webinar_card}>
              <h5 className={classes.webinar_title}>
                How to be consistent during <br /> preparation of GK / GS
              </h5>
              <div className={classes.webinar_body}>
                <img src="./images/webinar.png" className={classes.webinar_img_middle} alt="webinar"/>
                <h6>Name : Jitendra Kumar</h6>
                <p>Date & Time : 23rd July sept.(6p.m)</p>
              </div>
              <div className={classes.web_btn}>
                <button>Register now <BsChevronRight style={{ color: "black", position: "relative", top: "2px" }}/></button>
              </div>
            </div>
            <div className={classes.webinar_card}>
              <h5 className={classes.webinar_title}>
                How to be consistent during <br /> preparation of GK / GS
              </h5>
              <div className={classes.webinar_body}>
                <img src="./images/webinar.png" className={classes.webinar_img_middle} alt="webinar"/>
                <h6>Name : Jitendra Kumar</h6>
                <p>Date & Time : 23rd July sept.(6p.m)</p>
              </div>
              <div className={classes.web_btn}>
                <button>Register now<BsChevronRight style={{ color: "black", position: "relative", top: "2px" }}/></button>
              </div>
            </div>
          </div>
          <div className={classes.web_viewbtn}>
            <button>View more <BsArrowRightCircle style={{position: "relative",bottom: "20px",right: "64px",fontSize: "50px",}}/></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Webinar;
