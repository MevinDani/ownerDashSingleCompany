import React from 'react'
import CreditorsAgeing from '../reusables/CreditorsAgeing'


const CredAge = () => {
    return (
        // <div className="card-dashboard border p-2 rounded" style={{ backgroundColor: 'white', height: "100%", backgroundImage: 'linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)' }}>
        <div className="card-dashboard border p-2 rounded" style={{ backgroundColor: 'white', height: "100%" }}>
            <div className="row">
                <div className="col-12">
                    <CreditorsAgeing />
                </div>
            </div>

        </div>
    )
}

export default CredAge