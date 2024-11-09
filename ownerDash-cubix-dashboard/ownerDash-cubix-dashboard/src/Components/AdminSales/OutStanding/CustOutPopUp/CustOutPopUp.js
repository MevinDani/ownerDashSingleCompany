import React, { useEffect, useRef, useState } from 'react'
import './CustOutPopUp.css'
import { RotatingLines } from 'react-loader-spinner'
import CustPdf from '../CustPdf/CustPdf';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";


const CustOutPopUp = ({ accountNo, description }) => {

    const [data, setData] = useState([]);

    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')

    const [pdfView, setPdfView] = useState(false)

    const fromDateRef = useRef(null);
    const toDateRef = useRef(null);

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;


    const handleFilterSearch = async () => {
        setData([])
        try {
            const result = await fetch(`https://api-eproc.premierauto.ae/api/Statements/outstandingaccount?Cust=${accountNo}&dateStart=${fromDate}&dateEnd=${toDate}`)
            const data = await result.json()

            console.log(data, 'data')
            if (data) {
                setData(data);
                // setDisplayData(data);
            }
            else if (!data || data.length === 0) {
                setData(['no data available']); // Set displayData as an empty array if there's no data
                // setData([])
            }
            // data && data.length !== 0 setAllData(data)
            // toOptionRef.current.value = "all"
        } catch (error) {
            console.log(error)
            setData(['no data available']);
            // setWarningMsg("Some Error Occured in the backend, Please try again later")
        }
    }

    const handleReset = async (e) => {
        setData([])
        // setWarningMsg("Resource Loading, Please Wait...")
        e.preventDefault()
        fromDateRef.current.value = formattedDate;
        toDateRef.current.value = formattedDate;
        // setBranchFilterValue('All')
        try {
            const result = await fetch(`https://api-eproc.premierauto.ae/api/Statements/outstandingaccount?Cust=${accountNo}&dateStart=${formattedDate}&dateEnd=${formattedDate}`)
            const data = await result.json()
            data && setData(data)
        } catch (error) {
            console.log(error)
            setData(['no data available']);
        }
    }

    useEffect(() => {
        setData([])
        // Function to make the API call
        const fetchData = async () => {
            try {
                // Get current date in the format 'YYYY-MM-DD'
                const currentDate = new Date().toISOString().split('T')[0];

                fromDateRef.current.value = currentDate;
                toDateRef.current.value = currentDate;

                setFromDate(currentDate)
                setToDate(currentDate)


                // Make the API call using fetch or your preferred method
                const response = await fetch(`https://api-eproc.premierauto.ae/api/Statements/outstandingaccount?Cust=${accountNo}&dateStart=${currentDate}&dateEnd=${currentDate}`);
                if (response.ok) {
                    const result = await response.json();

                    if (result !== null || result !== undefined) {
                        setData(result);
                    } else {
                        setData(['no data available']);
                    }
                } else {
                    console.error(`Failed to fetch data. Status code: ${response.status}`);
                    setData(['no data available']);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setData(['no data available']);
            }
        };

        // Call the fetchData function when the component mounts
        fetchData();
    }, [accountNo]);

    const [clickedIndex, setClickedIndex] = useState(null);

    const handleRowClick2 = (index) => {
        setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
    };


    // console.log(data, 'data')

    return (
        <div className='CustOutPopUpCont'>

            <div className='cpAccountNo'>
                <div>
                    <span className='cpHeadText'>Account:</span>{'  '}
                    <span>{accountNo}</span>
                </div>
            </div>

            <div>
                <div>
                    <span className='cpHeadText'>Name:</span>{'  '}
                    <span>{description}</span>
                </div>
            </div>

            <div className='grpDateInp'>
                <div className='grpInpLeft cpInpLeft'>
                    <div className='grpInp'>
                        <label htmlFor="fromDate">Enter from date:</label>
                        <input ref={fromDateRef} onChange={(e) => setFromDate(e.target.value)} type="date" id='fromDate' />
                    </div>
                    <div className='grpInp'>
                        <label htmlFor="toDate">Enter to date:</label>
                        <input ref={toDateRef} onChange={(e) => setToDate(e.target.value)} type="date" id='toDate' />
                    </div>
                </div>
                <div className='grpInpRight cpInpRight'>
                    <button className='grpButton' onClick={handleFilterSearch}>Filter</button>
                    <button onClick={handleReset} className='grpButtonR'>Reset</button>
                </div>
            </div>

            <div className='cpPdfCont'>
                <div onClick={() => setPdfView(!pdfView)}>View PDF</div>
            </div>
            {
                pdfView ?
                    <div>
                        <CustPdf accountNo={accountNo} fromDate={fromDate} toDate={toDate} />
                    </div> :
                    <div className='grptableCont' >
                        <div className='grpTableCover cpPopTable' style={{ width: '100%' }}>
                            <table border="1" className='table table-striped table-responsive'>
                                <thead>
                                    <tr>
                                        <th>INV</th>
                                        <th>INVDATE</th>
                                        <th>LPO</th>
                                        <th>DESCRIPTION</th>
                                        <th>DEBIT</th>
                                        <th>CREDIT</th>
                                        <th>BALANCE</th>
                                        <th>SALESPERSON</th>
                                        <th>CRLIMIT</th>
                                        <th>ADDRESS</th>
                                        <th>TRN</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        data.length !== 0 && data[0] !== 'no data available' ? (
                                            // {
                                            data && data.map((item, index) => (
                                                <>
                                                    <tr>
                                                        <td onClick={() => handleRowClick2(index)} style={{ cursor: 'pointer' }}>
                                                            {item.INV}
                                                            {clickedIndex === index ? (
                                                                <FaMinusCircle />
                                                            ) : (
                                                                <FaPlusCircle />
                                                            )}
                                                        </td>
                                                        <td>{item.INVDATE ? new Date(item.INVDATE + 'Z').toISOString().split('T')[0] :
                                                            "Nil"}</td>
                                                        <td>{item.LPO}</td>
                                                        <td>{item.DESCRIPTION}</td>
                                                        <td>{item.DEBIT}</td>
                                                        <td>{item.CREDIT}</td>
                                                        <td>{item.BALANCE}</td>
                                                        <td>{item.SALESPERSON}</td>
                                                        <td>{item.CRLIMIT}</td>
                                                        <td>{item.ADDRESS}</td>
                                                        <td>{item.TRN}</td>
                                                    </tr>

                                                    {clickedIndex === index && (
                                                        // <tr style={{ width: '100%' }}>

                                                        <td colspan="12" style={{ backgroundColor: "white" }}>
                                                            <div style={{ display: "flex", justifyContent: 'space-between', backgroundColor: "aliceblue" }}>
                                                                <div style={{ width: '30%', backgroundColor: 'white', padding: '12px 8px', border: '1px solid grey' }}>
                                                                    <div style={{ fontSize: '12px' }}>TERMS</div>
                                                                    <div style={{ fontSize: '16px' }}>{item.TERMS ? item.TERMS : "Nil"}</div>
                                                                </div>
                                                                {/* <div style={{ width: '10%', backgroundColor: 'white', padding: '12px 8px', border: '1px solid grey' }}>
                                                                    <div style={{ fontSize: '12px' }}>SUBGROUP</div>
                                                                    <div style={{ fontSize: '16px' }}>{g.SUBGROUP}</div>
                                                                </div>
                                                                <div style={{ width: '10%', backgroundColor: 'white', padding: '12px 8px', border: '1px solid grey' }}>
                                                                    <div style={{ fontSize: '12px' }}>CATEG</div>
                                                                    <div style={{ fontSize: '16px' }}>{g.CATEG}</div>
                                                                </div>
                                                                <div style={{ width: '10%', backgroundColor: 'white', padding: '12px 8px', border: '1px solid grey' }}>
                                                                    <div style={{ fontSize: '12px' }}>SCATEG</div>
                                                                    <div style={{ fontSize: '16px' }}>{g.SCATEG}</div>
                                                                </div> */}
                                                            </div>
                                                        </td>
                                                        // </tr>
                                                    )}
                                                </>



                                            ))
                                            // }
                                        ) : (
                                            data[0] === 'no data available' ? (
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

                                </tbody>
                            </table>
                        </div>
                    </div>
            }



        </div>
    )
}

export default CustOutPopUp