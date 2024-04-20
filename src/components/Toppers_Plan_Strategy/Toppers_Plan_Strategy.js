import React, {useState, useEffect} from 'react';
import classes from "./Toppers_Plan_Strategy.module.css";
import { plan_strategy } from '../../API/Apicall';

const ToppersPlanStrategy = () => {
    const [strategyTips, setStrategyTips] = useState([])
    const getStrategyTips = async()=>{
        const response = await plan_strategy()
        console.log(response)
        setStrategyTips(response.data)
    }
    useEffect(()=>{
        getStrategyTips()
    },[])
    return (
        <>


            <div className={classes.strategy_card}>
                <div className={classes.plan_strategy_heading}> <h2>Toppers Strategy and planning</h2></div>
                <div className={classes.multiple_toppers_advices}>
                    {strategyTips.map((data, index) => (

                        <div className={classes.toppers_advice} key={index}>
                            <h3>{data.id}. {data.msg_heading}</h3>
                            <p>{data.msg}</p>
                            <h3 className={classes.name}>{data.name_detail}</h3>
                        </div>
                    ))}

            
                </div>
            </div>
        </>
    )
}

export default ToppersPlanStrategy;
