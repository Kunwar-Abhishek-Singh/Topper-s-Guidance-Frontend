import React, { useState, useEffect } from "react";
import classes from "./Search_Toppers.module.css";
// import Card from "../Card/Card";
import ToppersList from "../Toppers_List/Toppers_List";
import { alltoppers } from "../../API/Apicall";
import { useParams } from "react-router-dom";
import { Cookies } from "react-cookie";
import search_img from "../../images/search.png"
// import { useParams } from "react-router-dom";
function Search_Toppers() {
    const {exam_selection} = useParams();

    const[search, setSearch] = useState("");
    // console.log(search);
    // const {exam_selection} = useParams();
    const [topperList, setTopperList] = useState([]);
    const getTopperList= async()=>{
        const response = await alltoppers();
        // console.log(response);
        setTopperList(response.data)
    }
    useEffect(()=>{
        
        getTopperList()
    },[])


    return (
        
        <>
            <div className={classes.search_toppers_main_div}>
                <div className={classes.search_toppers_heading}>
                    <h2>Search Toppers for your related Exams :-</h2>  
                </div>
                <div className={classes.toppers_search_bar}>
                    <div>
                        <img src={search_img} className={classes.search_img} alt="search_img"></img>
                    </div>  
                    <div className={classes.topper_search_input}>
                        <input type="search" placeholder="Search any Toppers or Exams" onChange={(e)=> setSearch(e.target.value)} className={classes.topper_search}></input>
                    </div>

                </div>
                <div className={classes.srch_result_box}>
                    <div className={classes.search_result}> 
                        <ToppersList
                            name="Name"
                            exam_topped="Exam Topped"
                            exam_year = "Year"
                            air = "A.I.R."
                            open= "Go to Profile" 
                        />
                    </div>
                    <div className={classes.search_id}>

                        
                        {topperList.filter((item)=>{
                            return search.toLowerCase() === ''? null : item.name.toLowerCase().includes(search) || item.exam_topped.toLowerCase().includes(search)
                        }).map((data,index) => (
                            <ToppersList 
                            key={index}
                            name={data.name}
                            exam_topped={data.exam_topped}
                            exam_year = {data.exam_year}
                            air = {data.air}  
                            followers = {data.followers}
                            likes = {data.likes}
                            btn1 = {data.btn1} 
                            
                            />
                            
                                
                        
                        ))}
                    </div>
                    <div className={classes.view_more_btn}>
                        {/* <button>View more</button> */}
                        <p className={classes.blink}>Search By name of Exams or by Name of Toppers</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Search_Toppers;