import React from 'react'
import './DashNavCont.css'
import { useNavigate } from 'react-router-dom'
import cbxLogo from '../../../images/logo_cubix_svg_file.svg'
import React, { useEffect, useState } from 'react'
import profile from '../../../images/profile_welcome.png'
import bell from '../../../images/bell_icon_svg_file.svg'
import { AiOutlinePoweroff } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import Approvals from '../../reusables/Approvals';
import menuIcon from '../../../images/menu_icon_svg_file.svg'
import { FcSalesPerformance } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";


const DashNavCont = () => {

    const [selectedSideItem, setSelectedSideItem] = useState('dashboard');
    const [showApproval, setShowApproval] = useState(false)
    const [showUdrop, setShowUdrop] = useState(false)
    const [showUMdrop, setShowUMdrop] = useState(false)

    const [preSetItemView, setPreSetItemView] = useState(false)

    const [selectedItem, setSelectedItem] = useState('dashboard');

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const navigate = useNavigate();

    const handleSideItemClick = (item) => {
        setSelectedSideItem(item);
    };

    const onshowApproval = () => {
        setShowApproval(!showApproval)
    }

    const showUserDrop = () => {
        setShowUdrop(!showUdrop)
    }
    const showMobDrop = () => {
        setShowUMdrop(!showUMdrop)
    }

    const signOut = () => {
        localStorage.removeItem('User')
        localStorage.removeItem('Roles')
        navigate('/')
    }

    const goDashCreation = () => {
        navigate('/admin/dashboardCreation')
    }

    const user = localStorage.getItem('User')
    const profileImage = localStorage.getItem('Image')
    // console.log(user)


    useEffect(() => {
        // Check the condition to allow access (e.g., presence of 'user' in localStorage)
        const isAuthorized = localStorage.getItem('User') !== null;

        // If not authorized, navigate to the login page
        if (!isAuthorized) {
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        const storedItem = localStorage.getItem('DashItems');

        if (storedItem) {
            const parsedItem = JSON.parse(storedItem);
            console.log(parsedItem, 'parsedItem');
            if (parsedItem.length > 0) setPreSetItemView(true)
        }
    }, []);

    const handleSalesItemClick = () => {
        setSelectedItem('salesAnalysis')
        navigate('/admin/sales')
    }

    return (
        <>
            {/* <div className='DashNavCont'>
                <div className='DashNavLeft'>
                    <div className='DashNavIcon'>
                        <img className='DashNavIconPng' src={cbxLogo} alt="" />
                    </div>
                </div>
                <div className='DashNavRight1'>
                    <div className='CreateDashIcon' style={{ display: "flex", alignItems: "center", color: "#699BF7", cursor: "pointer", fontSize: "22px" }} onClick={() => goDashCreation()}>
                        <MdDashboardCustomize />
                    </div>
                    <div className='NotificationBell'>
                        <img className='DashIconRightPng' onClick={onshowApproval} src={bell} alt="" />
                    </div>
                    <div className='MenuIcon' id='navUserCont' onClick={showUserDrop}>
                        {
                            profileImage ?
                                <img className='DashIconPngProfile' src={profileImage} alt="" /> : <img className='DashIconPng' src={profile} alt="" />
                        }
                        <div className='NavUserName'>
                            {
                                user ? user : ""
                            }
                        </div>
                    </div>
                    {
                        showUdrop ?
                            <div className='navUserDrop'>
                                <div className='SignOut' onClick={signOut}>
                                    <AiOutlinePoweroff />
                                </div>
                            </div> : ""
                    }
                </div >
            </div > */}

            <div className='DashNavCont' id='DashNavMob' >
                <div className='DashNavLeft'>
                    <div className='DashNavIcon'>
                        <img className='DashNavIconPng' src={cbxLogo} alt="" />
                    </div>
                </div>
                <div className='DashNavRight'>
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li onClick={() => handleItemClick('dashboard')}><a class="dropdown-item"><MdDashboard />{' '}DashBoard</a></li>
                            <li onClick={() => handleSalesItemClick()}><a class="dropdown-item"><FcSalesPerformance />{' '}Sales Analysis</a></li>
                            {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                        </ul>
                    </div>
                    <div className='CreateDashIcon' style={{ display: "flex", alignItems: "center", color: "#699BF7", fontSize: "22px" }} onClick={() => goDashCreation()}>
                        <MdDashboardCustomize />
                    </div>
                    <div className='NotificationBell'>
                        <img className='DashIconRightPng' onClick={onshowApproval} src={bell} alt="" />
                    </div>
                    <div className='MenuIcon' onClick={showMobDrop}>
                        <img className='DashIconRightPng' src={menuIcon} alt="" />
                    </div>
                    {
                        showUMdrop ?
                            <div className='MobUserDrop'>
                                <div className='MobUserImg'>
                                    {
                                        profileImage ?
                                            <img className='DashIconPngProfile' src={profileImage} alt="" /> : <img className='DashIconPng' src={profile} alt="" />
                                    }
                                </div>
                                <div className='MobUserName'>
                                    {
                                        user ? user : ""
                                    }
                                </div>
                                <div className='MobUserLogOut' onClick={signOut}>
                                    <AiOutlinePoweroff />
                                </div>
                            </div> : ""
                    }

                    {/* <img className='DashIconPng' src={profile} alt="" /> */}
                </div>
            </div >
        </>
    )
}

export default DashNavCont