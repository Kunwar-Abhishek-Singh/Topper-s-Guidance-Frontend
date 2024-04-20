import React, { useEffect } from "react";
import MyNotesData from "./My_Notes_Data";
import classes from "./My_Notes_Free.module.css";
// import { my_Notes_FreeData } from "../../../Dummy_Database";
import { useState } from "react";
import { dashboardEbooksMyNotes } from "../../../API/Apicall";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

const MyNotesFree = () => {
  const {topper_name} = useParams();
  const [notesData, setNotesData] = useState ([]);
  const getNotesData = async ()=>{
    const response  = await dashboardEbooksMyNotes();
    console.log(response);
    setNotesData(response.data);
  }
  useEffect(()=>{
    getNotesData();
  },[]);
  return (
    <>
      <div className={classes.notes_heading}>
        <h1>e-Books</h1>
        </div>
      <div className={classes.notes_head}>
        <div className={`${classes.notes_main_card} ${classes.notes_item_card}`}>
          <li className={classes.note_card_item}>
            {notesData.map((item) => (
            <Link to={`/logged_in_profile_dashboard/${topper_name}/my_notes_free/MyNotesFree`} style={{textDecoration:"none"}}> 
              <MyNotesData              
                imgUrl={item.image}
                title={item.title}
                author={item.author}
                format={item.format}
                ages={item.ages}
                rating={item.rating}
                price={item.price}
                discount={item.discount}
                delivery={item.delivery}
                stock={item.stock}
                dealBtn={item.dealBtn}
                rupees={item.rs}
              />
              </Link>
            ))}
          </li>
        </div>
        <div className={classes.notes_right_sidebar}>
          <div className={`${classes.right_side_cards} ${classes.notes_item_card}`}>
            <h3>Categary</h3>
            <li className={classes.right_side_cardItem}>
              {notesData.map((item, index) => (
                <li key={index}>
                  {item.rightsidebar.map((data, index) => (
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

export default MyNotesFree;
