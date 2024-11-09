import React from 'react'
import './Progress.css'
import { ProgressBar, Step } from 'react-step-progress-bar';
import 'react-step-progress-bar/styles.css';

const Progress = ({ steps, currentStep }) => {
    return (
        <div className='Progressbar'>
            <ProgressBar percent={((currentStep - 1) / (steps - 1)) * 100}>
                {Array.from({ length: steps }).map((_, index) => (
                    <Step key={index}>
                        {({ accomplished, index }) => (
                            <div className={`indexedStep ${accomplished ? 'accomplished' : ''}`}>
                                {index + 1}
                            </div>
                        )}
                    </Step>
                ))}
            </ProgressBar>
        </div>
    )
}

export default Progress