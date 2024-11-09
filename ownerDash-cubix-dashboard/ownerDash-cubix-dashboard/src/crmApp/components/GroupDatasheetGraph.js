import React, { useEffect, useState } from 'react';
import './GroupDatasheet.css'
import Chart from "react-apexcharts";
import { RotatingLines } from 'react-loader-spinner'

const GroupDatasheetGraph = () => {


    const generateData = (count, yrange) => {
        const values = [];
        for (let i = 0; i < count; i++) {
            const x = `Month ${i + 1}`;
            const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            values.push({ x, y });
        }
        return values;
    };

    const [xData, setXData] = useState(null)
    const [yData, setYData] = useState(null)

    // const [chartData, setChartData] = useState({
    //     series: [
    //         { name: 'Metric1', data: generateData(12, { min: 0, max: 90 }) },
    //         { name: 'Metric2', data: generateData(12, { min: 0, max: 90 }) },
    //         { name: 'Metric3', data: generateData(12, { min: 0, max: 90 }) },
    //         { name: 'Metric4', data: generateData(12, { min: 0, max: 90 }) },
    //         { name: 'Metric5', data: generateData(12, { min: 0, max: 90 }) },
    //         { name: 'Metric6', data: generateData(12, { min: 0, max: 90 }) },
    //         { name: 'Metric7', data: generateData(12, { min: 0, max: 90 }) },
    //         { name: 'Metric8', data: generateData(12, { min: 0, max: 90 }) },
    //     ],
    //     options: {
    //         chart: {
    //             height: 350,
    //             type: 'heatmap',
    //         },
    //         stroke: {
    //             width: 0
    //         },
    //         plotOptions: {
    //             heatmap: {
    //                 // radius: 30,
    //                 // enableShades: false,
    //                 colorScale: {
    //                     ranges: [
    //                         { from: 0, to: 50, color: '#008FFB' },
    //                         { from: 51, to: 100, color: '#00E396' },
    //                     ],
    //                 },
    //             }
    //         },
    //         dataLabels: {
    //             enabled: true,
    //             style: {
    //                 colors: ['#fff']
    //             }
    //         },
    //         xaxis: {
    //             type: 'category',
    //             categories: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`),
    //         },
    //         title: {
    //             text: 'Rounded (Range without Shades)'
    //         },
    //     },
    // });

    // const generateLeadData = (leadCount, percentageRange) => {
    //     const leadData = {};
    //     for (let i = 1; i <= leadCount; i++) {
    //         const leadName = `Lead${i}`;
    //         leadData[leadName] = Math.floor(Math.random() * (percentageRange.max - percentageRange.min + 1)) + percentageRange.min;
    //     }
    //     return leadData;
    // };

    // const generateMonthData = (monthCount, leadCount, percentageRange) => {
    //     const data = [];
    //     for (let i = 1; i <= monthCount; i++) {
    //         const monthName = `Month ${i}`;
    //         data.push({
    //             month: monthName,
    //             data: generateLeadData(leadCount, percentageRange),
    //         });
    //     }
    //     return data;
    // };

    // const [chartData, setChartData] = useState({
    //     series: [],
    //     options: {
    //         chart: {
    //             height: 350,
    //             type: 'heatmap',
    //         },
    //         stroke: {
    //             width: 0
    //         },
    //         plotOptions: {
    //             heatmap: {
    //                 radius: 30,
    //                 enableShades: false,
    //                 colorScale: {
    //                     ranges: [
    //                         { from: 0, to: 50, color: '#008FFB' },
    //                         { from: 51, to: 100, color: '#00E396' },
    //                     ],
    //                 },
    //             }
    //         },
    //         dataLabels: {
    //             enabled: true,
    //             style: {
    //                 colors: ['#fff']
    //             }
    //         },
    //         xaxis: {
    //             type: 'category',
    //             categories: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`),
    //         },
    //         title: {
    //             text: 'Rounded (Range without Shades)'
    //         },
    //     },
    // });

    // useEffect(() => {
    //     const newSeries = generateMonthData(12, 3, { min: 0, max: 100 });

    //     setChartData({
    //         ...chartData,
    //         series: newSeries,
    //     });
    // }, []);

    // const chartData = [
    //     {
    //         name: 'Lead 1',
    //         data: [50, 60, 10, 41, 35, 51, 49, 62, 69, 91, 14, 56],
    //     },
    //     {
    //         name: 'Lead 2',
    //         data: [20, 30, 70, 31, 35, 51, 89, 42, 39, 51, 94, 26],
    //     },
    //     // {
    //     //     name: 'Lead 3',
    //     //     data: [0, 30, 70, 31, 35, 51, 89, 42, 39, 51, 94, 26],
    //     // },
    //     // Add more months as needed
    // ];

    const options1 = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            },
            events: {
                dataPointSelection: function (event, chartContext, config) {
                    const xValue = config.dataPointIndex;
                    const yValue = config.w.globals.series[config.seriesIndex][xValue];
                    const monthValue = config.w.globals.categoryLabels[xValue]
                    // console.log('Clicked Data Point:', { monthValue, yValue });

                    setXData(monthValue)
                    setYData(yValue)
                    // console.log(config.w.globals.categoryLabels[xValue], 'config')
                    openBootstrapModal()
                },
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        toolbar: {
            menuIcons: false
        },
        tooltip: {
            intersect: true, // Set to true for line/area charts
            shared: false,
        },
        markers: {
            size: 6, // Set to a value greater than 0
        },
        // Event to handle data point selection
    };
    // Function to open the Bootstrap modal
    const openBootstrapModal = () => {
        const modal = new window.bootstrap.Modal(document.getElementById('staticBackdrop'));
        modal.show();
    };

    // const handleBarClick = (event, chartContext, config) => {
    //     const monthIndex = config.dataPointIndex;
    //     const monthLeads = chartData[monthIndex].leads; // Replace with your actual data structure
    //     // Show the leads in a popup or handle as needed
    //     console.log('Leads for', chartData[monthIndex].name, monthLeads);
    // };


    const series = [
        {
            name: '0-10',
            data: [
                5, 1, 2, 4, 5, 6, 7, 1, 2, 3, 5, 6
            ],
            color: 'yellow'
        },
        {
            name: '10-20',
            data: [
                5, 1, 2, 4, 5, 6, 7, 1, 2, 3, 5, 6
            ]
        },
        {
            name: '20-30',
            data: [
                5, 1, 2, 4, 5, 6, 7, 1, 2, 3, 5, 6
            ]
        },
        {
            name: '30-40',
            data: [
                5, 1, 2, 4, 5, 6, 7, 1, 2, 3, 5, 6
            ]
        },
        {
            name: '40-50',
            data: [
                5, 1, 2, 4, 5, 6, 7, 1, 2, 3, 5, 6
            ]
        },
        {
            name: '50-60',
            data: [
                5, 1, 2, 4, 5, 6, 7, 1, 2, 3, 5, 6
            ]
        },
        {
            name: '60-70',
            data: [
                5, 1, 2, 4, 5, 6, 7, 1, 2, 3, 5, 6
            ]
        },
        {
            name: '70-80',
            data: [
                5, 1, 2, 4, 5, 6, 7, 1, 2, 3, 5, 6
            ]
        },
        {
            name: '80-90',
            data: [
                5, 1, 2, 4, 5, 6, 7, 1, 2, 3, 5, 6
            ]
        },
        {
            name: '90-100',
            data: [
                5, 1, 2, 4, 5, 6, 7, 1, 2, 3, 5, 6
            ]
        },
    ]

    const series2 = [
        {
            name: '0-10',
            data: [
                { x: 'Jan', y: 5, color: '#c9184a' },
                { x: 'Feb', y: 1, color: '#c9184a' },
                { x: 'Mar', y: 0, color: '#c9184a' },
                { x: 'Apr', y: 0, color: '#c9184a' },
                { x: 'May', y: 0, color: '#c9184a' },
                { x: 'Jun', y: 0, color: '#c9184a' },
                { x: 'Jul', y: 0, color: '#c9184a' },
                { x: 'Aug', y: 0, color: '#c9184a' },
                { x: 'Sep', y: 0, color: '#c9184a' },
                { x: 'Oct', y: 0, color: '#c9184a' },
                { x: 'Nov', y: 5, color: '#c9184a' },
                { x: 'Dec', y: 6, color: '#c9184a' },
            ],
        },
        {
            name: '10-20',
            data: [
                { x: 'Jan', y: 0 },
                { x: 'Feb', y: 0 },
                { x: 'Mar', y: 0 },
                { x: 'Apr', y: 0 },
                { x: 'May', y: 5 },
                { x: 'Jun', y: 6 },
                { x: 'Jul', y: 0 },
                { x: 'Aug', y: 1 },
                { x: 'Sep', y: 0 },
                { x: 'Oct', y: 3 },
                { x: 'Nov', y: 0 },
                { x: 'Dec', y: 6 },
            ],
        },
        {
            name: '20-30',
            data: [
                { x: 'Jan', y: 0 },
                { x: 'Feb', y: 1 },
                { x: 'Mar', y: 0 },
                { x: 'Apr', y: 4 },
                { x: 'May', y: 5 },
                { x: 'Jun', y: 0 },
                { x: 'Jul', y: 0 },
                { x: 'Aug', y: 1 },
                { x: 'Sep', y: 2 },
                { x: 'Oct', y: 3 },
                { x: 'Nov', y: 0 },
                { x: 'Dec', y: 0 },
            ]
        },
        {
            name: '30-40',
            data: [
                { x: 'Jan', y: 5 },
                { x: 'Feb', y: 1 },
                { x: 'Mar', y: 2 },
                { x: 'Apr', y: 0 },
                { x: 'May', y: 0 },
                { x: 'Jun', y: 0 },
                { x: 'Jul', y: 0 },
                { x: 'Aug', y: 0 },
                { x: 'Sep', y: 0 },
                { x: 'Oct', y: 3 },
                { x: 'Nov', y: 5 },
                { x: 'Dec', y: 6 },
            ]
        },
        {
            name: '40-50',
            data: [
                { x: 'Jan', y: 0 },
                { x: 'Feb', y: 0 },
                { x: 'Mar', y: 0 },
                { x: 'Apr', y: 0 },
                { x: 'May', y: 0 },
                { x: 'Jun', y: 0 },
                { x: 'Jul', y: 0 },
                { x: 'Aug', y: 0 },
                { x: 'Sep', y: 0 },
                { x: 'Oct', y: 3 },
                { x: 'Nov', y: 5 },
                { x: 'Dec', y: 6 },
            ]
        },
        {
            name: '50-60',
            data: [
                { x: 'Jan', y: 5 },
                { x: 'Feb', y: 1 },
                { x: 'Mar', y: 0 },
                { x: 'Apr', y: 4 },
                { x: 'May', y: 0 },
                { x: 'Jun', y: 6 },
                { x: 'Jul', y: 0 },
                { x: 'Aug', y: 1 },
                { x: 'Sep', y: 0 },
                { x: 'Oct', y: 3 },
                { x: 'Nov', y: 0 },
                { x: 'Dec', y: 6 },
            ]
        },
        {
            name: '60-70',
            data: [
                { x: 'Jan', y: 0 },
                { x: 'Feb', y: 0 },
                { x: 'Mar', y: 0 },
                { x: 'Apr', y: 0 },
                { x: 'May', y: 0 },
                { x: 'Jun', y: 6 },
                { x: 'Jul', y: 7 },
                { x: 'Aug', y: 1 },
                { x: 'Sep', y: 0 },
                { x: 'Oct', y: 0 },
                { x: 'Nov', y: 0 },
                { x: 'Dec', y: 6 },
            ]
        },
        {
            name: '70-80',
            data: [
                { x: 'Jan', y: 5 },
                { x: 'Feb', y: 1 },
                { x: 'Mar', y: 2 },
                { x: 'Apr', y: 4 },
                { x: 'May', y: 10 },
                { x: 'Jun', y: 6 },
                { x: 'Jul', y: 7 },
                { x: 'Aug', y: 0 },
                { x: 'Sep', y: 0 },
                { x: 'Oct', y: 0 },
                { x: 'Nov', y: 0 },
                { x: 'Dec', y: 6 },
            ]
        },
        {
            name: '80-90',
            data: [
                { x: 'Jan', y: 5 },
                { x: 'Feb', y: 1 },
                { x: 'Mar', y: 2 },
                { x: 'Apr', y: 0 },
                { x: 'May', y: 5 },
                { x: 'Jun', y: 6 },
                { x: 'Jul', y: 0 },
                { x: 'Aug', y: 0 },
                { x: 'Sep', y: 0 },
                { x: 'Oct', y: 0 },
                { x: 'Nov', y: 0 },
                { x: 'Dec', y: 0 },
            ]
        },
        {
            name: '90-100',
            data: [
                { x: 'Jan', y: 5 },
                { x: 'Feb', y: 0 },
                { x: 'Mar', y: 2 },
                { x: 'Apr', y: 0 },
                { x: 'May', y: 5 },
                { x: 'Jun', y: 0 },
                { x: 'Jul', y: 75 },
                { x: 'Aug', y: 0 },
                { x: 'Sep', y: 2 },
                { x: 'Oct', y: 0 },
                { x: 'Nov', y: 5 },
                { x: 'Dec', y: 6 },
            ]
        },

        // Add other ranges similarly
    ];


    // const series = generateHeatmapData();

    const options = {
        chart: {
            height: 350,
            type: 'heatmap',
            toolbar: {
                show: false,
            },
            events: {
                dataPointSelection: function (event, chartContext, config) {
                    console.log(config, 'config')
                    const xValue = config.dataPointIndex;
                    const yValue = config.w.globals.series[config.seriesIndex][xValue];
                    const monthValue = config.w.globals.labels[xValue]
                    console.log('Clicked Data Point:', { monthValue, yValue });

                    setXData(monthValue)
                    setYData(yValue)
                    // console.log(config.w.globals.categoryLabels[xValue], 'config')
                    openBootstrapModal()
                },
            },
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#fff']
            }
        },
        title: {
            text: 'HeatMap Chart (Color Ranges)',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        toolbar: {
            menuIcons: false
        },
        tooltip: {
            intersect: true, // Set to true for line/area charts
            shared: false,
        },
        markers: {
            size: 6, // Set to a value greater than 0
        },
    };

    const salesData = [
        {
            "id": 1,
            "customerName": "Ravi general trading",
            "phone": "123456789",
            "email": "info@ravitgn.com",
            "probability": 70,
            "statusChangedOn": "26-12-2023 | 3:15 PM",
            "stage": "Proposal",
            "nextFollowUpDate": "2024-01-16"
        },
        {
            "id": 2,
            "customerName": "ABC Corporation",
            "phone": "987654321",
            "email": "info@abccorp.com",
            "probability": 80,
            "statusChangedOn": "27-12-2023 | 2:30 PM",
            "stage": "Negotiation",
            "nextFollowUpDate": "2024-01-16"
        },
        {
            "id": 3,
            "customerName": "XYZ Ltd",
            "phone": "555555555",
            "email": "info@xyzltd.com",
            "probability": 60,
            "statusChangedOn": "28-12-2023 | 4:45 PM",
            "stage": "Prospecting",
            "nextFollowUpDate": "2024-01-16"
        },
        {
            "id": 4,
            "customerName": "PQR Industries",
            "phone": "999888777",
            "email": "info@pqrindustries.com",
            "probability": 90,
            "statusChangedOn": "29-12-2023 | 1:00 PM",
            "stage": "Demo",
            "nextFollowUpDate": "2024-01-16"
        },
        {
            "id": 5,
            "customerName": "LMN Enterprises",
            "phone": "111222333",
            "email": "info@lmnenterprises.com",
            "probability": 75,
            "statusChangedOn": "30-12-2023 | 5:15 PM",
            "stage": "Proposal",
            "nextFollowUpDate": "2024-01-16"
        },
        {
            "id": 6,
            "customerName": "Ravi general trading",
            "phone": "123456789",
            "email": "info@ravitgn.com",
            "probability": 70,
            "statusChangedOn": "26-12-2023 | 3:15 PM",
            "stage": "Proposal",
            "nextFollowUpDate": "2024-01-22"
        },
        {
            "id": 7,
            "customerName": "ABC Corporation",
            "phone": "987654321",
            "email": "info@abccorp.com",
            "probability": 80,
            "statusChangedOn": "27-12-2023 | 2:30 PM",
            "stage": "Negotiation",
            "nextFollowUpDate": "2024-01-22"
        },
        {
            "id": 8,
            "customerName": "XYZ Ltd",
            "phone": "555555555",
            "email": "info@xyzltd.com",
            "probability": 60,
            "statusChangedOn": "28-12-2023 | 4:45 PM",
            "stage": "Prospecting",
            "nextFollowUpDate": "2024-01-22"
        },
        {
            "id": 9,
            "customerName": "PQR Industries",
            "phone": "999888777",
            "email": "info@pqrindustries.com",
            "probability": 90,
            "statusChangedOn": "29-12-2023 | 1:00 PM",
            "stage": "Demo",
            "nextFollowUpDate": "2024-01-22"
        },
        {
            "id": 10,
            "customerName": "LMN Enterprises",
            "phone": "111222333",
            "email": "info@lmnenterprises.com",
            "probability": 75,
            "statusChangedOn": "30-12-2023 | 5:15 PM",
            "stage": "Lead Qualification",
            "nextFollowUpDate": "2024-01-18"
        },
        {
            "id": 11,
            "customerName": "LMN Enterprises",
            "phone": "111222333",
            "email": "info@lmnenterprises.com",
            "probability": 75,
            "statusChangedOn": "30-12-2023 | 5:15 PM",
            "stage": "Lead Qualification",
            "nextFollowUpDate": "2024-01-18"
        },
        {
            "id": 12,
            "customerName": "LMN Enterprises",
            "phone": "111222333",
            "email": "info@lmnenterprises.com",
            "probability": 75,
            "statusChangedOn": "30-12-2023 | 5:15 PM",
            "stage": "Lead Qualification",
            "nextFollowUpDate": "2024-01-18"
        },
        {
            "id": 13,
            "customerName": "LMN Enterprises",
            "phone": "111222333",
            "email": "info@lmnenterprises.com",
            "probability": 75,
            "statusChangedOn": "30-12-2023 | 5:15 PM",
            "stage": "Lead Qualification",
            "nextFollowUpDate": "2024-01-18"
        },
        {
            "id": 14,
            "customerName": "LMN Enterprises",
            "phone": "111222333",
            "email": "info@lmnenterprises.com",
            "probability": 75,
            "statusChangedOn": "30-12-2023 | 5:15 PM",
            "stage": "Opportunity Won",
            "nextFollowUpDate": "2024-01-17"
        },
        {
            "id": 15,
            "customerName": "LMN Enterprises",
            "phone": "111222333",
            "email": "info@lmnenterprises.com",
            "probability": 75,
            "statusChangedOn": "30-12-2023 | 5:15 PM",
            "stage": "Opportunity Won",
            "nextFollowUpDate": "2024-01-17"
        },
        {
            "id": 16,
            "customerName": "LMN Enterprises",
            "phone": "111222333",
            "email": "info@lmnenterprises.com",
            "probability": 75,
            "statusChangedOn": "30-12-2023 | 5:15 PM",
            "stage": "Opportunity Won",
            "nextFollowUpDate": "2024-01-17"
        },
        {
            "id": 17,
            "customerName": "LMN Enterprises",
            "phone": "111222333",
            "email": "info@lmnenterprises.com",
            "probability": 75,
            "statusChangedOn": "30-12-2023 | 5:15 PM",
            "stage": "Proposal",
            "nextFollowUpDate": "2024-01-17"
        },
        {
            "id": 18,
            "customerName": "LMN Enterprises",
            "phone": "111222333",
            "email": "info@lmnenterprises.com",
            "probability": 75,
            "statusChangedOn": "30-12-2023 | 5:15 PM",
            "stage": "Proposal",
            "nextFollowUpDate": "2024-01-17"
        },
        {
            "id": 19,
            "customerName": "LMN Enterprises",
            "phone": "111222333",
            "email": "info@lmnenterprises.com",
            "probability": 75,
            "statusChangedOn": "30-12-2023 | 5:15 PM",
            "stage": "Demo",
            "nextFollowUpDate": "2024-01-17"
        },
        {
            "id": 20,
            "customerName": "LMN Enterprises",
            "phone": "111222333",
            "email": "info@lmnenterprises.com",
            "probability": 75,
            "statusChangedOn": "30-12-2023 | 5:15 PM",
            "stage": "Demo",
            "nextFollowUpDate": "2024-01-17"
        },
    ]

    return (
        <>
            <div className='GroupDSGraphWrapper'>
                <div className='GrpDSHead'>Group DataSheet</div>
                <div className='GroupDSGraphCont'>
                    {/* <Chart options={options} series={series} type="line" height={300} /> */}
                    <Chart options={options} series={series2} type="heatmap" height={300} />
                </div>
            </div>

            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button> */}

            <div class="modal fade modal-lg" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Lead Details</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body grpDataModal" style={{ maxHeight: "400px", overflowY: "auto" }}>
                            {/* <div className='table-responsive'> */}
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Customer Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Probability</th>
                                        <th>Status Changed on</th>
                                        <th>Next Follow Up</th>
                                        {/* <th>Stage</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        salesData && salesData.length > 0 ? (
                                            salesData.map((item, index) => (
                                                <>
                                                    <tr key={item.id} className='mainTr'>
                                                        <td data-label='id'>{item.id}</td>
                                                        <td data-label='Customer Name'>{item.customerName}</td>
                                                        <td data-label='Phone'>{item.phone}</td>
                                                        <td data-label='Email'>{item.email}</td>
                                                        <td data-label='Probability'>{item.probability}</td>
                                                        <td data-label='Status Changed on'>{item.statusChangedOn}</td>
                                                        <td data-label='Next Follow Up'>{item.nextFollowUpDate}</td>
                                                        {/* <td data-label='Stage' className={`TS${item.stage}`}>{item.stage}</td> */}
                                                    </tr>
                                                </>
                                            ))
                                        ) : (
                                            salesData === null ? (
                                                <tr style={{ display: "flex", justifyContent: "center" }}>
                                                    <td colSpan='7'>
                                                        <RotatingLines
                                                            visible={true}
                                                            height="50"
                                                            width="50"
                                                            color="grey"
                                                            strokeWidth="5"
                                                            animationDuration="0.75"
                                                            ariaLabel="rotating-lines-loading"
                                                            wrapperStyle={{}}
                                                            wrapperClass=""
                                                        />
                                                    </td>
                                                </tr>
                                            ) : (
                                                <tr>
                                                    <td colSpan='2' style={{ color: "red", fontSize: "12px" }}>No Data Available</td>
                                                </tr>
                                            )
                                        )
                                    }
                                </tbody>
                            </table>
                            {/* </div> */}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            {/* <button type="button" class="btn btn-primary">Understood</button> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default GroupDatasheetGraph