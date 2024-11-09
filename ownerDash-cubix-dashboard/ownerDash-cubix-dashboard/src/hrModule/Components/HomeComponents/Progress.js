import React from 'react'
import './Progress.css'

const Progress = () => {
    return (
        <div className='ProgressWrap'>

            <div>Leave Taken This Year</div>

            <div className="">
                <div style={{ textAlign: 'left', width: '100%', fontSize: '12px' }}>Holiday (Total Allowance: 20 Days)</div>
                {/* <div>26000</div> */}
                <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        style={{ width: "29%" }}
                    ></div>
                </div>
            </div>

            <div className="mt-2">
                <div style={{ textAlign: 'left', width: '100%', fontSize: '12px' }}>TOIL (Total Allowance: 0 Hours)</div>
                {/* <div>Test</div> */}
                <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        style={{ width: "48%" }}
                    ></div>
                </div>
            </div>

            <div className="mt-2">
                <div style={{ textAlign: 'left', width: '100%', fontSize: '12px' }}>Study Leave (Total Allowance: 5 Days)</div>
                {/* <div>26000</div> */}
                <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        style={{ width: "38%" }}
                    ></div>
                </div>
            </div>

        </div>
    )
}

export default Progress

