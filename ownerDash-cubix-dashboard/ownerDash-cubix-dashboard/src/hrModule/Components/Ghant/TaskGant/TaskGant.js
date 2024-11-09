import React, { useState } from 'react'
import './TaskGant.css'
import Chart from "react-apexcharts";
import { FaAngleLeft, FaAnglesLeft, FaAngleRight, FaAnglesRight } from 'react-icons/fa6';
import { format, addMonths, subMonths, addYears, subYears } from 'date-fns';


// const series2 = [
//     {
//         name: 'Bob',
//         data: [
//             {
//                 x: 'Design',
//                 y: [
//                     new Date('2024-03-05').getTime(),
//                     new Date('2024-03-08').getTime()
//                 ]
//             },
//             {
//                 x: 'Code',
//                 y: [
//                     new Date('2019-03-02').getTime(),
//                     new Date('2019-03-05').getTime()
//                 ]
//             },
//             {
//                 x: 'Code',
//                 y: [
//                     new Date('2019-03-05').getTime(),
//                     new Date('2019-03-07').getTime()
//                 ]
//             },
//             {
//                 x: 'Test',
//                 y: [
//                     new Date('2019-03-03').getTime(),
//                     new Date('2019-03-09').getTime()
//                 ]
//             },
//             {
//                 x: 'Test',
//                 y: [
//                     new Date('2019-03-08').getTime(),
//                     new Date('2019-03-11').getTime()
//                 ]
//             },
//             {
//                 x: 'Validation',
//                 y: [
//                     new Date('2019-03-11').getTime(),
//                     new Date('2019-03-16').getTime()
//                 ]
//             },
//             {
//                 x: 'Design',
//                 y: [
//                     new Date('2019-03-01').getTime(),
//                     new Date('2019-03-03').getTime()
//                 ],
//             }
//         ]
//     },
//     {
//         name: 'Joe',
//         data: [
//             {
//                 x: 'Design',
//                 y: [
//                     new Date('2019-03-02').getTime(),
//                     new Date('2019-03-05').getTime()
//                 ]
//             },
//             {
//                 x: 'Test',
//                 y: [
//                     new Date('2019-03-06').getTime(),
//                     new Date('2019-03-16').getTime()
//                 ],
//                 goals: [
//                     {
//                         name: 'Break',
//                         value: new Date('2019-03-10').getTime(),
//                         strokeColor: '#CD2F2A'
//                     }
//                 ]
//             },
//             {
//                 x: 'Code',
//                 y: [
//                     new Date('2019-03-03').getTime(),
//                     new Date('2019-03-07').getTime()
//                 ]
//             },
//             {
//                 x: 'Deployment',
//                 y: [
//                     new Date('2019-03-20').getTime(),
//                     new Date('2019-03-22').getTime()
//                 ]
//             },
//             {
//                 x: 'Design',
//                 y: [
//                     new Date('2019-03-10').getTime(),
//                     new Date('2019-03-16').getTime()
//                 ]
//             }
//         ]
//     },
//     {
//         name: 'Dan',
//         data: [
//             {
//                 x: 'Code',
//                 y: [
//                     new Date('2019-03-10').getTime(),
//                     new Date('2019-03-17').getTime()
//                 ]
//             },
//             {
//                 x: 'Validation',
//                 y: [
//                     new Date('2019-03-05').getTime(),
//                     new Date('2019-03-09').getTime()
//                 ],
//                 goals: [
//                     {
//                         name: 'Break',
//                         value: new Date('2019-03-07').getTime(),
//                         strokeColor: '#CD2F2A'
//                     }
//                 ]
//             },
//         ]
//     }
// ]



// console.log(series, 'series')


const TaskGant = () => {

    const series1 = [{
        name: 'Design',
        data: [
            {
                x: 'Bob',
                y: [
                    new Date('2024-01-05').getTime(),
                    new Date('2024-01-08').getTime(),
                ],
            },
            {
                x: 'Joe',
                y: [
                    new Date('2024-01-02').getTime(),
                    new Date('2024-01-05').getTime(),
                ],
            },
            {
                x: 'Dan',
                y: [
                    new Date('2024-01-10').getTime(),
                    new Date('2024-01-17').getTime(),
                ],
            },
        ],
    },
    {
        name: 'Code',
        data: [
            {
                x: 'Bob',
                y: [
                    new Date('2024-01-02').getTime(),
                    new Date('2024-01-05').getTime(),
                ],
            },
            {
                x: 'Joe',
                y: [
                    new Date('2024-01-03').getTime(),
                    new Date('2024-01-07').getTime(),
                ],
            },
            // Add more data as needed
        ],
    },
    {
        name: 'Test',
        data: [
            {
                x: 'Bob',
                y: [
                    new Date('2024-01-03').getTime(),
                    new Date('2024-01-09').getTime(),
                ],
            },
            {
                x: 'Joe',
                y: [
                    new Date('2024-01-06').getTime(),
                    new Date('2024-01-16').getTime(),
                ],
            },
            {
                x: 'Dan',
                y: [
                    new Date('2024-01-05').getTime(),
                    new Date('2024-01-09').getTime(),
                ],
            },
        ],
    },
    {
        name: 'Test2',
        data: [
            {
                x: 'Bob',
                y: [
                    new Date('2024-01-03').getTime(),
                    new Date('2024-01-09').getTime(),
                ],
            },
            {
                x: 'Joe',
                y: [
                    new Date('2024-01-06').getTime(),
                    new Date('2024-01-16').getTime(),
                ],
            },
            {
                x: 'Dan',
                y: [
                    new Date('2024-01-05').getTime(),
                    new Date('2024-01-09').getTime(),
                ],
            },
        ],
    },
    {
        name: 'Design',
        data: [
            {
                x: 'Bob',
                y: [
                    new Date('2024-02-05').getTime(),
                    new Date('2024-02-08').getTime(),
                ],
            },
            {
                x: 'Joe',
                y: [
                    new Date('2024-02-02').getTime(),
                    new Date('2024-02-05').getTime(),
                ],
            },
            {
                x: 'Dan',
                y: [
                    new Date('2024-02-10').getTime(),
                    new Date('2024-02-17').getTime(),
                ],
            },
        ],
    },
    {
        name: 'Code',
        data: [
            {
                x: 'Bob',
                y: [
                    new Date('2024-02-02').getTime(),
                    new Date('2024-02-05').getTime(),
                ],
            },
            {
                x: 'Joe',
                y: [
                    new Date('2024-02-03').getTime(),
                    new Date('2024-02-07').getTime(),
                ],
            },
            // Add more data as needed
        ],
    },
    {
        name: 'Test',
        data: [
            {
                x: 'Bob',
                y: [
                    new Date('2024-02-03').getTime(),
                    new Date('2024-02-09').getTime(),
                ],
            },
            {
                x: 'Joe',
                y: [
                    new Date('2024-02-06').getTime(),
                    new Date('2024-02-16').getTime(),
                ],
            },
            {
                x: 'Dan',
                y: [
                    new Date('2024-02-05').getTime(),
                    new Date('2024-02-09').getTime(),
                ],
            },
        ],
    },
    {
        name: 'Test2',
        data: [
            {
                x: 'Bob',
                y: [
                    new Date('2024-02-03').getTime(),
                    new Date('2024-02-09').getTime(),
                ],
            },
            {
                x: 'Joe',
                y: [
                    new Date('2024-02-06').getTime(),
                    new Date('2024-02-16').getTime(),
                ],
            },
            {
                x: 'Dan',
                y: [
                    new Date('2024-02-05').getTime(),
                    new Date('2024-02-09').getTime(),
                ],
            },
        ],
    },
    // Add more tasks as needed
    {
        name: 'Design',
        data: [
            {
                x: 'Bob',
                y: [
                    new Date('2024-03-05').getTime(),
                    new Date('2024-03-08').getTime(),

                ],
            },
            {
                x: 'Joe',
                y: [
                    new Date('2024-03-02').getTime(),
                    new Date('2024-03-05').getTime(),
                ],
            },
            {
                x: 'Dan',
                y: [
                    new Date('2024-03-10').getTime(),
                    new Date('2024-03-17').getTime(),
                ],
            },
        ],
    },
    {
        name: 'Code',
        data: [
            {
                x: 'Bob',
                y: [
                    new Date('2024-03-02').getTime(),
                    new Date('2024-03-05').getTime(),
                ],
            },
            {
                x: 'Joe',
                y: [
                    new Date('2024-03-03').getTime(),
                    new Date('2024-03-07').getTime(),
                ],
            },
            // Add more data as needed
        ],
    },
    {
        name: 'Test',
        data: [
            {
                x: 'Bob',
                y: [
                    new Date('2024-03-03').getTime(),
                    new Date('2024-03-09').getTime(),
                ],
            },
            {
                x: 'Joe',
                y: [
                    new Date('2024-03-06').getTime(),
                    new Date('2024-03-16').getTime(),
                ],
            },
            {
                x: 'Dan',
                y: [
                    new Date('2024-03-05').getTime(),
                    new Date('2024-03-09').getTime(),
                ],
            },
        ],
    },
    {
        name: 'Test2',
        data: [
            {
                x: 'Bob',
                y: [
                    new Date('2024-03-03').getTime(),
                    new Date('2024-03-09').getTime(),
                ],
            },
            {
                x: 'Joe',
                y: [
                    new Date('2024-03-06').getTime(),
                    new Date('2024-03-16').getTime(),
                ],
            },
            {
                x: 'Dan',
                y: [
                    new Date('2024-03-05').getTime(),
                    new Date('2024-03-09').getTime(),
                ],
            },
        ],
    },


    {
        name: 'Design',
        data: [
            {
                x: 'Bob',
                y: [
                    new Date('2024-04-05').getTime(),
                    new Date('2024-04-08').getTime(),
                ],
            },
            {
                x: 'Joe',
                y: [
                    new Date('2024-04-02').getTime(),
                    new Date('2024-04-05').getTime(),
                ],
            },
            {
                x: 'Dan',
                y: [
                    new Date('2024-04-10').getTime(),
                    new Date('2024-04-17').getTime(),
                ],
            },
        ],
    },
    {
        name: 'Code',
        data: [
            {
                x: 'Bob',
                y: [
                    new Date('2024-04-02').getTime(),
                    new Date('2024-04-05').getTime(),
                ],
            },
            {
                x: 'Joe',
                y: [
                    new Date('2024-04-03').getTime(),
                    new Date('2024-04-07').getTime(),
                ],
            },
            // Add more data as needed
        ],
    },
    {
        name: 'Test',
        data: [
            {
                x: 'Bob',
                y: [
                    new Date('2024-04-03').getTime(),
                    new Date('2024-04-09').getTime(),
                ],
            },
            {
                x: 'Joe',
                y: [
                    new Date('2024-04-06').getTime(),
                    new Date('2024-04-16').getTime(),
                ],
            },
            {
                x: 'Dan',
                y: [
                    new Date('2024-04-05').getTime(),
                    new Date('2024-04-09').getTime(),
                ],
            },
        ],
    },
    {
        name: 'Test2',
        data: [
            {
                x: 'Bob',
                y: [
                    new Date('2024-04-03').getTime(),
                    new Date('2024-04-09').getTime(),
                ],
            },
            {
                x: 'Joe',
                y: [
                    new Date('2024-04-06').getTime(),
                    new Date('2024-04-16').getTime(),
                ],
            },
            {
                x: 'Dan',
                y: [
                    new Date('2024-04-05').getTime(),
                    new Date('2024-04-09').getTime(),
                ],
            },
        ],
    },

    ];

    const [currentDate, setCurrentDate] = useState(new Date());

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

    // Assuming `series1` is your original series data

    // Use a Set to keep track of unique names
    const uniqueLegends = new Set();

    // Loop through the original series data
    const filteredSeries1 = series1.map((item) => {
        // Add the name to the set (it won't add duplicates)
        uniqueLegends.add(item.name);

        // Filter the data based on the current month
        const filteredData = item.data.filter((dataItem) => {
            const [startTimestamp, endTimestamp] = dataItem.y;
            const startDate = new Date(startTimestamp);
            const endDate = new Date(endTimestamp);

            const isStartInCurrentMonth = startDate.getMonth() === currentDate.getMonth();
            const isEndInCurrentMonth = endDate.getMonth() === currentDate.getMonth();

            return isStartInCurrentMonth || isEndInCurrentMonth;
        });

        // Return an object with filtered data
        return {
            name: item.name,
            data: filteredData,
        };
    });

    const filteredSeries2 = series1.map((item) => {
        // Add the name to the set (it won't add duplicates)
        uniqueLegends.add(item.name);

        // Filter the data based on the current month and year
        const filteredData = item.data.filter((dataItem) => {
            const [startTimestamp, endTimestamp] = dataItem.y;
            const startDate = new Date(startTimestamp);
            const endDate = new Date(endTimestamp);

            const isStartInCurrentMonth = startDate.getMonth() === currentDate.getMonth();
            const isEndInCurrentMonth = endDate.getMonth() === currentDate.getMonth();
            const isStartInCurrentYear = startDate.getFullYear() === currentDate.getFullYear();
            const isEndInCurrentYear = endDate.getFullYear() === currentDate.getFullYear();

            return (isStartInCurrentYear && isStartInCurrentMonth) || (isEndInCurrentYear && isEndInCurrentMonth);
        });

        // Return an object with filtered data
        return {
            name: item.name,
            data: filteredData,
        };
    });

    const filteredSeries = series1.map((item) => {
        // Add the name to the set (it won't add duplicates)
        uniqueLegends.add(item.name);

        // Filter the data based on the current month and year
        const filteredData = item.data.filter((dataItem) => {
            const [startTimestamp, endTimestamp] = dataItem.y;
            const startDate = new Date(startTimestamp);
            const endDate = new Date(endTimestamp);

            const isStartInCurrentMonth = startDate.getMonth() === currentDate.getMonth();
            const isEndInCurrentMonth = endDate.getMonth() === currentDate.getMonth();
            const isStartInCurrentYear = startDate.getFullYear() === currentDate.getFullYear();
            const isEndInCurrentYear = endDate.getFullYear() === currentDate.getFullYear();

            return (isStartInCurrentYear && isStartInCurrentMonth) || (isEndInCurrentYear && isEndInCurrentMonth);
        });

        // Check if the filteredData array is not empty
        if (filteredData.length > 0) {
            // Return an object with filtered data
            return {
                name: item.name,
                data: filteredData,
            };
        }

        return null; // If data is empty, return null
    }).filter(Boolean); // Remove null entries

    // Now, filteredSeries only contains objects with non-empty data arrays



    // Convert the Set to an array to get unique legends
    const uniqueLegendsArray = Array.from(uniqueLegends);

    // Define an array of color shades
    const colorShades = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12'];

    // Assuming uniqueLegends is your array of unique legends
    const customLegendItems = uniqueLegendsArray.map((legend, index) => ({
        name: legend,
        marker: {
            fillColors: colorShades[index % colorShades.length], // Use color shades in a cyclic manner
        },
    }));

    // console.log(customLegendItems, 'customLegendItems')

    // console.log(filteredSeries, 'filteredSeries')

    // const getRandomDate = () => {
    //     const currentDate = new Date();
    //     const currentMonth = currentDate.getMonth();
    //     const randomDay = Math.floor(Math.random() * 28) + 1; // Assuming a maximum of 28 days in a month

    //     return new Date(currentDate.getFullYear(), currentMonth, randomDay);
    // };
    // const generateRandomData = (taskCount, userCount) => {
    //     const users = Array.from({ length: userCount }, (_, index) => `User ${index + 1}`);

    //     return Array.from({ length: taskCount }, (_, taskIndex) => {
    //         const taskName = `Task ${taskIndex + 1}`;

    //         return {
    //             name: taskName,
    //             data: users.map((user) => ({
    //                 x: user,
    //                 y: [
    //                     getRandomDate().getTime(),
    //                     getRandomDate().getTime(),
    //                 ],
    //             })),
    //         };
    //     });
    // };

    // const getRandomDate2 = () => {
    //     const currentDate = new Date();
    //     const currentMonth = currentDate.getMonth();
    //     const randomDay1 = Math.floor(Math.random() * 28) + 1;
    //     const randomDay2 = Math.floor(Math.random() * 28) + 1;

    //     const startDate = new Date(currentDate.getFullYear(), currentMonth, randomDay1);
    //     const endDate = new Date(currentDate.getFullYear(), currentMonth, randomDay2);

    //     return { start: startDate.getTime(), end: endDate.getTime() };
    // };


    // const generateRandomData2 = (taskCount, userCount) => {
    //     const users = Array.from({ length: userCount }, (_, index) => `User ${index + 1}`);

    //     return Array.from({ length: taskCount }, (_, taskIndex) => {
    //         const taskName = `Task ${taskIndex + 1}`;

    //         return {
    //             name: taskName,
    //             data: users.map((user) => ({
    //                 x: user,
    //                 y: getRandomDate(),
    //             })),
    //         };
    //     });
    // };



    // const series = generateRandomData(3, 5);

    const options = {
        chart: {
            height: 450,
            type: 'rangeBar',
            toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 0,
                tools: {
                    download: false,
                    selection: false,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: false,
                },
                autoSelected: 'pan',
                position: 'left',
            },
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '80%'
            }
        },
        xaxis: {
            type: 'datetime'
        },
        stroke: {
            width: 1
        },
        fill: {
            type: 'solid',
            opacity: 0.6
        },
        legend: {
            show: true,
            position: 'top',
            // customLegendItems
        }
    }

    // console.log('Unique Legends:', uniqueLegendsArray);

    // console.log(filteredSeries, 'filteredSeries'))

    return (
        <div className='TaskGantChart' style={{ backgroundColor: "white" }}>
            <div className='TaskghantDateChangerCont'>
                <div style={{ margin: "2px 8px" }}>Task Chart</div>

                {/* <div className='LegendUi'>
                    {
                        customLegendItems && customLegendItems.length > 0 && (
                            customLegendItems.map((item, index) => (
                                <div key={index} className='LegendItem' style={{ backgroundColor: item.marker.fillColors }}>
                                    {item.name}
                                </div>
                            ))
                        )
                    }
                </div> */}
                <div className='DateChangeCont'>
                    <div onClick={decreaseYear}><FaAnglesLeft /></div>
                    <div onClick={decreaseMonth}><FaAngleLeft /></div>
                    <div className='AOYear'>{monthYearString}</div>
                    <div onClick={increaseMonth}><FaAngleRight /></div>
                    <div onClick={increaseYear}><FaAnglesRight /></div>
                </div>
            </div>
            <Chart options={options} series={filteredSeries} type="rangeBar" height={300} />
        </div>
    )
}

export default TaskGant