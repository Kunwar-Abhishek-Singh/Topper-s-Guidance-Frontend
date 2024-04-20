import React from "react";
import classes from  "./Follower.module.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";

const Follower = () => {
  return (
    <>
      <div className={classes.Followers_head}>
        <div className={classes.card_followers}>
          <h1>Followers wordings :-</h1>
        </div>
        <div className={classes.top_cards}>
          <div className={classes.follower_cards}>
            <RiDoubleQuotesL />
            <div className={classes.cards_heading}>
            <BiUserCircle style={{height:"40px", width:"40px", marginLeft:"10px"}} />
            <h4>Adarsh Anand (SSC aspirant)</h4>
            </div>
            <p>
              I have just started from a very basic unders-tanding in
              Mathematics and after a whileI started adapting quickly the
              schedule and strategies shared by our respective toppers.<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fantastic so far, would recommend to everyone. Come and join this platform ASAP &nbsp; 👍👍✌️✌️
            </p>
          </div>
          <div className={classes.follower_cards}>
            <RiDoubleQuotesL />
            <div className={classes.cards_heading}>
            <BiUserCircle style={{height:"40px", width:"40px", marginLeft:"10px"}} />
            <h4>Adarsh Anand (SSC aspirant)</h4>
            </div>
            <p>
              I have just started from a very basic unders-tanding in
              Mathematics and after a whileI started adapting quickly the
              schedule and strategies shared by our respective toppers.<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fantastic so far, would recommend to everyone. Come and join this platform ASAP &nbsp; 👍👍✌️✌️
            </p>
          </div>
          <div className={classes.follower_cards}>
            <RiDoubleQuotesL />
            <div className={classes.cards_heading}>
            <BiUserCircle style={{height:"40px", width:"40px", marginLeft:"10px"}} />
            <h4>Adarsh Anand (SSC aspirant)</h4>
            </div>
            <p>
              I have just started from a very basic unders-tanding in
              Mathematics and after a whileI started adapting quickly the
              schedule and strategies shared by our respective toppers.<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fantastic so far, would recommend to everyone. Come and join this platform ASAP &nbsp; 👍👍✌️✌️
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Follower;
