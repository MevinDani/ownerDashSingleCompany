import React, { useEffect, useState, useRef } from 'react'
import { FaSortDown } from "react-icons/fa";
import './DeliveryOrder.css'
import { FaFilter } from "react-icons/fa";
import { RotatingLines } from 'react-loader-spinner'



const DeliveryOrder = () => {

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

    const fromDateRef = useRef(null);
    const toDateRef = useRef(null);

    const toOptionRef = useRef(null);


    const [branchFilterValue, setBranchFilterValue] = useState('All')

    const getDeptData = (targetDeptNo) => {
        setBranchFilterValue(targetDeptNo)
        if (targetDeptNo === 'all') {
            fromDateRef.current.value = formattedDate;
            toDateRef.current.value = formattedDate;
            const fetchData = async () => {
                try {

                    setWarningMsg("Resource Loading, Please Wait...")

                    const result = await fetch(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport?dateStart=${formattedDate}&dateEnd=${formattedDate}`)
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
            const result = await fetch(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport?dateStart=${formattedDate}&dateEnd=${formattedDate}`)
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
            const result = await fetch(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport?dateStart=${fromDate}&dateEnd=${toDate}`)
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

                const result = await fetch(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport?dateStart=${formattedDate}&dateEnd=${formattedDate}`)
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



    return (
        <div className='DelOContainer'>
            {/* date select */}
            <div className='grpDateCont'>
                <div className='grpSdText'><span><>Delivery Order Report</></span></div>
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

            {displayData.length !== 0 && displayData[0] !== 'no data available' ?
                (<div div className='grptableCont' >
                    <div className='grpTableCover'>
                        <table border="1" className='table table-striped table-responsive'>
                            <thead>
                                <tr onClick={handleRowClick}>
                                    <th>DEPTNO<div className='DeptSpan'><span>{branchFilterValue === 'all' ? 'All' : branchFilterValue}</span></div></th>
                                    <th id='numD' className={hideonMob ? 'hidden' : 'expandable'}>DATE</th>
                                    <th id='numD' className={hideonMob ? 'hidden' : 'expandable'}>CUSTOMER</th>
                                    <th id='numD' className={hideonMob ? 'hidden' : 'expandable'}>AMOUNT</th>
                                    <th id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>VAT</th>
                                    <th id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>DONO</th>
                                    <th id='numD' className={hideonMob ? 'hidden' : 'expandable'}>INV NO</th>
                                    <th id='numD' className={hideonMob ? 'hidden' : 'expandable'}>SALESMAN</th>
                                    <th>AMOUNT EXCLVAT</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    displayData && displayData.map((g, i) => (
                                        <React.Fragment key={i}>
                                            <tr onClick={window.innerWidth <= 1124 ? () => handleRowClick(i) : null} key={i}>
                                                <td data-testid="dropdown-clicker" id='numD' className='DloplusTd'>{g.DEPTNO || 'Unknown'}<FaSortDown className='newDrop' /></td>
                                                <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>
                                                    {g["DATE"] ?
                                                        new Date(g["DATE"] + 'Z').toISOString().split('T')[0] :
                                                        "Nil"
                                                    }
                                                </td>
                                                <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["CUSTOMER"] ? g["CUSTOMER"] : "Nil"}</td>
                                                <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["AMOUNT"] ? g["AMOUNT"] : "Nil"}</td>
                                                <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["VAT"] ? g["VAT"] : "Nil"}</td>
                                                <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["DONO"] ? g["DONO"] : "Nil"}</td>
                                                <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["INV NO"] ? g["INV NO"] : "Nil"}</td>
                                                <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["SALESMAN"] ? g["SALESMAN"] : "Nil"}</td>
                                                <td id='numD'>{g["AMOUNT_EXCLVAT"] ? g["AMOUNT_EXCLVAT"] : "Nil"}</td>
                                            </tr>
                                            {expandedRows.includes(i) && (
                                                <>
                                                    <tr data-testid={`expanded-row-${i}`}>
                                                        <th className='expandable'>DATE</th>
                                                        <td id='numD' className='expandable'>{g["DATE"] ? g["DATE"] : "Nil"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className='expandable'>CUSTOMER</th>
                                                        <td id='numD' className='expandable'>{g["CUSTOMER"] ? g["CUSTOMER"] : "Nil"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className='expandable'>AMOUNT</th>
                                                        <td id='numD' className='expandable'>{g["AMOUNT"] ? g["AMOUNT"] : "Nil"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className='expandable'>VAT</th>
                                                        <td id='numD' className='expandable'>{g["VAT"] ? g["VAT"] : "Nil"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className='expandable'>DONO</th>
                                                        <td id='numD' className='expandable'>{g["DONO"] ? g["DONO"] : "Nil"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className='expandable'>INV NO</th>
                                                        <td id='numD' className='expandable'>{g["INV NO"] ? g["INV NO"] : "Nil"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className='expandable'>SALESMAN</th>
                                                        <td id='numD' className='expandable'>{g["SALESMAN"] ? g["SALESMAN"] : "Nil"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className='expandable'>SALESMAN</th>
                                                        <td id='numD' className='expandable'>{g["SALESMAN"] ? g["SALESMAN"] : "Nil"}</td>
                                                    </tr>
                                                </>

                                            )}
                                        </React.Fragment>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div >)
                : (
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
                )}
        </div >
    )
}

export default DeliveryOrder