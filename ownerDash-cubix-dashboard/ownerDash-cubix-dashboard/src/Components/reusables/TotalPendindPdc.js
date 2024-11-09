import React, { forwardRef, useEffect, useState } from 'react'
import { FaSortDown } from "react-icons/fa";
import { RotatingLines } from 'react-loader-spinner'
import './TotalIssuedPdc.css'
import clock from '../../images/last_n_number_of_days_svg_file.svg'
import chq from '../../images/cheque_svg_file.svg'
import arrowDown from '../../images/total_received_svg_file.svg'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRef } from 'react';
import { BsCardList } from "react-icons/bs";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const TotalPendingPdc = ({ formatteddate }) => {

    // if (!formatteddate) {

    //     return null;
    // }

    const [openModal, setOpenModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [totalPendingPdc, setTotalPendingPdc] = useState(null)
    const [i1date, setI1Date] = useState(100)
    const [yearBottView, setYearBottView] = useState('')
    const [startDate, setStartDate] = useState(new Date());

    const selectedCompanyString = localStorage.getItem("selectedCompany");

    const selectedCompany = JSON.parse(selectedCompanyString);

    const cmpcode = selectedCompany.cmpcode;
    const publick = selectedCompany.publick;
    const privatek = selectedCompany.privatek;
    const [sortOrder, setSortOrder] = useState('asc'); // Initial sorting order

    const handleSort = () => {
        const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newOrder);

        // Sort your data based on ChqDate and sortOrder
        const sortedData = totalPendingPdc.slice().sort((a, b) => {
            const dateA = new Date(a.ChqDate);
            const dateB = new Date(b.ChqDate);

            if (newOrder === 'asc') {
                return dateA - dateB;
            } else {
                return dateB - dateA;
            }
        });

        sortedData && setTotalPendingPdc(sortedData)
    }

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
        setSortOrder('asc')
    };



    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="example-custom-input" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));

    const datePickerRef = useRef(null);

    // useEffect(() => {
    //     setTotalPendingPdc(null)
    //     const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOTAL_PDCR&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=${i1date}&i2=0&dt1=1-1-2022&dt2=1-1-2022`

    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => setTotalPendingPdc(data))
    //         .catch(error => console.error('Error:', error));
    // }, [i1date])

    // useEffect(() => {
    //     if (i1date === 100) {
    //         setYearBottView('Last 100 Days')
    //     } else if (i1date === 30) {
    //         setYearBottView('Last 30 Days')
    //     } else if (i1date === 7) {
    //         setYearBottView('Last 7 Days')
    //     }
    // }, [i1date])

    useEffect(() => {
        setTotalPendingPdc(null)

        // Get today's date
        const today = new Date();

        // Format the date as 'MM-DD-YYYY'
        const formattedDateToday = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;

        // console.log(formatteddate)
        const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOTAL_PDCR&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=${formattedDateToday}&dt2=${formatteddate}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Sort the data based on ChqDate in ascending order
                const sortedData = data.slice().sort((a, b) => {
                    const dateA = new Date(a.ChqDate);
                    const dateB = new Date(b.ChqDate);
                    return dateA - dateB;
                });

                setTotalPendingPdc(sortedData);
            })
            .catch(error => console.error('Error:', error));
    }, [formatteddate]);

    // useEffect(() => {
    //     setTotalPendingPdc(null)

    //     // Get today's date
    //     const today = new Date();

    //     // Format the date as 'MM-DD-YYYY'
    //     const formattedDateToday = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;

    //     // console.log(formatteddate)
    //     const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=aqua&guid=40cf46d6-8f4d-4161-9e0b-acccbcd8532e&mod=TOTAL_PDCI&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=02-02-2024&dt2=2-2-2024`;
    //     // console.log(url)
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             setTotalPendingPdc(data)
    //         })
    //         .catch(error => console.error('Error:', error));
    // }, [formatteddate]);

    // Calculate the sum of Amount values
    const totalAmount = totalPendingPdc && totalPendingPdc.reduce((acc, item) => acc + item.Amount, 0);

    // console.log(totalPendingPdc)

    // console.log(totalAmount)
    if (!formatteddate) {

        return null;
    }

    return (
        <div className='CBDwrapper'>
            <div className='CBDCont'>
                {/* <div className='arrowImgCont'>
                    <img className='arrDImg' src={arrowDown} alt="" />
                </div> */}
                <div className='CBDMAINDROP'>
                    <div className='CBDText'>Total Received PDC</div>
                    <div onClick={handleOpen} style={{ cursor: "pointer" }}><BsCardList /></div>
                    {/* <div className='CBDClock'>
                        <img className='clockImg' src={clock} alt="" />
                    </div> */}
                    {/* <div className='CBDDropCont'>
                        <div className='CBDDropItems'> */}
                    {/* <div className='CBDDText' onClick={() => setI1Date(100)} id='100Days'>Last 100 Days</div> */}
                    {/* <div className='CBDDText'>
                                    {
                                        isOpen ? <FaSortDown className='TSDropDropped' onClick={toggleDropdown} /> : <FaSortDown className='TSDrop' onClick={toggleDropdown} />
                                    }
                                </div> */}
                    {/* </div> */}
                    {isOpen && (
                        <div className='CBDDropDown'>
                            <div className='CBDDropDownCont'>
                                <div className='CBDDropDownText' onClick={() => setI1Date(100)}>Last 100 days</div>
                                <div className='CBDDropDownText' onClick={() => setI1Date(30)}>Last 30 days</div>
                            </div>
                        </div>
                    )}
                    {/* </div> */}
                </div>
                <div className='CBDDateCont'>
                    <div className='CBDItems'>
                        {/* <div className='CBDText'>Total Received PDC</div> */}
                        <div className='CBDNum'>
                            {
                                isNaN(totalAmount) ? <div style={{ color: "red", fontSize: "16px", padding: "10px 0px" }}>No Data Available</div> :
                                    totalAmount ? totalAmount.toFixed(2) :
                                        <RotatingLines
                                            strokeColor="#7D681A"
                                            strokeWidth="5"
                                            animationDuration="0.75"
                                            width="40"
                                            visible={true}
                                        />
                            }
                        </div>
                        {/* <div><button className='CBDButton'>view list</button></div> */}
                    </div>
                    {/* <div className='TPPdcDaysView'>
                        <div className='TPPdcDaysText'>{yearBottView}</div>
                    </div> */}
                </div>
                <div className='chqImgCont'>
                    <img className='chqImg' src={chq} alt="" />
                </div>
            </div>

            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Inria Sans',
                    overflow: 'hidden',
                }}
            >
                <Box sx={{
                    width: '800px', bgcolor: '#ADD8E6', outline: 'none', p: 2, overflowY: 'scroll', borderRadius: '6px', '@media (max-width: 760px)': {
                        height: 'auto', // Adjust the height for screens below 760px
                    },
                    maxHeight: '90vh', // Set the maximum height for the modal
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontFamily: 'Inria Sans', color: 'black', fontWeight: 'bold', display: "flex", justifyContent: "space-between", padding: "8px" }} >
                        <div>Received PDC</div>
                        <Button sx={{ color: 'white', fontWeight: 'bold', backgroundColor: "red" }} onClick={handleClose}>Close</Button>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ fontFamily: 'Inria Sans', mt: 2 }}>
                        {/* <table class="table table-dark table-striped" style={{ fontSize: '16px' }}> */}
                        <table class="table" id="cashTable">
                            <thead>
                                <tr>
                                    <th scope="col">Account</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Bank</th>
                                    {/* <th scope="col">ChqDate</th> */}
                                    <th scope="col" onClick={handleSort} style={{ cursor: 'pointer' }}>
                                        ChqDate {sortOrder === 'asc' ? '↑' : '↓'}
                                    </th>
                                    <th scope="col">Chqno</th>
                                    <th scope="col">Customer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    totalPendingPdc && totalPendingPdc.map((i, k) => (
                                        <tr key={k}>
                                            <td id="cashTds">{i.Account || 'Nil'}</td>
                                            <td id="cashTds">{i.Amount || 'Nil'}</td>
                                            <td id="cashTds">{i.Bank || 'Nil'}</td>
                                            <td id="cashTds">
                                                {i.ChqDate ? new Date(i.ChqDate + 'Z').toISOString().split('T')[0] : "Nil"}
                                            </td>                                            <td id="cashTds">{i.Chqno || 'Nil'}</td>
                                            <td id="cashTds">{i.Customer || 'Nil'}</td>
                                            {/* <td id="cashTds">{i.Deptno.trim() !== '' ? i.Deptno : 'Nil'}</td> */}
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </Typography>
                </Box>
            </Modal>
        </div >
    )
}

export default TotalPendingPdc