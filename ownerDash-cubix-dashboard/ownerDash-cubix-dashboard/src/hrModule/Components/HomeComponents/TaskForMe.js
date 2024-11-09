import React, { useState } from 'react'
import './TaskForMe.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form, Col } from 'react-bootstrap';


const TaskForMe = ({ taskAssigned }) => {

    const [isCreateTaskModalOpen, setCreateTaskModalOpen] = useState(false);

    const openCreateTaskModal = () => {
        setCreateTaskModalOpen(true);
    };

    const closeCreateTaskModal = () => {
        setCreateTaskModalOpen(false);
    };

    const handleCreateTask = () => {
        // Add logic for handling task creation
        closeCreateTaskModal();
    };

    return (
        <div className='TaskForMeWrapper'>
            <div className='TaskForMeCont'>
                <div className='TaskForMeHead'>
                    <div>{taskAssigned}</div>
                    {
                        taskAssigned === 'Task Assigned By Me' && <div className='CreateTaskButton' onClick={openCreateTaskModal}>Create Task</div>
                    }
                </div>
                {/* create task popup */}
                <Modal show={isCreateTaskModalOpen} onHide={closeCreateTaskModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Task Creation Form */}
                        <form className='d-flex flex-column justify-content-center align-items-center'>
                            <div className='form-group w-100 mb-2'>
                                <label>Choose Staff</label>
                                <select className='form-control w-100'>
                                    {/* Add staff options here */}
                                </select>
                            </div>

                            <div className='form-group w-100  mb-2'>
                                <label>Select Customer</label>
                                <select className='form-control w-100'>
                                    {/* Add customer options here */}
                                </select>
                            </div>

                            <div className='form-group w-100  mb-2'>
                                <label>Remarks</label>
                                <input type='text' className='form-control w-100' placeholder='Enter remarks' />
                            </div>

                            <div className='form-row w-100  mb-2'>
                                <div className='form-group'>
                                    <label>Date</label>
                                    <input type='date' className='form-control' />
                                </div>

                                <div className='form-group'>
                                    <label>Time</label>
                                    <input type='time' className='form-control' />
                                </div>
                            </div>

                            <div className='form-group form-check w-100  mb-2'>
                                <input type='checkbox' className='form-check-input' id='travelCheckbox' />
                                <label className='form-check-label' htmlFor='travelCheckbox'>
                                    Travel Needed
                                </label>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* <Button variant='secondary' onClick={closeCreateTaskModal}>
                            Close
                        </Button> */}
                        <Button variant='primary' onClick={handleCreateTask}>
                            Create Task
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* create task popup */}
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col" className='LeftHead'>Status</th>
                            {/* <th scope="col">Reason</th>
                            <th scope="col">Status</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Leave Approvals</td>
                            <td>
                                <div className='TaskButtons'>
                                    <span className='TaskView'>View</span>
                                    <span className='TaskOnG'>On going</span>
                                </div>
                            </td>
                            {/* <td>Doctor Visit</td>
                            <td><span className='LRQApproved'>Approved</span></td> */}
                        </tr>
                        <tr>
                            <td>Certificate Approvals</td>
                            <td>
                                <div className='TaskButtons'>
                                    <span className='TaskView'>View</span>
                                    <span className='TaskStart'>Start</span>
                                </div>
                            </td>
                            {/* <td>New Year Party</td>
                            <td><span className='LRQPending'>Pending</span></td> */}
                        </tr>
                        <tr>
                            <td>Payment Approvals</td>
                            <td>
                                <div className='TaskButtons'>
                                    <span className='TaskView'>View</span>
                                    <span className='TaskOnG'>On going</span>
                                </div>
                            </td>
                            {/* <td>Holiday</td>
                            <td><span className='LRQRejected'>Rejected</span></td> */}
                        </tr>
                        <tr>
                            <td>Project Approvals</td>
                            <td>
                                <div className='TaskButtons'>
                                    <span className='TaskView'>View</span>
                                    <span className='TaskStart'>Start</span>
                                </div>
                            </td>
                            {/* <td>Doctor Visit</td>
                            <td><span className='LRQApproved'>Approved</span></td> */}
                        </tr>
                        <tr>
                            <td>Contract Approvals</td>
                            <td>
                                <div className='TaskButtons'>
                                    <span className='TaskView'>View</span>
                                    <span className='TaskFinished'>Finished</span>
                                </div>
                            </td>
                            {/* <td>New Year Party</td>
                            <td><span className='LRQPending'>Pending</span></td> */}
                        </tr>
                        <tr>
                            <td>Payroll</td>
                            <td>
                                <div className='TaskButtons'>
                                    <span className='TaskView'>View</span>
                                    <span className='TaskStart'>Start</span>
                                </div>
                            </td>
                            {/* <td>Holiday</td>
                            <td><span className='LRQRejected'>Rejected</span></td> */}
                        </tr>
                        <tr>
                            <td>Leave Approvals</td>
                            <td>
                                <div className='TaskButtons'>
                                    <span className='TaskView'>View</span>
                                    <span className='TaskError'>Error</span>
                                </div>
                            </td>
                            {/* <td>Doctor Visit</td>
                            <td><span className='LRQApproved'>Approved</span></td> */}
                        </tr>
                        <tr>
                            <td>Certificate Approvals</td>
                            <td>
                                <div className='TaskButtons'>
                                    <span className='TaskView'>View</span>
                                    <span className='TaskStart'>Start</span>
                                </div>
                            </td>
                            {/* <td>New Year Party</td>
                            <td><span className='LRQPending'>Pending</span></td> */}
                        </tr>
                        <tr>
                            <td>Payment Approvals</td>
                            <td>
                                <div className='TaskButtons'>
                                    <span className='TaskView'>View</span>
                                    <span className='TaskStart'>Start</span>
                                </div>
                            </td>
                            {/* <td>Holiday</td>
                            <td><span className='LRQRejected'>Rejected</span></td> */}
                        </tr>
                        <tr>
                            <td>Project Approvals</td>
                            <td>
                                <div className='TaskButtons'>
                                    <span className='TaskView'>View</span>
                                    <span className='TaskStart'>Start</span>
                                </div>
                            </td>
                            {/* <td>Doctor Visit</td>
                            <td><span className='LRQApproved'>Approved</span></td> */}
                        </tr>
                        <tr>
                            <td>Contract Approvals</td>
                            <td>
                                <div className='TaskButtons'>
                                    <span className='TaskView'>View</span>
                                    <span className='TaskStart'>Start</span>
                                </div>
                            </td>
                            {/* <td>New Year Party</td>
                            <td><span className='LRQPending'>Pending</span></td> */}
                        </tr>
                        <tr>
                            <td>Payroll</td>
                            <td>
                                <div className='TaskButtons'>
                                    <span className='TaskView'>View</span>
                                    <span className='TaskStart'>Start</span>
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

export default TaskForMe