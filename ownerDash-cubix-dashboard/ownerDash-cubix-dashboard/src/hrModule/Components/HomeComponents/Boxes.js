import React, { useEffect, useState } from 'react'
import './Boxes.css'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdOutlineTask } from "react-icons/md";
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner'

const Boxes = ({ iconBackgroundColor, head, jobTitle, jobDivision, jobGrade }) => {

    const [leaveReqData, setLeaveReqData] = useState(null)

    useEffect(() => {
        setLeaveReqData(null)
        const fetchData = async () => {
            try {

                const response = await axios.get(`https://cubixweberp.com:156/api/HRDashboard/CPAYS/HO/LEAVEREQUESTS/2024-01-09/2024-01-09/${jobTitle ? jobTitle : "ALL"}/${jobGrade ? jobGrade : "ALL"}/${jobDivision ? jobDivision : "ALL"}/ALL/ALL`);
                setLeaveReqData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, [jobTitle, jobDivision, jobGrade])

    // console.log(leaveReqData, 'leaveReqData')

    return (
        <div className='BoxWrapper'>

            <div className='BoxCont'>

                <div className='BoxHead'>
                    <div className='BoxHeadInner'>
                        <div className='BoxIcon' style={{ padding: '2px 6px 2px 6px', backgroundColor: iconBackgroundColor, borderRadius: "2px", color: "white" }}>
                            {
                                head === 'Leave Requests' ?
                                    <FaRegCalendarAlt /> : head === 'My Tasks' ? <MdOutlineTask /> : head === 'Expense Request' ? <FaMoneyBillAlt /> : ""
                            }
                        </div>
                        <div className='BoxText' style={{ color: iconBackgroundColor }}>
                            {head}
                        </div>
                    </div>
                </div>

                <div className='BoxData'>
                    {/* <div className='BoxDataWrap'> */}
                    <div className='BoxDataItem' style={{ color: "#DC8D02" }}>
                        <div>{leaveReqData ? leaveReqData[0].APPLICATIONS : <> <ThreeDots
                            visible={true}
                            height="30"
                            width="30"
                            color="#4fa94d"
                            radius="6"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        /></>}
                        </div>
                        <div>Application</div>
                    </div>
                    <div className='BoxDataItem' style={{ color: "#0C9A02" }}>
                        <div>{leaveReqData ? leaveReqData[0].APPROVED : <> <ThreeDots
                            visible={true}
                            height="30"
                            width="30"
                            color="#4fa94d"
                            radius="6"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        /></>}</div>
                        <div>Approved</div>
                    </div>
                    <div className='BoxDataItem' style={{ color: "#DE0F0F" }}>
                        <div>{leaveReqData ? leaveReqData[0].REJECTED : <> <ThreeDots
                            visible={true}
                            height="30"
                            width="30"
                            color="#4fa94d"
                            radius="6"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        /></>}</div>
                        <div>Rejected</div>
                    </div>
                    {/* </div> */}
                </div>

            </div>
        </div>
    )
}

export default Boxes