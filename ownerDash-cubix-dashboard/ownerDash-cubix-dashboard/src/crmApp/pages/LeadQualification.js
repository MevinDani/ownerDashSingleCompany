import React, { useState } from 'react'
import './LeadQualification.css'
// import { IoIosArrowBack } from "react-icons/io";
// import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import menu from '../images/menu.png'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '@mui/material/styles';
import LQModalBox from '../components/LQModalBox';


const LeadQualification = () => {

    const [openModal, setOpenModal] = useState(false);

    const [showItem, setShowItem] = useState([])
    // const navigate = useNavigate();

    // const goBackHome = () => {
    //     navigate('/analysis');
    // }

    const showBott = (id) => {
        // Check if the id is already present in showItem state
        if (showItem.includes(id)) {
            // If present, remove it
            const updatedShowItem = showItem.filter(item => item !== id);
            setShowItem(updatedShowItem);
        } else {
            // If not present, replace the entire array with the new id
            setShowItem([id]);
        }
    }

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <div className='LQWrapper'>

            <div className='LQCont'>

                <div className='LDQText'>Lead Qualification</div>

                {/* <div className='AnalysisHeader'>
                    <div className='StaffDetTextCont'>
                        <div className='leftArrow' onClick={goBackHome}>
                            <IoIosArrowBack />
                        </div>
                        <div className='StaffDetText'>
                            Analysis
                        </div>
                    </div>
                </div> */}

                {/* <div className='LQText'>Lead Qualification</div> */}

                <div className='LQMainBox'>

                    <div className='LQItemCont'>

                        <div className='LQItemTop'>
                            <div className='LQiItemTopText'>
                                <div>104</div>
                                <div onClick={handleOpen}>
                                    <img className='menuImg' src={menu} alt="" />
                                </div>
                            </div>
                            <div className='LQiItemTopText'>Ddddd</div>
                            <div className='BkAmnt'>
                                <div>booked amount</div>
                                <div>probability</div>
                            </div>
                            <div className='BkAmntNums'>
                                <div>0</div>
                                <div>50%</div>
                            </div>

                            <div className='DownArrow' onClick={() => showBott(1)}>
                                {showItem.includes(1) ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>

                        </div>

                        {
                            showItem[0] === 1 && (
                                <div className='LQItemBott'>
                                    <div className='LQIBLabel'>FollowUp</div>
                                    <div className='LQIBLabel'>on</div>
                                    <div className='LQIBData'>1/12/2023</div>
                                    <div className='LQIBLabel'>via</div>
                                    <div className='LQIBData'>Visit</div>
                                    <div className='LQIBLabel'>for</div>
                                    <div className='LQIBData'>Demo</div>
                                    <div className='LQIBLabel'>contact person name</div>
                                    <div className='LQIBData'>Ddddd</div>
                                    <div className='LQIBLabel'>phone number</div>
                                    <div className='LQIBData'>123</div>
                                    <div className='LQIBLabel'>email id</div>
                                    <div className='LQIBData'>Fd@ddf.y</div>
                                </div>
                            )
                        }
                    </div>

                    <div className='LQItemCont'>

                        <div className='LQItemTop'>
                            <div className='LQiItemTopText'>
                                <div>104</div>
                                <div onClick={handleOpen}>
                                    <img className='menuImg' src={menu} alt="" />
                                </div>
                            </div>
                            <div className='LQiItemTopText'>Ddddd</div>
                            <div className='BkAmnt'>
                                <div>booked amount</div>
                                <div>probability</div>
                            </div>
                            <div className='BkAmntNums'>
                                <div>0</div>
                                <div>50%</div>
                            </div>
                            <div className='DownArrow' onClick={() => showBott(2)}>
                                {showItem.includes(2) ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>
                        </div>

                        {
                            showItem[0] === 2 && (
                                <div className='LQItemBott'>
                                    <div className='LQIBLabel'>FollowUp</div>
                                    <div className='LQIBLabel'>on</div>
                                    <div className='LQIBData'>1/12/2023</div>
                                    <div className='LQIBLabel'>via</div>
                                    <div className='LQIBData'>Visit</div>
                                    <div className='LQIBLabel'>for</div>
                                    <div className='LQIBData'>Demo</div>
                                    <div className='LQIBLabel'>contact person name</div>
                                    <div className='LQIBData'>Ddddd</div>
                                    <div className='LQIBLabel'>phone number</div>
                                    <div className='LQIBData'>123</div>
                                    <div className='LQIBLabel'>email id</div>
                                    <div className='LQIBData'>Fd@ddf.y</div>
                                </div>
                            )
                        }
                    </div>
                </div>

                {/* modal */}
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
                            width: '93%',
                            height: 'auto',
                            bgcolor: 'white',
                            outline: 'none',
                            p: 2,
                            // overflowY: 'scroll',
                            borderRadius: '6px',
                        }}
                    >
                        <Typography id="modal-modal-title" variant="h6" component="h4" sx={{ color: 'black', fontSize: '16px', fontWeight: 'bold' }}>
                            Ddddd
                        </Typography>

                        <div className='LQModalCrossBox'>
                            <LQModalBox />
                        </div>

                        <div className='ModalButtonBox' id='LQModalOkBox'>
                            <Button sx={{ color: 'white', backgroundColor: 'black' }} onClick={handleClose}>Ok</Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}

export default LeadQualification