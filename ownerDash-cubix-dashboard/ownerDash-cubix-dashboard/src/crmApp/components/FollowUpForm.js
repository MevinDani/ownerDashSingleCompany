import React, { forwardRef, useEffect, useRef, useState } from 'react'
import './FollowUpForm.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoClose } from "react-icons/io5";


const FollowUpForm = ({ handleClose }) => {
    const [customerName, setCustomerName] = useState('');
    const [bookedAmount, setbookedAmount] = useState('');
    const [leadDescription, setLeadDescription] = useState('');
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

    const [itemsArray, setItemsArray] = useState([]);
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const addItem = () => {
        if (itemName === '' && description === '' && quantity === '' && price === '') {
            return
        }
        const newItem = {
            itemName: itemName,
            description: description,
            quantity: quantity,
            price: price
        };

        // Update state to include the new item
        setItemsArray(prevItems => [...prevItems, newItem]);

        // Clear input fields for the next entry
        setItemName('');
        setDescription('');
        setQuantity('');
        setPrice('');
    };

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

    const handleSave = () => {
        if (customerName === "" && bookedAmount === "" && contactPerson === "" && phoneNumber === "" && email === "" && leadsource === "" && probability === "" && closingMonth === "" && salesStage === "" && followAction === "" && followStage === "") {
            return
        }
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

    const removeItem = (index) => {
        const updatedItemsArray = [...itemsArray];
        updatedItemsArray.splice(index, 1);
        setItemsArray(updatedItemsArray);
    };

    return (
        <div className='FollowUpFormWrapper'>
            <div className='FollowUpText' style={{ fontSize: "18px", fontWeight: "bold" }}>New Prospectus</div>
            <div className='FollowUpFormCont'>
                <div className='followCont'>

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

                        <div className="input-field">
                            <input
                                type="text"
                                id="bookedAmount"
                                className="input"
                                value={leadDescription}
                                onChange={(e) => handleInputChange(e, setLeadDescription)}
                                required
                            />
                            <label htmlFor="bookedAmount" className={leadDescription ? 'label active' : 'label'}>
                                Enter Lead Description
                            </label>
                        </div>
                    </div>

                    <p class="d-inline-flex gap-1">
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Add Items
                        </button>
                    </p>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            <div className='AddItemCont'>
                                <div>
                                    <input type="text" className="form-control" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder='item name' />
                                </div>
                                <div>
                                    <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description' />
                                </div>
                                <div>
                                    <input type="text" className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder='quantity' />
                                </div>
                                <div>
                                    <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='price' />
                                </div>
                            </div>
                            <div className='AddItemBtn'>
                                <button className='btn btn-success' onClick={addItem}>Add</button>
                            </div>
                        </div>
                    </div>

                    <div className='ItemTableCont'>
                        {
                            itemsArray && itemsArray.length > 0 && (
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Sl.No</th>
                                            <th>Item name</th>
                                            <th>Description</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            itemsArray.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{index}</td>
                                                    <td>{item.itemName}</td>
                                                    <td>{item.description}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.price}</td>
                                                    <td style={{ cursor: 'pointer' }} onClick={() => removeItem(index)}><IoClose /></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            )
                        }
                    </div>

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

                    <div className='FollowUpFormButtonBox'>
                        <div className='FFSaveButton' onClick={handleSave}>Add</div>
                        <div className='FFCloseButton' onClick={handleClose}>Close</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FollowUpForm