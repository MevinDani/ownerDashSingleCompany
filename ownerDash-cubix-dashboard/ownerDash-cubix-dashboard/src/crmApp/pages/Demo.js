import React from 'react'
import './Demo.css'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Demo = () => {

    const navigate = useNavigate();

    const goBackHome = () => {
        navigate('/analysis');
    }

    return (
        <div className='DemoWrapper'>
            <div className='DemoCont'>

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

                <div className='DemoText'>Demo</div>

                <div className='DemoMainBox'>

                </div>

            </div>
        </div>
    )
}

export default Demo