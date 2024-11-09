import React, { useEffect, useState } from 'react'
// import './DashBoard.css'
import Approvals from '../reusables/Approvals';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import UpdatedDashBoard from '../DashCreation/UpdatedDashBoard.js';
import DashAllView from '../DashCreation/DashAllView.js';
import SidePanel from '../SidePanel/SidePanel.js';
import NavBarMob from '../NavBarMob/NavBarMob.js';
import SalesInvoice from '../SalesNewComponents/SalesInvoice/SalesInvoice.js';
import SalesQuotation from '../SalesNewComponents/Quotation/SalesQuotation.js';
import ItemList from '../SalesNewComponents/ItemList/ItemList.js';
import './SalesAllView.css'
import Purchase from '../SalesNewComponents/Purchase/Purchase.js';
import ProductMaster from '../SalesNewComponents/ProductMaster/ProductMaster.js';
import StockReport from '../SalesNewComponents/StockReport/StockReport.js';
import StockLedger from '../SalesNewComponents/StockLedger/StockLedger.js';


const SalesAllView = () => {

    const [selectedSideItem, setSelectedSideItem] = useState('dashboard');
    const [showApproval, setShowApproval] = useState(false)
    const [showUdrop, setShowUdrop] = useState(false)
    const [showUMdrop, setShowUMdrop] = useState(false)

    const [selectedRoute, setSelectedRoute] = useState('')

    const [preSetItemView, setPreSetItemView] = useState(false)

    const [selectedItem, setSelectedItem] = useState('');

    const location = useLocation()

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

    useEffect(() => {
        if (location.pathname === '/admin/SalesInvoice') {
            setSelectedRoute('SalesInvoice')
            setSelectedItem('SalesInvoice')
        } else if (location.pathname === '/admin/SalesQuotation') {
            setSelectedRoute('SalesQuotation')
            setSelectedItem('SalesQuotation')
        } else if (location.pathname === '/admin/ItemList') {
            setSelectedRoute('ItemList')
            setSelectedItem('ItemList')
        } else if (location.pathname === '/admin/PURCHASE') {
            setSelectedRoute('PURCHASE')
            setSelectedItem('PURCHASE')
        } else if (location.pathname === '/admin/MASTERS') {
            setSelectedRoute('MASTERS')
            setSelectedItem('MASTERS')
        } else if (location.pathname === '/admin/StockReport') {
            setSelectedRoute('StockReport')
            setSelectedItem('StockReport')
        } else if (location.pathname === '/admin/StockLedger') {
            setSelectedRoute('StockLedger')
            setSelectedItem('StockLedger')
        }
    }, [location.pathname])

    // console.log(selectedItem, 'from allviewsales')
    return (
        <>

            <NavBarMob />

            <div className='DashWrapper'>

                {
                    showApproval && (
                        <div className='AppDashCont'><Approvals onshowApproval={onshowApproval} /></div>
                    )
                }

                <SidePanel item={selectedItem} />

                <div className='SAVDashWrapper'>
                    {/* <div className='SAVDashCont'> */}

                    <Outlet />
                    {/* {
                        selectedRoute === "SalesInvoice" && <SalesInvoice />
                    }
                    {
                        selectedRoute === "SalesQuotation" && <SalesQuotation />
                    }
                    {
                        selectedRoute === "ItemList" && <ItemList />
                    } */}
                    {
                        selectedRoute === "PURCHASE" && <Purchase />
                    }
                    {
                        selectedRoute === "MASTERS" && <ProductMaster />
                    }
                    {
                        selectedRoute === "StockReport" && <StockReport />
                    }
                    {
                        selectedRoute === "StockLedger" && <StockLedger />
                    }
                    {/* </div> */}
                </div>


            </div>
        </>
    )
}

export default SalesAllView