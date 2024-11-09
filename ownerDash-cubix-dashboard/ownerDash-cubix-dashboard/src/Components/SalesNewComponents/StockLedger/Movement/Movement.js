import React from 'react'
import './Movement.css'

const Movement = () => {
    return (
        <div className='SalesInvoiceWrapper'>

            {/* <div className='SalesInvHead'>PDC Issued Transfer</div> */}

            <div className='SalesInvoiceBody'>

                <div className='SalesInvoiceLeft'>

                    <div className='MoveTopOptions'>
                        <div className='MOLeft'>
                            <div class="form-check customCheck">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="Movement" />
                                <label class="form-check-label" for="Movement">
                                    Quantity Movement
                                </label>
                            </div>
                            <div class="form-check customCheck">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="Fast" />
                                <label class="form-check-label" for="Fast">
                                    Fast Moving
                                </label>
                            </div>
                            <div class="form-check customCheck">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="Slow" />
                                <label class="form-check-label" for="Slow">
                                    Slow Moving
                                </label>
                            </div>
                            <div class="form-check customCheck">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id=" Non" />
                                <label class="form-check-label" for=" Non">
                                    Non Moving
                                </label>
                            </div>
                        </div>
                        <div className='MORight'>
                            <div className='QAdirectPrinter mt-2'>
                                <div class="form-check customCheck w-100">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Summary
                                    </label>
                                </div>
                            </div>
                            <div class="form-check customCheck">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="Groupwise" />
                                <label class="form-check-label" for="Groupwise">
                                    Groupwise
                                </label>
                            </div>
                            <div class="form-check customCheck">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="Itemwise" />
                                <label class="form-check-label" for="Itemwise">
                                    Itemwise Analysis(Qty)
                                </label>
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text" id="basic-addon1">FROM</span> */}
                                <input type="text" class="form-control" placeholder="Quantity Movement Unit" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="input-group mt-2">
                            <span class="input-group-text" id="basic-addon1">FROM</span>
                            <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mt-2">
                            <span class="input-group-text" id="basic-addon1">TO</span>
                            <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">area code</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option>SELECT LOCATION</option>
                                <option value="1">452155</option>
                                <option value="2">55565</option>
                                <option value="3">42222</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div className='QAdirectPrinter mt-2'>
                            <div class="form-check customCheck">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Qty Without Zero Qty
                                </label>
                            </div>
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

                    <div className='QAButtons mt-2'>

                        <div className='QAdirectPrinter'>
                            <div class="form-check customCheck">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Grid
                                </label>
                            </div>
                        </div>

                        <div className='PODButtons'>
                            <button className='btn btn-primary'>APPLY</button>
                            <button className='btn btn-warning'>PRINT</button>
                        </div>

                    </div>

                </div>

                <div className='SalesInvoiceRight STARight'>
                </div>

            </div>
        </div>
    )
}

export default Movement