import React, { useEffect, useState, useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import logo_icon from "../../images/Pinnacle logo colored.svg";
import search_icon_header from "../../images/search_icon_header.png";
import { BiLogoPlayStore, BiCart } from "react-icons/bi";
import { MdLanguage, MdOutlineApps } from "react-icons/md";
import NavbarCategories from "./CategoriesDropdown/NavbarCategories";

import { useNavigate } from "react-router-dom";
import { jwt_Authenticate, signout_student_data } from "../../API/Apicall";
import PrivateComponent from "../Private_component/PrivateComponent";
import { cookie_validation_context } from "../Context_Component/Context";
import { useParams } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const { topper_name } = useParams();
  const [data, setData] = useContext(cookie_validation_context);
  // alert(data)
  const Navigate = useNavigate();
  // const [cookies] = useCookies(['myCookie']);
  const [isLogout, setIsLogout] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["jwtoken"]);
  const [cookieAuthentication, setCookieAuthentication] = useState(false);

  const logoutHandler = async () => {
    var cookie_token_credential = { "jwtoken": cookies.jwtoken }
    JSON.stringify(cookie_token_credential)     
    const cookie_deactivation = await signout_student_data(cookie_token_credential);
    setIsLogout(true);
    setData(false);
    console.log("removing jwtoken from the cookies");
    removeCookie("jwtoken");
    console.log(
      "start processing for log out and switching the page for login finally"
    );

    Navigate("/login");
    console.log("successfully switched to login page");
  };
  // console.log(cookies)

  //for cookie authentication
  var cookies_token = { jwtoken: cookies.jwtoken };
  JSON.stringify(cookies_token);
  const cookie_jwt_Authentication = async () => {
    const auth_response = await jwt_Authenticate(cookies_token);
    console.log(auth_response);
    if (auth_response.data.auth_status === true) {
      setCookieAuthentication(true);
      setData(true);
    } else {
      alert("invalid cookies found !!!!");
      setCookieAuthentication(false);
      removeCookie("jwtoken");
    }
  };
  useEffect(() => {
    if (cookies.jwtoken && !isLogout) {
      cookie_jwt_Authentication();
    }
  }, [cookies.jwtoken]);

  // const cookie_auth =async ()=>{
  //   const auth_status = await Cookie_Authentication()
  //   setCookieAuthentication(auth_status)
  // } const auth_status = await Cookie_Authentication()

  // useEffect(()=>{
  //   cookie_auth()
  // },[])

  // ----- hamburger useState ----

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className={classes.Top_Header}>
        <div className={classes.Top_logo}>
          <Link to="/">
            <img src={logo_icon} alt="logo_img" />
          </Link>
          <div className={classes.topper_name_in_header}>
            {topper_name ? <p>Topper : {topper_name}</p> : null}
          </div>
        </div>

        <div className={classes.header_text}>
          <NavbarCategories />
        </div>

        <div className={classes.search_bar_header}>
          <div className={classes.search_img_header}>
            <img src={search_icon_header} alt="search_img" />
          </div>
          <div className={classes.top_input_bar}>
            <input
              className={classes.input_bar_logged_in_header}
              type="search"
              autoComplete="off"
              spellCheck="false"
              role="combobox"
              aria-controls="matches"
              placeholder="Search For anything"
              aria-expanded="false"
              aria-live="polite"
            />
          </div>
        </div>

        {!cookieAuthentication ? (
          <div className={showMediaIcons ? `${classes.mobile_menu_link} ${classes.menu_link}`: `${classes.sign_up_header}`}>
            <div className={classes.menu_link_div}>
              <div className={classes.log_in}>
                <Link to="/login">
                  <button>Log in</button>
                </Link>
              </div>
              <div className={classes.sign_up}>
                <Link to="/signup">
                  <button>Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className={classes.sign_up_header}>
            <div className={classes.log_out}>
              <button onClick={logoutHandler}>Log Out</button>
            </div>
          </div>
        )}

        {/* ---------*******  social media start ******------ */}

        <div className={classes.social_media_div}>
          <div className={classes.social_media_desktop}>
            <div className={classes.download_mobileApp}>
              <BiLogoPlayStore size="35px" />
            </div>

            <div className={classes.add_to_cart}>
              <a className={classes.cart}>
                <BiCart size="35px" />
              </a>
            </div>

            <div className={classes.language_icon_header}>
              <a className={classes.language_icon}>
                <MdLanguage size="35px" />
              </a>
            </div>

            <div className={classes.moreApp_icon}>
              <a>
                <MdOutlineApps size="35px" />
              </a>
            </div>
          </div>

          {/* --------- ******** Humburger menu start ******* --------  */}

          <div className={classes.humbueger_menu}>
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              {console.log(showMediaIcons)}
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
