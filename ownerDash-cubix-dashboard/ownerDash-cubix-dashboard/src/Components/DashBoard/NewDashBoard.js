import React, { useEffect, useState } from 'react'
import './DashBoard.css'
import Approvals from '../reusables/Approvals';
import { useNavigate } from 'react-router-dom';
import UpdatedDashBoard from '../DashCreation/UpdatedDashBoard.js';
import DashAllView from '../DashCreation/DashAllView.js';
import SidePanel from '../SidePanel/SidePanel.js';
import NavBarMob from '../NavBarMob/NavBarMob.js';


const NewDashBoard = () => {

    const [selectedSideItem, setSelectedSideItem] = useState('dashboard');
    const [showApproval, setShowApproval] = useState(false)
    const [showUdrop, setShowUdrop] = useState(false)
    const [showUMdrop, setShowUMdrop] = useState(false)

    const [preSetItemView, setPreSetItemView] = useState(false)

    const [selectedItem, setSelectedItem] = useState('dashboard');

    const [newDash, setNewDash] = useState(true)



    const userDataArray = JSON.parse(localStorage.getItem("userDataArray")) || [];
    useEffect(() => {
        if (userDataArray.length === 0) {
            navigate('/login');
        }
    }, [])

    const selectedCompanyString = localStorage.getItem("selectedCompany");

    const selectedCompany = JSON.parse(selectedCompanyString);

    const cmpcode = selectedCompany && selectedCompany.cmpcode;
    const publick = selectedCompany && selectedCompany.publick;
    const privatek = selectedCompany && selectedCompany.privatek;

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

    // Find the index of the selected company in userDataArray (assuming cmpcode is unique)
    const selectedCompanyfromMap = userDataArray.find(company => company.cmpcode === cmpcode);

    // console.log(selectedCompanyfromMap)


    useEffect(() => {
        if (selectedCompanyfromMap && !selectedCompanyfromMap.User) {
            // User is logged in, redirect to dashboard
            navigate('/login');
        }
    }, []);

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

    const handleSideBarItemClick = (item) => {
        setSelectedItem(item)
        navigate(`/admin/${item}`)
    }



    return (
        <>

            <NavBarMob newDash={newDash} />

            <div className='DashWrapper'>

                {
                    showApproval && (
                        <div className='AppDashCont'><Approvals onshowApproval={onshowApproval} /></div>
                    )
                }



                {/* <SidePanel item='dashboard' /> */}


                {
                    preSetItemView ? <UpdatedDashBoard /> : <DashAllView />
                }

            </div>
        </>
    )
}

export default NewDashBoard