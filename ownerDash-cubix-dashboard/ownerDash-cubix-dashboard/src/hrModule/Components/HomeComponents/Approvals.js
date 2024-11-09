import React, { useEffect, useState } from 'react'
import './Approvals.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ThreeDots } from 'react-loader-spinner'


const Approvals = () => {

    const [approvalsData, setApprovalsData] = useState(null)

    useEffect(() => {
        setApprovalsData(null)
        const fetchData = async () => {
            try {

                const response = await axios.get(`https://cubixweberp.com:156/api/HRDashboard/CPAYS/HO/APPROVALS/1900-01-01/1900-01-01/ALL/ALL/ALL/ALL/ALL`);
                setApprovalsData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
        fetchData();
    }, [])

    const navigate = useNavigate()

    const handleLeavePage = (category) => {
        const mainBodyContainer = document.querySelector('.main-body');
        if (mainBodyContainer) {
            mainBodyContainer.scrollTop = 0;
        }
        if (category === 'leaveManagement') navigate('/admin/leavePage')
    }
    return (
        <div className='ApprovalsWrapper'>

            <div className='ApprovalsCont'>
                <div className='ApprovalsHead'>Approvals</div>
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
                        <tr onClick={() => handleLeavePage('leaveManagement')}>
                            <td>LeaveManagement</td>
                            <td>Open</td>
                        </tr>
                        {
                            approvalsData && approvalsData.length > 0 ? (
                                approvalsData.map((item, index) => (
                                    <tr onClick={() => handleLeavePage(item.Category)} key={index}>
                                        <td>{item.Category}</td>
                                        <td>{item.CNT}</td>
                                    </tr>
                                ))
                            ) : (
                                approvalsData === null ? (
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

export default Approvals