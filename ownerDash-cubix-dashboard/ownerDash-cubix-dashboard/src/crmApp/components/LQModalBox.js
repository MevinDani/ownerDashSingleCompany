import React from 'react'
import './LQModalBox.css'

const LQModalBox = () => {
    return (
        <div className='LQModalWrapper'>

            <div className='LQModalCont'>

                <div className='LQItemBox'>

                    <div className='LQItemFirst'>
                        <div className='LQItemDate'>
                            30/11/2023
                        </div>
                        <div className='LQItem1Bott'>
                            <div className='LQItemBlack'>
                                <div>0%</div>
                                <div>0 AED</div>
                            </div>
                            <div className='LQItemWhite'>
                                <div>dummy</div>
                            </div>
                        </div>
                    </div>

                    <div className='LQItemSecond'>
                        <div className='initStage'>initial stage</div>
                    </div>

                    <div className='LQItemThird'>
                        <div className='LQItemDate'>
                            3/12/2023
                        </div>
                        <div className='LQItem3Bott'>
                            <div className='LQItemRed'>
                                <div>50%</div>
                                <div>0 AED</div>
                            </div>
                            <div className='LQItemWhite'>
                                <div>Lead Qualification</div>
                            </div>
                        </div>
                    </div>

                    <div className='LQItemFourth'>
                        <div className='followUp'>
                            <div>follow up</div>
                            <div>visit</div>
                            <div>1/12/2023</div>
                            <div>Demo</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LQModalBox