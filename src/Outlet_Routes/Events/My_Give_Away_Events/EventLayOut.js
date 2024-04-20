import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import classes from './Ended_Event.module.css';

const EventLayOut = () => {
  return (
    <>
        <div className={classes.event_heading}>
          <h1>All Events</h1>
        </div>
    <ul className={classes.EventLayOut_btn}>
        <Link className={classes.link_tag_eventI} to='/logged_in_profile_dashboard/my_give_away_events'>
        <li>Active Event</li>
        </Link>
        <Link className={classes.link_tag_eventII} to='endedevent'>
        <li>Ended Event</li>
        </Link>
    </ul>
    <Outlet/>
    </>
  )
}

export default EventLayOut;