import React, { forwardRef, useState } from 'react'
import './StaffDetailsTab.css'
import { FaPlus } from "react-icons/fa6";
import wip from '../images/wip.png'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '@mui/material/styles';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const StaffDetailTab = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [openModal, setOpenModal] = useState(false);
    const [targetAmount, settargetAmount] = useState('');
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());


    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="example-custom-input" onClick={onClick} ref={ref} id='targetDateButton'>
            {value}
        </button>
    ));

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <div className='StaffDetTabWrapper'>

            <div className='StaffDetTabCont'>

                <div className='StaffTargetCont'>

                    <div className='StaffTargetTop'>
                        <div className='TargetText'>Target</div>
                        <div className='TargetAdd' onClick={handleOpen}>
                            Add <FaPlus />
                        </div>
                    </div>

                    <div className='StaffTargetMid'>
                        <div className='achievedText'>achieved</div>
                        <div className='targetAmnt'>
                            <div className='achievedText'>target</div>
                            <div className='TargetNum'>60000</div>
                        </div>
                    </div>

                    <div className='StaffTargetBott'>
                        <div>Upcoming Targets</div>
                    </div>
                </div>

                <div className='BookingStaff'>
                    <div className='BookText'>Booking</div>
                    <div className='BookImgCont'>
                        <img className='wipImg' src={wip} alt="" />
                    </div>
                </div>
            </div>

            <div className='DatasheetCont'>
                Datasheet
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
                        Assign a target
                    </Typography>

                    <div className="input-container">
                        <div className="input-field">
                            <input
                                type="text"
                                id="targetAmount"
                                className="input"
                                value={targetAmount}
                                onChange={(e) => handleInputChange(e, settargetAmount)}
                                required
                            />
                            <label htmlFor="targetAmount" className={targetAmount ? 'label active' : 'label'}>
                                enter target amount
                            </label>
                        </div>
                    </div>

                    <div className='LeaveDateCont'>
                        <div className='LeftDate'>
                            <DatePicker
                                selected={fromDate}
                                onChange={(date) => setFromDate(date)}
                                customInput={<ExampleCustomInput />}
                            />
                            <div className='FromDateText'>From Date</div>
                        </div>
                        <div className='RightDate'>
                            <DatePicker
                                selected={toDate}
                                onChange={(date) => setToDate(date)}
                                customInput={<ExampleCustomInput />}
                            />
                            <div className='ToDateText'>To Date</div>
                        </div>
                    </div>

                    <div className='ModalButtonBox'>
                        <Button sx={{ color: 'black', backgroundColor: '#ececec' }} onClick={handleClose}>Cancel</Button>
                        <Button sx={{ color: 'white', backgroundColor: 'black' }} onClick={handleClose}>Save</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default StaffDetailTab