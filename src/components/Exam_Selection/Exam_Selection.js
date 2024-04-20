import React,{useState, useEffect} from "react";
import classes from  "./Exam_Selection.module.css";
import { Link } from "react-router-dom";
import { exam_selection } from "../../API/Apicall";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
function ExamSelection() {  
   
    // const [visible, setVisible] = useState(10);
    // const view_more_handler = () => {
    //     setVisible(prevValue=>prevValue+5);{MediaStreamAudio}
    // }


    //to extract the name or its value use this following rule
    // function nameExatractor (e){
    //      extractedName = e.target.dataset.value;   
    //     props.getData(extractedName);

    // }
    const [examData, setExamData] = useState([]);
    const getExamData = async () =>{
        const response = await exam_selection()
        console.log(response);
        setExamData(response.data);
        

    }
    useEffect(()=>{
        getExamData();
    },[])
    
    return (
        <div className={classes.exam_selection_main_div}>
            <h2>Select Your Exam :-</h2>
            <div className={classes.container}>
                {examData.slice(0,2).map((examName,index) => {
                    return (
                        <div className={classes.items} key={index}>   
                                   
                            <Link to={examName.exam} ><h3>{examName.exam}</h3></Link>
                        </div>
                    
                        
                    )
                })}

                

            </div>
            {/* <div className={classes.view_more_button}>
                <button onClick={view_more_handler}>
                    View more
                </button>
            </div> */}
        </div>
    )
}
export default ExamSelection;