import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Card.module.css";
// import boy_img from "../../images/boy_vector_img.jpg";
import { FaUserCircle,  FaThumbsUp } from "react-icons/fa";
function Card(props) {
    const [followStatus, setFollowStatus] = useState("Follow me")
    function followBtnClickHandler() {
        if (followStatus === "Follow me") {
            setFollowStatus("Followed");
        }
        else {
            setFollowStatus("Follow me");
        }
    }
    return (
        <div className={classes.cards_collection_module}>
            <div className={classes.card}>
                <div className={classes.card_content_and_social_media_handles}>
                    <div className={classes.card_img_div}>
                        {/* <img src="./images/user.svg" className={classes.dp} alt="user_img"></img> */}
                        <FaUserCircle size="100px" className={classes.dp} />
                        {/* <img src={boy_img}></img> */}
                    </div>
                    <div className={classes.details_section_div}>
                        <div className={classes.details}>
                            <h1>{props.name}</h1>
                        </div>
                        <div className={classes.details}>
                            <p>{props.exam_topped} &nbsp; {props.exam_year}</p>
                        </div>
                        <div className={classes.details}>
                            <p>AIR:- {props.air}</p>
                        </div>
                        <div className={classes.likes_followers_section_div}>
                            <div className={classes.likes_section_div}>
                                <FaThumbsUp size="30px" className={classes.likes_icon} />
                                <p>{props.likes} <br />Likes</p>
                            </div>
                            <div className={classes.followers_section_div}>
                                <FaUserCircle size="40px" className={classes.followers_icon} />
                                <p>{props.followers} <br /> Followers</p>
                            </div>
                        </div>
                        <div className={classes.open_follow_button}>
                            <Link to={props.to}> <button className={classes.open_btn} type="button">View Profile</button></Link>
                            <button className={classes.follow_btn} type="button" onClick={followBtnClickHandler}>{followStatus}</button>
                        </div>
                    </div>
                    {/* <div className={classes.social_media_handles}>
                        <FaFacebook size="25px" className={classes.facebook_icon} />
                        <FaInstagram size="25px" className={classes.insta_icon} />
                        <FaYoutube size="25px" className={classes.youtube_icon} />
                        <FaTwitter size="25px" className={classes.twitter_icon} />
                    </div> */}

            


                </div>
            </div>
        </div>
    )
}
export default Card;