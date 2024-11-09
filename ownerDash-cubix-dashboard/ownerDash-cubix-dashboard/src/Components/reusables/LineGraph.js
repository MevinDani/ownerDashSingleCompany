
// import { LineChart } from "@mui/x-charts/LineChart";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "./LineGraph.css";
import { LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line, ResponsiveContainer, Legend } from 'recharts';
import { FaSortDown } from "react-icons/fa";
import { RotatingLines } from 'react-loader-spinner'
import useIntersectionObserver from "../../intrsection/useIntersectionObserver";


const LineGraph = () => {

    const [apiData, setApiData] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const [year, setYear] = useState(2023)
    const [showReload, setShowReload] = useState(false)

    const selectedCompanyString = localStorage.getItem("selectedCompany");

    const selectedCompany = JSON.parse(selectedCompanyString);

    const cmpcode = selectedCompany.cmpcode;
    const publick = selectedCompany.publick;
    const privatek = selectedCompany.privatek;
    const [selectedYear, setSelectedYear] = useState('');

    // Helper function to get month name
    const getMonthName = (monthNumber) => {
        const monthNames = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        return monthNames[monthNumber - 1];
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }


    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const transformedData2 = [
        { "Year": 2023, "Month": "Jan", "SALE_AMT": 658220.87 },
        { "Year": 2023, "Month": "Feb", "SALE_AMT": 831992.70 },
        { "Year": 2023, "Month": "Mar", "SALE_AMT": 662382.78 },
        { "Year": 2023, "Month": "Apr", "SALE_AMT": 618277.35 },
        { "Year": 2023, "Month": "May", "SALE_AMT": 919764.09 },
        { "Year": 2023, "Month": "Jun", "SALE_AMT": 927832.17 },
        { "Year": 2023, "Month": "Jul", "SALE_AMT": 982353.58 },
        { "Year": 2023, "Month": "Aug", "SALE_AMT": 979768.08 },
        { "Year": 2023, "Month": "Sep", "SALE_AMT": 988368.59 },
        { "Year": 2023, "Month": "Oct", "SALE_AMT": 1207269.94 },
        { "Year": 2023, "Month": "Nov", "SALE_AMT": 1260442.01 },
        { "Year": 2023, "Month": "Dec", "SALE_AMT": 881892.05 },
        { "Year": 2024, "Month": "Jan", "SALE_AMT": 881892.05 },
        { "Year": 2024, "Month": "Feb", "SALE_AMT": 555555.05 },
        { "Year": 2024, "Month": "Mar", "SALE_AMT": 666555.78 },
        { "Year": 2024, "Month": "Apr", "SALE_AMT": 485555.35 },
        { "Year": 2024, "Month": "May", "SALE_AMT": 124588.09 },

        // Add other years as needed
    ];

    // const transformedData = apiData && apiData.map(item => ({
    //     Year: item.Year,
    //     Month: monthNames[item.Month - 1],
    //     SALE_AMT: item.SALE_AMT
    // })); old api

    // console.log(apiData && apiData)
    const transformedData = apiData && apiData.map(item => ({
        Year: item.Year,
        Month: monthNames[item.Month - 1], // Adjust the index since months are 1-based
        SALE_AMT: item.Column1
    }));



    const years = transformedData && [...new Set(transformedData.map(item => item.Year))];

    // console.log(transformedData, 'transformedData')

    const transformedData3 = transformedData?.reduce((acc, item) => {
        const { Year, Month, SALE_AMT } = item;

        // Create a key for the month (e.g., "Jan")
        const monthKey = Month;

        // Initialize an object for the month if it doesn't exist
        if (!acc[monthKey]) {
            acc[monthKey] = {};
        }

        // Add the sales data for the current year
        acc[monthKey][`Year_${Year}`] = SALE_AMT;

        return acc;
    }, {});

    // console.log(transformedData3, 'transformedData3')


    // Convert the transformed data back to an array for plotting
    const dataArray = transformedData3 && Object.entries(transformedData3).map(([Month, salesData]) => ({
        Month,
        ...salesData,
    }));

    // const transformedData3 = transformedData?.reduce((acc, item) => {
    //     const { Year, Month, SALE_AMT } = item;

    //     // Create a key for the month (e.g., "Jan")
    //     const monthKey = Month;

    //     // Initialize an object for the month if it doesn't exist
    //     if (!acc[monthKey]) {
    //         // Initialize all years for this month with 0 SALE_AMT
    //         acc[monthKey] = Object.fromEntries(years.map(year => [`Year_${year}`, 0]));
    //     }

    //     // Add the sales data for the current year
    //     acc[monthKey][`Year_${Year}`] = SALE_AMT;

    //     return acc;
    // }, {});

    // // Convert the transformed data back to an array for plotting
    // const dataArray = transformedData3 && Object.entries(transformedData3).map(([Month, salesData]) => ({
    //     Month,
    //     ...salesData,
    // }));

    // Reorder the dataArray to start from January and end with December
    const orderedDataArray = dataArray && monthNames.map(month => dataArray.find(item => item.Month === month));

    // Filter out any undefined entries
    const finalDataArray = orderedDataArray && orderedDataArray.filter(item => item !== undefined);

    // console.log(finalDataArray, 'final')

    // Now finalDataArray contains data starting from January and ending with December



    // Define a set of colors for each year
    const yearColors = {};

    // Define a set of colors for each year
    // const yearColors2 = ['#ff7300', '#387908', '#ff0000', '#00ff00', '#0000ff'];

    const yearColors2 = ['#ff7300', '#387908', '#ff0000', '#00ff00', '#0000ff', '#ff00ff'];
    // const yearColors2 = ['#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FF5722', '#673AB7'];



    // Function to generate colors dynamically
    const generateYearColors = (years, baseColors) => {
        years.forEach((year, index) => {
            yearColors[year] = baseColors[index % baseColors.length];
        });
    };

    // Assuming 'transformedData' is an array of objects with a 'Year' property
    const uniqueYears = transformedData && [...new Set(transformedData.map(item => item.Year))];

    // console.log(uniqueYears)

    // Generate colors dynamically based on available years
    uniqueYears && generateYearColors(uniqueYears, ['#ff7300', '#387908', '#ff0000', '#00ff00', '#0000ff']);

    // Now 'yearColors' object contains colors for each unique year

    // Generate Line components with predefined colors
    // const lineComponents = transformedData3 && Object.keys(transformedData3[Object.keys(transformedData3)[0]]).map((yearKey, index) => (
    //     <Line
    //         key={index}
    //         type="monotone"
    //         dataKey={selectedYear ? `Year_${selectedYear}` : yearKey}
    //         name={yearKey.replace('Year_', '')}
    //         stroke={selectedYear ? yearColors[selectedYear] : yearColors2[index % yearColors2.length]}
    //     />
    // ));

    const availableYears = transformedData3 && [...new Set(Object.values(transformedData3).flatMap(month => Object.keys(month).filter(key => key.startsWith("Year_"))))];

    // const lineComponents = availableYears && availableYears.map((yearKey, index) => {
    //     const year = parseInt(yearKey.substring(5)); // Extract the year from the key
    //     return (
    //         <Line
    //             key={index}
    //             type="monotone"
    //             dataKey={selectedYear ? `Year_${selectedYear}` : yearKey}
    //             name={year.toString()}
    //             stroke={selectedYear ? yearColors[selectedYear] : yearColors2[index % yearColors2.length]}
    //         />
    //     );
    // });

    const lineComponents = availableYears && availableYears.map((yearKey, index) => {
        const year = parseInt(yearKey.substring(5)); // Extract the year from the key
        return (
            <Line
                key={index}
                type="monotone"
                dataKey={selectedYear ? `Year_${selectedYear}` : yearKey}
                name={year.toString()}
                stroke={selectedYear ? yearColors[selectedYear] : yearColors2[index % yearColors2.length]}
                dot={{ fill: selectedYear ? yearColors[selectedYear] : yearColors2[index % yearColors2.length] }} // Add dot prop with fill color
            />
        );
    });





    // console.log(lineComponents, 'lineCmp')

    // Conditionally render Tooltip based on selected year
    const renderTooltip = () => {
        if (selectedYear) {
            return <Tooltip />;
        }
        return null;
    };


    // console.log(dataArray, 'dataArray');

    // Generate Line components with predefined colors
    const lineComponents1 = transformedData3 && Object.keys(transformedData3[Object.keys(transformedData3)[0]]).map((yearKey, index) => (
        <Line key={index} type="monotone" dataKey={yearKey} name={yearKey.replace('Year_', '')} stroke={yearColors[index % yearColors.length]} />
    ));

    // Generate Line components with predefined colors
    const lineComponents2 = transformedData3 && Object.keys(transformedData3[Object.keys(transformedData3)[0]]).map((yearKey, index) => (
        <Line
            key={index}
            type="monotone"
            dataKey={selectedYear ? `Year_${selectedYear}` : yearKey}
            name={yearKey.replace('Year_', '')}
            stroke={selectedYear && yearKey === selectedYear ? yearColors[0] : yearColors[index % yearColors.length]}
        />
    ));



    useEffect(() => {
        setShowReload(true)
        const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=SALES_MONTH&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=1-1-${year}&dt2=1-1-${year}`

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setApiData(data);
                setShowReload(false)
            })
            .catch((error) => console.error("Error:", error));
    }, [year])

    useEffect(() => {
        // console.log("selectedYear:", selectedYear);
        // console.log("transformedData3:", transformedData3);
        // console.log('lineComponents', lineComponents)

        // ... rest of your code
    }, [selectedYear]);

    // Define a TooltipContent component
    const TooltipContent = ({ active, payload, label }) => {
        console.log(payload, 'payload')
        // console.log(active, payload, label, 'active, payload, label')
        if (active && payload && payload.length) {
            // Extract the selected year from the first data point
            // const selectedYear = payload[0].payload.Year;

            // console.log(selectedYear, 'selectedYear')

            // Filter the payload to display only data for the selected year
            const selectedYearData = payload.find(entry => entry.name == selectedYear);

            // console.log(selectedYearData, 'selectedYearData')

            return (
                <div className="recharts-default-tooltip custom-tooltip" style={{ backgroundColor: "white", border: "1px solid rgb(204, 204, 204)", padding: "10px" }}>
                    <p className="recharts-default-tooltip-label">{`${label}`}</p>
                    {selectedYearData && (
                        <p className="recharts-tooltip-item-list">
                            {`${selectedYear}: ${selectedYearData.value}`}
                        </p>
                    )}
                </div>
            );
        }

        return null;
    };


    // const apiCallBack = () => {
    //     setShowReload(true)
    //     const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=SALES_MONTH&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=1-1-${year}&dt2=1-1-${year}`

    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setApiData(data);
    //             setShowReload(false)
    //         })
    //         .catch((error) => console.error("Error:", error));
    // }

    // const { targetRef, isInViewport } = useIntersectionObserver(apiCallback, {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: 0.5,
    // });

    // console.log(isOpen)
    // console.log(transformedData);
    // console.log(year)
    // console.log(showReload)
    // console.log(apiData, 'apiData')
    return (
        <>
            {/* <div className="card-hover" id="lineGWrap"> */}
            < div className="card-hover" id="linegrph">
                {/* <div className="card-dashboard border shadow-sm p-2 rounded bg-white" id="lineGraph"> */}
                < div className="card-dashboard border p-2 rounded bg-white" id="linegrph" >
                    {/* <div className="card-body" id="lineGraphBody"> */}
                    <div div className="card-body" id="lineGraphBody">
                        <div className="d-flex justify-content-between pt-2">
                            <p className="first-txt" id="totalSalesText">Total Sales (AED)</p>
                            <p className="text-end first-txt d-flex align-items-center justify-content-between" id="LgYearP" onClick={toggleDropdown}>
                                <div className='DFDText' onClick={() => setSelectedYear('')} id="LyearText">{selectedYear === '' ? 'All' : selectedYear}</div>
                                <div className='DFDText' id='DoughDropCont'>
                                    {
                                        isOpen ? <FaSortDown className='TSDropDropped' /> : <FaSortDown className='TSDrop' onClick={toggleDropdown} />
                                    }
                                </div>
                            </p>
                        </div>

                        {isOpen && (
                            <div className='LineGraphDropDown'>
                                <div className='LineGraphDropDownCont'>
                                    {years.map((year, index) => (
                                        <div key={index} className='LineGraphDropDownText' onClick={() => setSelectedYear(year)}>Year {year}</div>
                                    ))}
                                    <div className='LineGraphDropDownText' onClick={() => setSelectedYear('')}>All</div>
                                </div>
                            </div>
                        )}

                        {
                            showReload && <RotatingLines
                                strokeColor="#107F6A"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="40"
                                visible={true}
                            />
                        }
                        <div className="LineChart" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            {/* <ResponsiveContainer className="custom-chart-container" width="100%"> */}
                            {/* <ResponsiveContainer width="100%" height={420}>
                                <LineChart data={transformedData && transformedData} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
                                    <XAxis dataKey="Month" interval={0} />
                                    <YAxis type="number" />
                                    <Tooltip />
                                    <CartesianGrid stroke="#f5f5f5" />
                                    <Line type="monotone" dataKey="SALE_AMT" stroke="#ff7300" yAxisId={0} />
                                </LineChart>
                            </ResponsiveContainer> */}

                            <ResponsiveContainer width="100%" height={420}>


                                <LineChart data={finalDataArray} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
                                    <XAxis dataKey="Month" interval={0} tick={{ fontSize: 12 }} />
                                    <YAxis type="number" />

                                    {/* Light grey vertical lines */}
                                    <CartesianGrid stroke="#f5f5f5" />

                                    {
                                        selectedYear == '' ? <Tooltip /> : <Tooltip content={<TooltipContent />} />
                                    }

                                    {/* <Tooltip /> */}
                                    {selectedYear === '' && <Legend />}
                                    {lineComponents}

                                </LineChart>
                            </ResponsiveContainer>

                            {/* 
                                <LineChart
                                    className="p-5"
                                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                    series={[{ curve: "linear", data: [6, 3, 7, 9.5, 4, 2] }]}
                                    width={480}
                                    height={300}
                                /> */}
                        </div>
                    </div >
                </ div>
            </div >
        </>
    );
};

export default LineGraph;
