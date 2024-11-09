import React, { useEffect, useState, useRef } from "react";
import ic_blue_cube from "../img/ic_blue_cube.png";
import "../css/Home.css";
import AdminHeader from "./AdminHeader";
import { useNavigate } from "react-router-dom";
import ic_create_menu from "../img/ic_create_menu.png";
import ic_previous_check_list from "../img/ic_previous_check_list.png";
import ic_customers_menu from "../img/ic_customers_menu.png";
import ic_barcode_scan from "../img/ic_barcode_scan.png";
import ic_check_stock_card_image from "../img/ic_bg_check_stock_card.png";
import make_order_card_image from "../img/make_order_card_image.png";
import previous_order_card_image from "../img/previous_order_card_image.png";
import customer_details_card_image from "../img/customer_details_card_image.png";
import work_details_card_image from "../img/work_details_card_image.jpg";
import home_employee_bg_banner from "../img/header_background.svg";
import ic_location from "../img/ic_location.svg";
import ic_location_in_check_in_out from "../img/ic_location_in_check_in_out.svg";
import ic_view_details from "../img/ic_view_details.svg"
import ic_checked_in from "../img/ic_checkin.svg";
import ic_leave from "../img/ic_leave.svg";
import ic_checked_out from "../img/ic_checkout.svg";
import ic_create from "../img/ic_create.svg";
import ic_user_image from "../img/ic_user_image.svg";
import CreateRequestPopup from "./CreateRequestPopup";
import CreateLeaveRequestPopup from "./CreateLeaveRequestPopup";
import CreateTaskPopup from "./CreateTaskPopup";
import axios from "axios";
import ic_checked from "../img/ic_checked.png";
import ic_normal from "../img/ic_normal.png";
import CreateTaskPopupNewVersion from "./CreateTaskPopupNewVersion";
import ic_view_job_list from "../img/ic_view_job_list.png";
import MyCustomMap from "./MyCustomMap";
import MyCustomMapForGeofencing from "./MyCustomMapForGeofencing";

import task_complete from "../img/task_complete.svg";
import travel_start from "../img/travel_start_in_path.svg";
import travel_end from "../img/travel_end_in_path.svg";
import task_started from "../img/task_start_in_path.svg";
import task_hold from "../img/task_end_in_path.svg";
import task_end from "../img/task_end.svg";
import idle from "../img/idle.svg";
import triangle_in_path from "../img/triangle_in_path.svg";
import task_open from "../img/task_open.svg";
import { getReadableDate } from "../components/utils";
import accepted_open from "../img/accepted_open.svg";
import task_escalated from "../img/escalated.svg";
import no_image from "../img/no_image.svg";
import ic_no_data_to_show from "../img/no_task.svg";
import SidePanel from "../../Components/SidePanel/SidePanel";

function AdminHome() {

    const [selectedFilterCode, setSelectedFilterCode] = useState("all")
    const taskListRef = useRef();
    const navigate = useNavigate();
    const [taskList, setTaskList] = useState(null)
    const [resultAfterTask, setResultAfterTask] = useState("")
    const [selectedEmpId, setSelectedEmpId] = useState("")
    const [selectedEmpName, setSelectedEmpName] = useState("")

    const [employeeList, setEmployeeList] = useState(null)

    const [showPopup, setShowPopup] = useState(false)

    const [nameOfFeature, setNameOfFeature] = useState("")


    // dummy data
    const taskListData = { "status": "get_opened_tasks_success", "opened_tasks_array": [{ "id": 43, "task_name": "al saad ", "task_description": "online order taking", "include_travel": "N", "job_name": "", "priority": "Moderate", "selected_date_time": "2024-02-27 18:03:00", "selected_selected_staff": "jinu", "selected_staff_id": "jinu25", "task_comes_under": "common_job", "task_type": "Inhouse", "latest_status": "OPEN", "latest_status_code": 0, "latest_stage": "NO_CHANGE", "latest_stage_code": 11, "created_at": "2024-02-24 18:04:02" }, { "id": 42, "task_name": "go sharjah", "task_description": "online app demo", "include_travel": "Y", "job_name": "", "priority": "Moderate", "selected_date_time": "2024-02-25 14:45:00", "selected_selected_staff": "jinu", "selected_staff_id": "jinu25", "task_comes_under": "common_job", "task_type": "Outdoor", "latest_status": "ACCEPTED_OPEN", "latest_status_code": 2, "latest_stage": "TRAVEL_START", "latest_stage_code": 5, "created_at": "2024-02-24 14:45:36" }, { "id": 41, "task_name": "software implemetation", "task_description": "to sharjah", "include_travel": "Y", "job_name": "", "priority": "Moderate", "selected_date_time": "2024-02-24 10:26:00", "selected_selected_staff": "akhil", "selected_staff_id": "akhil27", "task_comes_under": "common_job", "task_type": "Outdoor", "latest_status": "ESCALATED", "latest_status_code": 4, "latest_stage": "TASK_START", "latest_stage_code": 7, "created_at": "2024-02-23 10:27:13" }, { "id": 40, "task_name": "Al faiz software implementation ", "task_description": "Go to deira", "include_travel": "Y", "job_name": "", "priority": "Moderate", "selected_date_time": "2024-02-23 18:17:00", "selected_selected_staff": "akhil", "selected_staff_id": "akhil27", "task_comes_under": "common_job", "task_type": "Outdoor", "latest_status": "ACCEPTED_OPEN", "latest_status_code": 2, "latest_stage": "TASK_END", "latest_stage_code": 8, "created_at": "2024-02-22 18:17:51" }, { "id": 39, "task_name": "dummy", "task_description": "dummy", "include_travel": "Y", "job_name": "", "priority": "Moderate", "selected_date_time": "2024-02-22 17:17:00", "selected_selected_staff": "akhil", "selected_staff_id": "akhil27", "task_comes_under": "common_job", "task_type": "Outdoor", "latest_status": "OPEN", "latest_status_code": 0, "latest_stage": "NO_CHANGE", "latest_stage_code": 11, "created_at": "2024-02-22 17:17:21" }] }
    // dummy data


    const buttonClicked = (nameOfFeature) => {
        setShowPopup(prev => !prev)
        setNameOfFeature(nameOfFeature)
    }

    const closePopup = () => {
        setShowPopup(prev => !prev)
        setNameOfFeature("")
    }

    const callEmployeeListApi = () => {
        axios.get("https://cubixweberp.com:199/api/PersonalInfoList/CPAYS/ALL/YES/ALL/ALL/ALL/ALL").then((res) => {
            console.log("res is ", res)
            setEmployeeList(res.data)
        }).catch((err) => {
            console.log("error ", err)
        })
    }

    const getTaskListApi = () => {
        // axios.get(`${process.env.REACT_APP_BASE_URL}/view-task-list.php`).then((res) => {
        //     console.log("res is ", res)
        //     console.log(`${process.env.REACT_APP_BASE_URL}/view-task-list.php`)

        //     if (res.data.status == "get_opened_tasks_success") {
        //         setTaskList(res.data.opened_tasks_array)
        //         taskListRef.current = res.data.opened_tasks_array;
        //     }

        // }).catch((err) => {
        //     console.log("error ", err)
        // })
        setTaskList(taskListData.opened_tasks_array)
        taskListRef.current = taskListData.opened_tasks_array;
    }

    const clickedOnEmployeeName = (selectedEmpId, fromClick) => {
        setSelectedEmpId(selectedEmpId)
        setSelectedEmpName(fromClick)
    }

    const refreshHomepageList = () => {
        console.log("refreshHomepageList ")
        getTaskListApi()
    }



    const jobList = [
        {
            job_id: 1,
            job_name: "best auto parts software implementation",
            scheduled_start_date: "2024-01-10",
            scheduled_end_date: "2024-01-20",
            job_remarks: ""
        },
        {
            job_id: 2,
            job_name: "maha metals implementation ",
            scheduled_start_date: "2024-01-10",
            scheduled_end_date: "2024-01-20",
            job_remarks: ""
        }
    ]


    const clickedOnTaskRow = (clcikedTaskItemId) => {

        navigate(`/admin_task_details/${clcikedTaskItemId}`)

    }

    const getImageOfStage = (codeOfImage, statusCodeOfTask) => {

        if (statusCodeOfTask == 0) {
            return task_open;
        }
        else if (statusCodeOfTask == 1) {
            return task_complete;
        }

        else if (statusCodeOfTask == 3) {
            return task_hold;
        }
        else {
            switch (codeOfImage) {
                case 0:
                    return task_open;
                case 1:
                    return task_complete;

                case 3:
                    return task_hold;
                case 5:
                    return travel_start;
                case 6:
                    return travel_end
                case 7:
                    return task_started
                case 8:
                    return task_end
                case 10:
                    return idle
                default: return triangle_in_path
            }
        }
    }

    const getImageOfCode = (codeOfImage) => {

        console.log("code image ", codeOfImage)

        switch (codeOfImage) {
            case 0:
                return task_open;
            case 1:
                return task_complete;
            case 2:
                return accepted_open;
            case 3:
                return task_hold;
            case 4:
                return task_escalated;
            case 5:
                return travel_start;
            case 6:
                return travel_end
            case 7:
                return task_started
            case 8:
                return task_end

        }

    }

    const filterTask = (filterType, filterValue) => {

        console.log("filterType, filterValue ", filterType, filterValue)

        if (filterValue == "all") {

            console.log(" zcda ", taskListRef.current)
            setTaskList(taskListRef.current)
            setSelectedFilterCode(filterValue)

        } else {

            if (filterType == "status") {
                let filteredArray = taskListRef.current.filter((item) => {
                    return item.latest_status_code == filterValue
                })
                setTaskList(filteredArray)
                setSelectedFilterCode(filterValue)
            } else {
                let filteredArray = taskListRef.current.filter((item) => {
                    return item.latest_stage_code == filterValue
                })
                setTaskList(filteredArray)
                setSelectedFilterCode(filterValue)
            }

        }
    }

    const resetTaskList = () => {
        setTaskList(taskListRef.current)
    }

    useEffect(() => {

        callEmployeeListApi()
        getTaskListApi()

    }, [])


    // console.log(taskList)

    return (
        <div className="HomePage-root-container">


            <div className="HomePage-layer-2 ">
                <AdminHeader />

                <div className="TaskOverallWrapper">
                    <SidePanel item='taskHome' />

                    <div className="TaskAdminHomeCont">
                        {/* <div className="position-relative">

                            <img src={home_employee_bg_banner} className="top_image_banner" />

                            <div className="name_wrapper position-absolute h-100 w-100 top-0">

                                <div className="container pt-4">
                                    <div className="d-flex justify-content-center">
                                        <div>
                                            <img src={ic_user_image} />
                                        </div>
                                        <div className="ms-2">
                                            <div className="image_header">Salim</div>
                                            <p className="image_subtitle">HR Manager</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div> */}

                        <div className="main_container admin_home_container p-2">

                            <div className="d-flex justify-content-between mt-2">

                                <button className="btn btn-primary button-style" onClick={() => buttonClicked("create_task")}>New Task</button>

                                <div>
                                    <button className="btn btn-warning button-style">Create Job</button>
                                    <button className="btn btn-light button-style ms-2"><img className="view_job_list" src={ic_view_job_list} /></button>
                                    {/* <button className="btn btn-light ms-2" onClick={()=>navigate("/geofencing_settings")}>Geofencing Settings</button> */}

                                </div>

                            </div>

                            <div className="container">
                                <span className="status_icon_container mt-4">

                                    {console.log("selectedFilterCode ", selectedFilterCode)}
                                    <label className={selectedFilterCode == "all" ? "selected-filter-code all_label" : "all_label"} onClick={() => { filterTask("all", "all") }}>all</label>
                                    <label className={selectedFilterCode == 0 ? "selected-filter-code p-1" : "p-1"} onClick={() => { filterTask("status", 0) }}>
                                        <img src={task_open} />
                                    </label>
                                    <label className={selectedFilterCode == 2 ? "selected-filter-code p-1" : "p-1"} onClick={() => { filterTask("status", 2) }} >
                                        <img src={triangle_in_path} />
                                    </label>
                                    <label className={selectedFilterCode == 3 ? "selected-filter-code p-1" : "p-1"} onClick={() => { filterTask("status", 3) }} >
                                        <img src={task_hold} />
                                    </label>
                                    <label className={selectedFilterCode == 4 ? "selected-filter-code p-1" : "p-1"} onClick={() => { filterTask("status", 4) }} >
                                        <img src={task_escalated} />
                                    </label>
                                    <label className={selectedFilterCode == 5 ? "selected-filter-code p-1" : "p-1"} onClick={() => { filterTask("stage", 5) }}>
                                        <img src={travel_start} />
                                    </label>
                                    <label className={selectedFilterCode == 6 ? "selected-filter-code p-1" : "p-1"} onClick={() => { filterTask("stage", 6) }} >
                                        <img src={travel_end} />
                                    </label>
                                    <label className={selectedFilterCode == 7 ? "selected-filter-code p-1" : "p-1"} onClick={() => { filterTask("stage", 7) }} >
                                        <img src={task_started} />
                                    </label>
                                    <label className={selectedFilterCode == 8 ? "selected-filter-code p-1" : "p-1"} onClick={() => { filterTask("stage", 8) }} >
                                        <img src={task_end} />
                                    </label>
                                </span>
                            </div>

                            {
                                taskList?.length == 0 ?
                                    <div className="mt-4 pt-4">
                                        <h5 className="text-center mt-4">No tasks</h5>
                                        <img className="empty_image" src={ic_no_data_to_show} />
                                    </div>
                                    :

                                    <div>
                                        <div className="employee_list_container">

                                            <table className="task_list_table">

                                                <thead>
                                                    <tr className="heading-of-task-table">
                                                        <th><div>Name</div></th>
                                                        <th><div>Status & Stage</div></th>
                                                        <th><div>Created on</div></th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {

                                                        taskList != null && taskList.length > 0 &&
                                                        taskList.map((item) => {
                                                            return (

                                                                <tr onClick={() => clickedOnTaskRow(item.id)}>
                                                                    <td>
                                                                        <div className="d-flex align-items-center">
                                                                            <span>
                                                                                <img className="image_in_table" src={getImageOfCode(item.latest_status_code)} />
                                                                                {item.latest_stage_code != 11 ? <img className="image_in_table" src={getImageOfCode(item.latest_stage_code)} /> : <img className="image_in_table" src={no_image} />}
                                                                            </span>
                                                                            <div className="task_first_column_div">
                                                                                <div>
                                                                                    {item.task_name}
                                                                                </div>
                                                                                <div>
                                                                                    {item.task_description}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div>
                                                                            {item.latest_status}
                                                                        </div>
                                                                        <div>
                                                                            {item.latest_stage}
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div>
                                                                            {getReadableDate(item.created_at)}
                                                                        </div>
                                                                    </td>

                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>

                            }
                        </div>
                    </div>
                </div>

            </div>

            {
                showPopup &&

                <div className="popup_outer">
                    <div className="popup_inner ">


                        {
                            nameOfFeature == "request" &&
                            <CreateRequestPopup closepopup={closePopup} />
                        }

                        {
                            nameOfFeature == "leave_application" &&
                            <CreateLeaveRequestPopup closepopup={closePopup} />
                        }

                        {
                            nameOfFeature == "create_task" &&
                            <CreateTaskPopupNewVersion closepopup={closePopup} empId={selectedEmpId} empName={selectedEmpName} setResultAfterTask={setResultAfterTask} employeeList={employeeList} jobList={jobList} refreshHomepageList={refreshHomepageList} />
                        }
                    </div>
                </div>
            }

            {
                resultAfterTask.length > 0 &&
                <div className="popup_header_banner">
                    <div className="w-100 bg-success p-2 d-flex justify-content-center">
                        <label>Task Creation Success</label>
                        <button className="btn btn-warning py-0 ms-2" onClick={() => setResultAfterTask("")}>OK</button>
                    </div>
                </div>
            }


        </div >
    )

}

export default AdminHome;

