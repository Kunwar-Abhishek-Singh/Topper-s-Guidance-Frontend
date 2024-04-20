import React, { useState, useEffect } from "react";
import classes from "./PodCast.module.css";
import Player from "../../../components/MusicPlayer/Player";

const PodCastData = (props) => {
  // const [showModal, setShowModal] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const imgClickHandler = () => {
    setIsClicked(true);
  }
  const big_screen_cancel_handler = () => {
    setIsClicked(false);
  }

  
  const [songs] = useState([
    {
      title: "Deshbhakti",
      artist: "Md.Iqbal",
      img_src: "/images/music_circle.png",
      src: "/Songs/deshbhakti-song-01.mp3",
    },
    {
      title: "Deshbhakti",
      artist: "lata mangeshkar",
      img_src: "/Images/music_circle.png",
      src: "/Songs/Sare Janha Se Achha Instrumental.mp3",
    },
    {
      title: "Deshbhakti",
      artist: "lata mangeshkar",
      img_src: "/Images/music_circle.png",
      src: "/Songs/Vande Mataram_1947.mp3",
    },
    {
      title: "Deshbhakti",
      artist: "lata mangeshkar",
      img_src: "/Images/music_circle.png",
      src: "/Songs/15 August 2021-03.mp3",
    },
    {
      title: "Deshbhakti",
      artist: "lata mangeshkar",
      img_src: "/Images/music_circle.png",
      src: "/Songs/15 August 2022-02.mp3",
    },
  ]);
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);
  
  return (
    <>
      <div className={classes.podcasts_cards}>
        <img
          onClick={() => {
            setIsClicked(true);
          }}
          src={props.imgUrl}
          alt="podcast_img"
        />
        <h2>{props.podCastTitle}</h2>
        <p>{props.subjectName}</p>
      </div>
      {isClicked ?
      <div className={classes.Podcast}>
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={songs}
          />
          <div className={classes.cancel_btn}>
          <span><button className={classes.big_screen_cancel_button} onClick={big_screen_cancel_handler}>❌</button></span> 
          </div>       
      </div>
      : null}
    </>
  );
};

export default PodCastData;
