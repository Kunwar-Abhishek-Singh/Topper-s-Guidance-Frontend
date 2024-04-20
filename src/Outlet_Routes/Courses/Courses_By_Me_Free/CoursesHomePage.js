import React, { useEffect } from "react";
import classes from "./Courses.module.css";
import CoursesData from "./CoursesData";
import { useState } from "react";
import { dashboardCoursesPaid } from "../../../API/Apicall";

const CoursesHomePage = () => {

  const [coursesHomePageData,setCoursesHomePageData] = useState([]);
  const getCoursesHomePageData = async ()=>{
    const response = await dashboardCoursesPaid();
    console.log(response);
    setCoursesHomePageData(response.data);
  }
  useEffect(()=>{
    getCoursesHomePageData();
  })

  return (
    <>
      <div className={classes.course_title}>
        <h1>Popular Online & Offline Courses</h1>
      </div>
      <div className={classes.head_course}>
        <div className={`${classes.main_cards} ${classes.item_main_card}`}>
          <li className={classes.main_cards_items}>
            {coursesHomePageData.map((item) => (
              <CoursesData
                name={item.courseName}
                batch={item.startBatch}
                imagesrc={item.image}
                class={item.class}
                teacherName={item.teacherName}
              />
            ))}
          </li>
        </div>
        <div className={classes.right_side}>
          <div className={`${classes.side_cards_courses} ${classes.item_main_card}`}>
            <h4>More Links ssc</h4>
            <li className={classes.side_cards_items}>
              {coursesHomePageData.slice(0, 6).map((item, index) => (
                <li key={index}>
                  {item.testSeries.map((data, index) => (
                    <p key={index}>{data}</p>
                  ))}
                </li>
              ))}
            </li>
          </div>

          {/* ----------upsc ---------      */}

          <div
            className={`${classes.side_cards_courses} ${classes.item_main_card}`}
            id={classes.side_up}
          >
            <h4>More Links Upsc</h4>
            <li className={classes.side_cards_items}>
              {coursesHomePageData.slice(6, 12).map((item, index) => (
                <li key={index}>
                  {item.testSeries.map((data, index) => (
                    <p key={index}>{data}</p>
                  ))}
                </li>
              ))}
            </li>
          </div>

          {/* --------------- Railways ------------------------ */}

          <div
            className={`${classes.side_cards_courses} ${classes.item_main_card}`}
            id={classes.side_up}
          >
            <h4>More Links Railways</h4>
            <li className={classes.side_cards_items}>
              {coursesHomePageData.slice(12, 18).map((item, index) => (
                <li key={index}>
                  {item.testSeries.map((data, index) => (
                    <p key={index}>{data}</p>
                  ))}
                </li>
              ))}
            </li>
          </div>

          {/* ----------- Banking ---------------  */}

          <div
            className={`${classes.side_cards_courses} ${classes.item_main_card}`}
            id={classes.side_up}
          >
            <h4>More Links Banking</h4>
            <li className={classes.side_cards_items}>
              {coursesHomePageData.slice(18, 22).map((item, index) => (
                <li key={index}>
                  {item.testSeries.map((data, index) => (
                    <p key={index}>{data}</p>
                  ))}
                </li>
              ))}
            </li>
          </div>

          {/* ------------------ Others ----------------  */}

          <div
            className={`${classes.side_cards1} ${classes.item_main_card}`}
            id={classes.side_up}
          >
            <div className={classes.card_h2}>
              <h2>Mission Selections</h2>
            </div>
            <div className={classes.card_notice}>
              <p>Notification Out</p>
            </div>
            <div className={classes.card_vac}>
              <p>Vacancies : 13700</p>
            </div>
            <div className={classes.card_tar}>
              <h4>Target ssc cgl 2023</h4>
            </div>
            <div className={classes.card_bat}>
              <h6>Complete Batch</h6>
              <p>Prelims + Mains + Typing</p>
            </div>
            <div className={classes.card_evr}>
              <p>
                test series, crash course typing
                <br /> everything in one batch{" "}
              </p>
            </div>

            {/* <li className={classes.side_cards_items}>
          {cData.slice(18, 22).map((item,index) => (
            <li key={index}>
            {item.testSeries.map((data, index)=> (
              <p key={index}>{data}</p>
              ))}
            </li>
          ))}
          </li> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesHomePage;
