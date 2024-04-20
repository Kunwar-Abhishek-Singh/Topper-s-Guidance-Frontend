import React,{useState, useEffect} from 'react';
import classes from "./Know_Ur_Exams.module.css";
// import ExamSelection from '../Exam_Selection/Exam_Selection';
import { useParams } from 'react-router-dom';
import { exam_held_under } from '../../API/Apicall';
const KnowUrExams = (props) => {
    const {exam_selection} = useParams();
    const [examHeld, setExamHeld] = useState([])
    
    const getExamHeldUnder = async ()=>{
        const response = await exam_held_under ()
        console.log(response);
        setExamHeld(response.data)
    }
    useEffect(()=>{
        getExamHeldUnder();
    },[])
    return (
        <>   
            <div className={classes.know_ur_exam_main_div}>
                <div className={classes.know_ur_exams_heading}>
                    <h2>Know about your Exams :-</h2>
                </div>
                <div className={classes.know_ur_exams_quote}>
                    <p>Before starting preparation for an exam, one needs to know the domain they are going into. Here are the list of entrance exams for </p> <br />
                    <p className={classes.know_ur_exam_break}>respective exams of {props.value}.</p>
                </div> 
                {examHeld.filter(data => data.id === exam_selection ).map((examName, index) => (
                    <div className={classes.container} key={index}>
                        {examName.Exams_held_under && examName.Exams_held_under.map((exam,index) => (
                            
                            <div className={classes.items} key={index}>
                                <a href={exam.link} target='_blank'><h3 className={classes.know_ur_exam_content}>{exam.exam}</h3></a>

                            </div>
                        
                        ))}

                    </div>

                ))}
                {/* {Exams_held.filter((elem) => elem.id === props.value)} */}

            </div>
        </>
    )
}

export default KnowUrExams;





// {
//     Exams_held.map((exam_Name)=> {
//         return (
//             <div className={classes.items}>
//                 {exam_Name.Exams_held_under_SSC && exam_Name.Exams_held_under_SSC.map((exam_category) => {
//                     return(
//                         <h3 className={classes.know_ur_exam_content}>{exam_category.exam}</h3>
//                     )
//                 })}

//             </div>
//         )
//     })
// }
