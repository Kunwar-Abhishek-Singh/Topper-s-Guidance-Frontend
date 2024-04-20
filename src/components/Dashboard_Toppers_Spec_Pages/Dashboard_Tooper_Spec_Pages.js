import React from 'react';
import classes from "./Dashboard_Toppers_Spec_pages.module.css";
import DashboardToppersSpecPagesData from './Dashboard_Toppers_Spec_Pages_Data';




const dashboardTopperSpecPageData = [
  {
    id: 1,
    heading:"SSC CGL Toppers",
    videos:"https://webexamstudy.com/wp-content/uploads/2023/02/CTET-2.png",
    topperTitle:"Suchita Pareek (AIR 1) SSC CGL Topper Biography, Age, and Full Exam Strategy",
    date:" january 2023 by Jitendra Thakur",
    content1:"Suchita Pareek is the topper of SSC CGL 2020. When the SSC CGL declared the final result of the 2020 exam on 31 October 2022, Suchita got the All India Rank (AIR-1) and got selected as ASO (MEA) through SSC CGL. Among 7108 candidates, she cracked SSC CGL 2020 with AIR-1.",
    content2:"Hence, there are many factors of Suchita's success that she used while preparing for the SSC CGL exam. In this article, we will cover all the information she used to crack SSC CGL with AIR-1, and I hope you will be very curious to know this. Let's go further to know Suchita Pareek SSC CGL Topper Biography, Age, and Full Exam strategy and more.",
    content3:"Suchita Pareek Biography",
    images1:"https://webexamstudy.com/wp-content/uploads/2023/01/29.jpg",
    contentBio1:"Suchita Pareek was born in a small village in Rajasthan and her present age is 25 years. Her mother is a housewife, and her father works in a Pvt company. She has two sisters, including Suchita, and grew up in a middle-class family where everyone wants to change their family's situation based on education. Months later, she heard from her friends about the SSC staff selection commission that she didn't know earlier.",
    contentBio2:"Thus, she started the SSC CGL (Combine Graduate Level Exam) preparation in 2019, and on her first attempt, she cracked the SSC CGL 2019 as a Tax Assistant. Despite this, she was dissatisfied with this post because her dream was to become an ASO in MEA., so she targeted SSC CGL 2020 again to get her dream post.",
    contentBio3:"Moreover, she cracked this exam and got the All-India Rank (AIR-1) which made everyone proud of her. Let's discuss Suchita Pareek SSC CGL Topper Biography, Age, and Full Exam strategy.",
    content4:"SSC CGL Journey",
    imageJourney:"https://webexamstudy.com/wp-content/uploads/2023/01/30.jpg",
    contentJourney1:"After schooling in a government school in Rajasthan, she completed her graduate degree with BSc. (PCM). Now she was in a stage of confusion where she did not plan for her future. While she said in a famous interview show named “Ramo with toppers” that she did not know anything about SSC and its syllabus; what she knew was only about Banking. On the other hand, she heard from her friends about SSC and started looking for how to start SSC preparation. It took months to research, and suddenly she got a path to follow; let's talk further.",
    contentJourney2:"First, she tried for the SSC CHSL exam in 2019 but failed on her first attempt. Furthermore, she tried for SSC CGL 2019 after researching a lot about the nature of the SSC exam, the syllabus, and what types of questions the SSC asks in the exam. So, She made all her notes according to that and polished the preparation.",
    rightSideBar:[
      "Books",
      "Exam Preparation",
      "Experts",
      "Goverments Exam",
      "Audio Book",
      "Online Classes",
      "Online Test",
      "Video Courses",
      "e-News",      
    ],
  },
];

const DashboardTooperSpecPages = () => {
  return (
    <>
    <div className={classes.dash_spec_page_main_Cards}>
      <div className={`${classes.dash_spec_page_main_card}${classes.dash_spec_page_item_card}`}>
        <li className={classes.dash_spec_page_card_item}>
        {dashboardTopperSpecPageData.map((item)=>(
            <DashboardToppersSpecPagesData
              heading={item.heading}
              videos={item.videos}
              topperTitle={item.topperTitle}
              date={item.date}
              content1={item.content1}
              content2={item.content2}
              content3={item.content3}
              images1={item.images1}
              contentBio1={item.contentBio1}
              contentBio2={item.contentBio2}
              contentBio3={item.contentBio3}
              content4={item.content4}
              imageJourney={item.imageJourney}
              contentJourney1={item.contentJourney1}
              contentJourney2={item.contentJourney2}
            />
        ))}
        </li>
        </div>

        <div className={classes.dash_spec_page_right_sidebar}>
          <div className={classes.dash_spec_page_right_side_cards}>
            <h3 className={classes.rightSideBar_heading}>Category</h3>
          </div>
            <li className={classes.dash_spec_page_right_side_card_item}>
              {dashboardTopperSpecPageData.map((item, index)=>(
                <li key={index}>
                  {item.rightSideBar && item.rightSideBar.map((data, index)=>(
                    <p key={index}>{data}</p>
                  ))}
                </li>
              ))}
            </li>          
        </div>
    </div>
    </>
  )
}

export default DashboardTooperSpecPages;