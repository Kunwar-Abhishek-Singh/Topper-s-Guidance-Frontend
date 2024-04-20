import React from 'react';
import SscTestSeriesPage from './SscTestSeriesPage';
import SscMockTest from './SscMockTest';
import RrbTestSeries from '../../../components/RailwayTestSeries/RrbTestSeries';
// import Ibps from '../../../components/BankingTestSeries/Ibps';




const SscTestSeries = () => {
  return (
    <>
    <SscTestSeriesPage />
    <SscMockTest />
    <RrbTestSeries/>  
    {/* <Ibps/> */}
    </>
  )
}

export default SscTestSeries;