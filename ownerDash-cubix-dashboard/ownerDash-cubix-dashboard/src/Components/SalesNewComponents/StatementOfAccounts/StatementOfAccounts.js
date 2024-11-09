import React, { useState } from 'react'
import './StatementOfAccounts.css'
import { LuRefreshCcw } from "react-icons/lu";
import { FaPrint } from "react-icons/fa6";



const StatementOfAccounts = () => {
    const [selectedTab, setSelectedTab] = useState('Details')

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };

    return (
        <div className='SalesInvoiceWrapper'>

            <div className='SalesInvHead'>Statement Of Accounts</div>

            <div className='SalesInvoiceBody'>

                <div className='SalesInvoiceLeft'>

                    <div className='SICashCheck SOAREFDIV mt-2'>
                        <div class="input-group">
                            {/* <span class="input-group-text" id="basic-addon1">Account</span> */}
                            <input type="text" class="form-control customInp" placeholder="Account" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className='RefIcon'>
                            <span className='RefSpan'>SHOW</span>
                            <LuRefreshCcw />
                        </div>
                    </div>
                    <div className='SICashCheck SOAREFDIV mt-2'>
                        <div class="input-group">
                            {/* <span class="input-group-text" id="basic-addon1">Group-|</span> */}
                            <input type="text" class="form-control customInp" placeholder="Group-|" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className='RefIcon'>
                            <span className='RefSpan'>SHOW</span>
                            <LuRefreshCcw />
                        </div>
                    </div>
                    <div className='SICashCheck SOAREFDIV mt-2'>
                        <div class="input-group">
                            {/* <span class="input-group-text" id="basic-addon1">Group-||</span> */}
                            <input type="text" class="form-control customInp" placeholder="Group-||" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="checkbox" value="" id="Group" />
                            <label class="form-check-label" for="Group">
                                Group Co.
                            </label>
                        </div>
                    </div>

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

                    <div style={{ fontStyle: "italic", textAlign: "left", color: "black", fontWeight: "bold", borderBottom: "1px solid black", marginTop: "8px" }}>Account Information</div>

                    <div class="form-floating mt-2">
                        <textarea class="form-control customInp" placeholder="Comments" id="floatingTextarea2" style={{ height: "80px" }}></textarea>
                        {/* <label for="floatingTextarea2">Comments</label> */}
                    </div>

                    <div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Search</span> */}
                            <input type="text" class="form-control customInp" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className='mt-2'>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">DEPT CODE</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option>DEPT CODE</option>
                                <option value="1">452155</option>
                                <option value="2">55565</option>
                                <option value="3">42222</option>
                            </select>
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">SALES PERSON</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option>SALES PERSON</option>
                                <option value="1">452155</option>
                                <option value="2">55565</option>
                                <option value="3">42222</option>
                            </select>
                        </div>
                        <div className='mt-2' style={{ display: "flex", justifyContent: "center" }}>
                            <div class="form-check customCheck w-60">
                                <input class="form-check-input" type="checkbox" value="" id="Salesperson" />
                                <label class="form-check-label" for="Salesperson">
                                    Salesperson from master
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-floating mt-2">
                        <textarea class="form-control customInp" placeholder="Comments" id="floatingTextarea2" style={{ height: "80px" }}></textarea>
                        {/* <label for="floatingTextarea2">Comments</label> */}
                    </div>



                </div>

                <div className='SalesInvoiceRight'>

                    <div style={{ backgroundColor: "#F6F8FA" }}>
                        <div className='ProductMasterNavTabs'>
                            <ul className="nav  nav-underline" style={{ padding: "4px 8px" }}>
                                <li className="nav-item">
                                    <a className={`nav-link ${selectedTab === 'Details' ? 'active' : ''}`} onClick={() => handleTabClick('Details')}>Statement</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${selectedTab === 'More Information' ? 'active' : ''}`} onClick={() => handleTabClick('More Information')}>OutStanding Statement</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${selectedTab === 'Assembly Items' ? 'active' : ''}`} onClick={() => handleTabClick('Assembly Items')}>Ageing Statement</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='SOALeftOptions'>
                        <div className='SOA4Options'>
                            <div>
                                <div class="form-check customCheck">
                                    <input class="form-check-input" type="checkbox" value="" id="Exclude" />
                                    <label class="form-check-label" for="Exclude">
                                        Exclude Opening
                                    </label>
                                </div>
                                <div class="form-check customCheck">
                                    <input class="form-check-input" type="checkbox" value="" id="Consolidate" />
                                    <label class="form-check-label" for="Consolidate">
                                        Consolidate
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div class="form-check customCheck">
                                    <input class="form-check-input" type="checkbox" value="" id="PDC" />
                                    <label class="form-check-label" for="PDC">
                                        Show PDC
                                    </label>
                                </div>
                                <div class="form-check customCheck">
                                    <input class="form-check-input" type="checkbox" value="" id="Summary" />
                                    <label class="form-check-label" for="Summary">
                                        Group Summary
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='SOAFCToggle'>
                            <div class="input-group" style={{ display: "flex", justifyContent: "center", backgroundColor: "black" }}>
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1" style={{ width: '60%', color: 'white' }}>Include VAT</span> */}
                                <span style={{ color: "white" }}>FC</span>
                                <div class="form-check form-switch" style={{ width: '70%', display: "flex", justifyContent: "center" }}>
                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>

                        <div className='SOARadio'>
                            <div class="form-check customCheck">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="All" />
                                <label class="form-check-label" for="All">
                                    All
                                </label>
                            </div>
                            <div class="form-check customCheck">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id=" Debit Only" />
                                <label class="form-check-label" for=" Debit Only">
                                    Debit Only
                                </label>
                            </div>
                            <div class="form-check customCheck">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id=" Credit Only" />
                                <label class="form-check-label" for=" Credit Only">
                                    Credit Only
                                </label>
                            </div>
                        </div>

                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ width: "60%", display: "flex", justifyContent: "space-between" }}>
                            <div class="form-check customCheck">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Grid Export
                                </label>
                            </div>

                            <div>
                                <button className='btn btn-warning'>Print</button>
                            </div>
                        </div>
                    </div>

                    {/* <div className='SICashCheck'>
                        <div class="input-group" style={{ display: "flex", justifyContent: "space-between" }}>
                            // <span class="input-group-text inpLeftPanel" id="basic-addon1" style={{ width: '60%' }}>Apply Filter</span>
                            <div class="form-check form-switch" style={{ width: '40%', display: "flex", justifyContent: "center" }}>
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div class="input-group mt-2">
                            // <span class="input-group-text inpLeftPanel" id="basic-addon1">From</span>
                            <input type="date" class="form-control customInp" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mt-2">
                            // <span class="input-group-text inpLeftPanel" id="basic-addon1">To</span>
                            <input type="date" class="form-control customInp" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
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
                            // <span class="input-group-text inpLeftPanel" id="basic-addon1">BANK</span>
                            <input type="text" class="form-control customInp" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div> */}

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

export default StatementOfAccounts