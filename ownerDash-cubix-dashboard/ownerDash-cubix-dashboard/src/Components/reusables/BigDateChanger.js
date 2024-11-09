import React, { useState } from 'react'
import './BigDateChnager.css'
import { IoMdClose } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";


const BigDateChanger = ({ setTodaysDate, previousDay, nextDay, yearBottView, previousMonth, nextMonth, previousYear, nextYear, setTodaysDatenoToggle, setTodaysMonth, setTodaysYear }) => {
    const [isDayActive, setDayActive] = useState(true)
    const [isMonthActive, setMonthActive] = useState(false)
    const [isYearActive, setYearActive] = useState(false)

    const showDay = () => {
        setDayActive(true)
        setMonthActive(false)
        setYearActive(false)
    }
    const showMonth = () => {
        setMonthActive(true)
        setDayActive(false)
        setYearActive(false)
    }
    const showYear = () => {
        setYearActive(true)
        setMonthActive(false)
        setDayActive(false)
    }
    return (
        <div className='BigDateChangerWrapper'>
            <div className='BigDateChangerCont'>

                <div className='BigDateChangeHead'>
                    <div className='BigDateShowCont'>
                        {
                            isDayActive && (

                                yearBottView ? yearBottView : "Today"
                            )
                        }
                        {
                            isMonthActive && (
                                yearBottView ? yearBottView : "Month"
                            )
                        }
                        {
                            isYearActive && (
                                yearBottView ? yearBottView : "Year"
                            )
                        }
                    </div>
                    <div className='BigDateClose' style={{ cursor: "pointer" }}>
                        <IoMdClose onClick={setTodaysDate} />
                    </div>
                </div>

                <div className='BigDateChangeControlBox'>

                    <div className={`BigDayControlBox ${isDayActive ? 'active' : ''}`} id='dccDay' onClick={showDay}>
                        <div className='DCBLeft' onClick={previousDay}><FaChevronLeft /></div>
                        <div className='DCBDayText' onClick={setTodaysDatenoToggle}>Day</div>
                        <div className='DCBRight' onClick={nextDay}><FaChevronRight /></div>
                    </div>
                    <div className={`BigMonthControlBox ${isMonthActive ? 'active' : ''}`} id='dccMonth' onClick={showMonth}>
                        <div className='MCBLeft' onClick={previousMonth}><FaChevronLeft /></div>
                        <div className='DCBDayText' onClick={setTodaysMonth}>Month</div>
                        <div className='MCBRight' onClick={nextMonth}><FaChevronRight /></div>
                    </div>
                    <div className={`BigYearControlBox ${isYearActive ? 'active' : ''}`} id='dccMonth' onClick={showYear}>
                        <div className='YCBLeft' onClick={previousYear}><FaChevronLeft /></div>
                        <div className='DCBDayText' onClick={setTodaysYear}>Year</div>
                        <div className='YCBRight' onClick={nextYear}><FaChevronRight /></div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default BigDateChanger