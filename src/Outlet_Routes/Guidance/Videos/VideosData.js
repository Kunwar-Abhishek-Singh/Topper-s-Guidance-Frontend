import React from 'react';
import "./Videos";
import classes from "./Videos.module.css";

const VideosData = (props) => {
  return (
    <>
    <div className={classes.videos}>
        {/* <img className="video_image" src={props.url} alt="myPic" /> */}
        <iframe className={classes.video_image} width="360" height="240" src="https://www.youtube.com/embed/ym9Df7MEKr0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
        <h2>{props.title}</h2> 
        <p>{props.sname}</p>       
        {/* <a href={props.link} target="blank"> */}
        
          <button className={classes.watch__btn}>watch now</button>
        {/* </a>         */}
    </div>   
</>
  )
}

export default VideosData;