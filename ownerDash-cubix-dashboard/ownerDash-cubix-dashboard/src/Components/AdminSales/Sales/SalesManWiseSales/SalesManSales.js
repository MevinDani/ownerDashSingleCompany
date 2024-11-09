import React, { useEffect, useState, useRef } from 'react'
import { FaSortDown } from "react-icons/fa";
import './SalesManSales.css'
import { FaFilter } from "react-icons/fa";
import { RotatingLines } from 'react-loader-spinner'
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";



const SalesManSales = () => {

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

    const [showDrop, setShowDrop] = useState(false)

    const fromDateRef = useRef(null);
    const toDateRef = useRef(null);

    const toOptionRef = useRef(null);


    const [branchFilterValue, setBranchFilterValue] = useState('All')

    const [clickedIndex, setClickedIndex] = useState(null);

    const handleRowClick2 = (index) => {
        setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const getDeptData = (targetDeptNo) => {
        setBranchFilterValue(targetDeptNo)
        if (targetDeptNo === 'all') {
            fromDateRef.current.value = formattedDate;
            toDateRef.current.value = formattedDate;
            const fetchData = async () => {
                try {

                    setWarningMsg("Resource Loading, Please Wait...")

                    // const result = await fetch(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport/DoReport/DOPending/Item?dateStart=${formattedDate}&dateEnd=${formattedDate}`)
                    const result = await fetch(`https://api-eproc.premierauto.ae/api/SalesAnalysis/Sales/Salesman?dateStart=${formattedDate}&dateEnd=${formattedDate}`)
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
        setBranchFilterValue('All')
        try {
            // const result = await fetch(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport/DoReport/DOPending/Item?dateStart=${formattedDate}&dateEnd=${formattedDate}`)
            const result = await fetch(`https://api-eproc.premierauto.ae/api/SalesAnalysis/Sales/Salesman?dateStart=${formattedDate}&dateEnd=${formattedDate}`)
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
            const result = await fetch(`https://api-eproc.premierauto.ae/api/SalesAnalysis/Sales/Salesman?dateStart=${fromDate}&dateEnd=${toDate}`)
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
        if (allData.length > 0) {
            setDisplayData(allData)
        }
    }, [allData])

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
        fromDateRef.current.value = formattedDate;
        toDateRef.current.value = formattedDate;


        setFromDate(formattedDate)
        setToDate(formattedDate)
        const fetchData = async () => {
            try {

                setWarningMsg("Resource Loading, Please Wait...")

                // const result = await fetch(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport/DoReport/DOPending/Item?dateStart=${formattedDate}&dateEnd=${formattedDate}`)
                const result = await fetch(`https://api-eproc.premierauto.ae/api/SalesAnalysis/Sales/Salesman?dateStart=${formattedDate}&dateEnd=${formattedDate}`)
                const data = await result.json()
                data && setAllData(data)
            } catch (error) {
                console.log(error)
                setWarningMsg("Some Error Occured in the backend, Please try again later")
            }
        }

        fetchData();
    }, [])

    const uniqueDeptNo = [...new Set(allData.map(item => item.DEPTNO))];

    console.log(displayData, 'displayData')

    return (
        <div className='DelOContainer'>
            {/* date select */}
            <div className='grpDateCont'>
                <div className='grpSdText'><span><>SalesmanWise Sales</></span></div>
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
                {/* <div className='DelODateInp'>
                    <div className='DelOInp'>
                        <label htmlFor="fromDate">From:</label>
                        <input ref={fromDateRef} onChange={(e) => setFromDate(e.target.value)} type="date" id='fromDate' />
                    </div>
                    <div className='DelOInp'>
                        <label htmlFor="toDate">To:</label>
                        <input ref={toDateRef} onChange={(e) => setToDate(e.target.value)} type="date" id='toDate' />
                    </div>
                    <button onClick={handleGrpSearch} className='grpButton'>Go</button>
                </div> */}
            </div>

            {/* filter */}
            {/* <div className='filter'>
                <div className='grpfilterCont'>
                    <div><FaFilter /></div>
                    <label className='labeStyle' htmlFor="brancSelect">Filter By Branch:</label>
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

            {displayData.length !== 0 && displayData[0] !== 'no data available' ? (
                <div div className='grptableCont' >
                    <div className='grpTableCover'>
                        <table border="1" className='table table-striped table-responsive'>
                            <thead>
                                <tr onClick={handleRowClick}>
                                    <th style={{ textAlign: 'left' }}>SALESPERSON</th>
                                    <th className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>CASH SALES</th>
                                    <th className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>NETCASH SALES</th>
                                    <th className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>NETCASH SALESRETURN</th>
                                    <th className={hideonIpad ? 'hidden rAlign' : 'expandable rAlign'}>CASHSALES%</th>
                                    <th className={hideonIpad ? 'hidden rAlign' : 'expandable rAlign'}>CREDIT SALES</th>
                                    <th className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>NETCREDIT SALES</th>
                                    <th className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>NETCREDIT SALESRETURN</th>
                                    <th className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>CREDITSALES%</th>
                                    <th className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>SALES RETURN</th>
                                    <th className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>NETSALES RETURN</th>
                                    {/* <th  className={hideonMob ? 'hidden' : 'expandable'}>DONO</th> */}
                                    <th>NET SALES EXCLVAT</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    displayData && displayData.map((g, i) => (
                                        <React.Fragment key={i}>
                                            <tr onClick={window.innerWidth <= 1124 ? () => handleRowClick(i) : null} key={i}>
                                                <td data-testid="dropdown-clicker" className='DloplusTd' onClick={() => handleRowClick2(i)} style={{ cursor: 'pointer', textAlign: 'left' }}>
                                                    {clickedIndex === i ? (
                                                        <FaMinusCircle />
                                                    ) : (
                                                        <FaPlusCircle />
                                                    )}
                                                    {'  '}
                                                    {g.SALESPERSON || 'Unknown'}
                                                    {/* <FaSortDown className='newDrop' /> */}
                                                </td>
                                                <td className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>
                                                    {g["CASH SALES"] || 'Nil'}
                                                </td>
                                                <td className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>{g["NETCASH SALES"] === 0 ? '0' : g["NETCASH SALES"] || "Nil"}</td>
                                                <td className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>{g["NETCASH SALESRETURN"] === 0 ? '0' : g["NETCASH SALESRETURN"] || "Nil"}</td>
                                                <td className={hideonIpad ? 'hidden rAlign' : 'expandable rAlign'}>{g["CASHSALES%"] === 0 ? '0' : g["CASHSALES%"] || "Nil"}</td>
                                                <td className={hideonIpad ? 'hidden rAlign' : 'expandable rAlign'}>{g["CREDIT SALES"] === 0 ? '0' : g["CREDIT SALES"] || "Nil"}</td>
                                                <td className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>{g["NETCREDIT SALES"] === 0 ? '0' : g["NETCREDIT SALES"] || "Nil"}</td>
                                                <td className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>{g["NETCREDIT SALESRETURN"] === 0 ? '0' : g["NETCREDIT SALESRETURN"] || "Nil"}</td>
                                                <td className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>{g["NETCREDIT SALESRETURN"] === 0 ? '0' : g["NETCREDIT SALESRETURN"] || "Nil"}</td>
                                                <td className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>{g["SALES RETURN"] === 0 ? '0' : g["SALES RETURN"] || "Nil"}</td>
                                                <td className={hideonMob ? 'hidden rAlign' : 'expandable rAlign'}>{g["NETSALES RETURN"] === 0 ? '0' : g["NETSALES RETURN"] || "Nil"}</td>
                                                {/* <td  className={hideonMob ? 'hidden' : 'expandable'}>{g["UNIT PRICE"] ? g["UNIT PRICE"] : "Nil"}</td> */}
                                                {/* <td  className={hideonMob ? 'hidden' : 'expandable'}>{g["TOTAL"] ? g["TOTAL"] : "Nil"}</td>
                                                <td  className={hideonMob ? 'hidden' : 'expandable'}>{g["SALES MAN"] ? g["SALES MAN"] : "Nil"}</td> */}
                                                <td className='rAlign' >{g["NET SALES EXCLVAT"] === 0 ? '0' : g["NET SALES EXCLVAT"] || "Nil"}</td>
                                            </tr>

                                            {clickedIndex === i && (
                                                // <tr style={{ width: '100%' }}>

                                                <td colspan="12" style={{ backgroundColor: "white" }}>
                                                    <div style={{ display: "flex", justifyContent: 'space-between', backgroundColor: "aliceblue" }}>
                                                        <div style={{ width: '10%', backgroundColor: 'white', padding: '12px 8px', border: '1px solid grey' }}>
                                                            <div style={{ fontSize: '12px' }}>RETURN%</div>
                                                            <div style={{ fontSize: '16px' }}>{g['RETURN%']}</div>
                                                        </div>
                                                        <div style={{ width: '10%', backgroundColor: 'white', padding: '12px 8px', border: '1px solid grey' }}>
                                                            <div style={{ fontSize: '12px' }}>VAT AMT</div>
                                                            <div style={{ fontSize: '16px' }}>{g['VAT AMT']}</div>
                                                        </div>
                                                        <div style={{ width: '10%', backgroundColor: 'white', padding: '12px 8px', border: '1px solid grey' }}>
                                                            <div style={{ fontSize: '12px' }}>COMMISSION</div>
                                                            <div style={{ fontSize: '16px' }}>{g.COMMISSION}</div>
                                                        </div>
                                                        <div style={{ width: '10%', backgroundColor: 'white', padding: '12px 8px', border: '1px solid grey' }}>
                                                            <div style={{ fontSize: '12px' }}>NET SALES
                                                            </div>
                                                            <div style={{ fontSize: '16px' }}>{g['NET SALES']}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                // </tr>
                                            )}


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
                            </tbody>
                        </table>
                    </div>
                </div >
            ) : (
                displayData[0] === 'no data available' ? (
                    <div><h5 style={{ color: "red" }}>No data available</h5></div>
                ) : (
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
            )
            }

        </div >
    )
}

export default SalesManSales