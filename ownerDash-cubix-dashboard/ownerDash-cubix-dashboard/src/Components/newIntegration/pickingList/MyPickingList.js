// import React from 'react'

// const MyPickingList = () => {
//     return (
//         <div>MyPickingList</div>
//     )
// }

// export default MyPickingList

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./MyPickingList.css";
import NavBarMob from "../../NavBarMob/NavBarMob";
import SidePanel from "../../SidePanel/SidePanel";

function MyPickingList() {

    const [isCallingAPI, setISCalllingAPI] = useState(true);

    const [pickingListFromAPI, setPickingListFromAPI] = useState(null)

    const selectedCompanyString = localStorage.getItem("selectedCompany");

    const selectedCompany = JSON.parse(selectedCompanyString);

    const cmpcode = selectedCompany && selectedCompany.cmpcode;
    const publick = selectedCompany && selectedCompany.publick;
    const privatek = selectedCompany && selectedCompany.privatek;

    const navigate = useNavigate()

    const arrayOfPickingListForMe = [
        { orderNumber: 123 }, { orderNumber: 124 }, { orderNumber: 125 }]

    const clickedOnOrderNumber = (orderNumber) => {

        navigate(`/picking_list_details?pickno=${orderNumber}`)
    }

    const callApiToGetPickingList = () => {

        setISCalllingAPI(true)

        let url = `https://cubixweberp.com:199/api/Pick/ShowPick?cmpcode=${cmpcode}&guid=${privatek}&mod=SHOW_PICK&deptno=%27%27%27`

        axios.get(url).then((res) => {
            setISCalllingAPI(false)
            setPickingListFromAPI(res.data)
        }).catch((err) => {
            console.log("err is ", err)
            setISCalllingAPI(false)
        })
    }

    useEffect(() => {

        callApiToGetPickingList()
    }, [])

    // console.log(pickingListFromAPI)

    return (
        <>
            <NavBarMob />
            <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: " #F1F1FB" }}>

                <SidePanel item='my_picking_list' />

                <div className="container">
                    <h4 className="p-2">Picking List</h4>

                    {
                        isCallingAPI ?
                            <div className="loading-panel mt-4">
                                < div class="spinner-border" role="status">
                                </div>
                                <label className="ms-2 ">Loading</label>
                            </div> :
                            <div className="picking_list_main_container mb-4 pb-4">
                                <table className="table_picking_list">
                                    <thead>
                                        <tr>
                                            <th>
                                                PickNo
                                            </th>
                                            <th>
                                                Transfer To
                                            </th>
                                            <th>
                                                Brand
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            !pickingListFromAPI &&
                                            <tr>
                                                <td colSpan={3} style={{ color: "red", fontSize: "16px", fontWeight: "bold", textAlign: "center" }}>
                                                    No Data Available
                                                </td>
                                            </tr>
                                        }
                                        {
                                            pickingListFromAPI?.map((item) => {
                                                return (
                                                    <tr className="single_row_picking_list_table" onClick={() => clickedOnOrderNumber(item.PickNo)}>
                                                        <td>
                                                            {item.PickNo}
                                                        </td>
                                                        <td>
                                                            {item.TransferTo}
                                                        </td>
                                                        <td>
                                                            {item.Brand}
                                                        </td>

                                                    </tr>
                                                )

                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                    }


                </div>

            </div >
        </>
    )
}

export default MyPickingList;
