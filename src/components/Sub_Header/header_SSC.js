import React,{useState, useEffect} from 'react';
import classes from "./header_SSC.module.css";
import { useParams } from 'react-router-dom';
import { subheader } from '../../API/Apicall';
function HeaderSSC(props) {
  const {exam_selection} = useParams();
  const [subheaderData, setSubheaderData] = useState([])
  const getSubheaderData= async ()=>{
    const response = await subheader()
    console.log(response)
    setSubheaderData(response.data)
  }

  useEffect(()=>{
    getSubheaderData()
  },[])

  return (
    <div>
      {subheaderData.filter(data => data.id === exam_selection).map((exam_datas,index) => (
        <div key={index}>
        {
          exam_datas.data && exam_datas.data.map((exam_header_img_data,index) => (


            <div className={classes.subHeader_exam} key={index}>

              <div className={classes.subHeader_text}>
                <h1>{exam_header_img_data.heading}</h1>
                <p>{exam_header_img_data.p_tag}</p>
              </div>
              <div className={classes.subHeader_img}>
                <img src={exam_header_img_data.img_src} alt='ssc_icon' className={classes.subHeader_img_icon}></img>
              </div>
            </div>
          ))
        }
        </div>
      ))}

    </div>
  )
}

export default HeaderSSC;
