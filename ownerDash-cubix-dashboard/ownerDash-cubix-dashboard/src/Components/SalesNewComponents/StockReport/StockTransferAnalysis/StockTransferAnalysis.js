import React from 'react'
import './StockTRAnalysis.css'

const StockTransferAnalysis = () => {
    return (
        <div className='SalesInvoiceWrapper'>

            {/* <div className='SalesInvHead'>PDC Issued Transfer</div> */}

            <div className='SalesInvoiceBody'>

                <div className='SalesInvoiceLeft'>

                    <div className='STATopInpBox'>
                        <div>
                            <div class="input-group mt-2">
                                <span class="input-group-text" id="basic-addon1">Date</span>
                                <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                <span class="input-group-text" id="basic-addon1">Date</span>
                                <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">area code</span> */}
                                <select class="form-select customInp" aria-label="Default select example">
                                    <option>SELECT DEPT</option>
                                    <option value="1">452155</option>
                                    <option value="2">55565</option>
                                    <option value="3">42222</option>
                                </select>
                            </div>
                        </div>

                        <div className='STAOptions'>
                            <div class="form-check customCheck">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="All" />
                                <label class="form-check-label" for="All">
                                    STOCK OUT
                                </label>
                            </div>
                            <div class="form-check customCheck">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="Plus" />
                                <label class="form-check-label" for="Plus">
                                    STOCK IN
                                </label>
                            </div>
                            <div class="form-check customCheck">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="Minus" />
                                <label class="form-check-label" for="Minus">
                                    P ISSUE
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <select class="form-select customInp" aria-label="Default select example">
                            <option selected>Select Transfer Account</option>
                            <option value="1">John Doe</option>
                            <option value="2">David Han</option>
                            <option value="3">Ben Cooper</option>
                        </select>
                    </div>

                    <div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Transfer Date</span> */}
                            <input type="text" class="form-control customInp" placeholder="Select item" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">area code</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option>GROUP</option>
                                <option value="1">452155</option>
                                <option value="2">55565</option>
                                <option value="3">42222</option>
                            </select>
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">area code</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option>SGROUP</option>
                                <option value="1">452155</option>
                                <option value="2">55565</option>
                                <option value="3">42222</option>
                            </select>
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">area code</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option>CATEGORY</option>
                                <option value="1">452155</option>
                                <option value="2">55565</option>
                                <option value="3">42222</option>
                            </select>
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">area code</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option>SCATEGORY</option>
                                <option value="1">452155</option>
                                <option value="2">55565</option>
                                <option value="3">42222</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className='SalesInvoiceRight STARight'>
                </div>

            </div>
        </div>
    )
}

export default StockTransferAnalysis