import React from 'react';
import classes from "./Topper_Intro_Videos.module.css";
import NewsArticles from '../News_Articles/News_Articles';
import ToppersPlanStrategy from '../Toppers_Plan_Strategy/Toppers_Plan_Strategy';
import video_img from "../../images/video.svg";

const Topper_Intro_Videos = () => {
    return (
        <>
            <div className={classes.toppers_intro_videos_main_div}>
                <div className={classes.toppers_intro_videos_heading}>
                    <h2>Popular Toppers Introduction Videos :-</h2>
                </div>
                <div className={classes.intro_video_and_news_articles_and_plan_strategy}>  
                    <div className={classes.intro_video_and_news_articles}>
                        <div className={classes.intro_detail_card}>
                            <div>
                                <div className={classes.intro_video_section_icon}>
                                    <img src={video_img} alt='video_icon' className={classes.intro_video_icon}></img>
                                </div> 
                                <div className={classes.intro_video_detail}>
                                    <p>Xyz (name)</p>
                                    <p>SSC JE 2022</p>      
                                    <p>All India Rank :- 2nd</p>
                                </div>
                            </div>

                            <div>  
                                <div className={classes.intro_video_section_icon}>
                                    <img src={video_img} alt='video_icon' className={classes.intro_video_icon}></img>
                                </div>
                                <div className={classes.intro_video_detail}>
                                    <p>Xyz (name)</p>
                                    <p>SSC JE 2022</p>
                                    <p>All India Rank :- 2nd</p>
                                </div>
                            </div>

                            <div>
                                <div className={classes.intro_video_section_icon}>
                                  <img src={video_img} alt='video_icon' className={classes.intro_video_icon}></img>
                                </div>
                                <div className={classes.intro_video_detail}>
                                    <p>Xyz (name)</p>
                                    <p>SSC JE 2022</p>
                                    <p>All India Rank :- 2nd</p>
                                </div>
                            </div>

                            <div>
                                <div className={classes.intro_video_section_icon}>
                                    <img src={video_img} alt='video_icon' className={classes.intro_video_icon}></img>
                                </div>
                                <div className={classes.intro_video_detail}>
                                    <p>Xyz (name)</p>
                                    <p>SSC JE 2022</p>
                                    <p>All India Rank :- 2nd</p>
                                </div>
                            </div>

                            <div>
                                <div className={classes.intro_video_section_icon}>
                                    <img src={video_img} alt='video_icon' className={classes.intro_video_icon}></img>
                                </div>
                                <div className={classes.intro_video_detail}>
                                    <p>Xyz (name)</p>
                                    <p>SSC JE 2022</p>
                                    <p>All India Rank :- 2nd</p>
                                </div>
                            </div>

                            <div>
                                <div className={classes.intro_video_section_icon}>
                                    <img src={video_img} alt='video_icon' className={classes.intro_video_icon}></img>
                                </div>
                                <div className={classes.intro_video_detail}>
                                    <p>Xyz (name)</p> 
                                    <p>SSC JE 2022</p>
                                    <p>All India Rank :- 2nd</p>
                                </div>
                            </div>

                            <div>
                                <div className={classes.intro_video_section_icon}>
                                    <img src={video_img} alt='video_icon' className={classes.intro_video_icon}></img>
                                </div>
                                <div className={classes.intro_video_detail}>
                                    <p>Xyz (name)</p>
                                    <p>SSC JE 2022</p>
                                    <p>All India Rank :- 2nd</p>
                                </div>
                            </div>

                            <div>
                                <div className={classes.intro_video_section_icon}>
                                    <img src={video_img} alt='video_icon' className={classes.intro_video_icon}></img>
                                </div>
                                <div className={classes.intro_video_detail}>
                                    <p>Xyz (name)</p>
                                    <p>SSC JE 2022</p>
                                    <p>All India Rank :- 2nd</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.news_article_section}>
                            <NewsArticles />
                        </div>
                    </div>
                    <div className={classes.plan_strategy_card}><ToppersPlanStrategy /></div>    
                </div>
            </div>
        </>
    )
}

export default Topper_Intro_Videos;
