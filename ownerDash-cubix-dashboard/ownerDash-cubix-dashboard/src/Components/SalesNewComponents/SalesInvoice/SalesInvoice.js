import React, { useEffect, useState } from 'react'
import './SalesInvoice.css'
import { IoClose } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { IoMdSave } from "react-icons/io";
import { FaPrint } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";

const SalesInvoice = () => {

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

    console.log(apifilteredItem, 'apifilteredItem')

    return (
        <div className='SalesInvoiceWrapper'>

            <div className='SalesInvHead'>SalesInvoice</div>

            <div className='SalesInvoiceBody'>

                <div className='SalesInvoiceLeft'>

                    <div className='SICashCheck'>
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
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='SITopInvCont'>
                        <div>InvNo</div>
                        <div>1005</div>
                        <div>
                            <label for="date">Date</label>
                            <input type="date" id="date" name="date" />
                        </div>
                    </div>

                    <div className='mt-2' style={{ fontStyle: "italic", textAlign: "left", color: "black", fontWeight: "bold", borderBottom: "1px solid black" }}>Account Information</div>

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
                                <a class="nav-link" href="#">address</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">delivery Info</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">delivery address</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Extras</a>
                            </li>
                        </ul>
                    </div>

                    <div className='SIAddressInpDrop'>
                        <input type="text" className="form-control customInp" id="exampleFormControlInput1" placeholder="" />
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='SI2Inps'>
                        <input type="text" className="form-control customInp" id="exampleFormControlInput1" placeholder="Contact No" />
                        <input type="text" className="form-control customInp" id="exampleFormControlInput1" placeholder="Fax" />
                    </div>

                    <div style={{ marginTop: "8px" }}>
                        <input type="text" className="form-control customInp" id="exampleFormControlInput1" placeholder="TRN" />
                    </div>

                    <div style={{ marginTop: "8px" }}>
                        <input type="text" className="form-control customInp" id="exampleFormControlInput1" placeholder="do nos" />
                        <input type="text" className="form-control customInp" id="exampleFormControlInput1" placeholder="ipo nos" />
                    </div>

                    <div className='SI4Inps2Cols'>
                        <div className='SI4LeftCont'>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">accont dr</span> */}
                                <input type="text" class="form-control customInp" placeholder="accont dr" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">credit limit</span> */}
                                <input type="text" class="form-control customInp" placeholder="credit limit" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">pdc inhand</span> */}
                                <input type="text" class="form-control customInp" placeholder="pdc inhand" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">area code</span> */}
                                <select class="form-select customInp" aria-label="Default select example">
                                    <option>area code</option>
                                    <option value="1">452155</option>
                                    <option value="2">55565</option>
                                    <option value="3">42222</option>
                                </select>
                            </div>
                        </div>
                        <div className='SI4RightCont'>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">account cr</span> */}
                                <input type="text" class="form-control customInp" placeholder="account cr" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">avail limit</span> */}
                                <input type="text" class="form-control customInp" placeholder="avail limit" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mt-2">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">cur.Bal</span> */}
                                <input type="text" class="form-control customInp" placeholder="cur.Bal" aria-label="Username" aria-describedby="basic-addon1" />
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
                    </div>

                    <div className='SI2InpsLeftandRight'>
                        <div class="input-group">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Job</span> */}
                            <input type="text" class="form-control customInp" placeholder="Job" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">terms</span> */}
                            <input type="text" class="form-control customInp" placeholder="terms" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className='SI2InpsLeftandRight'>
                        <div class="input-group">
                            {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">duedays</span> */}
                            <input type="text" class="form-control customInp" placeholder="duedays" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group">
                            <span class="input-group-text inpLeftPanel" id="basic-addon1">duedate</span>
                            <input type="date" class="form-control customInp" placeholder="duedate" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div>ADMIN</div>

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
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">FC</span> */}
                                <input type="text" class="form-control customInp" placeholder="FC" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Select External</span> */}
                                <input type="text" class="form-control customInp" placeholder="Select External" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Select Transfer</span> */}
                                <input type="text" class="form-control customInp" placeholder="Select Transfer" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='colOne'>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Gross amnt</span> */}
                                <input type="text" class="form-control customInp" placeholder="Gross amnt" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Disc amnt%</span> */}
                                <input type="text" class="form-control customInp" placeholder="Disc amnt%" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group">
                                {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Net Amnt</span> */}
                                <input type="text" class="form-control customInp" placeholder="Net Amnt" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>

                    <div style={{ fontStyle: "italic", textAlign: "left", color: "black", fontWeight: "bold", borderBottom: "1px solid black" }}>Item Information</div>

                    <div className='SILeftBottom'>

                        <div className='SIBottom3Cols'>
                            <div className='Bott3Col'>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group mt-2-text inpLeftPanel" id="basic-addon1">QtyInhand</span> */}
                                    <input type="text" class="form-control customInp" placeholder="QtyInhand" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group mt-2-text inpLeftPanel" id="basic-addon1">Cost Avg</span> */}
                                    <input type="text" class="form-control customInp" placeholder="Cost Avg" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group mt-2-text inpLeftPanel" id="basic-addon1">LP Cost</span> */}
                                    <input type="text" class="form-control customInp" placeholder="LP Cost" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className='Bott3Col'>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">Cash Price</span> */}
                                    <input type="text" class="form-control customInp" placeholder="Cash Price" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">L.SalesPrice</span> */}
                                    <input type="text" class="form-control customInp" placeholder="L.SalesPrice" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">L.C.SalesPrice</span> */}
                                    <input type="text" class="form-control customInp" placeholder="L.C.SalesPrice" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className='Bott3Col'>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">P.Do Qty</span> */}
                                    <input type="text" class="form-control customInp" placeholder="P.Do Qty" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">P.So Qty</span> */}
                                    <input type="text" class="form-control customInp" placeholder="P.So Qty" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mt-2">
                                    {/* <span class="input-group-text inpLeftPanel" id="basic-addon1">P. Po Qty</span> */}
                                    <input type="text" class="form-control customInp" placeholder="P. Po Qty" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>

                        <div className='SIBottomActions'>
                            <button className='btn btn-warning'>Add</button>
                            <button className='btn btn-primary'>Save</button>
                            <button className='btn btn-info'>Print</button>
                            <button className='btn btn-danger'>Exit</button>
                            {/* <div>Add <IoAdd /></div>
                            <div>Save <IoMdSave /></div>
                            <div>Print <FaPrint /></div>
                            <div>Exit <IoMdExit /></div> */}
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

export default SalesInvoice