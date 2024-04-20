import React,{useState, useEffect} from "react";
import classes from "./Upcoming_Webinars.module.css";
import Carousel from "react-multi-carousel";
// import { upcoming_webinar } from "../../Dummy_Database";
import WebinarCard from "../Card/WebinarCard";
import { upcoming_webinar } from "../../API/Apicall";

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


function Upcoming_Webinar() {
    
    const [webinarList, setWebinarList] = useState([]);
    const getWebinarList = async ()=>{
        const response = await upcoming_webinar()
        console.log(response)
        setWebinarList(response.data);
    }

    useEffect(()=>{
        getWebinarList();
    },[])

    return (
        <>

            <div className={classes.webinar_heading}>
                <h2>Upcoming Webinars :-</h2>
            </div>


            
            <div className={classes.webinar_card}>
                <Carousel responsive={responsive} infinite={true} autoPlay={false} className={classes.carousel_webinar}>
                {webinarList.map((data,index) =>{
                    return(
                    <WebinarCard
                        key={index}
                        heading = {data.heading}
                        date = {data.date}
                        month = {data.month}
                        time = {data.time}
                        am_pm = {data.am_pm}
                        name = {data.name}
                        exam = {data.exam}
                        rank = {data.rank}
                        sup = {data.supScript}
                        content = {data.content}
                        content_info = {data.content_info}
                    />
                    )
            })}

                </Carousel>

            </div>

        </>
    )
}
export default Upcoming_Webinar;