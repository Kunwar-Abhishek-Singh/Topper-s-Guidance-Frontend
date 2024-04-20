import React from "react";
import { Link } from "react-router-dom";
import "./Books";
import { useParams } from "react-router-dom";
import classes from "./Books.module.css";
// import { FaRegStar } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const ProductBooks = (props) => {
  const { topper_name } = useParams();
  return (
    <>

      <div className={classes.book_cardA}>
        <Link to={`/logged_in_profile_dashboard/${topper_name}/digital_books/digitalBooksPaid`} style={{ textDecoration: "none", color: "#0F1111!important" }}>

          <div className={classes.books_img_card}>
            <img className={classes.book_image} src={props.imageUrl} alt="book_pic" />
          </div>
        

        <div className={classes.book_card_down}>
          <h2>{props.bookName}</h2>
          <div className={classes.book_rating}>
            <p>
              {props.rating}
              <span>
                <AiFillStar />
              </span>
            </p>
          </div>
        </div>
        {/* <p>{props.paperPack}</p>
        <p className={classes.book_price}>{props.price}</p>
        <p>{props.delivery}</p> */}
        </Link>
      </div>
    </>
  );
};
export default ProductBooks;
