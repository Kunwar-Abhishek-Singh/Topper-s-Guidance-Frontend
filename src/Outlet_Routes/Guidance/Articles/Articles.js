import React,{useState, useEffect} from "react";
import ArticlesData from "./ArticlesData";
import classes from "./Articles.module.css";
import { guidanceArticles } from "../../../API/Apicall";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const Articles = () => {
  const {topper_name} = useParams();
  const [articlesData, setArticlesData] = useState([]);
  const getArticlesdata = async ()=>{
    const response = await guidanceArticles()
    console.log(response);
    setArticlesData(response.data);
  }
  useEffect(()=>{
    getArticlesdata();
  },[])


  return (
    <>
      <div className={classes.article_title}>
        <h1>Popular Articles</h1>
        <div className={classes.art_main}>
          {articlesData.map((item) => (
            <Link to={`/logged_in_profile_dashboard/${topper_name}/Articles/Article`} style={{textDecoration:"none"}}>
            <ArticlesData
            // url={item.imageUrl} 
            topic={item.topic}
            title={item.title}
            />
            </Link>
          ))
          }
        </div>
      </div>
    </>
  );
};

export default Articles;
