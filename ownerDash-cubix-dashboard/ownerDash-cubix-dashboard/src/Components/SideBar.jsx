import React, { useState } from 'react'
import "./topstyle.css";
import {AiOutlineLaptop,AiOutlineLogout} from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from '../images/cubix-logo.png'



const SideBar = ({opn}) => {
 
  return (
    <>
      <div className="side">
        <div className="container">
          <div className="text-center main-head ">
            <h6 className={opn?`fs-small`:``}><img src={logo} alt="" srcset=""  className="img-fluid logo-img"/></h6>
            {/* <h6 className='fs-small'><img src={logo} alt="" srcset=""  className="img-fluid logo-img"/></h6> */}
            <hr></hr>
          </div>

       

          <div className="menu-section ">
          <Link to={'home'}>
          <p className={opn? `text-center `:"ps-2 "}>
                <AiOutlineLaptop className={opn?`fs-big`:"icon-home"} /> <span className={opn ? `hide`:`clr-hvr`}> &nbsp;Dashboard</span> 
              </p>
              </Link>
          </div>
          <hr />

  
       

        
          <p className="side-head">Authentication</p>
          <div className="menu-section">
          <Link to={'/'}>
          <p className={opn? `text-center `:"ps-2 "}>
                <AiOutlineLogout  className={opn?`fs-big`:"icon-home"} /> <span className={opn ? `hide`:`clr-hvr`}> &nbsp;Log Out</span> 
              </p>
              </Link>
          </div>

          
          <hr />
        </div>
      </div>
    </>
  )
}

export default SideBar
