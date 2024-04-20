import React from "react";
import classes from "./Podcast.module.css";
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
                        <img src="./images/blog.svg" alt="blog_img"></img>
                        <div className={classes.content_name}><p>BLOGS</p></div>
                    </div>
                    <div className={classes.pod_img}>
                        <img src="./images/video.svg" alt="video_img"></img>
                        <div className={classes.content_name}><p>VIDEOS</p></div>
                    </div>
                    <div className={classes.pod_img}>
                        <img src="./images/podcast.svg" alt="podcasts_img"></img>
                        <div className={classes.content_name}><p>PODCASTS</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Podcast;