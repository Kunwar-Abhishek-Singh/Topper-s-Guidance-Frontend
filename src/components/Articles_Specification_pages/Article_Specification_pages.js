import React from 'react';
import classes from "./Article_Specification_page.module.css";
import ArticleSpecificationpagedata from './Article_Specification_page_data';


const guidanceArticleNextData = [
  {
    id:1,
    heading:"What Do Content Writers Do? (With Job Roles And Career Path)",
    editorialTeam:"pinnacle civil services team",
    publishDate:"updated 31 October 2023",
    content1:"Content writers have access to opportunities for quick career growth and flexible hours and locations. You can work as a writer even while travelling, being a stay-at-home parent, studying or living in a remote location. Understanding the various tasks and responsibilities of this role can help you build a successful career as a content writer. In this article, we discuss what do content writers do, explore the various employment opportunities available to content writers and learn how to become one.",
    contentHeading2:"What do content writers do?",
    content2:"The term 'content writer' is a broad definition, so writers in this role perform many tasks. Your specific role, seniority and the organisation you work for all affect the work you do daily. Some of the common tasks content writers handle include:",
    contentHeading3:"Writing copy for websites",
    content3:"Website copy is the written content on website pages like Home, About Us and Contact Us. These pages showcase the business to the world. To do this well, you can study concepts like conversion copywriting, which is a set of techniques that shows you how to convert potential customers into buyers. The conversion copywriting skill is especially important if you write a product detail page, which is where customers explore and buy products on an e-commerce website.",
    contentHeading4:"Working on email marketing campaigns",
    content4:"Through email marketing campaigns, businesses gradually nurture a curious customer into a convinced buyer through a series of emails. Once a person gives the business their email address, it sends a set of automated emails that informs them, nurtures them and excites them into paying for a product or service the company offers. As a content writer, you create this set of emails, using a knowledge of conversion copy and an understanding of the target audience.",
    contentHeading5:"Creating landing pages",
    content5:"When a customer clicks on an ad, email or social media post created by a business, they arrive at a landing page. This is where you encourage them to take an action like signing up for a membership, buying a product or downloading an e-book for example. In this task as well, you use copywriting techniques to convince users to take the intended action. If you work as a freelance content writer, you may apply for landing page projects. Many companies pay more for this task, as it is critical to their sales.",
    contentHeading6:"Writing blogs",
    content6:"This is what most content writers may do when they start in this field, as there are many blog-writing opportunities open to new writers. To write blogs, you may develop a casual and conversational style of writing. Once a few of your blogs get published, you can add them to your portfolio to improve your chances of getting hired as a salaried content writer or getting projects as an independent freelancer.",
    contentHeading7:"Writing social media posts",
    content7:"This requires that you understand the various popular social media channels. To write effective social media posts and ads, learn to adjust your style of writing to suit the platform you are writing for. For example, your tone of voice and writing style for a particular social media story may differ completely from a post on another platform.",
    contentHeading8:"Creating marketing collateral like white papers and e-books",
    content8:"In certain marketing campaigns, marketing teams may want to create downloadable content for their audience. This often includes long-form guides, white papers and short e-books with information that is valuable to the target audience. Here, you may create these documents based on careful research of both the subject and what the target audience is likely to find useful.",
    contentHeading9:"Carrying out research",
    content9:"Digital web content needs to be authentic and factually accurate. To make sure that the articles, web page copy and other content you create are accurate and unique, you can research your intended topic. This can help you create content that readers trust and value.",
    contentHeading10:"Editing and proofreading your work",
    content10:"Proofreading is looking for errors like typographical mistakes, spelling errors and grammatical mistakes. You can proofread your work by reading it aloud a few minutes after you finish writing it. When editing, you may look at things like logical flow, tone and consistency in your writing style. Editing helps make your content more engaging and easier to read.",
    contentHeading11:"Typical job roles of content writers",
    content11:"Depending on your interests, your skills, the industry you want to write for and your seniority, you can apply for a suitable position. Here are some popular roles you can apply to as a content writer",
    contentHeading12:"Digital marketing content writer",
    avSalary:"National average salary: ₹18,972 per month",
    content12:"Primary duties: Marketing content writers create content with the goal of increasing brand visibility, generating leads and selling the products or services of a business. To do this job, content writers require a basic understanding of conversion copywriting. Marketing writers can work in a digital marketing team and start out as freelancers once they have built considerable experience and a sizeable portfolio.",
    contentHeading13:"Web content writer",
    avSalary1:"National average salary: ₹28,166 per month",
    content13:"Primary duties: Web content writers create content that is consumed online. They may write content for static and dynamic web pages, SEO (Search Engine Optimised) content, social media posts and white papers. They may work full time with agencies or within in-house teams of product or service businesses, or as independent freelance writers.",
    rightSideBar:[
      "Books",
      "Exam Preparation",
      "Experts",
      "Goverments Exam",
      "Audio Book",
      "Online Classes",
      "Online Test",
      "Video Courses",
      "e-News",
    ],
  }
]

const ArticleSpecificationpages = () => {
  return (
    <>
    <div className={classes.article_spec_page_main_div}>
      <div className={classes.article_spec_page_cards}>
        <li className={classes.article_spec_page_card_item}>
          {guidanceArticleNextData.map((item)=>(
          <ArticleSpecificationpagedata
          heading={item.heading}
          editorialTeam={item.editorialTeam}
          publishDate={item.publishDate}
          content1={item.content1}
          contentHeading2={item.contentHeading2}
          content2={item.content2}
          contentHeading3={item.contentHeading3}
          content3={item.content3}
          contentHeading4={item.contentHeading4}
          content4={item.content4}
          contentHeading5={item.contentHeading5}
          content5={item.content5}
          contentHeading6={item.contentHeading6}
          content6={item.content6}
          contentHeading7={item.contentHeading7}
          content7={item.content7}
          contentHeading8={item.contentHeading8}
          content8={item.content8}
          contentHeading9={item.contentHeading9}
          content9={item.content9}
          contentHeading10={item.contentHeading10}
          content10={item.content10}
          contentHeading11={item.contentHeading11}
          content11={item.content11}
          contentHeading12={item.contentHeading12}
          avSalary={item.avSalary}
          content12={item.content12}
          contentHeading13={item.contentHeading13}
          avSalary1={item.avSalary1}
          content13={item.content13}
          />
          ))}
        </li>
      </div>

      <div className={classes.article_spec_page_rightSideBar}>
        <div className={classes.rightSideBar_heading}>
            <h2>Category</h2>
        </div>
        <li className={classes.dash_spec_page_right_side_card_item}>
              {guidanceArticleNextData.map((item, index)=>(
                <li key={index}>
                  {item.rightSideBar && item.rightSideBar.map((data, index)=>(
                    <p key={index}>{data}</p>
                  ))}
                </li>
              ))}
        </li> 
      </div>
    </div>
    </>
  )
}

export default ArticleSpecificationpages;