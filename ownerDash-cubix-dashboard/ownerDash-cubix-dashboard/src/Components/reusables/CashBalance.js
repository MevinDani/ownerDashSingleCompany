import React, { useEffect, useState } from "react";
import { CiWallet } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";
import { RotatingLines } from 'react-loader-spinner'
import "./CashBalance.css";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FaEye } from "react-icons/fa";
import list from '../../images/card_list_svg_file.svg'

const CashBalance = () => {

    const [cashBalanceData, setCashBalanceData] = useState(null)
    const [cashBalance, setCashBalance] = useState(null)

    const [openModal, setOpenModal] = useState(false);

    const [departmentColors, setDepartmentColors] = useState([]);

    const selectedCompanyString = localStorage.getItem("selectedCompany");

    const selectedCompany = JSON.parse(selectedCompanyString);

    const cmpcode = selectedCompany.cmpcode;
    const publick = selectedCompany.publick;
    const privatek = selectedCompany.privatek;

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    useEffect(() => {
        const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=CASHBALANCE&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=1-1-2022&dt2=1-1-2022`

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCashBalanceData(data);
                calculateTotalCash(data);

                if (data.length > 0) {
                    const firstItem = data[0];
                    const departmentColors = {
                        bgColor: firstItem.bgColor,
                        foreColor: firstItem.foreColor,
                        imgUrl: firstItem.imgUrl,
                    };

                    setDepartmentColors(departmentColors);
                }
            })
            .catch((error) => console.error("Error:", error));
    }, [])

    const calculateTotalCash = (data) => {
        if (data) {
            const totalCash = data.reduce((sum, item) => sum + item.CASH, 0);
            const formattedTotalCash = totalCash.toFixed(2);
            setCashBalance(formattedTotalCash);
        }
    };


    const storedItem = localStorage.getItem('DashItems');
    const isDashItemsPresent = storedItem && JSON.parse(storedItem).length > 0;

    // style={{ height: '100%' }}
    // style={{ height: '100%' }}
    // style={{ height: '100%' }}

    return (
        // <div className="card-hover" id="cashBHeight">
        <div className={`card-dashboard border p-2 rounded  ${isDashItemsPresent ? 'wide' : 'wide'}`} id="cashBWrap" style={{ backgroundColor: '#ABA2E5', height: "100%" }}>
            <div className="card-body">
                <h6 className="mb-2 text-muted mt-2 d-flex align-items-center justify-content-between">
                    <div>
                        {/* <CiWallet className="wallet" />
                            &nbsp; &nbsp; */}
                        <span className="card-subtitle-four" id="cashBalanceText">Cash Balance</span>
                    </div>
                    {/* <div className="eyeCash"><FaEye className='LineList' onClick={handleOpen} /></div> */}
                    <div className="eyeCash"><img src={list} className='LineList' onClick={handleOpen} /></div>
                </h6>
                <p className="card-text-four" id="cshText">
                    <b className="cashBalance">  {
                        cashBalance ? cashBalance : <RotatingLines
                            strokeColor="#107F6A"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="40"
                            visible={true}
                        />
                    }</b>
                </p>
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
                    fontFamily: 'Inria Sans'
                }}
            >
                <Box sx={{
                    width: '800px', bgcolor: '#ADD8E6', outline: 'none', p: 2, overflowY: 'scroll', borderRadius: '6px', '@media (max-width: 760px)': {
                        height: 'auto', // Adjust the height for screens below 760px
                    },
                    maxHeight: '90vh', // Set the maximum height for the modal
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontFamily: 'Inria Sans', color: 'black', fontWeight: 'bold', display: "flex", justifyContent: "space-between", padding: "8px" }} >
                        <div>Cash Balance</div>
                        <Button sx={{ color: 'white', fontWeight: 'bold', backgroundColor: "red" }} onClick={handleClose}>Close</Button>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ fontFamily: 'Inria Sans', mt: 2 }}>
                        {/* <table class="table table-dark table-striped" style={{ fontSize: '16px' }}> */}
                        <table class="table" id="cashTable">
                            <thead>
                                <tr>
                                    <th scope="col">Account</th>
                                    <th scope="col">Name</th>
                                    <th scope="col" style={{ textAlign: "right" }}>Cash</th>
                                    <th scope="col">Deptno</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cashBalanceData && cashBalanceData.map((i, k) => (
                                        <tr key={k}>
                                            <td id="cashTds">{i.Account}</td>
                                            <td id="cashTds">{i.Name}</td>
                                            <td id="cashTds" className="BoxSales">{i.CASH}</td>
                                            <td id="cashTds">{i.Deptno.trim() !== '' ? i.Deptno : 'Nil'}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        {/* {
                                cashBalanceData && cashBalanceData.map((i, k) => (
                                    <div className='salesModelCont' key={k}>
                                        <div className='salesDeptNo'>
                                            <div className='salesDeptNoText'>Account</div>
                                            <div className='salesDeptNoNum'>{i.Account}</div>
                                        </div>
                                        <div className='salesDeptName'>
                                            <div className='salesDeptNameText'>Name</div>
                                            <div className='salesDeptNameNum'>{i.Name}</div>
                                        </div>
                                        <div className='salesName'>
                                            <div className='salesNameText'>Cash</div>
                                            <div className='salesNameNum'>{i.CASH}</div>
                                        </div>
                                        <div className='salesName'>
                                            <div className='salesNameText'>Deptno</div>
                                            <div className='salesNameNum'>{i.Deptno.trim() !== '' ? i.Deptno : 'Nil'}</div>
                                        </div>
                                    </div>
                                ))
                            } */}
                    </Typography>
                </Box>
            </Modal>

        </div>
        // </div>
    );
};

export default CashBalance;
