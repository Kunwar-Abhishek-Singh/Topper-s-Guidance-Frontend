import React from "react";
import Header from "../../components/Header/Header";
import HeaderSSC from "../../components/Sub_Header/header_SSC";
import Variety from "../../components/Variety/Variety";
import KnowUrExams from "../../components/Know_Ur_Exams/Know_Ur_Exams";
import Search_Toppers from "../../components/Search_Toppers/Search_Toppers";
import TopperIntroVideos from "../../components/Topper_Intro_Videos/Topper_Intro_Videos";
// import Accordion from "../../components/Accordion/Accordion";
import Footer from "../../components/Footer/Footer";
import Accordion from "../../components/jitendra/Accordion/Accordion";
// import ToppersPlanStrategy from "../../components/Toppers_Plan_Strategy/Toppers_Plan_Strategy";
// import NewsArticles from "../../components/News_Articles/News_Articles";
function SecondPage(){
    // console.log()
    return(
        <>
            <Header />
            <HeaderSSC />
            <Variety />
            {/* <h1>{props.value}</h1> */}
            <KnowUrExams />
            <Search_Toppers />

            <TopperIntroVideos />
            {/* <ToppersPlanStrategy />
            <NewsArticles /> */}
            {/* <Accordion /> */}
            <Accordion />

            <div style={{float: "left", width: '100%'}}>
            <Footer />
            </div>
        </>
    )
}
export default SecondPage;