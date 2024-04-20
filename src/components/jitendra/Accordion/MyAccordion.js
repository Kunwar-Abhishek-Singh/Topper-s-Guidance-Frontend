import React, { useState } from 'react'
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import classes from "./Accordion.module.css"
const MyAccordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
      <div className={classes.main_heading} onClick={() => setShow(!show)}>
        
          <div className={classes.main_heading_sub_div}>{show ? <div className={classes.arrow_btn_faq}><BsChevronDown /></div> : <div className={classes.arrow_btn_faq}><BsChevronRight /></div>}</div>
          <h3>{question}</h3>
        
      </div>
      {show && <p className={classes.answers}>{answer}</p>}
      </div>
      
    </>
  )
}

export default MyAccordion;