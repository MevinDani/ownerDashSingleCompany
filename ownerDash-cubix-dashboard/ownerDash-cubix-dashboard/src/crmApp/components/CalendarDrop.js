import React from 'react'
import './CalendarDrop.css'

const CalendarDrop = ({ data }) => {
    return (
        <div className='ClendarDropWrapper'>
            <div className='ClendarDropCont'>

                <div className='QkOverText'>Quick Overview</div>
                <div className='ClendarDropTable1'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Sales Stage</th>
                                <th scope="col">Probability</th>
                                <th scope="col">Lead came via</th>
                                <th scope="col">Lead Registered on</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label='Sales Stage'>{data.stage}</td>
                                <td data-label='Probability'>{data.probability}</td>
                                <td data-label='Lead came via'>John Doe</td>
                                <td data-label='Lead Registered on'>{data.statusChangedOn}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='FolloUpText'>Follow Up Log</div>
                <div className='ClendarDropTable2'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Next Followup Date</th>
                                <th scope="col">Follow Up For</th>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label='Next Followup Date'>{data.statusChangedOn}</td>
                                <td data-label='Follow Up For'>{data.stage}</td>
                                <td data-label='Name'>Peter Mathews</td>
                                <td data-label='Type'>Call</td>
                                <td data-label='Mobile Number'>2344</td>
                                <td data-label='Remarks'>No Remarks</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CalendarDrop