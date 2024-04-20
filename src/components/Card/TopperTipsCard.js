import React from 'react'
import classes from "./TopperTipsCard.module.css";
import { useContext } from 'react';
import { cookie_validation_context } from '../Context_Component/Context';
import { useNavigate } from 'react-router-dom';
const TopperTipsCard = (props) => {
    const data = useContext(cookie_validation_context)
    const Navigate = useNavigate();
    const topperTips_readMoreHandler = () =>{
        if(data[0]){
            Navigate(`/logged_in_profile_dashboard/${props.name}/Articles`)
        }else{
            Navigate("/login",{state:{
                nextUrl:`/logged_in_profile_dashboard/${props.name}/Articles`
            }})
        }
    }
    return (
        <>
            <div className={classes.toppers_tips_card_boundary}>
                <div className={classes.upper_card}>
                    <div>
                        <img src="./images/user.svg" alt="user_icon"></img>
                    </div>
                    <div><p>{props.name}</p></div>
                    <div><p>{props.exam}</p></div>
                </div>
                <div className={classes.lower_card}>
                    <div className={classes.tips_topic}><h3>{props.topic}</h3>

                    </div>
                    <div className={classes.lorem_ipsum_tips}>
                        <p> {props.topic_info}
                        </p>
                    </div>
                    <div className={classes.read_more_btn}>
                        <button onClick={topperTips_readMoreHandler}>Read more...</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopperTipsCard
