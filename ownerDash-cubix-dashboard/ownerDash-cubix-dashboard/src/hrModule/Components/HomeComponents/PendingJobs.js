import React from 'react'
import './PendingJobs.css'

const PendingJobs = () => {
    return (
        <div className='PendingJobsWrapper'>
            <div className='PendingJobsCont'>
                <div className='PendingJobsHead'>My Pending Jobs</div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col" className='PJLeftHead'>Status</th>
                            {/* <th scope="col">Reason</th>
                            <th scope="col">Status</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Leave Approvals</td>
                            <td>
                                <div className='PendingJobButtons'>
                                    {/* <span className='PendingJobView'>View</span> */}
                                    <span className='PendingJobOnG'>Pending</span>
                                </div>
                            </td>
                            {/* <td>Doctor Visit</td>
                            <td><span className='LRQApproved'>Approved</span></td> */}
                        </tr>
                        <tr>
                            <td>Certificate Approvals</td>
                            <td>
                                <div className='PendingJobButtons'>
                                    {/* <span className='PendingJobView'>View</span> */}
                                    <span className='PendingJobOnG'>Pending</span>
                                </div>
                            </td>
                            {/* <td>New Year Party</td>
                            <td><span className='LRQPending'>Pending</span></td> */}
                        </tr>
                        <tr>
                            <td>Payment Approvals</td>
                            <td>
                                <div className='PendingJobButtons'>
                                    {/* <span className='PendingJobView'>View</span> */}
                                    <span className='PendingJobOnG'>Pending</span>
                                </div>
                            </td>
                            {/* <td>Holiday</td>
                            <td><span className='LRQRejected'>Rejected</span></td> */}
                        </tr>
                        <tr>
                            <td>Project Approvals</td>
                            <td>
                                <div className='PendingJobButtons'>
                                    {/* <span className='PendingJobView'>View</span> */}
                                    <span className='PendingJobOnG'>Pending</span>
                                </div>
                            </td>
                            {/* <td>Doctor Visit</td>
                            <td><span className='LRQApproved'>Approved</span></td> */}
                        </tr>
                        <tr>
                            <td>Contract Approvals</td>
                            <td>
                                <div className='PendingJobButtons'>
                                    {/* <span className='PendingJobView'>View</span> */}
                                    <span className='PendingJobOnG'>Pending</span>
                                </div>
                            </td>
                            {/* <td>New Year Party</td>
                            <td><span className='LRQPending'>Pending</span></td> */}
                        </tr>
                        <tr>
                            <td>Payroll</td>
                            <td>
                                <div className='PendingJobButtons'>
                                    {/* <span className='PendingJobView'>View</span> */}
                                    <span className='PendingJobOnG'>Pending</span>
                                </div>
                            </td>
                            {/* <td>Holiday</td>
                            <td><span className='LRQRejected'>Rejected</span></td> */}
                        </tr>
                        <tr>
                            <td>Leave Approvals</td>
                            <td>
                                <div className='PendingJobButtons'>
                                    {/* <span className='PendingJobView'>View</span> */}
                                    <span className='PendingJobOnG'>Pending</span>
                                </div>
                            </td>
                            {/* <td>Doctor Visit</td>
                            <td><span className='LRQApproved'>Approved</span></td> */}
                        </tr>
                        <tr>
                            <td>Certificate Approvals</td>
                            <td>
                                <div className='PendingJobButtons'>
                                    {/* <span className='PendingJobView'>View</span> */}
                                    <span className='PendingJobOnG'>Pending</span>
                                </div>
                            </td>
                            {/* <td>New Year Party</td>
                            <td><span className='LRQPending'>Pending</span></td> */}
                        </tr>
                        <tr>
                            <td>Payment Approvals</td>
                            <td>
                                <div className='PendingJobButtons'>
                                    {/* <span className='PendingJobView'>View</span> */}
                                    <span className='PendingJobOnG'>Pending</span>
                                </div>
                            </td>
                            {/* <td>Holiday</td>
                            <td><span className='LRQRejected'>Rejected</span></td> */}
                        </tr>
                        <tr>
                            <td>Project Approvals</td>
                            <td>
                                <div className='PendingJobButtons'>
                                    {/* <span className='PendingJobView'>View</span> */}
                                    <span className='PendingJobOnG'>Pending</span>
                                </div>
                            </td>
                            {/* <td>Doctor Visit</td>
                            <td><span className='LRQApproved'>Approved</span></td> */}
                        </tr>
                        <tr>
                            <td>Contract Approvals</td>
                            <td>
                                <div className='PendingJobButtons'>
                                    {/* <span className='PendingJobView'>View</span> */}
                                    <span className='PendingJobOnG'>Pending</span>
                                </div>
                            </td>
                            {/* <td>New Year Party</td>
                            <td><span className='LRQPending'>Pending</span></td> */}
                        </tr>
                        <tr>
                            <td>Payroll</td>
                            <td>
                                <div className='PendingJobButtons'>
                                    {/* <span className='PendingJobView'>View</span> */}
                                    <span className='PendingJobOnG'>Pending</span>
                                </div>
                            </td>
                            {/* <td>Holiday</td>
                            <td><span className='LRQRejected'>Rejected</span></td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PendingJobs