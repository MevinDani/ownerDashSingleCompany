import React, { useEffect, useState } from 'react'
import './TotalIssuedPdc.css'
import { FaSortDown } from "react-icons/fa";
import { RotatingLines } from 'react-loader-spinner'
import clock from '../../images/last_n_number_of_days_svg_file.svg'
import chq from '../../images/cheque_svg_file.svg'
import arrowUp from '../../images/total_issued_svg_file.svg'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BsCardList } from "react-icons/bs";



const TotalIssuedPdc = ({ formatteddate }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [totalIssuedPdc, setTotalIssuedPdc] = useState(null)
    const [i1date, setI1Date] = useState(100)
    const [yearBottView, setYearBottView] = useState('')
    const [openModal, setOpenModal] = useState(false);

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
        const sortedData = totalIssuedPdc.slice().sort((a, b) => {
            const dateA = new Date(a.ChqDate);
            const dateB = new Date(b.ChqDate);

            if (newOrder === 'asc') {
                return dateA - dateB;
            } else {
                return dateB - dateA;
            }
        });

        sortedData && setTotalIssuedPdc(sortedData)
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
        setSortOrder('asc')
    };


    // useEffect(() => {
    //     setTotalIssuedPdc(null)
    //     const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOTAL_PDCI&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=${i1date}&i2=0&dt1=1-1-2022&dt2=1-1-2022`

    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => setTotalIssuedPdc(data))
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
        setTotalIssuedPdc(null)

        // Get today's date
        const today = new Date();

        // Format the date as 'MM-DD-YYYY'
        const formattedDateToday = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;


        const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOTAL_PDCI&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=${formattedDateToday}&dt2=${formatteddate}`;
        // console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Sort the data based on ChqDate in ascending order
                const sortedData = data.slice().sort((a, b) => {
                    const dateA = new Date(a.ChqDate);
                    const dateB = new Date(b.ChqDate);
                    return dateA - dateB;
                });

                setTotalIssuedPdc(sortedData);
            })
            .catch(error => console.error('Error:', error));
    }, [formatteddate]);

    // Calculate the sum of Amount values
    const totalAmount = totalIssuedPdc && totalIssuedPdc.reduce((acc, item) => acc + item.Amount, 0);


    // console.log(totalIssuedPdc)
    if (!formatteddate) {

        return null;
    }

    return (
        <div className='CBDwrapper'>
            <div className='CBDCont'>
                {/* <div className='arrowImgCont'>
                    <img className='arrDImg' src={arrowUp} alt="" />
                </div> */}
                <div className='CBDMAINDROP'>
                    <div className='CBDText'>Total Issued PDC</div>
                    <div onClick={handleOpen} style={{ cursor: "pointer" }}><BsCardList /></div>
                    {/* <div className='CBDClock'>
                        <img className='clockImg' src={clock} alt="" />
                    </div> */}
                    {/* <div className='CBDDropCont'>
                        <div className='CBDDropItems'>
                            <div id="deptSalesTopBan">
                                <div className='CBDDText' onClick={() => setI1Date(100)}>Last 100 Days</div>
                                <div className='CBDDText'>
                                    {
                                        isOpen ? <FaSortDown className='TSDropDropped' onClick={toggleDropdown} /> : <FaSortDown className='TSDrop' onClick={toggleDropdown} />
                                    }
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {isOpen && (
                        <div className='CBDDropDown'>
                            <div className='CBDDropDownCont'>
                                <div className='CBDDropDownText' onClick={() => setI1Date(100)}>Last 100 days</div>
                                <div className='CBDDropDownText' onClick={() => setI1Date(30)}>Last 30 days</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='CBDDateCont'>
                    <div className='CBDItems'>
                        {/* <div className='CBDText'>Total Issued PDC</div> */}
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
                        <div>Issued PDC</div>
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
                                    <th scope="col" onClick={handleSort} style={{ cursor: 'pointer' }}>
                                        ChqDate {sortOrder === 'asc' ? '↑' : '↓'}
                                    </th>
                                    {/* <th scope="col">ChqDate</th> */}
                                    <th scope="col">Chqno</th>
                                    <th scope="col">Customer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    totalIssuedPdc && totalIssuedPdc.map((i, k) => (
                                        <tr key={k}>
                                            <td id="cashTds">{i.Account || 'Nil'}</td>
                                            <td id="cashTds">{i.Amount || 'Nil'}</td>
                                            <td id="cashTds">{i.Bank || 'Nil'}</td>
                                            {/* <td id="cashTds">{i.ChqDate || 'Nil'}</td> */}

                                            <td id="cashTds">
                                                {i.ChqDate ? new Date(i.ChqDate + 'Z').toISOString().split('T')[0] : "Nil"}
                                            </td>
                                            <td id="cashTds">{i.Chqno || 'Nil'}</td>
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
        </div>
    )
}

export default TotalIssuedPdc