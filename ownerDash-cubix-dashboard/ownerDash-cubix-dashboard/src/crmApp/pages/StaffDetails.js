import React, { useState, forwardRef } from 'react'
import './StaffDetails.css'
import { IoIosArrowBack } from "react-icons/io";
import StaffDetailTab from '../components/StaffDetails';
import globe from '../images/globe.png'
import requirements from '../images/requirements.png'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '@mui/material/styles';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';


const StaffDetails = () => {

    const [activeTab, setActiveTab] = useState('Details');
    const [openModal, setOpenModal] = useState(false);
    const [taskDetails, settaskDetails] = useState('');

    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());


    const [startDate, setStartDate] = useState(new Date());

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="example-custom-input" onClick={onClick} ref={ref} id='taskDateButton'>
            {value}
        </button>
    ));

    const navigate = useNavigate();


    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    const goBackHome = () => {
        navigate('/admin');
    }

    return (
        <div className='StaffDetWrapper'>

            <div className='StaffDetCont'>

                <div className='StaffHeader'>

                    <div className='StaffDetTextCont'>
                        <div className='leftArrow' onClick={goBackHome}>
                            <IoIosArrowBack />
                        </div>
                        <div className='StaffDetText'>
                            Staff Detail Page
                        </div>
                    </div>

                    <div className='StaffNameText'>
                        Akshay
                    </div>
                </div>

                <div className='StaffTabsCont'>
                    <div
                        className={`StaffDetails ${activeTab === 'Details' ? 'activeTab' : ''}`}
                        onClick={() => handleTabClick('Details')}
                    >
                        DETAILS
                    </div>
                    <div
                        className={`StaffAttendance ${activeTab === 'Attendance' ? 'activeTab' : ''}`}
                        onClick={() => handleTabClick('Attendance')}
                    >
                        ATTENDANCE
                    </div>
                    <div
                        className={`StaffAssignment ${activeTab === 'Assignment' ? 'activeTab' : ''}`}
                        onClick={() => handleTabClick('Assignment')}
                    >
                        ASSIGNMENT
                    </div>
                </div>

                <div className='StaffOptionView'>

                    {
                        activeTab === 'Details' && (
                            <StaffDetailTab />
                        )
                    }
                </div>

                <div className='StaffBottBox'>
                    <div className='LocBox'>
                        <img className='BottBoxImg' src={globe} alt="" />
                        <div className='BottBoxText'>Location</div>
                    </div>
                    <div className='TaskBox' onClick={handleOpen}>
                        <img className='BottBoxImg' src={requirements} alt="" />
                        <div className='BottBoxText'>Assign Task</div>
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
                    }}
                >
                    {/* Modal content goes here */}
                    <Box
                        sx={{
                            width: '80%',
                            height: '300px',
                            bgcolor: 'white',
                            outline: 'none',
                            p: 2,
                            overflowY: 'scroll',
                            borderRadius: '6px',
                        }}
                    >
                        <Typography id="modal-modal-title" variant="h6" component="h4" sx={{ color: 'black', fontSize: '16px' }}>
                            Assign a task
                        </Typography>

                        <div className="input-container">
                            <div className="input-field">
                                <input
                                    type="text"
                                    id="taskDetails"
                                    className="input"
                                    value={taskDetails}
                                    onChange={(e) => handleInputChange(e, settaskDetails)}
                                    required
                                />
                                <label htmlFor="taskDetails" className={taskDetails ? 'label active' : 'label'}>
                                    enter task details
                                </label>
                            </div>
                        </div>

                        <div className='LeaveDateCont'>
                            <div className='LeftDate'>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    customInput={<ExampleCustomInput />}
                                />
                                <div className='FromDateText' id='taskDateTEXT'>Pick Action Date</div>
                            </div>
                        </div>

                        <div className='ModalButtonBox'>
                            <Button sx={{ color: 'black', backgroundColor: '#ececec' }} onClick={handleClose}>Cancel</Button>
                            <Button sx={{ color: 'white', backgroundColor: 'black' }} onClick={handleClose}>Save</Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}

export default StaffDetails