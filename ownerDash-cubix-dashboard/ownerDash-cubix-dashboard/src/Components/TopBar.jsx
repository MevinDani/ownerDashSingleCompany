import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import {AiOutlineMenuFold,AiOutlineClose} from 'react-icons/ai'
import { Link } from "react-router-dom";
import '../Components/topstyle.css'
const TopBar = ({setOpn,opn}) => {
  return (
    <div>
        <>
      <div className="row">
        <div className="col-md-7 d-flex">
       
          {/* <div className="menu-icon p-2">
                {opn===false?  <AiOutlineMenuFold onClick={()=>setOpn(true)}/>:  <AiOutlineClose onClick={()=>setOpn(false)}/>}  
          </div> */}
          <p className="fs-small pt-3 ms-2 topbar hide-sm">Owner Dashboard</p>
        </div>
        <div className="col-md-3">
         <div className="row">
         <div className="col-md-6 text-end">
            <IoIosNotificationsOutline className="mt-3 icon-topbar hide-sm" />
        
            </div>
            <div className="col-md-6 text-end">
            <AiOutlineMail className="icon-topbar mt-3 hide-sm" />
         
            </div>
         </div>
        </div>

        <div className="col-md-2 text-end">
     
        
              <div className="d-flex ">
              <p className="topbar-name mt-3 hide-sm">Guest</p>
            <div className="profile ">
              <Link to={'profile'}>
              <CgProfile className="topbar-profile mt-2 hide-sm" />
              </Link>
              
              </div>
              </div>
           
            </div>
         
       
       
      </div>
    </>
    </div>
  )
}

export default TopBar
