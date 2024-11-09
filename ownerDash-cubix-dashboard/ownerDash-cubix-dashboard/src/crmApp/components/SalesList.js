import React, { useEffect, useState } from 'react'
import './SalesList.css'
import { IoSearchOutline } from "react-icons/io5";
import { IoFunnelOutline } from "react-icons/io5";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CalendarDrop from './CalendarDrop';
import TargetAchieved from './TargetAchieved';
import GroupDatasheetGraph from './GroupDatasheetGraph';
import FollowUpForm from './FollowUpForm';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { RotatingLines } from 'react-loader-spinner'
import FollowUpTable from './FollowUpTable';
import logo from '../images/logo_cubix_svg_file.svg'
import { BsFillKanbanFill } from "react-icons/bs";
import KanBan from './KanBan';
import { IoMdClose } from "react-icons/io";
import { BsKanban } from "react-icons/bs";
import EmployeeTable from './EmployeeTable';
import KanBan2 from './KanBan2';
import { differenceInDays, format, parse } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import SidePanel from '../../Components/SidePanel/SidePanel';
// import { addMonths, startOfMonth, addDays, format, isValid } from 'date-fns';

const SalesDropItem = ({ data }) => {

    // console.log(data, 'data from salseDrop')
    return (
        <div className='SalesDropWrapper' style={{ backgroundColor: "white" }}>
            <div className='SalesDropCont' style={{ backgroundColor: "white" }}>

                <div className='QkOverText'>Quick Overview</div>
                <div className='SalesDropTable1'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Sales Stage</th>
                                <th scope="col">Probability</th>
                                <th scope="col">Lead came via</th>
                                <th scope="col">Lead Registered on</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label='Sales Stage'>{data.stage}</td>
                                <td data-label='Probability'>{data.probability}</td>
                                <td data-label='Lead came via'>John Doe</td>
                                <td data-label='Lead Registered on'>{data.statusChangedOn}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='FolloUpText'>Follow Up Log</div>
                <div className='SalesDropTable2'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Next Followup Date</th>
                                <th scope="col">Follow Up For</th>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label='Next Followup Date'>{data.statusChangedOn}</td>
                                <td data-label='Follow Up For'>{data.stage}</td>
                                <td data-label='Name'>Peter Mathews</td>
                                <td data-label='Type'>Call</td>
                                <td data-label='Mobile Number'>2344</td>
                                <td data-label='Remarks'>No Remarks</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const salesData = [
    {
        "id": 1,
        "customerName": "Ravi general trading",
        "phone": "123456789",
        "email": "info@ravitgn.com",
        "probability": 70,
        "statusChangedOn": "26-12-2023 | 3:15 PM",
        "stage": "Proposal",
        "nextFollowUpDate": "2024-01-16",
        'leadCame': "2024-01-01"
    },
    {
        "id": 2,
        "customerName": "ABC Corporation",
        "phone": "987654321",
        "email": "info@abccorp.com",
        "probability": 80,
        "statusChangedOn": "27-12-2023 | 2:30 PM",
        "stage": "Negotiation",
        "nextFollowUpDate": "2024-01-16",
        'leadCame': "2024-01-01"
    },
    {
        "id": 3,
        "customerName": "XYZ Ltd",
        "phone": "555555555",
        "email": "info@xyzltd.com",
        "probability": 60,
        "statusChangedOn": "28-12-2023 | 4:45 PM",
        "stage": "Prospecting",
        "nextFollowUpDate": "2024-01-16",
        'leadCame': "2024-01-01"
    },
    {
        "id": 4,
        "customerName": "PQR Industries",
        "phone": "999888777",
        "email": "info@pqrindustries.com",
        "probability": 90,
        "statusChangedOn": "29-12-2023 | 1:00 PM",
        "stage": "Demo",
        "nextFollowUpDate": "2024-01-16",
        'leadCame': "2024-01-01"
    },
    {
        "id": 5,
        "customerName": "LMN Enterprises",
        "phone": "111222333",
        "email": "info@lmnenterprises.com",
        "probability": 75,
        "statusChangedOn": "30-12-2023 | 5:15 PM",
        "stage": "Proposal",
        "nextFollowUpDate": "2024-01-16",
        'leadCame': "2024-01-01"
    },
    {
        "id": 6,
        "customerName": "Ravi general trading",
        "phone": "123456789",
        "email": "info@ravitgn.com",
        "probability": 70,
        "statusChangedOn": "26-12-2023 | 3:15 PM",
        "stage": "Proposal",
        "nextFollowUpDate": "2024-01-22",
        'leadCame': "2024-01-01"
    },
    {
        "id": 7,
        "customerName": "ABC Corporation",
        "phone": "987654321",
        "email": "info@abccorp.com",
        "probability": 80,
        "statusChangedOn": "27-12-2023 | 2:30 PM",
        "stage": "Negotiation",
        "nextFollowUpDate": "2024-01-22",
        'leadCame': "2024-01-01"
    },
    {
        "id": 8,
        "customerName": "XYZ Ltd",
        "phone": "555555555",
        "email": "info@xyzltd.com",
        "probability": 60,
        "statusChangedOn": "28-12-2023 | 4:45 PM",
        "stage": "Prospecting",
        "nextFollowUpDate": "2024-01-22",
        'leadCame': "2024-01-01"
    },
    {
        "id": 9,
        "customerName": "PQR Industries",
        "phone": "999888777",
        "email": "info@pqrindustries.com",
        "probability": 90,
        "statusChangedOn": "29-12-2023 | 1:00 PM",
        "stage": "Demo",
        "nextFollowUpDate": "2024-01-22",
        'leadCame': "2024-01-01"
    },
    {
        "id": 10,
        "customerName": "LMN Enterprises",
        "phone": "111222333",
        "email": "info@lmnenterprises.com",
        "probability": 75,
        "statusChangedOn": "30-12-2023 | 5:15 PM",
        "stage": "Lead Qualification",
        "nextFollowUpDate": "2024-01-18",
        'leadCame': "2024-01-01"
    },
    {
        "id": 11,
        "customerName": "LMN Enterprises",
        "phone": "111222333",
        "email": "info@lmnenterprises.com",
        "probability": 75,
        "statusChangedOn": "30-12-2023 | 5:15 PM",
        "stage": "Lead Qualification",
        "nextFollowUpDate": "2024-01-18",
        'leadCame': "2024-01-01"
    },
    {
        "id": 12,
        "customerName": "LMN Enterprises",
        "phone": "111222333",
        "email": "info@lmnenterprises.com",
        "probability": 75,
        "statusChangedOn": "30-12-2023 | 5:15 PM",
        "stage": "Lead Qualification",
        "nextFollowUpDate": "2024-01-18",
        'leadCame': "2024-01-01"
    },
    {
        "id": 13,
        "customerName": "LMN Enterprises",
        "phone": "111222333",
        "email": "info@lmnenterprises.com",
        "probability": 75,
        "statusChangedOn": "30-12-2023 | 5:15 PM",
        "stage": "Lead Qualification",
        "nextFollowUpDate": "2024-01-18",
        'leadCame': "2024-01-01"
    },
    {
        "id": 14,
        "customerName": "LMN Enterprises",
        "phone": "111222333",
        "email": "info@lmnenterprises.com",
        "probability": 75,
        "statusChangedOn": "30-12-2023 | 5:15 PM",
        "stage": "Opportunity Won",
        "nextFollowUpDate": "2024-01-17",
        'leadCame': "2024-01-01"
    },
    {
        "id": 15,
        "customerName": "LMN Enterprises",
        "phone": "111222333",
        "email": "info@lmnenterprises.com",
        "probability": 75,
        "statusChangedOn": "30-12-2023 | 5:15 PM",
        "stage": "Opportunity Won",
        "nextFollowUpDate": "2024-01-17",
        'leadCame': "2024-01-01"
    },
    {
        "id": 16,
        "customerName": "LMN Enterprises",
        "phone": "111222333",
        "email": "info@lmnenterprises.com",
        "probability": 75,
        "statusChangedOn": "30-12-2023 | 5:15 PM",
        "stage": "Opportunity Won",
        "nextFollowUpDate": "2024-01-17",
        'leadCame': "2024-01-01"
    },
    {
        "id": 17,
        "customerName": "LMN Enterprises",
        "phone": "111222333",
        "email": "info@lmnenterprises.com",
        "probability": 75,
        "statusChangedOn": "30-12-2023 | 5:15 PM",
        "stage": "Proposal",
        "nextFollowUpDate": "2024-01-17",
        'leadCame': "2024-01-01"
    },
    {
        "id": 18,
        "customerName": "LMN Enterprises",
        "phone": "111222333",
        "email": "info@lmnenterprises.com",
        "probability": 75,
        "statusChangedOn": "30-12-2023 | 5:15 PM",
        "stage": "Proposal",
        "nextFollowUpDate": "2024-01-17",
        'leadCame': "2024-01-01"
    },
    {
        "id": 19,
        "customerName": "LMN Enterprises",
        "phone": "111222333",
        "email": "info@lmnenterprises.com",
        "probability": 75,
        "statusChangedOn": "30-12-2023 | 5:15 PM",
        "stage": "Demo",
        "nextFollowUpDate": "2024-01-17",
        'leadCame': "2024-01-01"
    },
    {
        "id": 20,
        "customerName": "LMN Enterprises",
        "phone": "111222333",
        "email": "info@lmnenterprises.com",
        "probability": 75,
        "statusChangedOn": "30-12-2023 | 5:15 PM",
        "stage": "Demo",
        "nextFollowUpDate": "2024-01-17",
        'leadCame': "2024-01-01"
    },
]

const unattendedFollowUps = [
    {
        "id": 1,
        "customerName": "Ravi general trading",
        "phone": "123456789",
        "email": "info@ravitgn.com",
        "probability": 70,
        "statusChangedOn": "26-12-2023 | 3:15 PM",
        "stage": "Proposal",
        "nextFollowUpDate": "2024-01-16",
        'leadCame': "2024-01-01"
    },
    {
        "id": 2,
        "customerName": "ABC Corporation",
        "phone": "987654321",
        "email": "info@abccorp.com",
        "probability": 80,
        "statusChangedOn": "27-12-2023 | 2:30 PM",
        "stage": "Negotiation",
        "nextFollowUpDate": "2024-01-16",
        'leadCame': "2024-01-01"
    },
    {
        "id": 3,
        "customerName": "XYZ Ltd",
        "phone": "555555555",
        "email": "info@xyzltd.com",
        "probability": 60,
        "statusChangedOn": "28-12-2023 | 4:45 PM",
        "stage": "Prospecting",
        "nextFollowUpDate": "2024-01-16",
        'leadCame': "2024-01-01"
    },
    {
        "id": 4,
        "customerName": "PQR Industries",
        "phone": "999888777",
        "email": "info@pqrindustries.com",
        "probability": 90,
        "statusChangedOn": "29-12-2023 | 1:00 PM",
        "stage": "Demo",
        "nextFollowUpDate": "2024-01-16",
        'leadCame': "2024-01-01"
    },
    {
        "id": 5,
        "customerName": "LMN Enterprises",
        "phone": "111222333",
        "email": "info@lmnenterprises.com",
        "probability": 75,
        "statusChangedOn": "30-12-2023 | 5:15 PM",
        "stage": "Proposal",
        "nextFollowUpDate": "2024-01-16",
        'leadCame': "2024-01-01"
    },
    {
        "id": 6,
        "customerName": "Ravi general trading",
        "phone": "123456789",
        "email": "info@ravitgn.com",
        "probability": 70,
        "statusChangedOn": "26-12-2023 | 3:15 PM",
        "stage": "Proposal",
        "nextFollowUpDate": "2024-01-22",
        'leadCame': "2024-01-01"
    },
]

const SalesList = () => {

    const [openModal, setOpenModal] = useState(false);

    const [clickedRow, setClickedRow] = useState(null)
    const [dropData, setDropData] = useState(null)
    const [calendarValue, setCalendarValue] = useState(new Date())
    const [selectedDiv, setSelectedDiv] = useState('AllCount');
    const [filteredSalesData, setFilteredSalesData] = useState(null);

    const [todaysFollowUpToggle, setTodaysFollowUpToggle] = useState(false)

    const [showKanBan, setShowKanBan] = useState(false)

    const [kanbanData, setKanBanData] = useState(null)

    const [searchTerm, setSearchTerm] = useState('')

    const [staffData, setStaffData] = useState(true)

    const navigate = useNavigate()

    const handleTrClick = (id) => {
        // console.log(id, 'id')
        if (clickedRow === id) {
            setClickedRow(null)
        } else {
            setClickedRow(id)
        }
        const clickedRowData = salesData.find((item) => item.id === id);
        // console.log(clickedRowData, 'clickedRowData')
        setDropData(clickedRowData);
    }

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    const handleCardClick2 = async (divName) => {
        setFilteredSalesData(null);
        setSelectedDiv(divName);

        // Simulate a delay or replace this with your actual asynchronous data fetching
        await new Promise(resolve => setTimeout(resolve, 800));

        const filteredSalesData2 = salesData.filter((item) => {
            if (divName === 'AllCount') {
                return true; // Show all items for 'AllCount'
            } else {
                return item.stage === divName;
            }
        });

        setFilteredSalesData(filteredSalesData2);
    };

    const handleCardClick = async (divName) => {
        setFilteredSalesData(null);
        setSelectedDiv(divName);

        // Simulate a delay or replace this with your actual asynchronous data fetching
        await new Promise(resolve => setTimeout(resolve, 800));

        let filteredSalesData2;

        if (todaysFollowUpToggle) {
            const today = new Date();
            const formattedToday = formatDate(today);

            filteredSalesData2 = salesData.filter((item) => {
                if (divName === 'AllCount') {
                    return item.nextFollowUpDate === formattedToday;
                } else {
                    return item.stage === divName && item.nextFollowUpDate === formattedToday;
                }
            });
        } else {
            filteredSalesData2 = salesData.filter((item) => {
                if (divName === 'AllCount') {
                    return true; // Show all items for 'AllCount'
                } else {
                    return item.stage === divName;
                }
            });
        }

        setFilteredSalesData(filteredSalesData2);
    };

    useEffect(() => {

        const today = new Date();
        const formattedToday = formatDate(today);

        let filteredSalesData2;

        if (todaysFollowUpToggle) {
            filteredSalesData2 = salesData.filter((item) => {
                if (selectedDiv === 'AllCount') {
                    return item.nextFollowUpDate === formattedToday;
                } else {
                    return item.stage === selectedDiv && item.nextFollowUpDate === formattedToday;
                }
            });
        } else {
            // Toggle is turned off, show all data or data based on the selected division
            if (selectedDiv === 'AllCount') {
                filteredSalesData2 = salesData;
            } else {
                filteredSalesData2 = salesData.filter((item) => item.stage === selectedDiv);
            }
        }

        setFilteredSalesData(filteredSalesData2);
    }, [todaysFollowUpToggle])


    const handleTodaysFollowUp2 = async () => {
        setFilteredSalesData(null);
        setTodaysFollowUpToggle(!todaysFollowUpToggle)

        // Simulate a delay or replace this with your actual asynchronous data fetching
        await new Promise(resolve => setTimeout(resolve, 800));

        const today = new Date();
        const formattedToday = formatDate(today);

        const filteredSalesData2 = salesData.filter((item) => {
            if (selectedDiv === 'AllCount') {
                return item.nextFollowUpDate === formattedToday;
            } else {
                return item.stage === selectedDiv && item.nextFollowUpDate === formattedToday;
            }
        });

        setFilteredSalesData(filteredSalesData2);
    };

    const handleTodaysFollowUp = async () => {
        setFilteredSalesData(null);
        setTodaysFollowUpToggle(!todaysFollowUpToggle);

        // Simulate a delay or replace this with your actual asynchronous data fetching
        // await new Promise(resolve => setTimeout(resolve, 800));

        // const today = new Date();
        // const formattedToday = formatDate(today);

        // let filteredSalesData2;

        // if (todaysFollowUpToggle) {
        //     filteredSalesData2 = salesData.filter((item) => {
        //         if (selectedDiv === 'AllCount') {
        //             return item.nextFollowUpDate === formattedToday;
        //         } else {
        //             return item.stage === selectedDiv && item.nextFollowUpDate === formattedToday;
        //         }
        //     });
        // } else {
        //     // Toggle is turned off, show all data or data based on the selected division
        //     if (selectedDiv === 'AllCount') {
        //         filteredSalesData2 = salesData;
        //     } else {
        //         filteredSalesData2 = salesData.filter((item) => item.stage === selectedDiv);
        //     }
        // }

        // setFilteredSalesData(filteredSalesData2);
    };



    // Function to format date as "YYYY-MM-DD"
    function formatDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const getCountForStage2 = (stage) => {
        if (stage === 'AllCount') {
            return salesData.length;
        } else {
            return salesData.filter(item => item.stage === stage).length;
        }
    };

    const getCountForStage = (stage) => {
        if (todaysFollowUpToggle) {
            const today = new Date();
            const formattedToday = formatDate(today);

            if (stage === 'AllCount') {
                return salesData.filter(item => item.nextFollowUpDate === formattedToday).length;
            } else {
                return salesData.filter(item => item.stage === stage && item.nextFollowUpDate === formattedToday).length;
            }
        } else {
            if (stage === 'AllCount') {
                return salesData.length;
            } else {
                return salesData.filter(item => item.stage === stage).length;
            }
        }
    };


    useEffect(() => {
        // Fetch and set initial data or perform any other initial logic
        setFilteredSalesData(salesData);
    }, []);

    // Function to open the Bootstrap modal
    const openBootstrapModal = () => {
        const modal = new window.bootstrap.Modal(document.getElementById('staticBackdrop2'));
        modal.show();
    };

    useEffect(() => {
        if (searchTerm !== '') {
            // Filter data based on the search term
            const filteredData = salesData.filter(item =>
                item.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.email.toLowerCase().includes(searchTerm.toLowerCase())
                // Add other fields as needed for your search
            );

            setFilteredSalesData(filteredData);
        } else {
            // If search term is empty, reset the filtered data to the original data
            setFilteredSalesData(salesData);
        }
    }, [searchTerm])

    useEffect(() => {
        // Group the data based on stages
        const groupedData = filteredSalesData && filteredSalesData.reduce((result, entry) => {
            const stage = entry.stage;
            if (!result[stage]) {
                result[stage] = [];
            }
            result[stage].push(entry);
            return result;
        }, {});

        // Convert the grouped data into an array if needed
        const groupedDataArray = groupedData && Object.entries(groupedData).map(([stage, data]) => ({
            stage,
            data,
        }));

        if (groupedDataArray) setKanBanData(groupedDataArray)

        // Now, groupedDataArray contains the data grouped by stages
        // console.log(groupedDataArray);
    }, [filteredSalesData])

    // console.log(kanbanData, 'kanbanData')
    // console.log(calendarValue, 'calendarValue')

    const calculateAgeingDays = (leadCame) => {
        const currentDate = new Date();
        const leadCameDate = new Date(leadCame);
        const daysDiff = differenceInDays(currentDate, leadCameDate);
        return daysDiff;
    };

    const calculateDaysSinceStatusChanged = (statusChangedOn) => {
        const currentDate = new Date();
        const statusChangedDate = parse(statusChangedOn, 'dd-MM-yyyy | hh:mm a', new Date());
        const daysDiff = differenceInDays(currentDate, statusChangedDate);
        return daysDiff;
    };

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-white p-0" style={{ backgroundColor: "white" }}>
                <div class="container-fluid">
                    <a class="navbar-brand" onClick={() => navigate('/admin/dashboard')}>
                        <img src={logo} alt="Bootstrap" width="30" height="24" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul> */}
                        <form class="d-flex justify-content-center ms-auto" role="search">
                            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button> */}
                            <div className='NewProsButon' onClick={handleOpen}>New Prospectus</div>
                        </form>
                    </div>
                </div>
            </nav>

            <div className='crmOverallWrapper'>
                <div>
                    <SidePanel item='crmHome' />
                </div>
                <div className='SalesListWrapper'>
                    <div className='SalesListCont'>
                        {/* <div className='SalesListCardContainer '>
                        <div className='SalesListCardCounts'>
                            <div className={`AllCount ${selectedDiv === 'AllCount' ? 'SelectedDiv' : ''}`} onClick={() => handleCardClick('AllCount')}>
                                <div>All</div>
                                <div className='CountDiv'>{getCountForStage('AllCount')}</div>
                            </div>
                            <div className={`NegCount ${selectedDiv === 'Negotiation' ? 'SelectedDiv' : ''}`} onClick={() => handleCardClick('Negotiation')}>
                                <div>Negotiation</div>
                                <div className='CountDiv'>{getCountForStage('Negotiation')}</div>
                            </div>
                            <div className={`ProposalCount ${selectedDiv === 'Proposal' ? 'SelectedDiv' : ''}`} onClick={() => handleCardClick('Proposal')}>
                                <div>Proposal</div>
                                <div className='CountDiv'>{getCountForStage('Proposal')}</div>
                            </div>
                            <div className={`DemoCount ${selectedDiv === 'Demo' ? 'SelectedDiv' : ''}`} onClick={() => handleCardClick('Demo')}>
                                <div>Demo</div>
                                <div className='CountDiv'>{getCountForStage('Demo')}</div>
                            </div>
                            <div className={`LQCount ${selectedDiv === 'Lead Qualification' ? 'SelectedDiv' : ''}`} onClick={() => handleCardClick('Lead Qualification')}>
                                <div>Lead Qualification</div>
                                <div className='CountDiv'>{getCountForStage('Lead Qualification')}</div>
                            </div>
                            <div className={`ProspectingCount ${selectedDiv === 'Prospecting' ? 'SelectedDiv' : ''}`} onClick={() => handleCardClick('Prospecting')}>
                                <div>Prospecting</div>
                                <div className='CountDiv'>{getCountForStage('Prospecting')}</div>
                            </div>
                            <div className={`OppWonCount ${selectedDiv === 'Opportunity Won' ? 'SelectedDiv' : ''}`} onClick={() => handleCardClick('Opportunity Won')}>
                                <div>Opportunity Won</div>
                                <div className='CountDiv'>{getCountForStage('Opportunity Won')}</div>
                            </div>                    </div>
                    </div> */}

                        {/* <div className='GoBackFromCrm'>Go Back</div> */}

                        <div class="card">
                            <div class="card-body">

                                <div className='SalesChip'>
                                    <div className='SalesCardCountCont'>
                                        <div className={`ChipCard ${selectedDiv === 'AllCount' ? 'SelectedDiv' : ''}`} onClick={() => handleCardClick('AllCount')}>
                                            <div>All</div>
                                            <span>{getCountForStage('AllCount')}</span>
                                        </div>
                                        <div className={`ChipCard ${selectedDiv === 'Negotiation' ? 'SelectedDiv' : ''}`} onClick={() => handleCardClick('Negotiation')}>
                                            <div>Negotiation</div>
                                            <span>{getCountForStage('Negotiation')}</span>
                                        </div>
                                        <div className={`ChipCard ${selectedDiv === 'Proposal' ? 'SelectedDiv' : ''}`} onClick={() => handleCardClick('Proposal')}>
                                            <div>Proposal</div>
                                            <span>{getCountForStage('Proposal')}</span>
                                        </div>
                                        <div className={`ChipCard ${selectedDiv === 'Demo' ? 'SelectedDiv' : ''}`} onClick={() => handleCardClick('Demo')}>
                                            <div>Demo</div>
                                            <span>{getCountForStage('Demo')}</span>
                                        </div>
                                        <div className={`ChipCard ${selectedDiv === 'Lead Qualification' ? 'SelectedDiv' : ''}`} onClick={() => handleCardClick('Lead Qualification')}>
                                            <div>Lead</div>
                                            <span>{getCountForStage('Lead Qualification')}</span>
                                        </div>
                                        <div className={`ChipCard ${selectedDiv === 'Prospecting' ? 'SelectedDiv' : ''}`} onClick={() => handleCardClick('Prospecting')}>
                                            <div>Prospecting</div>
                                            <span>{getCountForStage('Prospecting')}</span>
                                        </div>
                                        <div className={`ChipCard ${selectedDiv === 'Opportunity Won' ? 'SelectedDiv' : ''}`} onClick={() => handleCardClick('Opportunity Won')}>
                                            <div>Won</div>
                                            <span>{getCountForStage('Opportunity Won')}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='SalesCardHeader'>
                                    <div className='SalesText'>Sales List</div>
                                    <div className='SalesFilterCont'>
                                        <div className='KanBanButton' onClick={() => setShowKanBan(!showKanBan)}>{showKanBan ? <BsFillKanbanFill /> : <BsKanban />}</div>
                                        <div className={`ToDaysFUPButon ${todaysFollowUpToggle ? 'SelectedTodaysFollowUp' : ''}`}>
                                            {/* <div class="input-group-text"> */}
                                            {/* </div> */}
                                            <div>Todays FollowUp</div>
                                            <input class="form-check-input mt-0 ms-2" type="checkbox" value="" aria-label="Checkbox for following text input" onClick={handleTodaysFollowUp} />
                                        </div>
                                        <div className='SalesListFilterCont' data-bs-toggle="collapse" data-bs-target="#collapseExampleSearch" aria-expanded="false" aria-controls="collapseExampleSearch">
                                            <IoSearchOutline />
                                        </div>
                                        <div className='SalesListFilterCont' onClick={() => openBootstrapModal()}>
                                            <IoFunnelOutline />
                                        </div>
                                    </div>
                                </div>

                                <div class="collapse srchCollapse" id="collapseExampleSearch">
                                    <div class="card">
                                        <input type="text" className='form-control' placeholder='Search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                                        {
                                            searchTerm !== '' &&
                                            <div className='SrchClose' onClick={() => setSearchTerm('')}><IoMdClose /></div>
                                        }
                                    </div>
                                </div>

                                {
                                    showKanBan ? <KanBan2 kanbanData={kanbanData} /> : (
                                        <div className='SalesTableCont'>
                                            <div className='Table-Responsive scroll' style={{ maxHeight: "350px" }}>
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th>id</th>
                                                            <th>Customer Name</th>
                                                            <th>Phone</th>
                                                            <th>Email</th>
                                                            <th>Probability</th>
                                                            <th>Lead Came</th>
                                                            <th>Ageing (days)</th>
                                                            <th>Status Changed on</th>
                                                            <th>Day Since Status Change</th>
                                                            <th>Next Follow Up</th>
                                                            <th>Stage</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            filteredSalesData && filteredSalesData.length > 0 ? (
                                                                filteredSalesData.map((item, index) => (
                                                                    <>
                                                                        <tr key={item.id} onClick={() => handleTrClick(item.id)} className='mainTr'>
                                                                            <td data-label='id'>{item.id}</td>
                                                                            <td data-label='Customer Name'>{item.customerName}</td>
                                                                            <td data-label='Phone'>{item.phone}</td>
                                                                            <td data-label='Email'>{item.email}</td>
                                                                            <td data-label='Probability'>{item.probability}</td>
                                                                            <td data-label='LeadCame'>{item.leadCame}</td>
                                                                            <td data-label='Ageing (days)' className='AgeInDays'>{calculateAgeingDays(item.leadCame)}</td>
                                                                            <td data-label='Status Changed on'>{item.statusChangedOn}</td>
                                                                            <td data-label='Ageing (days)' className='AgeInDays'>{calculateDaysSinceStatusChanged(item.statusChangedOn)}</td>
                                                                            <td data-label='Next Follow Up'>{item.nextFollowUpDate}</td>
                                                                            <td data-label='Stage' className={`TS${item.stage}`}>{item.stage}</td>
                                                                        </tr>
                                                                        {clickedRow === item.id && dropData && (
                                                                            <tr style={{ backgroundColor: "white" }}>
                                                                                <td colSpan='9' data-label='Overview'>
                                                                                    <SalesDropItem data={dropData} />
                                                                                </td>
                                                                            </tr>
                                                                        )}
                                                                    </>
                                                                ))
                                                            ) : (
                                                                filteredSalesData === null ? (
                                                                    <tr style={{ display: "flex", justifyContent: "center" }}>
                                                                        <td colSpan='7'>
                                                                            <RotatingLines
                                                                                visible={true}
                                                                                height="50"
                                                                                width="50"
                                                                                color="grey"
                                                                                strokeWidth="5"
                                                                                animationDuration="0.75"
                                                                                ariaLabel="rotating-lines-loading"
                                                                                wrapperStyle={{}}
                                                                                wrapperClass=""
                                                                            />
                                                                        </td>
                                                                    </tr>
                                                                ) : (
                                                                    <tr>
                                                                        <td colSpan='2' style={{ color: "red", fontSize: "12px" }}>No Data Available</td>
                                                                    </tr>
                                                                )
                                                            )
                                                        }
                                                    </tbody>
                                                </table>

                                                {/* unattended followups */}
                                                {
                                                    todaysFollowUpToggle && (
                                                        <>
                                                            <p className='UnattendedFollowUps'>Unattended FollowUps</p>
                                                            <table className='table'>
                                                                <thead>
                                                                    <tr>
                                                                        <th>id</th>
                                                                        <th>Customer Name</th>
                                                                        <th>Phone</th>
                                                                        <th>Email</th>
                                                                        <th>Probability</th>
                                                                        <th>Lead Came</th>
                                                                        <th>Ageing (days)</th>
                                                                        <th>Status Changed on</th>
                                                                        <th>Day Since Status Change</th>
                                                                        <th>Next Follow Up</th>
                                                                        <th>Stage</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {
                                                                        unattendedFollowUps && unattendedFollowUps.length > 0 ? (
                                                                            unattendedFollowUps.map((item, index) => (
                                                                                <>
                                                                                    <tr key={item.id} className='mainTr'>
                                                                                        <td data-label='id'>{item.id}</td>
                                                                                        <td data-label='Customer Name'>{item.customerName}</td>
                                                                                        <td data-label='Phone'>{item.phone}</td>
                                                                                        <td data-label='Email'>{item.email}</td>
                                                                                        <td data-label='Probability'>{item.probability}</td>
                                                                                        <td data-label='LeadCame'>{item.leadCame}</td>
                                                                                        <td data-label='Ageing (days)' className='AgeInDays'>{calculateAgeingDays(item.leadCame)}</td>
                                                                                        <td data-label='Status Changed on'>{item.statusChangedOn}</td>
                                                                                        <td data-label='Ageing (days)' className='AgeInDays'>{calculateDaysSinceStatusChanged(item.statusChangedOn)}</td>

                                                                                        <td data-label='Next Follow Up'>{item.nextFollowUpDate}</td>
                                                                                        <td data-label='Stage' className={`TS${item.stage}`}>{item.stage}</td>
                                                                                    </tr>
                                                                                    {clickedRow === item.id && dropData && (
                                                                                        <tr style={{ backgroundColor: "white" }}>
                                                                                            <td colSpan='8' data-label='Overview'>
                                                                                                <SalesDropItem data={dropData} />
                                                                                            </td>
                                                                                        </tr>
                                                                                    )}
                                                                                </>
                                                                            ))
                                                                        ) : (
                                                                            unattendedFollowUps === null ? (
                                                                                <tr style={{ display: "flex", justifyContent: "center" }}>
                                                                                    <td colSpan='7'>
                                                                                        <RotatingLines
                                                                                            visible={true}
                                                                                            height="50"
                                                                                            width="50"
                                                                                            color="grey"
                                                                                            strokeWidth="5"
                                                                                            animationDuration="0.75"
                                                                                            ariaLabel="rotating-lines-loading"
                                                                                            wrapperStyle={{}}
                                                                                            wrapperClass=""
                                                                                        />
                                                                                    </td>
                                                                                </tr>
                                                                            ) : (
                                                                                <tr>
                                                                                    <td colSpan='2' style={{ color: "red", fontSize: "12px" }}>No Data Available</td>
                                                                                </tr>
                                                                            )
                                                                        )
                                                                    }
                                                                </tbody>
                                                            </table>
                                                        </>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        </div>

                        {/* <div className='TodaysFollowUps'>
                        <FollowUpTable selectedDiv={selectedDiv} />
                    </div> */}

                        <div className='Calendar'>
                            <Calendar onChange={setCalendarValue} value={calendarValue} />
                        </div>

                        <div className='CalendarFollowUp'>
                            <CalendarDrop data={salesData[0]} />
                        </div>

                        <div className='TargetAchievedGraph'>
                            <TargetAchieved showGraph={true} />
                        </div>

                        <div className='GroupDSGraph'>
                            <GroupDatasheetGraph />
                        </div>

                        <div className='EmpTable'>
                            <EmployeeTable />
                        </div>

                        <div className='TargetAchievedGraph'>
                            <TargetAchieved staffData={staffData} />
                        </div>

                        {/* <div className='LeadQualification'>
                        <LeadQualification />
                    </div> */}

                        <Modal
                            open={openModal}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {/* Modal content goes here */}
                            <Box
                                sx={{
                                    width: '85%',
                                    maxHeight: '580px',
                                    bgcolor: 'white',
                                    outline: 'none',
                                    p: 2,
                                    overflowY: 'scroll',
                                    borderRadius: '6px',
                                    '@media (max-width: 600px)': {
                                        width: '98%',
                                        height: "500px" // Adjust as needed for smaller screens
                                    },
                                }}
                            >
                                <Typography id="modal-modal-title" variant="h6" component="h4" sx={{ color: 'black', fontSize: '16px', fontWeight: 'bold' }}>

                                </Typography>

                                {/* <div className='FollowUpForm'> */}
                                <FollowUpForm handleClose={handleClose} />
                                {/* </div> */}
                            </Box>
                        </Modal>

                        <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Filter</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" id='funnelFilterBody'>
                                        <div>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Customer Name</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Probability</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Sales Man</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Set Filter</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SalesList