import React from 'react'
import MyGiveAwayEventData from './MyGiveAwayEventData';
import classes from "./My_Give_Away_Events.module.css";
import { Link } from 'react-router-dom';


const eventData = [
  {
    id: 1,
    imageUrl:
      "https://png.pngtree.com/png-vector/20190725/ourmid/pngtree-globe-icon-for-your-project-png-image_1573927.jpg",
      date:"",
      topic:"Create New Event",
      location:"",
      eventGoals:"",
      number:"",
      ticketSold:"",
      numberI:"",
  },
  {
    id:2,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Charlie Puth Live in Concert Gurgaon",
    location:"Gurgaon, Haryana",
    eventGoals:"Events Goals",
    number:"100",
    ticketSold:"Ticket Sold",
    numberI:"100",
  },
  {
    id:3,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Charlie Puth Live in Concert Gurgaon",
    location:"Gurgaon, Haryana",
    eventGoals:"Events Goals",
    number:"100",
    ticketSold:"Ticket Sold",
    numberI:"100",
  },
  {
    id:4,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Charlie Puth Live in Concert Gurgaon",
    location:"Gurgaon, Haryana",
    eventGoals:"Events Goals",
    number:"100",
    ticketSold:"Ticket Sold",
    numberI:"100",
  },
  {
    id:5,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Charlie Puth Live in Concert Gurgaon",
    location:"Gurgaon, Haryana",
    eventGoals:"Events Goals",
    number:"100",
    ticketSold:"Ticket Sold",
    numberI:"100",
  },
  {
    id:6,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Charlie Puth Live in Concert Gurgaon",
    location:"Gurgaon, Haryana",
    eventGoals:"Events Goals",
    number:"100",
    ticketSold:"Ticket Sold",
    numberI:"100",

  },
  {
    id:7,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Charlie Puth Live in Concert Gurgaon",
    location:"Gurgaon, Haryana",
    eventGoals:"Events Goals",
    number:"100",
    ticketSold:"Ticket Sold",
    numberI:"100",
  },
  {
    id:8,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Charlie Puth Live in Concert Gurgaon",
    location:"Gurgaon, Haryana",
    eventGoals:"Events Goals",
    number:"100",
    ticketSold:"Ticket Sold",
    numberI:"100",
  },
  {
    id:9,
    imageUrl:"https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
    date:"November 13, 2023",
    topic:"Charlie Puth Live in Concert Gurgaon",
    location:"Gurgaon, Haryana",
    eventGoals:"Events Goals",
    number:"100",
    ticketSold:"Ticket Sold",
    numberI:"100",
  }
]

const MyGiveAwayEvents = () => {
  return (
    <>
      <div className={classes.all_events_main_div}>

        <div className={classes.all_event_items}>
          {eventData.map((item)=>(
            <Link to='/logged_in_profile_dashboard/my_give_away_events/activeEvent'>
            <MyGiveAwayEventData
              imageUrl={item.imageUrl}
              button={item.button}
              date={item.date}
              topic={item.topic}
              location={item.location}
              eventGoals={item.eventGoals}
              number={item.number}
              ticketSold={item.ticketSold}
              numberI={item.numberI}
            />
            </Link>
          ))}
        </div>
      </div>
        
    </>
  )
}

export default MyGiveAwayEvents;
