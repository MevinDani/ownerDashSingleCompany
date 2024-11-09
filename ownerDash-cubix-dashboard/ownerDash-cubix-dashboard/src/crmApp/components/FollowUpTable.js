import React, { useEffect, useState } from 'react'
import './FollowUpTable.css'
import { Oval } from 'react-loader-spinner'


const FollowUpTable = ({ selectedDiv }) => {

    const [filteredSalesData, setFilteredSalesData] = useState(null);

    const TodaysFollowUps = [
        {
            "id": 1,
            "customerName": "John Doe",
            "email": "john.doe@example.com",
            "followUpId": 123,
            "todaysDate": "2024-01-16",
            "stage": "Negotiation"
        },
        {
            "id": 2,
            "customerName": "Jane Smith",
            "email": "jane.smith@example.com",
            "followUpId": 124,
            "todaysDate": "2024-01-16",
            "stage": "Proposal"
        },
        {
            "id": 3,
            "customerName": "Bob Johnson",
            "email": "bob.johnson@example.com",
            "followUpId": 125,
            "todaysDate": "2024-01-16",
            "stage": "Demo"
        },
        {
            "id": 4,
            "customerName": "Alice Williams",
            "email": "alice.williams@example.com",
            "followUpId": 126,
            "todaysDate": "2024-01-16",
            "stage": "Lead Qualification"
        },
        {
            "id": 5,
            "customerName": "Charlie Brown",
            "email": "charlie.brown@example.com",
            "followUpId": 127,
            "todaysDate": "2024-01-16",
            "stage": "Prospecting"
        },
        {
            "id": 6,
            "customerName": "Eve Davis",
            "email": "eve.davis@example.com",
            "followUpId": 128,
            "todaysDate": "2024-01-16",
            "stage": "Opportunity won"
        },
        {
            "id": 7,
            "customerName": "John Doe",
            "email": "john.doe@example.com",
            "followUpId": 123,
            "todaysDate": "2024-01-16",
            "stage": "Negotiation"
        },
        {
            "id": 8,
            "customerName": "Jane Smith",
            "email": "jane.smith@example.com",
            "followUpId": 124,
            "todaysDate": "2024-01-16",
            "stage": "Proposal"
        },
        {
            "id": 9,
            "customerName": "Bob Johnson",
            "email": "bob.johnson@example.com",
            "followUpId": 125,
            "todaysDate": "2024-01-16",
            "stage": "Demo"
        },
        {
            "id": 10,
            "customerName": "Alice Williams",
            "email": "alice.williams@example.com",
            "followUpId": 126,
            "todaysDate": "2024-01-16",
            "stage": "Lead Qualification"
        },
        {
            "id": 11,
            "customerName": "Charlie Brown",
            "email": "charlie.brown@example.com",
            "followUpId": 127,
            "todaysDate": "2024-01-16",
            "stage": "Prospecting"
        },
        {
            "id": 12,
            "customerName": "Eve Davis",
            "email": "eve.davis@example.com",
            "followUpId": 128,
            "todaysDate": "2024-01-16",
            "stage": "Opportunity won"
        }
    ]

    useEffect(() => {

        const selectedDivChange = async (selectedDiv) => {
            setFilteredSalesData(null);

            // Simulate a delay or replace this with your actual asynchronous data fetching
            await new Promise(resolve => setTimeout(resolve, 800));
            const filteredSalesData2 = TodaysFollowUps.filter((item) => {
                if (selectedDiv === 'AllCount') {
                    return true; // Show all items for 'AllCount'
                } else {
                    return item.stage === selectedDiv;
                }
            });
            setFilteredSalesData(filteredSalesData2)
        }

        selectedDivChange(selectedDiv)
    }, [selectedDiv])

    // console.log(selectedDiv, 'selectedDiv')
    // console.log(filteredSalesData, 'filteredSalesData')

    return (
        <div className='FollowUpTableWrapper'>

            <div className='FollowUpTableCont'>

                <div class="card" id='TodaysFollowCard'>
                    <div class="card-body">

                        <div className='SalesCardHeader'>
                            <div className='SalesText'>Todays Follow Up</div>
                            {/* <div className='SalesFilterCont'>
                                <div className='NewProsButon' onClick={handleOpen}>New Prospectus</div>
                                <div className='SalesListFilterCont'>
                                    <IoSearchOutline />
                                </div>
                                <div className='SalesListFilterCont'>
                                    <IoFunnelOutline />
                                </div>
                            </div> */}
                        </div>

                        <div className='SalesTableCont' id='SalesTableCont'>
                            <div className='Table-Responsive'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>Customer Name</th>
                                            <th>Email</th>
                                            <th>Follow Up Id</th>
                                            <th>Date</th>
                                            <th>Stage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            TodaysFollowUps && TodaysFollowUps.length > 0 ? (
                                                TodaysFollowUps.map((item, index) => (
                                                    <>
                                                        <tr key={item.id} className='mainTr'>
                                                            <td >{item.id}</td>
                                                            <td>{item.customerName}</td>
                                                            <td >{item.email}</td>
                                                            <td >{item.followUpId}</td>
                                                            <td >{item.todaysDate}</td>
                                                            <td >{item.stage}</td>
                                                        </tr>
                                                        {/* {clickedRow === item.id && dropData && (
                                                            <tr style={{ backgroundColor: "#F6F6F6" }}>
                                                                <td colSpan='7'>
                                                                    <SalesDropItem data={dropData} />
                                                                </td>
                                                            </tr >
                                                        )} */}
                                                    </>
                                                ))
                                            ) : (
                                                TodaysFollowUps === null ? (
                                                    <tr style={{ display: "flex", justifyContent: "center" }}>
                                                        <td colSpan='7'>
                                                            <Oval
                                                                visible={true}
                                                                height="50"
                                                                width="50"
                                                                color="#4fa94d"
                                                                radius="6"
                                                                ariaLabel="three-dots-loading"
                                                                wrapperStyle={{}}
                                                                wrapperClass=""
                                                            />
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    <tr>
                                                        <td colSpan='2' style={{ color: "red", fontSize: "12px" }}>No Data Available</td>
                                                    </tr>
                                                )
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FollowUpTable