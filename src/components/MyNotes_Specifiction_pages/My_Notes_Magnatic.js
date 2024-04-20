import React from 'react';
import ReactImageMagnify from "react-image-magnify";
import classes from "./MyNotes_Specification_pages.module.css";

const MyNotesMagnatic = (props) => {
  return (
    <div className={classes.xzy_abc}>
      <div className={classes.curser_effect}>
        {/* watchImg300={props.image}; */}
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "SSC English 7600 TCS MCQ Chapter Wise With Detailed Explanation 4th Edition English Medium",
              isFluidWidth: true,
              src: props.image,
              width: 297,
              height: 416,
            },
            largeImage: {
              src: props.image,
              width: 800,
              height: 1040,
            },
            enlargedImageContainerDimensions: {
              width: "150%",
              height: "100%",
            },            
          }}
        />
      </div>
    </div>
  )
}

export default MyNotesMagnatic;