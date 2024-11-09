import React, { useState } from 'react'
import './InvoiceProfitAnalysis.css'

const InvoiceProfitAnalysis = () => {

    const [selectedTab, setSelectedTab] = useState('Details')

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };

    return (
        <div className='SalesInvoiceWrapper'>
            <div className='SalesInvHead'>Invoice Profit Analysis</div>
            <div className='IPABody'>

                <div className='SalesInvoiceBody IPATopBox'>
                    <div>Invoice wise Profit</div>
                    <div>Item wise Profit</div>
                    <div>Group wise Profit</div>
                    <div>Categorywise Profit</div>
                    <div>Salesmanwise Profit</div>
                    <div>Departmentwise Profit</div>
                    <div>SubGroupWise</div>
                    <div>SubCategorywise</div>
                    <div>Itemwise Summary</div>
                    <div>Customerwise Profit</div>
                </div>
            </div>

            <div className='SalesInvoiceBody'>

                <div className='SalesInvoiceLeft'>

                    <div className='mt-4'>
                        <div class="input-group mt-2">
                            <span class="input-group-text inpLeftPanel" id="basic-addon1">From</span>
                            <input type="date" class="form-control customInp" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mt-2">
                            <span class="input-group-text inpLeftPanel" id="basic-addon1">To</span>
                            <input type="date" class="form-control customInp" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className='mt-2'>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Customer</span> */}
                            <input type="text" class="form-control customInp" placeholder="Customer" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className='mt-2'>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">GROUP</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option>GROUP</option>
                                <option value="1">452155</option>
                                <option value="2">55565</option>
                                <option value="3">42222</option>
                            </select>
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">SUBGROUP</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option>SUBGROUP</option>
                                <option value="1">452155</option>
                                <option value="2">55565</option>
                                <option value="3">42222</option>
                            </select>
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">CATEGORY</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option>CATEGORY</option>
                                <option value="1">452155</option>
                                <option value="2">55565</option>
                                <option value="3">42222</option>
                            </select>
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">SCATEGORY</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option>SCATEGORY</option>
                                <option value="1">452155</option>
                                <option value="2">55565</option>
                                <option value="3">42222</option>
                            </select>
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">SALESMAN</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option>SALESMAN</option>
                                <option value="1">452155</option>
                                <option value="2">55565</option>
                                <option value="3">42222</option>
                            </select>
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">AREACODE</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option>AREACODE</option>
                                <option value="1">452155</option>
                                <option value="2">55565</option>
                                <option value="3">42222</option>
                            </select>
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">DEPTARTMENT</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option>DEPARTMENT</option>
                                <option value="1">452155</option>
                                <option value="2">55565</option>
                                <option value="3">42222</option>
                            </select>
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">LOC</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option>LOC</option>
                                <option value="1">452155</option>
                                <option value="2">55565</option>
                                <option value="3">42222</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className='SalesInvoiceRight'>

                    <div className='IPAOptions mt-2'>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="checkbox" value="" id="Summary" />
                            <label class="form-check-label" for="Summary">
                                Summary
                            </label>
                        </div>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="checkbox" value="" id="Customerwise" />
                            <label class="form-check-label" for="Customerwise">
                                Customerwise
                            </label>
                        </div>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="checkbox" value="" id="DropDown" />
                            <label class="form-check-label" for="DropDown">
                                Enable DropDown
                            </label>
                        </div>
                    </div>

                    <div className='IPAFIFOBOX mt-2'>
                        <div class="input-group" style={{ display: "flex", justifyContent: "center", backgroundColor: "black" }}>
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1" style={{ width: '60%', color: 'white' }}>Include VAT</span> */}
                            <span style={{ color: "white" }}>FIFO COST</span>
                            <div class="form-check form-switch" style={{ width: '70%', display: "flex", justifyContent: "center" }}>
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="checkbox" value="" id="Exclude" />
                            <label class="form-check-label" for="Exclude">
                                Exclude Minus Sales
                            </label>
                        </div>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="checkbox" value="" id="Grid" />
                            <label class="form-check-label" for="Grid">
                                Grid Export
                            </label>
                        </div>
                    </div>

                    <div className='IPARadios mt-2'>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label class="form-check-label" for="exampleRadios1">
                                Sales only
                            </label>
                        </div>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                            <label class="form-check-label" for="exampleRadios2">
                                Include Return
                            </label>
                        </div>
                    </div>

                    <div className='IPARadios mt-2'>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="All" value="option1" />
                            <label class="form-check-label" for="All">
                                All
                            </label>
                        </div>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="Profit" value="option1" />
                            <label class="form-check-label" for="Profit">
                                Profit Only
                            </label>
                        </div>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="Loss" value="option2" />
                            <label class="form-check-label" for="Loss">
                                Loss only
                            </label>
                        </div>

                        <div>
                            <button className='btn btn-warning'>PRINT</button>
                        </div>
                    </div>

                    <div style={{ backgroundColor: "#F6F8FA" }}>
                        <div className='ProductMasterNavTabs'>
                            <ul className="nav  nav-underline" style={{ padding: "4px 8px" }}>
                                <li className="nav-item">
                                    <a className={`nav-link ${selectedTab === 'Details' ? 'active' : ''}`} onClick={() => handleTabClick('Details')}>Data View</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${selectedTab === 'More Information' ? 'active' : ''}`} onClick={() => handleTabClick('More Information')}>Graphical View</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvoiceProfitAnalysis