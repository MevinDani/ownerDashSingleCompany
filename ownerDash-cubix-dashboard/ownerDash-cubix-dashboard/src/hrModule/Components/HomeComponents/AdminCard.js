import React from 'react'
import './AdminCard.css'
import backImg from '../images/blue-wall-background.jpg'
import profile from '../images/profile.png'
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";

const AdminCard = () => {
    return (
        <div className='AdminCardWrapper'>

            <div className='AdminCardCont'>

                <div className='CoverImgCont'></div>

                <div className='ProfileImgCont'>
                    <img src={profile} alt="" className='profilePic' />
                    <div className='UserName'>
                        Steve Admin
                    </div>

                </div>

                <div className='ProfileDataCont'>

                    <div className='ProfileData'>
                        <div className='PDItems'>
                            <div>
                                <MdOutlineCalendarMonth />
                            </div>
                            <div>
                                Allowance: 20
                            </div>
                        </div>
                        <div className='PDItems'>
                            <div>
                                <MdOutlineCalendarMonth />
                            </div>
                            <div>
                                Used: 6
                            </div>
                        </div>
                        <div className='PDItems'>
                            <div>
                                <MdOutlineCalendarMonth />
                            </div>
                            <div>
                                Remaining: 14
                            </div>
                        </div>
                    </div>
                    <div className='ProfileButtons'>
                        <div>
                            Request Leave
                        </div>
                        <div>
                            Request Allowance
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdminCard