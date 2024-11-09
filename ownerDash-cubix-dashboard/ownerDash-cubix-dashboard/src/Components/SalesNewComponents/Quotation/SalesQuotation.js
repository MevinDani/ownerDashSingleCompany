import React, { useEffect, useState } from 'react'
import './SalesQuotation.css'
import { IoClose } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { IoMdSave } from "react-icons/io";
import { FaPrint } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";
import { BsDownload } from "react-icons/bs";


const SalesQuotation = () => {
    const [itemsArray, setItemsArray] = useState([]);
    const [itemName, setItemName] = useState('');
    const [code, setcode] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [discP, setDiscP] = useState('');
    const [amount, setAmount] = useState('');

    const [apifilteredItem, setApiFilteredItem] = useState([])

    const apiDummy = [
        {
            "Sl.No": 1,
            "Code": "ABC123",
            "Description": "Product A",
            "Location": "Warehouse A",
            "Quantity": 10,
            "unit": "pcs",
            "Disc%": 5,
            "amount": 100
        },
        {
            "Sl.No": 2,
            "Code": "DEF456",
            "Description": "Product B",
            "Location": "Warehouse B",
            "Quantity": 20,
            "unit": "pcs",
            "Disc%": 3,
            "amount": 200
        },
        {
            "Sl.No": 3,
            "Code": "GHI789",
            "Description": "Product C",
            "Location": "Warehouse C",
            "Quantity": 15,
            "unit": "pcs",
            "Disc%": 7,
            "amount": 150
        },
        {
            "Sl.No": 1,
            "Code": "ABC123",
            "Description": "Product A",
            "Location": "Warehouse A",
            "Quantity": 10,
            "unit": "pcs",
            "Disc%": 5,
            "amount": 100
        },
        {
            "Sl.No": 2,
            "Code": "DEF456",
            "Description": "Product B",
            "Location": "Warehouse B",
            "Quantity": 20,
            "unit": "pcs",
            "Disc%": 3,
            "amount": 200
        },
        {
            "Sl.No": 3,
            "Code": "GHI789",
            "Description": "Product C",
            "Location": "Warehouse C",
            "Quantity": 15,
            "unit": "pcs",
            "Disc%": 7,
            "amount": 150
        },
        {
            "Sl.No": 1,
            "Code": "ABC123",
            "Description": "Product A",
            "Location": "Warehouse A",
            "Quantity": 10,
            "unit": "pcs",
            "Disc%": 5,
            "amount": 100
        },
        {
            "Sl.No": 2,
            "Code": "DEF456",
            "Description": "Product B",
            "Location": "Warehouse B",
            "Quantity": 20,
            "unit": "pcs",
            "Disc%": 3,
            "amount": 200
        },
        {
            "Sl.No": 3,
            "Code": "GHI789",
            "Description": "Product C",
            "Location": "Warehouse C",
            "Quantity": 15,
            "unit": "pcs",
            "Disc%": 7,
            "amount": 150
        },
        {
            "Sl.No": 1,
            "Code": "ABC123",
            "Description": "Product A",
            "Location": "Warehouse A",
            "Quantity": 10,
            "unit": "pcs",
            "Disc%": 5,
            "amount": 100
        },
        {
            "Sl.No": 2,
            "Code": "DEF456",
            "Description": "Product B",
            "Location": "Warehouse B",
            "Quantity": 20,
            "unit": "pcs",
            "Disc%": 3,
            "amount": 200
        },
        {
            "Sl.No": 3,
            "Code": "GHI789",
            "Description": "Product C",
            "Location": "Warehouse C",
            "Quantity": 15,
            "unit": "pcs",
            "Disc%": 7,
            "amount": 150
        },
        {
            "Sl.No": 1,
            "Code": "ABC123",
            "Description": "Product A",
            "Location": "Warehouse A",
            "Quantity": 10,
            "unit": "pcs",
            "Disc%": 5,
            "amount": 100
        },
        {
            "Sl.No": 2,
            "Code": "DEF456",
            "Description": "Product B",
            "Location": "Warehouse B",
            "Quantity": 20,
            "unit": "pcs",
            "Disc%": 3,
            "amount": 200
        },
        {
            "Sl.No": 3,
            "Code": "GHI789",
            "Description": "Product C",
            "Location": "Warehouse C",
            "Quantity": 15,
            "unit": "pcs",
            "Disc%": 7,
            "amount": 150
        },
        {
            "Sl.No": 1,
            "Code": "ABC123",
            "Description": "Product A",
            "Location": "Warehouse A",
            "Quantity": 10,
            "unit": "pcs",
            "Disc%": 5,
            "amount": 100
        },
        {
            "Sl.No": 2,
            "Code": "DEF456",
            "Description": "Product B",
            "Location": "Warehouse B",
            "Quantity": 20,
            "unit": "pcs",
            "Disc%": 3,
            "amount": 200
        },
        {
            "Sl.No": 3,
            "Code": "GHI789",
            "Description": "Product C",
            "Location": "Warehouse C",
            "Quantity": 15,
            "unit": "pcs",
            "Disc%": 7,
            "amount": 150
        },
    ]


    const addItem = () => {
        if (itemName === '' && description === '' && quantity === '' && price === '' && location === '' && discP === '' && amount === '') {
            return
        }
        const newItem = {
            itemName: itemName,
            description: description,
            quantity: quantity,
            price: price,
            location: location,
            discP: discP,
            amount: amount
        };

        // Update state to include the new item
        setItemsArray(prevItems => [...prevItems, newItem]);

        // Clear input fields for the next entry
        setItemName('');
        setDescription('');
        setQuantity('');
        setPrice('');
        setLocation('');
        setDiscP('');
        setAmount('');
    };

    const removeItem = (index) => {
        const updatedItemsArray = [...itemsArray];
        updatedItemsArray.splice(index, 1);
        setItemsArray(updatedItemsArray);
    };

    const selectSearchItemClick = (item) => {

        console.log(item)
        setcode('');
        setDescription('');
        setQuantity('');
        setPrice('');
        setLocation('');
        setDiscP('');
        setAmount('');

        // Update state to include the new item
        setItemsArray(prevItems => [...prevItems, item]);
    }

    useEffect(() => {
        if (code !== '' || description !== '' || location !== '' || quantity !== '' || price !== '' || discP !== '') {
            const filteredItems = apiDummy.filter(item =>
                item.Code.includes(code) &&
                item.Description.includes(description) &&
                item.Location.includes(location) &&
                item.Quantity.toString().includes(quantity) &&
                item.amount.toString().includes(price) &&
                item['Disc%'].toString().includes(discP)
            );
            setApiFilteredItem(filteredItems);
        } else {
            setApiFilteredItem([]);
        }
    }, [code, description, location, quantity, price, discP]);

    return (
        <div className='SalesInvoiceWrapper'>

            <div className='SalesInvHead'>Sales Quotation</div>

            <div className='SalesInvoiceBody'>

                <div className='SalesInvoiceLeft'>

                    <div className='SICashCheck'>
                        <div>
                            Qty Type
                        </div>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                CASH
                            </label>
                        </div>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                CREDIT
                            </label>
                        </div>
                    </div>

                    <div className='SITopInvCont'>
                        <div>Qo No</div>
                        <div>1003</div>
                        <div>
                            <label for="date">Date</label>
                            <input type="date" id="date" name="date" />
                        </div>
                    </div>

                    <div className='SQULeftUserAdmin mt-2'>
                        <div class="input-group">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">User</span> */}
                            <input type="text" class="form-control customInp customInp" placeholder="User" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">SalesMan</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option>SalesMan</option>
                                <option value="1">John Doe</option>
                                <option value="2">David Han</option>
                                <option value="3">Ben Cooper</option>
                            </select>
                        </div>
                    </div>

                    <div className='mt-2' style={{ fontStyle: "italic", textAlign: "left", color: "black", fontWeight: "bold" }}>Registered</div>

                    <div>
                        <select class="form-select customInp" aria-label="Default select example">
                            <option selected>Select Customer</option>
                            <option value="1">John Doe</option>
                            <option value="2">David Han</option>
                            <option value="3">Ben Cooper</option>
                        </select>
                    </div>

                    <div className='SIAddressTabs'>
                        <ul class="nav nav-underline">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Account Info</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Address Data</a>
                            </li>
                        </ul>
                    </div>

                    <div className='SI4Inps2Cols'>
                        <div className='SI4LeftCont'>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Account</span> */}
                                <input type="text" class="form-control customInp" placeholder="Account" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Curr. Bal</span> */}
                                <input type="text" class="form-control customInp" placeholder="Curr. Bal" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">PDC</span> */}
                                <input type="text" class="form-control customInp" placeholder="PDC" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='SI4RightCont'>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Area Code</span> */}
                                <select class="form-select customInp" aria-label="Default select example">
                                    <option>Area Code</option>
                                    <option value="1">452155</option>
                                    <option value="2">55565</option>
                                    <option value="3">42222</option>
                                </select>
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">CR Limit</span> */}
                                <input type="text" class="form-control customInp" placeholder="CR Limit" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Avl Limit</span> */}
                                <input type="text" class="form-control customInp" placeholder="Avl Limit" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>

                    <div style={{ fontStyle: "italic", textAlign: "left", color: "black", fontWeight: "bold", borderBottom: "1px solid black" }}>Reference and Subject</div>

                    <div className='SQLeftRefSubj'>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Ref#</span> */}
                            <input type="text" class="form-control customInp" placeholder="Ref#" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Subject</span> */}
                            <input type="text" class="form-control customInp" placeholder="Subject" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Attention</span> */}
                            <input type="text" class="form-control customInp" placeholder="Attention" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div style={{ fontStyle: "italic", textAlign: "left", color: "black", fontWeight: "bold", borderBottom: "1px solid black" }}>Delivery and Payment Terms</div>

                    <div className='SQLeftRefSubj'>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Delivery</span> */}
                            <input type="text" class="form-control customInp" placeholder="Delivery" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Terms</span> */}
                            <input type="text" class="form-control customInp" placeholder="Terms" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Validity</span> */}
                            <input type="text" class="form-control customInp" placeholder="Validity" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Remarks</span> */}
                            <input type="text" class="form-control customInp" placeholder="Remarks" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                </div>

                <div className='SalesInvoiceRight'>

                    <div className='SIAddItemCont' style={{ marginBottom: "8px" }}>
                        <p class="d-inline-flex gap-1">
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                Search Items
                            </button>
                        </p>
                        <div class="collapse" id="collapseExample">
                            <div class="card card-body srchCont">
                                <div className='AddItemCont'>
                                    <div>
                                        <input type="text" className="form-control customInp" value={code} onChange={(e) => setcode(e.target.value)} placeholder='code' />
                                    </div>
                                    <div>
                                        <input type="text" className="form-control customInp" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description' />
                                    </div>
                                    <div>
                                        <input type="text" className="form-control customInp" value={location} onChange={(e) => setLocation(e.target.value)} placeholder='location' />
                                    </div>
                                    <div>
                                        <input type="text" className="form-control customInp" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder='quantity' />
                                    </div>
                                    <div>
                                        <input type="text" className="form-control customInp" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='unit' />
                                    </div>
                                    {/* <div>
                                        <input type="text" className="form-control customInp" value={discP} onChange={(e) => setDiscP(e.target.value)} placeholder='Disc%' />
                                    </div> */}
                                    <div>
                                        <input type="text" className="form-control customInp" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='amount' />
                                    </div>
                                </div>
                                {/* <div className='AddItemBtn'>
                                    <button className='btn btn-success' onClick={addItem}>Add</button>
                                </div> */}

                                {
                                    apifilteredItem && apifilteredItem.length > 0 && (
                                        <div className='srchTableCont'>
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>Sl.No</th>
                                                        <th>Code</th>
                                                        <th>Description</th>
                                                        <th>Location</th>
                                                        <th>Quantity</th>
                                                        <th>unit</th>
                                                        <th>Disc%</th>
                                                        <th>amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        apifilteredItem.map((item, index) => (
                                                            <tr key={index} className='srchTableTr' onClick={() => selectSearchItemClick(item)}>
                                                                <td>{index + 1}</td>
                                                                <td>{item.Code}</td>
                                                                <td>{item.Description}</td>
                                                                <td>{item.Location}</td>
                                                                <td>{item.Quantity}</td>
                                                                <td>{item.unit}</td>
                                                                <td>{item['Disc%']}</td>
                                                                <td>{item.amount}</td>
                                                                {/* <td style={{ cursor: 'pointer' }} onClick={() => removeItem(index)}><IoClose /></td> */}
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                        <div className='ItemTableCont'>
                            {
                                itemsArray && itemsArray.length > 0 && (
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Sl.No</th>
                                                <th>Code</th>
                                                <th>Description</th>
                                                <th>Location</th>
                                                <th>Quantity</th>
                                                <th>unit</th>
                                                <th>Disc%</th>
                                                <th>amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                itemsArray.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{item.Code}</td>
                                                        <td>{item.Description}</td>
                                                        <td>{item.Location}</td>
                                                        <td>{item.Quantity}</td>
                                                        <td>{item.unit}</td>
                                                        <td>{item['Disc%']}</td>
                                                        <td>{item.amount}</td>
                                                        <td style={{ cursor: 'pointer' }} onClick={() => removeItem(index)}><IoClose /></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                )
                            }
                        </div>
                    </div>

                    <div className='SIRightMidHead'>
                        <div>SERV 0</div>
                        <div>MEP 0</div>
                        <div>MFG 0</div>
                        <div>RNT 0</div>
                        <div>TRD 0</div>
                    </div>

                    <div className='SIRight3ColsInps'>
                        <div className='colOne'>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Taxable amnt</span> */}
                                <input type="text" class="form-control customInp" placeholder="Taxable amnt" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">VAT amnt</span> */}
                                <input type="text" class="form-control customInp" placeholder="VAT amnt" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">BC amnt</span> */}
                                <input type="text" class="form-control customInp" placeholder="BC amnt" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='colOne'>
                            <div class="input-group" style={{ display: "flex", justifyContent: "center", backgroundColor: "black" }}>
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1" style={{ width: '60%', color: 'white' }}>Include VAT</span> */}
                                <span style={{ color: "white" }}>Include VAT</span>
                                <div class="form-check form-switch" style={{ width: '40%', display: "flex", justifyContent: "center" }}>
                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ width: "100%" }} />
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div class="input-group">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">FC</span> */}
                                    <select class="form-select customInp" aria-label="Default select example">
                                        <option value='aed'>FC</option>
                                        <option value="1">USD</option>
                                        <option value="2">EUR</option>
                                        <option value="3">INR</option>
                                    </select>
                                </div>
                                <div class="input-group">
                                    <input type="text" class="form-control customInp" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div class="input-group">
                                    <select class="form-select" aria-label="Default select example">
                                        <option value='' selected>Select Transfer</option>
                                        <option value="1">USD</option>
                                        <option value="2">EUR</option>
                                        <option value="3">INR</option>
                                    </select>
                                </div>
                                <div class="input-group">
                                    <input type="text" class="form-control customInp" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1"> <BsDownload /></span> */}
                                </div>
                            </div>
                        </div>
                        <div className='colOne'>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Gross amnt</span> */}
                                <input type="text" class="form-control customInp" placeholder="Gross amnt" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div class="input-group">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Disc amnt</span> */}
                                    <input type="text" class="form-control customInp" placeholder="Disc amnt" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">%</span> */}
                                    <input type="text" class="form-control customInp" placeholder="%" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Net Amnt</span> */}
                                <input type="text" class="form-control customInp" placeholder="Net Amnt" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>

                    {/* <div style={{ fontStyle: "italic", fontWeight: "bold" }}>Item Information</div> */}

                    <div className='SILeftBottom'>

                        <div className='SIBottom3Cols'>
                            <div className='Bott3Col'>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">QtyInhand</span> */}
                                    <input type="text" class="form-control customInp" placeholder="QtyInhand" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">LP Cost</span> */}
                                    <input type="text" class="form-control customInp" placeholder="LP Cost" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">L.C.SalesPrice</span> */}
                                    <input type="text" class="form-control customInp" placeholder="L.C.SalesPrice" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className='Bott3Col'>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Cost Avg</span> */}
                                    <input type="text" class="form-control customInp" placeholder="Cost Avg" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Cash Price</span> */}
                                    <input type="text" class="form-control customInp" placeholder="Cash Price" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">L.C.SalesPrice</span> */}
                                    <input type="text" class="form-control customInp" placeholder="L.C.SalesPrice" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className='Bott3Col'>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">PendSo</span> */}
                                    <input type="text" class="form-control customInp" placeholder="PendSo" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mt-2">
                                    <input type="text" class="form-control customInp" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">L.Qprice</span> */}
                                    <input type="text" class="form-control customInp" placeholder="L.Qprice" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>

                        <div className='SIBottomActions'>
                            <button className='btn btn-warning'>Add</button>
                            <button className='btn btn-primary'>Save</button>
                            <button className='btn btn-info'>Print</button>
                            <button className='btn btn-danger'>Exit</button>
                        </div>
                    </div>

                    <div className='directPrinter'>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Direct to Printer
                            </label>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}

export default SalesQuotation