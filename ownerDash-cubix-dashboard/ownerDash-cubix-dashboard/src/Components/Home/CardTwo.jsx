import React from 'react'
import sales from '../../images/card-1.png'
import TodaySales from '../reusables/Sales'
import Payables from '../reusables/Payables'
const PaybleCont = () => {

  return (
    
       <div className="card-dashboard border p-2 pt-3 rounded" style={{ height:"100%" }}>
      <div className="row">
      <div className="col-12">
        <Payables/>
      </div>

      {/* style={{ height: '100%', backgroundColor:'#D5E8F5' }}
style={{ height: '100%', backgroundColor:'#D5E8F5' }} */}
        {/* <div className="col-8">
        <h6>854</h6>
        <p className='mt-3'>PDC Received</p>
        </div>
        <div className="col-4">
        <img src={sales} alt="" srcset="" className='img-fluid mt-2' />
        </div> */}
      </div>

</div>
  
  )
}

export default PaybleCont
