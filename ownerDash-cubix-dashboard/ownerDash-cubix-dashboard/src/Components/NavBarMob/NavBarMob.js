import './NavBarMob.css'
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
import { FaUsersRectangle } from "react-icons/fa6";
import { SlPlus } from "react-icons/sl";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { RotatingLines } from 'react-loader-spinner'
import { toast } from 'react-toastify'
import SidePanel from '../SidePanel/SidePanel'
import { IoMdClose } from "react-icons/io";


const NavBarMob = ({ showLeftSidePanelPop, item, newDash, salesPage, salesAnalysisPage }) => {
    const [selectedItem, setSelectedItem] = useState('dashboard');
    const [showApproval, setShowApproval] = useState(false)
    const [showUdrop, setShowUdrop] = useState(false)
    const [showUMdrop, setShowUMdrop] = useState(false)
    const [companyList, setCompanyList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [showLeftPop, setShowLeftPop] = useState(false)

    const userDataArray = JSON.parse(localStorage.getItem("userDataArray")) || [];
    useEffect(() => {
        if (userDataArray.length === 0) {
            navigate('/login');
        }
    }, [])

    const selectedCompanyString = localStorage.getItem("selectedCompany");

    const selectedCompany = JSON.parse(selectedCompanyString);

    useEffect(() => {
        if (!selectedCompany) {
            // User is logged in, redirect to dashboard
            navigate('/login');
        }
    }, []);

    const cmpcode = selectedCompany && selectedCompany.cmpcode;


    // const userDataArray = JSON.parse(localStorage.getItem("userDataArray")) || [];
    const selectedCompanyfromMap = userDataArray.find(company => company.cmpcode === cmpcode);
    // console.log(selectedCompanyfromMap)

    const user = selectedCompanyfromMap && selectedCompanyfromMap.User
    const profileImage = selectedCompanyfromMap && selectedCompanyfromMap.Image
    const cmpName = selectedCompanyfromMap && selectedCompanyfromMap.CmpName

    const navigate = useNavigate();

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const handleSalesItemClick = () => {
        setSelectedItem('salesAnalysis')
        navigate('/admin/sales')
    }
    const handleDashBoardItemClick = () => {
        setSelectedItem('dashboard')
        navigate('/admin/dashboard')
    }

    const signOut = () => {
        // let userDataArray = JSON.parse(localStorage.getItem("userDataArray")) || [];

        // Find the index of the selected company in userDataArray (assuming cmpcode is unique)
        const selectedCompanyIndex = userDataArray.findIndex(company => company.cmpcode === cmpcode);

        // Check if the selected company is found in the array
        if (selectedCompanyIndex !== -1) {
            // Update the properties of the selected company with new values
            userDataArray[selectedCompanyIndex].Roles = '';
            userDataArray[selectedCompanyIndex].User = '';
            userDataArray[selectedCompanyIndex].Image = '';
            userDataArray[selectedCompanyIndex].CmpName = '';
            userDataArray[selectedCompanyIndex].AllowDept = '';

            // Save the updated array back to local storage
            localStorage.setItem("userDataArray", JSON.stringify(userDataArray));

            // Print the array to the console for debugging
            // console.log("Updated userDataArray:", userDataArray);

            // Remove the selected company from local storage
            localStorage.removeItem("selectedCompany");

            // Print the selected company to the console for debugging
            // console.log("Removed selectedCompany from local storage:", localStorage.getItem("selectedCompany"));
        }
        toast.error('User Logged Out', {
            autoClose: 1500
        })

        navigate('/');
    }


    const goDashCreation = () => {
        navigate('/admin/dashboardCreation')
    }

    const onshowApproval = () => {
        setShowApproval(!showApproval)
    }

    const showUserDrop = () => {
        setShowUdrop(!showUdrop)
    }
    const showMobDrop = () => {
        setShowUMdrop(!showUMdrop)
    }

    const showLeftPopClick = () => {
        setShowLeftPop(!showLeftPop)
    }

    const showLeftSidePopDrop = () => {

    }

    const handleCmpnyListClick = (item) => {
        const selectedCompany = userDataArray.find(company => company.cmpcode === item.cmpcode);

        // console.log(selectedCompany, 'selectedCompany')
        if (selectedCompany.cmpcode === cmpcode) {
            return
        } else if (!selectedCompany || !selectedCompany.User || selectedCompany.User.trim() === '') {
            // If User key is not present or its value is empty, redirect to login
            localStorage.setItem('selectedCompany', JSON.stringify(selectedCompany))
            navigate('/login');
        } else if (selectedCompany && selectedCompany.User) {
            setIsLoading(true);
            localStorage.setItem('selectedCompany', JSON.stringify(selectedCompany))
            window.location.reload();
        }
    }

    // console.log(isLoading)
    // const user = localStorage.getItem('User')
    // const profileImage = localStorage.getItem('Image')


    return (
        <>

            {
                isLoading && <div style={{ position: 'absolute', top: "50%", bottom: "50%", left: "50%", rigth: "50%", zIndex: "1" }}>
                    <RotatingLines
                        strokeColor="green"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="150"
                        visible={true}
                    />
                </div>
            }


            <div className='DashNavCont salesDashNav'>
                <div className='DashNavLeft'>
                    <div className='DashNavIcon'>
                        <img className='DashNavIconPng' src={cbxLogo} alt="" />
                    </div>
                </div>
                <div className='DashNavRight salesDashRht'>
                    {/* <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li onClick={() => handleDashBoardItemClick()}><a class="dropdown-item"><MdDashboard />{' '}DashBoard</a></li>
                            <li onClick={() => handleSalesItemClick()}><a class="dropdown-item"><FcSalesPerformance />{' '}Sales Analysis</a></li>
                        </ul>
                    </div> */}
                    {/* <div className='CreateDashIcon' style={{ display: "flex", alignItems: "center", color: "#699BF7", fontSize: "22px" }} onClick={() => goDashCreation()}>
                        <MdDashboardCustomize />
                    </div> */}
                    <div className='NotificationBell'>
                        <img className='DashIconRightPng' onClick={onshowApproval} src={bell} alt="" />
                    </div>
                    <div className='MenuIcon' onClick={showMobDrop}>
                        <img className='DashIconRightPng' src={menuIcon} alt="" />
                    </div>
                    {/* <img className='DashIconPng' src={profile} alt="" /> */}
                </div>

                {
                    showLeftSidePanelPop ?
                        <div className='LeftSidePoPIcon'>
                            <div className='MenuIcon' onClick={showLeftPopClick}>
                                <img className='DashIconRightPng' src={menuIcon} alt="" />
                            </div>
                        </div> : ""
                }

            </div>

            {
                showLeftPop ? <div className='sidePanelPoPReal'>
                    <SidePanel showLeftSidePanelPop={showLeftSidePanelPop} item={item} />
                    <div className='leftSidePoPClose' onClick={() => setShowLeftPop(!showLeftPop)}><IoMdClose /></div>
                </div> : ""
            }


            {
                showUMdrop ?

                    <div className='RightBarDrop'>
                        <div className='UserBox'>
                            <div className='MobUserImg'>
                                {
                                    profileImage ?
                                        <img className='DashIconPngProfile' src={profileImage} alt="" /> : <img className='DashIconPng' src={profile} alt="" />
                                }
                            </div>
                            <div className='ubNameCmpBox'>
                                <div className='MobUserName'>
                                    {
                                        user ? user : ""
                                    }
                                </div>
                                <div className='MobUserName cmpNameRight' style={{ fontSize: "12px" }}>
                                    {
                                        cmpName ? cmpName : ""
                                    }
                                </div>
                            </div>

                        </div>

                        <hr />

                        {
                            salesAnalysisPage &&
                            <>
                                <div className='AddCompanyCont' onClick={() => navigate('/admin/dashboard')}>
                                    <span>
                                        <span>Home</span>
                                        {/* <span className='rightBarItemIcon'><SlPlus /></span> */}
                                    </span>
                                </div>
                                <div className='AddCompanyCont' onClick={() => navigate('/admin/SalesAnalysis')}>
                                    <span>
                                        <span>Sales Analysis</span>
                                        {/* <span className='rightBarItemIcon'><SlPlus /></span> */}
                                    </span>
                                </div>
                            </>
                        }

                        {
                            salesPage &&

                            <div className='AddCompanyCont' onClick={() => navigate('/admin/dashboard')}>
                                <span>
                                    <span>Home</span>
                                    {/* <span className='rightBarItemIcon'><SlPlus /></span> */}
                                </span>
                            </div>

                        }

                        {
                            newDash &&

                            <>
                                <div className='AddCompanyCont' onClick={() => navigate('/admin/SalesAnalysis')}>
                                    <span>
                                        <span>Sales Analysis</span>
                                        {/* <span className='rightBarItemIcon'><SlPlus /></span> */}
                                    </span>
                                </div>
                            </>

                            // :



                            // <>
                            //     <div className='CompanyIconDemo'>
                            //         <FaUsersRectangle />
                            //     </div>

                            //     <div className='AddCompanyCont' onClick={() => navigate('/newMachineRegistration')}>
                            //         <span>
                            //             <span>Add Company</span> <span className='rightBarItemIcon'><SlPlus /></span>
                            //         </span>
                            //     </div>

                            //     <div className='SwitchCompanyCont' data-bs-toggle="modal" data-bs-target="#cmpnySelection">
                            //         <span>
                            //             <span>Switch Company</span> <span className='rightBarItemIcon'><MdOutlineSwapHorizontalCircle /></span>
                            //         </span>


                            //     </div>
                            //     <div className='DashCreationBox' onClick={() => goDashCreation()}>
                            //         <span>
                            //             <span> Dashboard Creation</span><span className='rightBarItemIcon'> <MdDashboardCustomize /></span>
                            //         </span>
                            //     </div>
                            // </>

                        }


                        <div className='LogOutBox'>
                            <span data-bs-toggle="modal" data-bs-target="#logOutModal">Log Out</span>
                            <div data-bs-toggle="modal" data-bs-target="#logOutModal"><AiOutlinePoweroff /></div>
                        </div>
                    </div >


                    : ""
            }

            {/* logoutmodal */}
            <div class="modal fade" id="logOutModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        {/* <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
                        <div class="modal-body" style={{ fontSize: "22px", fontWeight: "bold" }}>
                            Do you want to Log Out ?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={signOut}>Yes</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">No</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* switchcmpnyModal */}
            <div className="modal fade" tabIndex="-1" role="dialog" id="cmpnySelection">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Select a company</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {
                                userDataArray && userDataArray.length > 0 ?
                                    userDataArray.map((item, index) => (
                                        <div class="card cmpnyListCard hoverable" style={{ display: "flex", justifyContent: "space-between", cursor: 'pointer', backgroundColor: cmpcode === item.cmpcode ? 'lightblue' : 'white' }} data-bs-dismiss="modal" onClick={() => handleCmpnyListClick(item)}>
                                            <div class="card-body">
                                                <div>
                                                    <h5 class="card-title">{item.cmpcode}</h5>
                                                    <p>{item.publick}</p>
                                                </div>
                                                {
                                                    cmpcode === item.cmpcode &&
                                                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                                        <span style={{ padding: "4px 12px", backgroundColor: "orange", color: "white", borderRadius: "2px" }}>selected</span>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    )) : ""
                            }
                        </div>
                        {/* <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div> */}
                    </div>
                </div>
            </div>

            <div>
                {
                    showApproval && (
                        <div className='AppDashCont'><Approvals onshowApproval={onshowApproval} /></div>
                    )
                }
            </div>
        </>
    )
}

export default NavBarMob