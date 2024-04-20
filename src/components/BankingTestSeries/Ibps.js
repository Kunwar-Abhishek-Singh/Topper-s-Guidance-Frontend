import React, { useEffect, useState } from "react";
import IbpsData from "./IbpsData";
import classes from "./Ibps.module.css";
import { dashboardBankingTestSeries } from "../../API/Apicall";



const Ibps = () => {

  const [bankTestSeriesData, setBankTestSeriesData] = useState([]);
    const getBankTestSeriesData = async ()=>{
      const response = await dashboardBankingTestSeries();
      console.log(response);
      setBankTestSeriesData(response.data);
    }
    useEffect(()=>{
      getBankTestSeriesData();
    },[])
  return (
    <>
      <div className={classes.bank_heading}>
        <h2>Banking & Insurance Mock Test</h2>
      </div>
      <div className={classes.banking_mainCards}>
        <div className={`${classes.bank_test_main_card}${classes.bank_test_item_card}`}>
          <li className={classes.bank_test_cars_item}>
        {bankTestSeriesData.map((item) => (
          <IbpsData
            imageUrl={item.imageUrl}
            examName={item.examName}
            totalNo={item.totalNo}
            medium={item.medium}
            type1={item.type1}
            type2={item.type2}
            type3={item.type3}
            type4={item.type4}
            button={item.button}
          />
        ))}
        </li>
        </div>

        <div className={classes.bank_test_right_sidebar}>
          <div className={`${classes.bank_test_right_side_cards}${classes.ssc_test_item_card}`}>
            <h3 className={classes.rightsidebar_heading}>Category</h3>
            <li className={classes.bank_test_right_side_carditem}>
              {bankTestSeriesData.map((item, index)=>(
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

export default Ibps;