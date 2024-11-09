import React from 'react'
import './BusimessPartners.css'


const BusinessPartners = () => {
    return (
        <div className='SalesInvoiceWrapper'>
            <div className='SalesInvHead'>Business Partners</div>

            <div className='SalesInvoiceBody SalesRetListBody'>

                <div className='SalesRetListHead'>

                    <div className='SalesRetListInps'>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="Customers" />
                            <label class="form-check-label" for="Customers">
                                Customers
                            </label>
                        </div>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="Suppliers" />
                            <label class="form-check-label" for="Suppliers">
                                Suppliers
                            </label>
                        </div>
                    </div>

                    <div className='GitListBadge mt-2' style={{ display: "flex", alignItems: "center" }}>
                        <input type="text" class="form-control customInp" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className='SalesRetListButtons'>
                        <button className='btn btn-primary'>NEW</button>
                        <button className='btn btn-warning'>EDIT</button>
                    </div>
                </div>


                <div className='LListTable mt-4'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ACCOUNT</th>
                                <th>DESCRIPTION</th>
                                <th>TEL</th>
                                <th>CREDITMETHOD</th>
                                <th>CREDITLIMIT</th>
                                <th>DUEDAYS</th>
                                <th>OP.BALANCE</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className='table-primary'>
                                <td>12050063</td>
                                <td>General Trading</td>
                                <td></td>
                                <td>OPEN</td>
                                <td>0.000</td>
                                <td>0</td>
                                <td>0.00</td>
                            </tr>
                            <tr className='table-primary'>
                                <td>12050063</td>
                                <td>General Trading</td>
                                <td></td>
                                <td>OPEN</td>
                                <td>0.000</td>
                                <td>0</td>
                                <td>0.00</td>
                            </tr>
                            <tr className='table-primary'>
                                <td>12050063</td>
                                <td>General Trading</td>
                                <td></td>
                                <td>OPEN</td>
                                <td>0.000</td>
                                <td>0</td>
                                <td>0.00</td>
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

export default BusinessPartners