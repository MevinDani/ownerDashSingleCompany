import React, { useState } from "react";
import "../css/CreateRequestPopup.css";
import ic_dropdown from "../img/ic_dropdown_select_status.png"

function CreateRequestPopup(props) {

    const {closepopup} = props;

    const [showDropDown, setShowDropDown] = useState(false)
    const [selectedValue, setSelectedValue] = useState("select")
    const typeArray = [{
        name: "Transfer"
    }, {
        name: "Loan Application"
    }, , {
        name: "Certificate Request"
    }]

    const buttonClicked = () => {
        setShowDropDown(prev => !prev)
    }

    return (
        <div className="CreateAttendancePopup-root-container px-4 py-2">
            <div>
                <h5 className="mt-2">New Request</h5>
            </div>

            <label className="mt-4">Request Type</label>
            <div className="mt-2 request_container">
                <button className="btn btn-warning" onClick={() => buttonClicked()} >{selectedValue} <img src={ic_dropdown} className="dropdown_arrow"/></button>

                {
                    showDropDown &&

                    <div className="dropdown_list">

                        {
                            typeArray.map((item) => {
                                return (
                                    <div className="list_item" onClick={() => { setSelectedValue(item.name); buttonClicked(); }}>
                                        {item.name}
                                    </div>
                                )
                            })
                        }

                    </div>
                }
            </div>

            <div className="mt-2">
                <input className="w-100 type_message" placeholder="type message if needed..."/>
            </div>

            <div className="d-flex w-100 justify-content-end mt-3">
                <button className="btn btn-light" onClick={()=>{closepopup()}}>Cancel</button>
                <button className="btn btn-dark ms-2">Save</button>
            </div>

        </div>
    )
}

export default CreateRequestPopup;