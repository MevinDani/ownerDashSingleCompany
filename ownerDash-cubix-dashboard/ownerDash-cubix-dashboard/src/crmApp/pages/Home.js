import React, { useState } from 'react'
import './Home.css'
import locImg from '../images/location-pin.png'
import { AiOutlineLogout } from "react-icons/ai";
import userImg from '../images/street-view.png'
import s2 from '../images/s2.png'
import Progress from '../components/Progress';
import caseImg from '../images/case.png'
import handMoney from '../images/handMoney.png'
import list from '../images/list.png'
import person from '../images/boss.png'
import man from '../images/man.png'
import list2 from '../images/list2.png'
import Tasks from '../components/Tasks';
import range from '../images/signals.png'
import Collection from '../components/Collection';
import Expenses from '../components/Expenses';
import Leave from '../components/Leave';
import { CgLogOff } from "react-icons/cg";
import AdminEmployeeStatus from '../components/AdminEmployeeStatus';
import { useNavigate } from 'react-router-dom';
import expenses from '../images/budget.png'
import { useLocation } from 'react-router-dom';


const Home = () => {

    const location = useLocation();
    const path = location.pathname;
    const [currentStep, setCurrentStep] = useState(2);
    const [selectedOption, setSelectedOption] = useState('HOBag');
    const totalSteps = 4;

    const user = 'admin'

    const navigate = useNavigate()

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const goAnalysis = () => {
        navigate('/analysis')
    }

    console.log(path, 'path')
    return (
        <div className='HomeWrapper'>

            <div className='HomeCont'>

                <div className='HomeTopGrad'>

                    <div className='HomeHeadNav'>

                        <div className='HomeUserDetails'>
                            <div className='HomeUserHi'>Hi User1</div>
                            <div className='HomeUserCheck'>checked in</div>
                        </div>

                        <div className='HomeUserMid'>
                            <img className='locImg' src={s2} alt="" />
                        </div>

                        <div className='HomeUserRight'>
                            <CgLogOff />
                        </div>
                    </div>

                    <div className='HomeDateLine'>
                        <Progress steps={totalSteps} currentStep={currentStep} />
                    </div>

                    <div className='HomeTilesCont'>
                        <div className='HomeTileMonth'>December</div>
                        <div className='HomeTiles'>
                            <div className='Target'>
                                <div className='TargetTop'>0</div>
                                <div className='TargetBott'>Target</div>
                            </div>
                            <div className='Achieved'>
                                <div className='AchievedTop'>0</div>
                                <div className='AchievedBott'>Achieved</div>
                            </div>
                            <div className='Collection'>
                                <div className='CollectionTop'>0</div>
                                <div className='CollectionBott'>Collection</div>
                            </div>
                        </div>
                    </div>

                    <div className='HomeOptionIconCont'>
                        <div
                            className={`HOBag ${selectedOption === 'HOBag' ? 'selected' : ''}`}
                            onClick={() => handleOptionClick('HOBag')}
                        >
                            <img className='optionImg' src={caseImg} alt="" />
                        </div>
                        <div
                            className={`HOMoney ${selectedOption === 'HOMoney' ? 'selected' : ''}`}
                            onClick={() => handleOptionClick('HOMoney')}
                        >
                            <img className='optionImg' src={handMoney} alt="" />
                        </div>
                        <div
                            className={`HOList ${selectedOption === 'HOList' ? 'selected' : ''}`}
                            onClick={() => handleOptionClick('HOList')}
                        >
                            <img className='optionImg' src={expenses} alt="" />
                        </div>
                        <div
                            className={`HOPerson ${selectedOption === 'HOPerson' ? 'selected' : ''}`}
                            onClick={() => handleOptionClick('HOPerson')}
                        >
                            <img className='optionImg' src={man} alt="" />
                        </div>
                    </div>

                </div>

                <div className='HomeOptionView'>
                    {
                        selectedOption === 'HOBag' && path === '/admin' && (
                            <AdminEmployeeStatus />
                        )
                    }
                    {
                        selectedOption === 'HOBag' && path !== '/admin' && (
                            <Tasks />
                        )
                    }
                    {
                        selectedOption === 'HOMoney' && path !== '/admin' && (
                            <Collection />
                        )
                    }
                    {
                        selectedOption === 'HOList' && path !== '/admin' && (
                            <Expenses />
                        )
                    }
                    {
                        selectedOption === 'HOPerson' && path !== '/admin' && (
                            <Leave />
                        )
                    }
                </div>

                <div className='BottomClick' onClick={goAnalysis}>
                    <img className='RangeImg' src={range} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Home