import React from 'react'
import './LeaveComparison.css'
import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

const LeaveComparison = () => {
    const dataArray = [
        { Month: 'Jan', Year_2022: 15, Year_2023: 5 },
        { Month: 'Feb', Year_2022: 6, Year_2023: 9 },
        { Month: 'Mar', Year_2022: 4, Year_2023: 2 },
        { Month: 'Apr', Year_2022: 5, Year_2023: 3 },
        { Month: 'May', Year_2022: 2, Year_2023: 2 },
        { Month: 'Jun', Year_2022: 4, Year_2023: 3 },
        { Month: 'Jul', Year_2022: 2, Year_2023: 6 },
        { Month: 'Aug', Year_2022: 2, Year_2023: 2 },
        { Month: 'Sep', Year_2022: 3, Year_2023: 6 },
        { Month: 'Oct', Year_2022: 12, Year_2023: 2 },
        { Month: 'Nov', Year_2022: 5, Year_2023: 8 },
        { Month: 'Dec', Year_2022: 6, Year_2023: 9 },
    ];


    return (
        <div className='LeaveComparisonWrapper'>
            <div className='LeaveCompCont'>
                <div className='LeaveCompHead'>
                    This Year/Last Year Leave Comparison
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={dataArray} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
                        <XAxis dataKey="Month" interval={0} tick={{ fontSize: 12 }} />
                        <YAxis type="number" />
                        <Tooltip />
                        <Legend />

                        <Line type="monotone" dataKey="Year_2022" name="2022" stroke="#ff7300" />

                        <Line type="monotone" dataKey="Year_2023" name="2023" stroke="#387908" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default LeaveComparison