import React from 'react';
import classes from "./MyNotes_Specification_pages.module.css";
import { CiLocationOn } from "react-icons/ci";
import { MdLocalOffer } from "react-icons/md";
import axios from 'axios';
import { useState } from 'react';
const MyNotesSpecificationpagesdata = (props) => {
  const [pinCode, setPinCode] = useState();
  const [result,setResult] = useState(null);

  const pincodeChangeHandler = (e) =>{
    setPinCode(e.target.value);
    console.log(pinCode)
  }

  const locationCheckHandler = async(e)=>{
    e.preventDefault();
    try{
      const response = await axios.get(`https://api.postalpincode.in/pincode/${pinCode}`);
      const data = response.data[0];
      setResult(data)
      console.log(result);
    }
    catch(error){
      console.log("Error fetching PIN code detail", error);
      setResult(null)
    }
  }
  return (
    <>
    <div className={classes.my_notes_next_full_card}>
        <h2 className={classes.my_notes_next_heading_title}>
          <span>{props.title}</span></h2>
        <div className={classes.my_notes_next_rating_card}>
        <button className={classes.my_notes_next_rating_btn}>{props.rating}</button>
        </div>
        <div className={classes.my_notes_next_price_card}>
        <h3>{props.price}</h3>
        </div>
        <div className={classes.my_notes_next_offer_card}>
        <p>{props.offer}</p>
        </div>

        <div className={classes.my_notes_next_bank_offerI}>
          <p><span style={{color:"green"}}><MdLocalOffer/></span><sapn className={classes.abcd}>{props.bankOffer}</sapn></p>
        </div>
        <div className={classes.my_notes_next_bank_offerII}>
          <p><span style={{color:"green"}}><MdLocalOffer/></span><span className={classes.abcd}>{props.bankOfferI}</span></p>
        </div>
        <div className={classes.my_notes_next_partnerOffer_card}>
        <p><span style={{color:"green"}}><MdLocalOffer/></span><span className={classes.abcd}>{props.partnerOffer}</span></p>
        </div>
        <div className={classes.partner_a}>
        <p><span style={{color:"green"}}><MdLocalOffer/></span><span className={classes.abcd}>{props.partnerOffer1}</span></p>
        </div>

        <div className={classes.my_notes_next_delivery_full_card}>
        <div className={classes.my_notes_next_delivery_a}>
        <p>{props.delivery} 
        <span className={classes.location_icon}><CiLocationOn/></span> 
        <span><input type='text' placeholder='Enter 6 digit Pincode' onChange={pincodeChangeHandler} className={classes.input_pincode}></input></span>
        <span className={classes.my_notes_next_check_a}><button onClick={locationCheckHandler}>Check</button></span></p>
        </div>  

        <div className={classes.my_notes_next_delivery_date}>
          <p>{result===null?null:result.PostOffice[0].District}</p>
        <span><p>{props.delivaryDate}</p></span>
        </div>
        <div className={classes.my_notes_next_view_btn}>
        <p>{props.viewDetails}</p>
        </div>
        </div>

        <div className={classes.my_notes_page_author_downpage}>
        <p>Author <span className={classes.my_notes_next_author_text}>{props.Author}</span></p>
        </div>

        <ul className={classes.my_notes_next_high_light}>
        <p>highlights <li className={classes.my_notes_next_highlight}>{props.highlights}</li></p>
        </ul>

        <div className={classes.my_notes_next_service_a}>
        <p>{props.service}</p>
        </div>

        <div className={classes.my_notes_next_cash_delivery}>
        <p> <span>₹</span> {props.cashOnDelivary}</p>
        </div>
        
        <ul className={classes.my_notes_next_number_a}>
        <li>{props.numberOfPage}</li>
        </ul>

        <ul className={classes.my_notes_next_language_a}>
        <li>language: {props.language}</li>
        </ul>

        <ul className={classes.my_notes_next_publisher_a}>
        <li>Publisher: {props.publisher}</li>
        </ul>

        <div className={classes.my_notes_next_seller_xyz}>
        <div className={classes.my_notes_next_seller_a}>
          <p>{props.sellerA}</p>
        </div>
        <div className={classes.my_notes_next_seller_abc}>
        <p>{props.seller}</p>
        </div>
        </div>

        <ul className={classes.my_notes_next_replacement_xyz}>
        <li>{props.replacementDay}</li>
        </ul>

        <div className={classes.my_notes_next_description_main}>
        <div className={classes.my_notes_next_description_left}><p>{props.descriptionI}</p></div>
        <div className={classes.my_notes_next_description_right}><p>{props.description}</p></div>
        </div>
        <div className={classes.full_div_specification}>
        <div className={classes.my_notes_specifications_div}>
        <p className={classes.my_notes_next_specifications_text}>{props.specifications}</p>
        </div>


        <div className={classes.specifications_pro}>
        <div className={classes.my_notes_spec_book_main}>
        <div className={classes.my_notes_book_spec_left} ><p>{props.bookM}</p></div>
        <div className={classes.my_notes_book_spec_right} ><p>{props.book}</p></div>
        </div>
        <div className={classes.my_notes_author_spec}>
        <p> Author : <span className={classes.my_notes_span_auth}>{props.author1}</span></p> 
        </div>
        <div className={classes.my_notes_binding_spec}>
        <p> Binding : <span className={classes.my_notes_binding_span}> {props.binding}</span></p>
        </div>
        <div className={classes.publishing_date_spec}>
        <p> Publishing Date : <span className={classes.publishing_date_span}>{props.publishers}</span></p>
        </div>
        <div className={classes.my_notes_next_publishser_spec}>
        <p> Publisher : <span className={classes.my_notes_next_publisher_span}>{props.edition}</span></p>
        </div>
        <div className={classes.my_notes_next_exam_spec}>
        <p> Exam : <span className={classes.my_notes_next_exam_spec_span}> {props.exam}</span></p>
        </div>
        <div className={classes.my_notes_number_of_page_spec}>
        <p> Number of Pages : <span> {props.numberOfPages}</span></p>
        </div>
        <div className={classes.my_notes_language_spec}>
        <p> language : <span> {props.language2}</span></p> 
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default MyNotesSpecificationpagesdata;