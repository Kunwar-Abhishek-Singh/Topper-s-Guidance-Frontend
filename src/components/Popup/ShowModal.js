import React from 'react'
import classes from "./ShowModal.module.css"
const ShowModal = () => {
  return (
    <div>
      <div className={classes.main_div_pop_up_modal}>
        <p className={classes.text_content}>User Got already registered!!!</p>
        <p className={classes.text_content}>Either Make a new Registration or Login....</p>
        <button className={classes.ok_btn}>Okay</button>
      </div>
    </div>
  )
}

export default ShowModal
