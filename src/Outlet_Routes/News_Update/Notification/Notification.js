import React, {useState, useEffect} from 'react';
import classes from "./Notification.module.css";
import { newsupdate } from '../../../API/Apicall';
const Notification = () => {
  const [newsData, setNewsData] = useState([]);
  const getNewsUpdate = async()=>{
    const response = await newsupdate()
    setNewsData(response.data);
    console.log(response)
    
  }
  useEffect(()=>{
    getNewsUpdate();
  },[])
  return (
    <>


      <div className={classes.news_update_master_div}>
        <div className={classes.news_update_heading}>
          <h2>News Update</h2>
        </div>
        <div className={classes.News_Update_Head_div}>
          {newsData.filter(data => (data.section === "Latest Jobs")).map(data => (


            <div className={classes.News_Update_Subheader_Boundary}>
              <div className={classes.News_Update_Subheader}>   
                <h3>Latest Jobs</h3>
              </div>
              {data.data.map(data => (
                <ul className={classes.list_items}>
                  <li><a href={data.link}>{data.id}.{data.name}</a></li>  
                </ul>
              ))}

            </div>
          ))}

          {newsData.filter(data => (data.section === "Admit Card")).map(data => (


            <div className={classes.News_Update_Subheader_Boundary}>

              <div className={classes.News_Update_Subheader}>
                <h3>Admit Card</h3>
              </div>
              {data.data.map(data => (
                <ul className={classes.list_items}>
                  <li><a href={data.link}>{data.id}.{data.name}</a></li>

                </ul>
              ))}

            </div>
          ))}

          {newsData.filter(data => (data.section === "Result")).map(data => (


            <div className={classes.News_Update_Subheader_Boundary}>
              <div className={classes.News_Update_Subheader}>
                <h3>Result</h3>
              </div>
              {data.data.map(data => (
                <ul className={classes.list_items}>
                  <li><a href={data.link}>{data.id}. {data.name}</a></li>
                  {/* <li><a href='https://ssc.nic.in'>2. SSC Selection Post</a></li>
              <li><a href='https://ssc.nic.in'>3. SSC CHSL</a></li>
              <li><a href='https://ssc.nic.in'>4. SSC MTS</a></li>
              <li><a href='https://ssc.nic.in'>5. SSC CPO</a></li>
              <li><a href='https://ssc.nic.in'>6. SSC Stenography</a></li> */}
                </ul>
              ))}

            </div>
          ))}

          {newsData.filter(data => (data.section === "Notification")).map(data => (


            <div className={classes.News_Update_Subheader_Boundary}>
              <div className={classes.News_Update_Subheader}>
                <h3>Notification</h3>
              </div>
              <marquee direction="up" scrollAmount="1">
              
              {data.data.map(data => (

                  <ul className={classes.list_items}>
                    <li><a href={data.link}>{data.id}. {data.name}</a></li>
                    {/* <li><a href='https://ssc.nic.in'>2. SSC Selection Post</a></li>
                    <li><a href='https://ssc.nic.in'>3. SSC CHSL</a></li>
                    <li><a href='https://ssc.nic.in'>4. SSC MTS</a></li>
                    <li><a href='https://ssc.nic.in'>5. SSC CPO</a></li>
                    <li><a href='https://ssc.nic.in'>6. SSC Stenography</a></li>
                    <li><a href='https://ssc.nic.in'>7. State SSC</a></li> */}
                  </ul>
              ))}
              </marquee>



            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default Notification;
