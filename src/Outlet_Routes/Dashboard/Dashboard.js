import React from 'react'
import classes from "./Dashboard.module.css"
// import Navbars from '../../components/Dashboard/Navbar'
import Carousel1 from '../../components/DashboardTopper/DashboardTopper'
import RelatedPost from '../../components/Dashboard_Related/RelatedPost'
import Ebook from '../../components/Dashboard_Ebooks/Ebook'
import TestSeries from '../../components/DashboardTestSeries/TestSeries'
import Books from '../../components/DashboardBooks/Books'

const Dashboard = () => {
  return (
    <>
    <div className={classes.main_dashboard}>
    {/* <Navbars/> */}
    {/* <Carousel1/> */}
    <Books/>  
    <Ebook/>  
    <TestSeries/>       
    <RelatedPost/>
    </div>
    </>
  )
}

export default Dashboard