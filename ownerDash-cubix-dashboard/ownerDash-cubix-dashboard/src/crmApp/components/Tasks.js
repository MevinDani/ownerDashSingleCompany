import React, { useState } from 'react'
import './Tasks.css'
import { BsArrowRightCircle } from "react-icons/bs";

const Tasks = () => {
    const [customerName, setCustomerName] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    console.log(customerName, contactPerson, phoneNumber, email)

    return (
        <div className='TaskWrapper'>

            <div className='TaskHead'>
                <div className='TaskForMe'>
                    <span> Assigned tasks for me </span><BsArrowRightCircle id='arrowRight' />
                </div>
            </div>

            <div className='TaskFormCont'>

                <div className='TaskCont'>
                    <div className='CreateTask'>
                        Create Task
                    </div>
                    <div className='TaskRadio'>
                        <div>
                            <input type="radio" id="test1" name="radio-group" />
                            <label for="test1">Sales Visit</label>
                        </div>
                        <div>
                            <input type="radio" id="test2" name="radio-group" />
                            <label for="test2">Cold Call</label>
                        </div>
                        <div>
                            <input type="radio" id="test3" name="radio-group" />
                            <label for="test3">Office Meeting</label>
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
                                Customer Name
                            </label>
                        </div>

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

                    <div className='TaskSaveBtton'>
                        <div className='save-button'>
                            Save
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks