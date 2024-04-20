import React, { useEffect, useState } from "react";
import SscMockTestData from "./SscMockTestData";
import classes from "./SscTestSeries.module.css";
import { dashboardSscMockTestSeries } from "../../../API/Apicall";



const SscMockTest = () => {

  const [sscMockTestData, setSscMockTestData] = useState([]);
  const getSscMockTestData = async ()=>{
    const response = await dashboardSscMockTestSeries();
    console.log(response);
    setSscMockTestData(response.data);
  }
  useEffect(()=>{
    getSscMockTestData();
  },[]);
  return (
    <>
      <div className={classes.sscMock_heading}>
        <h2>SSC MOCK TEST</h2>
      </div>
      <div className={classes.mockTest_mainCard}>
        <div className={`${classes.ssc_mock_main_card}${classes.ssc_mock_item_card}`}>
          <li className={classes.ssc_mock_card_item}>
        {sscMockTestData.map((item) => (
          <SscMockTestData
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

        <div className={classes.ssc_mock_right_sidebar}>
          <div className={`${classes.ssc_mock_right_side_cards}${classes.ssc_test_item_card}`}>
            <h3 className={classes.righ_side_bar_heading}>Category</h3>
            <li className={classes.ssc_mock_right_side_carditem}>
              {sscMockTestData.map((item, index)=>(
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

export default SscMockTest;
