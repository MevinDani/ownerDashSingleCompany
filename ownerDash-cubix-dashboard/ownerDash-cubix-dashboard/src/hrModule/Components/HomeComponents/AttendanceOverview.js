import React, { useEffect, useState } from 'react'
import './AttendanceOverview.css'
import Chart from "react-apexcharts";

const AttendanceOverview = () => {

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const getRandomData = () => {
        return Array.from({ length: 31 }, () => Math.floor(Math.random() * 100) + 1);
    };

    const series = [
        {
            name: 'Leave',
            data: getRandomData()
        },
        {
            name: 'Present',
            data: getRandomData()
        },
        {
            name: 'Absent',
            data: getRandomData()
        }
    ];

    // Now, the series array is filled with random data for 31 days for each category.


    const options = {
        chart: {
            type: 'bar',
            height: 450,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 8,
            colors: ['transparent']
        },
        xaxis: {
            categories: days,
        },
        yaxis: {
            title: {
                text: 'Number'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " Employee";
                }
            }
        },
        toolbar: {
            menuIcons: false  // Set to false to hide the menu items
        }
    };

    const [chartWidth, setChartWidth] = useState(800);

    useEffect(() => {
        const handleResize = () => {
            // Adjust the width based on screen size
            setChartWidth(window.innerWidth < 500 ? 800 : 800);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial call to set the width
        handleResize();

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className='AttendanceOverWrapper'>

            <div className='AttendanceOverCont'>
                <div className='AttendanceOverHead'>
                    <div>Attendance OverView</div>
                    <div className='AOYear'>JAN</div>
                </div>
                <div className='ChartOuter'><Chart options={options} series={series} type="bar" height={300} width={chartWidth} /></div>
            </div>
        </div>
    )
}

export default AttendanceOverview