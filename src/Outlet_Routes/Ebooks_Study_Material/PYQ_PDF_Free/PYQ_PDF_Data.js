import React from 'react';
import "./PYQ_PDF_Free";
import classes from "./PYQ_PDF_Free.module.css";

const PYQPDFData = (props) => {
  return (
    <div className={classes.pyq_card}>
        <p>{props.year}</p>
        <p>{props.pyq}</p>
        <p>{props.examName}</p> 
    </div>
  )
}

export default PYQPDFData;