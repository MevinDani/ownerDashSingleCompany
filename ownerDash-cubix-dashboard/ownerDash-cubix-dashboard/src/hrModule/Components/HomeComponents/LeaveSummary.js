import React from 'react'
import './LeaveSummary.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const LeaveSummary = () => {

    const data = {
        labels: ['Holiday(Taken to Date)', 'Holiday(Remaining)', 'TOIL(Remaining)'],
        datasets: [
            {
                data: [3, 40, 30], // Adjust the data values according to your needs
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    const options = {
        cutoutPercentage: 50, // Adjust the cutout percentage to create a donut chart
    };

    return (
        <div className='LeaveSummaryWrapper'>

            <div style={{ fontSize: "14px", textAlign: "center", color: "#1603ff" }}>My Leave Summary</div>
            <div className='LeaveSummaryCont'>
                <Doughnut data={data} options={options} />
            </div>
        </div>
    )
}

export default LeaveSummary