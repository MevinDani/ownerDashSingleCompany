

import React, { useState } from "react";
import "../css/CreateRequestPopup.css";
import ic_dropdown from "../img/ic_dropdown_select_status.png";
import axios from "axios";
import ic_checked from "../img/ic_checked.png";
import ic_normal from "../img/ic_normal.png";

function CreateTaskPopup(props) {

    const [messageInPopup, setmessageInPopup] = useState("")

    const { closepopup, empId, empName, setResultAfterTask, employeeList } = props;

    const arrayOfObject =
    {
        mode: "ENTRY",
        CmpCode: "CPAYS",
        task_id: "F4F4E1C1-0E28-4147-A50E-C9EF645BE824",
        task_name: "",
        task_description: "",
        task_creationDate: "",
        task_CreatedBy: "Admin",
        task_owner_id: empId,
        task_type: "",
        Task_owner_name: empName,
        start_date: "",
        due_date: "",
        include_travel: "",
        reminder_on: "-",
        priority: "",
        status: "New",
        status_description: "",
        deptno: "HO",
    }


    const [initialObject, setInitialObject] = useState(arrayOfObject)

    const [loadingScreenState, setLoadingScreenState] = useState(false)

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



    const callApi = () => {

        const jsonObjectToPass = [
            {
                mode: "ENTRY",
                CmpCode: "CPAYS",
                task_id: "F4F4E1C1-0E28-4147-A50E-C9EF645BE824",
                task_name: initialObject.task_name,
                task_description: initialObject.task_description,
                task_creationDate: "2024-02-01",
                task_CreatedBy: "Admin",
                task_owner_id: initialObject.task_owner_id,
                task_type: initialObject.task_type,
                Task_owner_name: initialObject.Task_owner_name,
                start_date: initialObject.start_date + " 00:00:00",
                due_date: initialObject.due_date + " 00:00:00",
                include_travel: initialObject.include_travel,
                reminder_on: initialObject.reminder_on + " 00:00:00",
                priority: initialObject.priority,
                status: "New",
                status_description: initialObject.status_description,
                deptno: "HO",
            }
        ]

        console.log("jsonObjectToPass ", jsonObjectToPass)

        const serializedJSON = JSON.stringify(jsonObjectToPass);

        console.log("serializedJSON ", serializedJSON)

        axios.post(`https://cubixweberp.com:156/api/HRCRMTaskReg`, serializedJSON, {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log("res is ", res);
            setLoadingScreenState(false);
            if (res.data.result == "Saved") {
                setResultAfterTask("success")
                closepopup()
            } else {
                setmessageInPopup("something went wrong please try later")
            }
        }).catch(err => {
            // setResultofRollReg("failure")
            setLoadingScreenState(false);
            console.log("error is ", err)
        });
    }

    const clickedOnRadioButton = (nameOfKey, valueOfKey) => {
        setInitialObject({ ...initialObject, [nameOfKey]: valueOfKey })
    }

    const clickedOnDateButton = (nameOfDate, valueOfDate) => {
        setInitialObject({ ...initialObject, [nameOfDate]: valueOfDate })
    }

    const handleInput = (nameOfKey, valueOfKey) => {
        setInitialObject({ ...initialObject, [nameOfKey]: valueOfKey })
    }

    return (
        <div className="CreateLeaveRequestPopup-root-container px-2 py-2">

            {
                messageInPopup.length > 0 &&

                <p className="bg-warning z-index-3  p-2">{messageInPopup} <button className="btn btn-dark py-0" onClick={() => setmessageInPopup("")}>OK</button></p>
            }


            <div>
                <h5 className="mt-2">New Task</h5>
            </div>

            <div>
                <input placeholder="task name" className="w-100 common_input" onChange={(e) => handleInput("task_name", e.target.value)} />
            </div>
            <div className="mt-2">
                <input placeholder="task description" className="w-100 common_input" onChange={(e) => handleInput("task_description", e.target.value)} />
            </div>

            <div className="mt-2">
                <label>Task type</label>
                <div>
                    <button className="btn btn-dark button_in_create_task" onClick={() => clickedOnRadioButton("task_type", "Inhouse")}><img src={initialObject.task_type == "Inhouse" ? ic_checked : ic_normal} className="checkbox_image me-1" /> Inhouse</button>  <button className="btn btn-dark button_in_create_task" onClick={() => clickedOnRadioButton("task_type", "Outdoor")}> <img src={initialObject.task_type == "Outdoor" ? ic_checked : ic_normal} className="checkbox_image me-1" /> Outdoor</button>
                </div>
            </div>


            <div className="mt-2">
                <input placeholder="task owner name" className="w-100 common_input" onChange={(e) => handleInput("Task_owner_name", e.target.value)} />
            </div>

            <div className="d-flex date_wrapper mt-2">
                <div className="mt-2">
                    <div>Start Date</div>
                    <input type="date" onChange={(e) => clickedOnDateButton("start_date", e.target.value)} />
                </div>
                <div className="mt-2">
                    <div>Due Date</div>
                    <input type="date" onChange={(e) => clickedOnDateButton("due_date", e.target.value)} />
                </div>
            </div>

            <div className="mt-2">
                <label>Include travel</label>
                <div>
                    <button className="btn btn-dark button_in_create_task" onClick={() => clickedOnRadioButton("include_travel", "Y")} ><img src={initialObject.include_travel == "Y" ? ic_checked : ic_normal} className="checkbox_image me-1" /> Yes</button>  <button className="btn btn-dark button_in_create_task" onClick={() => clickedOnRadioButton("include_travel", "N")}> <img src={initialObject.include_travel == "N" ? ic_checked : ic_normal} className="checkbox_image me-1" /> No</button>
                </div>
            </div>
            <div className="d-flex date_wrapper mt-2">
                <div className="mt-2">
                    <div>Reminder On</div>
                    <input type="date" onChange={(e) => clickedOnDateButton("reminder_on", e.target.value)} />
                </div>
            </div>

            <div className="mt-2">
                <label>Priority travel</label>
                <div>

                    <button className="btn btn-dark button_in_create_task" onClick={() => clickedOnRadioButton("priority", "Low")}><img src={initialObject.priority == "Low" ? ic_checked : ic_normal} className="checkbox_image me-1" /> Low</button>  <button className="btn btn-dark button_in_create_task" onClick={() => clickedOnRadioButton("priority", "Moderate")}> <img src={initialObject.priority == "Moderate" ? ic_checked : ic_normal} className="checkbox_image me-1" /> Moderate</button> <button className="btn btn-dark button_in_create_task" onClick={() => clickedOnRadioButton("priority", "High")}> <img src={initialObject.priority == "High" ? ic_checked : ic_normal} className="checkbox_image me-1" /> High</button>
                </div>
            </div>
            <div className="mt-2">
                <input placeholder="status description" className="w-100 common_input" onChange={(e) => handleInput("status_description", e.target.value)} />
            </div>


            <div className="d-flex w-100 justify-content-end mt-3">
                <button className="btn btn-light" onClick={() => { closepopup() }}>Cancel</button>
                <button className="btn btn-primary ms-2" onClick={() => callApi()}>Save</button>
            </div>



        </div>
    )
}

export default CreateTaskPopup;