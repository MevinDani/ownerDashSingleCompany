import React, { useEffect, useState } from 'react'
import './LeavePage.css'
// import LeaveRequest from '../Components/LeaveRequest'
// import ApprovedLeaves from '../Components/ApprovedLeaves'
// import NavBar from '../NavBar/NavBar'
// import Boxes from '../Components/Boxes'
import axios from 'axios'
// import LeaveCount from '../Components/LeaveCount'
// import EmpOnLeave from '../Components/EmpOnLeave'
import LeaveRequest from '../Components/HomeComponents/LeaveRequest'
// import ApprovedLeaves from '../Components/HomeComponents/ApprovedLeaves'
import Boxes from '../Components/HomeComponents/Boxes'
import LeaveCount from '../Components/HomeComponents/LeaveCount'
import EmpOnLeave from '../Components/HomeComponents/EmpOnLeave'


const LeavePage = () => {

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

    // console.log(jobTitleData, 'jobTitleData')
    // console.log(jobTitle, 'jobTitle')
    // console.log(jobDivisionData, 'jobDivisionData')
    return (
        <>
            {/* <NavBar /> */}
            <div className='LeavePageWrapper'>
                <div className='LeaveManageText'>Leave Management</div>

                <div className='LeavePageCont'>


                    <div className='LeaveFilter'>
                        <div style={{ display: "flex", alignItems: "center", fontSize: "18px" }}>Filter</div>
                        <div className='dropCont'>
                            <div class="dropdown-center">
                                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {jobTitle ? jobTitle : "Title"}
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
                                    {jobDivision ? jobDivision : "Division"}
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
                                    {jobGrade ? jobGrade : "Grade"}
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

                    <div className='LeaveReq'><Boxes iconBackgroundColor='#2011F0' head='Leave Requests' jobTitle={jobTitle} jobDivision={jobDivision} jobGrade={jobGrade} /></div>
                    <div className='LeaveSpan3'><LeaveRequest leaveStatus='PENDING' /></div>
                    <div className='LeaveSpan3'><LeaveRequest leaveStatus='APPROVED' /></div>
                    <div className='LeaveSpan4'><LeaveRequest leaveStatus='REJECTED' /></div>

                    <div className='LeaveCount'><LeaveCount jobTitle={jobTitle} jobDivision={jobDivision} jobGrade={jobGrade} /></div>

                    <div className='EmpOnLeave'><EmpOnLeave /></div>
                </div>
            </div >
        </>
    )
}

export default LeavePage