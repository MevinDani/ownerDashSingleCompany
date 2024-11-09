import React, { useState } from 'react'
import './BusinessPartAdd.css'

const BusinessPartAdd = () => {

    const [selectedTab, setSelectedTab] = useState('VAT')

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };
    return (
        <div className='SalesInvoiceWrapper'>
            <div className='SalesInvHead'>Business Partners</div>

            <div className='SalesInvoiceBody'>

                <div className='BPALeft'>

                    <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
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

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className='mt-2' style={{ fontStyle: "italic", textAlign: "left", color: "black", fontWeight: "bold", borderBottom: "1px solid black", width: "150%" }}>General Information</div>
                        <div class="input-group">
                            <select class="form-select customInp" aria-label="Default select example">
                                <option value='' selected>Dept Code</option>
                                <option value="1">USD</option>
                                <option value="2">EUR</option>
                                <option value="3">INR</option>
                            </select>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <div class="input-group">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Code</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option value=''>Code</option>
                                <option value="1">USD</option>
                                <option value="2">EUR</option>
                                <option value="3">INR</option>
                            </select>
                            <input type="text" class="form-control customInp" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className='mt-2'>
                        <div class="input-group">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Name</span> */}
                            <input type="text" class="form-control customInp" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className='mt-2 POD2INPS' style={{ display: "flex", justifyContent: "space-between" }}>
                        <div class="input-group">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Contact</span> */}
                            <input type="text" class="form-control customInp" placeholder="Contact" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Salesperson</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option value=''>Salesperson</option>
                                <option value="1">USD</option>
                                <option value="2">EUR</option>
                                <option value="3">INR</option>
                            </select>
                        </div>
                    </div>

                    <div className='mt-2' style={{ fontStyle: "italic", textAlign: "left", color: "black", fontWeight: "bold", borderBottom: "1px solid black" }}>Address Information</div>

                    <div>
                        <div className='mt-2'>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Postal Code</span> */}
                                <input type="text" class="form-control customInp" placeholder="Postal Code" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Address 1</span> */}
                                <input type="text" class="form-control customInp" placeholder="Address 1" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Address 2</span> */}
                                <input type="text" class="form-control customInp" placeholder="Address 2" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='mt-2 POD2INPS' style={{ display: "flex", justifyContent: "space-between" }}>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Country</span> */}
                                <select class="form-select customInp" aria-label="Default select example">
                                    <option value=''>Country</option>
                                    <option value="1">USD</option>
                                    <option value="2">EUR</option>
                                    <option value="3">INR</option>
                                </select>
                            </div>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Area Code</span> */}
                                <select class="form-select customInp" aria-label="Default select example">
                                    <option value=''>Area Code</option>
                                    <option value="1">USD</option>
                                    <option value="2">EUR</option>
                                    <option value="3">INR</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='mt-2' style={{ fontStyle: "italic", textAlign: "left", color: "black", fontWeight: "bold", borderBottom: "1px solid black" }}>Communication Information</div>

                    <div>
                        <div className='mt-2'>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Telephone</span> */}
                                <input type="text" class="form-control customInp" placeholder="Telephone" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='mt-2 POD2INPS' style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className=''>
                                <div class="input-group">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Fax</span> */}
                                    <input type="text" class="form-control customInp" placeholder="Fax" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className=''>
                                <div class="input-group">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Email</span> */}
                                    <input type="text" class="form-control customInp" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Mobile</span> */}
                                <input type="text" class="form-control customInp" placeholder="Mobile" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>



                </div>

                <div className='BPARight'>

                    <div className='mt-2' style={{ fontStyle: "italic", textAlign: "left", color: "black", fontWeight: "bold", borderBottom: "1px solid black" }}>Financial Information</div>

                    <div className='mt-2'>
                        <div class="input-group">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Terms</span> */}
                            <input type="text" class="form-control customInp" placeholder="Terms" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className='mt-2 POD2INPS' style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className=''>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Credit Limit</span> */}
                                <input type="text" class="form-control customInp" placeholder="Credit Limit" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className=''>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Due Days</span> */}
                                <input type="text" class="form-control customInp" placeholder="Due Days" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className=''>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Do due</span> */}
                                <input type="text" class="form-control customInp" placeholder="Do due" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className=''>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Billnos</span> */}
                                <input type="text" class="form-control customInp" placeholder="Billnos" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>

                    <div className='mt-2 POD2INPS' style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className=''>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Avl. Limit</span> */}
                                <input type="text" class="form-control customInp" placeholder="Avl. Limit" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className=''>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">PDC</span> */}
                                <input type="text" class="form-control customInp" placeholder="PDC" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>

                    <div className='mt-2 POD2INPS' style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className=''>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Credit</span> */}
                                <select class="form-select customInp" aria-label="Default select example">
                                    <option value=''>Credit</option>
                                    <option value="1">USD</option>
                                    <option value="2">EUR</option>
                                    <option value="3">INR</option>
                                </select>
                            </div>
                        </div>
                        <div className=''>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Open Balance</span> */}
                                <input type="text" class="form-control customInp" placeholder="Open Balance" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>

                    <div className='mt-2 BPAToggleBox'>

                        <div class="input-group" style={{ display: "flex", justifyContent: "center", backgroundColor: "black" }}>
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1" style={{ width: '60%', color: 'white' }}>Include VAT</span> */}
                            <span style={{ color: "white" }}>Disc Split</span>
                            <div class="form-check form-switch" style={{ width: '40%', display: "flex", justifyContent: "center" }}>
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ width: "100%" }} />
                            </div>
                        </div>
                        {/* <div class="input-group" style={{ width: "60%" }}>
                            <div style={{ margin: "0px 4px" }}>Disc Split</div>
                            <span class="input-group-text inpLeftPanel" id="basic-addon1" style={{}}>Disc Split</span>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{}} />
                            </div>
                        </div> */}
                        <div>
                            <button className='btn btn-primary'>View Details</button>
                        </div>
                    </div>

                    <div className='mt-2 POD2INPS' style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className=''>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Grp. Co Code</span> */}
                                <input type="text" class="form-control customInp" placeholder="Grp. Co Code" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className=''>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">PriceGrp</span> */}
                                <select class="form-select customInp" aria-label="Default select example">
                                    <option value=''>PriceGrp</option>
                                    <option value="1">USD</option>
                                    <option value="2">EUR</option>
                                    <option value="3">INR</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='ProductMasterNavTabs'>
                        <ul className="nav  nav-underline" style={{ padding: "4px 8px" }}>
                            <li className="nav-item">
                                <a className={`nav-link ${selectedTab === 'VAT' ? 'active' : ''}`} onClick={() => handleTabClick('VAT')}>VAT Info</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${selectedTab === 'Document Details' ? 'active' : ''}`} onClick={() => handleTabClick('Document Details')}>Document Details</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${selectedTab === 'GL Settings' ? 'active' : ''}`} onClick={() => handleTabClick('GL Settings')}>GL Settings</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${selectedTab === 'Other Address' ? 'active' : ''}`} onClick={() => handleTabClick('Other Address')}>Other Address</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${selectedTab === 'Online Users' ? 'active' : ''}`} onClick={() => handleTabClick('Online Users')}>Online Users</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${selectedTab === 'Online Keys' ? 'active' : ''}`} onClick={() => handleTabClick('Online Keys')}>Online Keys</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className=''>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Type</span> */}
                                <select class="form-select customInp" aria-label="Default select example">
                                    <option value=''>Type</option>
                                    <option value="1">USD</option>
                                    <option value="2">EUR</option>
                                    <option value="3">INR</option>
                                </select>
                            </div>
                            <div className='mt-2'>
                                <div class="input-group">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">TRN</span> */}
                                    <input type="text" class="form-control customInp" placeholder="TRN" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-2' style={{ display: 'flex', justifyContent: "space-between" }}>
                        <button className='btn btn-success'>SAVE</button>
                        <button className='btn btn-warning'>EDIT</button>
                        <button className='btn btn-danger'>DELETE</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default BusinessPartAdd