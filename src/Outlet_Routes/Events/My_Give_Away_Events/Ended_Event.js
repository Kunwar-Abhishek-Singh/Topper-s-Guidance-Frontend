import React from 'react';
import EndedEventData from './Ended_Event_Data';
import classes from "./Ended_Event.module.css";
import { Link } from 'react-router-dom';


const endedEventData = [
  {
    id:1,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Big Data Executive Training [Limited Seat]",
    location:"Gurgoan, Haryana",
  },
  {
    id:2,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Big Data Executive Training [Limited Seat]",
    location:"Gurgoan, Haryana",
  },
  {
    id:3,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Big Data Executive Training [Limited Seat]",
    location:"Gurgoan, Haryana",
  },
  {
    id:4,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Big Data Executive Training [Limited Seat]",
    location:"Gurgoan, Haryana",
  },
  {
    id:5,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Big Data Executive Training [Limited Seat]",
    location:"Gurgoan, Haryana",
  },
  {
    id:6,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Big Data Executive Training [Limited Seat]",
    location:"Gurgoan, Haryana",
  },
  {
    id:7,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Big Data Executive Training [Limited Seat]",
    location:"Gurgoan, Haryana",
  },
  {
    id:8,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Big Data Executive Training [Limited Seat]",
    location:"Gurgoan, Haryana",
  },
  {
    id:9,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Big Data Executive Training [Limited Seat]",
    location:"Gurgoan, Haryana",
  },
  {
    id:10,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Big Data Executive Training [Limited Seat]",
    location:"Gurgoan, Haryana",
  },
  {
    id:11,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Big Data Executive Training [Limited Seat]",
    location:"Gurgoan, Haryana",
  },
  {
    id:12,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Big Data Executive Training [Limited Seat]",
    location:"Gurgoan, Haryana",
  },
]

const EndEvent = () => {
  return (
    <>
    <div className={classes.ended_event_main_div}>
      <div className={classes.ended_event_items}>
        {endedEventData.map((item)=>(
          <Link to='/logged_in_profile_dashboard/my_give_away_events/activeEvent'>
          <EndedEventData
            imageUrl={item.imageUrl}
            date={item.date}
            topic={item.topic}
            location={item.location}
          />
          </Link>
        ))}        
      </div>
    </div>
    </>
  )
}

export default EndEvent;