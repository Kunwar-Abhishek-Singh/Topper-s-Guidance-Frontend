import React from 'react';
import classes from "./RelatedPost.module.css";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const RelatedData = (props) => {
  const {topper_name} =  useParams();
  return (    
    <>    
    <div className={classes.related_cards}>
      {/* <img className="related_image" src={props.url} alt="Book_4th edition"/> */}
      {/* <h2> Name : {props.Name}</h2> */}
      {/* <p className="medium">Rank : {props.Rank}</p> */}
      {/* <p className="price"> Year: {props.year}</p> */}
      <Link to={`/logged_in_profile_dashboard/${topper_name}/Articles/Article`} style={{textDecoration:"none"}}>
      <div className={classes.title_div}>
      <h1>{props.title}</h1>
      </div>
      <div className={classes.topic_div}>
      <p>{props.topic}</p>
      </div>
      </Link>
    </div>
    </>
  )
}

export default RelatedData;