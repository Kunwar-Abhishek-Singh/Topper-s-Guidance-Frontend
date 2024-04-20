import React from "react";
import classes from "../../Outlet_Routes/Guidance/Podcasts/PodCast.module.css";


function Details(props) {
  return (
    <div className={classes.c_player_details}>
      {/* <div className={classes.details_img}>
        <img src={`${props.song.img_src}`} alt="song_pic" />
      </div> */}
      {/* <h3 className={classes.details_title}>{props.song.title}</h3> */}
      {/* <h4 className={classes.details_artist}>{props.song.artist}</h4> */}
    </div>
  );
}

export default Details;