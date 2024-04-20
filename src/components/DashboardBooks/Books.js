import React from "react";
// import React,{useState, useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductBooks from "./ProductBooks";
import classes from "./Books.module.css";
// import { bookData } from "../../Dummy_Database";
import { useState } from "react";
import { useEffect } from "react";
import { dashboardbooks } from "../../API/Apicall";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import { hover } from "@testing-library/user-event/dist/hover";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
};



const Books = () => {
  const {topper_name} = useParams();

  const [booksData, setBooksData] = useState([]);
  const getBooksData = async ()=>{
    const response = await dashboardbooks()
    console.log(response);
    setBooksData(response.data);
  }
  useEffect(()=>{
    getBooksData();
  },[])

  return (
    <>
      <div className={classes.full_bookCard}>
        <div className={classes.heading_div}>
        <div className={classes.headingxyz}>
          <h1>Books</h1>          
        </div>
        <div className={classes.heading_show_all}>
        <Link to={`/logged_in_profile_dashboard/${topper_name}/digital_books`} style={{textDecoration:"none",}}> <h1>Show all</h1> </Link>
        </div>
        </div>
        <div className={classes.heading_titleabc}>
          <Carousel responsive={responsive} className={classes.book_textabc}>
            {booksData.map((item) => (
              <div className={classes.abcde}>
                  <ProductBooks
                  bookName={item.bookName}
                  imageUrl={item.imageUrl}
                  rating={item.rating}
                  // paperPack={item.paperPack}
                  // price={item.price}
                  // delivery={item.delivery}

                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Books;
