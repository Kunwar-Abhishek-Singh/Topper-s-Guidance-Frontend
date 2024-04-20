import React, { useState, useEffect } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EbookProduct from "./EbookProduct";
import classes from "./Ebook.module.css";
import { dashboardEbooks } from "../../API/Apicall";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

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

const Ebook = () => {
  const { topper_name } = useParams();
  const [booksData, setBooksData] = useState([]);
  const getEbooksData = async () => {
    const response = await dashboardEbooks();
    console.log(response);
    setBooksData(response.data);
  };
  useEffect(() => {
    getEbooksData();
  }, []);

  return (
    <>
      <div className={classes.full_card}>
        <div className={classes.heading_main_div}>
        <div className={classes.Ebook_heading}>
          <h1>eBooks, Notes, PDF & more</h1>
        </div>
        <div className={classes.Ebook_right_side}>
          <Link to={`/logged_in_profile_dashboard/${topper_name}/my_notes_free`}style={{ textDecoration: "none" }}>
            <h1>Show all</h1>
          </Link>
        </div>
        </div>
        <div className={classes.heading_title}>
          <Carousel responsive={responsive} className="book_taxt">
            {booksData.map((item) => (
              <div className={classes.heading_abc_Ab}>
                <EbookProduct
                  bookName={item.bookName}
                  url={item.imageUrl}
                  rating={item.rating}
                  // medium={item.medium}
                  // price={item.price}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Ebook;
