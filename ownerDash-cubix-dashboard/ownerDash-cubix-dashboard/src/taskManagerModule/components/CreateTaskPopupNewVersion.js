

import React, { useState, useRef, useEffect } from "react";
import "../css/CreateRequestPopup.css";
import ic_dropdown from "../img/ic_dropdown_select_status.png";
import axios from "axios";
import ic_checked from "../img/ic_checked.png";
import ic_normal from "../img/ic_normal.png";
import ic_down_dropdown from "../img/ic_down_dropdown.png";
import ic_delete from "../img/ic_delete_selected_slot.png";
import { getReadableDateYYYYMMDD, getReadableTime24HR } from "./utils";
import MyCustomMap from "./MyCustomMap";


function CreateTaskPopupNewVersion(props) {

    const [staffList, setStaffList] = useState(null)

    const [uploadPercentage, setUploadPercentage] = useState(null)
    const [errorMsg, setErrorMsg] = useState("");

    const firstFileRef = useRef(null);

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();

    const [showMap, setShowMap] = useState(false)

    const [locationNeededForStaff, setLocationNeededForStaff] = useState(null)

    const [arrayOfSelectedEmployee, setArrayOfSelectedEmployee] = useState(null)

    const [slotArray, setSlotArray] = useState(null)

    const [showEmployeeList, setShowEmployeeList] = useState(false)

    const [selectedStaffInSlot, setSelectedStaffInSlot] = useState(null)

    const [showParticularJobList, setShowParticularJobList] = useState(false)

    const [selectedDatesArray, setSelectedDatesArray] = useState(null)

    const [messageInPopup, setmessageInPopup] = useState("")

    const { closepopup, empId, empName, setResultAfterTask, employeeList, jobList,refreshHomepageList } = props;

    const initialTaskObjectToSendToAPI =
    {

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
        task_comes_under: "",
        task_particular_job_name: "",
        selected_job_id: ""
    }

    const [taskObjectToSendToAPI, setTaskObjectToSendToAPI] = useState(initialTaskObjectToSendToAPI)

    const [loadingScreenState, setLoadingScreenState] = useState(false)

    const onFileSelected = (e) => {

        if (e != null) {
            if (e != undefined) {
                console.log(e.target.files[0])
                setFile(e.target.files[0]);
                setFileName(e.target.files[0]?.name)
            }

        }

    }

    const getStaffList = () => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/staff-list.php`).then((res) => {
            console.log("res is ", res)

            if (res.data.status == "get_opened_tasks_success") {

                
                setStaffList(res.data.opened_tasks_array)
            }

        }).catch((err) => {
            console.log("error ", err)
        })
    }

    const createNewTask = () => {

        setLoadingScreenState(true);

        let jobName = null;
        let dateTime = null;
        let selectedStaff = null;

        if (taskObjectToSendToAPI.task_comes_under == "particular_job") {

            let filteredArrayAfterJobFilter = jobList.filter((filteritem) => filteritem.job_id == taskObjectToSendToAPI.selected_job_id);

            if (filteredArrayAfterJobFilter.length > 0) {
                jobName = filteredArrayAfterJobFilter[0].job_name
            }

        }

        if (slotArray.length > 0) {
            dateTime = slotArray[0].date_time
        }

        console.log(" arrayOfSelectedEmployee ", arrayOfSelectedEmployee)

        if (arrayOfSelectedEmployee?.length > 0) {
            selectedStaff = arrayOfSelectedEmployee[0]
        }

        let taskObjectForAPI = {
            input_task_name: taskObjectToSendToAPI.task_name,
            input_task_description: taskObjectToSendToAPI.task_description,
            input_task_comes_under: taskObjectToSendToAPI.task_comes_under,
            input_job_name: jobName != null ? jobName : "",
            input_task_type: taskObjectToSendToAPI.task_type,
            input_selected_date_time: dateTime != null ? dateTime : "",
            input_selected_staff: selectedStaff != null ? selectedStaff.name_of_employee : "",
            input_selected_staff_id: selectedStaff != null ? selectedStaff.id_of_employee : "",
            input_include_travel: taskObjectToSendToAPI.include_travel,
            input_priority: taskObjectToSendToAPI.priority,

        }

        console.log("taskObjectForAPI ", taskObjectForAPI)

        axios.post(`${process.env.REACT_APP_BASE_URL}/create-task-with-transaction.php`, taskObjectForAPI).then((res) => {
            console.log("res is ", res);
            setLoadingScreenState(false);
            if (res.data.status == "task_creation_success") {
                setResultAfterTask("success")
                closepopup()
                refreshHomepageList()
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
        console.log("nameOfKey, valueOfKey ", nameOfKey, valueOfKey)
        setTaskObjectToSendToAPI({ ...taskObjectToSendToAPI, [nameOfKey]: valueOfKey })
    }

    const clickedOnDateButton = (nameOfDate, valueOfDate) => {
        setTaskObjectToSendToAPI({ ...taskObjectToSendToAPI, [nameOfDate]: valueOfDate })


        setSlotArray([{ date_time: valueOfDate }])

        let arrayToStoreDate = [];
        if (selectedDatesArray == null) {
            arrayToStoreDate = [valueOfDate]
            setSelectedDatesArray(arrayToStoreDate)
        } else {

            //check if date already present
            if (!selectedDatesArray.includes(valueOfDate)) {
                setSelectedDatesArray([...selectedDatesArray, valueOfDate])
            }
        }

    }

    const handleInput = (nameOfKey, valueOfKey) => {
        setTaskObjectToSendToAPI({ ...taskObjectToSendToAPI, [nameOfKey]: valueOfKey })
    }

    const selectedJobFromList = (id) => {

        setTaskObjectToSendToAPI({ ...taskObjectToSendToAPI, selected_job_id: id })
    }

    const clickedOnStaffName = (empId, selectedStaffName) => {

        if (arrayOfSelectedEmployee == null) {
            setArrayOfSelectedEmployee([{ id_of_employee: empId, name_of_employee: selectedStaffName }])
        } else {
            setArrayOfSelectedEmployee([...arrayOfSelectedEmployee, { id_of_employee: empId, name_of_employee: selectedStaffName }])
        }

        showHideEmployeeList()

    }

    const showHideEmployeeList = () => {
        setShowEmployeeList(prev => !prev)
    }


    const removeSelectedEmployee = (employeeToBERemoved) => {

        let newArray = arrayOfSelectedEmployee.filter((item) => {
            return item != employeeToBERemoved
        })

        setArrayOfSelectedEmployee(newArray)
    }

    const uploadFileToServer = async () => {

        const ticketFormData = new FormData();

        console.log("type of file ", file)

        ticketFormData.append("file", file)

        try {

            axios({
                method: "post",
                url: `https://localhost:5001/api/File/upload`,
                data: ticketFormData,
                headers: { "Content-Type": "multipart/form-data" }
            }).then((res) => {
                console.log("res is ", res);

                alert(`result is ${res.data.dbPath}`)

                if (res.data.result == "Saved") {
                    console.log("res is saved");
                } else {
                    console.log("res is not saved");
                }
            }).catch(err => {

                console.log("error is ", err)
                alert(" err ", err)
            });

        } catch (err) {
            console.log("error got from try catch on create ticket post", err)
            alert("error : ", err)
        };

    }
    

    useEffect(() => {
        getStaffList()
    }, [])

    return (
        <div className="CreateNewTask_wrapper-cta_button">

            <div className="px-3 py-2 CreateNewTask_wrapper_inner_container">

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

                <div className="mt-3 position-relative">
                    <div>
                        <button className="btn btn-dark button_in_create_task" onClick={() => clickedOnRadioButton("task_comes_under", "common_job")} ><img src={taskObjectToSendToAPI.task_comes_under == "common_job" ? ic_checked : ic_normal} className="checkbox_image me-1" /> Common Job</button>  <button className="btn btn-dark button_in_create_task ms-2" onClick={() => { clickedOnRadioButton("task_comes_under", "particular_job"); setShowParticularJobList(prev => !prev) }}> <img src={taskObjectToSendToAPI.task_comes_under == "particular_job" ? ic_checked : ic_normal} className="checkbox_image me-1" />Particular Job</button>
                    </div>
                    {
                        showParticularJobList &&

                        taskObjectToSendToAPI.task_comes_under == "particular_job" &&

                        < div className="position-absolute z-index-3 bg-light">
                            {
                                jobList.map((item) => {
                                    return (
                                        <div onClick={() => { selectedJobFromList(item.job_id); setShowParticularJobList(prev => !prev) }} className="p-2 job_dropdown_list">{item.job_name}</div>
                                    )
                                })
                            }
                        </div>

                    }
                </div>

                <div>
                    {
                        taskObjectToSendToAPI.task_comes_under == "particular_job" &&
                        <p>
                            {


                                console.log("fsfs ", jobList.filter((filteritem) => filteritem.job_id == taskObjectToSendToAPI.selected_job_id)
                                )
                            }
                            {
                                jobList.filter((filteritem) => filteritem.job_id == taskObjectToSendToAPI.selected_job_id).map((item) => {
                                    return (
                                        <div>
                                            {item.job_name}
                                        </div>
                                    )
                                })
                            }

                        </p>
                    }
                </div>


                <div className="mt-3">
                    <label>Task type</label>
                    <div>
                        <button className="btn btn-dark button_in_create_task" onClick={() => clickedOnRadioButton("task_type", "Inhouse")}><img src={taskObjectToSendToAPI.task_type == "Inhouse" ? ic_checked : ic_normal} className="checkbox_image me-1" /> Inhouse</button>  <button className="btn btn-dark button_in_create_task ms-2" onClick={() => clickedOnRadioButton("task_type", "Outdoor")}> <img src={taskObjectToSendToAPI.task_type == "Outdoor" ? ic_checked : ic_normal} className="checkbox_image me-1" /> Outdoor</button>
                    </div>
                </div>


                <div className="date_wrapper mt-3 slot_generating_container">

                    <div className="me-2">Select Date and Time</div>

                    <div className="d-flex date_and_create_button_container">
                        <input type="datetime-local" onChange={(e) => clickedOnDateButton("start_date", e.target.value)} />
                    </div>

                </div>

                <div className="mt-2 selected_time_slot_table_holder">

                    <table>
                        <tbody>
                            {
                                slotArray != null &&
                                slotArray.map((item) => {
                                    return (
                                        <tr className="selected_slot_container time_slot_table_row">
                                            <td>
                                                <label className=""><img className="delete_selected_slot" src={ic_delete} /></label>
                                            </td>
                                            <td>
                                                <label className="date_time_in_slot">{item.date_time}</label>
                                            </td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                    <div className="mt-3">
                        <label>Select employees</label>
                    </div>
                    <div className="position-relative">
                        <button className="btn btn-dark employee_select_button" onClick={() => showHideEmployeeList()}>select employee <img src={ic_down_dropdown} className="dropdown_arrow_image ms-1" /></button>
                        {
                            showEmployeeList &&
                            <div className="dropdown_employee_list_in_create_task position-absolute ">
                                {
                                    staffList != null ?
                                        staffList.map((item) => {
                                            return (
                                                <div onClick={() => clickedOnStaffName(item.user_id, item.username)} className="employee_list_single_item">{item.username}</div>
                                            )
                                        })
                                        :
                                        <p>No employee list to show</p>
                                }
                            </div>
                        }
                    </div>
                    <table className="mt-2">
                        <tbody>
                            {
                                arrayOfSelectedEmployee != null &&
                                arrayOfSelectedEmployee.map((item) => {
                                    return (
                                        <tr className="selected_slot_container time_slot_table_row">
                                            <td>
                                                <label onClick={() => removeSelectedEmployee(item)} className=""><img className="delete_selected_slot" src={ic_delete} /></label>
                                            </td>
                                            <td>
                                                <label className="date_time_in_slot">{item.name_of_employee}</label>
                                            </td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className="mt-3">
                    <label>Include travel</label>
                    <div>
                        <button className="btn btn-dark button_in_create_task" onClick={() => clickedOnRadioButton("include_travel", "Y")} ><img src={taskObjectToSendToAPI.include_travel == "Y" ? ic_checked : ic_normal} className="checkbox_image me-1" /> Yes</button>  <button className="btn btn-dark button_in_create_task ms-2" onClick={() => clickedOnRadioButton("include_travel", "N")}> <img src={taskObjectToSendToAPI.include_travel == "N" ? ic_checked : ic_normal} className="checkbox_image me-1" /> No</button>
                    </div>
                </div>


                <div className="mt-3">
                    <label>Priority travel</label>
                    <div>

                        <button className="btn btn-dark button_in_create_task" onClick={() => clickedOnRadioButton("priority", "Low")}><img src={taskObjectToSendToAPI.priority == "Low" ? ic_checked : ic_normal} className="checkbox_image me-1" /> Low</button>  <button className="btn btn-dark button_in_create_task ms-2" onClick={() => clickedOnRadioButton("priority", "Moderate")}> <img src={taskObjectToSendToAPI.priority == "Moderate" ? ic_checked : ic_normal} className="checkbox_image me-1" /> Moderate</button> <button className="btn btn-dark button_in_create_task ms-2" onClick={() => clickedOnRadioButton("priority", "High")}> <img src={taskObjectToSendToAPI.priority == "High" ? ic_checked : ic_normal} className="checkbox_image me-1" /> High</button>
                    </div>
                </div>

                {/* <h6 className="mt-4">Upload file if needed</h6>

                <div className="mt-2">
                    <input type="file" id="customFile" onChange={onFileSelected} ref={firstFileRef} />
                </div> */}
                {/* 
                <div className="mt-2">
                    <button className="btn btn-warning" onClick={(e) => uploadFileToServer(e)}>upload</button>
                    {uploadPercentage != null && <label className="ms-3">{uploadPercentage}%</label>}
                </div>
                <button className="btn btn-dark button_in_create_task mt-3 mb-2" onClick={() => setShowMap(prev => !prev)} ><img src={showMap ? ic_checked : ic_normal} className="checkbox_image me-1 " />Add location</button> */}

                {
                    showMap &&

                    <div>
                        <p>select a location click on it</p>

                        <div className="map-holder">
                            {/* <MyCustomMap locationNeededForStaff={locationNeededForStaff} setLocationNeededForStaff={setLocationNeededForStaff} /> */}
                        </div>
                    </div>
                }


            </div >
            <div className="d-flex justify-content-end popup_cta_container">
                <button className="btn btn-light" onClick={() => { closepopup() }}>Cancel</button>
                <button className="btn btn-primary ms-2" onClick={() => createNewTask()}>Save</button>
            </div>

        </div>
    )
}

export default CreateTaskPopupNewVersion;