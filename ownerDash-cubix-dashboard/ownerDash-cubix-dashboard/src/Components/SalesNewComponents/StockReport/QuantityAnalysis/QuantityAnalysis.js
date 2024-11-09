import React from 'react'
import './QA.css'
import { CiUser } from "react-icons/ci";


const QuantityAnalysis = () => {
    return (
        <div className='SalesInvoiceWrapper'>
            {/* <div className='SalesInvHead'>Purchase Order Details</div> */}

            <div className='SalesInvoiceBody SalesRetListBody'>

                <div className='PODOptionHead'>
                    {/* <div className='PODOrderBox'> */}
                    <div className='SalesInvoiceBody IPATopBox'>
                        <div>Quantity Report</div>
                        <div>Quantity with value</div>
                        <div>Stock with price</div>
                        <div>Stock with Code & Description</div>
                        <div>Inventory Value As on Date</div>
                        <div>Binwise Report</div>
                        <div>Reorder Report</div>
                        <div>Quantity Locationwise</div>
                        <div>Stock with Volume & Weight</div>
                    </div>
                    {/* </div> */}
                    <div className='PODINPBox mt-2'>
                        <div className='QATopInp'>
                            {/* <div> */}
                            <div className='QAInpBoxes'>
                                <div class="input-group mt-2">
                                    <span class="input-group-text" id="basic-addon1">Date</span>
                                    <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">area code</span> */}
                                    <select class="form-select customInp" aria-label="Default select example">
                                        <option>group</option>
                                        <option value="1">452155</option>
                                        <option value="2">55565</option>
                                        <option value="3">42222</option>
                                    </select>
                                </div>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">area code</span> */}
                                    <select class="form-select customInp" aria-label="Default select example">
                                        <option>subgroup</option>
                                        <option value="1">452155</option>
                                        <option value="2">55565</option>
                                        <option value="3">42222</option>
                                    </select>
                                </div>
                            </div>
                            <div className='QAInpBoxes'>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">area code</span> */}
                                    <select class="form-select customInp" aria-label="Default select example">
                                        <option>location</option>
                                        <option value="1">452155</option>
                                        <option value="2">55565</option>
                                        <option value="3">42222</option>
                                    </select>
                                </div>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">area code</span> */}
                                    <select class="form-select customInp" aria-label="Default select example">
                                        <option>category</option>
                                        <option value="1">452155</option>
                                        <option value="2">55565</option>
                                        <option value="3">42222</option>
                                    </select>
                                </div>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">area code</span> */}
                                    <select class="form-select customInp" aria-label="Default select example">
                                        <option>subcategory</option>
                                        <option value="1">452155</option>
                                        <option value="2">55565</option>
                                        <option value="3">42222</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='QATopOptions'>

                            <div className='QAEnableOption'>

                                <div className='QAdirectPrinter'>
                                    <div class="form-check customCheck">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Enable Filter DropDown
                                        </label>
                                    </div>
                                </div>
                                <div className='SICashCheck'>
                                    <div class="form-check customCheck">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="All" />
                                        <label class="form-check-label" for="All">
                                            All
                                        </label>
                                    </div>
                                    <div class="form-check customCheck">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="Plus" />
                                        <label class="form-check-label" for="Plus">
                                            Plus Only
                                        </label>
                                    </div>
                                    <div class="form-check customCheck">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="Minus" />
                                        <label class="form-check-label" for="Minus">
                                            Minus Only
                                        </label>
                                    </div>
                                    <div class="form-check customCheck">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id=" Non Zero" />
                                        <label class="form-check-label" for=" Non Zero">
                                            Non Zero
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='QAButtons'>

                            <div className='QAdirectPrinter'>
                                <div class="form-check customCheck">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Grid
                                    </label>
                                </div>
                            </div>

                            <div className='PODButtons'>
                                <button className='btn btn-primary'>PRINT</button>
                                <button className='btn btn-warning'>EXPORT</button>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='PODBody'>

                </div>

            </div>
        </div >
    )
}

export default QuantityAnalysis