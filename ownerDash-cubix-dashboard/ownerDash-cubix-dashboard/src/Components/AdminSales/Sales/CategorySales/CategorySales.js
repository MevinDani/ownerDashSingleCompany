import React, { useEffect, useRef, useState } from 'react'
import { FaSortDown } from "react-icons/fa";
// import './GroupSales.css'
import { FaFilter } from "react-icons/fa";
import { RotatingLines } from 'react-loader-spinner'
import NavBarMob from '../../../NavBarMob/NavBarMob';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import SidePanel from '../../../SidePanel/SidePanel';



const CategorySales = () => {

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



    const searchGrp = async () => {
        setAllData([])
        setShowLoader(true)
        try {
            // const result = await fetch(`https://api-eproc.premierauto.ae/api/SalesAnalysis/SalesGroup?dateStart=${fromDate}&dateEnd=${toDate}`)
            const result = await fetch(`https://cubixweberp.com:199/api/SalesReport/SalesAnalysis?cmpcode=${cmpcode}&guid=${privatek}&mod=SALES_CATEGORY&deptno=NA&dfrom=${fromDate}&dto=${toDate}&salesperson=NA&group=NA&sgroup=NA&categ=NA&scateg=NA&area=NA&country=NA`)
            const data = await result.json()
            if (data) {
                setAllData(data);
                setShowLoader(false)
                // setDisplayData(data);
            }
            else if (!data || data.length === 0) {
                setDisplayData(['no data available']); // Set displayData as an empty array if there's no data
                setAllData([])
            }
            // data && data.length !== 0 setAllData(data)
            // toOptionRef.current.value = "all"
        } catch (error) {
            console.log(error)
            setWarningMsg("Some Error Occured in the backend, Please try again later")
        }
    }



    const getDeptData = (targetDeptNo) => {
        setBranchFilterValue(targetDeptNo)
        if (targetDeptNo === 'all') {
            const sumsByGroup = allData.reduce((acc, item) => {
                const group = item.GROUP || "Unknown"; // If GROUP is null, use "Unknown"

                acc[group] = acc[group] || {
                    'NETCASH SALES': 0,
                    'NETCREDIT SALES': 0,
                    'NET SALERETURN': 0,
                    'VAT AMT': 0,
                    'NET SALES EXCLVAT': 0
                };

                acc[group]['NETCASH SALES'] += item['NETCASH SALES'];
                acc[group]['NETCREDIT SALES'] += item['NETCREDIT SALES'];
                acc[group]['NET SALERETURN'] += item['NET SALERETURN'];
                acc[group]['VAT AMT'] += item['VAT AMT'];
                acc[group]['NET SALES EXCLVAT'] += item['NET SALES EXCLVAT'];

                return acc;
            }, {});

            const sumsArray = Object.keys(sumsByGroup).map(group => ({ GROUP: group, ...sumsByGroup[group] }));

            setGroupSums(sumsArray);
            setDisplayData(sumsArray)

        } else {
            const filteredData = allData.filter(item => item.DEPTNO == targetDeptNo);
            setDisplayData(filteredData)
        }

    }

    const handleRowClick2 = (index) => {
        setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
    };


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


                const result = await fetch(`https://cubixweberp.com:199/api/SalesReport/SalesAnalysis?cmpcode=${cmpcode}&guid=${privatek}&mod=SALES_CATEGORY&deptno=NA&dfrom=${formattedDate}&dto=${formattedDate}&salesperson=NA&group=NA&sgroup=NA&categ=NA&scateg=NA&area=NA&country=NA`)
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
            const result = await fetch(`https://cubixweberp.com:199/api/SalesReport/SalesAnalysis?cmpcode=${cmpcode}&guid=${privatek}&mod=SALES_CATEGORY&deptno=NA&dfrom=${formattedDate}&dto=${formattedDate}&salesperson=NA&group=NA&sgroup=NA&categ=NA&scateg=NA&area=NA&country=NA`)
            const data = await result.json()
            data && setAllData(data)
            setShowLoader(false)
            // toOptionRef.current.value = "all"
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

    // console.log(displayData, 'displayData')

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
                        <div className='grpSdText'><span><>CategoryWise Sales</></span></div>
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

                    {allData.length !== 0 && allData[0] !== 'no data available' && (
                        <div className='grptableCont'>
                            <div className='grpTableCover'>
                                <table border="1" className='table table-striped table-responsive'>

                                    <thead>
                                        <tr>
                                            <th>BRAND</th>
                                            {/* <th className={expandAll ? 'expandable' : 'hidden'}>NETCASH SALES</th>
                                        <th className={expandAll ? 'expandable' : 'hidden'}>NETCREDIT SALES</th>
                                        <th className={expandAll ? 'expandable' : 'hidden'}>NET SALE RETURN</th>
                                        <th className={expandAll ? 'expandable' : 'hidden'}>VAT AMT</th> */}

                                            <th>NETCASH SALES</th>
                                            <th className='rAlign mobHideth'>NETCREDIT SALES</th>
                                            <th className='rAlign mobHideth'>NET SALE RETURN</th>
                                            <th className='rAlign mobHideth'>VAT AMT</th>
                                            <th className='rAlign mobHideth'>NET SALES EXCLVAT</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allData && allData.map((g, i) => (
                                            <React.Fragment key={i}>
                                                <tr data-testid={`dropdown-clicker`} onClick={window.innerWidth <= 768 ? () => handleRowClick(i) : null}>
                                                    {/* <td className='grpplusTd'><div className='DeptSpan'><span>{branchFilterValue === 'all' ? 'All' : branchFilterValue}</span></div>{g.GROUP || 'Unknown'}<FaSortDown className='newDrop' /></td> */}
                                                    <td onClick={() => handleRowClick2(i)}>
                                                        {clickedIndex === i ? (
                                                            <span><FaMinusCircle className='mobViewPlusMinus' /></span>
                                                        ) : (
                                                            <span><FaPlusCircle className='mobViewPlusMinus' /></span>
                                                        )}
                                                        <span>{g.BRAND || 'Nil'}</span>
                                                    </td>
                                                    {/* <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["NETCASH SALES"] ? parseFloat(g["NETCASH SALES"]).toFixed(2) : "Nil"}</td>
                                                <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["NETCREDIT SALES"] ? parseFloat(g["NETCREDIT SALES"]).toFixed(2) : "Nil"}</td>
                                                <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["NET SALERETURN"] ? parseFloat(g["NET SALERETURN"]).toFixed(2) : "Nil"}</td>
                                                <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["VAT AMT"] ? parseFloat(g["VAT AMT"]).toFixed(2) : "Nil"}</td>
                                                <td id='numD' className='last'>{g["NET SALES EXCLVAT"] ? parseFloat(g["NET SALES EXCLVAT"]).toFixed(2) : "Nil"}</td> */}
                                                    <td className='rAlign'>{g["NETCASH SALES"] ? parseFloat(g["NETCASH SALES"]).toFixed(2) : 0}</td>
                                                    <td className='rAlign mobHideth'>{g["NETCREDIT SALES"] ? parseFloat(g["NETCREDIT SALES"]).toFixed(2) : 0}</td>
                                                    <td className='rAlign mobHideth'>{g["NET SALERETURN"] ? parseFloat(g["NET SALERETURN"]).toFixed(2) : 0}</td>
                                                    <td className='rAlign mobHideth'>{g["VAT AMT"] ? parseFloat(g["VAT AMT"]).toFixed(2) : 0}</td>
                                                    <td className='last rAlign mobHideth'>{g["NET SALES EXCLVAT"] ? parseFloat(g["NET SALES EXCLVAT"]).toFixed(2) : 0}</td>
                                                </tr>

                                                {clickedIndex === i && (
                                                    <td colSpan={2}>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>NETCREDIT SALES</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["NETCREDIT SALES"] ? parseFloat(g["NETCREDIT SALES"]).toFixed(2) : 0}</td>
                                                        </tr>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>NET SALERETURN</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["NET SALERETURN"] ? parseFloat(g["NET SALERETURN"]).toFixed(2) : 0}</td>
                                                        </tr>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>VAT AMT</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["VAT AMT"] ? parseFloat(g["VAT AMT"]).toFixed(2) : 0}</td>
                                                        </tr>
                                                        <tr className='mobTableDrop' style={{ backgroundColor: 'black', color: 'white' }}>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', fontSize: "16px" }}>NET SALES EXCLVAT</td>
                                                            <td colSpan={1} style={{ backgroundColor: 'black', color: 'white', fontSize: "16px" }} className='rAlign'>{g["NET SALES EXCLVAT"] ? parseFloat(g["NET SALES EXCLVAT"]).toFixed(2) : 0}</td>
                                                        </tr>
                                                    </td>
                                                )}
                                                {/* {
                                                expandedRows.includes(i) && (
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

                                                )
                                            } */}
                                            </React.Fragment>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    )
                    }

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
                        allData.length === 0 && showLoader == false && (
                            <div><h5 style={{ color: "red" }}>No data available in the specified date range</h5></div>
                        )
                    }
                </div >
            </div>
        </>
    )
}

export default CategorySales
