import React, { useState } from 'react'
import './QuickLink.css'
import { FiPlus } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Modal, Button, Form, Col } from 'react-bootstrap';

const QuickLink = () => {

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
        <div className='QLWrapper'>
            <div className='QLCont'>

                <div className='QLHead'>
                    <div>Quick Links</div>
                    <div className='QLAddCont btn btn-primary' onClick={openCreateTaskModal}>
                        <div><FiPlus /></div>
                        <div className='QLAddText'>Add link</div>
                    </div>
                </div>
                {/* create addLink popup */}
                <Modal show={isCreateTaskModalOpen} onHide={closeCreateTaskModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Link</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Task Creation Form */}
                        <form className='d-flex flex-column justify-content-center align-items-center'>

                            <div className='form-group w-100  mb-2'>
                                <label>Link</label>
                                <input type='text' className='form-control w-100' placeholder='Enter Link' />
                            </div>

                            <div className='form-group w-100  mb-2'>
                                <label>Note</label>
                                <input type='text' className='form-control w-100' placeholder='Enter Note' />
                            </div>

                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* <Button variant='secondary' onClick={closeCreateTaskModal}>
                            Close
                        </Button> */}
                        <Button variant='primary' onClick={handleCreateTask}>
                            Add Link
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* create addLink popup */}
                <div className='QLAddedLinkCont'>

                    <div className='QLAddedItems'>
                        <div className='QLGlobe'><FaGlobe /></div>
                        <div className='QLLinkText'>AddedLink1</div>
                    </div>
                    <div className='QLAddedItems'>
                        <div className='QLGlobe'><FaGlobe /></div>
                        <div className='QLLinkText'>AddedLink2</div>
                    </div>
                    <div className='QLAddedItems'>
                        <div className='QLGlobe'><FaGlobe /></div>
                        <div className='QLLinkText'>AddedLink3</div>
                    </div>
                    <div className='QLAddedItems'>
                        <div className='QLGlobe'><FaGlobe /></div>
                        <div className='QLLinkText'>AddedLink4</div>
                    </div>
                    <div className='QLAddedItems'>
                        <div className='QLGlobe'><FaGlobe /></div>
                        <div className='QLLinkText'>AddedLink5</div>
                    </div>
                    <div className='QLAddedItems'>
                        <div className='QLGlobe'><FaGlobe /></div>
                        <div className='QLLinkText'>AddedLink5</div>
                    </div>
                    <div className='QLAddedItems'>
                        <div className='QLGlobe'><FaGlobe /></div>
                        <div className='QLLinkText'>AddedLink5</div>
                    </div>
                    <div className='QLAddedItems'>
                        <div className='QLGlobe'><FaGlobe /></div>
                        <div className='QLLinkText'>AddedLink5</div>
                    </div>
                    <div className='QLAddedItems'>
                        <div className='QLGlobe'><FaGlobe /></div>
                        <div className='QLLinkText'>AddedLink5</div>
                    </div>
                    <div className='QLAddedItems'>
                        <div className='QLGlobe'><FaGlobe /></div>
                        <div className='QLLinkText'>AddedLink5</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickLink