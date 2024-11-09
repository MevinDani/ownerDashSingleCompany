import React, { useEffect, useState } from 'react'
import './LeaveCount.css'
import axios from 'axios'
import { ThreeDots } from 'react-loader-spinner'


const LeaveCount = ({ jobTitle, jobDivision, jobGrade }) => {

    const [leaveContData, setLeaveCount] = useState(null)

    useEffect(() => {
        setLeaveCount(null)
        const fetchData = async () => {
            try {

                const response = await axios.get(`https://cubixweberp.com:156/api/HRDashboard/CPAYS/HO/LEAVECOUNT/2022-09-10/2022-09-12/${jobTitle ? jobTitle : "ALL"}/${jobGrade ? jobGrade : "ALL"}/${jobDivision ? jobDivision : "ALL"}/ALL/ALL`);
                setLeaveCount(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, [jobTitle, jobDivision, jobGrade])

    // console.log(leaveContData, 'leaveContData')
    return (
        <div className='LeavesCountWrapper'>

            <div className='LeavesCountCont'>
                <div className='ApprovalsHead'>Leave Count</div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Count</th>
                            {/* <th scope="col">Reason</th>
                        <th scope="col">Status</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leaveContData && leaveContData.length > 0 ? (
                                leaveContData.map((item, key) => (
                                    <tr key={key}>
                                        <td>{item.leave_key ? item.leave_key : <ThreeDots
                                            visible={true}
                                            height="30"
                                            width="30"
                                            color="#4fa94d"
                                            radius="6"
                                            ariaLabel="three-dots-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                        />}</td>
                                        <td>{item.count ? item.count : <ThreeDots
                                            visible={true}
                                            height="30"
                                            width="30"
                                            color="#4fa94d"
                                            radius="6"
                                            ariaLabel="three-dots-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                        />}</td>
                                    </tr>
                                ))
                            ) : (
                                leaveContData === null ? (
                                    <tr>
                                        <td colSpan='2'>
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
                                        </td>
                                    </tr>
                                ) : (
                                    <tr>
                                        <td colSpan='2' style={{ color: "red", fontSize: "12px" }}>No Data Available</td>
                                    </tr>
                                )
                            )
                        }

                        {/* {
                            leaveContData && leaveContData.length > 0 ? leaveContData.map((item, key) => (
                                <tr key={key}>
                                    <td>{item.leave_key ? item.leave_key : <ThreeDots
                                        visible={true}
                                        height="30"
                                        width="30"
                                        color="#4fa94d"
                                        radius="6"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    />}</td>
                                    <td>{item.count ? item.count : <ThreeDots
                                        visible={true}
                                        height="30"
                                        width="30"
                                        color="#4fa94d"
                                        radius="6"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    />}</td>
                                </tr>
                            )) : <tr>
                                <td colSpan='2' style={{ color: "red", fontSize: "12px" }}>No Data Availabe</td>
                            </tr>
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LeaveCount