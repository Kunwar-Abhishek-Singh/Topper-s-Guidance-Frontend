import React from 'react';
import classes from "./Digital_Books_Paid.module.css";
import DigitalBookdata from './Digital_Book_data';
import { Link } from 'react-router-dom';
import { dashboardEbooksStudyMaterial } from '../../../API/Apicall';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';





const DigitalBooksPaid = () => {
  const {topper_name} =  useParams();

  const [ebooksDigitalData, setEbooksDigitalData] = useState([]);
  const getEbooksDigital = async ()=>{
    const response = await dashboardEbooksStudyMaterial();
    console.log(response);
    setEbooksDigitalData(response.data);
  }
  useEffect(()=>{
    getEbooksDigital();
  },[]);
  return (
    <>
    <div className={classes.ebook_heading}>
        <h1>Books</h1>
    </div>
    <div className={classes.Ebook_head}>
      <div className={`${classes.main_card} ${classes.item_main_card}`}>
      <li className={classes.main_card_item}>
        {ebooksDigitalData.map((item) =>(
         <Link to={`/logged_in_profile_dashboard/${topper_name}/digital_books/digitalBooksPaid`} style={{textDecoration:"none"}}> <DigitalBookdata
          imgUrl={item.imgUrl}
          title={item.title}
          author={item.author}
          format={item.format}
          rsIcon={item.rsIcon}
          rating={item.rating}
          price={item.price}
          />
          </Link>
        ))}
      </li>
      </div>
      <div className={classes.right_sidebar}>
          <div className={`${classes.rightSide_card} ${classes.item_main_card}`}>
          <h4>Categary</h4>
          <li className={classes.side_cards_item}>
            {ebooksDigitalData.map((item,index) =>(
              <li key={index}>
                {item.rightSideBar.map((data,index) =>(
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

export default DigitalBooksPaid;

