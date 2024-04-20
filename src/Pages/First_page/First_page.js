import React from "react";
import classes from "./First_page.module.css"
import Header from '../../components/Header/Header';
import Carousel1 from "../../components/Carousel/Carousel";
import ExamSelection from '../../components/Exam_Selection/Exam_Selection';
import SearchToppers from "../../components/Search_Toppers/Search_Toppers";
import MostSearched from '../../components/Most_Searched/Most_Searched';
import UpcomingWebinar from '../../components/Upcoming_Webinars/Upcoming_Webinars';
import ToppersTips from '../../components/Toppers_Tips/Toppers_Tips';
import Podcast from '../../components/Podcast/Podcast';
import Footer from '../../components/Footer/Footer';



function FirstPage() {   
    
    
    
    return (
        <>
            <div className={classes.mainHeader}>
                <div className={classes.header_section}> 
                <Header />
                </div>
                <div className={classes.carouselll_section}>
                    {/* <h1>Hello world this is the trial for the responsive for first page</h1> */}
                
                <Carousel1 />
                </div>
                <div className={classes.exam_selection_section}>
                <ExamSelection />
                </div>
                <div className={classes.search_topper_section}>
                <SearchToppers />
                </div>
                <div className={classes.most_searched_section}>
                <MostSearched />
                </div>
                <div className={classes.UpcomingWebinar_section}>
                <UpcomingWebinar />
                </div>
                <ToppersTips />
                <Podcast />
                <Footer />
            </div>
        </>
    )
}
export default FirstPage;