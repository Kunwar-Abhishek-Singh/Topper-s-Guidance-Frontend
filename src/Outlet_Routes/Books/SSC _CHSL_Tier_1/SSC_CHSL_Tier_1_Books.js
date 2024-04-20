import React,{useState, useEffect} from 'react';
import classes from "./SSC_CHSL_Tier_1_Books.module.css";
import SSCCHSLTier1Data from './SSC_CHSL_Tier_1_Data';
// import { digitalEbookData } from '../../../Dummy_Database';
import { dashboardbooksdigitalbooks } from '../../../API/Apicall';

const SSCCHSLTier1Books = () => {
  
  const [digitalBooksData, setDigitalBooksData] = useState([]);
  const getDigitalBooks = async ()=>{
        const response = await dashboardbooksdigitalbooks();
        console.log(response);
        setDigitalBooksData(response.data);
  }
  useEffect(()=>{
    getDigitalBooks();
  },[]);

  return (
    <>
    <div className={classes.ebook_heading}>
        <h1>Books</h1>
    </div>
    <div className={classes.Ebook_head}>
      <div className={`${classes.main_card} ${classes.item_main_card}`}>
      <li className={classes.main_card_item}>
        {digitalBooksData.map((item) =>(
         <SSCCHSLTier1Data
          imgUrl={item.imgUrl}
          title={item.title}
          author={item.author}
          format={item.format}
          rsIcon={item.rsIcon}
          rating={item.rating}
          price={item.price}
          />
        ))}
      </li>
      </div>
      <div className={classes.right_sidebar}>
          <div className={`${classes.rightSide_card} ${classes.item_main_card}`}>
          <h4>Categary</h4>
          <li className={classes.side_cards_item}>
            {digitalBooksData.map((item,index) =>(
              <li key={index}>
                {item.rightSideBar.map((data,index) =>(
                  <p key={index}>{data}</p>
                ))}
                </li>
            ))}           
          </li>
          </div>
      </div>
    </div>
    </>
  )
}

export default SSCCHSLTier1Books;

