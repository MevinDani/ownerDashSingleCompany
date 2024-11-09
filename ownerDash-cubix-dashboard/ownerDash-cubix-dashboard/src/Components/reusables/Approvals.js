import React from 'react'
import './Approvals.css'
import { IoMdClose } from "react-icons/io";

const Approvals = ({ onshowApproval }) => {
    return (
        <div className='ApprovalWrapper'>
            <div className='ApprovalCont'>

                <div className='ApprovalHead'>
                    <div className='ApprovalText'>Approvals</div>
                    <div className='ApprovalClose' onClick={onshowApproval}>
                        <IoMdClose />
                    </div>
                </div>

                <div style={{ color: "red", fontSize: '24px' }}>No Data to show</div>

                {/* <div className='ApprovalBox'>
                    <div className='AppBoxSubj'>Edit needed for order 135</div>
                    <div className='AppBoxName'>James Paul</div>
                    <div className='AppBoxBottCont'>
                        <div className='AppBoxDateCont'>
                            Dec 14
                        </div>
                        <div className='AppBoxButtons'>
                            <div className='RejectButton'>
                                Reject
                            </div>
                            <div className='ApproveButton'>
                                Approve
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ApprovalBox'>
                    <div className='AppBoxSubj'>Delete item from purchase list 686</div>
                    <div className='AppBoxName'>Lijo Simon</div>
                    <div className='AppBoxBottCont'>
                        <div className='AppBoxDateCont'>
                            Dec 13
                        </div>
                        <div className='AppBoxButtons'>
                            <div className='RejectButton'>
                                Reject
                            </div>
                            <div className='ApproveButton'>
                                Approve
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Approvals