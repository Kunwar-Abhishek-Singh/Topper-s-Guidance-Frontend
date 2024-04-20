import React from 'react'
import classes from "./BlogCard.module.css"
import sunrise from "../../images/sunrise.jpg";
import tree from "../../images/tree.jpg";
import road from "../../images/road.jpg";

const BlogCard = (props) => {
  return (
    <>
         <div className={classes.blog_item}>
              <div>
                <img src={props.img} alt="vector_img" className={classes.blog_carou_img}></img>
              </div>
              <div className={classes.blog_item_text}>
                <h3>{props.heading}</h3>
                <p> {props.blog_data}
                </p>
                
                <h4>Read more...</h4>
              </div>

            </div>
    </>
  )
}

export default BlogCard
