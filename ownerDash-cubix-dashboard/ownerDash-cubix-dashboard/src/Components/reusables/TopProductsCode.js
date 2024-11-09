import React, { useEffect, useRef, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './Doughnut.css'
import './TopProductCode.css'
import { FaSortDown } from "react-icons/fa";
import { RotatingLines } from 'react-loader-spinner'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import DateChanger from './DateChanger';
import BigDateChanger from './BigDateChanger';
import APxChartTp from './APxChartTp';
import useIntersectionObserver from "../../intrsection/useIntersectionObserver";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(ChartDataLabels);

const TopProductCode = () => {

    const isMobile = window.innerWidth <= 767;

    const isBigScreen = window.innerWidth >= 767

    const [productisOpen, setproductisOpen] = useState(false);
    const [monthisOpen, setmonthisOpen] = useState(false);
    const chartRef = useRef(null);
    const [topProducts, setTopProducts] = useState(null)
    const [date, setDate] = useState(1)
    const [showReload, setShowReload] = useState(false)
    const [dateSelectView, setDateSelectView] = useState('')

    // sales drop
    const [isOpen, setIsOpen] = useState(false);
    const [salesData, setSaleData] = useState(null)
    const [totalSales, setTotalSales] = useState(null)
    const [i1date, setI1Date] = useState(30)
    const [openModal, setOpenModal] = useState(false);
    const [yearBottView, setYearBottView] = useState('')
    const [todayDate, setTodayDate] = useState(null)
    const [dt1, setdt1] = useState('')
    const [dt2, setdt2] = useState('')

    const [currentDate, setCurrentDate] = useState(null)

    const [monthView, setMonthView] = useState(false)

    const [monthDrop, setMonthDrop] = useState(false)

    const [currentDateMonth, setCurrentDateMonth] = useState(null)

    const [firstDayOfPrevMonth, setFirstDayOfPmonth] = useState(null)
    const [lasttDayOfPrevMonth, setLasttDayOfPmonth] = useState(null)

    const [yearView, setYearView] = useState(false)
    const [yearDrop, setYearDrop] = useState(false)

    const [currentDateYear, setCurrentDateYear] = useState(null)

    const [firstDayOfPrevYear, setFirstDayOfPYear] = useState(null)
    const [lasttDayOfPrevYear, setLasttDayOfPYear] = useState(null)

    const [showDateChanger, setShowDateChanger] = useState(false)

    const [apicalled, setapicalled] = useState(false)

    const selectedCompanyString = localStorage.getItem("selectedCompany");

    const selectedCompany = JSON.parse(selectedCompanyString);

    const cmpcode = selectedCompany.cmpcode;
    const publick = selectedCompany.publick;
    const privatek = selectedCompany.privatek;

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const toggleMonthDropdown = () => {
        setMonthDrop(!monthDrop)
    }

    const toggleYearDropdown = () => {
        setYearDrop(!yearDrop)
    }

    // Helper function to get the name of the month based on the month index
    const getMonthName = (monthIndex) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return months[monthIndex];
    }

    // setTodayDate(formattedDate) 

    const setTodaysDate = () => {
        setYearBottView(todayDate)
        setdt1(todayDate)
        setdt2(todayDate)
        setCurrentDate(todayDate);
        setTotalSales(null)
        setShowDateChanger(!showDateChanger)
        setShowReload(true)
        const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOP_PRODUCTS&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=${todayDate}&dt2=${todayDate}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setTopProducts(data);
                setShowReload(false)
            })
            .catch((error) => console.error("Error:", error));
    }

    const setTodaysDatenoToggle = () => {
        setYearBottView(todayDate)
        setdt1(todayDate)
        setdt2(todayDate)
        setCurrentDate(todayDate);
        setTotalSales(null)

        setShowReload(true)
        const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOP_PRODUCTS&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=${todayDate}&dt2=${todayDate}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setTopProducts(data);
                setShowReload(false)
            })
            .catch((error) => console.error("Error:", error));
    }

    const getFirstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1);
    };

    const setTodaysMonth = () => {
        setYearBottView('')
        setCurrentDateMonth(todayDate)
        setFirstDayOfPmonth(null)
        setLasttDayOfPmonth(null)

        // console.log(todayDate)
        const currentDateObject = new Date(todayDate);

        // Get the first day of the current month
        const firstDayOfCurrentMonth = getFirstDayOfMonth(currentDateObject);

        // Format the first day as "MM-DD-YYYY"
        const firstDayFormatted = `${(firstDayOfCurrentMonth.getMonth() + 1).toString().padStart(2, '0')}-${firstDayOfCurrentMonth.getDate().toString().padStart(2, '0')}-${firstDayOfCurrentMonth.getFullYear()}`;

        // Format the current month and year as "MMM-YYYY" (e.g., "Dec-2023")
        const currentMonthYearFormatted = `${getMonthName(firstDayOfCurrentMonth.getMonth())}-${firstDayOfCurrentMonth.getFullYear()}`;

        // Set yearBottView to the formatted value
        setYearBottView(currentMonthYearFormatted);

        setTotalSales(null)

        setShowReload(true)
        const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOP_PRODUCTS&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=${firstDayFormatted}&dt2=${todayDate}`;
        // console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setTopProducts(data);
                setShowReload(false)
            })
            .catch((error) => console.error("Error:", error));
    }

    const setTodaysYear = () => {
        setYearBottView('')
        setCurrentDateYear(todayDate)
        setFirstDayOfPYear(null)
        setLasttDayOfPYear(null)

        const currentDateObject = new Date(todayDate);

        // Get the first day of the current year
        const firstDayOfCurrentYear = new Date(currentDateObject.getFullYear(), 0, 1);

        // Format the first day as "MM-DD-YYYY"
        const firstDayFormatted = `${(firstDayOfCurrentYear.getMonth() + 1).toString().padStart(2, '0')}-${firstDayOfCurrentYear.getDate().toString().padStart(2, '0')}-${firstDayOfCurrentYear.getFullYear()}`;

        // Get the current day of the current year
        const currentDayOfCurrentYear = new Date(currentDateObject.getFullYear(), currentDateObject.getMonth(), currentDateObject.getDate());

        // Format the current day as "MM-DD-YYYY"
        const currentDayFormatted = `${(currentDayOfCurrentYear.getMonth() + 1).toString().padStart(2, '0')}-${currentDayOfCurrentYear.getDate().toString().padStart(2, '0')}-${currentDayOfCurrentYear.getFullYear()}`;

        // Get the current year
        const currentYear = currentDateObject.getFullYear();

        // Format the current year as "YYYY"
        const currentYearFormatted = `${currentYear}`;

        // Set yearBottView to the formatted value
        setYearBottView(currentYearFormatted);

        setTotalSales(null);

        setShowReload(true)
        const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOP_PRODUCTS&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=${firstDayFormatted}&dt2=${currentDayFormatted}`;
        // console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setTopProducts(data);
                setShowReload(false)
            })
            .catch((error) => console.error("Error:", error));
    }

    // previos day

    const previousDay = () => {
        if (!currentDate) {
            const currentDateObject = new Date(todayDate);
            currentDateObject.setDate(currentDateObject.getDate() - 1);

            // Format the updated date as "MM-DD-YYYY"
            const updatedDate = `${(currentDateObject.getMonth() + 1).toString().padStart(2, '0')}-${currentDateObject.getDate().toString().padStart(2, '0')}-${currentDateObject.getFullYear()}`;

            setCurrentDate(updatedDate);
            setYearBottView(updatedDate)
        } else {
            const currentDateObject = new Date(currentDate);
            currentDateObject.setDate(currentDateObject.getDate() - 1);

            // Format the updated date as "MM-DD-YYYY"
            const updatedDate = `${(currentDateObject.getMonth() + 1).toString().padStart(2, '0')}-${currentDateObject.getDate().toString().padStart(2, '0')}-${currentDateObject.getFullYear()}`;

            setCurrentDate(updatedDate);
            setYearBottView(updatedDate)
        }
    }

    // next day
    const nextDay = () => {
        let currentDateObject;

        if (!currentDate) {
            currentDateObject = new Date(todayDate);
        } else {
            currentDateObject = new Date(currentDate);
        }

        // Compare currentDateObject with today's date
        const isToday = currentDateObject.toDateString() === new Date().toDateString();

        if (!isToday) {
            currentDateObject.setDate(currentDateObject.getDate() + 1);

            const updatedDate = formatDate(currentDateObject);

            setCurrentDate(updatedDate);
            setYearBottView(updatedDate);
        }
    }

    // Helper function to format the date as "MM-DD-YYYY"
    const formatDate = (dateObject) => {
        return `${(dateObject.getMonth() + 1).toString().padStart(2, '0')}-${dateObject.getDate().toString().padStart(2, '0')}-${dateObject.getFullYear()}`;
    }


    const setMonthViewFunc = () => {
        setMonthView(!monthView);
        setYearView(false);
        setYearBottView('');
        // setCurrentDateMonth(todayDate);
        setTodaysMonth();
    };

    const setYearViewFunc = () => {
        setMonthView(false)
        setYearView(true)
        setYearBottView('')
        // setCurrentDateMonth(todayDate)
        setTodaysYear()
    }

    const setTodayViewFunc = () => {
        setMonthView(false)
        setYearView(false)
        setYearBottView('')
        // setCurrentDateMonth(todayDate)
        setTodaysDate()
    }

    const previousMonth = () => {
        const currentDateObject = currentDateMonth
            ? new Date(currentDateMonth)
            : new Date(todayDate);

        // Move to the previous month
        currentDateObject.setMonth(currentDateObject.getMonth() - 1);

        // Set the date to the first day of the month
        currentDateObject.setDate(1);

        // Get the first day of the previous month
        const firstDayOfPrevMonth = new Date(currentDateObject);

        // Get the last day of the previous month
        const lastDayOfPrevMonth = new Date(currentDateObject.getFullYear(), currentDateObject.getMonth() + 1, 0);

        // Format the updated date as "Month-date-year"
        // const updatedDate = `${firstDayOfPrevMonth.toLocaleString('default', { month: 'short' })}-${firstDayOfPrevMonth.getDate()}-${firstDayOfPrevMonth.getFullYear()}`;
        const updatedDate = `${firstDayOfPrevMonth.toLocaleString('default', { month: 'short' })}-${firstDayOfPrevMonth.getFullYear()}`;

        // Format the updated date as "MM-DD-YYYY"
        const updatedDateInFormat = `${(firstDayOfPrevMonth.getMonth() + 1).toString().padStart(2, '0')}-${firstDayOfPrevMonth.getDate().toString().padStart(2, '0')}-${firstDayOfPrevMonth.getFullYear()}`;
        const lastDayFormatted = `${(lastDayOfPrevMonth.getMonth() + 1).toString().padStart(2, '0')}-${lastDayOfPrevMonth.getDate().toString().padStart(2, '0')}-${lastDayOfPrevMonth.getFullYear()}`;

        setCurrentDateMonth(updatedDateInFormat);
        setYearBottView(updatedDate);
        setFirstDayOfPmonth(updatedDateInFormat)
        setLasttDayOfPmonth(lastDayFormatted)
        // console.log('First Day of Previous Month:', updatedDate);
        // console.log(updatedDateInFormat)
        // console.log('Last Day of Previous Month:', lastDayFormatted);
    };

    // next month
    const nextMonth = () => {
        const currentDateObject = currentDateMonth
            ? new Date(currentDateMonth)
            : new Date(todayDate);

        // Compare currentDateObject with today's date
        const isCurrentMonth = currentDateObject.getMonth() === new Date().getMonth();

        if (!isCurrentMonth) {
            // Move to the next month
            currentDateObject.setMonth(currentDateObject.getMonth() + 1);

            // Set the date to the first day of the month
            currentDateObject.setDate(1);

            // Get the first day of the next month
            const firstDayOfNextMonth = new Date(currentDateObject);

            // Get the last day of the next month
            const lastDayOfNextMonth = new Date(currentDateObject.getFullYear(), currentDateObject.getMonth() + 1, 0);

            // Format the updated date as "Month-date-year"
            const updatedDate = `${firstDayOfNextMonth.toLocaleString('default', { month: 'short' })}-${firstDayOfNextMonth.getFullYear()}`;

            // Format the updated date as "MM-DD-YYYY"
            const updatedDateInFormat = `${(firstDayOfNextMonth.getMonth() + 1).toString().padStart(2, '0')}-${firstDayOfNextMonth.getDate().toString().padStart(2, '0')}-${firstDayOfNextMonth.getFullYear()}`;
            const lastDayFormatted = `${(lastDayOfNextMonth.getMonth() + 1).toString().padStart(2, '0')}-${lastDayOfNextMonth.getDate().toString().padStart(2, '0')}-${lastDayOfNextMonth.getFullYear()}`;

            setCurrentDateMonth(updatedDateInFormat);
            setYearBottView(updatedDate);
            setFirstDayOfPmonth(updatedDateInFormat);
            setLasttDayOfPmonth(lastDayFormatted);
            // console.log('First Day of Next Month:', updatedDate);
            // console.log(updatedDateInFormat);
            // console.log('Last Day of Next Month:', lastDayFormatted);
        }
    };


    const previousYear = () => {
        const currentDateObject = currentDateYear
            ? new Date(currentDateYear)
            : new Date(todayDate);

        // Move to the previous year
        currentDateObject.setFullYear(currentDateObject.getFullYear() - 1);

        // Set the date to the first day of the year
        currentDateObject.setMonth(0); // January
        currentDateObject.setDate(1);

        // Get the first day of the previous year
        const firstDayOfPrevYear = new Date(currentDateObject);

        // Get the last day of the previous year
        const lastDayOfPrevYear = new Date(currentDateObject.getFullYear(), 11, 31); // December is 11 since months are zero-based

        // Format the updated date as "Month-date-year"
        // const updatedDate = `${firstDayOfPrevYear.toLocaleString('default', { month: 'short' })}-${firstDayOfPrevYear.getDate()}-${firstDayOfPrevYear.getFullYear()}`;
        const updatedDate = `${firstDayOfPrevYear.getFullYear()}`;

        // Format the updated date as "MM-DD-YYYY"
        const updatedDateInFormat = `${(firstDayOfPrevYear.getMonth() + 1).toString().padStart(2, '0')}-${firstDayOfPrevYear.getDate().toString().padStart(2, '0')}-${firstDayOfPrevYear.getFullYear()}`;

        const lastDayFormatted = `${(lastDayOfPrevYear.getMonth() + 1).toString().padStart(2, '0')}-${lastDayOfPrevYear.getDate().toString().padStart(2, '0')}-${lastDayOfPrevYear.getFullYear()}`;

        setCurrentDateYear(updatedDateInFormat);
        setYearBottView(updatedDate);
        setFirstDayOfPYear(updatedDateInFormat);
        setLasttDayOfPYear(lastDayFormatted);

        // console.log('First Day of Previous Year:', updatedDate);
        // console.log(updatedDateInFormat);
        // console.log('Last Day of Previous Year:', lastDayFormatted);
    };

    const nextYear = () => {
        const currentDateObject = currentDateYear
            ? new Date(currentDateYear)
            : new Date(todayDate);

        // Compare currentDateObject with today's date
        const isCurrentYear = currentDateObject.getFullYear() === new Date().getFullYear();

        if (!isCurrentYear) {
            // Move to the next year
            currentDateObject.setFullYear(currentDateObject.getFullYear() + 1);

            // Set the date to the first day of the year
            currentDateObject.setMonth(0); // January
            currentDateObject.setDate(1);

            // Get the first day of the next year
            const firstDayOfNextYear = new Date(currentDateObject);

            // Get the last day of the next year
            const lastDayOfNextYear = new Date(currentDateObject.getFullYear(), 11, 31); // December is 11 since months are zero-based

            // Format the updated date as "Month-date-year"
            const updatedDate = `${firstDayOfNextYear.getFullYear()}`;

            // Format the updated date as "MM-DD-YYYY"
            const updatedDateInFormat = `${(firstDayOfNextYear.getMonth() + 1).toString().padStart(2, '0')}-${firstDayOfNextYear.getDate().toString().padStart(2, '0')}-${firstDayOfNextYear.getFullYear()}`;

            const lastDayFormatted = `${(lastDayOfNextYear.getMonth() + 1).toString().padStart(2, '0')}-${lastDayOfNextYear.getDate().toString().padStart(2, '0')}-${lastDayOfNextYear.getFullYear()}`;

            setCurrentDateYear(updatedDateInFormat);
            setYearBottView(updatedDate);
            setFirstDayOfPYear(updatedDateInFormat);
            setLasttDayOfPYear(lastDayFormatted);

            // console.log('First Day of Next Year:', updatedDate);
            // console.log(updatedDateInFormat);
            // console.log('Last Day of Next Year:', lastDayFormatted);
        }
    };


    useEffect(() => {
        setTotalSales(null)

        if (firstDayOfPrevYear, lasttDayOfPrevYear) {
            setShowReload(true)
            const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOP_PRODUCTS&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=${firstDayOfPrevYear}&dt2=${lasttDayOfPrevYear}`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setTopProducts(data);
                    setShowReload(false)
                })
                .catch((error) => console.error("Error:", error));
        }
    }, [firstDayOfPrevYear, lasttDayOfPrevYear])


    useEffect(() => {
        setTotalSales(null)

        if (firstDayOfPrevMonth, lasttDayOfPrevMonth) {
            setShowReload(true)
            const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOP_PRODUCTS&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=${firstDayOfPrevMonth}&dt2=${lasttDayOfPrevMonth}`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setTopProducts(data);
                    setShowReload(false)
                })
                .catch((error) => console.error("Error:", error));
        }

    }, [firstDayOfPrevMonth, lasttDayOfPrevMonth])



    useEffect(() => {
        setTotalSales(null)
        if (currentDate) {
            setShowReload(true)
            const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOP_PRODUCTS&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=${currentDate}&dt2=${currentDate}`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setTopProducts(data);
                    setShowReload(false)
                })
                .catch((error) => console.error("Error:", error));
        }
    }, [currentDate]);

    // change dates

    useEffect(() => {
        setTotalSales(null)
        // Get the current date
        const today = new Date();

        // Extract the components of the date (year, month, day)
        const year = today.getFullYear();
        const month = today.getMonth() + 1; // Months are zero-based, so add 1
        const day = today.getDate();

        // Format the date as a string (e.g., "YYYY-MM-DD")
        const formattedDate = `${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}-${year}`;
        // console.log(formattedDate);

        setTodayDate(formattedDate)

        setShowReload(true)

        if (window.innerWidth >= 767) {
            const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOP_PRODUCTS&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=${formattedDate}&dt2=${formattedDate}`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setTopProducts(data);
                    setShowReload(false)
                })
                .catch((error) => console.error("Error:", error));
        }
    }, [todayDate]);

    const apiCallback = () => {

        if (apicalled) {
            return
        }
        setTotalSales(null)
        // Get the current date
        const today = new Date();

        // Extract the components of the date (year, month, day)
        const year = today.getFullYear();
        const month = today.getMonth() + 1; // Months are zero-based, so add 1
        const day = today.getDate();

        // Format the date as a string (e.g., "YYYY-MM-DD")
        const formattedDate = `${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}-${year}`;
        // console.log(formattedDate);

        setTodayDate(formattedDate)

        setShowReload(true)

        const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOP_PRODUCTS&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=${formattedDate}&dt2=${formattedDate}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setTopProducts(data);
                setShowReload(false)
            })
            .catch((error) => console.error("Error:", error));
    }

    const { targetRef, isInViewport } = useIntersectionObserver(
        () => {
            // Run API callback when in viewport (optional)
            apiCallback()
            setapicalled(true)
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: isMobile ? 1 : 0, // Set threshold to 0.5 for mobile, 0 for non-mobile
        },
        isMobile
    );

    // useEffect(() => {
    //     setTodayDate(formattedDate)
    // }, [todayDate])

    useEffect(() => {
        if (i1date === 30) {
            setYearBottView('')
        } else if (i1date === 10) {
            setYearBottView('Last 10 Days')
        } else if (i1date === 7) {
            setYearBottView('Last 7 Days')
        }
    }, [i1date])

    const [fontSize, setFontSize] = useState(16); // Initial font size


    // sales drop

    const data = {
        labels: topProducts && topProducts.map(item => item.CODE),
        datasets: [
            {
                label: 'Total Quantity',
                data: topProducts && topProducts.map(item => item.QTY),
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        // cutoutPercentage: 12,
        layout: {
            padding: 100,
        },
        plugins: {
            datalabels: {
                color: 'black',
                anchor: 'end',
                align: 'end',
                offset: 20,
                font: {
                    size: fontSize, // Set the font size as needed
                },
                formatter: (value, context) => {
                    return context.chart.data.labels[context.dataIndex];
                },
                // rotation: -50,
            },
            legend: {
                display: false,
            },
        },
        maintainAspectRatio: false, // Add this line to disable aspect ratio scaling
        responsive: true,
    };

    const toggleProduct = () => {
        setproductisOpen(!productisOpen);
    }
    const toggleMonth = () => {
        setmonthisOpen(!monthisOpen);
    }

    useEffect(() => {
        setShowReload(true)
        const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOP_PRODUCTS&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=${date}&i2=0&dt1=1-1-2022&dt2=1-1-2023`

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setTopProducts(data);
                setShowReload(false)
            })
            .catch((error) => console.error("Error:", error));
    }, [date])

    useEffect(() => {
        if (date === 1) {
            setDateSelectView('')
        } else if (date === 7) {
            setDateSelectView('Last 7 Days')
        } else if (date === 30) {
            setDateSelectView('Last 30 Days')
        }
    }, [date])

    useEffect(() => {
        // Update font size based on screen width
        const updateFontSize = () => {
            if (window.innerWidth <= 480) {
                setFontSize(12);
            } else {
                setFontSize(16);
            }
        };

        // Initial font size setup
        updateFontSize();

        // Event listener for window resize
        window.addEventListener('resize', updateFontSize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateFontSize);
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    const storedItem = localStorage.getItem('DashItems');
    const isDashItemsPresent = storedItem && JSON.parse(storedItem).length > 0;

    // console.log(topProducts)

    return (
        <div className='DoughnutWrapper card-hover' ref={targetRef} style={{ height: "100%" }}>
            <div className={`DoughnutCont card-dashboard border p-2 rounded ${isDashItemsPresent ? 'wide' : 'wide'}`} style={{ height: "100%" }}>

                <div className='DFDropItems'>
                    <div className='DFDText'>
                        <div id='TopGrpText'>Top 5 Group Codes</div>
                        {/* <div style={{ fontSize: '14px' }}>{yearBottView}</div> */}
                    </div>
                    <div className='TSMAINDROP' id='DoughMD'>

                        {!monthView && !yearView &&

                            <div className='TSDropCont'>
                                <div className='TSDropItems' id='DoughDrop'>
                                    <div id="deptSalesTopBan">
                                        <div className='TSDText' onClick={() => setTodaysDate()}>Today</div>
                                        <div className='TSDText'>
                                            {
                                                isOpen ? <FaSortDown className='TSDropDropped' onClick={() => setTodaysDate()} /> : <FaSortDown className='TSDrop' onClick={() => setTodaysDate()} />
                                            }
                                        </div>
                                    </div>
                                    {/* <div className='TSDText'><FaListUl className='TSList' onClick={handleOpen} /></div> */}
                                </div>
                            </div>

                        }

                        {/* dropdowns day */}
                        {!monthView && !yearView && isOpen && (
                            <div className='TSDropDown'>
                                <div className='TSDropDownCont' id='prodcodedrops'>
                                    <div className='TSDropDownText'><FaMinus className='FaMinus' onClick={() => previousDay()} />Day<FaPlus className='FaPlus' onClick={() => nextDay()} /></div>
                                    <div className='TSDropDownText' onClick={() => setMonthViewFunc()}>This Month</div>
                                    <div className='TSDropDownText' onClick={() => setYearViewFunc()}>This Year</div>
                                </div>
                            </div>
                        )}

                        {monthView &&
                            <div className='TSDropCont'>
                                <div className='TSDropItems' id='DoughDrop'>
                                    <div id="deptSalesTopBan">
                                        <div className='TSDText' onClick={() => setTodaysMonth()}>This Month</div>
                                        <div className='TSDText'>
                                            {
                                                monthDrop ? <FaSortDown className='TSDropDropped' onClick={toggleMonthDropdown} /> : <FaSortDown className='TSDrop' onClick={toggleMonthDropdown} />
                                            }
                                        </div>
                                    </div>
                                    {/* <div className='TSDText'><FaListUl className='TSList' onClick={handleOpen} /></div> */}
                                </div>
                            </div>
                        }

                        {/* dropdowns month */}
                        {monthView && monthDrop && (
                            <div className='TSDropDown'>
                                <div className='TSDropDownCont' id='prodcodedrops'>
                                    <div className='TSDropDownText'><FaMinus className='FaMinus' onClick={() => previousMonth()} />Month<FaPlus className='FaPlus' onClick={() => nextMonth()} /></div>
                                    <div className='TSDropDownText' onClick={() => setYearViewFunc()}>This Year</div>
                                    <div className='TSDropDownText' onClick={() => setTodayViewFunc()}>Today</div>
                                </div>
                            </div>
                        )}

                        {yearView &&
                            <div className='TSDropCont'>
                                <div className='TSDropItems' id='DoughDrop'>
                                    <div id="deptSalesTopBan">
                                        <div className='TSDText' onClick={() => setTodaysYear()}>This Year</div>
                                        <div className='TSDText'>
                                            {
                                                yearDrop ? <FaSortDown className='TSDropDropped' onClick={toggleYearDropdown} /> : <FaSortDown className='TSDrop' onClick={toggleYearDropdown} />
                                            }
                                        </div>
                                    </div>
                                    {/* <div className='TSDText'><FaListUl className='TSList' onClick={handleOpen} /></div> */}
                                </div>
                            </div>
                        }

                        {/* dropdowns month */}
                        {yearView && yearDrop && (
                            <div className='TSDropDown'>
                                <div className='TSDropDownCont' id='prodcodedrops'>
                                    <div className='TSDropDownText'><FaMinus className='FaMinus' onClick={() => previousYear()} />Year<FaPlus className='FaPlus' onClick={() => nextYear()} /></div>
                                    <div className='TSDropDownText' onClick={() => setMonthViewFunc()}>This Month</div>
                                    <div className='TSDropDownText' onClick={() => setTodayViewFunc()}>Today</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* date changer */}

                {
                    showDateChanger && (
                        <div className='DateChangerDeptSalesBox'>
                            <BigDateChanger
                                setTodaysDate={setTodaysDate}
                                setTodaysDatenoToggle={setTodaysDatenoToggle}
                                previousDay={previousDay}
                                nextDay={nextDay}
                                yearBottView={yearBottView}
                                previousMonth={previousMonth}
                                nextMonth={nextMonth}
                                previousYear={previousYear}
                                nextYear={nextYear}
                                setTodaysMonth={setTodaysMonth}
                                setTodaysYear={setTodaysYear}
                            />
                        </div>
                    )
                }


                {/* <div className='DFMAINDROP'>
                    <div className='DFProdCont' style={{ width: '60%' }}>
                        <div className='DFDropItems'>
                            <div className='DFDText'>Top 5 Group Code &nbsp;<span style={{ fontSize: '14px' }}>{dateSelectView}</span></div>

                        </div>

                    </div>
                    <div className='DFMonthCont' style={{ width: '40%' }}>
                        <div className='DFDropItems'>
                            <div className='DFDText' onClick={() => setDate(1)}>Today</div>
                            <div className='DFDText' id='DoughDropCont'>
                                {
                                    monthisOpen ? <FaSortDown className='TSDropDropped' onClick={toggleMonth} /> : <FaSortDown className='TSDrop' onClick={toggleMonth} />
                                }

                            </div>
                        </div>
                        {monthisOpen && (
                            <div id='RightDrops' className='DFDropDownCont'>
                                <div className='DFDropDownText' onClick={() => setDate(7)}>Last 7 days</div>
                                <div className='DFDropDownText' onClick={() => setDate(30)}>Last 30 days</div>
                            </div>
                        )}
                    </div>
                </div> */}
                <div className='DoughCont' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {
                        topProducts && topProducts.length === 0 ? (
                            <div style={{ color: 'red' }}>No data available</div>
                        ) : (
                            showReload ? (
                                <RotatingLines
                                    strokeColor="#107F6A"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="40"
                                    visible={true}
                                />
                            ) : (
                                // <Doughnut data={data} options={options} />
                                <APxChartTp topProducts={topProducts} />
                            )
                        )
                    }

                    {/* {
                        showReload ? <RotatingLines
                            strokeColor="#107F6A"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="40"
                            visible={true}
                        /> : <Doughnut data={data} options={options} />
                    } */}

                </div>
            </div>
        </div>
    )
}

export default TopProductCode