import React,{ useEffect} from 'react'
import { useCookies } from 'react-cookie';
import { jwt_Authenticate } from '../../API/Apicall';

const Cookie_Authentication = () => {
    const [cookies, removeCookie] = useCookies(['jwtoken']);

    var cookies_token = {"jwtoken":cookies.jwtoken}
    JSON.stringify(cookies_token);
  
    const cookie_jwt_Authentication = async() =>{
       const auth_response = await jwt_Authenticate(cookies_token)
       console.log(auth_response)
       if(auth_response.status===200){
        return(true);
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
    },[])


}

export default Cookie_Authentication
