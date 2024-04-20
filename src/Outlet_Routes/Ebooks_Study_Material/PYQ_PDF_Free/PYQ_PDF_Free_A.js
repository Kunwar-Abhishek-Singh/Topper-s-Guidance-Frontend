import React, { useEffect } from 'react';
import PYQPDFData from "./PYQ_PDF_Data";
import classes from "./PYQ_PDF_Free.module.css";
import { useState } from 'react';
import { dashboardPyqRrb } from '../../../API/Apicall';

const PYQ_PDF_Free_A = () => {

  const [rrbData, setRrbData] = useState([]);
  const getRrbData = async ()=>{
    const response = await dashboardPyqRrb();
    console.log(response)
    setRrbData(response.data);
  }
  useEffect(()=>{
    getRrbData();
  },[]);
  return (
    <>
      <div className={classes.pyq_head}>
        <div className={`${classes.pyq_main_card} ${classes.pyq_item_card}`}>
          <li className={classes.pyq_card_item}>
            {rrbData.map((item) => (
              <PYQPDFData 
              year={item.year}
               pyq={item.pyq} 
               examName={item.examName} 
               />
            ))}
          </li>
        </div>
        <div className={classes.pyq_right_sidebar}>
          <div className={`${classes.right_side_cards} ${classes.pyq_item_card}`}>
            <h3>Category</h3>
            <li className={classes.right_side_cardItem}>
              {rrbData.map((item, index) => (
                <li key={index} className={classes.li_item}>
                  {item.rightSideBar && item.rightSideBar.map((data, index) => (
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

export default PYQ_PDF_Free_A;