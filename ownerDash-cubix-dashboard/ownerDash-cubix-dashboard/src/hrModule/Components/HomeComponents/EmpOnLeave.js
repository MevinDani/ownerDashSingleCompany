import React from 'react'
import './EmpOnLeave.css'
import profile from '../images/profile.png'
import { CiMail } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";

const EmpOnLeave = () => {
    return (
        <div className='EmpOnLeaveWrapper'>

            <div className='EmpOnLeaveCont'>

                <div className='EmpOnLeaveHead'>
                    Employees on Leave
                </div>


                <div className='EmpOnLeaveDataCont'>

                    <div className='EmpOnLeaveDataItem'>

                        <div className='EmpOnLeaveDataLeft'>
                            <div>
                                <img src={profile} alt="" className='EmpOnLeaveProfileImg' />
                            </div>
                            <div className='EmpOnLeaveNameDate'>
                                <div>John Doe</div>
                                {/* <div className='EmpOnLeaveDate'>Friday 12 January</div> */}
                            </div>
                        </div>

                        <div className='EmpOnLeaveDataRight'>
                            <div className='LeaveData'>
                                Only Today
                            </div>
                        </div>
                    </div>

                    <div className='EmpOnLeaveDataItem'>

                        <div className='EmpOnLeaveDataLeft'>
                            <div>
                                <img src={profile} alt="" className='EmpOnLeaveProfileImg' />
                            </div>
                            <div className='EmpOnLeaveNameDate'>
                                <div>John Doe</div>
                                {/* <div className='EmpOnLeaveDate'>Friday 12 January</div> */}
                            </div>
                        </div>

                        <div className='EmpOnLeaveDataRight'>
                            <div className='LeaveData'>
                                Only Today
                            </div>
                        </div>
                    </div>

                    <div className='EmpOnLeaveDataItem'>

                        <div className='EmpOnLeaveDataLeft'>
                            <div>
                                <img src={profile} alt="" className='EmpOnLeaveProfileImg' />
                            </div>
                            <div className='EmpOnLeaveNameDate'>
                                <div>John Doe</div>
                                {/* <div className='EmpOnLeaveDate'>Friday 12 January</div> */}
                            </div>
                        </div>

                        <div className='EmpOnLeaveDataRight'>
                            <div className='LeaveData'>
                                Only Today
                            </div>
                        </div>
                    </div>

                    <div className='EmpOnLeaveDataItem'>

                        <div className='EmpOnLeaveDataLeft'>
                            <div>
                                <img src={profile} alt="" className='EmpOnLeaveProfileImg' />
                            </div>
                            <div className='EmpOnLeaveNameDate'>
                                <div>John Doe</div>

                            </div>
                        </div>

                        <div className='EmpOnLeaveDataRight'>
                            <div className='LeaveData'>
                                Only Today
                            </div>
                        </div>
                    </div>

                    <div className='EmpOnLeaveDataItem'>

                        <div className='EmpOnLeaveDataLeft'>
                            <div>
                                <img src={profile} alt="" className='EmpOnLeaveProfileImg' />
                            </div>
                            <div className='EmpOnLeaveNameDate'>
                                <div>John Doe</div>
                            </div>
                        </div>

                        <div className='EmpOnLeaveDataRight'>
                            <div className='LeaveData'>
                                Only Today
                            </div>
                        </div>
                    </div>
                    <div className='EmpOnLeaveDataItem'>

                        <div className='EmpOnLeaveDataLeft'>
                            <div>
                                <img src={profile} alt="" className='EmpOnLeaveProfileImg' />
                            </div>
                            <div className='EmpOnLeaveNameDate'>
                                <div>John Doe</div>
                            </div>
                        </div>

                        <div className='EmpOnLeaveDataRight'>
                            <div className='LeaveData'>
                                Only Today
                            </div>
                        </div>
                    </div>
                    <div className='EmpOnLeaveDataItem'>

                        <div className='EmpOnLeaveDataLeft'>
                            <div>
                                <img src={profile} alt="" className='EmpOnLeaveProfileImg' />
                            </div>
                            <div className='EmpOnLeaveNameDate'>
                                <div>John Doe</div>
                            </div>
                        </div>

                        <div className='EmpOnLeaveDataRight'>
                            <div className='LeaveData'>
                                Only Today
                            </div>
                        </div>
                    </div>
                    <div className='EmpOnLeaveDataItem'>

                        <div className='EmpOnLeaveDataLeft'>
                            <div>
                                <img src={profile} alt="" className='EmpOnLeaveProfileImg' />
                            </div>
                            <div className='EmpOnLeaveNameDate'>
                                <div>John Doe</div>
                            </div>
                        </div>

                        <div className='EmpOnLeaveDataRight'>
                            <div className='LeaveData'>
                                Only Today
                            </div>
                        </div>
                    </div>
                    <div className='EmpOnLeaveDataItem'>

                        <div className='EmpOnLeaveDataLeft'>
                            <div>
                                <img src={profile} alt="" className='EmpOnLeaveProfileImg' />
                            </div>
                            <div className='EmpOnLeaveNameDate'>
                                <div>John Doe</div>
                            </div>
                        </div>

                        <div className='EmpOnLeaveDataRight'>
                            <div className='LeaveData'>
                                Only Today
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default EmpOnLeave