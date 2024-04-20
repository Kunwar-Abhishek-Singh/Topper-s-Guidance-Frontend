import React from "react";
import classes from "./Logged_in_Header.module.css";
import { FaDownload, FaHome, FaUser } from "react-icons/fa";
import logo_icon from "../../images/Pinnacle logo colored.svg";
import search_icon_header from "../../images/search_icon_header.png";
import { BiLogoPlayStore, BiCart } from "react-icons/bi";
import { MdLanguage, MdOutlineApps } from "react-icons/md";
const LoggedInHeader = () => {
  return (
    <>
      <div className={classes.Top_Header}>
        <div className={classes.Top_logo}>
          <img src={logo_icon} alt="logo_img"/>
        </div>
        <div className={classes.header_text}>     
          {/* <div className={classes.home_text}>
            <h2>Home</h2>
          </div> */}
          <div className={classes.categories_text}>
            <h2>Categories</h2>
          </div>
        </div>
        <div className={classes.search_bar_header}>
          <div className={classes.search_img_header}>
            <img src={search_icon_header} alt="search_img"/>
          </div>
          <div className={classes.top_input_bar}>
            <input className={classes.input_bar_logged_in_header} type="search" autoComplete="off" spellCheck="false" role="combobox" aria-controls="matches" placeholder="Search For anything" aria-expanded="false" aria-live="polite" />
          </div>
        </div>
        <div className={classes.download_mobileApp}>
            <div className={classes.playstore_icon}><BiLogoPlayStore size="35px"/></div>
            <div className={classes.mobileApp_text}>
                <h2>Download Mobile App</h2>
            </div>
        </div>
        <div className={classes.add_to_cart}>
            <a className={classes.cart}><BiCart size="35px"/></a>
        </div>
        <div className={classes.sign_up_header}>
            <div className={classes.log_in}>
                <button>Log in</button>
            </div>
            <div className={classes.sign_up}>
                <button>Sign Up</button>
            </div>
        </div>
        <div className={classes.language_icon_header}>
            <a className={classes.language_icon}><MdLanguage size="35px"/></a>
        </div>
        <div className={classes.moreApp_icon}>
            <a><MdOutlineApps size="35px"/></a>
        </div>       
      </div>
    </>
  );
};

export default LoggedInHeader;
