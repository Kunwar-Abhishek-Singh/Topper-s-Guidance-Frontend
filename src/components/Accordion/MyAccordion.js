import React, { useState } from 'react'
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

const MyAccordion = ({question, answer}) => {
    const [show, setShow] = useState(false);

  return (    
    <>
    <div className='main_heading' onClick={() =>setShow(!show)}>
        <p >{show? <BsChevronDown /> : <BsChevronRight /> }</p>
        <h3>{question}</h3>
    </div>
    {show && <p className='answers'>{answer}</p>}
    </>
  )
}

export default MyAccordion;