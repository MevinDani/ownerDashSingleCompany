import React from 'react'
import './ApprovedLeaves.css'

const ApprovedLeaves = () => {
    return (
        <div className='ApprovedLeavesWrapper'>

            <div className='ApprovedLeavesCont'>
                <div className='ApprovedLeavesHead'>Upcoming Approved Leaves</div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>10th Nov 2023</td>
                            <td>Doctor Visit</td>
                            <td><span className='LRQApproved'>Approved</span></td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>31st Dec 2023</td>
                            <td>New Year Party</td>
                            <td><span className='LRQApproved'>Approved</span></td>
                        </tr>
                        <tr>
                            <td>Beck</td>
                            <td>4th Jan 2024</td>
                            <td>Holiday</td>
                            <td><span className='LRQApproved'>Approved</span></td>
                        </tr>
                        <tr>
                            <td>Mark</td>
                            <td>10th Nov 2023</td>
                            <td>Doctor Visit</td>
                            <td><span className='LRQApproved'>Approved</span></td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>31st Dec 2023</td>
                            <td>New Year Party</td>
                            <td><span className='LRQApproved'>Approved</span></td>
                        </tr>
                        <tr>
                            <td>Beck</td>
                            <td>4th Jan 2024</td>
                            <td>Holiday</td>
                            <td><span className='LRQApproved'>Approved</span></td>
                        </tr>
                        <tr>
                            <td>Beck</td>
                            <td>4th Jan 2024</td>
                            <td>Holiday</td>
                            <td><span className='LRQApproved'>Approved</span></td>
                        </tr>
                        <tr>
                            <td>Beck</td>
                            <td>4th Jan 2024</td>
                            <td>Holiday</td>
                            <td><span className='LRQApproved'>Approved</span></td>
                        </tr>
                        <tr>
                            <td>Beck</td>
                            <td>4th Jan 2024</td>
                            <td>Holiday</td>
                            <td><span className='LRQApproved'>Approved</span></td>
                        </tr>
                        <tr>
                            <td>Beck</td>
                            <td>4th Jan 2024</td>
                            <td>Holiday</td>
                            <td><span className='LRQApproved'>Approved</span></td>
                        </tr>
                        <tr>
                            <td>Beck</td>
                            <td>4th Jan 2024</td>
                            <td>Holiday</td>
                            <td><span className='LRQApproved'>Approved</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ApprovedLeaves