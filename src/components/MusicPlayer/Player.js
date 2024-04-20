import React, { useState, useRef, useEffect } from "react";
import Controls from "./Control";
import Details from "./Details";
import classes from "../../Outlet_Routes/Guidance/Podcasts/PodCast.module.css";

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div className={classes.card_player}>
      <h4>Playing now</h4>
      <Details song={props.songs[props.currentSongIndex]} />
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <div className={classes.audio_player_div}>
      <audio
        className={classes.c_player_audio}
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
        controls
      ></audio>
      </div>
      {/* <p>
        Next up:{" "}
        <span>
          {props.songs[props.nextSongIndex].title} by{" "}
          {props.songs[props.nextSongIndex].artist}
        </span>
      </p> */}
    </div>
  );
}

export default Player;
