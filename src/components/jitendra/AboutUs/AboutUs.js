import React, { useContext } from "react";
import classes from "./AboutUs.module.css";
import { FaCheckCircle, FaUserCircle } from "react-icons/fa";
import { toppers_profile_data } from "../../../Dummy_Database";
import { useLocation, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useState } from "react";
import { useEffect } from "react";
import { jwt_Authenticate } from "../../../API/Apicall";
import { cookie_validation_context } from "../../Context_Component/Context";

const AboutUs = () => {
  // const [prevUrl, setPrevUrl] = useState(location.state?.prevUrl || '/')
  const data = useContext(cookie_validation_context)
  const navigate = useNavigate();
  const {topper_name} = useParams();
  const [cookies, setCookie, removeCookie] = useCookies(['jwtoken']);
  const [cookieAuthentication, setCookieAuthentication] = useState(false);
  var cookies_token = {"jwtoken":cookies.jwtoken}
  JSON.stringify(cookies_token);
  
  const cookie_jwt_Authentication = async() =>{
     const auth_response = await jwt_Authenticate(cookies_token)
     console.log(auth_response)
     if(auth_response.status===200){
      setCookieAuthentication(true)
     }
     else{
      alert("invalid cookies found !!!!")

      removeCookie("jwtoken")
      
     }
  }
  
  useEffect(()=>{
    if(cookies.jwtoken){
      cookie_jwt_Authentication()

    }
  },[cookies.jwtoken])
  const location = useLocation();

  const open_dashboard_handler = ()=>{
    console.log(location)
    if(data[0]){
      console.log("got entered into if section");

      navigate(`/logged_in_profile_dashboard/${topper_name}/dashboard`)
      //  return <Navigate to={`/logged_in_profile_dashboard/${topper_name}/dashboard`} />
    }
    else{
      console.log("got entered into else section");
      navigate('/login',{state:{
        nextUrl:`/logged_in_profile_dashboard/${topper_name}/dashboard`
      }})
       

    }
  }
  return (
    <>      
      {toppers_profile_data.filter(data => data.id === topper_name).map((details,index) => (
      

        <div className={classes.About_me_Total} key={index}>
          {details.data && details.data.map((toppersdata,index) => (
            <div className={classes.About_me_section_div} key={index}>
              <h1>About me :-</h1>
              <p className={classes.About_me_section_div_p}>
                {toppersdata.about_me}

                <br />   {toppersdata.about_me_break}

              </p>
            </div>
          ))}
          {details.data && details.data.map((toppersdata,index)=>(
          <div className={classes.profile} key={index}>
            <div className={classes.profile_details}>
              <div className={classes.img_pro}>
                {/* <img src="./images/trande.png" alt="profile" /> */}
                <FaUserCircle size="100px" />
              </div>
              <div className={classes.pro_item}>
                <h2>{toppersdata.name} <FaCheckCircle className={classes.verify_icon} /> </h2>
                <h4>AIR :- {toppersdata.air}</h4>
                <h4>Attempt :- {toppersdata.attempt}</h4>
                <h4>Post :- {toppersdata.post}</h4>
                <p>{toppersdata.sub_post}</p>
              </div>
            </div>
            <div className={classes.pro_btn}>
               <button type="button" className={classes.follow_btn}>Follow me</button>
              <button type="button" className={classes.Dashboard} onClick={open_dashboard_handler} >Open Dashboard</button>
            </div>
          </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default AboutUs;
