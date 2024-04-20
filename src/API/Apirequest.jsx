import axios from "axios";

export const Apifetchrequest = async(methods, url, body, header) =>{
    let configuration ={
        method:methods,
        url,
        headers:header?header:{"Content-type":"application/json"},
        data:body
    }
    return axios(configuration).then((data)=>{
        return data;
    }).catch((error)=>{
        return error
    })
}