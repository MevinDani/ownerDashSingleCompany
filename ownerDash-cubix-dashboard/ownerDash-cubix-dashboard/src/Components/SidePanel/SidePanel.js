import React, { useEffect, useState } from 'react'
import './SidePanel.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { FcSalesPerformance } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import { LuPackage } from "react-icons/lu";
import axios from 'axios';
import { BiMenuAltLeft } from "react-icons/bi";
import { FaRegWindowClose } from "react-icons/fa";
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { CiCircleChevDown } from "react-icons/ci";

import sideBarDashBoardPng from '../../images/ic_diebar_dashboard.png'
import sideBarSalesPng from '../../images/ic_diebar_sales.png'
import sideBarAccountsPng from '../../images/ic_diebar_accounts.png'
import sideBarPackingPng from '../../images/ic_diebar_packing_list.png'
import sideBarCrmPng from '../../images/ic_diebar_crm.png'
import sideBarTaskPng from '../../images/ic_diebar_task.png'
import sideBarHrPng from '../../images/ic_diebar_hr.png'
import sideBarCollapsePng from '../../images/ic_collapse_sidebar.png'
import sideBarCollapseGreaterPng from '../../images/ic_collapse_sidebar_greater.png'

import salesInvoice from '../../images/ic_salesInvoice.png'
import salesQuot from '../../images/ic_salesQuot.png'
import itemList from '../../images/ic_itemList.png'

import purchaseOrderImg from '../../images/icPurchaseOrder.png'
import purchaseEnquiryImg from '../../images/icPurchaseEnquiry.png'
import icTransferIn from '../../images/icTransferIn.png'
import icTransferOut from '../../images/icTransferOut.png'

import purchaseImg from '../../images/icPurchase.png'
import icInventory from '../../images/icInventory.png'


const SidePanel = ({ item, showLeftSidePanelPop }) => {

    const [selectedItem, setSelectedItem] = useState(item);

    const [cmpcode, setCmpCode] = useState('')
    const [publick, setpublick] = useState('')
    const [privatek, setprivatek] = useState('')

    const [data, setData] = useState(null);
    const [exData, setExData] = useState(null)

    const [sideCard, setSideCard] = useState({ top: 0, left: 0 });
    const [sideMenuCard, setSideMenuCard] = useState({ top: 0, left: 0 });

    const [sideGrpMenu, setSideGrpMenu] = useState([]);

    const [listMenu, setListMenu] = useState([])

    const [anchorEl, setAnchorEl] = useState(null); // State for anchor element
    const [popoverContent, setPopoverContent] = useState(null); // State for popover content

    const [showNestList, setShowNestList] = useState(false);

    const [clickedNestList, setClickedNestList] = useState('')

    const [openSideToggle, setOpenSideToggle] = useState(false)

    const [openGrpToggle, setOpengrpToggle] = useState(false)

    const [openNewSideToggleSales, setOpenNewSideToggleSales] = useState(false)

    const [showSalesDrop, setShowSalesDrop] = useState(false)

    const [openNewSideToggleAccounts, setOpenNewSideToggleAccounts] = useState(false)

    const [showAccountsDrop, setShowAccountsDrop] = useState(false)

    const [showSideBarName, setShowSidebarName] = useState(true)

    const [showHrModuleSideToggle, setShowHrModuleSideToggle] = useState(false)

    const [showEmpMangementDrop, setShowEmpManagementDrop] = useState(false)

    const [showLeaveManagementDrop, setShowLeaveManagementDrop] = useState(false)

    const [showPayrollManagementDrop, setShowPayrollManagementDrop] = useState(false)

    const [showHolidayManagementDrop, setShowHolidayManagementDrop] = useState(false)

    const [showAttendanceManagementDrop, setShowAttendanceManagementDrop] = useState(false)

    const [openGrpMenuToggle, setOpenGrpMenuToggle] = useState(false)

    const [groupMenu, setGroupMenu] = useState(null)

    const [newlistMenu, setNewListMenu] = useState(null)

    const [selectedGrpMenu, setSelectedGrpMenu] = useState(null)

    const [openListMenu, setOpenListMenu] = useState(false)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget); // Set anchor element when button is clicked
    };

    const handleClose = () => {
        setAnchorEl(null); // Close popover
    };

    const handleMenuListClick = (event, item) => {
        setOpengrpToggle(true)
        setShowNestList(false);
        // console.log(event)
        // setAnchorEl(event.currentTarget);
        setSideGrpMenu(item.GrpMenu);

        const rect = event.currentTarget.getBoundingClientRect();
        const x = rect.left + window.scrollX + rect.width + 5; // Adjust as needed
        const y = rect.top + window.scrollY - 100; // Adjust as needed
        setSideCard({ x, y });
    };

    // console.log('sideGrpMenu', sideGrpMenu)

    const handleGrpMenuListClick = (event, item) => {

        setClickedNestList(item.mnuL2Name)

        // console.log(item)
        setListMenu(item.ListMenu);

        if (clickedNestList === item.mnuL2Name) {
            setShowNestList(!showNestList)
        } else {
            setShowNestList(true);
        }

        const rect = event.currentTarget.getBoundingClientRect();
        const x = rect.left + window.scrollX + rect.width + 22; // Adjust as needed
        const y = rect.top + window.scrollY - 50; // Adjust as needed
        setSideMenuCard({ x, y });

        // Check if the device width is less than 450px
        if (window.innerWidth < 450) {
            setShowNestList(!showNestList);
        }
    };



    useEffect(() => {
        // Retrieve the selected company details from local storage
        const selectedCompanyString = localStorage.getItem("selectedCompany");

        // Check if a selected company is stored in local storage
        if (selectedCompanyString) {
            const selectedCompany = JSON.parse(selectedCompanyString);

            // Access the company details and set them as states
            setCmpCode(selectedCompany.cmpcode);
            setpublick(selectedCompany.publick);
            setprivatek(selectedCompany.privatek);
        } else {
            // Handle the case where no selected company is found
            console.error("No selected company found in local storage");
        }
    }, []);

    const setListMenuEmpty = () => {
        setListMenu([])
    }

    const setSideGrpMenuEmpty = () => {
        setSideGrpMenu([])
        setListMenu([])
    }

    const location = useLocation()

    const navigate = useNavigate();

    const handleSideBarItemClickHardCode = (item) => {
        setSelectedItem(item)
        setShowHrModuleSideToggle(false)
        setOpenGrpMenuToggle(false)
        if (item !== 'menuList') navigate(`/admin/${item}`)
        if (item === 'menuList') {
            setOpenSideToggle(!openSideToggle)
            setOpengrpToggle(false)
            setShowNestList(false);
        }
        if (item === 'hrModuleHome') {
            setShowHrModuleSideToggle(!showHrModuleSideToggle)
            navigate('/hrModuleHome/home')
        }
    }

    const handleSideabarSalesModuleClick = (item) => {
        setOpenGrpMenuToggle(false)
        setShowHrModuleSideToggle(false)
        navigate(`/salesModule/${item}`);
    }

    const handleSideBarItemClick = (item) => {
        console.log(item, 'item')
        // setSelectedItem(item);
        setShowHrModuleSideToggle(false)


        let selectedMenuItem = exData ? exData.MenuList.find((exDataItem) => {
            return exDataItem.mnuL1Name === item;
        }) : null;

        if (item === 'ACCOUNTS') {
            setSelectedItem(item);
            accountsPopToggle()
            setOpenGrpMenuToggle(!openGrpMenuToggle)
        }

        if (selectedMenuItem && !selectedMenuItem.GrpMenu && item !== 'ACCOUNTS') {
            setSelectedItem(item);
            setOpenGrpMenuToggle(false)
            setOpenNewSideToggleAccounts(false)
            console.log(selectedMenuItem, 'selectedMenuItem')
            navigate(`/admin/${selectedMenuItem.mnuL1Name}`);
        } else {
            console.log(selectedMenuItem, 'selectedMenuItemElse')
            setOpenGrpMenuToggle(!openGrpMenuToggle)
            setGroupMenu(selectedMenuItem?.GrpMenu)
        }
    };

    const handleGroupMenuItemClick = (item) => {
        setSelectedGrpMenu(item)
        let selectedGrpItem = groupMenu ? groupMenu.find((grpMenuItem) => {
            return grpMenuItem.mnuL2Name === item
        }) : null;
        if (selectedGrpItem && selectedGrpItem.ListMenu) {
            console.log(selectedGrpItem, 'selectedGrpItem')
            setNewListMenu(selectedGrpItem.ListMenu)
            setOpenListMenu(!openListMenu)

        } else {
            console.log('noListMneu')
            setNewListMenu(null)
            // setOpenListMenu(false)
        }

    }


    // if (exData) console.log(exData, exData.MenuList)

    // console.log(sideGrpMenu)

    // console.log(listMenu)

    const getMenuList = () => {

        // const url = `https://cubixweberp.com:199/api/Menu/Menu?cmpcode=${cmpcode}&guid=${privatek}&role=ADMIN&deptno=NA&user=ADMIN`
        // const url = `https://cubixweberp.com:199/api/Menu/Menu?cmpcode=AQUA&guid=160A8510-A5CD-4915-B242-E05872FC6387&role=ADMIN&deptno=NA&user=ADMIN`
        const url = `https://cubixweberp.com:199/api/Menu/Menu?cmpcode=AQUA&guid=160A8510-A5CD-4915-B242-E05872FC6387&role=w_menu&deptno=NA&user=ADMIN`
        axios.get(url)
            .then(response => {
                // Handle the response data here
                // console.log(response.data);
                if (response.data[0].Menu === null) {
                    return
                } else {
                    const newdata = response.data;
                    setData(response.data)
                    const startPattern = '[{"Menu":"';
                    const endPattern = '"}]';

                    // Check if data is defined
                    if (newdata) {
                        // Find the start position
                        const startIndex = newdata.indexOf(startPattern);

                        if (startIndex !== -1) {
                            // Find the end position
                            const endIndex = newdata.lastIndexOf(endPattern);

                            if (endIndex !== -1) {
                                // Extract the desired substring
                                const extractedData = newdata.substring(startIndex + startPattern.length, endIndex);

                                // Now, extractedData contains the cleaned JSON string
                                // console.log(extractedData);
                                const parseData = JSON.parse(extractedData)
                                setExData(parseData)

                            } else {
                                console.error(`End pattern "${endPattern}" not found`);
                            }
                        } else {
                            console.error(`Start pattern "${startPattern}" not found`);
                        }
                    } else {
                        console.error('newdata is undefined');
                    }

                }


                // If you want to convert it to a JavaScript object
                // const parsedData = JSON.parse(extractedData);
                // console.log(parsedData);
            })
            .catch(error => {
                // Handle errors
                console.error('Error fetching data:', error);
            });

    }

    useEffect(() => {
        getMenuList()
    }, [])

    //  (() => {
    //     const grpMenu = document.querySelector('.grpMenu');
    //     const handleTransitionEnd = () => {
    //         if (!grpMenu.classList.contains('show')) {
    //             // Collapse animation has ended, set states to empty array
    //             setSideGrpMenu([])
    //             setListMenu([])
    //         }
    //     };

    //     grpMenu.addEventListener('transitionend', handleTransitionEnd);

    //     return () => {
    //         grpMenu.removeEventListener('transitionend', handleTransitionEnd);
    //     };
    // }, []);

    // useEffect(() => {
    //     if (listMenu.length === 0 && sideGrpMenu.length === 0) {
    //         setShowNestList(false)
    //     }
    // }, [listMenu, sideGrpMenu])

    // console.log('exData', exData)

    // console.log(showNestList)
    // console.log(sideGrpMenu)

    // console.log(selectedItem)

    const salesPopToggle = () => {
        setOpenNewSideToggleSales(!openNewSideToggleSales)
        setOpenNewSideToggleAccounts(false)
        setShowHrModuleSideToggle(false)
    }

    const accountsPopToggle = () => {
        setOpenNewSideToggleSales(false)
        setOpenNewSideToggleAccounts(!openNewSideToggleAccounts)
        setShowHrModuleSideToggle(false)
    }

    const hrModulePoP = () => {
        setShowHrModuleSideToggle(!showHrModuleSideToggle)
        setOpenNewSideToggleAccounts(false)
        setOpenNewSideToggleSales(false)
    }

    const handleSalesDrop = () => {
        setShowSalesDrop(!showSalesDrop)
    }

    const handleAccountsDrop = () => {
        setShowAccountsDrop(!showAccountsDrop)
    }

    const handleEmpMangementDrop = () => {
        setShowEmpManagementDrop(!showEmpMangementDrop)
    }

    const handleLeaveManagementDrop = () => {
        setShowLeaveManagementDrop(!showLeaveManagementDrop)
    }

    const handlePayrollManagementDrop = () => {
        setShowPayrollManagementDrop(!showPayrollManagementDrop)
    }

    const handleHolidayManagementDrop = () => {
        setShowHolidayManagementDrop(!showHolidayManagementDrop)
    }

    const handleAttendanceManagementDrop = () => {
        setShowAttendanceManagementDrop(!showAttendanceManagementDrop)
    }

    useEffect(() => {
        if (location.pathname === '/salesModule/SalesInvoice') {
            setSelectedItem('SalesInvoice')
        }
        else if (location.pathname === '/salesModule/SalesQuotation') {
            setSelectedItem('SalesQuotation')
        }
        else if (location.pathname === '/salesModule/ItemList') {
            setSelectedItem('ItemList')
        } else if (location.pathname === '/salesModule/PurchaseOrder') {
            setSelectedItem('PurchaseOrder')
        } else if (location.pathname === '/salesModule/PurchaseEnquiry') {
            setSelectedItem('PurchaseEnquiry')
        } else if (location.pathname === '/salesModule/TransferOut') {
            setSelectedItem('TransferOut')
        } else if (location.pathname === '/salesModule/TransferIn') {
            setSelectedItem('TransferIn')
        } else if (location.pathname === '/salesModule/DeliveryOrder') {
            setSelectedItem('DeliveryOrder')
        } else if (location.pathname === '/salesModule/SalesOrder') {
            setSelectedItem('SalesOrder')
        } else if (location.pathname === '/salesModule/ImportPurchase') {
            setSelectedItem('ImportPurchase')
        } else if (location.pathname === '/salesModule/PaymentVoucher') {
            setSelectedItem('PaymentVoucher')
        } else if (location.pathname === '/salesModule/ReceiptVoucher') {
            setSelectedItem('ReceiptVoucher')
        } else if (location.pathname === '/salesModule/PDCIssuedTransfer') {
            setSelectedItem('PDCIssuedTransfer')
        } else if (location.pathname === '/salesModule/PDCReceivedTransfer') {
            setSelectedItem('PDCReceivedTransfer')
        } else if (location.pathname === '/salesModule/StatementOfAccounts') {
            setSelectedItem('StatementOfAccounts')
        } else if (location.pathname === '/salesModule/InvoiceProfitAnalysis') {
            setSelectedItem('InvoiceProfitAnalysis')
        } else if (location.pathname === '/salesModule/LedgerList') {
            setSelectedItem('LedgerList')
        } else if (location.pathname === '/salesModule/SalesReturn') {
            setSelectedItem('SalesReturn')
        } else if (location.pathname === '/salesModule/PurchaseReturn') {
            setSelectedItem('PurchaseReturn')
        } else if (location.pathname === '/salesModule/GoodsInTransit') {
            setSelectedItem('GoodsInTransit')
        } else if (location.pathname === '/salesModule/SalesReturnList') {
            setSelectedItem('SalesReturnList')
        } else if (location.pathname === '/salesModule/GitList') {
            setSelectedItem('GitList')
        } else if (location.pathname === '/salesModule/BusinessPartners') {
            setSelectedItem('BusinessPartners')
        } else if (location.pathname === '/salesModule/PurchaseOrderDetails') {
            setSelectedItem('PurchaseOrderDetails')
        } else if (location.pathname === '/salesModule/BusinessPartAdd') {
            setSelectedItem('BusinessPartAdd')
        } else if (location.pathname === '/admin/dashboard' || location.pathname === '/admin/DASHBOARD') {
            setSelectedItem('DASHBOARD')
        } else if (location.pathname === '/admin/PURCHASE') {
            setSelectedItem('PURCHASE')
        } else if (location.pathname === '/admin/MASTERS') {
            setSelectedItem('MASTERS')
        } else if (location.pathname === '/admin/ACCOUNTS') {
            setSelectedItem('ACCOUNTS')
        } else if (location.pathname === '/admin/issuedPdcTable' || location.pathname === '/admin/recievedPdcTable' || location.pathname === '/admin/StatementReport2' || location.pathname === '/admin/outstandingAccReport') {
            setSelectedItem('ACCOUNTS')
        } else if (location.pathname === '/admin/StockReport' || location.pathname === '/admin/StockLedger') {
            setSelectedItem('INVENTORY REPORTS')
        } else if (location.pathname === '/admin/SalesAnalysis' || location.pathname === '/admin/Latest500Invoice' || location.pathname === '/admin/CashSales' || location.pathname === '/admin/groupSales' || location.pathname === '/admin/CategorySales' || location.pathname === '/admin/BranchWiseSales' || location.pathname === '/admin/ItemWiseSales' || location.pathname === '/admin/CustomerWiseSales' || location.pathname === '/admin/SalesManSales' || location.pathname === '/admin/CreditSales') {
            setSelectedItem('SALES')
        }
    }, [location.pathname])

    // console.log(exData)
    // console.log(selectedGrpMenu, 'selectedGrpMenu')
    // console.log(openListMenu, 'openListMenu')

    console.log(groupMenu, 'groupMenu')

    return (
        <div className='DashSideBar' style={{ height: "100vh", width: showLeftSidePanelPop ? "100%" : "auto" }}>
            <div className='DashSideLeftItems'>

                {/* menuListItemArrayLoop */}
                {
                    exData && exData.MenuList && exData.MenuList.length > 0 ? exData.MenuList.map((item, id) => (
                        <div
                            onClick={() => handleSideBarItemClick(item.mnuL1Name)}
                            className={selectedItem === item.mnuL1Name ? 'selectedItem' : 'DashSideItem'}
                            key={id}
                        >
                            {
                                item.mnuL1Name === 'DASHBOARD' &&
                                <img src={sideBarDashBoardPng} />
                            }
                            {
                                item.mnuL1Name === 'SALES' &&
                                <img src={sideBarSalesPng} />
                            }
                            {
                                item.mnuL1Name === 'ACCOUNTS' &&
                                <img src={sideBarAccountsPng} />
                            }
                            {
                                item.mnuL1Name === 'PURCHASE' &&
                                <img src={purchaseImg} />
                            }
                            {
                                item.mnuL1Name === 'INVENTORY REPORTS' &&
                                <img src={icInventory} />
                            }
                            {
                                item.mnuL1Name === 'MASTERS' &&
                                <img src={sideBarDashBoardPng} />
                            }
                            {/* {
                                !(item.mnuL1Name === 'DASHBOARD' || item.mnuL1Name === 'SALES' || item.mnuL1Name === 'ACCOUNTS') &&
                                <img src={sideBarDashBoardPng} /> // Replace defaultImage with the path to your default image
                            } */}

                            {' '}{showSideBarName && <span className='ms-3'>{item.mnuL1Name}</span>}
                        </div>
                    )) : ""
                }
                {/* menuListItemArrayLoop */}


                {/* <div
                    onClick={() => handleSideBarItemClick('dashboard')}
                    className={selectedItem === 'dashboard' ? 'selectedItem' : 'DashSideItem'}
                >
                    <img src={sideBarDashBoardPng} />
                    {' '}{showSideBarName && <span className='ms-3'>DashBoard</span>}
                </div>
                <div
                    onClick={() => salesPopToggle()}
                    className={selectedItem === 'sales' ? 'selectedItem' : 'DashSideItem'}
                >
                    <img src={sideBarSalesPng} />
                    {' '}{showSideBarName && <span className='ms-3'>Sales Analysis</span>}
                </div>
                <div
                    onClick={() => accountsPopToggle()}
                    className={selectedItem === 'accReport' ? 'selectedItem' : 'DashSideItem'}
                >
                    <img src={sideBarAccountsPng} />
                    {' '}{showSideBarName && <span className='ms-3'>Accounts Report</span>}
                </div> */}
                <div
                    onClick={() => handleSideBarItemClickHardCode('my_picking_list')}
                    className={selectedItem === 'my_picking_list' ? 'selectedItem' : 'DashSideItem'}
                >
                    <img src={sideBarPackingPng} />
                    {' '}{showSideBarName && <span className='ms-3'>Packing List</span>}
                </div>
                <div onClick={() => handleSideBarItemClickHardCode('crmHome')}
                    className={selectedItem === 'crmHome' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={sideBarCrmPng} />{' '}{showSideBarName && <span className='ms-3'>crmApp</span>}

                </div>
                <div onClick={() => handleSideBarItemClickHardCode('taskHome')}
                    className={selectedItem === 'taskHome' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={sideBarTaskPng} />{' '}{showSideBarName && <span className='ms-3'>Task Manager</span>}

                </div>
                <div onClick={() => hrModulePoP()}
                    className={selectedItem === 'hrModuleHome' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={sideBarHrPng} />{' '}{showSideBarName && <span className='ms-3'>Hr Module</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('SalesInvoice')}
                    className={selectedItem === 'SalesInvoice' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={salesInvoice} />{' '}{showSideBarName && <span className='ms-3'>SalesInvoice</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('SalesQuotation')}
                    className={selectedItem === 'SalesQuotation' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={salesQuot} />{' '}{showSideBarName && <span className='ms-3'>SalesQuotation</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('ItemList')}
                    className={selectedItem === 'ItemList' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={itemList} />{' '}{showSideBarName && <span className='ms-3'>ItemList</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('PurchaseOrder')}
                    className={selectedItem === 'PurchaseOrder' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={purchaseOrderImg} />{' '}{showSideBarName && <span className='ms-3'>PurchaseOrder</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('PurchaseEnquiry')}
                    className={selectedItem === 'PurchaseEnquiry' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={purchaseEnquiryImg} />{' '}{showSideBarName && <span className='ms-3'>PurchaseEnquiry</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('TransferOut')}
                    className={selectedItem === 'TransferOut' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferOut} />{' '}{showSideBarName && <span className='ms-3'>TransferOut</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('TransferIn')}
                    className={selectedItem === 'TransferIn' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferIn} />{' '}{showSideBarName && <span className='ms-3'>TransferIn</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('DeliveryOrder')}
                    className={selectedItem === 'DeliveryOrder' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferIn} />{' '}{showSideBarName && <span className='ms-3'>DeliveryOrder</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('SalesOrder')}
                    className={selectedItem === 'SalesOrder' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferIn} />{' '}{showSideBarName && <span className='ms-3'>SalesOrder</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('ImportPurchase')}
                    className={selectedItem === 'ImportPurchase' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferIn} />{' '}{showSideBarName && <span className='ms-3'>ImportPurchase</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('PaymentVoucher')}
                    className={selectedItem === 'PaymentVoucher' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferIn} />{' '}{showSideBarName && <span className='ms-3'>PaymentVoucher</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('ReceiptVoucher')}
                    className={selectedItem === 'ReceiptVoucher' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferIn} />{' '}{showSideBarName && <span className='ms-3'>ReceiptVoucher</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('PDCIssuedTransfer')}
                    className={selectedItem === 'PDCIssuedTransfer' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferIn} />{' '}{showSideBarName && <span className='ms-3'>PDCIssuedTransfer</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('PDCReceivedTransfer')}
                    className={selectedItem === 'PDCReceivedTransfer' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferIn} />{' '}{showSideBarName && <span className='ms-3'>PDCReceivedTransfer</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('StatementOfAccounts')}
                    className={selectedItem === 'StatementOfAccounts' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferIn} />{' '}{showSideBarName && <span className='ms-3'>StatementOfAccounts</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('InvoiceProfitAnalysis')}
                    className={selectedItem === 'InvoiceProfitAnalysis' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferIn} />{' '}{showSideBarName && <span className='ms-3'>InvoiceProfitAnalysis</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('LedgerList')}
                    className={selectedItem === 'LedgerList' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferIn} />{' '}{showSideBarName && <span className='ms-3'>LedgerList</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('SalesReturn')}
                    className={selectedItem === 'SalesReturn' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferIn} />{' '}{showSideBarName && <span className='ms-3'>SalesReturn</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('PurchaseReturn')}
                    className={selectedItem === 'PurchaseReturn' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferIn} />{' '}{showSideBarName && <span className='ms-3'>PurchaseReturn</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('GoodsInTransit')}
                    className={selectedItem === 'GoodsInTransit' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferIn} />{' '}{showSideBarName && <span className='ms-3'>GoodsInTransit</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('SalesReturnList')}
                    className={selectedItem === 'SalesReturnList' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferIn} />{' '}{showSideBarName && <span className='ms-3'>SalesReturnList</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('GitList')}
                    className={selectedItem === 'GitList' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferIn} />{' '}{showSideBarName && <span className='ms-3'>GitList</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('BusinessPartners')}
                    className={selectedItem === 'BusinessPartners' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferIn} />{' '}{showSideBarName && <span className='ms-3'>BusinessPartners</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('PurchaseOrderDetails')}
                    className={selectedItem === 'PurchaseOrderDetails' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferIn} />{' '}{showSideBarName && <span className='ms-3'>PurchaseOrderDetails</span>}

                </div>
                <div onClick={() => handleSideabarSalesModuleClick('BusinessPartAdd')}
                    className={selectedItem === 'BusinessPartAdd' ? 'selectedItem' : 'DashSideItem'}>
                    <img src={icTransferIn} />{' '}{showSideBarName && <span className='ms-3'>BusinessPartAdd</span>}

                </div>


                {/* <div onClick={() => salesPopToggle()}
                    className={selectedItem === 'hrModuleHome' ? 'selectedItem' : ''}>
                    <BiMenuAltLeft />{' '}<span>Sales</span>

                </div>
                <div onClick={() => accountsPopToggle()}
                    className={selectedItem === 'hrModuleHome' ? 'selectedItem' : ''}>
                    <BiMenuAltLeft />{' '}<span>Accounts</span>

                </div> */}

                {/* {`
                    openSideToggle ?
                        <div className='toggleSideGrpMenu'>
                            <ul class="list-group">
                                {exData && exData.MenuList.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <li className="list-group-item" onClick={(e) => handleMenuListClick(e, item)}>{item.mnuL1Name}</li>
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div> : ""
                }
                {
                    openSideToggle ?
                        <div className='toggleSideNestList'>
                            <ul class="list-group">
                                <li class="list-group-item">An item</li>
                                {
                                    openSideToggle ?
                                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                            <ul class="list-group nestList">
                                                <li class="list-group-item">An item</li>
                                                <li class="list-group-item">A fourth item</li>
                                                <li class="list-group-item">And a fifth one</li>
                                                <li class="list-group-item">An item</li>
                                                <li class="list-group-item">A fourth item</li>
                                                <li class="list-group-item">And a fifth one</li>
                                            </ul>
                                        </div> : ""
                                }
                                <li class="list-group-item">A second item</li>
                                <li class="list-group-item">A third item</li>
                                <li class="list-group-item">A fourth item</li>
                                <li class="list-group-item">And a fifth one</li>
                            </ul>
                        </div> : ""
                } */}

            </div>

            {/* grpMenuLoop/ListMenuLoop */}
            {
                openGrpMenuToggle && groupMenu !== null ?
                    <div className='toggleSideGrpMenu'>

                        {
                            groupMenu?.map((grpMenuItem, id) => (
                                <ul class="list-group">
                                    <li className="list-group-item" onClick={() => handleGroupMenuItemClick(grpMenuItem.mnuL2Name)}>
                                        {grpMenuItem.mnuL2Name} {grpMenuItem.ListMenu?.length > 0 && <CiCircleChevDown />}
                                    </li>
                                    {
                                        openListMenu && selectedGrpMenu === grpMenuItem.mnuL2Name &&
                                        (
                                            <ul className={`list-group nestList ${openListMenu ? 'listShow' : 'listNotShow'}`}>
                                                {
                                                    newlistMenu?.map((newListMenu, index) => (
                                                        <li key={index} className="list-group-item" onClick={() => navigate(`/admin/${newListMenu.mnuL3Name.split(' ').join('')}`)}>
                                                            {newListMenu.mnuL3Name}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        )
                                    }
                                </ul>

                            ))
                        }
                    </div> : ""

            }
            {/* grpMenuLoop/ListMenuLoop */}

            {/* salesAnaalysisToggle start*/}

            {
                openNewSideToggleSales ?
                    <div className='toggleSideGrpMenu'>

                        <ul class="list-group">
                            <li className="list-group-item" onClick={(e) => handleSalesDrop()}>
                                Sales Report <CiCircleChevDown />
                            </li>
                            {
                                showSalesDrop ?
                                    <ul className={`list-group nestList ${showSalesDrop === true ? 'listShow' : 'listNotShow'}`}>
                                        <li className="list-group-item" onClick={() => navigate('/admin/sales')} >
                                            Sales Analysis
                                        </li>
                                    </ul> : ""
                            }

                        </ul>
                    </div> : ""
            }

            {/* salesAnaalysisToggle end*/}


            {/* Account Analysis Start */}

            {
                openNewSideToggleAccounts ?
                    <div className='toggleSideGrpMenu'>

                        <ul class="list-group">
                            <li className="list-group-item" onClick={(e) => handleAccountsDrop()}>
                                Accounts Report <CiCircleChevDown />
                            </li>
                            {
                                showAccountsDrop ?
                                    <ul className={`list-group nestList ${showAccountsDrop === true ? 'listShow' : 'listNotShow'}`}>
                                        <li className="list-group-item" onClick={() => navigate('/admin/issuedPdcTable')} >
                                            Total Issued PDC
                                        </li>
                                        <li className="list-group-item" onClick={() => navigate('/admin/recievedPdcTable')}>
                                            Total Received PDC
                                        </li>
                                        <li className="list-group-item" onClick={() => navigate('/admin/StatementReport2')}>
                                            Statement Accounts Report
                                        </li>
                                        <li className="list-group-item" onClick={() => navigate('/admin/outstandingAccReport')}>
                                            Outstanding Accounts Report
                                        </li>
                                    </ul> : ""
                            }

                        </ul>
                    </div> : ""
            }

            {/* Account Analysis End */}

            {/* HrModuleSubMenu */}

            {
                showHrModuleSideToggle ?
                    <div className='toggleSideGrpMenu'>

                        <ul class="list-group">
                            <li className="list-group-item" onClick={() => navigate('/hrModuleHome/home')}>
                                Hr DashBoard
                            </li>
                            <li className="list-group-item" onClick={() => handleEmpMangementDrop()}>
                                Emp Management <CiCircleChevDown />
                            </li>
                            {
                                showEmpMangementDrop ?
                                    <ul className={`list-group nestList ${showEmpMangementDrop === true ? 'listShow' : 'listNotShow'}`}>
                                        <li className="list-group-item" onClick={() => navigate('/hrModuleHome/emp_list')} >
                                            Emp List
                                        </li>
                                        <li className="list-group-item" onClick={() => navigate('/hrModuleHome/emp_reg')}>
                                            Emp Registration
                                        </li>
                                    </ul> : ""
                            }

                            <li className="list-group-item" onClick={() => navigate('/hrModuleHome/bigCalendar')}>
                                Events
                            </li>
                            <li className="list-group-item" onClick={() => navigate('/hrModuleHome/taskGant')}>
                                Task View
                            </li>
                            <li className="list-group-item" onClick={() => handleLeaveManagementDrop()}>
                                Leave Management <CiCircleChevDown />
                            </li>
                            {
                                showLeaveManagementDrop ?
                                    <ul className={`list-group nestList ${showLeaveManagementDrop === true ? 'listShow' : 'listNotShow'}`}>
                                        <li className="list-group-item" onClick={() => navigate('/hrModuleHome/leaveallotment')} >
                                            Leave Allotment
                                        </li>
                                        <li className="list-group-item" onClick={() => navigate('/hrModuleHome/leaveapplication')}>
                                            Leave Application
                                        </li>
                                        <li className="list-group-item" onClick={() => navigate('/hrModuleHome/leaveapproval')} >
                                            Leave Approval
                                        </li>
                                        <li className="list-group-item" onClick={() => navigate('/hrModuleHome/leaverejoin')}>
                                            Leave Rejoin
                                        </li>
                                        <li className="list-group-item" onClick={() => navigate('/hrModuleHome/leavecat')} >
                                            Leave Category
                                        </li>
                                    </ul> : ""
                            }

                            <li className="list-group-item" onClick={() => handlePayrollManagementDrop()}>
                                Payroll Management <CiCircleChevDown />
                            </li>
                            {
                                showPayrollManagementDrop ?
                                    <ul className={`list-group nestList ${showPayrollManagementDrop === true ? 'listShow' : 'listNotShow'}`}>
                                        <li className="list-group-item" onClick={() => navigate('/hrModuleHome/payroll')} >
                                            PayRoll
                                        </li>
                                    </ul> : ""
                            }

                            <li className="list-group-item" onClick={() => handleHolidayManagementDrop()}>
                                Holiday Management <CiCircleChevDown />
                            </li>
                            {
                                showHolidayManagementDrop ?
                                    <ul className={`list-group nestList ${showHolidayManagementDrop === true ? 'listShow' : 'listNotShow'}`}>
                                        <li className="list-group-item" onClick={() => navigate('/hrModuleHome/holiday')} >
                                            Holiday Settings
                                        </li>
                                    </ul> : ""
                            }

                            <li className="list-group-item" onClick={() => handleAttendanceManagementDrop()}>
                                Attendance <CiCircleChevDown />
                            </li>
                            {
                                showAttendanceManagementDrop ?
                                    <ul className={`list-group nestList ${showAttendanceManagementDrop === true ? 'listShow' : 'listNotShow'}`}>
                                        <li className="list-group-item" onClick={() => navigate('/hrModuleHome/atdcevaluation')} >
                                            Evaluation
                                        </li>
                                        <li className="list-group-item" onClick={() => navigate('/hrModuleHome/timesheet')} >
                                            TimeSheet
                                        </li>
                                    </ul> : ""
                            }

                        </ul>
                    </div> : ""
            }

            {/* HrModuleSubMenu */}


            {/* api integratted */}
            {
                openSideToggle ?
                    <div className='toggleSideGrpMenu'>
                        <ul class="list-group">
                            {exData && exData.MenuList.map((item, index) => (
                                <React.Fragment key={index}>
                                    <li className="list-group-item" onClick={(e) => handleMenuListClick(e, item)}>{item.mnuL1Name}</li>
                                </React.Fragment>
                            ))}
                        </ul>
                    </div> : ""
            }
            {
                openGrpToggle ?
                    <div className='toggleSideNestList'>
                        {
                            !sideGrpMenu && <ul class="list-group">
                                <li class="list-group-item" style={{ color: 'red' }}>No Data Available</li></ul>
                        }

                        <ul class="list-group">
                            {sideGrpMenu && sideGrpMenu.map((item, index) => (
                                <React.Fragment key={index}>
                                    <li className="list-group-item" onClick={(e) => handleGrpMenuListClick(e, item)}>
                                        {item.mnuL2Name}

                                        {
                                            showNestList && clickedNestList === item.mnuL2Name ?
                                                <ul className={`list-group nestList ${showNestList === true ? 'listShow' : 'listNotShow'}`}>
                                                    {
                                                        !listMenu && <li class="list-group-item" style={{ color: 'red' }}>No Data Available</li>
                                                    }
                                                    {listMenu && listMenu.map((item, index) => (
                                                        <React.Fragment key={index}>
                                                            <li className="list-group-item" style={{ fontSize: "12px" }}>{item.mnuL3Name}</li>
                                                        </React.Fragment>
                                                    ))}
                                                </ul> : ""
                                        }


                                    </li>
                                </React.Fragment>
                            ))}
                        </ul>
                    </div> : ""
            }

            {
                !showLeftSidePanelPop &&
                <div className='DashSideCollpase'>
                    {
                        showSideBarName ?
                            <div className='DashSideCollapseArrow' onClick={() => setShowSidebarName(!showSideBarName)}><img src={sideBarCollapsePng} alt="" /></div>
                            :
                            <div className='DashSideCollapseArrow' onClick={() => setShowSidebarName(!showSideBarName)}><img src={sideBarCollapseGreaterPng} alt="" /></div>
                    }
                </div>
            }



            {/* desktop view */}
            {/* <div className="collapse grpMenu" id="collapseExample">
                <ul className="list-group">

                    {exData && exData.MenuList.map((item, index) => (
                        <React.Fragment key={index}>
                            <li className="list-group-item" onClick={(e) => handleMenuListClick(e, item)}>{item.mnuL1Name}</li>
                        </React.Fragment>
                    ))}
                </ul>
            </div> */}
            {/* mobileview */}
            {/* <div className="collapse grpMenuMob" id="collapseExample">
                <ul className="list-group">
                    {exData && exData.MenuList.map((item, index) => (
                        <React.Fragment key={index}>
                            <li className="list-group-item" onClick={(e) => handleMenuListClick(e, item)}>{item.mnuL1Name}</li>
                        </React.Fragment>
                    ))}
                </ul>
            </div> */}

            {/* {sideGrpMenu && sideGrpMenu.length > 0 && (
                <div className='card sideGrpPop'>
                    <div style={{ display: "flex", justifyContent: "flex-end", margin: "0px 2px 4px" }}><span onClick={() => setSideGrpMenuEmpty()}><FaRegWindowClose /></span></div>
                    <ul className="list-group">
                        {sideGrpMenu.map((item, index) => (
                            <React.Fragment key={index}>
                                <li className="list-group-item" onClick={(e) => handleGrpMenuListClick(e, item)}>
                                    {item.mnuL2Name}

                                    {
                                        showNestList && clickedNestList === item.mnuL2Name ?
                                            <ul className={`list-group ${showNestList === true ? 'listShow' : 'listNotShow'}`}>
                                                {listMenu.map((item, index) => (
                                                    <React.Fragment key={index}>
                                                        <li className="list-group-item">{item.mnuL3Name}</li>
                                                    </React.Fragment>
                                                ))}
                                            </ul> : ""
                                    }


                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            )} */}

            {/* {listMenu && listMenu.length > 0 && (
                <div className='card GrpMenuList'>
                    <div style={{ display: "flex", justifyContent: "flex-end", margin: "0px 2px 4px" }}><span onClick={() => setListMenuEmpty()}><FaRegWindowClose /></span></div>
                    <ul className="list-group">
                        {listMenu.map((item, index) => (
                            <React.Fragment key={index}>
                                <li className="list-group-item">{item.mnuL3Name}</li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            )} */}




            {/* <div onClick={() => handleSideBarItemClick('menuList')}
                className={selectedItem === 'menuList' ? 'selectedItem' : ''}
                data-bs-toggle="collapse" data-bs-target="#collapseExample"
                aria-expanded="false" aria-controls="collapseExample">
                <BiMenuAltLeft />{' '}<span>MenuList</span>
            </div>

            <div className="collapse" id="collapseExample">
                {exData && exData.length > 0 && (
                    <ul className="list-group">
                        {exData.MenuList.map((item, index) => (
                            <React.Fragment key={index}>
                                <li className="list-group-item">{item.mnuL1Name}</li>
                            </React.Fragment>
                        ))}
                    </ul>
                )}
            </div> */}


        </div >
    )
}

export default SidePanel