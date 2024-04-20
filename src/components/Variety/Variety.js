import React, {useState, useEffect} from 'react';
import classes from "./Variety.module.css";
import { useParams } from 'react-router-dom';
import { exam_held_under } from '../../API/Apicall';
import ssc_img from "../../images/ssc img.svg";
import railway_img from "../../images/indian-railways_exam.png";
const Variety = (props) => {
    const {exam_selection} = useParams();
    
    const [varieties, setVarieties] = useState([]);
    const getVarieties = async ()=>{
        const response = await exam_held_under()
        console.log(response)
        setVarieties(response.data);
    }

    useEffect(()=>{
        getVarieties();
    },[])

    return (
        <>
            <div className={classes.variety_main_div}>
                <div className={classes.at_a_glance}>
                    <h2>{exam_selection} at a glance</h2>
                </div>
                <div className={classes.variety_heading}>
                    <h2>Varieties of Exams held under {props.value} :-</h2>
                </div>
                {varieties.filter(data => data.id === exam_selection).map((examName,index) => (
                <div className={classes.exams_variety_names} key={index}>
                 {examName.Exams_held_under && examName.Exams_held_under.map((exam,index) => (
                    <div className={classes.variety_details} key={index}>
                        <img src={exam_selection==="SSC" ? ssc_img : railway_img} alt='ssc_icon' className={classes.ssc_variety_icon}></img>
                        <p>{exam.exam}</p> 
                        
                        
                    </div>
                   
                    ))}
                </div>
                ))}
            </div>
        </>
    )
}

export default Variety;
