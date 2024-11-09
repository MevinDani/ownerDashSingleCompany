import React, { useState } from "react";
import "../css/CreateRequestPopup.css";
import ic_dropdown from "../img/ic_dropdown_select_status.png"

function CreateLeaveRequestPopup(props) {

    const { closepopup } = props;

    const [showDropDown, setShowDropDown] = useState(false)
    const [selectedValue, setSelectedValue] = useState("select")
    const typeArray = [{
        name: "Vacation"
    }, {
        name: "Sick Leave"
    }, , {
        name: "Emergency Leave"
    }]

    const buttonClicked = () => {
        setShowDropDown(prev => !prev)
    }

    return (
        <div className="CreateLeaveRequestPopup-root-container px-2 py-2">
            <div>
                <h5 className="mt-2">New Leave Application</h5>
            </div>

            <label className="mt-4">Leave Type</label>
            <div className="mt-2 request_container">
                <button className="btn btn-warning dropdown_button" onClick={() => buttonClicked()} >{selectedValue} <img src={ic_dropdown} className="dropdown_arrow" /></button>

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

            <div className="d-flex date_wrapper">
                <div className="mt-2">
                    <div>Start Date</div>
                    <input type="date" />
                </div>
                <div className="mt-2">
                    <div>End Date</div>
                    <input type="date" />
                </div>
            </div>

            <div className="mt-2">
                <input className="w-100 type_message" placeholder="type message if needed..." />
            </div>



            <div className="d-flex w-100 justify-content-end mt-3">
                <button className="btn btn-light" onClick={() => { closepopup() }}>Cancel</button>
                <button className="btn btn-dark ms-2">Save</button>
            </div>

        </div>
    )
}

export default CreateLeaveRequestPopup;