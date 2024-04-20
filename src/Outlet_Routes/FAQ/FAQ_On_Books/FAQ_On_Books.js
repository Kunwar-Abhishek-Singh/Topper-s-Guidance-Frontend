import React from 'react'
import Accordion from '../../../components/jitendra/Accordion/Accordion';
// import { ClassNames } from '@emotion/react';
import classes from "./FAQ_On_Books.module.css"

const FAQOnBooks = () => {
  return (
    <>
        <div className={classes.faq_books_model}>
        <Accordion />
        </div>
    </>
  )
}

export default FAQOnBooks;
