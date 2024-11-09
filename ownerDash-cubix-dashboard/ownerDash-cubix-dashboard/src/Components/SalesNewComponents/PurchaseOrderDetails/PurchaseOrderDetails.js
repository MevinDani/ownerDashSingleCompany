import React from 'react'
import './PurchaseOrderDetails.css'
import { CiUser } from "react-icons/ci";

const PurchaseOrderDetails = () => {
    return (
        <div className='SalesInvoiceWrapper'>
            <div className='SalesInvHead'>Purchase Order Details</div>

            <div className='SalesInvoiceBody SalesRetListBody'>

                <div className='PODOptionHead'>
                    {/* <div className='PODOrderBox'> */}
                    <div className='SalesInvoiceBody IPATopBox'>
                        <div>Open Orders</div>
                        <div>Closed Orders</div>
                        <div>All Orders</div>
                        <div>Open Orders (itemwise)</div>
                        <div>Closed Order (itemwise)</div>
                    </div>
                    {/* </div> */}
                    <div className='PODINPBox mt-2'>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            {/* <div> */}
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">From</span>
                                <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">To</span>
                                <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}> */}
                        <div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><CiUser /></span>
                                <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>

                        <div className='PODButtons'>
                            <button className='btn btn-primary'>NEW</button>
                            <button className='btn btn-warning'>EDIT</button>
                        </div>
                    </div>
                </div>

                <div className='PODBody'>

                </div>

            </div>
        </div >
    )
}

export default PurchaseOrderDetails