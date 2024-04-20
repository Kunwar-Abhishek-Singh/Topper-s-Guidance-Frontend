import React,{useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { jwt_Authenticate } from "../../API/Apicall";
import LoginPage from '../../Pages/Login_Page/LoginPage';
import { cookie_validation_context } from '../Context_Component/Context';
import { useContext } from 'react';
const PrivateComponent = () => {
    const data = useContext(cookie_validation_context);
   
    
    
    // const [cookies, setCookie, removeCookie] = useCookies(['jwtoken']);
    // const [cookieAuthentication, setCookieAuthentication] = useState(false);
    // const cookie_jwt_Authentication = async() =>{
     
    
    //     var cookies_token = {"jwtoken":cookies.jwtoken}
    //     JSON.stringify(cookies_token);
    //    const auth_response = await jwt_Authenticate(cookies_token)
    //    console.log(auth_response)
    //    if(auth_response.status===200){
    //     setCookieAuthentication(true)
    //    }
    //    else{
    //     alert("invalid cookies found !!!!")
  
    //     removeCookie("jwtoken")
        
    //    }

    // }
 
 
    // useEffect(()=>{
    //   if(cookies.jwtoken){
    //     cookie_jwt_Authentication()
  
    //   }
    // },[cookies.jwtoken])
console.log(data)
    
  return (
    <>
    {data[0] ? <Outlet />:<LoginPage />} 
    
    </>
  )
}

export default PrivateComponent
