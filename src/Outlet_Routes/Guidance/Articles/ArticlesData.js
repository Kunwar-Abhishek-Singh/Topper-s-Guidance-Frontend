import React from "react";
import "./Articles";
import classes from "./Articles.module.css";

const ArticlesData = (props) => {
  return (
    <>      
        <div className={classes.art_cards}>
          {/* <img className={classes.art_image} src={props.url} alt="art_img" /> */}
          <h2>{props.topic}</h2>
          <p>{props.title}</p>
        </div>        
    </>
  );
};

export default ArticlesData;
