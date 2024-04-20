import React, { useEffect } from "react";
import SscTestSeriesData from "./SscTestSeriesData";
import classes from "./SscTestSeries.module.css";
// import { ssc_test_seriesData } from "../../../Dummy_Database";
import { useState } from "react";
import { dashboardSscTestSeries } from "../../../API/Apicall";



const SscTestSeriesPage = () => {

  const [sscTestSeriesData, setSscTestSeriesData] = useState([]);
  const getSscTestSeriesData = async ()=>{
    const response = await dashboardSscTestSeries();
    console.log(response);
    setSscTestSeriesData(response.data);
  }
  useEffect(()=>{
    getSscTestSeriesData();
  },[]);

  return (
    <>
      <div className={classes.sscTest_heading}>
        <h2>SSC ALL EXAM TEST SERIES & MOCK TEST</h2>
      </div>
      <div className={classes.main_cards}>
        <div className={`${classes.ssc_test_main_card}${classes.ssc_test_item_card}`}>
          <li className={classes.ssc_test_card_item}>
        {sscTestSeriesData.map((item) => (
          <SscTestSeriesData
            imgUrl={item.imgUrl}
            examName={item.examName}
            totalTest={item.totalTest}
            medium={item.medium}
            type1={item.type1}
            type2={item.type2}
            type3={item.type3}
            type4={item.type4}
            button={item.button}
            button1={item.button1}
          />
        ))}
        </li>
        </div>

        <div className={classes.ssc_test_right_sidebar}>
          <div className={`${classes.ssc_test_right_side_cards}${classes.ssc_test_item_card}`}>
            <h3 className={classes.ssc_test_rightsidebar_heading}>Category</h3>
            <li className={classes.ssc_test_right_side_carditem}>
              {sscTestSeriesData.map((item, index)=>(
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
  );
};

export default SscTestSeriesPage;
