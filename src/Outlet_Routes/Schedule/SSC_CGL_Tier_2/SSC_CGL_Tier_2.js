import React from "react";
import classes from "./SSC_CGL_Tier_2.module.css";
import TopperScheduleData from "./Topper_Schedule_Data";

const expertScheduleData = [
  {
    id: 1,
    heading: "Enter Into Preparation or not",
    examPattern: "Tier I, Tier II",
    imp: "important point",
    syllabus: "stick to syllabus",
    examFocus: "Focus on PYQ (from 2000 on words)",
    focusOnTcs:
      "After Notification - focus on TCS based Question (Last 5 year)",
    mockTest: "Mock Test (After completing 60-70%)",
    subWise: "Subject Wise",
    maths: {
      Strategy: {
        subName: "Math Strategy",
        coaching: "Coaching ???",
        time: "Time - 5 month",
        notes: "Class notes - For Self",
      },
    },
    books: {
      subjectName: "Books Maths",
      preference: "Complete Beginner - Pinnacle/Kiran",
      classNotes: "Jitendra Thakur",
      focusOnTcsII: "After notification focus on TCS PYQ",
      calculation: "Calculation / Daily Practice",
    },
    reasoning: {
      subjectNameII:"Reasoning",
      test: "Reverse learing through mock test",
      lecture: "You tube free & lecture",
      bookName: "Pinnacle",
    },
    english: {
      grammar: {
        titleName:"English",
        subNameI: "Grammar",
        volume: "vol - 1",
        practiceBook: "Error Pro/ Mirror Common Error",
      },
    },
    vocabulary: {
      booksName: "Black Books (Revise Multiple Times)",
      synoAnto: "OWS, Idiom, Phrasal, syno & Anto",
    },
    comprehension: {
      newPaper: "New & Paper Reading (or Novel)",
      pqrs: "PQRS, Cloze Test, Passage",
      comBooks: "Pinnacle Books",
    },
    generalKnowledge: {
      subjectName: "General Knowledge(Indologus Monthly)",
      currentAffair: "Current Affairs - Last 6 Months",
      regionalStateWise:
        "Dance, Fair, Festival, Books & Authors - PYQ (Reverse Learn)",
    },
    scheduleRightSide:[
        "Home",
        "Books",
        "Exam Preparation",
        "Experts",
        "Governments Exam",
        "Audio Books",
        "Online Class",
        "Off Line Test",
        "Video Courses",
        "e-News",
    ],
  },
];

const SSCCGLTier2 = () => {
  return (
    <>
      <div className={classes.schedule_main_div}>
        <div className={classes.schedule_left_div}>
          {expertScheduleData.map(item => (
            <>
             {/*  {tem.books.map((mitem) => (
                <div>
                    {mitem.subjectName}
              </div>
              ))} */}    
              <TopperScheduleData
               heading={item.heading} 
               examPattern={item.examPattern}
               important={item.imp}
               syllabus={item.syllabus}
               examFocus={item.examFocus}
               focusOnTcs={item.focusOnTcs}
               mockTest={item.mockTest}
               subWise={item.subWise}
               strategy={item.maths.Strategy.subName}
               coaching={item.maths.Strategy.coaching}
               time={item.maths.Strategy.time}
               notes={item.maths.Strategy.notes}
               books={item.books.subjectName}
               preference={item.books.preference}
               classNotes={item.books.classNotes}
               focusOnTcsII={item.books.focusOnTcsII}
               calculation={item.books.calculation}
               reasoning={item.reasoning.subjectNameII}
               reasoningTest={item.reasoning.test}
               lecture={item.reasoning.lecture}
               bookName={item.reasoning.bookName}
               english={item.english.grammar.titleName}
               subNameI={item.english.grammar.subNameI}
               volume={item.english.grammar.volume}
               practiceBook={item.english.grammar.practiceBook}
               vocabulary={item.vocabulary.booksName}
               synoAnto={item.vocabulary.synoAnto}
               comprehension={item.comprehension.newPaper}
               pqrs={item.comprehension.pqrs}
               comBooks={item.comprehension.comBooks}
               generalKnowledge={item.generalKnowledge.subjectName}
               currentAffair={item.generalKnowledge.currentAffair}
               regionalStateWise={item.generalKnowledge.regionalStateWise}
               />
            </>
          ))}
        </div>
              
        <div className={classes.schudele_rightSide_div}>
          <div className={classes.schedule_heading}>
            <h3>Category</h3>
          </div>
              <div className={classes.schedule_rightSide_item}>
              {expertScheduleData.map((item, index)=>(
                <li key={index}>
                  {item.scheduleRightSide && item.scheduleRightSide.map((data,index)=>(
                    <p key={index}>{data}</p>
                  ))}
                </li>
              ))}
            
              </div>
        </div>
        {/* <div>
          {expertScheduleData.map((item)=>(
            
            item.maths.map((matitem) =>(
            <TopperScheduleData dsaaa={matitem.Strategy}
          

            />
            ))
            ))}
        </div> */}
      </div>
    </>
  );
};

export default SSCCGLTier2;
