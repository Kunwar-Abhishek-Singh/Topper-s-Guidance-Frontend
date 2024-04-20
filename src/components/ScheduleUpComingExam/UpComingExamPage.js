import React from "react";
import classes from "./UpComimgExamPage.module.css";
import UpComingExamTable from "../ScheduleUpComingExamTable/UpComingExamTable";


const UpComingExam = () => {
  return (
    <>
      <div className={classes.full_div}>
        <div className={classes.upcoming_exam}>
          <h2>
            Upcoming Govt Exam Calendar 2023-24 PDF List (June) – Check All
            States & Central Govt Exam Dates,
            <br /> Schedule 2023 :-          
          </h2>                
        </div>
        <div className={classes.secondtop_para}>                 
          <h4>
            The list of Upcoming Government Exams 2023 is provided below in this
            article. Candidates can read this article to check exam dates of
            various Upcoming Government Exams 2023.
          </h4>                                                    
        </div>
        <div className={classes.content}>                                      
          <p>
            Upcoming Government Exams: It is the dream of every youth to crack
            the top government exams of India. There are some upcoming
            government exams in 2023 which is very popular. Candidates are
            advised to keep themselves informed about upcoming government exam
            dates and start your preparation accordingly. The dates for major
            upcoming government exams like UPSC, SSC, PCS, Railway, Banking,
            CTET, Police and others are given below.We will continue to update
            this list with new notifications. Candidates are advised to adhere
            to the necessary rules and guidelines during their preparation for
            government exams. Below is the list of Upcoming Government Exams in
            2023. Candidates can keep an eye on updates regarding their
            government exam dates through this list.
          </p>
          <img
            src="https://etimg.etb2bimg.com/photo/99585532.cms"
            alt="Grouping_pic"
          />
          <p>
            Candidates are advised to adhere to the necessary rules and
            guidelines during their preparation for government exams. Below is
            the list of Upcoming Government Exams in 2023. Candidates can keep
            an eye on updates regarding their government exam dates through this
            list.
          </p>
        </div>
        <div className={classes.current_affair}>
          <h4>Latest: Check Monthly Current Affairs 2023</h4>
        </div>
        <div className={classes.dataTable}>
         <UpComingExamTable/> 
        </div>
      </div>
    </>
  );
};

export default UpComingExam;
