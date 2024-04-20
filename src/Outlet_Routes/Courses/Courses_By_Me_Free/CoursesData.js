import React from "react";
import "./CoursesHomePage.js";
import classes from "./Courses.module.css";

const CoursesData = (props) => {
  return (
    <>
      <div className={classes.course_cards}>
        <h3 className={classes.courseHeading}>courses: {props.name}</h3>
        <p className={classes.batch}>start batch: {props.batch}</p>
        <p className={classes.liveBatch}>live class: {props.class}</p>
        <img className={classes.course_images} src={props.imagesrc} alt="course_pic"/>
        <h2 className={classes.teacherName}>faculty: {props.teacherName}</h2>        
      </div>      
    </>
  );
};

export default CoursesData;
