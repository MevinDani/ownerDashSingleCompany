import React, { useEffect, useState } from 'react'
import './Payables.css'
import minus from '../../images/sign1.svg'
import plus from '../../images/sign2.svg'
import equals from '../../images/sign3.svg'

const Payables = () => {

    const [debtorsData, setDebtorsData] = useState([]);
    const [creditorsData, setCreditorsData] = useState([]);
    const [credTotal, setCredTotal] = useState(null)
    const [debTotal, setDebTotal] = useState(null)
    const [cashBalanceData, setCashBalanceData] = useState(null)
    const [cashBalance, setCashBalance] = useState(null)
    const [total, setTotal] = useState(null)

    const selectedCompanyString = localStorage.getItem("selectedCompany");

    const selectedCompany = JSON.parse(selectedCompanyString);

    const cmpcode = selectedCompany.cmpcode;
    const publick = selectedCompany.publick;
    const privatek = selectedCompany.privatek;

    useEffect(() => {
        const fetchDebtorsData = async () => {
            try {
                const response = await fetch(`https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=DEBTORS_AGEING&s1=%27%27&s2=%27%27&s3=%27%27&i1=0&i2=0&dt1=11-DEC-2023&dt2=11-DEC-2023`);
                const data = await response.json();
                setDebtorsData(data);
                setDebTotal(data[0]?.AMOUNT)
            } catch (error) {
                console.error('Error fetching debtors data:', error);
            }
        };

        const fetchCreditorsData = async () => {
            try {
                const response = await fetch(`https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=CREDITORS_AGEING&s1=%27%27&s2=%27%27&s3=%27%27&i1=0&i2=0&dt1=11-DEC-2023&dt2=11-DEC-2023`);
                const data = await response.json();
                setCreditorsData(data);
                setCredTotal(Math.abs(data[0]?.AMOUNT));

            } catch (error) {
                console.error('Error fetching creditors data:', error);
            }
        };

        fetchDebtorsData();
        fetchCreditorsData();
    }, []);

    useEffect(() => {
        const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=BANKBALANCE&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=1-1-2022&dt2=1-1-2022`

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCashBalanceData(data);
                calculateTotalCash(data);
            })
            .catch((error) => console.error("Error:", error));
    }, [])

    const calculateTotalCash = (data) => {
        if (data) {
            const totalCash = data.reduce((sum, item) => sum + item.BANK, 0);
            const formattedTotalCash = totalCash.toFixed(2);
            setCashBalance(formattedTotalCash);
        }
    };

    useEffect(() => {
        const calculateTotal = (credTotal, debTotal, cashBalance) => {
            // Parse the string values to numbers using parseFloat
            const numericCred = parseFloat(credTotal) || 0;
            const numericDeb = parseFloat(debTotal) || 0;
            const numericCashBalance = parseFloat(cashBalance) || 0;

            // Perform the calculations
            const total = numericCred - numericDeb + numericCashBalance;

            // Format the total to fixed 2 decimal places
            const formattedTotal = total.toFixed(2);

            // Set the state with the calculated total
            setTotal(formattedTotal);
        };

        calculateTotal(credTotal, debTotal, cashBalance)
    }, [credTotal, debTotal, cashBalance])


    return (
        <div className='CashedWrapper'>
            <div className='CashedContWrapper'>
                <div className='CashedCont'>
                    <div id='CashDivs' className='PayablesCont'>
                        <h3>Payables</h3>
                        <div className='AmountBox'>{credTotal && credTotal}</div>
                    </div>
                    <div id='CashDivs' className='MinusCont'>
                        <span className='Minus'>
                            <img src={minus} alt="" />
                        </span>
                    </div>
                    <div id='CashDivs' className='ReceivablesCont'>
                        {/* <h3>RECEIVABLES</h3> */}
                        <h3>Receivables</h3>
                        <div className='AmountBox'>{debTotal && debTotal}</div>
                    </div>
                    <div id='CashDivs' className='PlusCont'>
                        <span className='Plus'>
                            <img src={plus} alt="" />
                        </span>
                    </div>
                    <div id='CashDivs' className='CashAndBank'>
                        {/* <h3>CASH & BANK</h3> */}
                        <h3>Cash & Bank</h3>
                        <div className='AmountBox'>{cashBalance && cashBalance}</div>
                    </div>
                    <div id='CashDivs' className='EqualsCont'>
                        <span className='Equals'>
                            <img src={equals} alt="" />
                        </span>
                    </div>
                    <div id='CashDivs' className='Balance'>
                        {/* <h3>BALANCE</h3> */}
                        <h3>Balance</h3>
                        <div className='AmountBox'>{total && total}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payables