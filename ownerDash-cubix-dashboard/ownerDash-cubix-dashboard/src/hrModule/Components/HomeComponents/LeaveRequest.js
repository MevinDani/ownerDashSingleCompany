import React, { useEffect, useState } from 'react'
import './LeaveRequest.css'
import axios from 'axios'
import { ThreeDots } from 'react-loader-spinner'


const LeaveRequest = ({ leaveStatus }) => {

    const [leavePending, setLeavePending] = useState(null)

    useEffect(() => {
        setLeavePending(null)
        const fetchData = async () => {
            try {

                const response = await axios.get(`https://cubixweberp.com:156/api/PersonalInfoLeaveApplicationList/CPAYS/${leaveStatus}/-`);
                setLeavePending(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, [leaveStatus])

    // console.log(leavePending, 'leavePending')
    return (
        <div className='LeaveRequestWrapper'>
            <div className='LeaveRequestHead'>
                {leaveStatus === 'PENDING'
                    ? 'Pending Leave Request'
                    : leaveStatus === 'APPROVED'
                        ? 'Approved Leave Request'
                        : leaveStatus === 'REJECTED'
                            ? 'Rejected Leave Request'
                            : ''}
            </div>

            <div className='LeaveRequestCont'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leavePending && leavePending.length > 0 ? (
                                leavePending.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.Name ? item.Name.split(' ')[0] : "Nil"}</td>
                                        <td>{item.FromDate ? new Date(item.FromDate).toLocaleDateString() : "Nil"}</td>
                                        <td>{item.ToDate ? new Date(item.ToDate).toLocaleDateString() : "Nil"}</td>
                                        <td>{item.Reason ? item.Reason : "Nil"}</td>
                                        <td>
                                            <span
                                                className={
                                                    item.ApprovalStatus === 'APPROVED'
                                                        ? 'LRQApproved'
                                                        : item.ApprovalStatus === 'REJECTED'
                                                            ? 'LRQRejected'
                                                            : 'LRQPending'
                                                }
                                            >
                                                {item.ApprovalStatus === '-' ? 'Pending' : item.ApprovalStatus || 'Nil'}
                                            </span>
                                        </td>
                                    </tr>

                                ))
                            ) : (
                                leavePending === null ? (
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
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LeaveRequest