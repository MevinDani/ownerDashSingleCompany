import React from 'react'
import './Negotiation.css'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Negotiation = () => {
    const navigate = useNavigate();

    const goBackHome = () => {
        navigate('/analysis');
    }

    return (
        <div className='NegotiationWrapper'>
            <div className='NegotiationCont'>

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

                <div className='NegotiationText'>Negotiation</div>

                <div className='NegotiationMainBox'>

                </div>

            </div>
        </div>
    )
}

export default Negotiation