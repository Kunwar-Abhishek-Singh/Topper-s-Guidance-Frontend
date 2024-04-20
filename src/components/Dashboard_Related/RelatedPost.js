import React,{useState, useEffect} from "react";
import "react-multi-carousel/lib/styles.css";
import RelatedData from "./RelatedData";
import classes from "./RelatedPost.module.css";
import { dashboardrelatedposts } from "../../API/Apicall";
import { Link, useParams } from "react-router-dom";


const RelatedPost = () => {
  const {topper_name} = useParams();

  const [relatedsData, setRelatedData] = useState([]);
  const getRelatedData = async ()=>{
    const response = await dashboardrelatedposts();
    console.log(response);
    setRelatedData(response.data);
  }
  useEffect(()=>{   
    getRelatedData();
  },[]);
  return (
    <>
      <div className={classes.full_relatedCard}>
        <div className={classes.heading_div}>
        <div className={classes.topper_heading}>
          <h1>Related Post</h1>
        </div>
        <div className={classes.right_site_div_rel}>
          <Link to={`/logged_in_profile_dashboard/${topper_name}/Articles`} style={{textDecoration:"none"}}><h1>Show all</h1></Link>
        </div>
        </div>
        <div className={classes.heading_title}>
            {relatedsData.map((item) => (
              <div className={classes.heading_abc}>
                <RelatedData
                  Name={item.Name}
                  url={item.imageUrl}
                  Rank={item.Rank}
                  year={item.year}
                  topic={item.topic}
                  title={item.title}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
