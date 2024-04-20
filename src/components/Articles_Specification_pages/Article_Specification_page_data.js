import React from 'react';
import classes from "./Article_Specification_page.module.css";

const ArticleSpecificationpagedata = (props) => {
  return (
    <>
    <div className={classes.article_spec_main_div}>
        <h1>{props.heading}</h1>
        <h4>{props.editorialTeam}</h4>
        <h5>{props.publishDate}</h5>
        <div className={classes.article_spec_content1}>
            <p>{props.content1}</p>
        </div>
        <div className={classes.contentHeading2_div}>
            <h3>{props.contentHeading2}</h3>
            <p>{props.content2}</p>
        </div>
        <div className={classes.contentHeading3_div}>
            <h3>{props.contentHeading3}</h3>
            <p>{props.content3}</p>
        </div>
        <div className={classes.contentHeading4_div}>
            <h3>{props.contentHeading4}</h3>
            <p>{props.content4}</p>
        </div>
        <div className={classes.contentHeading5_div}>
            <h3>{props.contentHeading5}</h3>
            <p>{props.content5}</p>
        </div>
        <div className={classes.contentHeading6_div}>
            <h3>{props.contentHeading6}</h3>
            <p>{props.content6}</p>
        </div>
        <div className={classes.contentHeading7_div}>
            <h3>{props.contentHeading7}</h3>
            <p>{props.content7}</p>
        </div>
        <div className={classes.contentHeading8_div}>
            <h3>{props.contentHeading8}</h3>
            <p>{props.content8}</p>
        </div>
        <div className={classes.contentHeading9_div}>
            <h3>{props.contentHeading9}</h3>
            <p>{props.content9}</p>
        </div>
        <div className={classes.contentHeading10_div}>
            <h3>{props.contentHeading10}</h3>
            <p>{props.content10}</p>
        </div>
        <div className={classes.contentHeading11_div}>
            <h3>{props.contentHeading11}</h3>
            <p>{props.content11}</p>
        </div>
        <div className={classes.contentHeading12_div}>
            <h3>{props.contentHeading12}</h3>
            <h5>{props.avSalary}</h5>
            <p>{props.content12}</p>
        </div> 
        <div className={classes.contentHeading13_div}>
            <h3>{props.contentHeading13}</h3>
            <h5>{props.avSalary1}</h5>
            <p>{props.content13}</p>
        </div>       
    </div>
    </>
  )
}

export default ArticleSpecificationpagedata;