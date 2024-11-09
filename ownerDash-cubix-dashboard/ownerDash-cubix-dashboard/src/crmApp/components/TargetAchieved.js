import React, { useEffect, useState } from 'react'
import './TargetAchieved.css'
import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import { FaAngleLeft, FaAnglesLeft, FaAngleRight, FaAnglesRight } from 'react-icons/fa6';
import { format, addMonths, subMonths, addYears, subYears } from 'date-fns';

const TargetAchieved = ({ staffData, showGraph }) => {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedEmployee, setSelectedEmployee] = useState('')

    const data = [
        { Day: 1, Target: 50000, Achieved: 15000, Collection: 12000 },
        { Day: 2, Target: 50000, Achieved: 18000, Collection: 15000 },
        // ... (continue for each day of the month)
    ];

    // Assuming you have 31 days in January, adjust the loop accordingly
    for (let i = 3; i <= 31; i++) {
        data.push({ Day: i, Target: 50000, Achieved: getRandomInt(20000, 50000), Collection: getRandomInt(10000, 30000) });
    }

    // Function to get a random integer between min and max (inclusive)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const decreaseMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
    };

    const increaseMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    };

    const decreaseYear = () => {
        setCurrentDate(subYears(currentDate, 1));
    };

    const increaseYear = () => {
        setCurrentDate(addYears(currentDate, 1));
    };

    const monthYearString = format(currentDate, 'MMM yyyy');

    const handleEmployeeSelection = (employeeName) => {
        setSelectedEmployee(employeeName);
        // You can perform additional actions based on the selected employee if needed
    };


    // console.log(data, 'data')

    return (
        <div className='AttendanceOverWrapper'>

            <div className='AttendanceOverCont'>
                <div className='AttendanceOverHead'>
                    <div>Target vs Achieved vs Collection</div>
                    <div className='DateChangeCont'>
                        <div onClick={decreaseYear}><FaAnglesLeft /></div>
                        <div onClick={decreaseMonth}><FaAngleLeft /></div>
                        <div className='AOYear'>{monthYearString}</div>
                        <div onClick={increaseMonth}><FaAngleRight /></div>
                        <div onClick={increaseYear}><FaAnglesRight /></div>
                    </div>
                </div>
                {
                    staffData &&
                    <div class="dropdown TACDrop">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Staff
                        </button>
                        <ul class="dropdown-menu">
                            <li><a className="dropdown-item" onClick={() => handleEmployeeSelection('John Doe')}>John Doe</a></li>
                            <li><a className="dropdown-item" onClick={() => handleEmployeeSelection('Jane Smith')}>Jane Smith</a></li>
                            <li><a className="dropdown-item" onClick={() => handleEmployeeSelection('David Johnson')}>David Johnson</a></li>
                            <li><a className="dropdown-item" onClick={() => handleEmployeeSelection('Alice Brown')}>Alice Brown</a></li>
                            <li><a className="dropdown-item" onClick={() => handleEmployeeSelection('Bob Wilson')}>Bob Wilson</a></li>
                        </ul>
                    </div>
                }
                {/* {
                    staffData &&
                    <div className='TACDrop'>
                        <label htmlFor="TACDropSelect">Select Staff</label>
                        <select class="form-select" aria-label="Default select example" id='TACDropSelect'>
                            <option selected>John Doe</option>
                            <option value="1">Jane Smith</option>
                            <option value="2">David Johnson</option>
                            <option value="3">Alice Brown</option>
                            <option value="3">Bob Wilson</option>
                        </select>
                    </div>
                } */}


                <div className='LineChartCont'>
                    {/* <ResponsiveContainer width={800} height={300}> */}
                    {
                        selectedEmployee !== '' && staffData &&
                        <LineChart LineChart width={800} height={300} data={data} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
                            <XAxis dataKey="Day" interval={0} tick={{ fontSize: 12 }} />
                            <YAxis type="number" />
                            <Tooltip />
                            <Legend />

                            <Line type="monotone" dataKey="Target" name="Target" stroke="#ff7300" />
                            <Line type="monotone" dataKey="Achieved" name="Achieved" stroke="#387908" />
                            <Line type="monotone" dataKey="Collection" name="Collection" stroke="#007bff" />
                        </LineChart>
                    }
                    {
                        showGraph &&
                        <LineChart LineChart width={800} height={300} data={data} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
                            <XAxis dataKey="Day" interval={0} tick={{ fontSize: 12 }} />
                            <YAxis type="number" />
                            <Tooltip />
                            <Legend />

                            <Line type="monotone" dataKey="Target" name="Target" stroke="#ff7300" />
                            <Line type="monotone" dataKey="Achieved" name="Achieved" stroke="#387908" />
                            <Line type="monotone" dataKey="Collection" name="Collection" stroke="#007bff" />
                        </LineChart>
                    }
                    {/* </ResponsiveContainer> */}
                </div>

                {/* <div className='ChartOuter'><Chart options={options} series={series} type="bar" height={300} width={chartWidth} /></div> */}
            </div>
        </div >
    )

}

export default TargetAchieved