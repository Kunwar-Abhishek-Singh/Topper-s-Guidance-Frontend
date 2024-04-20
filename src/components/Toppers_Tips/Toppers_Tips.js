import React,{useState, useEffect} from "react";
import classes from "./Toppers_Tips.module.css";
import Carousel from "react-multi-carousel";
import TopperTipsCard from "../Card/TopperTipsCard";
import { topper_tips } from "../../API/Apicall";
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


function Toppers_Tips() {

    const [topperTips, setTopperTips] = useState([]);
    const getTopperTips= async()=>{
        const response = await topper_tips()
        console.log(response);
        setTopperTips(response.data);
    }
    useEffect(()=>{
        getTopperTips()
    },[])

    return (
        <>
            <div className={classes.toppers_tips_main_div}>
                <div className={classes.toppers_tips_header}>
                    <h2>Trending Tips by Toppers :-</h2>
                </div>
                <div className={classes.tips_card}>



                    <Carousel responsive={responsive} infinite={true} autoPlay={false}>
                        {topperTips.map((data,index) => {
                            return (
                                <TopperTipsCard
                                    key={index}
                                    name={data.name}
                                    exam = {data.exam}
                                    topic= {data.topic}
                                    topic_info={data.topic_info}
                                />
                            )
                        })}

                    </Carousel>


                </div>
            </div>
        </>
    )
}
export default Toppers_Tips;