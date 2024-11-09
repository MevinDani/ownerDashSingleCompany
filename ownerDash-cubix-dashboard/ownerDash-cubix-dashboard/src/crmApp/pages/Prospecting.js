import React from 'react'
import './Prospecting.css'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Prospecting = () => {

    const navigate = useNavigate();

    const goBackHome = () => {
        navigate('/analysis');
    }

    return (
        <div className='ProspectingWrapper'>
            <div className='ProspectingCont'>

                <div className='AnalysisHeader'>
                    <div className='StaffDetTextCont'>
                        <div className='leftArrow' onClick={goBackHome}>
                            <IoIosArrowBack />
                        </div>
                        <div className='StaffDetText'>
                            Analysis
                        </div>
                    </div>
                </div>

                <div className='ProspectingText'>Prospecting</div>

                <div className='ProspectingMainBox'>

                </div>

            </div>
        </div>

    )
}

export default Prospecting