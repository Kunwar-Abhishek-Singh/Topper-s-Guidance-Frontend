import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { Link } from "react-router-dom";
import classes from "./Carousel.module.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1080 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
function Carousel1() {        
    return (
        <div className={classes.main_carousel_div}>
            <Carousel responsive={responsive} infinite={true} autoPlay={true} className={classes.carousel_module_top} >                
                <div className={classes.item}>
                    <div className={classes.text_material}>
                        <h1>India's 1st platform where one can Establish
                        a connection with Toppers directly. </h1>                            
                        <p>Success is at your step now.</p>                
                        <button className={classes.btn}>Get Registered now !</button>
                    </div>
                    <div>
                        <img src="./images/carou3.svg" alt="vector_img" className={classes.carou_img}></img>
                    </div> 
                </div>  
                <div className={classes.item}>   
                     <div className={classes.text_material}>
                        <h1> Let's prepare a best strategy for the Preparation 
                        for SSC and Railways </h1>
                        <p>Make Strategies for SSC and Railways.</p>                        
                        <button className={classes.btn}> Click here for the Stretegy !</button>
                    </div>  
                    <div>    
                        <img src="./images/carousel_04.jpg" alt="vector_img" className={classes.carou_img}></img>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}
export default Carousel1;