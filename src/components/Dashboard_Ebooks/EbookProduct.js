import React from "react";
import classes from "./Ebook.module.css";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const EbookProduct = (props) => {
  const {topper_name}= useParams();
  return (
    <>
      <div className={classes.ebook_cards}>
      <Link to={`/logged_in_profile_dashboard/${topper_name}/my_notes_free/MyNotesFree`} style={{textDecoration:"none"}}>

        <div className={classes.ebook_cards_img}>
          <img
            className={classes.ebook_image}
            src={props.url}
            alt="Book_4th edition"
          />
        </div>
        <div className={classes.ebook_title_cards}>
          <div className={classes.ebook_cards_down}>
            <p>{props.bookName}</p>
            {/* <p className={classes.medium}>{props.medium}</p> */}
          </div>
          <div className={classes.ebook_cards_rating}>
            <p>
              {props.rating}
              <span>
                <AiFillStar />
              </span>
            </p>
          </div>
        </div>
        </Link>
        {/* <p className={classes.price}> price: {props.price}</p> */}
      </div>
    </>
  );
};

export default EbookProduct;
