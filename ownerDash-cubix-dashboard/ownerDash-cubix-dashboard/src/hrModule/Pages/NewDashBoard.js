import React, { useState } from 'react'
import './NewDashBoard.css'
import NavBar from '../Components/NavBar/NavBar'
import SideBar from '../Components/SideBar'
import { Outlet } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import SidePanel from '../../Components/SidePanel/SidePanel'
import NavBarMob from '../../Components/NavBarMob/NavBarMob'

const NewDashBoard = () => {

    const [showSideBar, setShowSideBar] = useState(false)

    const toggleShowSideBar = () => {
        setShowSideBar(!showSideBar)
    }

    const showLeftSidePanelPop = true

    console.log(showSideBar)

    return (
        <>
            {/* <div className='NewDashNav'><NavBar /></div> */}
            <div className='NewDashNav'>
                {/* <NavBarMob showLeftSidePanelPop={showLeftSidePanelPop} item='hrModuleHome' /> */}
                <NavBarMob item='hrModuleHome' />
            </div>

            <div className='NewDashWrapper'>

                {/* <div className='DashBurger' onClick={() => toggleShowSideBar()}>
                    <RxHamburgerMenu />
                </div> */}

                <div className='NewDashCont'>
                    <div className='NewDashSideBarBigScreen'>
                        {/* <SideBar toggleShowSideBar={toggleShowSideBar} /> */}
                        <SidePanel item='hrModuleHome' />
                    </div>
                    {
                        // showSideBar ?
                        //     <div className='NewDashSideBar'>
                        //         {/* <SideBar toggleShowSideBar={toggleShowSideBar} /> */}
                        //         <SidePanel />

                        //     </div> : ""
                    }

                    <div className='NewDashBody main-body'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewDashBoard