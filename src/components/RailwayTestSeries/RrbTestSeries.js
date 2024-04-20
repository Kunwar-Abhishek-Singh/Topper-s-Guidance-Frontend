import React from 'react';
import RrbTestSeriesData from './RrbTestSeriesData';
import classes from "./RrbTestSeries.module.css";
import { useState } from 'react';
import { dashboardRrbTestSeries } from '../../API/Apicall';
import { useEffect } from 'react';



const RrbTestSeries = () => {

  const [rrbTestSeriesData, setRrbTestSeriesData] = useState([]);
    const getRrbTestSeriesData = async ()=>{
      const response = await dashboardRrbTestSeries()
      console.log(response);
      setRrbTestSeriesData(response.data);
    }
    useEffect(()=>{
      getRrbTestSeriesData();
    },[])
  return (
    <>
    <div className={classes.heading}><h2>RRB ALL EXAM TEST SERIES & MOCK TEST</h2></div>

    <div className={classes.rrb_mainCards}>
      <div className={`${classes.rrb_test_main_card}${classes.rrb_test_item_card}`}>
        <li className={classes.rrb_test_card_item}>
        {rrbTestSeriesData.map((item)=>(
            <RrbTestSeriesData
            imgUrl={item.imgUrl}
            examName={item.examName}
            totalTest={item.totalTest}
            medium={item.medium}
            type1={item.type1}
            type2={item.type2}
            type3={item.type3}
            type4={item.type4}
            button={item.button}
            buttonBuy={item.buttonBuy}
            />
        ))}
        </li>
        </div>

        <div className={classes.rrb_test_right_sidebar}>
          <div className={`${classes.rrb_test_right_side_cards}${classes.ssc_test_item_card}`}>
            <h3 className={classes.rightSideBar_heading}>Category</h3>
            <li className={classes.rrb_test_right_side_card_item}>
              {rrbTestSeriesData.map((item, index)=>(
                <li key={index}>
                  {item.rightSideBar && item.rightSideBar.map((data, index)=>(
                    <p key={index}>{data}</p>
                  ))}
                </li>
              ))}
            </li>
          </div>
        </div>
    </div>
    </>
  )
}

export default RrbTestSeries;