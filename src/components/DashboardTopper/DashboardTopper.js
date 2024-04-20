import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./DashboardTopper.module.css";
import Product from "./Product";
import { dashboardtoppers } from "../../API/Apicall";
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


function Carousel1() {
  const {topper_name} = useParams();
  const [topperData, setTopperData]= useState([]);
  const getTopperData = async ()=>{
    const response = await dashboardtoppers()
    console.log(response);
    setTopperData(response.data);
  }
  useEffect(()=>{
    getTopperData();
  },[])

  return (
    <>
    <div className={classes.full_card}>
      <div className={classes.topper_heading}>
        <h1>Suggested for you</h1>
      </div>
      <div className={classes.heading_title}>
        <Carousel responsive={responsive} className={classes.topper_taxt}>
            {topperData.map((item) => (
          <div className={classes.heading_abc}>
             <Link to={`/logged_in_profile_dashboard/${topper_name}/Dashboard/Toppers`} style={{textDecoration:"none"}}> <Product 
                name={item.name}
                url={item.imageUrl}
                rank={item.rank}
                description={item.description}
              />
              </Link>
          </div>
            ))}
        </Carousel>
      </div>
      </div>
    </>
  );
}
export default Carousel1;
