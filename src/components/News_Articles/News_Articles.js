import React from 'react';
import classes from  "./News_Articles.module.css";

const NewsArticles = () => {
  return (
    <>
        <div className={classes.news_section}>
            <div>
                <h3>Latest News</h3>
            </div>
            <div>
                <a href='https://ssc.nic.in/'><p className={classes.news_section_news}>SSC Regions</p></a>
                <a href='https://ssc.nic.in/'><p className={classes.news_section_news}>SSC Notification 2023</p></a>
                <a href='https://ssc.nic.in/'><p className={classes.news_section_news}>SSC CGL Notification</p></a>
                <a href='https://ssc.nic.in/'><p className={classes.news_section_news}>SSC GD Notification</p></a>
                <a href='https://ssc.nic.in/'><p className={classes.news_section_news}>SSC CPO Notification</p></a>
                <a href='https://ssc.nic.in/'><p className={classes.news_section_news}>SSC CHSL Notification</p></a>
                <a href='https://ssc.nic.in/'><p className={classes.news_section_news}>SSC JE Notification</p></a>
                <a href='https://ssc.nic.in/'><p className={classes.news_section_news}>SSC MTS Notification</p></a>
                <a href='https://ssc.nic.in/'><p className={classes.news_section_news}>SSC Steno. Notification</p></a>
            </div>
        </div>
        <div className={classes.articles_section}>
            <div>
                <h3>Related Articles</h3>
            </div>
            <div>
                <a href='https://ssc.nic.in/'><p className={classes.articles_section_articles}>Job Profile of SSC CGL AEO </p></a>
                <a href='https://ssc.nic.in/'><p className={classes.articles_section_articles}>Job Profile of SSC CGL ASO </p></a>
                <a href='https://ssc.nic.in/'><p className={classes.articles_section_articles}>About the SSC MTS Exam! </p></a>
                <a href='https://ssc.nic.in/'><p className={classes.articles_section_articles}> SSC Career and jobs part-01</p></a>
                <a href='https://ssc.nic.in/'><p className={classes.articles_section_articles}> SSC Career and job part-02</p></a>
            </div>
        </div>
    </>
  )
}

export default NewsArticles;
