import React, { useEffect } from "react";
import SscData from "./SscData";
import classes from "./SscTest.module.css";
import { useState } from "react";
import { dashboardCoursesSelectedCourses } from "../../../API/Apicall";




const SscPage = () => {

  const [selectedCoursesData, setSelectedCoursesData] = useState([]);
  const getSelectedCoursesData = async ()=>{
    const response = await dashboardCoursesSelectedCourses();
    console.log(response);
    setSelectedCoursesData(response.data);
  }
  useEffect(()=>{
    getSelectedCoursesData();
  },[]);

  return (
    <>
    <div className={classes.SscPage_head}>
    <div className={classes.heading}>
        <h2>SSC ALL TYPES EXAM </h2>
    </div>
    <div className={classes.ssc_test_list}>
      {selectedCoursesData.map((item) => (
        <SscData
        image ={item.image}
          title={item.title}
          subtitle={item.subtitle}
          button={item.button}                     
        />
      ))}
    </div>
    </div>
    </>
  );
};

export default SscPage;
