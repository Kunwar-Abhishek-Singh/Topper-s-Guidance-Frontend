import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../../Outlet_Routes/Guidance/Podcasts/PodCast.module.css";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

function Controls(props) {
  return (
    <div className={classes.c_player_controls}>
      <button className={classes.skip_btn} onClick={() => props.SkipSong(false)}>  
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button className={classes.play_btn}
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </button>
      <button className={classes.skip_btn} onClick={() => props.SkipSong()}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}
export default Controls;