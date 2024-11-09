import React, { useEffect, useRef, useState } from 'react'
import { FaSortDown } from "react-icons/fa";
import './BranchSales.css'
import { FaFilter } from "react-icons/fa";
import { RotatingLines } from 'react-loader-spinner'
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import NavBarMob from '../../../NavBarMob/NavBarMob';
import SidePanel from '../../../SidePanel/SidePanel';



const BranchSales = () => {

    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [allData, setAllData] = useState([])
    const [groupSums, setGroupSums] = useState([]);
    const [displayData, setDisplayData] = useState([])
    const [expandedRow, setExpandedRow] = useState(null);
    const [expandAll, setExpandAll] = useState(false);
    const [expandedRows, setExpandedRows] = useState([]);
    const [warningMessage, setWarningMsg] = useState("Enter Start Date and End Date")

    const [showLoader, setShowLoader] = useState(false)

    const fromDateRef = useRef(null);
    const toDateRef = useRef(null);
    const toOptionRef = useRef(null);

    const selectedCompanyString = localStorage.getItem("selectedCompany");

    const selectedCompany = JSON.parse(selectedCompanyString);

    const cmpcode = selectedCompany.cmpcode;
    const publick = selectedCompany.publick;
    const privatek = selectedCompany.privatek;

    const showLeftSidePanelPop = true

    const [branchFilterValue, setBranchFilterValue] = useState('All')

    const [clickedIndex, setClickedIndex] = useState(null);

    const handleRowClick2 = (index) => {
        setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const searchGrp = async () => {
        setDisplayData([])
        setWarningMsg("Resource Loading, Please Wait...")
        setShowLoader(true)
        try {
            // const result = await fetch(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport/DoReport/DOPending/Item?dateStart=${fromDate}&dateEnd=${toDate}`)
            // const result = await fetch(`https://api-eproc.premierauto.ae/api/InvoiceSearch`)
            const result = await fetch(`https://cubixweberp.com:199/api/SalesReport/SalesAnalysis?cmpcode=${cmpcode}&guid=${privatek}&mod=SALES_DEPT&deptno=NA&dfrom=${fromDate}&dto=${toDate}&salesperson=NA&group=NA&sgroup=NA&categ=NA&scateg=NA&area=NA&country=NA`)
            const data = await result.json()
            if (data) {
                setAllData(data);
                setDisplayData(data);
                setShowLoader(false)
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
        } else {
            setDisplayData([])
        }
    }, [allData])


    const getDeptData = (targetDeptNo) => {
        setDisplayData([])
        setBranchFilterValue(targetDeptNo)
        if (targetDeptNo === 'all') {
            // fromDateRef.current.value = formattedDate;
            // toDateRef.current.value = formattedDate;
            const fetchData = async () => {
                try {

                    setWarningMsg("Resource Loading, Please Wait...")
                    setShowLoader(true)

                    // const result = await fetch(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport/DoReport/DOPending/Item?dateStart=${formattedDate}&dateEnd=${formattedDate}`)
                    // const result = await fetch(`https://api-eproc.premierauto.ae/api/InvoiceSearch`)
                    const result = await fetch(`https://cubixweberp.com:199/api/SalesReport/SalesAnalysis?cmpcode=${cmpcode}&guid=${privatek}&mod=SALES_DEPT&deptno=NA&dfrom=${fromDate}&dto=${toDate}&salesperson=NA&group=NA&sgroup=NA&categ=NA&scateg=NA&area=NA&country=NA`)
                    const data = await result.json()
                    data && setAllData(data)
                    setShowLoader(false)
                } catch (error) {
                    console.log(error)
                    setShowLoader(false)
                    setWarningMsg("Some Error Occured in the backend, Please try again later")
                }
            }

            fetchData();
        } else {
            const filteredData = allData.filter(item => item.DEPTNO == targetDeptNo);
            setDisplayData(filteredData)
        }
    }


    // useEffect(() => {
    //     if (branchFilterValue === 'All' && allData.length > 0) {
    //         const sumsByGroup = allData.reduce((acc, item) => {
    //             const group = item.GROUP || "Unknown"; // If GROUP is null, use "Unknown"

    //             acc[group] = acc[group] || {
    //                 'NETCASH SALES': 0,
    //                 'NETCREDIT SALES': 0,
    //                 'NET SALERETURN': 0,
    //                 'VAT AMT': 0,
    //                 'NET SALES EXCLVAT': 0
    //             };

    //             acc[group]['NETCASH SALES'] += item['NETCASH SALES'];
    //             acc[group]['NETCREDIT SALES'] += item['NETCREDIT SALES'];
    //             acc[group]['NET SALERETURN'] += item['NET SALERETURN'];
    //             acc[group]['VAT AMT'] += item['VAT AMT'];
    //             acc[group]['NET SALES EXCLVAT'] += item['NET SALES EXCLVAT'];

    //             return acc;
    //         }, {});

    //         const sumsArray = Object.keys(sumsByGroup).map(group => ({ GROUP: group, ...sumsByGroup[group] }));

    //         sumsArray && setGroupSums(sumsArray);
    //         sumsArray && setDisplayData(sumsArray)
    //     } else if (allData.length > 0) {
    //         const filteredData = allData.filter(item => item.DEPTNO == branchFilterValue);
    //         setDisplayData(filteredData)
    //     }

    // }, [allData])

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
                setShowLoader(true)

                // const result = await fetch(`https://api-eproc.premierauto.ae/api/SalesAnalysis/SalesGroup?dateStart=${formattedDate}&dateEnd=${formattedDate}`)
                const result = await fetch(`https://cubixweberp.com:199/api/SalesReport/SalesAnalysis?cmpcode=${cmpcode}&guid=${privatek}&mod=SALES_DEPT&deptno=NA&dfrom=${formattedDate}&dto=${formattedDate}&salesperson=NA&group=NA&sgroup=NA&categ=NA&scateg=NA&area=NA&country=NA`)
                const data = await result.json()
                data && setAllData(data)
                setShowLoader(false)
            } catch (error) {
                console.log(error)
                setWarningMsg("Some Error Occured in the backend, Please try again later")
            }
        }

        fetchData();
    }, [])


    const uniqueGroups = [...new Set(allData.map(item => item.GROUP))];
    const uniqueDeptNo = [...new Set(allData.map(item => item.DEPTNO))];

    const handleGrpSearch = (e) => {
        setAllData([])
        setWarningMsg("Resource Loading, Please Wait...")
        e.preventDefault()
        if (!fromDate || !toDate) {
            alert("select a start and end Date")
        } else {
            searchGrp()
        }
    }

    const handleReset = async (e) => {
        setAllData([])
        setWarningMsg("Resource Loading, Please Wait...")
        setShowLoader(true)
        e.preventDefault()
        fromDateRef.current.value = formattedDate;
        toDateRef.current.value = formattedDate;
        setFromDate(formattedDate)
        setToDate(formattedDate)

        setBranchFilterValue('All')
        try {
            // const result = await fetch(`https://api-eproc.premierauto.ae/api/SalesAnalysis/SalesGroup?dateStart=${formattedDate}&dateEnd=${formattedDate}`)
            const result = await fetch(`https://cubixweberp.com:199/api/SalesReport/SalesAnalysis?cmpcode=${cmpcode}&guid=${privatek}&mod=SALES_DEPT&deptno=NA&dfrom=${formattedDate}&dto=${formattedDate}&salesperson=NA&group=NA&sgroup=NA&categ=NA&scateg=NA&area=NA&country=NA`)
            const data = await result.json()
            data && setAllData(data)
            toOptionRef.current.value = "all"
            setShowLoader(false)
        } catch (error) {
            console.log(error)
            setWarningMsg("Some Error Occured in the backend, Please try again later")
        }

    }

    const handleRowClick = (index) => {
        setExpandedRows(prevState => {
            if (prevState.includes(index)) {
                return prevState.filter(item => item !== index);
            } else {
                return [...prevState, index];
            }
        });
    };


    // const handleRowClick = () => {
    //     setExpandAll(prevState => !prevState);
    // };

    console.log(allData, 'allData')

    // console.log(fromDate, toDate)

    const salesAnalysisPage = true


    return (
        <>
            {/* <NavBarMob showLeftSidePanelPop={showLeftSidePanelPop} /> */}
            <NavBarMob salesAnalysisPage={salesAnalysisPage} />

            <div className='OverallWrapper'>
                {/* <div>
                    <SidePanel />
                </div> */}
                <div className='grpContainer' style={{ paddingTop: '12px' }}>
                    {/* date select */}
                    <div className='grpDateCont'>
                        <div className='grpSdText'><span><>Department Wise Sales</></span></div>
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

                    <div className='filter'>
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
                    </div>

                    {/* table */}

                    {displayData.length !== 0 && displayData[0] !== 'no data available' && (
                        <div className='grptableCont'>
                            <div className='grpTableCover'>
                                <table border="1" className='table table-striped table-responsive'>

                                    <thead>
                                        <tr>
                                            <th>DEPTNO</th>
                                            {/* <th className={expandAll ? 'expandable' : 'hidden'}>CASHSALES</th>
                                        <th className={expandAll ? 'expandable' : 'hidden'}>CASHSALES%</th>
                                        <th className={expandAll ? 'expandable' : 'hidden'}>CREDIT SALES</th>
                                        <th className={expandAll ? 'expandable' : 'hidden'}>CREDITSALES%</th>
                                        <th className={expandAll ? 'expandable' : 'hidden'}>NET SALES</th>
                                        <th className={expandAll ? 'expandable' : 'hidden'}>NETSALES RETURN</th>
                                        <th className={expandAll ? 'expandable' : 'hidden'}>NETCASH SALES</th>
                                        <th className={expandAll ? 'expandable' : 'hidden'}>NETCASH SALESRETURN</th>
                                        <th className={expandAll ? 'expandable' : 'hidden'}>NETCREDIT SALES</th>
                                        <th className={expandAll ? 'expandable' : 'hidden'}>NETCREDIT SALESRETURN</th> */}
                                            <th className='rAlign mobHideth'>CASHSALES</th>
                                            <th className='rAlign mobHideth'>CASHSALES%</th>
                                            <th className='rAlign mobHideth'>CREDIT SALES</th>
                                            <th className='rAlign mobHideth'>CREDITSALES%</th>
                                            <th>NET SALES</th>
                                            <th className='rAlign mobHideth'>NETSALES RETURN</th>
                                            <th className='rAlign mobHideth'>NETCASH SALES</th>
                                            <th className='rAlign mobHideth'>NETCASH SALESRETURN</th>
                                            <th className='rAlign mobHideth'>NETCREDIT SALES</th>
                                            <th className='rAlign mobHideth'>NETCREDIT SALESRETURN</th>
                                            <th className='rAlign mobHideth'>NET SALES EXCLVAT</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {displayData && displayData.map((g, i) => (
                                            <React.Fragment key={i}>
                                                <tr data-testid={`dropdown-clicker`} onClick={window.innerWidth <= 768 ? () => handleRowClick(i) : null}>
                                                    <td onClick={() => handleRowClick2(i)} style={{ cursor: 'pointer' }}>
                                                        {clickedIndex === i ? (
                                                            <span> <FaMinusCircle /></span>
                                                        ) : (
                                                            <span> <FaPlusCircle /></span>
                                                        )}
                                                        <span>{g.DEPTNO || 'Unknown'}</span>
                                                        {/* <FaSortDown className='newDrop' /> */}
                                                    </td>
                                                    {/* <td>{g["CASH SALES"] ? parseFloat(g["CASH SALES"]).toFixed(2) : "Nil"}</td>
                                                <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["CASHSALES%"] ? parseFloat(g["CASHSALES%"]).toFixed(2) : "Nil"}</td>
                                                <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["CREDIT SALES"] ? parseFloat(g["CREDIT SALES"]).toFixed(2) : "Nil"}</td>
                                                <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["CREDITSALES%"] ? parseFloat(g["CREDITSALES%"]).toFixed(2) : "Nil"}</td>
                                                <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["NET SALES"] ? parseFloat(g["NET SALES"]).toFixed(2) : "Nil"}</td>
                                                <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["NETSALES RETURN"] ? parseFloat(g["NETSALES RETURN"]).toFixed(2) : "Nil"}</td>
                                                <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["NETCASH SALES"] ? parseFloat(g["NETCASH SALES"]).toFixed(2) : "Nil"}</td>
                                                <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["NETCASH SALESRETURN"] ? parseFloat(g["NETCASH SALESRETURN"]).toFixed(2) : "Nil"}</td>
                                                <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["NETCREDIT SALES"] ? parseFloat(g["NETCREDIT SALES"]).toFixed(2) : "Nil"}</td>
                                                <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["NETCREDIT SALESRETURN"] ? parseFloat(g["NETCREDIT SALESRETURN"]).toFixed(2) : "Nil"}</td> */}

                                                    <td className='rAlign mobHideth'>{g["CASH SALES"] ? parseFloat(g["CASH SALES"]).toFixed(2) : 0}</td>
                                                    <td className='rAlign mobHideth'>{g["CASHSALES%"] ? parseFloat(g["CASHSALES%"]).toFixed(2) : 0}</td>
                                                    <td className='rAlign mobHideth'>{g["CREDIT SALES"] ? parseFloat(g["CREDIT SALES"]).toFixed(2) : 0}</td>
                                                    <td className='rAlign mobHideth'>{g["CREDITSALES%"] ? parseFloat(g["CREDITSALES%"]).toFixed(2) : 0}</td>
                                                    <td>{g["NET SALES"] ? parseFloat(g["NET SALES"]).toFixed(2) : 0}</td>
                                                    <td className='rAlign mobHideth'>{g["NETSALES RETURN"] ? parseFloat(g["NETSALES RETURN"]).toFixed(2) : 0}</td>
                                                    <td className='rAlign mobHideth'>{g["NETCASH SALES"] ? parseFloat(g["NETCASH SALES"]).toFixed(2) : 0}</td>
                                                    <td className='rAlign mobHideth'>{g["NETCASH SALESRETURN"] ? parseFloat(g["NETCASH SALESRETURN"]).toFixed(2) : 0}</td>
                                                    <td className='rAlign mobHideth'>{g["NETCREDIT SALES"] ? parseFloat(g["NETCREDIT SALES"]).toFixed(2) : 0}</td>
                                                    <td className='rAlign mobHideth'>{g["NETCREDIT SALESRETURN"] ? parseFloat(g["NETCREDIT SALESRETURN"]).toFixed(2) : 0}</td>
                                                    <td id='numD' className='last rAlign mobHideth'>{g["NET SALES EXCLVAT"] ? parseFloat(g["NET SALES EXCLVAT"]).toFixed(2) : "Nil"}</td>
                                                </tr>

                                                {clickedIndex === i && (
                                                    // <tr style={{ width: '100%' }}>

                                                    <td colspan="12" style={{ backgroundColor: "white" }} className='pcTableDrop'>
                                                        <div style={{ display: "flex", justifyContent: 'space-between', backgroundColor: "aliceblue" }}>
                                                            <div style={{ width: '10%', backgroundColor: 'white', padding: '12px 8px', border: '1px solid grey' }}>
                                                                <div style={{ fontSize: '12px' }}>COMMISSION</div>
                                                                <div style={{ fontSize: '16px' }}>{g.COMMISSION}</div>
                                                            </div>
                                                            <div style={{ width: '10%', backgroundColor: 'white', padding: '12px 8px', border: '1px solid grey' }}>
                                                                <div style={{ fontSize: '12px' }}>'RETURN%</div>
                                                                <div style={{ fontSize: '16px' }}>{g['RETURN%']}</div>
                                                            </div>
                                                            <div style={{ width: '10%', backgroundColor: 'white', padding: '12px 8px', border: '1px solid grey' }}>
                                                                <div style={{ fontSize: '12px' }}>SALES RETURN</div>
                                                                <div style={{ fontSize: '16px' }}>{g['SALES RETURN']}</div>
                                                            </div>
                                                            <div style={{ width: '10%', backgroundColor: 'white', padding: '12px 8px', border: '1px solid grey' }}>
                                                                <div style={{ fontSize: '12px' }}>VAT AMT</div>
                                                                <div style={{ fontSize: '16px' }}>{g['VAT AMT']}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    // </tr>
                                                )}

                                                {clickedIndex === i && (
                                                    <td colSpan={2}>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>CASH SALES</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["CASH SALES"] ? parseFloat(g["CASH SALES"]).toFixed(2) : 0}</td>
                                                        </tr>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>CASHSALES%</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["CASHSALES%"] ? parseFloat(g["CASHSALES%"]).toFixed(2) : 0}</td>
                                                        </tr>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>CREDIT SALES</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["CREDIT SALES"] ? parseFloat(g["CREDIT SALES"]).toFixed(2) : 0}</td>
                                                        </tr>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>CREDITSALES%</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["CREDITSALES%"] ? parseFloat(g["CREDITSALES%"]).toFixed(2) : 0}</td>
                                                        </tr>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>NETSALES RETURN</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["NETSALES RETURN"] ? parseFloat(g["NETSALES RETURN"]).toFixed(2) : 0}</td>
                                                        </tr>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>NETCASH SALES</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["NETCASH SALES"] ? parseFloat(g["NETCASH SALES"]).toFixed(2) : 0}</td>
                                                        </tr>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>NETCASH SALESRETURN</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["NETCASH SALESRETURN"] ? parseFloat(g["NETCASH SALESRETURN"]).toFixed(2) : 0}</td>
                                                        </tr>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>NETCREDIT SALES</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["NETCREDIT SALES"] ? parseFloat(g["NETCREDIT SALES"]).toFixed(2) : 0}</td>
                                                        </tr>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>NETCREDIT SALESRETURN</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["NETCREDIT SALESRETURN"] ? parseFloat(g["NETCREDIT SALESRETURN"]).toFixed(2) : 0}</td>
                                                        </tr>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>NET SALES EXCLVAT</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["NET SALES EXCLVAT"] ? parseFloat(g["NET SALES EXCLVAT"]).toFixed(2) : "0"}</td>
                                                        </tr>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>COMMISSION</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["COMMISSION"] ? parseFloat(g["COMMISSION"]).toFixed(2) : "0"}</td>
                                                        </tr>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>RETURN%</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["RETURN%"] ? parseFloat(g["RETURN%"]).toFixed(2) : "0"}</td>
                                                        </tr>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>SALES RETURN</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["SALES RETURN"] ? parseFloat(g["SALES RETURN"]).toFixed(2) : "Nil"}</td>
                                                        </tr>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>VAT AMT</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["VAT AMT"] ? parseFloat(g["VAT AMT"]).toFixed(2) : "Nil"}</td>
                                                        </tr>
                                                    </td>
                                                )}


                                                {/* {expandedRows.includes(i) && (
                                                <>
                                                    <tr data-testid={`expanded-row-${i}`}>
                                                        <th className='expandable'>NETCASH SALES</th>
                                                        <td id='numD' className='expandable'>{g["NETCASH SALES"] ? parseFloat(g["NETCASH SALES"]).toFixed(2) : "Nil"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className='expandable'>NETCREDIT SALES</th>
                                                        <td id='numD' className='expandable'>{g["NETCREDIT SALES"] ? parseFloat(g["NETCREDIT SALES"]).toFixed(2) : "Nil"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className='expandable'>NET SALE RETURN</th>
                                                        <td id='numD' className='expandable'>{g["NET SALERETURN"] ? parseFloat(g["NET SALERETURN"]).toFixed(2) : "Nil"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className='expandable'>VAT AMT</th>
                                                        <td id='numD' className='expandable'>{g["VAT AMT"] ? parseFloat(g["VAT AMT"]).toFixed(2) : "Nil"}</td>
                                                    </tr>
                                                </>
    
                                            )} */}
                                            </React.Fragment>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    )}

                    {
                        showLoader &&
                        (
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

                    {
                        displayData.length === 0 && showLoader == false && (
                            <div><h5 style={{ color: "red" }}>No data available in the specified date range</h5></div>
                        )
                    }
                </div >
            </div>
        </>
    )
}

export default BranchSales
