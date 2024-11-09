import React, { useEffect, useRef, useState } from 'react'
import { FaSortDown } from "react-icons/fa";
import './pdcStyles.css'
import { FaFilter } from "react-icons/fa";
import { RotatingLines } from 'react-loader-spinner'
import NavBarMob from '../../NavBarMob/NavBarMob';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import SidePanel from '../../SidePanel/SidePanel';


const IssuedPdcTable = () => {

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

    const [sortOrder, setSortOrder] = useState('asc'); // Initial sorting order

    const [colSpan, setColSpan] = useState(5); // Default colspan value

    const [clickedIndex, setClickedIndex] = useState(null);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setColSpan(1);
            } else {
                setColSpan(5);
            }
        };

        handleResize(); // Call it initially

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleRowClick2 = (index) => {
        setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
    };


    const handleSort = () => {
        const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newOrder);

        // Sort your data based on ChqDate and sortOrder
        const sortedData = allData.slice().sort((a, b) => {
            const dateA = new Date(a.ChqDate);
            const dateB = new Date(b.ChqDate);

            if (newOrder === 'asc') {
                return dateA - dateB;
            } else {
                return dateB - dateA;
            }
        });

        sortedData && setAllData(sortedData)
    }

    // const searchGrp = async () => {
    //     setAllData([])
    //     try {
    //         // const result = await fetch(`https://api-eproc.premierauto.ae/api/SalesAnalysis/SalesGroup?dateStart=${fromDate}&dateEnd=${toDate}`)
    //         const result = await fetch(`https://cubixweberp.com:199/api/SalesReport/SalesAnalysis?cmpcode=${cmpcode}&guid=${privatek}&mod=SALES_GROUP&deptno=NA&dfrom=${fromDate}&dto=${toDate}&salesperson=NA&group=NA&sgroup=NA&categ=NA&scateg=NA&area=NA&country=NA`)
    //         const data = await result.json()
    //         if (data) {
    //             setAllData(data);
    //             // setDisplayData(data);
    //         }
    //         else if (!data || data.length === 0) {
    //             setDisplayData(['no data available']); // Set displayData as an empty array if there's no data
    //             setAllData(['no data available'])
    //         }
    //         // data && data.length !== 0 setAllData(data)
    //         // toOptionRef.current.value = "all"
    //     } catch (error) {
    //         console.log(error)
    //         setWarningMsg("Some Error Occured in the backend, Please try again later")
    //     }
    // }



    // const getDeptData = (targetDeptNo) => {
    //     setBranchFilterValue(targetDeptNo)
    //     if (targetDeptNo === 'all') {
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

    //         setGroupSums(sumsArray);
    //         setDisplayData(sumsArray)

    //     } else {
    //         const filteredData = allData.filter(item => item.DEPTNO == targetDeptNo);
    //         setDisplayData(filteredData)
    //     }

    // }


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

    const searchGrp = async () => {
        setAllData([])
        try {
            setShowLoader(true)
            if (toDate == '') {
                setShowLoader(false)
                return
            }
            // const result = await fetch(`https://api-eproc.premierauto.ae/api/SalesAnalysis/SalesGroup?dateStart=${fromDate}&dateEnd=${toDate}`)
            const result = await fetch(`https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOTAL_PDCR&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=${formattedDate}&dt2=${toDate}`)
            const data = await result.json()
            if (data) {
                setAllData(data);
                setShowLoader(false)
                // setDisplayData(data);
            }
            else if (!data || data.length === 0) {
                setDisplayData(['no data available']); // Set displayData as an empty array if there's no data
                // setAllData(['no data available'])
                setShowLoader(false)
            }
            // data && data.length !== 0 setAllData(data)
            // toOptionRef.current.value = "all"
        } catch (error) {
            console.log(error)
            setShowLoader(false)
            setWarningMsg("Some Error Occured in the backend, Please try again later")
        }
    }

    // useEffect(() => {
    //     fromDateRef.current.value = formattedDate;
    //     toDateRef.current.value = formattedDate;

    //     setFromDate(formattedDate)
    //     setToDate(formattedDate)
    //     const fetchData = async () => {
    //         try {

    //             setWarningMsg("Resource Loading, Please Wait...")

    //             const result = await fetch(`https://cubixweberp.com:199/api/SalesReport/SalesAnalysis?cmpcode=${cmpcode}&guid=${privatek}&mod=SALES_GROUP&deptno=NA&dfrom=${formattedDate}&dto=${formattedDate}&salesperson=NA&group=NA&sgroup=NA&categ=NA&scateg=NA&area=NA&country=NA`)
    //             const data = await result.json()
    //             data && setAllData(data)
    //         } catch (error) {
    //             console.log(error)
    //             setWarningMsg("Some Error Occured in the backend, Please try again later")
    //         }
    //     }

    //     fetchData();
    // }, [])


    // const uniqueGroups = [...new Set(allData.map(item => item.GROUP))];
    // const uniqueDeptNo = [...new Set(allData.map(item => item.DEPTNO))];

    // const handleGrpSearch = (e) => {
    //     setDisplayData([])
    //     setWarningMsg("Resource Loading, Please Wait...")
    //     e.preventDefault()
    //     if (!fromDate || !toDate) {
    //         alert("select a start and end Date")
    //     } else {
    //         searchGrp()
    //     }
    // }

    // const handleReset = async (e) => {
    //     setAllData([])
    //     setWarningMsg("Resource Loading, Please Wait...")
    //     e.preventDefault()
    //     fromDateRef.current.value = formattedDate;
    //     toDateRef.current.value = formattedDate;
    //     setFromDate(formattedDate)
    //     setToDate(formattedDate)

    //     setBranchFilterValue('All')
    //     try {
    //         const result = await fetch(`https://cubixweberp.com:199/api/SalesReport/SalesAnalysis?cmpcode=${cmpcode}&guid=${privatek}&mod=SALES_GROUP&deptno=NA&dfrom=${formattedDate}&dto=${formattedDate}&salesperson=NA&group=NA&sgroup=NA&categ=NA&scateg=NA&area=NA&country=NA`)
    //         const data = await result.json()
    //         data && setAllData(data)
    //         // toOptionRef.current.value = "all"
    //     } catch (error) {
    //         console.log(error)
    //         setWarningMsg("Some Error Occured in the backend, Please try again later")
    //     }

    // }

    // const handleRowClick = (index) => {
    //     setExpandedRows(prevState => {
    //         if (prevState.includes(index)) {
    //             return prevState.filter(item => item !== index);
    //         } else {
    //             return [...prevState, index];
    //         }
    //     });
    // };

    useEffect(() => {
        setAllData(null)
        setShowLoader(true)

        // Get today's date
        const today = new Date();

        // Format the date as 'MM-DD-YYYY'
        const formattedDateToday = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;


        const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOTAL_PDCR&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=${formattedDateToday}&dt2=2050-01-01`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Sort the data based on ChqDate in ascending order
                const sortedData = data.slice().sort((a, b) => {
                    const dateA = new Date(a.ChqDate);
                    const dateB = new Date(b.ChqDate);
                    return dateA - dateB;
                });

                setAllData(sortedData);
                setShowLoader(false)
            })
            .catch(error => console.error('Error:', error));
    }, []);

    // Calculate the sum of Amount values
    const totalAmount = allData && allData.reduce((acc, item) => acc + item.Amount, 0);

    // console.log(allData)

    const handleReset = async (e) => {
        setAllData([])
        setWarningMsg("Resource Loading, Please Wait...")
        setShowLoader(true)
        e.preventDefault()
        // fromDateRef.current.value = formattedDate;
        toDateRef.current.value = formattedDate;
        // setFromDate(formattedDate)
        setToDate(formattedDate)
        // setToDate('2050-01-01')

        setBranchFilterValue('All')
        try {
            const result = await fetch(`https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOTAL_PDCR&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=${formattedDate}&dt2=2050-01-01`)
            const data = await result.json()
            data && setAllData(data)
            setShowLoader(false)
            // toOptionRef.current.value = "all"
        } catch (error) {
            console.log(error)
            setShowLoader(false)
            setWarningMsg("Some Error Occured in the backend, Please try again later")
        }

    }


    // const handleRowClick = () => {
    //     setExpandAll(prevState => !prevState);
    // };

    // console.log(displayData, 'displayData')

    // console.log(fromDate, toDate)

    return (
        <>
            {/* <NavBarMob showLeftSidePanelPop={showLeftSidePanelPop} /> */}
            <NavBarMob />

            <div className='OverallWrapper'>
                <div>
                    <SidePanel />
                </div>
                <div className='grpContainer' style={{ paddingTop: '12px' }} id='recPdc'>
                    {/* date select */}
                    <div className='grpDateCont'>
                        <div className='grpSdText'><span><>Total Received PDC</></span></div>
                        <div className='grpDateInp'>
                            <div className='grpInpLeft'>
                                {/* <div className='grpInp'>
                                <label htmlFor="fromDate">Enter from date:</label>
                                <input ref={fromDateRef} onChange={(e) => setFromDate(e.target.value)} type="date" id='fromDate' />
                            </div> */}
                                <div className='grpInp'>
                                    <label htmlFor="toDate">Enter to date:</label>
                                    <input ref={toDateRef} onChange={(e) => setToDate(e.target.value)} type="date" id='toDate' />
                                </div>
                            </div>
                            <div className='grpInpRight'>
                                <button onClick={searchGrp} className='grpButton'>Filter</button>
                                <button onClick={handleReset} className='grpButtonR'>Reset</button>
                            </div>
                        </div>
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

                    {allData && allData.length !== 0 && allData[0] !== 'no data available' && (
                        <div className='grptableCont'>
                            <div className='grpTableCover pdcTableCover'>
                                <table border="1" className='table table-striped table-responsive pdcTable'>

                                    <thead>
                                        <tr>
                                            <th className='mobHideth'>Account</th>
                                            {/* <th className={expandAll ? 'expandable' : 'hidden'}>NETCASH SALES</th>
                                        <th className={expandAll ? 'expandable' : 'hidden'}>NETCREDIT SALES</th>
                                        <th className={expandAll ? 'expandable' : 'hidden'}>NET SALE RETURN</th>
                                        <th className={expandAll ? 'expandable' : 'hidden'}>VAT AMT</th> */}

                                            <th className='mobHideth'>Amount</th>
                                            <th className='mobHideth'>Bank</th>
                                            {/* <th className='rAlign'>ChqDate</th> */}
                                            <th scope="col" onClick={handleSort} style={{ cursor: 'pointer' }}>
                                                ChqDate {sortOrder === 'asc' ? '↑' : '↓'}
                                            </th>
                                            <th className='mobHideth'>Chqno</th>
                                            <th>Customer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            isNaN(totalAmount) &&
                                            <tr>
                                                <td colSpan={6}>
                                                    No Data Available
                                                </td>
                                            </tr>
                                        }
                                        {totalAmount ? allData && allData.map((g, i) => (
                                            <React.Fragment key={i}>
                                                <tr data-testid={`dropdown-clicker`}>
                                                    {/* <td className='grpplusTd'><div className='DeptSpan'><span>{branchFilterValue === 'all' ? 'All' : branchFilterValue}</span></div>{g.GROUP || 'Unknown'}<FaSortDown className='newDrop' /></td> */}
                                                    <td className='mobHideth'>{g.Account || 'Unknown'}</td>
                                                    {/* <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["NETCASH SALES"] ? parseFloat(g["NETCASH SALES"]).toFixed(2) : "Nil"}</td>
                                                <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["NETCREDIT SALES"] ? parseFloat(g["NETCREDIT SALES"]).toFixed(2) : "Nil"}</td>
                                                <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["NET SALERETURN"] ? parseFloat(g["NET SALERETURN"]).toFixed(2) : "Nil"}</td>
                                                <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["Chqno"] ? parseFloat(g["Chqno"]).toFixed(2) : "Nil"}</td>
                                                <td id='numD' className='last'>{g["Customer"] ? parseFloat(g["Customer"]).toFixed(2) : "Nil"}</td> */}

                                                    <td className='rAlign mobHideth'>{g["Amount"] ? parseFloat(g["Amount"]).toFixed(2) : "Nil"}</td>
                                                    <td className='mobHideth'>{g["Bank"] ? (g["Bank"]) : "Nil"}</td>
                                                    <td className='' onClick={() => handleRowClick2(i)}>
                                                        {clickedIndex === i ? (
                                                            <span><FaMinusCircle className='mobViewPlusMinus' /></span>
                                                        ) : (
                                                            <span><FaPlusCircle className='mobViewPlusMinus' /></span>
                                                        )}
                                                        {g["ChqDate"] ? new Date(g["ChqDate"] + 'Z').toISOString().split('T')[0] : "Nil"}
                                                    </td>
                                                    <td className='rAlign mobHideth'>{g["Chqno"] ? parseFloat(g["Chqno"]).toFixed(2) : "Nil"}</td>
                                                    <td className='last'>{g["Customer"] ? (g["Customer"]) : "Nil"}</td>
                                                </tr>

                                                {clickedIndex === i && (
                                                    <td colSpan={2}>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>Account</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g.Account || 'Unknown'}</td>
                                                        </tr>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>Amount</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["Amount"] ? parseFloat(g["Amount"]).toFixed(2) : "Nil"}</td>
                                                        </tr>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>Bank</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["Bank"] ? (g["Bank"]) : "Nil"}</td>
                                                        </tr>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>Chqno</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["Chqno"] ? parseFloat(g["Chqno"]).toFixed(2) : "Nil"}</td>
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
                                        )) : ""}
                                    </tbody>

                                    <tfoot style={{ backgroundColor: 'black', color: 'white' }}>
                                        <tr style={{ backgroundColor: 'black', color: 'white' }}>
                                            <td colSpan={colSpan} style={{ textAlign: 'left', backgroundColor: 'black', color: 'white', fontSize: "16px" }}>Total Amount</td>
                                            <td style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{totalAmount.toFixed(2)}</td>
                                        </tr>
                                    </tfoot>

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
                        allData && allData.length === 0 && showLoader == false && (
                            <div><h5 style={{ color: "red" }}>No data available in the specified date range</h5></div>
                        )
                    }
                </div >
            </div>
        </>
    )
}

export default IssuedPdcTable
