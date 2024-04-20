import React from 'react';
import user from "../../../src/images/user.png";
import dashboard from "../../../src/images/dashboard.png";
import guidance from "../../../src/images/direction.png";
import videos from "../../../src/images/video.png";
import articles from "../../../src/images/articles.png";
import podcasts from "../../../src/images/podcast.png";
import schedule from "../../../src/images/event.png";
import book from "../../../src/images/book.png";
import courses from "../../../src/images/learning.png";
import test from "../../../src/images/search.png";
import ebook from "../../../src/images/download.png";
import blog from "../../../src/images/blogger.png";
import live_chat from "../../../src/images/live-chat.png";
import event from "../../../src/images/event (1).png";
import ask_me from "../../../src/images/avatar.png";
import faq from "../../../src/images/faq.png";
import news from "../../../src/images/news.png";
import analysis from "../../../src/images/analysis.png";
import followers from "../../../src/images/followers.png";

// import {FaUser, FaTable, FaCalendar, FaBook, FaGraduationCap, FaFile, FaSign, FaFileArchive, FaBlogger, FaRocketchat, FaQuestionCircle} from "react-icons/fa";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import classes from "./Sidebar_Dashboard.module.css";
import { NavLink, useParams } from 'react-router-dom';



function Navbar() {
  const { topper_name } = useParams();

  return (

    <div className={classes.navbar}>
      <Sidebar className={classes.sidebar_menu}>
        <Menu>
          <NavLink to={`/logged_in_profile_dashboard/${topper_name}/Profile`} className={classes.Link_tag_react_router}><MenuItem icon={<img src={user} alt='user_icon' className={classes.icon_img}></img>}>Topper's Profile</MenuItem></NavLink>
          <NavLink to={`/logged_in_profile_dashboard/${topper_name}/Dashboard`} className={classes.Link_tag_react_router}><MenuItem icon={<img src={dashboard} alt='dashboard_icon' className={classes.icon_img}></img>}>Dashboard</MenuItem></NavLink>
          <SubMenu label="Guidance" icon={<img src={guidance} alt='guidance_icon' className={classes.icon_img}></img>}>
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/Videos`} className={classes.Link_tag_react_router}><MenuItem icon={<img src={videos} alt='videos_icon' className={classes.icon_img}></img>}>Videos</MenuItem></NavLink>
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/Articles`} className={classes.Link_tag_react_router}><MenuItem icon={<img src={articles} alt='articles_icon' className={classes.icon_img}></img>}>Articles</MenuItem></NavLink>
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/Podcasts`} className={classes.Link_tag_react_router}><MenuItem icon={<img src={podcasts} alt='podcasts_icon' className={classes.icon_img}></img>}>Podcasts</MenuItem> </NavLink>
          </SubMenu>
          <SubMenu label="Schedule" icon={<img src={schedule} alt='schedule_icon' className={classes.icon_img}></img>}>
            {/* <NavLink to={`/logged_in_profile_dashboard/${topper_name}/ssc_cgl_tier_1`} className={classes.Link_tag_react_router}><MenuItem>SSC CGL Tier 1</MenuItem></NavLink> */}
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/ssc_cgl_tier_2`} className={classes.Link_tag_react_router}><MenuItem>SSC </MenuItem></NavLink>
            {/* <NavLink to={`/logged_in_profile_dashboard/${topper_name}/ssc_chsl_tier_1`} className={classes.Link_tag_react_router}><MenuItem>SSC CHSL Tier 1</MenuItem> </NavLink> */}
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/ssc_chsl_tier_2`} className={classes.Link_tag_react_router}><MenuItem>Railway</MenuItem></NavLink>
          </SubMenu>

          <SubMenu label="Books" icon={<img src={book} alt='books_icon' className={classes.icon_img}></img>}>
            {/* <NavLink to={`/logged_in_profile_dashboard/${topper_name}/ssc_cgl_tier_1_books`} className={classes.Link_tag_react_router}><MenuItem>SSC CGL Tier 1</MenuItem></NavLink> */}
            {/* <NavLink to={`/logged_in_profile_dashboard/${topper_name}/ssc_cgl_tier_2_books`} className={classes.Link_tag_react_router}><MenuItem>SSC CGL Tier 2</MenuItem></NavLink> */}
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/ssc_chsl_tier_1_books`} className={classes.Link_tag_react_router}><MenuItem>SSC Books</MenuItem> </NavLink>
            {/* <NavLink to={`/logged_in_profile_dashboard/${topper_name}/ssc_chsl_tier_2_books`} className={classes.Link_tag_react_router}><MenuItem>SSC CHSL Tier 2</MenuItem></NavLink> */}
          </SubMenu>

          <SubMenu label="Courses" icon={<img src={courses} alt='courses_icon' className={classes.icon_img}></img>}>
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/courses_by_me_free`} className={classes.Link_tag_react_router}><MenuItem>Courses by me <sup className='free_tag'>Free</sup></MenuItem> </NavLink>
            {/* <NavLink to={`/logged_in_profile_dashboard/${topper_name}/courses_by_me_paid`} className={classes.Link_tag_react_router}><MenuItem>Courses by me <sup className='paid_tag'>Paid</sup></MenuItem> </NavLink>
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/free_study_from_youtube`} className={classes.Link_tag_react_router}><MenuItem>Free Study from Youtube</MenuItem> </NavLink>
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/paid_courses_of_others`} className={classes.Link_tag_react_router}><MenuItem>Paid courses of other <br />institutes</MenuItem> </NavLink> */}
          </SubMenu>
          <SubMenu label="Tests" icon={<img src={test} alt='test_icon' className={classes.icon_img}></img>}>
            {/* <NavLink to={`/logged_in_profile_dashboard/${topper_name}/quiz_by_me`} className={classes.Link_tag_react_router}><MenuItem>Quiz created by me <sup className='free_tag'>Free</sup></MenuItem></NavLink> */}
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/tests_by_me`} className={classes.Link_tag_react_router}><MenuItem>Tests created by me <sup className='free_tag'>Free</sup></MenuItem></NavLink>
            {/* <NavLink to={`/logged_in_profile_dashboard/${topper_name}/test_series_recommen`} className={classes.Link_tag_react_router}><MenuItem>Tests series recommend-<br />ation <sup className='free_tag'>Free</sup></MenuItem> </NavLink>
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/test_analysis `} className={classes.Link_tag_react_router}><MenuItem>Tests analysis & guida- <br />nce <sup className='paid_tag'>Paid</sup></MenuItem></NavLink> */}
          </SubMenu>
          <SubMenu label="Ebooks/Study material" icon={<img src={ebook} alt='ebook_icon' className={classes.icon_img}></img>}>
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/digital_books`} className={classes.Link_tag_react_router}><MenuItem>Digital books <sup className='paid_tag'>Paid</sup></MenuItem></NavLink>
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/my_notes_free`} className={classes.Link_tag_react_router}><MenuItem>My notes <sup className='free_tag'>Free</sup></MenuItem> </NavLink>

            {/* <NavLink to={`/logged_in_profile_dashboard/${topper_name}/my_notes_paid`} className={classes.Link_tag_react_router}><MenuItem>My notes <sup className='paid_tag'>Paid</sup></MenuItem></NavLink> */}

            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/pyq_pdf`} className={classes.Link_tag_react_router}><MenuItem>PYQ PDF <sup className='free_tag'>Free</sup></MenuItem></NavLink>
          </SubMenu>
          <NavLink to={`/logged_in_profile_dashboard/${topper_name}/blog`} className={classes.Link_tag_react_router}><MenuItem icon={<img src={blog} alt='blog_icon' className={classes.icon_img}></img>}> Blog </MenuItem> </NavLink>
          <NavLink to={`/logged_in_profile_dashboard/${topper_name}/live_chat`} className={classes.Link_tag_react_router}><MenuItem icon={<img src={live_chat} alt='live_chat_icon' className={classes.icon_img}></img>}> Live Chat </MenuItem> </NavLink>

          <SubMenu label="Events" icon={<img src={event} alt='event_icon' className={classes.icon_img}></img>}>
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/my_give_away_events`} className={classes.Link_tag_react_router}><MenuItem>All events</MenuItem></NavLink>
            {/* <NavLink to={`/logged_in_profile_dashboard/${topper_name}/my_meetups`} className={classes.Link_tag_react_router}><MenuItem>My Meet-ups</MenuItem> </NavLink>
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/my_youtube_events`} className={classes.Link_tag_react_router}><MenuItem>My Youtube Evnets</MenuItem> </NavLink> */}
          </SubMenu>
          
          <NavLink to={`/logged_in_profile_dashboard/${topper_name}/ask_me`} className={classes.Link_tag_react_router}><MenuItem icon={<img src={ask_me} alt='ask_me_icon' className={classes.icon_img}></img>}>Ask me</MenuItem></NavLink>
          <SubMenu label="FAQ" icon={<img src={faq} className={classes.icon_img} alt='faq_img_icon'></img>}>
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/faq_on_books`} className={classes.Link_tag_react_router}><MenuItem>FAQ on books</MenuItem></NavLink>
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/faq_on_mock_tests`} className={classes.Link_tag_react_router}><MenuItem>FAQ on Mock tests</MenuItem> </NavLink>
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/faq_on_post_preference`} className={classes.Link_tag_react_router}><MenuItem>FAQ on Post Preference</MenuItem> </NavLink>
          </SubMenu>
          <SubMenu label="News Update" icon={<img src={news} alt='news_icon' className={classes.icon_img}></img>}>
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/notifications`} className={classes.Link_tag_react_router}><MenuItem>Notification</MenuItem> </NavLink>
          </SubMenu>
          <SubMenu label="Analysis" icon={<img src={analysis} alt='analysis_icon' className={classes.icon_img}></img>}>
            <NavLink to={`/logged_in_profile_dashboard/${topper_name}/exam_analysis_by_me`} className={classes.Link_tag_react_router}><MenuItem>Exam analysis by me</MenuItem> </NavLink>
            {/* <NavLink to={`/logged_in_profile_dashboard/${topper_name}/exam_analysis_by_pinnacle`} className={classes.Link_tag_react_router}><MenuItem>Exam analysis by Pinnacle portal</MenuItem> </NavLink> */}
          </SubMenu>
          <NavLink to={`/logged_in_profile_dashboard/${topper_name}/follow_me`} className={classes.Link_tag_react_router}><MenuItem icon={<img src={followers} alt='followers_icon' className={classes.icon_img}></img>}>Follow me</MenuItem></NavLink>
        </Menu>
      </Sidebar>
    </div>
  )
}
export default Navbar;