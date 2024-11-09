import React from 'react'
import './NewHires.css'
import profile from '../images/profile.png'

const NewHires = () => {
    return (
        <div className='NewHiresWrapper'>
            <div className='NewHiresCont'>

                <div className='NewHiresHead'>
                    New Hires
                </div>

                <div className='NewHiresItemCont'>

                    <div className='NewHiresItem'>
                        <div>
                            <img src={profile} alt="" className='BDayProfileImg' />
                        </div>
                        <div className='BDayNameDate NH'>
                            <div>John Doe</div>
                            <div className='BDayDate'>Friday 12 January</div>
                        </div>
                    </div>
                    <div className='NewHiresItem'>
                        <div>
                            <img src={profile} alt="" className='BDayProfileImg' />
                        </div>
                        <div className='BDayNameDate NH'>
                            <div>John Doe</div>
                            <div className='BDayDate'>Friday 12 January</div>
                        </div>
                    </div>
                    <div className='NewHiresItem'>
                        <div>
                            <img src={profile} alt="" className='BDayProfileImg' />
                        </div>
                        <div className='BDayNameDate NH'>
                            <div>John Doe</div>
                            <div className='BDayDate'>Friday 12 January</div>
                        </div>
                    </div>
                    <div className='NewHiresItem'>
                        <div>
                            <img src={profile} alt="" className='BDayProfileImg' />
                        </div>
                        <div className='BDayNameDate NH'>
                            <div>John Doe</div>
                            <div className='BDayDate'>Friday 12 January</div>
                        </div>
                    </div>
                    <div className='NewHiresItem'>
                        <div>
                            <img src={profile} alt="" className='BDayProfileImg' />
                        </div>
                        <div className='BDayNameDate NH'>
                            <div>John Doe</div>
                            <div className='BDayDate'>Friday 12 January</div>
                        </div>
                    </div>
                    <div className='NewHiresItem'>
                        <div>
                            <img src={profile} alt="" className='BDayProfileImg' />
                        </div>
                        <div className='BDayNameDate NH'>
                            <div>John Doe</div>
                            <div className='BDayDate'>Friday 12 January</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewHires