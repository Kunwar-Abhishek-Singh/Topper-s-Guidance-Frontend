import React from "react";
import ActiveEventSpecificationPageData from "./ActiveEventSpecificationPageData";
import classes from "./ActiveEventSpecificationPage.module.css";

const eventDetailsData = [
  {
    id: 1,
    topic: "Charlie Puth Live In Gurgaon, India",
    location: "Gurgaon, Haryana",
    time: "6.00 - 9.00pm",
    eventRelated: "Go with it",
    imgUrl:
      "https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",

    descriptionHeading:"Description",

    descriptionParagrapI:"Charlie Puth Voicenotes Tour, Live in Gurgaon",

    descriptionParagrapII:"The Singer with the extraordinary success of five multi-platinum hits, One Call Away Marvin Gaye We Dont Talk Anymore See You Again and Attention will have his concert in Gurgaon",

    descriptionParagrapIII:"Get ready to witness Charlie Puths Voicenotes concert with hits whatnyou have Done for me and How long Live! Charlie Puth Voicenotes concert 2018 is confirmed on Friday, 16th November 2023 at gurgaon India Convention Exhibition (ICE), BSD",
    descriptionParagrapIV:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    descriptionParagrapV:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    descriptionParagrapVI:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form accompanied by English versions from the 1914 translation by H Rackham.",

    rightSideBar: [
      {
        image:
          "https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
        userName: "Jitendra Thakur",
        professional: "Software Developer",
      },
      {
        image:
          "https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
        userName: "Kunwar Abhishek",
        professional: "Software Developer",
      },
      {
        image:
          "https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
        userName: "Harish Modi",
        professional: "Software Developer",
      },
      {
        image:
          "https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
        userName: "Deepa Arya",
        professional: "Software Developer",
      },
      {
        image:
          "https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
        userName: "Md Ahsan",
        professional: "Software Developer",
      },
      {
        image:
          "https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
        userName: "Anjali Ma'am",
        professional: "Software Developer",
      },
      {
        image:
          "https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
        userName: "Sakshi Sinha",
        professional: "Software Developer",
      },
      {
        image:
          "https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
        userName: "Danish Sir",
        professional: "Software Developer",
      },
      {
        image:
          "https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
        userName: "Deepak Tank",
        professional: "Software Developer",
      },
      {
        image:
          "https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-handsome-and-cute-boy-in-3d-image_2498369.jpg",
        userName: "Neeraj Sir",
        professional: "Software Developer",
      },
    ],
  },
];

const ActiveEventSpecificationPage = () => {
  return (
    <>
      <div className={classes.event_details_div}>
        <div className={classes.event_details_item}>
          {eventDetailsData.map((item) => (
            <ActiveEventSpecificationPageData
              topic={item.topic}
              location={item.location}
              time={item.time}
              eventRelated={item.eventRelated}
              imgUrl={item.imgUrl}
              descriptionHeading={item.descriptionHeading}
              descriptionParagrapI={item.descriptionParagrapI}
              descriptionParagrapII={item.descriptionParagrapII}
              descriptionParagrapIII={item.descriptionParagrapIII}
              descriptionParagrapIV={item.descriptionParagrapIV}
              descriptionParagrapV={item.descriptionParagrapV}
              descriptionParagrapVI={item.descriptionParagrapVI}
            />
          ))}
        </div>


        <div className={classes.event_details_right_side}>
          <div className={classes.right_side_heading}>
            <h2>Meet Others Experts</h2>
          </div>

          {eventDetailsData.map(( item, index ) => (
            <div key={index} className={classes.event_details_right_side_items} >
              {item.rightSideBar.map((data2, terteryIndex) => (
              <div
                className={classes.event_details_right_side_item}
                key={terteryIndex}
              >
              {console.log(data2)}
                <img
                  className={classes.event_right_side_img}
                  src={data2.image}
                  alt="img_right"
                />
                <p className={classes.event_userName}>{data2.userName}</p>
                <p className={classes.event_professional}>
                  {data2.professional}
                </p>
              </div>
              ) )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ActiveEventSpecificationPage;


  /* <div className={classes.event_details_right_side_item} key={secondaryIndex}>
<img className={classes.event_right_side_img} src={itm.image} alt="img_right"/>
<p className={classes.event_userName}>{itm.userName}</p>
<p className={classes.event_professional}>{itm.professional}</p>
</div> */

