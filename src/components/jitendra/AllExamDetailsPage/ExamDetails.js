import React from "react";
import classes from  "./ExamDetails.module.css";
// import {Link} from 'react-router-dom';

const ExamDetails = () => {
  return (
    <>
      <div className={classes.exam_details}>
          <div className={classes.main_page}>
              <h1>Know your Exam (all about SSC CGL) :-</h1>
          </div>
          <div className={classes.notice_page}>
           {/* <Link to="/main_dashboard">  */}
           <div className={classes.exam_notice}>
            <p>#. ssc respective year exam Summary</p>
            <p>#. ssc exam date out</p>
            <p>#. ssc exam admit cards </p>
            <p>#. ssc notification 2023</p>
            <p>#. ssc exam</p>
            <p>#. ssc exams equirement 2023</p>
            <p>#. ssc respective year exam Summary</p>
            <p>#. ssc respective year exam Summary</p>
            <p>#. ssc respective year exam Summary</p>
            <p>#. ssc respective year exam Summary</p>
            <p>#. ssc respective year exam Summary</p>
            </div> 
            {/* </Link>  */}
           {/* <Link to ="/main_dashboard">  */}
           <div className={classes.exam_notice}>
            <p>#. ssc respective year exam Summary</p>
            <p>#. ssc respective year exam Summary</p>
            <p>#. ssc respective year exam Summary</p>
            <p>#. ssc respective year exam Summary</p>
            <p>#. ssc respective year exam Summary</p>
            <p>#. ssc respective year exam Summary</p>
            <p>#. ssc respective year exam Summary</p>
            <p>#. ssc respective year exam Summary</p>
            <p>#. ssc respective year exam Summary</p>
            <p>#. ssc respective year exam Summary</p>
            <p>#. ssc respective year exam Summary</p>
            </div> 
            {/* </Link>                      */}
          </div>
      </div>
    </>
  );
};

export default ExamDetails;
