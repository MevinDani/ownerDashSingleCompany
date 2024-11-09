import React from 'react'
import './Proposal.css'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Proposal = () => {
    const navigate = useNavigate();

    const goBackHome = () => {
        navigate('/analysis');
    }
    return (
        <div className='ProposalWrapper'>
            <div className='ProposalCont'>

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

                <div className='ProposalText'>Proposal</div>

                <div className='ProposalMainBox'>

                </div>

            </div>
        </div>
    )
}

export default Proposal