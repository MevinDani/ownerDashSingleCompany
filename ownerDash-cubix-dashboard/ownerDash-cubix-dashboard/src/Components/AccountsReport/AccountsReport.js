// import React from 'react'
import './AccountsReport.css'
import { useNavigate } from 'react-router-dom'
import cbxLogo from '../../images/logo_cubix_svg_file.svg'
import React, { useEffect, useState } from 'react'
import profile from '../../images/profile_welcome.png'
import bell from '../../images/bell_icon_svg_file.svg'
import { AiOutlinePoweroff } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import Approvals from '../reusables/Approvals';
import menuIcon from '../../images/menu_icon_svg_file.svg'
import { FcSalesPerformance } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import SidePanel from '../SidePanel/SidePanel'
import NavBarMob from '../NavBarMob/NavBarMob'


const AccountsReport = () => {

    const [selectedSideItem, setSelectedSideItem] = useState('dashboard');
    const [showApproval, setShowApproval] = useState(false)
    const [showUdrop, setShowUdrop] = useState(false)
    const [showUMdrop, setShowUMdrop] = useState(false)

    const [preSetItemView, setPreSetItemView] = useState(false)

    const [selectedItem, setSelectedItem] = useState('sales');

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

    const handleDashBoardItemClick = () => {
        setSelectedItem('dashboard')
        navigate('/admin/dashboard')
    }

    const handleSideBarItemClick = (item) => {
        setSelectedItem(item)
        navigate(`/admin/${item}`)
    }


    const selectedCompanyString = localStorage.getItem("selectedCompany");

    const selectedCompany = JSON.parse(selectedCompanyString);

    const cmpcode = selectedCompany.cmpcode;
    const publick = selectedCompany.publick;
    const privatek = selectedCompany.privatek;

    const userDataArray = JSON.parse(localStorage.getItem("userDataArray")) || [];
    // Find the index of the selected company in userDataArray (assuming cmpcode is unique)
    const selectedCompanyfromMap = userDataArray.find(company => company.cmpcode === cmpcode);

    // console.log(selectedCompanyfromMap)

    useEffect(() => {
        if (userDataArray.length === 0) {
            navigate('/login');
        }
    }, [])

    useEffect(() => {
        if (selectedCompanyfromMap && !selectedCompanyfromMap.User) {
            // User is logged in, redirect to dashboard
            navigate('/login');
        }
    }, []);

    // console.log(user)


    // useEffect(() => {
    //     // Check the condition to allow access (e.g., presence of 'user' in localStorage)
    //     const isAuthorized = localStorage.getItem('User') !== null;

    //     // If not authorized, navigate to the login page
    //     if (!isAuthorized) {
    //         navigate('/login');
    //     }
    // }, [navigate]);

    useEffect(() => {
        const storedItem = localStorage.getItem('DashItems');

        if (storedItem) {
            const parsedItem = JSON.parse(storedItem);
            // console.log(parsedItem, 'parsedItem');
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
                </div>
            </div> */}

            <NavBarMob />

            {/* <div className='DashNavCont' id='DashNavMob'>
                <div className='DashNavLeft'>
                    <div className='DashNavIcon'>
                        <img className='DashNavIconPng' src={cbxLogo} alt="" />
                    </div>
                </div>
                <div className='DashNavRight'>
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

                </div>
            </div> */}
            <div className='SalesHomeWrapper'>

                {
                    showApproval && (
                        <div className='AppDashCont'><Approvals onshowApproval={onshowApproval} /></div>
                    )
                }

                <SidePanel item='accReport' />

                {/* <div className='DashSideBar' style={{ height: "100vh" }}>
                    <div
                        onClick={() => handleSideBarItemClick('dashboard')}
                        className={selectedItem === 'dashboard' ? 'selectedItem' : ''}
                    >
                        <MdDashboard />{' '}<span>DashBoard</span>
                    </div>
                    <div
                        onClick={() => handleSideBarItemClick('sales')}
                        className={selectedItem === 'sales' ? 'selectedItem' : ''}
                    >
                        <FcSalesPerformance />{' '}<span>Sales Analysis</span>
                    </div>
                    <div
                        onClick={() => handleSideBarItemClick('accReport')}
                        className={selectedItem === 'accReport' ? 'selectedItem' : ''}
                    >
                        <TbReportMoney />{' '}<span>Accounts Report</span>
                    </div>
                </div> */}

                <div className='SalesHomeCont'>

                    <div className='SalesHomeHeadText' style={{ fontSize: '18px' }}>Accounts Report</div>
                    <hr />
                    {/* <div className='SalesHomeHeadText'>Invoice</div> */}
                    <div className='SalesHomeBoxCont accReportBox'>
                        <div onClick={() => navigate('/admin/issuedPdcTable')}>Total Issued PDC</div>
                        <div onClick={() => navigate('/admin/recievedPdcTable')}>Total Received PDC</div>
                        <div onClick={() => navigate('/admin/StatementReport2')}>Statement Accounts Report</div>
                        <div onClick={() => navigate('/admin/outstandingAccReport')}>Outstanding Accounts Report</div>
                        {/* <div onClick={() => navigate('/admin/CreditSales')}>CreditSales</div>

                        <div onClick={() => navigate('/admin/groupSales')}>GroupWise Sales</div>
                        <div onClick={() => navigate('/admin/CategorySales')}>Category Wise Sales</div>
                        <div onClick={() => navigate('/admin/BranchWiseSales')}>Department Wise Sales</div>

                        <div onClick={() => navigate('/admin/ItemWiseSales')}>Item Wise Sales</div>
                        <div onClick={() => navigate('/admin/CustomerWiseSales')}>Customer Wise Sales</div>
                        <div onClick={() => navigate('/admin/SalesManSales')}>Salesman Wise Sales</div> */}
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default AccountsReport