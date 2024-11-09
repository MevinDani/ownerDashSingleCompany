import React, { useEffect, useState } from 'react'
import './AttendancePage.css'
// import NavBar from '../NavBar/NavBar'
import axios from 'axios'
import Attendance from '../Components/HomeComponents/Attendance'


const AttendancePage = () => {

    const [jobTitleData, setJobTitleData] = useState(null)
    const [jobTitle, setJobTitle] = useState(null)

    const [jobDivisionData, setJobDivisionData] = useState(null)
    const [jobDivision, setJobDivision] = useState(null)

    const [jobGradeData, setJobGradeData] = useState(null)
    const [jobGrade, setJobGrade] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get('https://cubixweberp.com:156/api/MasterList/CPAYS/JOBTITLE');
                setJobTitleData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get('https://cubixweberp.com:156/api/MASTERLIST/CPAYS/DIVISION');
                setJobDivisionData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get('https://cubixweberp.com:156/api/MASTERLIST/CPAYS/GRADE');
                setJobGradeData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, [])

    return (
        <>
            {/* <NavBar /> */}
            <div className='AttendancePageWrapper'>
                <div className='AttendancePageText'>Attendance Management</div>

                <div className='AttendancePageCont'>

                    <div className='LeaveFilter'>
                        <div style={{ display: "flex", alignItems: "center", fontSize: "18px" }}>Filter</div>
                        <div className='dropCont'>
                            <div class="dropdown-center">
                                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {jobTitle === 'ALL' ? 'Title' : jobTitle || "Title"}
                                </button>
                                <ul class="dropdown-menu">
                                    <li onClick={() => setJobTitle('ALL')}> <a class="dropdown-item">Title-ALL</a></li>
                                    {
                                        jobTitleData && jobTitleData.map((item, key) => (
                                            <li key={key} onClick={() => setJobTitle(item.Description)}><a class="dropdown-item">{item.Description}</a></li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div class="dropdown-center">
                                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {jobDivision === 'ALL' ? 'Division' : jobDivision || "Division"}
                                    {/* {jobDivision ? jobDivision : "Division"} */}
                                </button>
                                <ul class="dropdown-menu">
                                    <li onClick={() => setJobDivision('ALL')}><a class="dropdown-item">Division-ALL</a></li>
                                    {
                                        jobDivisionData && jobDivisionData.map((item, key) => (
                                            <li key={key} onClick={() => setJobDivision(item.Description)}><a class="dropdown-item">{item.Description}</a></li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div class="dropdown-center">
                                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {jobGrade === 'ALL' ? 'Grade' : jobGrade || "Grade"}
                                    {/* {jobGrade ? jobGrade : "Grade"} */}
                                </button>
                                <ul class="dropdown-menu">
                                    <li onClick={() => setJobGrade('ALL')}><a class="dropdown-item">Grade-ALL</a></li>
                                    {
                                        jobGradeData && jobGradeData.map((item, key) => (
                                            <li key={key} onClick={() => setJobGrade(item.Description)}><a class="dropdown-item">{item.Description}</a></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='AttendanceDoughCont'>
                        <Attendance ViewMore={true} jobTitle={jobTitle} jobDivision={jobDivision} jobGrade={jobGrade} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AttendancePage