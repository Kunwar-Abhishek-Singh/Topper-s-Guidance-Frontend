import React from "react";
import PodCastData from "./PodCastData";
import classes from "./PodCast.module.css";

const PodCastPageData = [
  {
    id: 1,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 7th",
    subjectName: "History",
  },
  {
    id: 2,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 8th",
    subjectName: "History",
  },
  {
    id: 3,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 9th",
    subjectName: "History",
  },
  {
    id: 4,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 10th",
    subjectName: "History",
  },
  {
    id: 5,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 11th",
    subjectName: "History",
  },
  {
    id: 6,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 12th",
    subjectName: "History",
  },
  {
    id: 7,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 7th",
    subjectName: "Political Science",
  },
  {
    id: 8,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 8th",
    subjectName: "Political Science",
  },
  {
    id: 9,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 9th",
    subjectName: "Political Science",
  },
  {
    id: 10,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 10th",
    subjectName: "Political Science",
  },
  {
    id: 11,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 11th",
    subjectName: "Political Science",
  },
  {
    id: 12,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 12th",
    subjectName: "Political Science",
  },
  {
    id: 13,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 7th",
    subjectName: "Geography",
  },
  {
    id: 14,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 8th",
    subjectName: "Geography",
  },
  {
    id: 15,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 9th",
    subjectName: "Geography",
  },
  {
    id: 16,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 10th",
    subjectName: "Geography",
  },
  {
    id: 17,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 11th",
    subjectName: "Geography",
  },
  {
    id: 18,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 12th",
    subjectName: "Geography",
  },
  {
    id: 19,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 7th",
    subjectName: "Physics",
  },
  {
    id: 20,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 8th",
    subjectName: "Physics",
  },
  {
    id: 21,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 9th",
    subjectName: "Physics",
  },
  {
    id: 22,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 10th",
    subjectName: "Physics",
  },
  {
    id: 23,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 11th",
    subjectName: "Physics",
  },
  {
    id: 24,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 12th",
    subjectName: "Physics",
  },
  {
    id: 25,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 7th-12th",
    subjectName: "Science",
  },
  {
    id: 26,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 7th-12th",
    subjectName: "Social Science",
  },
  {
    id: 27,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png",
    podCastTitle: "NCERT Class 7th",
    subjectName: "Mathametics",
  },
];

const PodCastMainPage = () => {
  return (
    <>
      <div className={classes.podcast_heading_div}>
        <h1>All Podcasts</h1>
      </div>
      <div className={classes.podcast_main_div}>
        {PodCastPageData.map((item) => (
          <PodCastData
            imgUrl={item.imgUrl}
            podCastTitle={item.podCastTitle}
            subjectName={item.subjectName}
          />
        ))}
      </div>
    </>
  );
};

export default PodCastMainPage;
