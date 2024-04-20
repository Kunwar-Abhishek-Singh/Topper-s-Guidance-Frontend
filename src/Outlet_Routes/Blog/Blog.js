import React from 'react';
import classes from "./Blog.module.css";
import Carousel from 'react-multi-carousel';
import sunrise from "../../images/sunrise.jpg";
import tree from "../../images/tree.jpg";
import road from "../../images/road.jpg";
import BlogCard from '../../components/Card/BlogCard';
import { blog_datas } from '../../Dummy_Database';
import { useCallback } from 'react';
import { useState } from 'react';
import { blog_data } from '../../API/Apicall';
import { useEffect } from 'react';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1080 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

const Blog = () => {

  const [blogList, setBlogList] = useState([]);
  const getBlogList = async ()=>{
    const response = await blog_data()
    console.log(response);
    setBlogList(response.data);
  }

  useEffect(()=>{
    getBlogList();
  },[])
  return (
    <>
      <div className={classes.blog_container_div}>
        <div className={classes.Blogs_top_heading}>
          <h1>Blogs</h1>
        </div>
        <div className={classes.blogs_heading_main}>
          <h2>Blogs related to Daily Life :-</h2>
        </div>
        <div className={classes.blog_main_carousel_div}>
          <Carousel responsive={responsive} infinite={true} autoPlay={true} arrows={true} autoPlaySpeed={5000} itemClass={classes.carousel_item_padding_40_px} className={classes.carousel_unit_blog}>
            {blogList.map(data => (

              <BlogCard
                img={data.img_src}
                heading={data.heading}
                blog_data={data.data}

              />
            ))}
          </Carousel>


        </div>

        <div className={classes.blogs_heading_main}>
          <h2>Blogs related to Consistency :-</h2>
        </div>
        <div className={classes.blog_main_carousel_div}>
          <Carousel responsive={responsive} infinite={true} arrows={true} autoPlay={true} autoPlaySpeed={5000} itemClass={classes.carousel_item_padding_40_px} className={classes.carousel_unit_blog}>

            <div className={classes.blog_item}>
              <div>
                <img src={tree} alt="vector_img" className={classes.blog_carou_img}></img>
              </div>
              <div className={classes.blog_item_text}>
                <h3>Become the best for every <br /> Competitive examination</h3>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...
                </p>

                <h4>Read more...</h4>
              </div>

            </div>
            <div className={classes.blog_item}>
              <div>
                <img src={road} alt="vector_img" className={classes.blog_carou_img}></img>
              </div>
              <div className={classes.blog_item_text}>
                <h3>Become the best for every <br /> Competitive examination</h3>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...
                </p>

                <h4>Read more...</h4>
              </div>

            </div>
            <div className={classes.blog_item}>
              <div>
                <img src={tree} alt="vector_img" className={classes.blog_carou_img}></img>
              </div>
              <div className={classes.blog_item_text}>
                <h3>Become the best for every <br /> Competitive examination</h3>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...
                </p>

                <h4>Read more...</h4>
              </div>

            </div>
            <div className={classes.blog_item}>
              <div>
                <img src={sunrise} alt="vector_img" className={classes.blog_carou_img}></img>
              </div>
              <div className={classes.blog_item_text}>
                <h3>Become the best for every <br /> Competitive examination</h3>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...
                </p>

                <h4>Read more...</h4>
              </div>

            </div>

          </Carousel>
        </div>

        <div className={classes.blogs_heading_main}>
          <h2>Blogs related to Study Era :-</h2>
        </div>
        <div className={classes.blog_main_carousel_div}>
          <Carousel responsive={responsive} infinite={true} arrows={true} autoPlay={true} autoPlaySpeed={1000} itemClass={classes.carousel_item_padding_40_px} className={classes.carousel_unit_blog}>

            <div className={classes.blog_item}>
              <div>
                <img src={sunrise} alt="vector_img" className={classes.blog_carou_img}></img>
              </div>
              <div className={classes.blog_item_text}>
                <h3>Become the best for every <br /> Competitive examination</h3>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...
                </p>

                <h4>Read more...</h4>
              </div>

            </div>
            <div className={classes.blog_item}>
              <div>
                <img src={road} alt="vector_img" className={classes.blog_carou_img}></img>
              </div>
              <div className={classes.blog_item_text}>
                <h3>Become the best for every <br /> Competitive examination</h3>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...
                </p>

                <h4>Read more...</h4>
              </div>

            </div>
            <div className={classes.blog_item}>
              <div>
                <img src={sunrise} alt="vector_img" className={classes.blog_carou_img}></img>
              </div>
              <div className={classes.blog_item_text}>
                <h3>Become the best for every <br /> Competitive examination</h3>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...
                </p>

                <h4>Read more...</h4>
              </div>

            </div>
            <div className={classes.blog_item}>
              <div>
                <img src={tree} alt="vector_img" className={classes.blog_carou_img}></img>
              </div>
              <div className={classes.blog_item_text}>
                <h3>Become the best for every <br /> Competitive examination</h3>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...
                </p>

                <h4>Read more...</h4>
              </div>

            </div>

          </Carousel>
        </div>
      </div>
    </>
  )
}

export default Blog;
