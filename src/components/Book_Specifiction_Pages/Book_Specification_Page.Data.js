import React, { useState } from "react";
import classes from "./Book_Specifiction_Page.module.css";
import { CiLocationOn } from "react-icons/ci";
import { MdLocalOffer } from "react-icons/md";
import axios from "axios";
const BookSpecifictionData= (props) => {

  const [pinCode, setPinCode] = useState();
  const [result, setResult] = useState(null);
  // const [isValid, setIsValid] = useState(false);



  const pincodeChangeHandler = (e) =>{
    setPinCode(e.target.value);
    console.log(pinCode)
  }
  // const pinCodeRegex = /^[1-9][0-9]{5}$/;

  const locationCheckHandler = async (e) =>{
    e.preventDefault();
    // setIsValid(pinCodeRegex.test(pinCode));
    try {
      
      const response = await axios.get(`https://api.postalpincode.in/pincode/${pinCode}`);
      const data = response.data[0];
      setResult(data);
      console.log(result)
      
    } catch (error) {
      console.error('Error fetching PIN code details', error);
      setResult(null);
    } 


  }
  return (
    <div className={classes.full_card_specifiction}>
        <h2 className={classes.heading_title}>
          <span>{props.title}</span></h2>
        <div className={classes.rating_card}>
        <button className={classes.rating_btn}>{props.rating}</button>
        </div>
        <div className={classes.price_card}>
        <h3>{props.price}</h3>
        </div>
        <div className={classes.offer_card}>
        <p>{props.offer}</p>
        </div>
        <div className={classes.bank_offerI}>
          <p><span style={{color:"green"}}><MdLocalOffer/></span><sapn className={classes.abcd}>{props.bankOffer}</sapn></p>
        </div>
        <div className={classes.bank_offerII}>
          <p><span style={{color:"green"}}><MdLocalOffer/></span><span className={classes.abcd}>{props.bankOfferI}</span></p>
        </div>
        <div className={classes.partnerOffer_card}>
        <p><span style={{color:"green"}}><MdLocalOffer/></span><span className={classes.abcd}>{props.partnerOffer}</span></p>
        </div>
        <div className={classes.partner_a}>
        <p><span style={{color:"green"}}><MdLocalOffer/></span><span className={classes.abcd}>{props.partnerOffer1}</span></p>
        </div>

        <div className={classes.delivery_full_card}>
        <div className={classes.delivery_a}>
        <p>{props.delivery}
         <span className={classes.location_icon}><CiLocationOn/></span>
         <span><input type="text" placeholder="Enter 6 digit Pincode" onChange={pincodeChangeHandler} className={classes.input_pincode}></input></span> 
         <span className={classes.check_a}><button onClick={locationCheckHandler} >Check</button></span></p>
        </div>      
        <div className={classes.delivery_date}>
        <p>{result===null?null:result.PostOffice[0].District}</p>
        <span><p>{props.delivaryDate}</p></span>
        </div>
        <div className={classes.view_btn}>
        <p>{props.viewDetails}</p>
        </div>
        </div>

        <div className={classes.author_downpage}>
        <p>Author <span className={classes.author_a}>{props.Author}</span></p>
        </div>
        <ul className={classes.high_light}>
        <p>highlights <li className={classes.highlight}>{props.highlights}</li></p>
        </ul>
        <div className={classes.service_a}>
        <p>{props.service}</p>
        </div>
        <div className={classes.cash_delivery}>
        <p> <span>₹</span> {props.cashOnDelivary}</p>
        </div>
        
        <ul className={classes.number_a}>
        <li>{props.numberOfPage}</li>
        </ul>
        <ul className={classes.language_a}>
        <li>language: {props.language}</li>
        </ul>
        <ul className={classes.publisher_a}>
        <li>Publisher: {props.publisher}</li>
        </ul>
        <div className={classes.seller_xyz}>
        <div className={classes.seller_a}>
          <p>{props.sellerA}</p>
        </div>
        <div className={classes.seller_abc}>
        <p>{props.seller}</p>
        </div>
        </div>
        <ul className={classes.replacement_xyz}>
        <li>{props.replacementDay}</li>
        </ul>
        <div className={classes.description_main}>
        <div className={classes.description_left}><p>{props.descriptionI}</p></div>
        <div className={classes.description_right}><p>{props.description}</p></div>
        </div>
        <div className={classes.full_div_specification}>
        <div className={classes.specifications_div}>
        <p className={classes.specifications_text}>{props.specifications}</p>
        </div>
        <div className={classes.specifications_pro}>

        <div className={classes.spec_book_main}>
        <div className={classes.book_spec_left} ><p>{props.bookM}</p></div>
        <div className={classes.book_spec_right} ><p>{props.book}</p></div>
        </div>
        <div className={classes.author_spec}>
        <p> Author : <span className={classes.span_auth}>{props.author1}</span></p> 
        </div>
        <div className={classes.binding_spec}>
        <p> Binding : <span className={classes.binding_span}> {props.binding}</span></p>
        </div>
        <div className={classes.publishing_date_spec}>
        <p> Publishing Date : <span className={classes.publishing_date_span}>{props.publishers}</span></p>
        </div>
        <div className={classes.publishser_spec}>
        <p> Publisher : <span className={classes.publisher_span}>{props.edition}</span></p>
        </div>
        <div className={classes.exam_spec}>
        <p> Exam : <span className={classes.exam_spec_span}> {props.exam}</span></p>
        </div>
        <div className={classes.number_of_page_spec}>
        <p> Number of Pages : <span> {props.numberOfPages}</span></p>
        </div>
        <div className={classes.language_spec}>
        <p> language : <span> {props.language2}</span></p> 
        </div>
        </div>
        </div>
    </div>
  );
};

export default BookSpecifictionData;