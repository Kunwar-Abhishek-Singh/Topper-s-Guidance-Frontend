import React from 'react';
import classes from './Toppers_List.module.css';
import { Link } from 'react-router-dom';
const ToppersList = (props) => {
    return (
        <div>
            <div className={classes.toppers_list_section}>
                <div className={`${classes.toppers_list_details_div}${classes.toppers_list_name_section_div}`}>
                <p>{props.name}</p>
                </div>
                <div className={classes.toppers_list_details_div}>
                <p>{props.exam_topped}</p>
                </div>
                <div className={classes.toppers_list_details_div}>
                <p>{props.exam_year}</p>
                </div>
                <div className={classes.toppers_list_details_div}>
                <p>{props.air}</p>
                </div>
                <div className={classes.toppers_list_details_div}>
                <p>{props.open}</p>

                <Link to={`/profile/${props.name}`}><button>{props.btn1}</button></Link>

                </div>
                
            </div>
            <br />

        </div>
    )
}

export default ToppersList;
