import React,{useState, useEffect} from "react";
import classes from "./Most_Searched.module.css";
import { alltoppers } from "../../API/Apicall";
import Card from "../Card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
function Most_Searched() {
    const [data, setData] = useState([]);
    const getToppers = async ()=>{
        const response = await alltoppers()
        console.log(response);
        setData(response.data);
    }
    
    useEffect(()=>{
        getToppers();
    },[])

    return (
        <>
            <div className={classes.most_searched_toppers_heading}>
                <h2>Most Searched Toppers :-</h2>

                {/* <div className={classes.exams_name}>
                    <h3 className={classes.exams}>UPSC Toppers :-</h3>
                    <div className={classes.exam_toppers_list}>
                        {Card_Details.filter(data_filter => data_filter.exam_id==="UPSC").slice(0, 5).map((data) => (
                        
                            <Card         
                                name={data.name}
                                exam_topped={data.exam_topped}
                                exam_year={data.exam_year}
                                air={data.air}
                                followers={data.followers}
                                likes={data.likes}
                                btn1={data.btn1}

                            />
                        ))}

                        <img src="./images/arrow.svg" className={classes.arrow} alt="arrow-img"></img>
                    </div>

                </div> */}

                <div className={classes.exams_name}>
                    <h3 className={classes.exams}>SSC Toppers :-</h3>
                    <div className={classes.exam_toppers_list}>
                        <Carousel responsive={responsive} infinite={true} autoPlay={false}>

                            {data.filter(data_filter => data_filter.exam_id === "SSC").map((data, index) => (
                                <div key={index}>
                                    <Card
                                        name={data.name}
                                        exam_topped={data.exam_topped}
                                        exam_year={data.exam_year}
                                        air={data.air}
                                        followers={data.followers}
                                        likes={data.likes}
                                        btn1={data.btn1}
                                        to={data.to} 

                                    />
                                </div>
                            ))}
                        </Carousel>

                        {/* <img src="./images/arrow.svg" className={classes.right_arrow} alt="arrow-img" ></img> */}

                    </div>

                </div>



                {/* <div className={classes.exams_name}>
                    <h3 className={classes.exams}>Banking Toppers :-</h3>
                    <div className={classes.exam_toppers_list}>    
                        {Card_Details.filter(data_filter => data_filter.exam_id==="Banking").slice(0, 5).map((data) => (
                        
                            <Card
                                name={data.name}
                                exam_topped={data.exam_topped}
                                exam_year={data.exam_year}
                                air={data.air}
                                followers={data.followers}
                                likes={data.likes}
                                btn1={data.btn1}

                            />
                        ))}
                        <img src="./images/arrow.svg" className={classes.arrow} alt="arrow-img"></img>
                    </div>

                </div> */}
                <div className={classes.exams_name}>
                    <h3 className={classes.exams}>Railway Toppers :-</h3>
                    <div className={classes.exam_toppers_list}>
                        <Carousel responsive={responsive} infinite={true} autoPlay={false}>

                            {data.filter(data_filter => data_filter.exam_id === "Railway").slice(0, 4).map((data,index) => (
                                <div className={classes.card_inside_carousel} key={index}>
                                <Card
                                    
                                    name={data.name}
                                    exam_topped={data.exam_topped}
                                    exam_year={data.exam_year}
                                    air={data.air}
                                    followers={data.followers}
                                    likes={data.likes}
                                    btn1={data.btn1}
                                    to = {data.to}
                                />
                                </div>
                            ))}
                        </Carousel>
                        {/* <img src="./images/arrow.svg" className={classes.right_arrow} alt="arrow-img"></img> */}
                    </div>

                </div>
            </div>
        </>
    )
}
export default Most_Searched;