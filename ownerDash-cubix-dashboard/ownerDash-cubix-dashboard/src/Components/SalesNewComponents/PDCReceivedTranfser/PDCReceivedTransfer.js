import React from 'react'
import './PDCReceivedTransfer.css'

const PDCReceivedTransfer = () => {
    return (
        <div className='SalesInvoiceWrapper'>

            <div className='SalesInvHead'>PDC Received Transfer</div>

            <div className='SalesInvoiceBody'>

                <div className='SalesInvoiceLeft'>

                    <div className='SICashCheck'>
                        <div class="input-group mb-3">
                            {/* <span class="input-group-text" id="basic-addon1">Dr A/C</span> */}
                            <input type="text" class="form-control customInp" placeholder="Dr A/C" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            {/* <span class="input-group-text" id="basic-addon1">Cr A/C</span> */}
                            <input type="text" class="form-control customInp" placeholder="Cr A/C" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">PDC Account</span> */}
                            <input type="text" class="form-control customInp" placeholder="PDC Account" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Bank</span> */}
                            <input type="text" class="form-control customInp" placeholder="Bank" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div style={{ fontStyle: "italic", textAlign: "left", color: "black", fontWeight: "bold", borderBottom: "1px solid black", marginTop: "12px" }}>Manage Opening PDC</div>

                    <div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Transfer Date</span> */}
                            <input type="date" class="form-control customInp" placeholder="Transfer Date" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Ref</span> */}
                            <input type="text" class="form-control customInp" placeholder="Ref" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: 'space-between', padding: "8px", margin: "4px" }}>
                        <div><button className='btn btn-warning'>PRINT</button></div>
                        <div><button className='btn btn-primary'>EXPORT</button></div>
                    </div>

                    <div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">PDC TO TRFR</span> */}
                            <input type="text" class="form-control customInp" placeholder="PDC TO TRFR" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">PDC IN HAND                                                                                                                                </span> */}
                            <input type="text" class="form-control customInp" placeholder="PDC IN HAND" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                </div>

                <div className='SalesInvoiceRight'>

                    <div className='SICashCheck'>
                        <div class="input-group" style={{ display: "flex", justifyContent: "center", backgroundColor: "black" }}>
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1" style={{ width: '60%', color: 'white' }}>Include VAT</span> */}
                            <span style={{ color: "white" }}>Apply Filter</span>
                            <div class="form-check form-switch" style={{ width: '40%', display: "flex", justifyContent: "center" }}>
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div class="input-group mt-2">
                            <span class="input-group-text inpLeftPanel" id="basic-addon1">From</span>
                            <input type="date" class="form-control customInp" placeholder="From" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mt-2">
                            <span class="input-group-text inpLeftPanel" id="basic-addon1">To</span>
                            <input type="date" class="form-control customInp" placeholder="To" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className='mt-2' style={{ display: "flex", justifyContent: 'center' }}>
                        <div style={{ display: "flex", justifyContent: 'space-between', width: "60%" }}>
                            <div><button className='btn btn-warning' style={{ fontSize: "12px" }}>REFRESH</button></div>
                            <div><button className='btn btn-primary' style={{ fontSize: "12px" }}>TRANSFER</button></div>
                        </div>
                    </div>

                    <div>
                        <div class="input-group mt-2" style={{ width: "50%" }}>
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">BANK</span> */}
                            <input type="text" class="form-control customInp" placeholder="BANK" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className='RexVoucherBillTable mt-2'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>SELECT</th>
                                    <th>AMOUNT</th>
                                    <th>CHQ NO</th>
                                    <th>CHQ DATE</th>
                                    <th>BANK</th>
                                    <th>ACCOUNT</th>
                                    <th>NAME</th>
                                    <th>JVTYPE</th>
                                    <th>TYPE NO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='PDCITSelect'>SELECT</td>
                                    <td>10</td>
                                    <td>265W622</td>
                                    <td>01/05/2023</td>
                                    <td>NBD</td>
                                    <td>2205000</td>
                                    <td>REDMI LLC</td>
                                    <td>PV</td>
                                    <td>1097</td>
                                </tr>
                                <tr>
                                    <td className='PDCITSelect'>SELECT</td>
                                    <td>5</td>
                                    <td>461243</td>
                                    <td>20/05/2023</td>
                                    <td>NBD</td>
                                    <td>2205000</td>
                                    <td>hnd auto spare parts</td>
                                    <td>PV</td>
                                    <td>1095</td>
                                </tr>
                                <tr>
                                    <td className='PDCITSelect'>SELECT</td>
                                    <td>10</td>
                                    <td>5345</td>
                                    <td>09/12/2023</td>
                                    <td>NBD</td>
                                    <td>2205000</td>
                                    <td>bosch building</td>
                                    <td>PV</td>
                                    <td>1094</td>
                                </tr>
                                <tr>
                                    <td className='PDCITSelect'>SELECT</td>
                                    <td>10</td>
                                    <td>265W622</td>
                                    <td>01/05/2023</td>
                                    <td>NBD</td>
                                    <td>2205000</td>
                                    <td>REDMI LLC</td>
                                    <td>PV</td>
                                    <td>1097</td>
                                </tr>
                                <tr>
                                    <td className='PDCITSelect'>SELECT</td>
                                    <td>5</td>
                                    <td>461243</td>
                                    <td>20/05/2023</td>
                                    <td>NBD</td>
                                    <td>2205000</td>
                                    <td>hnd auto spare parts</td>
                                    <td>PV</td>
                                    <td>1095</td>
                                </tr>
                                <tr>
                                    <td className='PDCITSelect'>SELECT</td>
                                    <td>10</td>
                                    <td>5345</td>
                                    <td>09/12/2023</td>
                                    <td>NBD</td>
                                    <td>2205000</td>
                                    <td>bosch building</td>
                                    <td>PV</td>
                                    <td>1094</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PDCReceivedTransfer