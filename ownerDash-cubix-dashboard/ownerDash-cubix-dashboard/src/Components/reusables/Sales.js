import React, { useEffect, useState } from 'react'
import './Sales.css'
import { FaSortDown } from "react-icons/fa";
import { FaSortUp } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { RotatingLines } from 'react-loader-spinner'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IoCaretBack } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import list from '../../images/card_list_svg_file.svg'
import DateChanger from './DateChanger';


const TodaySales = () => {

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

    const [departmentColors, setDepartmentColors] = useState([]);

    const [showDateChanger, setShowDateChanger] = useState(false)

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

        const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOTAL_SALES&s1=%27%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=${todayDate}&dt2=${todayDate}`;
        // console.log(url)
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setSaleData(data)
                const totalSales = data.reduce((acc, item) => acc + item.SALES_AMT, 0);

                const roundedTotalSales = totalSales.toFixed(2);

                if (roundedTotalSales) setTotalSales(roundedTotalSales)
                // console.log(roundedTotalSales);
            })
            .catch(error => console.error('Error:', error))
    }
    const setTodaysDatenoToggle = () => {
        setYearBottView(todayDate)
        setdt1(todayDate)
        setdt2(todayDate)
        setCurrentDate(todayDate);
        setTotalSales(null)

        const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOTAL_SALES&s1=%27%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=${todayDate}&dt2=${todayDate}`;
        // console.log(url)
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setSaleData(data)
                const totalSales = data.reduce((acc, item) => acc + item.SALES_AMT, 0);

                const roundedTotalSales = totalSales.toFixed(2);

                if (roundedTotalSales) setTotalSales(roundedTotalSales)
                // console.log(roundedTotalSales);
            })
            .catch(error => console.error('Error:', error))
    }

    const getFirstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1);
    };

    const setTodaysMonth = () => {
        setYearBottView('')
        setFirstDayOfPmonth(null)
        setLasttDayOfPmonth(null)
        setCurrentDateMonth(todayDate)
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

        const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOTAL_SALES&s1=%27%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=${firstDayFormatted}&dt2=${todayDate}`;
        // console.log(url)
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setSaleData(data)
                const totalSales = data.reduce((acc, item) => acc + item.SALES_AMT, 0);

                const roundedTotalSales = totalSales.toFixed(2);

                if (roundedTotalSales) setTotalSales(roundedTotalSales)
                // console.log(roundedTotalSales);
            })
            .catch(error => console.error('Error:', error))
        // console.log(firstDayFormatted);
    }

    const setTodaysYear = () => {
        setYearBottView('')
        setFirstDayOfPYear(null)
        setLasttDayOfPYear(null)
        setCurrentDateYear(todayDate)
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

        const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOTAL_SALES&s1=%27%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=${firstDayFormatted}&dt2=${currentDayFormatted}`;
        // console.log(url);

        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setSaleData(data);
                const totalSales = data.reduce((acc, item) => acc + item.SALES_AMT, 0);
                const roundedTotalSales = totalSales.toFixed(2);

                if (roundedTotalSales) setTotalSales(roundedTotalSales);
                // console.log(roundedTotalSales);
            })
            .catch(error => console.error('Error:', error));

        // console.log(firstDayFormatted);
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
        // console.log('First Day of Previous Month:', updatedDateInFormat);
        // console.log(updatedDate)
        // console.log('Last Day of Previous Month:', lastDayFormatted);
    };

    // console.log(firstDayOfPrevMonth, lasttDayOfPrevMonth)

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


    // useEffect(() => {
    //     setTotalSales(null)

    //     const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOTAL_SALES&s1=%27%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=${firstDayOfPrevYear}&dt2=${lasttDayOfPrevYear}`;
    //     console.log(url)
    //     fetch(url)
    //         .then(response => response.json())
    //         .then((data) => {
    //             setSaleData(data)
    //             const totalSales = data.reduce((acc, item) => acc + item.SALES_AMT, 0);

    //             const roundedTotalSales = totalSales.toFixed(2);

    //             if (roundedTotalSales) setTotalSales(roundedTotalSales)
    //             console.log(roundedTotalSales);
    //         })
    //         .catch(error => console.error('Error:', error))
    // }, [firstDayOfPrevYear, lasttDayOfPrevYear])


    useEffect(() => {
        setTotalSales(null)

        if (firstDayOfPrevMonth, lasttDayOfPrevMonth) {

            const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOTAL_SALES&s1=%27%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=${firstDayOfPrevMonth}&dt2=${lasttDayOfPrevMonth}`;
            // console.log(url, 'prevMonth runs')
            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    setSaleData(data)
                    const totalSales = data.reduce((acc, item) => acc + item.SALES_AMT, 0);

                    const roundedTotalSales = totalSales.toFixed(2);

                    if (roundedTotalSales) setTotalSales(roundedTotalSales)
                    // console.log(roundedTotalSales);
                })
                .catch(error => console.error('Error:', error))
        }

    }, [firstDayOfPrevMonth, lasttDayOfPrevMonth])

    useEffect(() => {
        setTotalSales(null)

        if (firstDayOfPrevYear, lasttDayOfPrevYear) {

            const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOTAL_SALES&s1=%27%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=${firstDayOfPrevYear}&dt2=${lasttDayOfPrevYear}`;
            // console.log(url)
            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    setSaleData(data)
                    const totalSales = data.reduce((acc, item) => acc + item.SALES_AMT, 0);

                    const roundedTotalSales = totalSales.toFixed(2);

                    if (roundedTotalSales) setTotalSales(roundedTotalSales)
                    // console.log(roundedTotalSales);
                })
                .catch(error => console.error('Error:', error))
        }

    }, [firstDayOfPrevYear, lasttDayOfPrevYear])



    useEffect(() => {
        setTotalSales(null)

        if (currentDate) {
            const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOTAL_SALES&s1=%27%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=${currentDate}&dt2=${currentDate}`;
            // console.log(url)
            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    setSaleData(data)
                    const totalSales = data.reduce((acc, item) => acc + item.SALES_AMT, 0);

                    const roundedTotalSales = totalSales.toFixed(2);

                    if (roundedTotalSales) setTotalSales(roundedTotalSales)
                    // console.log(roundedTotalSales);
                })
                .catch(error => console.error('Error:', error))
        }
    }, [currentDate]);

    // useEffect(() => {
    //     setTotalSales(null)

    //     const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOTAL_SALES&s1=%27%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=${currentDateMonth}&dt2=${currentDateMonth}`;
    //     console.log(url)
    //     fetch(url)
    //         .then(response => response.json())
    //         .then((data) => {
    //             setSaleData(data)
    //             const totalSales = data.reduce((acc, item) => acc + item.SALES_AMT, 0);

    //             const roundedTotalSales = totalSales.toFixed(2);

    //             if (roundedTotalSales) setTotalSales(roundedTotalSales)
    //             console.log(roundedTotalSales);
    //         })
    //         .catch(error => console.error('Error:', error))
    // }, [currentDateMonth]);

    // useEffect(() => {
    //     setTotalSales(null)
    //     const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOTAL_SALES&s1=%27%27&s2=%27%27&s3=%27%27&i1=${i1date}&i2=0&dt1=1-1-2022&dt2=1-1-2022`;

    //     fetch(url)
    //         .then(response => response.json())
    //         .then((data) => {
    //             setSaleData(data)
    //             const totalSales = data.reduce((acc, item) => acc + item.SALES_AMT, 0);

    //             const roundedTotalSales = totalSales.toFixed(2);

    //             if (roundedTotalSales) setTotalSales(roundedTotalSales)
    //             console.log(roundedTotalSales);
    //         })
    //         .catch(error => console.error('Error:', error));
    // }, [i1date]);

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

        const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOTAL_SALES&s1=%27%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=${formattedDate}&dt2=${formattedDate}`;
        // console.log(url)
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setSaleData(data)
                const totalSales = data.reduce((acc, item) => acc + item.SALES_AMT, 0);

                const roundedTotalSales = totalSales.toFixed(2);

                if (roundedTotalSales) setTotalSales(roundedTotalSales)
                // console.log(roundedTotalSales);

                if (data.length > 0) {
                    const firstItem = data[0];
                    const departmentColors = {
                        bgColor: firstItem.bgColor,
                        foreColor: firstItem.foreColor,
                        imgUrl: firstItem.imgUrl,
                    };

                    setDepartmentColors(departmentColors);
                }
            })
            .catch(error => console.error('Error:', error))
    }, [todayDate]);

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

    // console.log(salesData)
    // console.log(i1date)
    // console.log(dt1)
    // console.log(dt2)

    // console.log(departmentColors)


    return (
        <div className='TSSaleswrapper'>
            <div className='TSCont'>
                <div className='TSMAINDROP'>
                    {!monthView && !yearView &&

                        <div className='TSDropCont' id='salesTopBanner'>
                            <div className='TsSalesText'>Total Sales</div>
                            <div className='TSDropItems'>
                                <span className='tdspan'>
                                    <div className='TSDText' onClick={() => setTodaysDate()} id='TSTodayClick'>Today's</div>
                                    <div className='TSDText' onClick={() => setTodaysDate()}>
                                        {
                                            isOpen ? <FaSortDown className='TSDropDropped' /> : <FaSortDown className='TSDrop' />
                                        }
                                        {/* onClick={toggleDropdown} */}
                                    </div>
                                </span>
                                {/* <div className='TSDText' id='eyeSales'><FaEye className='TSList' onClick={handleOpen} /></div> */}
                                <div className='TSDText' id='eyeSales'><img src={list} className='TSList' onClick={handleOpen} /></div>
                            </div>
                        </div>

                    }

                    {/* date changer */}

                    {
                        showDateChanger && (
                            <div className='DateChangerSalesBox'>
                                <DateChanger
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

                    {/* dropdowns day */}
                    {!monthView && !yearView && isOpen && (
                        <div className='TSDropDown'>
                            <div className='TSDropDownCont'>
                                <div className='TSDropDownText'><FaMinus className='FaMinus' onClick={() => previousDay()} />Day<FaPlus className='FaPlus' onClick={() => nextDay()} /></div>
                                <div className='TSDropDownText' onClick={() => setMonthViewFunc()}>This Month</div>
                                <div className='TSDropDownText' onClick={() => setYearViewFunc()}>This Year</div>
                            </div>
                        </div>
                    )}

                    {monthView &&
                        <div className='TSDropCont'>
                            <div className='TSDropItems'>
                                <div className='TSDText' onClick={() => setTodaysMonth()}>This Month</div>
                                <div className='TSDText'>
                                    {
                                        monthDrop ? <FaSortDown className='TSDropDropped' onClick={toggleMonthDropdown} /> : <FaSortDown className='TSDrop' onClick={toggleMonthDropdown} />
                                    }
                                </div>
                                <div className='TSDText'><FaEye className='TSList' onClick={handleOpen} /></div>
                            </div>
                        </div>
                    }

                    {/* dropdowns month */}
                    {monthView && monthDrop && (
                        <div className='TSDropDown'>
                            <div className='TSDropDownCont'>
                                <div className='TSDropDownText'><FaMinus className='FaMinus' onClick={() => previousMonth()} />Month<FaPlus className='FaPlus' onClick={() => nextMonth()} /></div>
                                <div className='TSDropDownText' onClick={() => setYearViewFunc()}>This Year</div>
                                <div className='TSDropDownText' onClick={() => setTodayViewFunc()}>Today</div>
                            </div>
                        </div>
                    )}

                    {yearView &&
                        <div className='TSDropCont'>
                            <div className='TSDropItems'>
                                <div className='TSDText' onClick={() => setTodaysYear()}>This Year</div>
                                <div className='TSDText'>
                                    {
                                        yearDrop ? <FaSortDown className='TSDropDropped' onClick={toggleYearDropdown} /> : <FaSortDown className='TSDrop' onClick={toggleYearDropdown} />
                                    }
                                </div>
                                <div className='TSDText'><FaEye className='TSList' onClick={handleOpen} /></div>
                            </div>
                        </div>
                    }

                    {/* dropdowns month */}
                    {yearView && yearDrop && (
                        <div className='TSDropDown'>
                            <div className='TSDropDownCont'>
                                <div className='TSDropDownText'><FaMinus className='FaMinus' onClick={() => previousYear()} />Year<FaPlus className='FaPlus' onClick={() => nextYear()} /></div>
                                <div className='TSDropDownText' onClick={() => setMonthViewFunc()}>This Month</div>
                                <div className='TSDropDownText' onClick={() => setTodayViewFunc()}>Today</div>
                            </div>
                        </div>
                    )}

                </div>
                <div className='TSSalesCont'>
                    <div className='TSSalesItems'>
                        {/* <div className='TSText'>Total Sales</div> */}
                        <div className='TSNum'>
                            {
                                totalSales ? totalSales : <RotatingLines
                                    strokeColor="#107F6A"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="40"
                                    visible={true}
                                />
                            }
                        </div>
                        {/* <div><button className='TSSalesButton'>view list</button></div> */}
                    </div>
                    {/* <div className='TSDaysView'>
                        <div className='TSDaysText'>{yearBottView}</div>
                    </div> */}
                </div>

            </div>

            {/* modal */}
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Inria Sans'
                }}
            >
                <Box sx={{
                    width: '800px', bgcolor: '#ADD8E6', outline: 'none', p: 2, overflowY: 'scroll', borderRadius: '6px', '@media (max-width: 760px)': {
                        height: 'auto', // Adjust the height for screens below 760px
                    },
                    maxHeight: '90vh', // Set the maximum height for the modal
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontFamily: 'Inria Sans', color: 'black', fontWeight: 'bold', display: "flex", justifyContent: "space-between", padding: "8px" }} >
                        <div>Sales Data</div>
                        <Button sx={{ color: 'white', fontWeight: 'bold', backgroundColor: "red" }} onClick={handleClose}>Close</Button>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, fontFamily: 'Inria Sans' }}>
                        <table class="table" style={{ fontSize: '16px', fontFamily: 'Inria Sans', width: "100%" }} id="cashTable">
                            <thead>
                                <tr>
                                    <th scope="col">Dept. No</th>
                                    <th scope="col">Dept. Name</th>
                                    <th scope="col" style={{ textAlign: "right" }}>Sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    openModal && salesData.map((i, k) => (
                                        <tr key={k}>
                                            <td id="cashTds" style={{ fontSize: '16px' }}>{i.DeptName}</td>
                                            <td id="cashTds" style={{ fontSize: '16px' }}>{i.Deptno}</td>
                                            <td id="cashTds" style={{ fontSize: '16px' }} className='BoxSales'>{i.SALES_AMT}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </Typography>
                    {/* <Button sx={{ color: 'black', fontWeight: 'bold' }} onClick={handleClose}>Close</Button> */}
                </Box>
            </Modal>
        </div >
    )
}

export default TodaySales