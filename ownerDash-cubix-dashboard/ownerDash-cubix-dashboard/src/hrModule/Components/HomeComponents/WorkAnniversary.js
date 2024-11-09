import React from 'react'
import './WorkAnniversary.css'
import profile from '../images/profile.png'
import { CiMail } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";


const WorkAnniversary = ({ anniversary }) => {
    return (
        <div className='BirthDayWrapper'>

            <div className='BirthDayCont'>

                <div className='BDayHead'>
                    {anniversary}
                </div>

                <div className='BDayDataCont'>

                    <div className='BDayDataItem'>

                        <div className='BDayDataLeft'>
                            <div>
                                <img src={profile} alt="" className='BDayProfileImg' />
                            </div>
                            <div className='BDayNameDate'>
                                <div>John Doe</div>
                                <div className='BDayDate'>Friday 12 January</div>
                            </div>
                            <div className='TodayBday'>Today</div>
                        </div>

                        <div className='BDayDataRight'>
                            <div className='BDayMail'>
                                <CiMail />
                            </div>
                            <div className='BDayPeople'>
                                <BsPeople />
                            </div>
                        </div>
                    </div>
                    <div className='BDayDataItem'>

                        <div className='BDayDataLeft'>
                            <div>
                                <img src={profile} alt="" className='BDayProfileImg' />
                            </div>
                            <div className='BDayNameDate'>
                                <div>John Doe</div>
                                <div className='BDayDate'>Friday 12 January</div>
                            </div>
                            <div className='TodayBday'>Today</div>
                        </div>

                        <div className='BDayDataRight'>
                            <div className='BDayMail'>
                                <CiMail />
                            </div>
                            <div className='BDayPeople'>
                                <BsPeople />
                            </div>
                        </div>
                    </div>
                    <div className='BDayDataItem'>

                        <div className='BDayDataLeft'>
                            <div>
                                <img src={profile} alt="" className='BDayProfileImg' />
                            </div>
                            <div className='BDayNameDate'>
                                <div>John Doe</div>
                                <div className='BDayDate'>Friday 12 January</div>
                            </div>
                            <div className='TodayBday'>Today</div>
                        </div>

                        <div className='BDayDataRight'>
                            <div className='BDayMail'>
                                <CiMail />
                            </div>
                            <div className='BDayPeople'>
                                <BsPeople />
                            </div>
                        </div>
                    </div>
                    <div className='BDayDataItem'>

                        <div className='BDayDataLeft'>
                            <div>
                                <img src={profile} alt="" className='BDayProfileImg' />
                            </div>
                            <div className='BDayNameDate'>
                                <div>John Doe</div>
                                <div className='BDayDate'>Friday 12 January</div>
                            </div>
                            <div className='TodayBday'>Today</div>
                        </div>

                        <div className='BDayDataRight'>
                            <div className='BDayMail'>
                                <CiMail />
                            </div>
                            <div className='BDayPeople'>
                                <BsPeople />
                            </div>
                        </div>
                    </div>
                    <div className='BDayDataItem'>

                        <div className='BDayDataLeft'>
                            <div>
                                <img src={profile} alt="" className='BDayProfileImg' />
                            </div>
                            <div className='BDayNameDate'>
                                <div>John Doe</div>
                                <div className='BDayDate'>Friday 12 January</div>
                            </div>
                        </div>

                        <div className='BDayDataRight'>
                            <div className='BDayMail'>
                                <CiMail />
                            </div>
                            <div className='BDayPeople'>
                                <BsPeople />
                            </div>
                        </div>
                    </div>
                    <div className='BDayDataItem'>

                        <div className='BDayDataLeft'>
                            <div>
                                <img src={profile} alt="" className='BDayProfileImg' />
                            </div>
                            <div className='BDayNameDate'>
                                <div>John Doe</div>
                                <div className='BDayDate'>Friday 12 January</div>
                            </div>
                        </div>

                        <div className='BDayDataRight'>
                            <div className='BDayMail'>
                                <CiMail />
                            </div>
                            <div className='BDayPeople'>
                                <BsPeople />
                            </div>
                        </div>
                    </div>
                    <div className='BDayDataItem'>

                        <div className='BDayDataLeft'>
                            <div>
                                <img src={profile} alt="" className='BDayProfileImg' />
                            </div>
                            <div className='BDayNameDate'>
                                <div>John Doe</div>
                                <div className='BDayDate'>Friday 12 January</div>
                            </div>
                        </div>

                        <div className='BDayDataRight'>
                            <div className='BDayMail'>
                                <CiMail />
                            </div>
                            <div className='BDayPeople'>
                                <BsPeople />
                            </div>
                        </div>
                    </div>
                    <div className='BDayDataItem'>

                        <div className='BDayDataLeft'>
                            <div>
                                <img src={profile} alt="" className='BDayProfileImg' />
                            </div>
                            <div className='BDayNameDate'>
                                <div>John Doe</div>
                                <div className='BDayDate'>Friday 12 January</div>
                            </div>
                        </div>

                        <div className='BDayDataRight'>
                            <div className='BDayMail'>
                                <CiMail />
                            </div>
                            <div className='BDayPeople'>
                                <BsPeople />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default WorkAnniversary