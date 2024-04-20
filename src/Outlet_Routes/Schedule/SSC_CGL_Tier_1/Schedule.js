import React from "react";
import { ScheduleApi } from "./ScheduleApi";
import SeMenuItem from "./SeMenuItem";
import classes from "./Schedule.module.css"
import UpComingExam from "../../../components/ScheduleUpComingExam/UpComingExamPage";


const Schedule = () => {
  return (
    <div className={classes.sechedule}>
      <>
        <nav>
          <ul className={classes.menus}>
            {ScheduleApi.map((menu, index) => {
              const depthLevel = 0;
              return (
                <SeMenuItem items={menu} key={index} depthLevel={depthLevel} />
              );
            })}
          </ul>
        </nav>
        <UpComingExam/>
      </>
    </div>
  );
};

export default Schedule;

