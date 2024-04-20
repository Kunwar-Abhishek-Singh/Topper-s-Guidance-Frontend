import React, {useState, useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SeriesData from "./SeriesData";
import classes from "./TestSeries.module.css";
import { dashboardtestseries } from "../../API/Apicall";
import { Link } from "react-router-dom";
// import { seriesData } from "../../Dummy_Database";
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


const TestSeries = () => {
  const {topper_name} = useParams();
  const [testSeriesData, setTestSeriesData] = useState([]);
  const getTestSeriesData = async()=>{
    const response = await dashboardtestseries();
    console.log(response);
    setTestSeriesData(response.data);
  }
  useEffect(()=>{
    getTestSeriesData();
  },[]);
  return (
    <>
    <div className={classes.full_card3}>
      <div className={classes.topper_heading}>
        <h1>Test Series & Mock Test for all exam</h1>        
        <div className={classes.right_site_div}>
        <Link to={`/logged_in_profile_dashboard/${topper_name}/tests_by_me`} style={{textDecoration:"none"}}> <h1>Show all</h1> </Link>
        </div>
      </div>
      <div className={classes.heading_title}>
        <Carousel responsive={responsive} className={classes.book_taxt}>
          {testSeriesData.map((item) => (
            <div className={classes.heading_testSeries}>
            {/* <Link to={`/logged_in_profile_dashboard/${topper_name}/tests_by_me`} style={{textDecoration:"none"}}>   */}
            <SeriesData
                exam={item.exam}
                url={item.imageUrl}
                type={item.type}
                // price={item.price}
                // publication={item.publication}
              />
              {/* </Link> */}
            </div>
          ))}
        </Carousel>
      </div>
      </div>
    </>
  );
};

export default TestSeries;
