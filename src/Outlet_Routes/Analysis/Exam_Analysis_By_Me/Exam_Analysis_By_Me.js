import React from 'react';
import classes from "./Exam_Analysis_By_Me.module.css";
import {
  shift_wise_date_wise_list,
  sections_topics_chsl_tier1_2023_analysis,
  sections_topics_chsl_tier2_analysis,
  difficulty_level_and_attempts_2022,
  ssc_tier_1_exam_2020_august
} from "../../../Dummy_Database";

const ExamAnalysisByMe = () => {
  return (
    <>
      <div className={classes.exam_analysis_main_div}>
        <div className={classes.table_of_content_outer_div}>
          {/* ----------------about analysis------------------- */}
          <div>
            <div className={classes.about_analysis}>
              <h3>About SSC CHSL Exam Analysis</h3>
              <p>
                SSC CHSL Exam Analysis 2023 has been shared below for the Tier 1 exam based on the candidates' feedback of all the <br />
                exam shifts from August 2 to 17, 2023. As per the students' reactions, the overall difficulty level of SSC CHSL question <br />
                paper 2023 is easy to moderate. Candidates also shared the details regarding the types of questions asked in the exam, <br />
                topics covered, breakdown of the questions, and the overall difficulty level of the exam, etc. Toppers Guidance reached out <br />
                to the students who appeared for the SSC CHSL 2023 exam and gathered the real-time exam analysis and review. Check <br />
                below the detailed day-wise and section-wise SSC CHSL 2023 exam analysis. Candidates can get here the SSC CHSL exam <br />
                analysis of previous years as well. <br />
                Candidates also shared the expected SSC CHSL cutoff 2023 while providing the exam review. The SSC CHSL 2023 exam <br />
                was held from August 2 to 17, 2023. Candidates who are yet to appear for the exam in the upcoming shifts should check <br />
                below the detailed exam analysis to know the difficulty level of SSC CHSL question paper 2023 and important topics. <br />

                The SSC CHSL exam is conducted based on the syllabus notified in the official notification. The SSC CHSL Tier 1 is the first <br />
                stage of the exam and this phase is the toughest among all because of the highest number of candidates competing. The <br />
                SSC CHSL cutoff bounds to increase with every passing year considering the high level of competition.
              </p>
            </div>
          </div>

          {/* ------------Table of Content----------------- */}

          <div className={classes.table_of_content}>
            <h2>Table of Contents</h2>
            <ul>
              <li><a>SSC CHSL Exam Analysis 2023</a></li>
              <li><a>SSC CHSL Exam Analysis 2023: Shift-Wise & Date-Wise</a></li>
              <li><a>SSC CHSL Exam Analysis 2023: Section-Wise Questions Asked</a></li>
              <li><a>SSC CHSL Tier 2 Exam Analysis 2022</a></li>
              <li><a>SSC CHSL Exam Analysis (Previous Years)</a></li>
              <li><a>Prepare Maths for SSC CHSL 2023 Exam</a></li>
              <li><a>SSC CHSL Exam Analysis 2023 FAQs</a></li>
            </ul>
          </div>

          {/* ------------SSC CHSL Exam Analysis 2023---------------------- */}

          <div className={classes.analysis_chsl_2023}>
            <h3>SSC CHSL Exam Analysis 2023</h3>
            <p>The SSC CHSL Tier 1 exam 2023 is being held online from
              <span> August 2 to 17, 2023.</span> The exam contains a total of 100 Questions <br />
              and each question carries 2 marks. The SSC CHSL exam analysis 2023 of the Tier 1 exam
              has been shared here. <br />
              Check the section-wise SSC CHSL Tier 1 exam analysis 2023:
            </p>
          </div>
          <div className={classes.analysis_chsl_2023_table}>
            <table>
              <tr>
                <th>Subject</th>
                <th>Good Attempts</th>
                <th>Difficulty Level</th>
              </tr>
              <tr>
                <td>General Intelligence</td>
                <td>19 - 20</td>
                <td>Moderate</td>
              </tr>
              <tr>
                <td>General Awareness</td>
                <td>18 - 19</td>
                <td>Easy to Moderate</td>
              </tr>
              <tr>
                <td>Quantitative Aptitude</td>
                <td>13 - 14</td>
                <td>Moderate</td>
              </tr>
              <tr>
                <td>English Language</td>
                <td>20 - 21</td>
                <td>Easy to Moderate</td>
              </tr>
              <tr>
                <td>Overall</td>
                <td>72 - 79</td>
                <td>Easy to Moderate</td>
              </tr>
            </table>
          </div>
          <div className={classes.analysis_2023_chsl_embed_video}>
            <h3>Watch the SSC CHSL exam analysis 2023 video below.</h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9qmHUZGFjoo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>


          {/* ----------------SSC CHSL Exam Analysis 2023: Shift-Wise & Date-Wise ------------------- */}

          <div className={classes.chsl_analysis_2023_shift_date_wise}>
            <h3>SSC CHSL Exam Analysis 2023: Shift-Wise & Date-Wise</h3>
            <p>The table below contains the shift-wise and date-wise SSC CHSL exam analysis 2023.</p>

            <div className={classes.shift_wise_dashboard_list}>


              <div className={classes.shift_wise_date}>
                <h3 >Date</h3>
                {shift_wise_date_wise_list.map((data) => (
                  <div className={classes.shift_wise_dates}>
                    <p>{data.date}</p>
                  </div>
                ))}
              </div>
              <div className={classes.shift_wise_link}>
                <h3 >Exam Analysis Link</h3>
                {shift_wise_date_wise_list.map((data) => (
                  <div className={classes.shift_wise_links}>
                    <p><a href={data.exam_analysis_link}>{data.exam_analysis_shift_name}</a></p>
                  </div>
                ))}
              </div>
            </div>


          </div>


          {/* --------SSC CHSL Exam Analysis 2023: Section-Wise Questions Asked ----------- */}
          <div className={classes.chsl_analysis_2023_section_wise}>
            <h3 className={classes.chsl_analysis_2023_section_wise_h3}>SSC CHSL Exam Analysis 2023: Section-Wise Question Asked</h3>
            <div className={classes.section_wise_question_asked}>
              <div className={classes.section_box}><h3>Section</h3></div>
              <div className={classes.topic_box}><h3>Topic</h3></div>
            </div>


            {sections_topics_chsl_tier1_2023_analysis.map((data) => (
              <div className={classes.section_wise_question_asked}>
                <div className={classes.section_box}>
                  <p>{data.section}</p>
                </div>



                <div className={classes.topic_box}>{data.topics.map((topics_data) => (
                  <p><li>{topics_data}</li></p>
                ))}</div>


              </div>
            ))}
          </div>

          {/* --------------SSC CHSL Tier 2 Exam Analysis 2022--------------- */}

          <div className={classes.chsl_tier_2_analysis_2022}>
            <h3>SSC CHSL Tier 2 Exam Analysis 2022</h3>
            <p className={classes.chsl_tier_2_analysis_2022_p}>Have a look at the section-wise SSC CHSL Tier 2 exam analysis 2022 below:</p>
            <div className={classes.section_wise_question_asked}>
              <div className={classes.section_box}><h3>Section</h3></div>
              <div className={classes.topic_asked_box}><h3>Topic Asked</h3></div>
              <div className={classes.difficulty_level_box}><h3>Difficulty Level</h3></div>
            </div>


            {sections_topics_chsl_tier2_analysis.map((data) => (
              <div className={classes.section_wise_question_asked}>
                <div className={classes.section_box}>
                  <p>{data.section}</p>
                </div>



                <div className={classes.topic_asked_box}>{data.topics.map((topics_data) => (
                  <p><li>{topics_data}</li></p>
                ))}</div>

                <div className={classes.difficulty_level_box}>
                  <p>{data.level}</p>
                </div>


              </div>
            ))}

          </div>

          {/* ------------SSC CHSL Exam Analysis (Previous Years)------------------ */}
          <div className={classes.chsl_analysis_previous_papers}>
            <h3>SSC CHSL Exam Analysis (Previous Years)</h3>
            <p>The candidates can see here the exam analysis of previous years.</p>
          </div>


          {/* ----------------SSC CHSL Tier 1 Exam Analysis 2022--------------------- */}
          <div className={classes.chsl_tier_1_analysis_2022}>
            <div>
              <h3>SSC CHSL Tier 1 Exam Analysis 2022</h3>
              <p>The Commission conducted the SSC CHSL Tier 1 Exam 2022 from March 9-21, 2023. Here are some of the major or <br />
                important highlights that are provided so that you will get an idea about the previous year's exam papers and the overall <br />
                difficulty level of the SSC CHSL Tier 1 exam.
              </p>
            </div>

            <div>
              <ul>
                <li>
                  It has been noticed that the General Science section holds the most weightage in the General Awareness Section. In <br />
                  general science, questions are mainly asked about Biology, Physics, Chemistry, environmental science, etc.
                </li>
                <li>
                  The mathematics section demands a lot of effort and time from the candidates, so we can say that its difficulty level was <br />
                  moderate.
                </li>
                <li>
                  Around 6 to 7 questions are generally asked from static gk, including topics like Indian Politics, History, Culture <br />
                  Economy, Geography, etc.
                </li>
                <li>
                  In the recent eams, an increase in the number of current affairs questions was seen in SSC exams. So, focus on <br />
                  current affairs and prepare accordingly.
                </li>
              </ul>
              <p>Below is the section-wise SSC CHSL exam analysis 2022.</p>
            </div>
            <div className={classes.section_difficulty_attempts_div}>
              <div className={classes.section_wise_question_asked}>
                <div className={classes.section_name_box}><h3>Section Name</h3></div>
                <div className={classes.difficulty_level_section_box}><h3>Difficulty Level</h3></div>
                <div className={classes.attempts_box}><h3>Good Attempts</h3></div>
              </div>


              {difficulty_level_and_attempts_2022.map((data) => (
                <div className={classes.section_wise_question_asked}>
                  <div className={classes.section_name_box}>
                    <p>{data.section}</p>
                  </div>



                  <div className={classes.difficulty_level_section_box}>
                    <p>{data.difficulty}</p>
                  </div>

                  <div className={classes.attempts_box}>
                    <p>{data.attempts}</p>
                  </div>


                </div>
              ))}
            </div>

          </div>
          {/* -------------------SSC CHSL Tier-1 2021 English Language Analysis------------------- */}
          <div className={classes.chsl_tier_1_2021_subject_wise}>
            <div>
              <h3>
                SSC CHSL Tier-1 2021 English Language Analysis
              </h3>
              <p>
                Most of the candidates shared that the English section was comparatively easy.  The questions were based on the syllabus <br />
                mentioned in the official notification. The questions that appeared in the paper were from synonyms, antonyms, idioms and <br />
                phrases, spot the error, comprehension, incorrect spelling, and sentence correction. The grammar section was <br />
                overwhelmingly present in the paper.
              </p>
              <p>
                The candidates can see here the details about the 
                <a href='https://www.shiksha.com/sarkari-exams/ssc/articles/ssc-chsl-posts-salary-blogId-104523'>
                   SSC CHSL Posts and Salary.
                </a>
              </p>

            </div>
          </div>

          {/* ---------------------SSC CHSL Tier-1 2021 Quantitative Aptitude Analysis------------------------ */}
          <div className={classes.chsl_tier_1_2021_subject_wise}>
            <div>
              <h3>SSC CHSL Tier-1 Quantitative Aptitude Analysis</h3>
              <p>
                The speed and accuracy of the candidates are the keys to solving the quantitative aptitude section. This section was <br />
                calculation intesive and hence it was time-consuming. The questions from average were asked in almost all sets. Some of <br />
                the sets contain the questions from trigonometry, ratio and proportion, compound and simple interest, series and the like.
              </p>
            </div>
          </div>

          {/* -----------------------SSC CHSL Tier-1 2021 General Awareness--------------------- */}
          <div className={classes.chsl_tier_1_2021_subject_wise}>
            <div>
              <h3>SSC CHSL Tier-1 2021 General Awareness Analysis </h3>
              <p>The general awareness section has two parts. The first one is static General Knowledge and second is the current affairs. <br />
                This section is crucial for the selection because, in the rest of the sections, the candidate's score is based on the practice but this <br />
                section requires learning and recalling facts. The candidates told us thata there were a good number of quesstions about <br />
                current affairs, history and art and culture and important festivals in India. Some questions were asked about the dance forms <br />
                and associated dancers. In some sets, there were a good number of questions from General Science.
              </p>
            </div>
          </div>

          {/* --------------------SSC CHSL Tier-1 2021 General Intelligence Analysis------------------------- */}
          <div className={classes.chsl_tier_1_2021_subject_wise}>
            <div>
              <h3>SSC CHSL Tier-1 2021 General Intelligence Analysis</h3>
              <p>
                The candidates told us that the General Intelligence questions were easy. Most of the questions in the reasoning section <br />
                we taken from the mathematical operations.
              </p>
            </div>
          </div>

          {/* -----------------SSC CHSL Exam Analysis 2021 video--------------------- */}
          <div className={classes.chsl_tier_1_2021_subject_wise}>
            <h3>SSC CHSL Exam Analysis 2021 video</h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-4QPD4d-1Hw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>

            </iframe>
          </div>

          {/* --------------------------SSC CHSL Tier-1 Exam Analysis 2020--------------------- */}
          <div className={classes.chsl_tier_1_2021_subject_wise}>
            <div>
              <h3>
                SSC CHSL Tier-1 Exam 2020 
              </h3>
              <ul>
                <p><li>The exam was of easy to moderate level.</li></p>
                <p><li>There were no major changes in the exam pattern.</li></p>
                <p><li>This year, few questions were asked from current affairs topics.</li></p>
                <p><li>The numbers of questions from Geography was increased.</li></p>
                <p><li>SSC asked difficult questions from History this year.</li></p>
                <p><li>In English, questions were asked from topics such as jumbled sentences, synonyms, antonyms and Reading<br />
                 comprehension
                 </li></p>
                 <p><li>
                  In the Quantitative Aptitude section, questions were asked from Advance Maths, Compound Interest, Simple Interest, <br />
                  Trigonometry, Ratio and Proportion and Profit and Loss.
                 </li></p>
              </ul>
            </div>
          </div>

          {/* ----------------SSC CHSL Tier-1 Exam 2020 August-------------------- */}
          <div className={classes.chsl_tier_1_2021_subject_wise}>
            <div>
              <h3>SSC CHSL Tier-1 Exam 2020 August</h3>
              <p>
                Most of the candidates predicted that the expected cut off of the SSC CHSL Exam 2020 will be higher than the previous year. <br />
                Most of the candidates find the paper easy to solve but the Quantitative Section was time-consuming.
              </p>
            </div>
            <div>
            <div className={classes.section_wise_question_asked}>
                <div className={classes.section_name_box}><h3>Section Name</h3></div>
                <div className={classes.difficulty_level_section_box}><h3>Difficulty Level</h3></div>
                <div className={classes.attempts_box}><h3>Good Attempts</h3></div>
              </div>


              {ssc_tier_1_exam_2020_august.map((data) => (
                <div className={classes.section_wise_question_asked}>
                  <div className={classes.section_name_box}>
                    <p>{data.section}</p>
                  </div>



                  <div className={classes.difficulty_level_section_box}>
                    <p>{data.difficulty}</p>
                  </div>

                  <div className={classes.attempts_box}>
                    <p>{data.attempts}</p>
                  </div>


                </div>
              ))}
            </div>
          </div>


          {/* ----------------------main div starting------------------ */}
        </div>
      </div>
    </>
  )
}

export default ExamAnalysisByMe;
