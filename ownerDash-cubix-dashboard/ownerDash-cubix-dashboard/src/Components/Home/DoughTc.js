import React from 'react'
import DoughnutChart from '../reusables/Doughnut'

const DoughTc = () => {
    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", width: "100%" }}>
            <div style={{ width: "50%" }}>
                <DoughnutChart />
            </div>
        </div>
    )
}

export default DoughTc