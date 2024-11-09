import React, { useState } from 'react'
import './ProductMaster.css'
import { FaRegEye } from "react-icons/fa";


const ProductMaster = () => {

    const [selectedTab, setSelectedTab] = useState('Details')

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };
    return (
        <div className='SalesInvoiceWrapper'>

            <div className='SalesInvHead'>Product Master</div>
            {/* <div className='' style={{ fontWeight: "bold", fontSize: "20px" }}>Product Master</div> */}

            <div className='SalesInvoiceBody ProductMasterBody'>

                <div className='ProductMasterTopBox'>
                    <div class="input-group mb-3">
                        {/* <span class="input-group-text" id="basic-addon1">Code</span> */}
                        <input type="text" class="form-control" placeholder="Auto Code" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div class="input-group mb-3">
                        {/* <span class="input-group-text" id="basic-addon1">OEM</span> */}
                        <input type="text" class="form-control" placeholder="OEM" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div class="input-group mb-3">
                        {/* <span class="input-group-text" id="basic-addon1">ModelNo</span> */}
                        <input type="text" class="form-control" placeholder="ModelNo" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>

                <div className='ProductMasterDescSpec'>
                    <div class="input-group">
                        {/* <span class="input-group-text">Description</span> */}
                        <textarea class="form-control" placeholder='Description' aria-label="With textarea"></textarea>
                    </div>
                    <div class="input-group">
                        {/* <span class="input-group-text">Specification</span> */}
                        <textarea class="form-control" placeholder='Specification' aria-label="With textarea"></textarea>
                    </div>
                </div>

                <div className='ProductMasterNavTabs'>
                    <ul className="nav  nav-underline" style={{ padding: "4px 8px" }}>
                        <li className="nav-item">
                            <a className={`nav-link ${selectedTab === 'Details' ? 'active' : ''}`} onClick={() => handleTabClick('Details')}>Item Details</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${selectedTab === 'More Information' ? 'active' : ''}`} onClick={() => handleTabClick('More Information')}>More Information</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${selectedTab === 'Assembly Items' ? 'active' : ''}`} onClick={() => handleTabClick('Assembly Items')}>Assembly Items</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${selectedTab === 'Image Gallery' ? 'active' : ''}`} onClick={() => handleTabClick('Image Gallery')}>Image Gallery</a>
                        </li>
                    </ul>
                </div>

                <div className='ProductMasterItemDetailsBox'>
                    <div className='PMDetailBox'>
                        <div className='PMDetailLeft'>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text">Group</span> */}
                                <input type="text" class="form-control" placeholder="Group" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text">SubGroup</span> */}
                                <input type="text" class="form-control" placeholder="SubGroup" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text">Category</span> */}
                                <input type="text" class="form-control" placeholder="Category" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text">Subcategory</span> */}
                                <input type="text" class="form-control" placeholder="Subcategory" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text">Volume</span> */}
                                <input type="text" class="form-control" placeholder="Volume" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text">Weight</span> */}
                                <input type="text" class="form-control" placeholder="Weight" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text">HSCode</span> */}
                                <input type="text" class="form-control" placeholder="HSCode" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text">Origin</span> */}
                                <input type="text" class="form-control" placeholder="Origin" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text">Class</span> */}
                                <input type="text" class="form-control" placeholder="Class" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='PMDetailRight'>
                            <div className='PMDetailRightTop'>
                                <div class="input-group mb-3">
                                    {/* <span class="input-group-text" id="basic-addon1">Unit</span> */}
                                    <input type="text" class="form-control" placeholder="Unit" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mb-3">
                                    {/* <span class="input-group-text" id="basic-addon1">Bin</span> */}
                                    <input type="text" class="form-control" placeholder="Bin" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mb-3">
                                    {/* <span class="input-group-text" id="basic-addon1">Message</span> */}
                                    <input type="text" class="form-control" placeholder="Message" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className='PMDetailRightMainBox'>
                                <div>
                                    <div class="input-group mt-2">
                                        {/* <span class="input-group-text">Op.Qty</span> */}
                                        <input type="text" class="form-control" placeholder="Op.Qty" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <div class="input-group mt-2">
                                        {/* <span class="input-group-text">Bal.Qty</span> */}
                                        <input type="text" class="form-control" placeholder="Bal.Qty" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <div class="input-group mt-2">
                                        {/* <span class="input-group-text">Cash Price</span> */}
                                        <input type="text" aria-label="First name" placeholder='Cash Price' class="form-control" />
                                        {/* <input type="text" aria-label="Last name" class="form-control" /> */}
                                    </div>
                                    <div class="input-group mt-2">
                                        {/* <span class="input-group-text">Credit Price</span> */}
                                        <input type="text" aria-label="First name" placeholder='Credit Price' class="form-control" />
                                        {/* <input type="text" aria-label="Last name" class="form-control" /> */}
                                    </div>
                                    <div class="input-group mt-2">
                                        {/* <span class="input-group-text">Spl.Price</span> */}
                                        <input type="text" aria-label="First name" placeholder='Spl.Price' class="form-control" />
                                        {/* <input type="text" aria-label="Last name" class="form-control" /> */}
                                    </div>
                                    <div class="input-group mt-2">
                                        {/* <span class="input-group-text">Block Price</span> */}
                                        <input type="text" aria-label="First name" placeholder='Block Price' class="form-control" />
                                        {/* <input type="text" aria-label="Last name" class="form-control" /> */}
                                    </div>
                                </div>
                                <div>
                                    <div class="input-group mt-2">
                                        {/* <span class="input-group-text">Cost Open</span> */}
                                        <input type="text" class="form-control" placeholder="Cost Open" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <div class="input-group mt-2">
                                        {/* <span class="input-group-text">Cost Avg</span> */}
                                        <input type="text" class="form-control" placeholder="Cost Avg" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <div class="input-group mt-2">
                                        {/* <span class="input-group-text">Last PCost</span> */}
                                        <input type="text" class="form-control" placeholder="Last PCost" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <div class="input-group mt-2">
                                        {/* <span class="input-group-text">DCP</span> */}
                                        <input type="text" class="form-control" placeholder="DCP" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <div class="input-group mt-2">
                                        {/* <span class="input-group-text">Min.Qty</span> */}
                                        <input type="text" class="form-control" placeholder="Min.Qty" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <div class="input-group mt-2">
                                        {/* <span class="input-group-text">ReorderQty</span> */}
                                        <input type="text" class="form-control" placeholder="ReorderQty" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <div class="input-group mt-2">
                                        {/* <span class="input-group-text">FixedCost</span> */}
                                        <input type="text" class="form-control" placeholder="FixedCost" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div>
                                    <div className='MoreRefBox'>
                                        <div style={{ backgroundColor: "#F8F9FA" }}>More References</div>
                                        <div className='MoreRefWhiteBox'></div>
                                        <div style={{ backgroundColor: "#F8F9FA" }}><FaRegEye />View Price Chart</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='PMDetailOptions'>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Inventory
                            </label>
                        </div>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Service
                            </label>
                        </div>
                    </div>
                </div>

                <div className='SalesBottomButtons'>
                    <div className='SB_BOX'>
                        <div>
                            <button className='btn btn-danger'>Exit</button>
                        </div>
                        <div>
                            <button className='btn btn-success'>Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ProductMaster