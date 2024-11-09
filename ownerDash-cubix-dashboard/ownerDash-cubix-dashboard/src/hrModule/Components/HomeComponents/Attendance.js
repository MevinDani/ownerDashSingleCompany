import React, { useEffect, useState } from 'react'
import './Attendance.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { MdKeyboardArrowRight } from "react-icons/md";
import axios from 'axios';
import baseUrl from '../Baseurl/BaseURL.js'
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { format, addDays, subDays } from 'date-fns';


ChartJS.register(ArcElement, Tooltip, Legend);

const Attendance = ({ ViewMore, jobTitle, jobDivision, jobGrade }) => {

    const navigate = useNavigate()
    const [todaysAttendance, setTodaysAttendance] = useState(null)

    const [apidate, setApidate] = useState(null)

    const currentDate = new Date();
    const todayDate = currentDate.toISOString().split('T')[0];

    useEffect(() => {
        setTodaysAttendance(null)

        const currentDate = new Date();
        const todayDate = currentDate.toISOString().split('T')[0];
        setApidate(todayDate)

        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/api/HRDashboard/CPAYS/HO/ATTENDANCE/${todayDate}/${todayDate}/ALL/ALL/ALL/ALL/ALL`);
                setTodaysAttendance(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, [])

    useEffect(() => {
        setTodaysAttendance(null)

        // const currentDate = new Date();
        // const todayDate = currentDate.toISOString().split('T')[0];
        // setApidate(todayDate)

        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/api/HRDashboard/CPAYS/HO/ATTENDANCE/${apidate}/${apidate}/${jobTitle ? jobTitle : "ALL"}/${jobGrade ? jobGrade : "ALL"}/${jobDivision ? jobDivision : "ALL"}/ALL/ALL`);
                setTodaysAttendance(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, [jobTitle, jobDivision, jobGrade, apidate])

    const handleAttendanceView = () => {
        const mainBodyContainer = document.querySelector('.main-body');
        if (mainBodyContainer) {
            mainBodyContainer.scrollTop = 0;
        }
        navigate('/admin/attendancePage');
    }


    // console.log(todaysAttendance, 'todaysAttendance')

    const leaveTypes = todaysAttendance && todaysAttendance.map(entry => entry.leave_key);
    const leaveCounts = todaysAttendance && todaysAttendance.map(entry => entry.count);

    const data = {
        labels: leaveTypes,
        datasets: [
            {
                data: leaveCounts, // Adjust the data values according to your needs
                // backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
                hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
                // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    const options = {
        cutoutPercentage: 50, // Adjust the cutout percentage to create a donut chart
    };

    const handleDatePlus = () => {
        if (apidate === todayDate) {
            return
        }
        setApidate((prevDate) => format(addDays(new Date(prevDate), 1), 'yyyy-MM-dd'));
    };

    const handleDateMinus = () => {
        setApidate((prevDate) => format(subDays(new Date(prevDate), 1), 'yyyy-MM-dd'));
    };

    // console.log(apidate, 'apidate')

    return (
        <div className='AttendanceWrapper'>

            <div className='AttendancsFilterHead' style={{ fontSize: "14px" }}>
                <div className='AttendanceFilterCont'>
                    <div style={{ cursor: "pointer" }} onClick={() => handleDateMinus()}><FaMinus /></div>
                    <div style={{ color: "#03ae00" }}>{apidate === todayDate ? 'Todays Attendance' : apidate}</div>
                    <div style={{ cursor: "pointer" }} onClick={() => handleDatePlus()}><FaPlus /></div>
                </div>
            </div>
            <div className='AttendanceCont'>
                {
                    todaysAttendance && todaysAttendance.length > 0 ? (
                        <Doughnut data={data && data} options={options} />
                    ) : (
                        todaysAttendance === null ? (
                            <>
                                <div colSpan='2'>
                                    <ThreeDots
                                        visible={true}
                                        height="30"
                                        width="30"
                                        color="#4fa94d"
                                        radius="6"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div colSpan='2' style={{ color: "red", fontSize: "12px" }}>No Data Available</div>
                            </>
                        )
                    )
                }
            </div>
            {
                ViewMore ? "" :
                    <div className='AttendanceViewMore'>
                        <span onClick={() => handleAttendanceView()}>View More <MdKeyboardArrowRight style={{ fontSize: "16px" }} /></span>
                    </div>
            }
        </div>
    )
}

export default Attendance