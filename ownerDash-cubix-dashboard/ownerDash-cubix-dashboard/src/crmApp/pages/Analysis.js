import React, { useRef, useState, forwardRef } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Analysis.css'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import gold from '../images/gold-cup.png'
import meeting from '../images/meeting.png'
import contract from '../images/contract.png'
import teacher from '../images/teacher.png'
import tick from '../images/tick-mark.png'
import task from '../images/task-list.png'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '@mui/material/styles';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import wuc from '../images/web-development.png'
import LeadQualification from './LeadQualification';

const Analysis = () => {

    const [openModal, setOpenModal] = useState(false);

    const [customerName, setCustomerName] = useState('');
    const [bookedAmount, setbookedAmount] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [radioItem, setRadioItem] = useState('')

    const [startDate, setStartDate] = useState(new Date());

    const [drops, setDrops] = useState([])

    const [leadsource, setLeadSource] = useState('')
    const [probability, setProbability] = useState('')
    const [closingMonth, setClosingMonth] = useState('')
    const [salesStage, setSalesStage] = useState('')
    const [followAction, setFollowAction] = useState('')
    const [followStage, setFollowStage] = useState('')

    const handleLeadSourceClick = (item) => {
        setLeadSource(item)
    }

    const handleProbabilityClick = (item) => {
        setProbability(item)
    }

    const handleClosingMonthClick = (item) => {
        setClosingMonth(item)
    }

    const handleSalesStageClick = (item) => {
        setSalesStage(item)
    }

    const handleFollowActionClick = (item) => {
        setFollowAction(item)
    }

    const handleFollowStageClick = (item) => {
        setFollowStage(item)
    }

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="example-custom-input" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));

    const datePickerRef = useRef(null);

    const navigate = useNavigate();

    const goBackHome = () => {
        navigate('/');
    }

    const goLQ = () => {
        navigate('/lq')
    }

    const goOppWon = () => {
        navigate('/oppWon')
    }

    const goNegOt = () => {
        navigate('/negotiation')
    }

    const goProposal = () => {
        navigate('/proposal')
    }

    const goDemo = () => {
        navigate('/demo')
    }

    const goProspect = () => {
        navigate('/prospecting')
    }

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    const handleSave = () => {
        if (customerName === "" && bookedAmount === "" && contactPerson === "" && phoneNumber === "" && email === "" && leadsource === "" && probability === "" && closingMonth === "" && salesStage === "" && followAction === "" && followStage === "") {
            return
        }
        setOpenModal(false)
        console.log(customerName, 'customerName')
        console.log(bookedAmount, 'bookedAmount')
        console.log(contactPerson, 'contactPerson')
        console.log(phoneNumber, 'phoneNumber')
        console.log(email, 'email')
        console.log(startDate, 'startDate')
        console.log(leadsource, 'leadsource')
        console.log(probability, 'probability')
        console.log(closingMonth, 'closingMonth')
        console.log(salesStage, 'salesStage')
        console.log(followAction, 'followAction')
        console.log(followStage, 'followStage')

        setCustomerName('')
        setbookedAmount('')
        setContactPerson('')
        setPhoneNumber('')
        setEmail('')
        setStartDate(new Date())
        setLeadSource('')
        setProbability('')
        setClosingMonth('')
        setSalesStage('')
        setFollowAction('')
        setFollowStage('')
    }


    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    const handleRadioChange = (value) => {
        // console.log(value)
        setRadioItem(value)
    }

    const OpenOppWOnBox = (dropTab) => {
        // Check if the id is already present in showItem state
        if (drops.includes(dropTab)) {
            // If present, remove it
            const updatedShowItem = drops.filter(item => item !== dropTab);
            setDrops(updatedShowItem);
        } else {
            // If not present, replace the entire array with the new id
            setDrops([dropTab]);
        }
    }

    return (
        <div className='AnalysisWrapper'>

            <div className='AnalysisCont'>

                <div className='AnalysisHeader'>
                    <div className='StaffDetTextCont'>
                        <div className='leftArrow' onClick={goBackHome}>
                            <IoIosArrowBack />
                        </div>
                        <div className='StaffDetText'>
                            Analysis
                        </div>
                    </div>
                </div>

                <div className='AnalysisOptionBox'>
                    <div className='OppWonBox'>
                        <div className='OppVisible'>
                            <div className='Trophy'>
                                <img className='OppImgs' src={gold} alt="" />
                            </div>
                            <div className='OppText'>Opportunity Won</div>
                            <div className='BoxDrops' onClick={() => OpenOppWOnBox('oppwon')}>{drops.includes('oppwon') ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
                        </div>
                        {
                            drops[0] === 'oppwon' && (
                                // <div className={`OppDrop ${drops.includes('oppwon') ? 'show' : ''}`}>
                                //     <img className='WUC' src={wuc} alt="" />
                                // </div>
                                <div className='OppDrop'>
                                    <img className='WUC' src={wuc} alt="" />
                                </div>
                            )
                        }
                    </div>
                    <div className='NegBox'>
                        <div className='OppVisible'>
                            <div className='NegImg'>
                                <img className='OppImgs' src={meeting} alt="" />
                            </div>
                            <div className='OppText'>Negotiation</div>
                            <div className='BoxDrops' onClick={() => OpenOppWOnBox('negbox')}>{drops.includes('negbox') ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
                        </div>
                        {
                            drops[0] === 'negbox' && (
                                <div className='OppDrop'>
                                    <img className='WUC' src={wuc} alt="" />
                                </div>
                            )
                        }
                    </div>

                    <div className='PropBox'>
                        <div className='OppVisible'>
                            <div className='Trophy'>
                                <img className='OppImgs' src={contract} alt="" />
                            </div>
                            <div className='OppText'>Proposal</div>
                            <div className='BoxDrops' onClick={() => OpenOppWOnBox('propbox')}>{drops.includes('propbox') ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
                        </div>
                        {
                            drops[0] === 'propbox' && (
                                <div className='OppDrop'>
                                    <img className='WUC' src={wuc} alt="" />
                                </div>
                            )
                        }
                    </div>
                    <div className='DemoBox'>
                        <div className='OppVisible'>
                            <div className='NegImg'>
                                <img className='OppImgs' src={teacher} alt="" />
                            </div>
                            <div className='OppText'>Demo</div>
                            <div className='BoxDrops' onClick={() => OpenOppWOnBox('demobox')}>{drops.includes('demobox') ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
                        </div>
                        {
                            drops[0] === 'demobox' && (
                                <div className='OppDrop'>
                                    <img className='WUC' src={wuc} alt="" />
                                </div>
                            )
                        }
                    </div>

                    <div className='LQBox'>
                        <div className='OppVisible'>
                            <div className='Trophy'>
                                <img className='OppImgs' src={tick} alt="" />
                            </div>
                            <div className='OppText'>Lead Qualification</div>
                            <div className='BoxDrops' onClick={() => OpenOppWOnBox('lqbox')}>{drops.includes('lqbox') ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
                        </div>
                        {
                            drops[0] === 'lqbox' && (
                                <LeadQualification />
                                // <div className='OppDrop'>
                                //     <img className='WUC' src={wuc} alt="" />
                                // </div>
                            )
                        }
                    </div>
                    <div className='ProsBox'>
                        <div className='OppVisible'>
                            <div className='NegImg'>
                                <img className='OppImgs' src={task} alt="" />
                            </div>
                            <div className='OppText'>Prospecting</div>
                            <div className='BoxDrops' onClick={() => OpenOppWOnBox('prosbox')}>{drops.includes('prosbox') ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
                        </div>
                        {
                            drops[0] === 'prosbox' && (
                                <div className='OppDrop'>
                                    <img className='WUC' src={wuc} alt="" />
                                </div>
                            )
                        }

                    </div>
                </div>

                <div className='DemoUpdates'>
                    <div onClick={handleOpen}>Update 1</div>
                    {/* <div>Update 2</div> */}
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
                            width: '85%',
                            maxHeight: '500px',
                            bgcolor: 'white',
                            outline: 'none',
                            p: 2,
                            overflowY: 'scroll',
                            borderRadius: '6px',
                        }}
                    >
                        <Typography id="modal-modal-title" variant="h6" component="h4" sx={{ color: 'black', fontSize: '16px', fontWeight: 'bold' }}>
                            Update
                        </Typography>

                        <div className='updateModalText'>
                            <div>104</div>
                            <div>Ddddd</div>
                            <div>123</div>
                            <div>Fd@ddf.y</div>
                        </div>

                        <div className='TaskRadio'>
                            <div>
                                <input type="radio" id="test1" name="radio-group" onChange={(e) => handleRadioChange('won')} />
                                <label for="test1">Won</label>
                            </div>
                            <div>
                                <input type="radio" id="test2" name="radio-group" onChange={(e) => handleRadioChange('follow')} />
                                <label for="test2">Follow up needed</label>
                            </div>
                            <div>
                                <input type="radio" id="test3" name="radio-group" onChange={(e) => handleRadioChange('lost')} />
                                <label for="test3">Lost</label>
                            </div>
                        </div>

                        <div className="input-container">
                            <div className="input-field">
                                <input
                                    type="text"
                                    id="customerName"
                                    className="input"
                                    value={customerName}
                                    onChange={(e) => handleInputChange(e, setCustomerName)}
                                    required
                                />
                                <label htmlFor="customerName" className={customerName ? 'label active' : 'label'}>
                                    Enter Customer Name
                                </label>
                            </div>

                            <div className="input-field">
                                <input
                                    type="text"
                                    id="bookedAmount"
                                    className="input"
                                    value={bookedAmount}
                                    onChange={(e) => handleInputChange(e, setbookedAmount)}
                                    required
                                />
                                <label htmlFor="bookedAmount" className={bookedAmount ? 'label active' : 'label'}>
                                    Enter booked amount
                                </label>
                            </div>
                        </div>

                        {
                            radioItem === 'follow' && (
                                <div className='followCont'>

                                    <div className='LDsource'>
                                        <div className='FollowText'>Lead Source</div>
                                        <div className='greyItemCont'>
                                            <div
                                                className={`FollowGreyItem ${leadsource === 'visit' ? 'selected' : ''}`}
                                                onClick={() => handleLeadSourceClick('visit')}
                                            >
                                                visit
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${leadsource === 'cold call' ? 'selected' : ''}`}
                                                onClick={() => handleLeadSourceClick('cold call')}
                                            >
                                                cold call
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${leadsource === 'direct mail' ? 'selected' : ''}`}
                                                onClick={() => handleLeadSourceClick('direct mail')}
                                            >
                                                direct mail
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${leadsource === 'social media' ? 'selected' : ''}`}
                                                onClick={() => handleLeadSourceClick('social media')}
                                            >
                                                social media
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${leadsource === 'website' ? 'selected' : ''}`}
                                                onClick={() => handleLeadSourceClick('website')}
                                            >
                                                website
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${leadsource === 'advertisement' ? 'selected' : ''}`}
                                                onClick={() => handleLeadSourceClick('advertisement')}
                                            >
                                                advertisement
                                            </div>
                                        </div>

                                    </div>

                                    <div className='LDsource'>
                                        <div className='FollowText'>Probability Percentage</div>
                                        <div className='greyItemCont'>
                                            <div
                                                className={`FollowGreyItem ${probability === '10' ? 'selected' : ''}`}
                                                onClick={() => handleProbabilityClick('10')}
                                            >
                                                10
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${probability === '20' ? 'selected' : ''}`}
                                                onClick={() => handleProbabilityClick('20')}
                                            >
                                                20
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${probability === '30' ? 'selected' : ''}`}
                                                onClick={() => handleProbabilityClick('30')}
                                            >
                                                30
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${probability === '40' ? 'selected' : ''}`}
                                                onClick={() => handleProbabilityClick('40')}
                                            >
                                                40
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${probability === '50' ? 'selected' : ''}`}
                                                onClick={() => handleProbabilityClick('50')}
                                            >
                                                50
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${probability === '60' ? 'selected' : ''}`}
                                                onClick={() => handleProbabilityClick('60')}
                                            >
                                                60
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${probability === '70' ? 'selected' : ''}`}
                                                onClick={() => handleProbabilityClick('70')}
                                            >
                                                70
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${probability === '80' ? 'selected' : ''}`}
                                                onClick={() => handleProbabilityClick('80')}
                                            >
                                                80
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${probability === '90' ? 'selected' : ''}`}
                                                onClick={() => handleProbabilityClick('90')}
                                            >
                                                90
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${probability === '100' ? 'selected' : ''}`}
                                                onClick={() => handleProbabilityClick('100')}
                                            >
                                                100
                                            </div>
                                        </div>
                                    </div>

                                    <div className='LDsource'>
                                        <div className='FollowText'>Expected closing month</div>
                                        <div className='greyItemCont'>
                                            <div
                                                className={`FollowGreyItem ${closingMonth === 'Jan' ? 'selected' : ''}`}
                                                onClick={() => handleClosingMonthClick('Jan')}
                                            >
                                                Jan
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${closingMonth === 'Feb' ? 'selected' : ''}`}
                                                onClick={() => handleClosingMonthClick('Feb')}
                                            >
                                                Feb
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${closingMonth === 'Mar' ? 'selected' : ''}`}
                                                onClick={() => handleClosingMonthClick('Mar')}
                                            >
                                                Mar
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${closingMonth === 'Apr' ? 'selected' : ''}`}
                                                onClick={() => handleClosingMonthClick('Apr')}
                                            >
                                                Apr
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${closingMonth === 'May' ? 'selected' : ''}`}
                                                onClick={() => handleClosingMonthClick('May')}
                                            >
                                                May
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${closingMonth === 'Jun' ? 'selected' : ''}`}
                                                onClick={() => handleClosingMonthClick('Jun')}
                                            >
                                                Jun
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${closingMonth === 'Jul' ? 'selected' : ''}`}
                                                onClick={() => handleClosingMonthClick('Jul')}
                                            >
                                                Jul
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${closingMonth === 'Aug' ? 'selected' : ''}`}
                                                onClick={() => handleClosingMonthClick('Aug')}
                                            >
                                                Aug
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${closingMonth === 'Sep' ? 'selected' : ''}`}
                                                onClick={() => handleClosingMonthClick('Sep')}
                                            >
                                                Sep
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${closingMonth === 'Oct' ? 'selected' : ''}`}
                                                onClick={() => handleClosingMonthClick('Oct')}
                                            >
                                                Oct
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${closingMonth === 'Nov' ? 'selected' : ''}`}
                                                onClick={() => handleClosingMonthClick('Nov')}
                                            >
                                                Nov
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${closingMonth === 'Dec' ? 'selected' : ''}`}
                                                onClick={() => handleClosingMonthClick('Dec')}
                                            >
                                                Dec
                                            </div>
                                        </div>
                                    </div>

                                    <div className='LDsource'>
                                        <div className='FollowText'>Sales Stage</div>
                                        <div className='greyItemCont'>
                                            <div
                                                className={`FollowGreyItem ${salesStage === 'Prospecting' ? 'selected' : ''}`}
                                                onClick={() => handleSalesStageClick('Prospecting')}
                                            >
                                                Prospecting
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${salesStage === 'Lead Qualification' ? 'selected' : ''}`}
                                                onClick={() => handleSalesStageClick('Lead Qualification')}
                                            >
                                                Lead Qualification
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${salesStage === 'Demo' ? 'selected' : ''}`}
                                                onClick={() => handleSalesStageClick('Demo')}
                                            >
                                                Demo
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${salesStage === 'Proposal' ? 'selected' : ''}`}
                                                onClick={() => handleSalesStageClick('Proposal')}
                                            >
                                                Proposal
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${salesStage === 'Negotiation' ? 'selected' : ''}`}
                                                onClick={() => handleSalesStageClick('Negotiation')}
                                            >
                                                Negotiation
                                            </div>
                                        </div>
                                    </div>

                                    <div className='FollowBottInp'>
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                id="contactPerson"
                                                className="input"
                                                value={contactPerson}
                                                onChange={(e) => handleInputChange(e, setContactPerson)}
                                                required
                                            />
                                            <label htmlFor="contactPerson" className={contactPerson ? 'label active' : 'label'}>
                                                Contact Person
                                            </label>
                                        </div>

                                        <div className="input-field">
                                            <input
                                                type="tel"
                                                id="phoneNumber"
                                                className="input"
                                                value={phoneNumber}
                                                onChange={(e) => handleInputChange(e, setPhoneNumber)}
                                                required
                                            />
                                            <label htmlFor="phoneNumber" className={phoneNumber ? 'label active' : 'label'}>
                                                Phone Number
                                            </label>
                                        </div>

                                        <div className="input-field">
                                            <input
                                                type="email"
                                                id="email"
                                                className="input"
                                                value={email}
                                                onChange={(e) => handleInputChange(e, setEmail)}
                                                required
                                            />
                                            <label htmlFor="email" className={email ? 'label active' : 'label'}>
                                                Email
                                            </label>
                                        </div>
                                    </div>

                                    <div className='LeaveDateCont'>
                                        <div className='LeftDate' id='followDateDiv'>
                                            <DatePicker
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                customInput={<ExampleCustomInput />}
                                            />
                                            <div className='FromDateText' id='followDvText'>Pick Followup Date</div>
                                        </div>
                                    </div>

                                    <div className='LDsource'>
                                        <div className='FollowText'>Follow up action</div>
                                        <div className='greyItemCont'>
                                            <div
                                                className={`FollowGreyItem ${followAction === 'Call' ? 'selected' : ''}`}
                                                onClick={() => handleFollowActionClick('Call')}
                                            >
                                                Call
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${followAction === 'Email' ? 'selected' : ''}`}
                                                onClick={() => handleFollowActionClick('Email')}
                                            >
                                                Email
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${followAction === 'Whatsapp' ? 'selected' : ''}`}
                                                onClick={() => handleFollowActionClick('Whatsapp')}
                                            >
                                                Whatsapp
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${followAction === 'Visit' ? 'selected' : ''}`}
                                                onClick={() => handleFollowActionClick('Visit')}
                                            >
                                                Visit
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${followAction === 'Online meeting' ? 'selected' : ''}`}
                                                onClick={() => handleFollowActionClick('Online meeting')}
                                            >
                                                Online meeting
                                            </div>
                                        </div>
                                    </div>

                                    <div className='LDsource'>
                                        <div className='FollowText'>Follow up Stage</div>
                                        <div className='greyItemCont'>
                                            <div
                                                className={`FollowGreyItem ${followStage === 'Prospecting' ? 'selected' : ''}`}
                                                onClick={() => handleFollowStageClick('Prospecting')}
                                            >
                                                Prospecting
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${followStage === 'Lead Qualification' ? 'selected' : ''}`}
                                                onClick={() => handleFollowStageClick('Lead Qualification')}
                                            >
                                                Lead Qualification
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${followStage === 'Demo' ? 'selected' : ''}`}
                                                onClick={() => handleFollowStageClick('Demo')}
                                            >
                                                Demo
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${followStage === 'Proposal' ? 'selected' : ''}`}
                                                onClick={() => handleFollowStageClick('Proposal')}
                                            >
                                                Proposal
                                            </div>
                                            <div
                                                className={`FollowGreyItem ${followStage === 'Negotiation' ? 'selected' : ''}`}
                                                onClick={() => handleFollowStageClick('Negotiation')}
                                            >
                                                Negotiation
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        }

                        <div className='ModalButtonBox'>
                            <Button sx={{ color: 'black', backgroundColor: '#ececec' }} onClick={handleClose}>Cancel</Button>
                            <Button sx={{ color: 'white', backgroundColor: 'black' }} onClick={handleSave}>Save</Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </div >
    )
}

export default Analysis