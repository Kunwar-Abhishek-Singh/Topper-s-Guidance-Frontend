import React from "react";
import classes from "./Podcast.module.css";
import blog_img from "../../images/blog.svg";
import video_img from "../../images/video.svg";
import podcast_img from "../../images/podcast.svg";
function Podcast() {
    return (
        <>
            <div className={classes.podcast_read_watch_listen_main_div}>
                <div className={classes.podcast_heading}>
                    <h1>READ . WATCH . LISTEN</h1>
                    <div className={classes.podcast_quote}><p>Get started now with Insights and Strategies from Toppers</p></div>
                </div>
                <div className={classes.card_podcast}>
                    <div className={classes.pod_img}>
                        <img src={blog_img} alt="blog_img"></img>
                        <div className={classes.content_name}><p>BLOGS</p></div>
                    </div>
                    <div className={classes.pod_img}>
                        <img src={video_img} alt="video_img"></img>
                        <div className={classes.content_name}><p>VIDEOS</p></div>
                    </div>
                    <div className={classes.pod_img}>
                        <img src={podcast_img} alt="podcasts_img"></img>
                        <div className={classes.content_name}><p>PODCASTS</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Podcast;