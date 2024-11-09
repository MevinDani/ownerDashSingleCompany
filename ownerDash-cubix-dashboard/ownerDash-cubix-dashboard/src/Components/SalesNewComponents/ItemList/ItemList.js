import React, { useState } from 'react'
import './ItemList.css'
import { IoClose } from "react-icons/io5";
import { GiStopwatch } from "react-icons/gi";
import { LuRefreshCw } from "react-icons/lu";


const ItemList = () => {
    const [itemsArray, setItemsArray] = useState([]);
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [discP, setDiscP] = useState('');
    const [amount, setAmount] = useState('');

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

    return (
        <div className='SalesInvoiceWrapper'>

            <div className='SalesInvHead'>Item List</div>

            <div className='ItemsListBody'>

                <div className='ItemListTop'>
                    <div className='ItemListMainTable'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Description</th>
                                    <th>Part Number</th>
                                    <th>Stock</th>
                                    <th>DO_Pend</th>
                                    <th>ORD_ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='table-primary'>
                                    <th>001</th>
                                    <td>SERVICE</td>
                                    <td>0</td>
                                    <td>1</td>
                                    <td>3</td>
                                    <td>4</td>
                                </tr>
                                <tr className='table-primary'>
                                    <th>001</th>
                                    <td>SERVICE</td>
                                    <td>0</td>
                                    <td>1</td>
                                    <td>3</td>
                                    <td>4</td>
                                </tr>
                                <tr className='table-primary'>
                                    <th>001</th>
                                    <td>SERVICE</td>
                                    <td>0</td>
                                    <td>1</td>
                                    <td>3</td>
                                    <td>4</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <div className='SIAddItemCont'>
                        <p class="d-inline-flex gap-1">
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                Add Items
                            </button>
                        </p>
                        <div class="collapse" id="collapseExample">
                            <div class="card card-body">
                                <div className='AddItemCont'>
                                    <div>
                                        <input type="text" className="form-control" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder='code' />
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description' />
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} placeholder='location' />
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder='quantity' />
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='unit' />
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" value={discP} onChange={(e) => setDiscP(e.target.value)} placeholder='Disc%' />
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='amount' />
                                    </div>
                                </div>
                                <div className='AddItemBtn'>
                                    <button className='btn btn-success' onClick={addItem}>Add</button>
                                </div>
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
                                                        <td>{item.itemName}</td>
                                                        <td>{item.description}</td>
                                                        <td>{item.location}</td>
                                                        <td>{item.quantity}</td>
                                                        <td>{item.price}</td>
                                                        <td>{item.discP}</td>
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
                    </div> */}
                </div>

                <div className='ItemListChecks'>
                    <div class="form-check customCheck">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="Pend.SO" />
                        <label class="form-check-label" for="Pend.SO">
                            (F1) Pend.SO
                        </label>
                    </div>
                    <div class="form-check customCheck">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="Pend.DO" />
                        <label class="form-check-label" for="Pend.DO">
                            (F2) Pend.DO
                        </label>
                    </div>
                    <div class="form-check customCheck">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="Pend.PO" />
                        <label class="form-check-label" for="Pend.PO">
                            (F10) Pend.PO
                        </label>
                    </div>
                    <div class="form-check customCheck">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="Sales" />
                        <label class="form-check-label" for="Sales">
                            (F7) Sales
                        </label>
                    </div>
                    <div class="form-check customCheck">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="Sman" />
                        <label class="form-check-label" for="Sman">
                            (F4) Sman Orders
                        </label>
                    </div>
                    <div class="form-check customCheck">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="Purchase" />
                        <label class="form-check-label" for="Purchase">
                            (F8) Purchase
                        </label>
                    </div>
                    <div class="form-check customCheck">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="Transactions" />
                        <label class="form-check-label" for="Transactions">
                            (F9) All Transactions
                        </label>
                    </div>
                </div>

                <div className='ItemList3Cols'>

                    <div className='LocationDetailTable'>
                        <table class="table">
                            <thead>
                                <tr colspan={4}>
                                    <th colSpan={4}>LOCATION DETAILS</th>
                                </tr>
                            </thead>
                            <thead>
                                <tr>
                                    <th>LOC</th>
                                    <th>LOCATION & BIN</th>
                                    <th>QTY</th>
                                    <th>LPCOST</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='table-primary'>
                                    <th>A</th>
                                    <td>SERV</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className='table-primary'>
                                    <th>B</th>
                                    <td>MEP</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className='table-primary'>
                                    <th>C</th>
                                    <td>MFG</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className='table-primary'>
                                    <th>D</th>
                                    <td>RNT</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className='table-primary'>
                                    <th>D</th>
                                    <td>TRD</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='MoreCodesTable'>
                        <table class="table">
                            <thead>
                                <tr colspan={4}>
                                    <th colSpan={4}>MORE CODES</th>
                                </tr>
                            </thead>
                            <thead>
                                <tr>
                                    <th>SUBSTITUTES</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='table-primary'>
                                    <td></td>
                                </tr>
                                <tr className='table-primary'>
                                    <td></td>
                                </tr>
                                <tr className='table-primary'>
                                    <td></td>
                                </tr>
                                <tr className='table-primary'>
                                    <td></td>
                                </tr>
                                <tr className='table-primary'>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='SearchItemCont'>

                        <div className='SearchItemTopCont'>
                            <div className='SearchItemLeftTick'>
                                <div class="form-check customCheck">
                                    <input class="form-check-input" type="checkbox" value="" id="Search" />
                                    <label class="form-check-label" for="Search">
                                        $Search
                                    </label>
                                </div>
                                <div class="form-check customCheck">
                                    <input class="form-check-input" type="checkbox" value="" id="Substitute" />
                                    <label class="form-check-label" for="Substitute">
                                        Substitute
                                    </label>
                                </div>
                                <div class="form-check customCheck">
                                    <input class="form-check-input" type="checkbox" value="" id="Universal" />
                                    <label class="form-check-label" for="Universal">
                                        Universal
                                    </label>
                                </div>
                            </div>

                            <div className='SearchItemSearch'>
                                <div className='SearchCheck'>
                                    <div class="form-check customCheck" style={{ height: "20px" }}>
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Code
                                        </label>
                                    </div>
                                    <div class="form-check customCheck" style={{ height: "20px" }}>
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Description
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <input type="text" class="form-control customInp mt-2" placeholder="SearchItem" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>

                        <div className='SearchItemBottomCont'>
                            <div className='StopWatch'>
                                <div><GiStopwatch /></div>
                                <div>Item Count 652</div>
                            </div>
                            <div className='Refresh'>
                                <LuRefreshCw />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default ItemList