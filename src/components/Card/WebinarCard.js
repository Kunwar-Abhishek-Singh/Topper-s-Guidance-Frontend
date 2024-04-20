import React from 'react'
import classes from "./WebinarCard.module.css"
import { FaVideo, FaCalendar, FaClock, FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { cookie_validation_context } from '../Context_Component/Context';
const WebinarCard = (props) => {
    const data = useContext(cookie_validation_context)
    const Navigate = useNavigate();
    const webinar_click_handler = ()=>{
        if(data[0]){
            
                Navigate(`/logged_in_profile_dashboard/${props.name}/my_give_away_events`)
            
            
            
        }
    else{
        Navigate('/login',{state:{
            nextUrl:`/logged_in_profile_dashboard/${props.name}/my_give_away_events`
        }})
    }
        
    }

  return (
    <>
    <div className={classes.card_boundary}>
                        <div className={classes.heading}>
                            <FaVideo size="35px" className={classes.faVideo_img} />
                            <h1>{props.heading}</h1>
                            {/* <h3 className={classes.break}>preparation of GK / GS</h3> */}
                        </div>
                        <div className={classes.date_time_and_user_pic_div}>
                            <div className={classes.webinar_date_time}>
                                <div className={classes.calendar_image}>
                                    <FaCalendar className={classes.faCalendar_img} />
                                    <p>{props.date}</p>
                                    <p>{props.month}</p>
                                </div>

                                <div className={classes.vertical_line}>

                                </div>
                                <div className={classes.clock_image}>
                                    <FaClock className={classes.faClock_img} />
                                    <p>{props.time}</p>
                                    <p>{props.am_pm}</p>
                                </div>
                            </div>
                            <div className={classes.webinar_fa_user_img} >
                                <FaUserCircle size="85px" className={classes.faUser_img} />
                                <p> {props.name}</p>
                                <p>{props.exam} ({props.rank}<sup>{props.sup}</sup>)</p>
                            </div>
                        </div>
                        <div className={classes.webinar_content}>
                            <p>{props.content}</p>
                        </div>
                        <div className={classes.content_info}>
                            <p>{props.content_info}
                            </p>
                        </div>
                        <div>
                            <button className={classes.regs_btn} onClick={webinar_click_handler}>Register now</button>
                        </div>


                    </div>
    </>
  )
}

export default WebinarCard;
