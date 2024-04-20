import React from 'react';
import classes from "./SSC_CGL_Tier_2.module.css";


const TopperScheduleData = (props) => {
  return (
    <>
    <div className={classes.schedule_main_card_data}>
      <div className={classes.schedule_heading_div}>
      <h1>{props.heading}</h1>
      </div>
      <div className={classes.schedule_examPattern}>
      <p> Exam : {props.examPattern}</p>
      </div>
      <div className={classes.schedule_imp}>
      <p><span>{props.important}</span></p>
      </div>
      <div className={classes.schedule_syllabus}>
      <p>{props.syllabus}</p>
      </div>
      <div className={classes.schedule_examFocus}>
      <p>{props.examFocus}</p>
      </div>
      <div className={classes.schedule_focusOnTcs}>
      <p>{props.focusOnTcs}</p>
      </div>
      <div className={classes.schedule_mockTest}>
        <p>{props.mockTest}</p>
      </div>
      <div className={classes.schedule_subWise}>
      <p>{props.subWise}</p>
      </div>
      <div className={classes.schedule_strategy}>
      <h3>{props.strategy}</h3>
      </div>
      <div className={classes.schedule_coaching}>
      <p>{props.coaching}</p>
      </div>
      <div className={classes.schedule_time_div}>
        <p>{props.time}</p>
      </div>
      <div className={classes.schedule_notes}>
      <p>{props.notes}</p>
      </div>
      <div className={classes.schedule_books}>
      <p>{props.books}</p>
      </div>
      <div className={classes.schedule_preference}>
      <p>{props.preference}</p>
      </div>
      <div className={classes.schedule_classNotes}>
      <p>{props.classNotes}</p>
      </div>
      <div className={classes.schedule_focusOnTcsII_div}>
      <p>{props.focusOnTcsII}</p>
      </div>
      <div className={classes.schedule_calculation}>
      <p>{props.calculation}</p>
      </div>
      <div className={classes.schedule_reasoning_div}>
      <p>{props.reasoning}</p>
      </div>
      <div className={classes.schedule_reasongTest_div}>
      <p>{props.reasoningTest}</p>
      </div>
      <div className={classes.schedule_lecture}>
      <p>{props.lecture}</p>
      </div>
      <div className={classes.schedule_bookName}>
      <p>{props.bookName}</p>
      </div>
      <div className={classes.schedule_english}>
      <p>{props.english}</p>
      </div>
      <div className={classes.schedule_subNameI}>
      <p>{props.subNameI}</p>
      </div>
      <div className={classes.schedule_vol}>
      <p>{props.volume}</p>
      </div>
      <div className={classes.schedule_practiceBook}>
      <p>{props.practiceBook}</p>
      </div>
      <div className={classes.schedule_vocabulary}>
      <p>{props.vocabulary}</p>
      </div>
      <div className={classes.schedule_synoAnto}>
      <p>{props.synoAnto}</p>
      </div>
      <div className={classes.schedule_comprehension}>
      <p>{props.comprehension}</p>
      </div>
      <div className={classes.schedule_pqrs}>
      <p>{props.pqrs}</p>
      </div>
      <div className={classes.schedule_comBook}>
      <p>{props.comBooks}</p>
      </div>
      <div className={classes.schedule_gk_div}>
      <p>{props.generalKnowledge}</p>
      </div>
      <div className={classes.schedule_currentAffair}>
      <p>{props.currentAffair}</p>
      </div>
      <div className={classes.schedule_stateWise}>
      <p>{props.regionalStateWise}</p>
      </div>
    </div>
    </>
  )
}
export default TopperScheduleData;