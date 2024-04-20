import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import classes from './PYQ_PDF_Free.module.css'
import { useParams } from 'react-router-dom'
const Pyq_pdf_Layout = () => {
  const {topper_name} = useParams();
  return (
    <>
    <ul className={classes.pyq_head_btn}>
        <Link className={classes.link_tag_pyq} to={`/logged_in_profile_dashboard/${topper_name}/pyq_pdf`}>
        <li className={classes.main_ssc}>SSC </li>
        </Link>
        <Link className={classes.link_tag_pyq} to='chapterwise'>
        <li className={classes.main_rrb}>Railway </li>
        </Link>
        {/* <Link className={classes.link_tag_pyq} to='answerkey'>
        <li className={classes.main}>Answer Key</li>
        </Link> */}
    </ul>
    <Outlet />
    </>
  )
}

export default Pyq_pdf_Layout;