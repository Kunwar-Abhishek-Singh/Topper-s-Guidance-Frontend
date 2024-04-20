import React from 'react';
import classes from "./Profile_Dashboard_Layout.module.css";
import Navbar from '../../components/Sidebar_Dashboard/Sidebar_Dashboard';
import { Outlet } from 'react-router-dom';
import LoggedInHeader from '../../components/Header/Logged_in_Header';
import Header from '../../components/Header/Header';

const ProfileDashBoardLayout = () => {
    return (
        <>
            <div className={classes.dashboard_page_layout}>
                <div className={classes.header_page_layout}>
                    <Header />   
                </div>
                <div className={classes.dashboard_home_page_topper}>
                    <div className={classes.navbar_section_layout}>
                        <Navbar />
                    </div>
                    <div className={classes.outlet_section}>  
                        
                        <Outlet />

                    </div>
                </div>
            </div>
            

        </>
    )
}

export default ProfileDashBoardLayout;
