import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import TopBar from '../Components/TopBar';
import SideBar from '../Components/SideBar';
const DashboardPage = () => {
    const [opn, setOpn] = useState(false)
  return (
    <div className="container-fluid back-home mb-5">
   <div className="dashboard-section">
    <div className="row spce-row">
      {/* <div className={opn ? `col-md-1`: `col-md-2`}> */}
      <div className='col-md-1'>
       <div className="sidebar">
       <SideBar opn={opn}/>
       </div>
       
      </div>
      {/* <div className={opn ? `col-md-11`: `col-md-10`}> */}
      <div className='col-md-11'>
       <div className="topbar shadow-sm">
       <TopBar setOpn={setOpn} opn={opn}/>
       </div>
       <div className="main-body mt-3 ms-2 mb-3 shadow-sm mb-5 p-1 pt-3" style={{ backgroundColor:'#e9ecef'}}>
        <Outlet/>
       </div>
      </div>
    </div>
   </div>
   </div>
  )
}

export default DashboardPage
