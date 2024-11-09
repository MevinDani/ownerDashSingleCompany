import React from 'react'
import './GitList.css'


const GitList = () => {
    return (
        <div className='SalesInvoiceWrapper'>
            <div className='SalesInvHead'>GIT LIST</div>

            <div className='SalesInvoiceBody SalesRetListBody'>

                <div className='SalesRetListHead'>

                    <div className='SalesRetListInps'>
                        <div class="input-group">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">SELECT FORMAT</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option value='' >SELECT FORMAT</option>
                                <option value='' >LPO</option>
                                <option value='aed' >AED</option>
                                <option value="1">USD</option>
                                <option value="2">EUR</option>
                                <option value="3">INR</option>
                            </select>
                        </div>
                    </div>

                    <div className='GitListBadge' style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ padding: "8px" }} class="badge text-bg-secondary">REFRESH PO VS GIT</span>
                    </div>

                    <div className='SalesRetListButtons'>
                        <button className='btn btn-warning'>REFRESH</button>
                        <button className='btn btn-primary'>PRINT ORDER</button>
                        <button className='btn btn-danger'>CLOSE</button>
                    </div>
                </div>


                <div className='LListTable mt-4'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>GIT NO</th>
                                <th>PO DATE</th>
                                <th>SUPPLIER</th>
                                <th>REF</th>
                                <th>SRV NO</th>
                                <th>FC</th>
                                <th>FC AMOUNT</th>
                                <th>START</th>
                                <th>APPROVED</th>
                                <th>ETA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='table-primary'>
                                <td>1001</td>
                                <td>09/03/2024</td>
                                <td>General Trading</td>
                                <td>1010</td>
                                <td></td>
                                <td>AED</td>
                                <td>12050063</td>
                                <td></td>
                                <td></td>
                                <td>09/03/2024</td>
                            </tr>
                            <tr className='table-primary'>
                                <td>1001</td>
                                <td>09/03/2024</td>
                                <td>General Trading</td>
                                <td>1010</td>
                                <td></td>
                                <td>AED</td>
                                <td>12050063</td>
                                <td></td>
                                <td></td>
                                <td>09/03/2024</td>
                            </tr>
                            <tr className='table-primary'>
                                <td>1001</td>
                                <td>09/03/2024</td>
                                <td>General Trading</td>
                                <td>1010</td>
                                <td></td>
                                <td>AED</td>
                                <td>12050063</td>
                                <td></td>
                                <td></td>
                                <td>09/03/2024</td>
                            </tr>
                            {/* {
                                    displayData?.map((item, id) => (
                                        <tr id={id}>
                                            <td>{item.ACCOUNT}</td>
                                            <td>{item.DESCRIPTION}</td>
                                            <td>{item.BALANCE}</td>
                                        </tr>
                                    ))
                                } */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default GitList