import React, { useEffect, useState, useRef } from 'react'
import { FaSortDown } from "react-icons/fa";
import './StateOut.css'
import { FaFilter } from "react-icons/fa";
import { RotatingLines } from 'react-loader-spinner'
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import NavBarMob from '../NavBarMob/NavBarMob';
import { style } from '@mui/system';
import SidePanel from '../SidePanel/SidePanel';



const StatementReport2 = () => {

    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [allData, setAllData] = useState([])
    const [groupSums, setGroupSums] = useState([]);
    const [displayData, setDisplayData] = useState([])
    const [salesMan, setSalesMan] = useState('all')
    const [deptData, setDeptData] = useState('all')
    const [expandAll, setExpandAll] = useState(false);
    const [expandedRows, setExpandedRows] = useState([]);
    const [warningMessage, setWarningMsg] = useState("Enter Start Date and End Date")
    const [hideonIpad, setHideonIpad] = useState(false)
    const [hideonMob, setHideonMob] = useState(false)

    const [totalDebit, setTotalDebit] = useState(0);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalBalance, setTotalBalance] = useState(0);

    const [showDrop, setShowDrop] = useState(false)

    const fromDateRef = useRef(null);
    const toDateRef = useRef(null);

    const toOptionRef = useRef(null);


    const [branchFilterValue, setBranchFilterValue] = useState('All')

    const [clickedIndex, setClickedIndex] = useState(null);

    const [searchTerm, setSearchTerm] = useState('')
    const [searchData, setSearchData] = useState('')

    const [selecedtDrop, setSelectedDrop] = useState('')

    const selectedCompanyString = localStorage.getItem("selectedCompany");

    const selectedCompany = JSON.parse(selectedCompanyString);

    const cmpcode = selectedCompany.cmpcode;
    const publick = selectedCompany.publick;
    const privatek = selectedCompany.privatek;

    const showLeftSidePanelPop = true


    const handleRowClick2 = (index) => {
        setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const getDeptData = (targetDeptNo) => {
        setDisplayData([])
        setBranchFilterValue(targetDeptNo)
        if (targetDeptNo === 'all') {
            // fromDateRef.current.value = formattedDate;
            // toDateRef.current.value = formattedDate;
            const fetchData = async () => {
                try {

                    setWarningMsg("Resource Loading, Please Wait...")

                    // const result = await fetch(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport/DoReport/DOPending/Item?dateStart=${formattedDate}&dateEnd=${formattedDate}`)
                    // const result = await fetch(`https://api-eproc.premierauto.ae/api/InvoiceSearch`)
                    const result = await fetch(`https://cubixweberp.com:199/api/SalesReport/SalesAnalysis?cmpcode=${cmpcode}&guid=${privatek}&mod=SALESLIST&deptno=NA&dfrom=${fromDate}&dto=${toDate}&salesperson=NA&group=NA&sgroup=NA&categ=NA&scateg=NA&area=NA&country=NA`)
                    const data = await result.json()
                    data && setAllData(data)
                } catch (error) {
                    console.log(error)
                    setWarningMsg("Some Error Occured in the backend, Please try again later")
                }
            }

            fetchData();
        } else {
            const filteredData = allData.filter(item => item.DEPTNO == targetDeptNo);
            setDisplayData(filteredData)
        }
    }



    const handleGrpSearch = (e) => {
        e.preventDefault()
        if (!fromDate || !toDate) {
            alert("select a start and end Date")
        } else {
            setWarningMsg("Resource Loading, Please Wait...")
            searchGrp()
        }
    }

    const handleReset = async (e) => {
        setDisplayData([])
        setWarningMsg("Resource Loading, Please Wait...")
        e.preventDefault()
        fromDateRef.current.value = formattedDate;
        toDateRef.current.value = formattedDate;
        setFromDate(formattedDate)
        setToDate(formattedDate)

        setBranchFilterValue('All')
        try {
            // const result = await fetch(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport/DoReport/DOPending/Item?dateStart=${formattedDate}&dateEnd=${formattedDate}`)
            // const result = await fetch(`https://api-eproc.premierauto.ae/api/InvoiceSearch`)
            const result = await fetch(`https://cubixweberp.com:199/api/SalesReport/SalesAnalysis?cmpcode=${cmpcode}&guid=${privatek}&mod=SALESLIST&deptno=NA&dfrom=${formattedDate}&dto=${formattedDate}&salesperson=NA&group=NA&sgroup=NA&categ=NA&scateg=NA&area=NA&country=NA`)
            const data = await result.json()
            data && setAllData(data)
            toOptionRef.current.value = "all"
        } catch (error) {
            console.log(error)
            setWarningMsg("Some Error Occured in the backend, Please try again later")
        }

    }

    const searchGrp = async () => {
        setDisplayData([])
        setWarningMsg("Resource Loading, Please Wait...")
        try {
            // const result = await fetch(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport/DoReport/DOPending/Item?dateStart=${fromDate}&dateEnd=${toDate}`)
            // const result = await fetch(`https://api-eproc.premierauto.ae/api/InvoiceSearch`)
            const result = await fetch(`https://cubixweberp.com:199/api/SalesReport/SalesAnalysis?cmpcode=${cmpcode}&guid=${privatek}&mod=SALESLIST&deptno=NA&dfrom=${fromDate}&dto=${toDate}&salesperson=NA&group=NA&sgroup=NA&categ=NA&scateg=NA&area=NA&country=NA`)
            const data = await result.json()
            if (data) {
                setAllData(data);
                setDisplayData(data);
            }
            else if (!data || data.length === 0) {
                setDisplayData(['no data available']); // Set displayData as an empty array if there's no data
                setAllData([])
            }
        } catch (error) {
            alert(error)
            console.log(error)
            setWarningMsg("Some Error Occured in the backend, Please try again later")
        }
    }

    useEffect(() => {
        // console.log(searchTerm)
        const fetchData = async () => {
            if (searchTerm !== '') {
                try {
                    const response = await fetch(`https://cubixweberp.com:199/api/AccountSearch/MasterSearch?cmpcode=${cmpcode}&guid=${privatek}&mod=ACCMAST_SER&deptno=NA&searchKey=${searchTerm}`);
                    const data = await response.json();
                    setSearchData(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            } else {
                setSearchData(null)
            }
        };

        fetchData();

        // console.log(searchData, 'serachData')
        // console.log(searchTerm, 'searchTerm')
    }, [searchTerm]);

    // useEffect(() => {
    //     if (allData.length > 0) {
    //         setDisplayData(allData)
    //     }
    // }, [allData])

    useEffect(() => {
        if (window.innerWidth <= 1124 || window.innerWidth <= 768) {
            setHideonIpad(true)
        }
        if (window.innerWidth <= 768) {
            setHideonMob(true)
        }
    }, [hideonIpad, hideonMob])

    const handleRowClick = (index) => {
        setExpandedRows(prevState => {
            if (prevState.includes(index)) {
                return prevState.filter(item => item !== index);
            } else {
                return [...prevState, index];
            }
        });
    };

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    useEffect(() => {
        // fromDateRef.current.value = formattedDate;
        // toDateRef.current.value = formattedDate;


        setFromDate(formattedDate)
        setToDate(formattedDate)
        const fetchData = async () => {
            if (selecedtDrop !== '') {
                try {

                    setWarningMsg("Resource Loading, Please Wait...")

                    // const result = await fetch(`https://cubixweberp.com:199/api/SalesReport/SalesAnalysis?cmpcode=${cmpcode}&guid=${privatek}&mod=SALESLIST&deptno=NA&dfrom=${formattedDate}&dto=${formattedDate}&salesperson=NA&group=NA&sgroup=NA&categ=NA&scateg=NA&area=NA&country=NA`)
                    const result = await fetch(`https://cubixweberp.com:199/api/Statement/Statement?cmpcode=${cmpcode}&guid=${privatek}&mod=STMT_ACC1&deptno=NA&dfrom=2-FEB-2024&dto=2-FEB-2024&accounts=${selecedtDrop}&salesperson=NA`)
                    const data = await result.json()
                    data && setAllData(data)
                    // Calculate running balance
                    let runningBalance = 0;
                    let debitTotal = 0;
                    let creditTotal = 0;

                    const newData = data.map(entry => {
                        debitTotal += entry.DEBIT;
                        creditTotal += entry.CREDIT;
                        runningBalance = runningBalance + entry.DEBIT - entry.CREDIT;

                        return { ...entry, BALANCE: runningBalance };
                    });

                    setDisplayData(newData);
                    setTotalDebit(debitTotal);
                    setTotalCredit(creditTotal);
                    setTotalBalance(debitTotal - creditTotal);

                    setShowLoader(false)
                } catch (error) {
                    console.log(error)
                    setWarningMsg("Some Error Occured in the backend, Please try again later")
                }
            }
        }

        fetchData();
    }, [selecedtDrop])

    const [showLoader, setShowLoader] = useState(false)
    const [itemUiData, setItemUiData] = useState('')

    const selectAccount = (item) => {
        setSelectedDrop(item.Account)
        setSearchData('')
        setSearchTerm('')
        setShowLoader(true)
        setDisplayData([])
        setItemUiData(item)
    }

    // console.log(itemUiData)

    // console.log(selecedtDrop)

    // const uniqueDeptNo = [...new Set(allData.map(item => item.DEPTNO))];

    // console.log(displayData, 'displayData


    return (
        <>
            {/* <NavBarMob showLeftSidePanelPop={showLeftSidePanelPop} /> */}
            <NavBarMob />

            <div className='OverallWrapper'>
                <div>
                    <SidePanel />
                </div>
                <div className='DelOContainer itemWiseSalesGrp' style={{ paddingTop: '12px' }}>
                    {/* date select */}
                    <div className='grpDateCont'>
                        <div className='grpSdText' style={{ justifyContent: "space-between", position: 'relative' }}>
                            <span><>Statement Account Report</></span>
                            <div>
                                <input class="form-control" type="text" placeholder="Search Customer" value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)} />
                            </div>
                        </div>

                        {itemUiData !== '' && (
                            <div style={{ backgroundColor: 'white', padding: "4px 8px", borderRadius: "2px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                                <div>
                                    <p>Account Name: {itemUiData['Account Name']}</p>
                                    <p>Account Number: {itemUiData.Account}</p>
                                </div>
                            </div>
                        )}


                        {searchTerm !== '' && searchData && (
                            <div style={{ position: 'absolute', top: "140px", right: "25px", maxHeight: '380px', overflowY: 'auto' }}>
                                <ul style={{ listStyleType: 'none', padding: '6px 12px', backgroundColor: "white", borderRadius: "4px" }}>
                                    {searchData.map((item, index) => (
                                        <li key={index} style={{ borderBottom: '1px solid #ccc', padding: '8px 0', cursor: 'pointer' }}
                                            onClick={() => selectAccount(item)}
                                        >
                                            {`${item['Account Name']} -- ${item.Account}`}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className='grpDateInp'>
                            <div className='grpInpLeft'>
                                <div className='grpInp'>
                                    <label htmlFor="fromDate">Enter from date:</label>
                                    <input ref={fromDateRef} onChange={(e) => setFromDate(e.target.value)} type="date" id='fromDate' />
                                </div>
                                <div className='grpInp'>
                                    <label htmlFor="toDate">Enter to date:</label>
                                    <input ref={toDateRef} onChange={(e) => setToDate(e.target.value)} type="date" id='toDate' />
                                </div>
                            </div>
                            <div className='grpInpRight'>
                                <button onClick={handleGrpSearch} className='grpButton'>Filter</button>
                                <button onClick={handleReset} className='grpButtonR'>Reset</button>
                            </div>
                        </div>
                    </div>

                    {/* filter */}
                    {/* <div className='filter'>
                    <div className='grpfilterCont'>
                        <div><FaFilter /></div>
                        <label className='labeStyle' htmlFor="brancSelect">Select an Account:</label>
                        <select ref={toOptionRef} className='selectStyle' onChange={(e) => getDeptData(e.target.value)} name="branch" id="brancSelect">
                            <option value="all" defaultChecked>ALL</option>
                            {uniqueDeptNo && uniqueDeptNo.map((i) => (
                                <>
                                    <option value={i}>{i}</option>
                                </>
                            ))}
                        </select>
                    </div>
                </div> */}

                    {/* table */}


                    <div div className='grptableCont' >
                        <div className='grpTableCover itemWiseTableCover'>
                            <table border="1" className='table table-striped table-responsive'>
                                <thead>
                                    <tr onClick={handleRowClick}>
                                        <th style={{ textAlign: 'left' }}>DATE</th>
                                        {/* <th className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>INV_DATE</th>
                                        <th className={hideonMob ? 'hidden lAlign' : 'expandable lAlign'}>CUSTOMER</th>
                                        <th className={hideonIpad ? 'hidden rAlign' : 'expandable rAlign'}>LPO</th>
                                        <th className={hideonIpad ? 'hidden rAlign' : 'expandable rAlign'}>SO NO</th>
                                        <th className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>SALES MAN</th>
                                        <th className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>AMOUNT</th>
                                        <th className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>CASHCRED</th>
                                        <th className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>ACCOUNT</th>
                                        <th className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>VATAMT</th> */}

                                        <th className='rAlign'>TYPE</th>
                                        <th className='lAlign'>REF</th>
                                        <th className='rAlign'>DESCRIPTION</th>
                                        <th className='rAlign'>DEBIT</th>
                                        <th className='rAlign'>CREDIT</th>
                                        <th className='rAlign'>BALANCE</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        displayData && displayData.map((g, i) => (
                                            <React.Fragment key={i}>
                                                <tr >
                                                    <td style={{ cursor: 'pointer', textAlign: 'left' }}>
                                                        {g["DATE"] ? new Date(g["DATE"] + 'Z').toISOString().split('T')[0] :
                                                            "Nil"}
                                                        {/* <FaSortDown className='newDrop' /> */}
                                                    </td>
                                                    <td className='lAlign'>
                                                        {g.TYPE || 'Nil'}
                                                    </td>
                                                    <td className='lAlign'>
                                                        {g.REF || 'Nil'}
                                                    </td>
                                                    <td className='lAlign'>
                                                        {g.DESCRIPTION || 'Nil'}
                                                    </td>
                                                    <td className='rAlign'>
                                                        {g["DEBIT"] === 0 ? '0.00' : (g["DEBIT"] || "Nil").toFixed(2)}
                                                    </td>
                                                    <td className='rAlign'>
                                                        {g["CREDIT"] === 0 ? '0.00' : (g["CREDIT"] || "Nil").toFixed(2)}
                                                    </td>
                                                    <td className='rAlign'>
                                                        {g["BALANCE"] === 0 ? '0.00' : (g["BALANCE"] || "Nil").toFixed(2)}
                                                    </td>
                                                </tr>

                                                {/* {clickedIndex === i && (
                                                   

                                                    <td colspan="12" style={{ backgroundColor: "white" }}>
                                                        <div style={{ display: "flex", justifyContent: 'space-between', backgroundColor: "aliceblue" }}>
                                                            <div style={{ width: '30%', backgroundColor: 'white', padding: '12px 8px', border: '1px solid grey' }}>
                                                                <div style={{ fontSize: '12px' }}>COMMISSION</div>
                                                                <div style={{ fontSize: '16px' }}>{g['COMMISSION']}</div>
                                                            </div>
                                                            <div style={{ width: '30%', backgroundColor: 'white', padding: '12px 8px', border: '1px solid grey' }}>
                                                                <div style={{ fontSize: '12px' }}>AMOUNT_EXCLVAT</div>
                                                                <div style={{ fontSize: '16px' }}>{g['AMOUNT_EXCLVAT']}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                
                                                )} */}


                                                {/* {expandedRows.includes(i) && (
                                                    <>
                                                        <tr data-testid={`expanded-row-${i}`}>
                                                            <th className='expandable'>DATE</th>
                                                            <td className='expandable'>{g["DATE"] ? g["DATE"] : "Nil"}</td>
                                                        </tr>
                                                    </>
                                                )} */}
                                            </React.Fragment>
                                        ))
                                    }
                                    {
                                        displayData.length === 0 &&
                                        (<tr >
                                            <td colSpan={7} style={{ color: "red" }}>Search Customer</td>
                                        </tr>)

                                    }
                                    {
                                        showLoader && (
                                            <RotatingLines
                                                visible={true}
                                                height="96"
                                                width="96"
                                                color="grey"
                                                strokeWidth="5"
                                                animationDuration="0.75"
                                                ariaLabel="rotating-lines-loading"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                            />
                                        )
                                    }
                                </tbody>
                                <tfoot style={{ backgroundColor: 'black', color: 'white' }}>
                                    <tr style={{ backgroundColor: 'black', color: 'white' }}>
                                        <td colSpan={4} style={{ textAlign: 'left', backgroundColor: 'black', color: 'white', fontSize: "16px" }}>Total Amount</td>
                                        <td style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{totalDebit.toFixed(2)}</td>
                                        <td style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{totalCredit.toFixed(2)}</td>
                                        <td style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{totalBalance.toFixed(2)}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div >

                </div >
            </div>
        </>
    )
}

export default StatementReport2
