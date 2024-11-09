import React from 'react'
import './AdminEmpStatus.css'
import funnel from '../images/filter.png'
import person from '../images/man.png'
import { BsGraphUp } from "react-icons/bs";
import graph from '../images/graph.png'
import line from '../images/circleLine.png'
import { useNavigate } from 'react-router-dom';

const AdminEmployeeStatus = () => {
    const navigate = useNavigate();

    const navigateStaffDetails = () => {
        navigate('/admin/staffDetails');
    }
    return (
        <div className='AdminEsWrapper'>

            <div className='AdminEsCont'>

                <div className='AdminEsHead'>
                    <div className='statusText'>Employee status</div>
                    <div className='funnelCont'>
                        <div>
                            <img className='funnelImg' src={funnel} alt="" />
                        </div>
                        <div className='SalesFunnText'>Sales Funnel</div>
                    </div>
                </div>

                <div className='AdminEsEmpPanel'>

                    <div className='AdminEsEmpCont'>

                        <div className='AdminEsEmpLeft'>
                            <div className='ImgCont'>
                                <img className='staffImg' src={person} alt="" />
                            </div>
                            <div className='NameJob'>
                                <div className='staffName'>Akshay</div>
                                <div className='staffJob'>Staff</div>
                            </div>
                        </div>

                        <div className='AdminEsEmpRight'>
                            <div className='LineGrph' onClick={navigateStaffDetails}><BsGraphUp /></div>
                        </div>

                    </div>
                    <div className='AdminEsEmpCont'>

                        <div className='AdminEsEmpLeft'>
                            <div className='ImgCont'>
                                <img className='staffImg' src={person} alt="" />
                            </div>
                            <div className='NameJob'>
                                <div className='staffName'>Akhil</div>
                                <div className='staffJob'>Staff</div>
                            </div>
                        </div>

                        <div className='AdminEsEmpRight'>
                            <div className='LineGrph' onClick={navigateStaffDetails}><BsGraphUp /></div>
                        </div>

                    </div>
                    <div className='AdminEsEmpCont'>

                        <div className='AdminEsEmpLeft'>
                            <div className='ImgCont'>
                                <img className='staffImg' src={person} alt="" />
                            </div>
                            <div className='NameJob'>
                                <div className='staffName'>User1</div>
                                <div className='staffJob'>Staff</div>
                            </div>
                        </div>

                        <div className='AdminEsEmpRight'>
                            <div className='LineGrph' onClick={navigateStaffDetails}><BsGraphUp /></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminEmployeeStatus