import React from "react";
import classes from "./Footer.module.css";
import {FaInstagram, FaFacebook} from "react-icons/fa";
function Footer() {
    return (
        <>
            <div className={classes.footer_container}>
                <div className={classes.footer_1st_row}>
                    <div className={`${classes.footer_elements} ${classes.first_child}`}><p>HOME</p></div>
                    <div className={classes.footer_elements}><p>ABOUT_US </p></div>
                    <div className={classes.footer_elements}><p>SERVICES</p></div>
                    <div className={classes.footer_elements}><p>POLICY</p></div>
                    <div className={classes.footer_elements}><p>CONTACT</p></div>
                    <div className={classes.footer_elements}><p>QUERIES</p></div>
                    <div className={classes.footer_elements}><p>TERMS_&_CONDITION</p></div>

                </div>
                <div className={classes.icons_fb_insta}>
                <FaInstagram className={classes.insta_icon} size="40px"/>
                <FaFacebook className={classes.fb_icon} size="40px" />
                <div className={classes.get_in_touch}><p>Get In Touch</p></div>

                </div>
            </div>
        </>
    )
}
export default Footer;