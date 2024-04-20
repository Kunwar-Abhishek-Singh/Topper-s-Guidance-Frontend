import React from 'react';
import Header from '../../components/Header/Header';
import Quotes from '../../components/jitendra/CoverPage/Quotes';
import AboutUs from '../../components/jitendra/AboutUs/AboutUs';
import Upcoming_Webinar from '../../components/Upcoming_Webinars/Upcoming_Webinars';
import CardCom from '../../components/jitendra/CardComponent/CardCom';
import ExamDetails from '../../components/jitendra/AllExamDetailsPage/ExamDetails';
import Follower from '../../components/jitendra/Followers/Follower';
import Accordion from '../../components/jitendra/Accordion/Accordion';
import Footer from '../../components/Footer/Footer';
           
const ThirdPage = () => {
  return (
    <>
        <Header />
        <Quotes />
        <AboutUs />
        <Upcoming_Webinar />
        <CardCom />
        <ExamDetails />
        <Follower />
        <Accordion />
        <div style={{float: "left", width: '100%'}}>
            <Footer />
            </div>        
        
    </>
  )
}

export default ThirdPage;
