import React, { useEffect, useState } from 'react'
import './LedgerList.css'
import { LuRefreshCcw } from "react-icons/lu";


const LedgerList = () => {


    const [searchText, setSearchText] = useState('')

    const [displayData, setDisplayData] = useState([])

    const tableData = [
        {
            "ACCOUNT": "123456789",
            "DESCRIPTION": "Savings Account",
            "BALANCE": 5000.00
        },
        {
            "ACCOUNT": "987654321",
            "DESCRIPTION": "Checking Account",
            "BALANCE": 3500.00
        },
        {
            "ACCOUNT": "456789123",
            "DESCRIPTION": "Investment Account",
            "BALANCE": 10000.00
        },
        {
            "ACCOUNT": "654321987",
            "DESCRIPTION": "Credit Card Account",
            "BALANCE": -2000.00
        },
        {
            "ACCOUNT": "789123456",
            "DESCRIPTION": "Business Account",
            "BALANCE": 7500.00
        },
        {
            "ACCOUNT": "321987654",
            "DESCRIPTION": "Mortgage Account",
            "BALANCE": -150000.00
        },
        {
            "ACCOUNT": "951753852",
            "DESCRIPTION": "IRA Account",
            "BALANCE": 20000.00
        },
        {
            "ACCOUNT": "147258369",
            "DESCRIPTION": "College Savings Account",
            "BALANCE": 8000.00
        },
        {
            "ACCOUNT": "369258147",
            "DESCRIPTION": "Health Savings Account",
            "BALANCE": 3000.00
        },
        {
            "ACCOUNT": "852963741",
            "DESCRIPTION": "Auto Loan Account",
            "BALANCE": -15000.00
        }
    ]

    // console.log(searchText)

    useEffect(() => {
        if (searchText !== '') {
            const filteredData = tableData.filter(item => {
                return (
                    item.ACCOUNT.toLowerCase().includes(searchText.toLowerCase()) ||
                    item.DESCRIPTION.toLowerCase().includes(searchText.toLowerCase()) ||
                    item.BALANCE.toString().includes(searchText)
                );
            });

            setDisplayData(filteredData)

        } else if (searchText === '') {
            setDisplayData(tableData)
        }
    }, [searchText]);

    useEffect(() => {
        setDisplayData(tableData)
    }, [])

    console.log(displayData)


    return (
        <div className='SalesInvoiceWrapper'>

            <div className='SalesInvHead'>LEDGER LIST</div>

            <div className='SalesInvoiceBody'>

                <div className='LListLeft mt-2'>

                    <div className='LListOptionBox'>
                        <div class="form-check customCheck mt-2">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="All" />
                            <label class="form-check-label" for="All">
                                All
                            </label>
                        </div>
                        <div class="form-check customCheck mt-2">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="Cash" />
                            <label class="form-check-label" for="Cash" >
                                Cash
                            </label>
                        </div>
                        <div class="form-check customCheck mt-2">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="Bank" />
                            <label class="form-check-label" for="Bank">
                                Bank
                            </label>
                        </div>
                        <div class="form-check customCheck mt-2">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="PDC" />
                            <label class="form-check-label" for="PDC" >
                                PDC
                            </label>
                        </div>
                        <div class="form-check customCheck mt-2">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="Customers" />
                            <label class="form-check-label" for="Customers">
                                Customers
                            </label>
                        </div>
                        <div class="form-check customCheck mt-2">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="Suppliers" />
                            <label class="form-check-label" for="Suppliers" >
                                Suppliers
                            </label>
                        </div>
                        <div class="form-check customCheck mt-2">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="Assets" />
                            <label class="form-check-label" for="Assets">
                                Assets
                            </label>
                        </div>
                        <div class="form-check customCheck mt-2">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="Liabilities" />
                            <label class="form-check-label" for="Liabilities" >
                                Liabilities
                            </label>
                        </div>
                        <div class="form-check customCheck mt-2">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="Income" />
                            <label class="form-check-label" for="Income">
                                Income
                            </label>
                        </div>
                        <div class="form-check customCheck mt-2">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="Expenses" />
                            <label class="form-check-label" for="Expenses" >
                                Expenses
                            </label>
                        </div>
                        <div class="form-check customCheck mt-2">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="INExpenses" />
                            <label class="form-check-label" for="INExpenses">
                                INExpenses
                            </label>
                        </div>
                        <div class="form-check customCheck mt-2">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="InterCompany" />
                            <label class="form-check-label" for="InterCompany" >
                                InterCompany
                            </label>
                        </div>
                    </div>
                </div>

                <div className='LListRight mt-2'>

                    <div className='LListSearchBox'>
                        <div className='LLSearchCont'>
                            <div class="form-check LLSrch customCheck">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    $Search
                                </label>
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control customInp" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                            </div>
                            <div className='LLSearchRefresh'>
                                <LuRefreshCcw />
                            </div>
                        </div>
                    </div>

                    <div className='LListTable'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>ACCOUNT</th>
                                    <th>DESCRIPTION</th>
                                    <th>BALANCE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    displayData?.map((item, id) => (
                                        <tr id={id} className='table-primary'>
                                            <td>{item.ACCOUNT}</td>
                                            <td>{item.DESCRIPTION}</td>
                                            <td>{item.BALANCE}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default LedgerList