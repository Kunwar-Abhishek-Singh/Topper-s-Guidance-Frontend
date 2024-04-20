import React, { useState, useEffect } from 'react';
import classes from "./Accordion.module.css";
import MyAccordion from './MyAccordion';
import { faqdata } from '../../../API/Apicall';
import { cookie_validation_context } from "../../Context_Component/Context";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';

const Accordion = () => {
    const {topper_name} = useParams();

    const data = useContext(cookie_validation_context)
    const Navigate = useNavigate();
    var heading = "Frequently Asked Questions";
    const [visible, setVisible] = useState(6);
    const [changeBtn, setChangeBtn] = useState("More");
    // const data1 = false;
    const ask_query_handler = ()=>{
        // alert(data)
        if(data[0]){
            if(topper_name){
                Navigate(`/logged_in_profile_dashboard/${topper_name}/ask_me`)

            }
            else{
                alert("Please Select any Topper First")
            }
            
        }
        else {
            Navigate('/login')
        }
        // {data?Navigate(`/logged_in_profile_dashboard/${topper_name}/ask_me`):Navigate('/login')}
        

    }
    function moreBtnClickHandler() {

        if (visible < faqData.length) {

            setVisible(prevValue => prevValue + 2)
            if (visible === faqData.length - 2) {
                setChangeBtn("Less");
            }
        }
        else {
            setVisible(6);
            setChangeBtn("More");    
        }
    };

    const [faqData, setFaqData] = useState([]);
    const getFaqData= async () =>{
        const response = await faqdata()
        console.log(response)
        setFaqData(response.data)
    }
    useEffect(()=>{
        getFaqData()
    },[])
    
    return (
        <>
            <section className={classes.main_sec}>
                <div className={classes.faq_main}>
                    <h1>{heading}</h1>
                    {
                        faqData.slice(0, visible).map((curEle) => {
                            const { id } = curEle;
                            return <MyAccordion key={id} {...curEle} />
                        })
                    }
                    <div className={classes.more_ask_queries_faq_btns}>
                        <button onClick={moreBtnClickHandler}>{changeBtn}</button>
                        <button onClick={ask_query_handler}>Ask Queries</button>
                    </div>   

                </div>


            </section>

        </>
    )
}

export default Accordion;