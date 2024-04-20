import React, {useState, useEffect} from "react";
import classes from "./Videos.module.css";
import "./VideosData";
import VideosData from "./VideosData";
// import { videodata } from "../../../Dummy_Database";
import { dashboardguidancevideos } from "../../../API/Apicall";




const Videos = () => {

  const [videosData, setVideosData] = useState([]);
  const getVideoData = async ()=>{
    const response = await dashboardguidancevideos();
    console.log(response);
    setVideosData(response.data);
  }
  useEffect(()=>{
    getVideoData();
  },[]);
  return (
    <>
      <div className={classes.video_title}>
        <h1>Popular toppers talks</h1>
        <div className={classes.video_main}>
          {videosData.map((item) => (
            <VideosData url={item.imgsrc} title={item.title} link={item.link} sname={item.sname}/>
          ))
          }
        </div>       
      </div>
    </>
  )
}

export default Videos;