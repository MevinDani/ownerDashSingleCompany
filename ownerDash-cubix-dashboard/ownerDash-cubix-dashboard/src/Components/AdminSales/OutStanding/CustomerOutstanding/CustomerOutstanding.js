import React, { useEffect, useState } from 'react'
import './CustomerOutStanding.css'
import { RotatingLines } from 'react-loader-spinner'
import CustOutPopUp from '../CustOutPopUp/CustOutPopUp';


const CustomerOutstanding = () => {

    const [data, setData] = useState(null);

    const [accountNo, setAccountNo] = useState(null)
    const [description, setDescription] = useState('');

    const handleTableRowClick = (account, description) => {
        setAccountNo(account);
        setDescription(description);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api-eproc.premierauto.ae/api/Statements');
                const jsonData = await response.json();
                jsonData && setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error appropriately, e.g., set an error state
            }
        }

        fetchData();
    }, []);

    // console.log(accountNo, 'accountNo')

    return (
        <div className='grpContainer'>
            {/* date select */}
            <div className='grpDateCont'>
                <div className='grpSdText'><span><>Customer Selection</></span></div>
                {/* <div className='grpDateInp'>
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

            {data && data[0] !== 'no data available' ? (
                <div className='grptableCont'>
                    <div className='grpTableCover custOut'>
                        <table border="1" className='table table-striped table-responsive'>

                            <thead>
                                <tr>
                                    <th>Account</th>
                                    <th>Description</th>
                                    <th>deptNo</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((g, i) => (
                                    <>
                                        <tr key={i} data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handleTableRowClick(g.account, g.DESCRIPTION)}>
                                            <td>{g.account || 'Nil'}</td>
                                            <td>{g.DESCRIPTION || 'Nil'}</td>
                                            <td>{(!g.deptno || g.deptno.trim() === '') ? 'Nil' : g.deptno}</td>                                            {/* Assuming g.Balance exists in your data */}
                                            <td>{g.Balance || 'Nil'}</td>
                                        </tr>
                                    </>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            ) : (
                data && data[0] === 'no data available' ? (
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

            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button> */}

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div class="modal-content">
                        <div class="modal-header" style={{ backgroundColor: "#DCDCDC" }}>
                            <div className='grpSdText'><span><>Outstanding Accounts Report</></span></div>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        <div class="modal-body">
                            <CustOutPopUp accountNo={accountNo} description={description} />
                        </div>
                        {/* <div class="modal-footer">
                           
                            <button type="button" class="btn btn-primary">Understood</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CustomerOutstanding