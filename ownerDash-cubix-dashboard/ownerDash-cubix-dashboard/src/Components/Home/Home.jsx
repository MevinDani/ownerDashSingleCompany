import React from 'react'
import WelcomeCard from './WelcomeCard'
import CardOne from './CardOne'
import CardThree from './CardThree'
import CardFour from './CardFour'
import CardFive from './CardFive'
import LineGraph from '../reusables/LineGraph'
import CashBalance from '../reusables/CashBalance'
import DepartmentSales from '../reusables/DepartmentSales'
import Notification from '../reusables/Notification'
import DoughnutChart from '../reusables/Doughnut'
import TopCustomers from '../reusables/TopCustomers'
import TopProductCode from '../reusables/TopProductsCode'
import Payables from '../reusables/Payables'
import PaybleCont from './CardTwo'

const Home = () => {
  return (
   <>
   <div className="container">

   <div className="container d-flex align-items-center justify-content-center mt-4 mb-4">
      <div className="col-md-6">
          <WelcomeCard />
      </div>
    </div>

   <div className="row d-flex align-items-end justify-content-between m-2 mb-4">
      <div className="col-md-3">
       <CardThree/>
      </div>
      <div className="col-md-3  d-flex align-items-center justify-content-center">
       <CashBalance />
      </div>
      <div className="col-md-6">
       <PaybleCont/>
      </div>
      {/* <div className="col-md-4">
       <CardFive/>
      </div> */}  
    </div>

    <div className='row d-flex align-items-center justify-content-center  m-2 mb-4'>
    <div className="col-md-4">
       <CardFive/>
      </div>
      <div className="col-md-4">
       <CardFour/>
      </div>
    </div>

    <div className='row d-flex align-items-center justify-content-center  m-2 mb-4'>
      <div className="col-md-4">
        <Notification/>
      </div>
      <div className="col-md-4">
        <DepartmentSales/>
      </div>
      {/* <div className="col-md-4">
       <CardFour/>
      </div> */}
    </div>


    <div className="row mt-4 d-flex align-items-center justify-content-between flex-wrap  m-2 mb-4">

      <div className="col-md-6">
       <LineGraph/>
      </div>
      <div className="col-md-6">
       <TopCustomers/>
      </div>
    </div>

    <div className="row  d-flex align-items-center justify-content-between flex-wrap  m-2 mb-4">
      <div className="col-md-6">
       <DoughnutChart/>
      </div>
      <div className="col-md-6">
       <TopProductCode/>
      </div>
    </div>

    {/* <div className='row m-4'></div>
    <div className="col-md-6">
       <PaybleCont/>
      </div> */}
   </div>
   </>
  )
}

export default Home
