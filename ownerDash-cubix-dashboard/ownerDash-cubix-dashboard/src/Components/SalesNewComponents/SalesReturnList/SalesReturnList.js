import React from 'react'
import './SalesReturnList.css'

const SalesReturnList = () => {
    return (
        <div className='SalesInvoiceWrapper'>
            <div className='SalesInvHead'>SalesReturnList</div>

            <div className='SalesInvoiceBody SalesRetListBody'>

                <div className='SalesRetListHead'>

                    <div className='SalesRetListInps'>
                        <div class="input-group">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">SR NO</span> */}
                            <input type="text" class="form-control customInp" placeholder="SR NO" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">SELECT FORMAT</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option value='' >SELECT FORMAT</option>
                                <option value='' >sales return</option>
                                <option value='aed' >AED</option>
                                <option value="1">USD</option>
                                <option value="2">EUR</option>
                                <option value="3">INR</option>
                            </select>
                        </div>
                    </div>

                    <div className='SalesRetListButtons'>
                        <button className='btn btn-warning'>EXPORT</button>
                        <button className='btn btn-primary'>PRINT</button>
                        <button className='btn btn-info'>SRETURNLOGS</button>
                        <button className='btn btn-danger'>CLOSE</button>
                    </div>
                </div>


                <div className='LListTable mt-4'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>SR NO</th>
                                <th>SR DATE</th>
                                <th>CUSTOMER</th>
                                <th>INV NO</th>
                                <th>SALES MAN</th>
                                <th>AMOUNT</th>
                                <th>CUST_ACC</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='table-primary'>
                                <td>1001</td>
                                <td>09/03/2024</td>
                                <td>General Trading</td>
                                <td>1010</td>
                                <td></td>
                                <td>525.00</td>
                                <td>12050063</td>
                            </tr>
                            <tr className='table-primary'>
                                <td>1001</td>
                                <td>09/03/2024</td>
                                <td>General Trading</td>
                                <td>1010</td>
                                <td></td>
                                <td>525.00</td>
                                <td>12050063</td>
                            </tr>
                            <tr className='table-primary'>
                                <td>1001</td>
                                <td>09/03/2024</td>
                                <td>General Trading</td>
                                <td>1010</td>
                                <td></td>
                                <td>525.00</td>
                                <td>12050063</td>
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

export default SalesReturnList