import React, { useEffect, useState } from 'react'
import './TopSalesMan.css'
import axios from 'axios';
import { FaSortDown } from "react-icons/fa";
import BigDateChanger from './BigDateChanger';
import { RotatingLines } from 'react-loader-spinner'


const TopSalesMan = () => {
    const [topSalesPerson, setTopSalesPerson] = useState([])

    const selectedCompanyString = localStorage.getItem("selectedCompany");

    const selectedCompany = JSON.parse(selectedCompanyString);

    const cmpcode = selectedCompany.cmpcode;
    const publick = selectedCompany.publick;
    const privatek = selectedCompany.privatek;
    // date filter codes
    const [productisOpen, setproductisOpen] = useState(false);
    const [monthisOpen, setmonthisOpen] = useState(false);
    // const chartRef = useRef(null);
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

    const setTodaysDate = async () => {
        setYearBottView(todayDate)
        setdt1(todayDate)
        setdt2(todayDate)
        setCurrentDate(todayDate);
        setTotalSales(null)
        setShowDateChanger(!showDateChanger)
        setShowReload(true)
        const response = await axios.get(
            `https://cubixweberp.com:199/api/Dashboard/DashBoard` +
            `?cmpcode=${cmpcode}&guid=${privatek}&mod=T_SALESPERSON&s1=%27%27&s2=%27%27&s3=%27%27&i1=0&i2=0&dt1=${todayDate}&dt2=${todayDate}`
        );

        // Assuming the API response has an array of items with properties like 'Sman' and 'SALES_AMT'
        const sortedItems = response.data.sort((a, b) => b.SALES_AMT - a.SALES_AMT);

        // console.log(sortedItems, "sortedItems setTodaysDate")

        // Get the top sales person from the first item in the sorted array
        setTopSalesPerson(sortedItems && sortedItems)
        setShowReload(false)
        // const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOP_GROUP&s1=%27100%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=${todayDate}&dt2=${todayDate}`;
        // // console.log(url)
        // fetch(url)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setTopProducts(data);
        //         setShowReload(false)
        //     })
        //     .catch((error) => console.error("Error:", error));
    }

    const setTodaysDatenoToggle = async () => {
        setYearBottView(todayDate)
        setdt1(todayDate)
        setdt2(todayDate)
        setCurrentDate(todayDate);
        setTotalSales(null)

        setShowReload(true)
        const response = await axios.get(
            `https://cubixweberp.com:199/api/Dashboard/DashBoard` +
            `?cmpcode=${cmpcode}&guid=${privatek}&mod=T_SALESPERSON&s1=%27%27&s2=%27%27&s3=%27%27&i1=0&i2=0&dt1=${todayDate}&dt2=${todayDate}`
        );

        // Assuming the API response has an array of items with properties like 'Sman' and 'SALES_AMT'
        const sortedItems = response.data.sort((a, b) => b.SALES_AMT - a.SALES_AMT);

        // console.log(sortedItems)

        // Get the top sales person from the first item in the sorted array
        setTopSalesPerson(sortedItems && sortedItems)
        setShowReload(false)
        // const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOP_GROUP&s1=%27100%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=${todayDate}&dt2=${todayDate}`;
        // // console.log(url)
        // fetch(url)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setTopProducts(data);
        //         setShowReload(false)
        //     })
        //     .catch((error) => console.error("Error:", error));
    }

    const getFirstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1);
    };

    const setTodaysMonth = async () => {
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
        const response = await axios.get(
            `https://cubixweberp.com:199/api/Dashboard/DashBoard` +
            `?cmpcode=${cmpcode}&guid=${privatek}&mod=T_SALESPERSON&s1=%27%27&s2=%27%27&s3=%27%27&i1=0&i2=0&dt1=${firstDayFormatted}&dt2=${todayDate}`
        );

        // Assuming the API response has an array of items with properties like 'Sman' and 'SALES_AMT'
        const sortedItems = response.data.sort((a, b) => b.SALES_AMT - a.SALES_AMT);

        // console.log(sortedItems)

        // Get the top sales person from the first item in the sorted array
        setTopSalesPerson(sortedItems && sortedItems)
        setShowReload(false)
        // const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOP_GROUP&s1=%27100%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=${firstDayFormatted}&dt2=${todayDate}`;
        // // console.log(url)
        // fetch(url)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setTopProducts(data);
        //         setShowReload(false)
        //     })
        //     .catch((error) => console.error("Error:", error));
    }

    const setTodaysYear = async () => {
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
        const response = await axios.get(
            `https://cubixweberp.com:199/api/Dashboard/DashBoard` +
            `?cmpcode=${cmpcode}&guid=${privatek}&mod=T_SALESPERSON&s1=%27%27&s2=%27%27&s3=%27%27&i1=0&i2=0&dt1=${firstDayFormatted}&dt2=${currentDayFormatted}`
        );

        // Assuming the API response has an array of items with properties like 'Sman' and 'SALES_AMT'
        const sortedItems = response.data.sort((a, b) => b.SALES_AMT - a.SALES_AMT);

        // console.log(sortedItems)

        // Get the top sales person from the first item in the sorted array
        setTopSalesPerson(sortedItems && sortedItems)
        setShowReload(false)
        // const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOP_GROUP&s1=%27100%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=${firstDayFormatted}&dt2=${currentDayFormatted}`;
        // // console.log(url)
        // fetch(url)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setTopProducts(data);
        //         setShowReload(false)
        //     })
        //     .catch((error) => console.error("Error:", error));
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

        if (firstDayOfPrevMonth, lasttDayOfPrevMonth) {
            setShowReload(true)
            const fetchData = async () => {
                try {
                    const response = await axios.get(
                        `https://cubixweberp.com:199/api/Dashboard/DashBoard` +
                        `?cmpcode=${cmpcode}&guid=${privatek}&mod=T_SALESPERSON&s1=%27%27&s2=%27%27&s3=%27%27&i1=0&i2=0&dt1=${firstDayOfPrevMonth}&dt2=${lasttDayOfPrevMonth}`
                    );

                    // Assuming the API response has an array of items with properties like 'Sman' and 'SALES_AMT'
                    const sortedItems = response.data.sort((a, b) => b.SALES_AMT - a.SALES_AMT);

                    // console.log(sortedItems)

                    // Get the top sales person from the first item in the sorted array
                    setTopSalesPerson(sortedItems && sortedItems)
                    // setTopSalesPerson(sortedItems.length > 0 ? sortedItems[0].SmanName.trim() : '');
                } catch (error) {
                    console.error('Error fetching data:', error);
                    // You might want to handle the error state here
                }
            };

            fetchData();
            setShowReload(false)
            // const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOP_GROUP&s1=%27100%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=${firstDayOfPrevMonth}&dt2=${lasttDayOfPrevMonth}`;
            // // console.log(url)
            // fetch(url)
            //     .then((response) => response.json())
            //     .then((data) => {
            //         setTopProducts(data);
            //         setShowReload(false)
            //     })
            //     .catch((error) => console.error("Error:", error));
        }

    }, [firstDayOfPrevMonth, lasttDayOfPrevMonth])

    useEffect(() => {
        setTotalSales(null)

        if (firstDayOfPrevYear, lasttDayOfPrevYear) {
            setShowReload(true)
            const fetchData = async () => {
                try {
                    const response = await axios.get(
                        `https://cubixweberp.com:199/api/Dashboard/DashBoard` +
                        `?cmpcode=${cmpcode}&guid=${privatek}&mod=T_SALESPERSON&s1=%27%27&s2=%27%27&s3=%27%27&i1=0&i2=0&dt1=${firstDayOfPrevYear}&dt2=${lasttDayOfPrevYear}`
                    );

                    // Assuming the API response has an array of items with properties like 'Sman' and 'SALES_AMT'
                    const sortedItems = response.data.sort((a, b) => b.SALES_AMT - a.SALES_AMT);

                    // console.log(sortedItems)

                    // Get the top sales person from the first item in the sorted array
                    setTopSalesPerson(sortedItems && sortedItems)
                    // setTopSalesPerson(sortedItems.length > 0 ? sortedItems[0].SmanName.trim() : '');
                } catch (error) {
                    console.error('Error fetching data:', error);
                    // You might want to handle the error state here
                }
            };

            fetchData();
            setShowReload(false)
            // const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOP_GROUP&s1=%27100%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=${firstDayOfPrevYear}&dt2=${lasttDayOfPrevYear}`;
            // // console.log(url)
            // fetch(url)
            //     .then((response) => response.json())
            //     .then((data) => {
            //         setTopProducts(data);
            //         setShowReload(false)
            //     })
            //     .catch((error) => console.error("Error:", error));
        }

    }, [firstDayOfPrevYear, lasttDayOfPrevYear])



    useEffect(() => {
        setTotalSales(null)
        if (currentDate) {
            setShowReload(true)
            const fetchData = async () => {
                try {
                    const response = await axios.get(
                        `https://cubixweberp.com:199/api/Dashboard/DashBoard` +
                        `?cmpcode=${cmpcode}&guid=${privatek}&mod=T_SALESPERSON&s1=%27%27&s2=%27%27&s3=%27%27&i1=0&i2=0&dt1=${currentDate}&dt2=${currentDate}`
                    );

                    // Assuming the API response has an array of items with properties like 'Sman' and 'SALES_AMT'
                    const sortedItems = response.data.sort((a, b) => b.SALES_AMT - a.SALES_AMT);

                    // console.log(sortedItems)

                    // Get the top sales person from the first item in the sorted array
                    setTopSalesPerson(sortedItems && sortedItems)
                    // setTopSalesPerson(sortedItems.length > 0 ? sortedItems[0].SmanName.trim() : '');
                } catch (error) {
                    console.error('Error fetching data:', error);
                    // You might want to handle the error state here
                }
            };

            fetchData();
            setShowReload(false)
            // const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOP_GROUP&s1=%27100%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=${currentDate}&dt2=${currentDate}`;
            // // console.log(url)
            // fetch(url)
            //     .then((response) => response.json())
            //     .then((data) => {
            //         setTopProducts(data);
            //         setShowReload(false)
            //     })
            //     .catch((error) => console.error("Error:", error));
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

        // Check if the screen width is greater than or equal to 767 (adjust as needed)
        if (window.innerWidth >= 767 || window.innerWidth <= 767) {
            // console.log(isBigScreen)
            setShowReload(true)
            const fetchData = async () => {
                try {
                    const response = await axios.get(
                        `https://cubixweberp.com:199/api/Dashboard/DashBoard` +
                        `?cmpcode=${cmpcode}&guid=${privatek}&mod=T_SALESPERSON&s1=%27%27&s2=%27%27&s3=%27%27&i1=0&i2=0&dt1=${formattedDate}&dt2=${formattedDate}`
                    );

                    // Assuming the API response has an array of items with properties like 'Sman' and 'SALES_AMT'
                    const sortedItems = response.data.sort((a, b) => b.SALES_AMT - a.SALES_AMT);

                    // console.log(sortedItems)

                    // Get the top sales person from the first item in the sorted array
                    setTopSalesPerson(sortedItems && sortedItems)
                    // setTopSalesPerson(sortedItems.length > 0 ? sortedItems[0].SmanName.trim() : '');
                } catch (error) {
                    console.error('Error fetching data:', error);
                    // You might want to handle the error state here
                }
            };

            fetchData();
            setShowReload(false)
            // const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOP_GROUP&s1=%27100%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=${formattedDate}&dt2=${formattedDate}`;
            // fetch(url)
            //     .then((response) => response.json())
            //     .then((data) => {
            //         setTopProducts(data);
            //         setShowReload(false);
            //     })
            //     .catch((error) => console.error("Error:", error));
        }
    }, [todayDate]);


    // useEffect(() => {
    //     // Run API logic for both mobile and non-mobile devices
    //     apiCallback();
    // }, []);

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
    const [containerHeight, setContainerHeight] = useState(420); // Initial container height

    useEffect(() => {
        // Update font size and container height based on screen width
        const updateStyles = () => {
            if (window.innerWidth <= 480) {
                setFontSize(12);
                setContainerHeight(300);
            } else {
                setFontSize(16);
                setContainerHeight(420);
            }
        };

        // Initial styles setup
        updateStyles();

        // Event listener for window resize
        window.addEventListener('resize', updateStyles);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateStyles);
        };
    }, []);

    const toggleProduct = () => {
        setproductisOpen(!productisOpen);
    }
    const toggleMonth = () => {
        setmonthisOpen(!monthisOpen);
    }

    // useEffect(() => {
    //     setShowReload(true)
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(
    //                 `https://cubixweberp.com:199/api/Dashboard/DashBoard` +
    //                 `?cmpcode=${cmpcode}&guid=${privatek}&mod=T_SALESPERSON&s1=%27%27&s2=%27%27&s3=%27%27&i1=0&i2=0&dt1=${firstDayOfPrevYear}&dt2=${lasttDayOfPrevYear}`
    //             );

    //             // Assuming the API response has an array of items with properties like 'Sman' and 'SALES_AMT'
    //             const sortedItems = response.data.sort((a, b) => b.SALES_AMT - a.SALES_AMT);

    //             // console.log(sortedItems)

    //             // Get the top sales person from the first item in the sorted array
    //             setTopSalesPerson(sortedItems)
    //             // setTopSalesPerson(sortedItems.length > 0 ? sortedItems[0].SmanName.trim() : '');
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //             // You might want to handle the error state here
    //         }
    //     };

    //     fetchData();
    //     setShowReload(false)
    //     // setShowReload(true)
    //     // const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOP_GROUP&s1=%27100%27&s2=%27%27&s3=%27%27&i1=${date}&i2=0&dt1=1-1-2012&dt2=1-1-2023`
    //     // // console.log(url)
    //     // fetch(url)
    //     //     .then((response) => response.json())
    //     //     .then((data) => {
    //     //         setTopProducts(data);
    //     //         setShowReload(false)
    //     //     })
    //     //     .catch((error) => console.error("Error:", error));
    // }, [date])

    useEffect(() => {
        if (date === 1) {
            setDateSelectView('')
        } else if (date === 7) {
            setDateSelectView('Last 7 Days')
        } else if (date === 30) {
            setDateSelectView('Last 30 Days')
        }
    }, [date])


    // date filter codes ends


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://cubixweberp.com:199/api/Dashboard/DashBoard` +
                    `?cmpcode=${cmpcode}&guid=${privatek}&mod=T_SALESPERSON&s1=%27%27&s2=%27%27&s3=%27%27&i1=0&i2=0&dt1=1-JAN-2023&dt2=31-DEC-2023`
                );

                // Assuming the API response has an array of items with properties like 'Sman' and 'SALES_AMT'
                const sortedItems = response.data.sort((a, b) => b.SALES_AMT - a.SALES_AMT);

                // console.log(sortedItems)

                // Get the top sales person from the first item in the sorted array
                setTopSalesPerson(sortedItems && sortedItems)
                // setTopSalesPerson(sortedItems.length > 0 ? sortedItems[0].SmanName.trim() : '');
            } catch (error) {
                console.error('Error fetching data:', error);
                // You might want to handle the error state here
            }
        };

        fetchData();
    }, []);

    return (
        <div className="TopSalesManWrapper border rounded">

            <div className='TopSalesManCont'>

                <div className='TopSalesManHead'>
                    <div>Top Sales Man</div>
                    <div className='TSDropItems' id='DoughDrop' style={{ width: "25%" }}>
                        <div id="deptSalesTopBan" style={{ fontSize: "18px" }}>
                            <div onClick={() => setTodaysDate()} style={{ color: "#7F7F7F", cursor: "pointer" }}>Today</div>
                            <div>
                                {
                                    isOpen ? <FaSortDown className='TSDropDropped' onClick={() => setTodaysDate()} /> : <FaSortDown className='TSDrop' onClick={() => setTodaysDate()} />
                                }
                            </div>
                        </div>
                        {/* <div className='TSDText'><FaListUl className='TSList' onClick={handleOpen} /></div> */}
                    </div>
                </div>
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
                <div className='TopSalesManTableCover'>
                    <table class="table table-light mt-4" id="cashTable">
                        <thead>
                            <tr>
                                <th scope="col" style={{ textAlign: "left" }}>Name</th>
                                <th scope="col" style={{ textAlign: "right" }}>Sales Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                topSalesPerson.length === 0 &&
                                <tr>
                                    <td colSpan={2} style={{ color: "red", fontSize: "16px", fontWeight: "bold" }}>No data available in the specified date range</td>
                                </tr>
                            }
                            {
                                showReload ? (
                                    <RotatingLines
                                        strokeColor="#107F6A"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="40"
                                        visible={true}
                                    />
                                ) : (
                                    topSalesPerson.map((item, index) => (
                                        <tr key={index}>
                                            <td id="cashTds">{item.SmanName ? item.SmanName : "Nil"}</td>
                                            <td className='BoxSales' id="cashTds">{item.SALES_AMT ? item.SALES_AMT : "Nil"}</td>
                                        </tr>
                                    ))
                                )
                            }

                            {/* {
                                topSalesPerson && topSalesPerson.length > 0 && topSalesPerson.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.SmanName ? item.SmanName : "Nil"}</td>
                                        <td className='BoxSales'>{item.SALES_AMT ? item.SALES_AMT : "Nil"}</td>
                                    </tr>
                                ))
                            } */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TopSalesMan