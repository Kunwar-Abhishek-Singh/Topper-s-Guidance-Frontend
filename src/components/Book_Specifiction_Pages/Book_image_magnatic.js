import React from "react";
import ReactImageMagnify from "react-image-magnify";
import classes from "./Book_Specifiction_Page.module.css";

const Bookimagemagnatic = (props) => { 
  //    var watchImg300;
  // const [imageSrc, setImageSrc] = useState(props.image);
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
  );
};

export default Bookimagemagnatic;
