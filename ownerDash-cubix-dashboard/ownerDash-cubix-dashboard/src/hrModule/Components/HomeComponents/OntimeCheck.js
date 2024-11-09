import React from 'react'
import './OntimeCheck.css'
import Chart from "react-apexcharts";

const OntimeCheck = () => {

    // Assuming check-in time is constant at 9 o'clock
    const checkInTime = 9;

    // Get current date to dynamically generate x-axis categories
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const daysInMonth = new Date(currentDate.getFullYear(), currentMonth + 1, 0).getDate();

    // Generate x-axis categories for the current month
    const xAxisCategories = Array.from({ length: daysInMonth }, (_, i) =>
        `${currentDate.getFullYear()}-${currentMonth + 1}-${i + 1}`
    );

    // Generate random data for demonstration
    const lateEmployees = Array.from({ length: daysInMonth }, () => Math.floor(Math.random() * 6) + 1);
    const earlyEmployees = Array.from({ length: daysInMonth }, () => Math.floor(Math.random() * 6) + 1);

    const state2 = {
        series: [
            {
                name: 'Late Employees',
                data: lateEmployees.map(count => -count), // Negative for late employees
            },
            {
                name: 'Early Employees',
                data: earlyEmployees,
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    columnWidth: '80%',
                },
            },
            dataLabels: {
                enabled: false,
            },
            yaxis: {
                title: {
                    text: 'Number of Employees',
                },
            },
            xaxis: {
                type: 'category', // Change type to 'category' for days
                categories: xAxisCategories.map(date => new Date(date).getDate()), // Extract only the day
                labels: {
                    rotate: -45, // Adjust rotation if needed
                    formatter: function (value) {
                        return value; // Display the day
                    },
                },
            },
            tooltip: {
                shared: true,
                intersect: false, // Disable intersect
                custom: ({ series, seriesIndex, dataPointIndex, w }) => {
                    const lateCount = -state.series[0].data[dataPointIndex];
                    const earlyCount = state.series[1].data[dataPointIndex];
                    return (
                        '<div class="custom-tooltip">' +
                        '<div class="tooltip-header">' + xAxisCategories[dataPointIndex] + '</div>' +
                        '<div class="tooltip-content">' +
                        '<div class="tooltip-item">Late: <span class="tooltip-count">' + lateCount + '</span> employees</div>' +
                        '<div class="tooltip-item">Early: <span class="tooltip-count">' + earlyCount + '</span> employees</div>' +
                        '</div>' +
                        '</div>'
                    );
                },
            },
        },
    };

    const state = {
        series: [
            {
                name: 'Late Employees',
                data: lateEmployees.map(count => count), // Use actual late minutes
            },
            {
                name: 'Early Employees',
                data: earlyEmployees.map(count => -count), // Use actual early minutes
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    columnWidth: '80%',
                },
            },
            dataLabels: {
                enabled: false,
            },
            yaxis: {
                title: {
                    text: 'Minutes',
                },
                min: -10, // Adjust based on your data
                max: 10,  // Adjust based on your data
            },
            xaxis: {
                type: 'category', // Change type to 'category' for days
                categories: xAxisCategories.map(date => new Date(date).getDate()), // Extract only the day
                labels: {
                    rotate: -45, // Adjust rotation if needed
                    formatter: function (value) {
                        return value; // Display the day
                    },
                },
            },
            tooltip: {
                shared: true,
                intersect: false, // Disable intersect
                custom: ({ series, seriesIndex, dataPointIndex, w }) => {
                    const lateCount = state.series[0].data[dataPointIndex]; // Actual late minutes
                    const earlyCount = -state.series[1].data[dataPointIndex]; // Actual early minutes
                    const numberOfLateEmployees = Math.round(lateCount / 5); // Convert to number of employees
                    const numberOfEarlyEmployees = Math.round(earlyCount / 5); // Convert to number of employees
                    return (
                        '<div class="custom-tooltip">' +
                        '<div class="tooltip-header">' + xAxisCategories[dataPointIndex] + '</div>' +
                        '<div class="tooltip-content">' +
                        `<div class="tooltip-item">Late: <span class="tooltip-count">${lateCount} minutes</span>, ${numberOfLateEmployees} employees</div>` +
                        `<div class="tooltip-item">Early: <span class="tooltip-count">${earlyCount} minutes</span>, ${numberOfEarlyEmployees} employees</div>` +
                        '</div>' +
                        '</div>'
                    );
                },
            },
            annotations: {
                points: [
                    {
                        x: 'Instance 2',
                        y: 9.5, // Use actual late minutes
                        marker: {
                            size: 8,
                            fillColor: '#00e676',
                            strokeWidth: 0,
                        },
                        label: {
                            borderColor: '#00e676',
                            offsetY: 0,
                            style: {
                                color: '#fff',
                                background: '#00e676',
                            },
                            text: 'Early Arrival',
                        },
                    },
                    {
                        x: 'Instance 3',
                        y: 8.8, // Use actual early minutes
                        marker: {
                            size: 8,
                            fillColor: '#ff1744',
                            strokeWidth: 0,
                        },
                        label: {
                            borderColor: '#ff1744',
                            offsetY: 0,
                            style: {
                                color: '#fff',
                                background: '#ff1744',
                            },
                            text: 'Late Arrival',
                        },
                    },
                ],
            },
        },
    };

    const state1 = {
        series: [
            {
                name: 'Late Employees',
                data: lateEmployees.map(count => -count), // Negative for late employees
            },
            {
                name: 'Early Employees',
                data: earlyEmployees,
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    columnWidth: '80%',
                },
            },
            dataLabels: {
                enabled: false,
            },
            yaxis: {
                title: {
                    text: 'Number of Employees',
                },
            },
            xaxis: {
                type: 'category', // Change type to 'category' for days
                categories: xAxisCategories.map(date => new Date(date).getDate()), // Extract only the day
                labels: {
                    rotate: -45, // Adjust rotation if needed
                    formatter: function (value) {
                        return value; // Display the day
                    },
                },
            },
            tooltip: {
                shared: true,
                intersect: false, // Disable intersect
                custom: ({ series, seriesIndex, dataPointIndex, w }) => {
                    const lateCount = -state.series[0].data[dataPointIndex];
                    const earlyCount = state.series[1].data[dataPointIndex];
                    return (
                        '<div class="custom-tooltip">' +
                        '<div class="tooltip-header">' + xAxisCategories[dataPointIndex] + '</div>' +
                        '<div class="tooltip-content">' +
                        '<div class="tooltip-item">Late: <span class="tooltip-count">' + lateCount + '</span> employees</div>' +
                        '<div class="tooltip-item">Early: <span class="tooltip-count">' + earlyCount + '</span> employees</div>' +
                        '</div>' +
                        '</div>'
                    );
                },
            },
            annotations: {
                points: [
                    {
                        x: 'Instance 2',
                        y: 9.5,
                        marker: {
                            size: 8,
                            fillColor: '#00e676',
                            strokeWidth: 0,
                        },
                        label: {
                            borderColor: '#00e676',
                            offsetY: 0,
                            style: {
                                color: '#fff',
                                background: '#00e676',
                            },
                            text: 'Early Arrival',
                        },
                    },
                    {
                        x: 'Instance 3',
                        y: 8.8,
                        marker: {
                            size: 8,
                            fillColor: '#ff1744',
                            strokeWidth: 0,
                        },
                        label: {
                            borderColor: '#ff1744',
                            offsetY: 0,
                            style: {
                                color: '#fff',
                                background: '#ff1744',
                            },
                            text: 'Late Arrival',
                        },
                    },
                ],
            },
        },
    };


    return (
        <div className='OntimeCheckWrapper'>

            <div className='OntimeCheckCont'>
                <div className='OntimeCheckHead'>
                    <div>On time Check In</div>
                    <div className='OntimeDateCont'>Dec</div>
                </div>
                <Chart options={state.options} series={state.series} type="bar" height={300} />
            </div>
        </div >
    )
}

export default OntimeCheck