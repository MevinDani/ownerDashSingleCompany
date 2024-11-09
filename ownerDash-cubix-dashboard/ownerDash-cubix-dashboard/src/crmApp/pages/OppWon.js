import React from 'react'
import './OppWon.css'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const OppWon = () => {
    const navigate = useNavigate();

    const goBackHome = () => {
        navigate('/analysis');
    }

    return (
        <div className='OppWonWrapper'>
            <div className='OppWonCont'>

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

                <div className='OppWonText'>Opportunities Won</div>

                <div className='OppWonMainBox'>

                </div>

            </div>
        </div>
    )
}

export default OppWon