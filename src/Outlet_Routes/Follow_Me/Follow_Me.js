import React from 'react'
import {FaYoutube, FaInstagram} from "react-icons/fa";
import classes from "./Follow_Me.module.css";
const FollowMe = () => {
  return (
    <>
        <div>
          <div className={classes.follow_me_heading}>
            <h1>Follow me</h1>
          </div>
          <div>
            <div className={classes.youtube_insta_div_block}>
              <div className={classes.follow_me_youtube_instagram}>
                <div><a href='https://www.youtube.com/channel/UCmybLESYFNotfXyO-c0vIhQ'><FaYoutube size="50px" className={classes.FaYoutube_icon} /></a></div>
                <div className={classes.follow_me_media_name}><h2>Youtube</h2></div>
                <div className={classes.subscribe_btn}><button>Subscribe</button></div>
              </div>
              <div className={classes.follow_me_youtube_instagram}>
               <div> <a href='https://www.instagram.com/kunwar_abhishek_007/'><FaInstagram size="50px" className={classes.FaInstagram_icon} /></a></div>
               <div className={classes.follow_me_media_name}> <h2>Instagram</h2></div>
               <div className={classes.follow_btn}><button>Follow</button></div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default FollowMe;
