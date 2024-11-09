
import './SalesReturn.css'
import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { IoMdSave } from "react-icons/io";
import { FaPrint } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";
import { BsDownload } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";


const SalesReturn = () => {
    const [itemsArray, setItemsArray] = useState([]);
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
        if (code === '' && description === '' && quantity === '' && price === '' && location === '' && discP === '' && amount === '') {
            return
        }
        const newItem = {
            code: code,
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
        setcode('');
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

    console.log(apifilteredItem, 'apifilteredItem')

    return (
        <div className='SalesInvoiceWrapper'>

            <div className='SalesInvHead'>Sales Return</div>

            <div className='SalesInvoiceBody'>

                <div className='SalesInvoiceLeft'>

                    <div className='SICashCheck'>
                        <div style={{ padding: "4px", backgroundColor: "white" }}>
                            Sr Type
                        </div>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Cash
                            </label>
                        </div>
                        <div class="form-check customCheck">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Credit
                            </label>
                        </div>
                    </div>

                    <div className='SITopInvCont mt-2'>
                        <div>Sr No</div>
                        <div>-1</div>
                        <div>
                            <label for="date">Date</label>
                            <input type="date" id="date" name="date" />
                        </div>
                    </div>

                    <div className='mt-2' style={{ fontStyle: "italic", textAlign: "left", color: "black", fontWeight: "bold", borderBottom: "1px solid black" }}>Customer Information</div>

                    <div className='SI4Inps2Cols'>
                        <div className='SI4LeftCont' style={{ width: "100%" }}>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Customer (F2)</span> */}
                                <input type="text" class="form-control customInp" placeholder="Customer (F2)" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Remarks</span> */}
                                <input type="text" class="form-control customInp" placeholder="Remarks" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">LPO No</span> */}
                                <input type="text" class="form-control customInp" placeholder="LPO No" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Trn#</span> */}
                                <input type="text" class="form-control customInp" placeholder="Trn#" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>

                    <div className='SRTransferButton mt-2' style={{ display: "flex", justifyContent: "space-between" }}>
                        <div class="input-group">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Transfer Inv No</span> */}
                            <input type="text" class="form-control customInp" placeholder="Transfer Inv No" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div>
                            <button className='btn btn-success'>TRANSFER</button>
                        </div>
                    </div>

                    <div className='mt-2' style={{ fontStyle: "italic", textAlign: "left", color: "black", fontWeight: "bold", borderBottom: "1px solid black" }}>Account Information - Current Balance</div>

                    <div className='SQLeftRefSubj'>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Account No</span> */}
                            <input type="text" class="form-control customInp" placeholder="Account No" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">PDC Inhand</span> */}
                            <input type="text" class="form-control customInp" placeholder="PDC Inhand" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Area Code</span> */}
                            <input type="text" class="form-control customInp" placeholder="Area Code" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Dr Account</span> */}
                            <input type="text" class="form-control customInp" placeholder="Dr Account" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Credit Limit</span> */}
                            <input type="text" class="form-control customInp" placeholder="Credit Limit" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Avl Limit</span> */}
                            <input type="text" class="form-control customInp" placeholder="Avl Limit" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className='SQLeftRefSubj'>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Invoice Salesman</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option value='' >Invoice Salesman</option>
                                <option value='aed' >AED</option>
                                <option value="1">USD</option>
                                <option value="2">EUR</option>
                                <option value="3">INR</option>
                            </select>
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Transaction Salesman</span> */}
                            <select class="form-select customInp" aria-label="Default select example">
                                <option value=''>Transaction Salesman</option>
                                <option value='aed' >AED</option>
                                <option value="1">USD</option>
                                <option value="2">EUR</option>
                                <option value="3">INR</option>
                            </select>
                        </div>
                        <div class="input-group mt-2">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Pass Key</span> */}
                            <input type="text" class="form-control customInp" placeholder="Pass Key" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className='mt-2'>
                        <div class="input-group">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">User</span> */}
                            <input type="text" class="form-control customInp" placeholder="User" aria-label="Username" aria-describedby="basic-addon1" />
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

                    <div className='SIRight3ColsInps SRRight3ColsInps'>
                        <div className='colOne'>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">VAT amnt</span> */}
                                <input type="text" class="form-control customInp" placeholder="VAT amnt" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">FC</span> */}
                                <select class="form-select customInp" aria-label="Default select example">
                                    <option value='aed'>FC</option>
                                    <option value='aed' selected>AED</option>
                                    <option value="1">USD</option>
                                    <option value="2">EUR</option>
                                    <option value="3">INR</option>
                                </select>
                            </div>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">BC amnt</span> */}
                                <input type="text" class="form-control customInp" placeholder="BC amnt" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='colOne'>
                            <div class="input-group" style={{ display: "flex", justifyContent: "center", backgroundColor: "black" }}>
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1" style={{ width: '60%', color: 'white' }}>Include VAT</span> */}
                                <span style={{ color: "white" }}>Select All Items</span>
                                <div class="form-check form-switch" style={{ width: '40%', display: "flex", justifyContent: "center" }}>
                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ width: "100%" }} />
                                </div>
                            </div>
                            <div class="input-group" style={{ display: "flex", justifyContent: "center", backgroundColor: "black" }}>
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1" style={{ width: '60%', color: 'white' }}>Include VAT</span> */}
                                <span style={{ color: "white" }}>Include VAT</span>
                                <div class="form-check form-switch" style={{ width: '40%', display: "flex", justifyContent: "center" }}>
                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ width: "100%" }} />
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

                    <div className='SILeftBottom'>

                        <div className='SIBottom3Cols'>
                            <div>Purchase History</div>
                        </div>

                        <div className='SIBottomActions'>
                            <button className='btn btn-warning'>Add</button>
                            <button className='btn btn-primary'>Save</button>
                            <button className='btn btn-info'>Print</button>
                            <button className='btn btn-danger'>Exit</button>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}

export default SalesReturn