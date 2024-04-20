import React, { useState } from "react";
import PYQPDFData from "./PYQ_PDF_Data";
import classes from "./PYQ_PDF_Free.module.css";
import { dashboardPyqSsc } from "../../../API/Apicall";
import { useEffect } from "react";


const PYQPDFFree = () => {

  const [pyqSscData, setPyqSscData] = useState([]);
  const getpyqSscdata = async ()=>{
    const response = await dashboardPyqSsc();
    console.log(response);
    setPyqSscData(response.data);
  }
  useEffect(()=>{
    getpyqSscdata();
  },[]);

  return (
    <>
      <div className={classes.pyq_head}>
        <div className={`${classes.pyq_main_card} ${classes.pyq_item_card}`}>
          <li className={classes.pyq_card_item}>
            {console.log(pyqSscData)}
            {pyqSscData.map((item) => (
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
            {console.log(pyqSscData)}
              {pyqSscData.map((item, index) => (
                <li key={index} className={classes.li_item}>
                  {console.log(item.examName)}
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

export default PYQPDFFree;
