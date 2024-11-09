import React, { useRef, useState, forwardRef } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Leave.css'

const Leave = () => {
    const [leaveReason, setLeaveReason] = useState('');
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());

    const [startDate, setStartDate] = useState(new Date());

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="example-custom-input" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    const datePickerRef = useRef(null);


    return (
        <div className='LeaveWrapper'>

            <div className='LeaveCont'>

                <div className='ExpenseText'>Leave Request</div>

                <div className="input-container">
                    <div className="input-field">
                        <input
                            type="text"
                            id="leaveReason"
                            className="input"
                            value={leaveReason}
                            onChange={(e) => handleInputChange(e, setLeaveReason)}
                            required
                        />
                        <label htmlFor="leaveReason" className={leaveReason ? 'label active' : 'label'}>
                            Enter Reason
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

                <div className='TaskSaveBtton' id='leaveSave'>
                    <div className='save-button'>
                        Save
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Leave