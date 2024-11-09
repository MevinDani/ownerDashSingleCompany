import React, { useEffect, useState } from "react";
import ic_blue_cube from "../img/ic_blue_cube.png";
import "../css/Home.css";
import Header from "./Header";
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
import { useParams } from "react-router-dom";
import "../css/TaskDetailViewStaff.css";
import task_complete from "../img/task_complete.svg";
import travel_start from "../img/travel_start_in_path.svg";
import travel_end from "../img/travel_end_in_path.svg";
import task_started from "../img/task_start_in_path.svg";
import task_hold from "../img/task_end_in_path.svg";
import task_end from "../img/task_end.svg";
import idle from "../img/idle.svg";
import triangle_in_path from "../img/triangle_in_path.svg";
import task_open from "../img/task_open.svg";
import { getShortMonthNameDateFromDate, getReadableTimeWithHourMinute, getReadableDateYYYYMMDD } from "./utils";
import ic_dropdown from "../img/ic_down_dropdown.png";
import high_priority from "../img/high_priority.svg";
import medium_priority from "../img/medium_priority.svg";
import low_priority from "../img/low_priority.svg";
import task_escalated from "../img/escalated.svg";
import accepted_open from "../img/accepted_open.svg";
import "../css/CommonStyle.css";
import LoadingUI from "./LoadingUI";
import SidePanel from "../../Components/SidePanel/SidePanel";

function TaskDetailViewStaff() {

    const [isCallingTaskDetailsAPI, setIsCallingTaskDetailsAPI] = useState(false)
    const [isCallingTaskHistoryAPI, setIsCallingTaskHistoryAPI] = useState(false)
    const [isCallingTaskStatusStageEntry, setIsCallingTaskStatusStageEntry] = useState(false)

    const [inputDescription, setInputDescription] = useState("")
    const [showCodeListDropDown, setShowCodeListDropDown] = useState(false)
    const [codeList, setCodeList] = useState(null)
    const [currentPickedStatus, setCurrentPickedStatus] = useState(null)
    const [currentPickedStage, setCurrentPickedStage] = useState(null)
    const { id, userid, username } = useParams();

    console.log(" task id, ", id)

    const [taskList, setTaskList] = useState(null)
    const [historyTaskList, setHistoryTaskList] = useState(null)
    const [resultAfterTask, setResultAfterTask] = useState("")
    const [selectedEmpId, setSelectedEmpId] = useState("")
    const [selectedEmpName, setSelectedEmpName] = useState("")

    const [employeeList, setEmployeeList] = useState(null)

    const [showPopup, setShowPopup] = useState(false)

    const [nameOfFeature, setNameOfFeature] = useState("")

    // dummy data
    const taskListData = { "status": "get_opened_tasks_success", "opened_tasks_array": [{ "id": 38, "task_name": "Software implementation in IDS", "task_description": "Updated software ", "include_travel": "Y", "job_name": "", "priority": "Moderate", "selected_date_time": "2024-02-23 17:08:00", "selected_selected_staff": "akhil", "selected_staff_id": "akhil27", "task_comes_under": "common_job", "task_type": "Outdoor", "latest_status": "COMPLETE", "latest_status_code": 1, "latest_stage": "NO_CHANGE", "latest_stage_code": 11, "created_at": "2024-02-22 17:08:12" }] }
    const codeListData = { "status": "get_opened_tasks_success", "opened_tasks_array": [{ "id": 1, "code_name": "OPEN", "code_value": 0, "code_type": "status", "show_in_screen": "no", "created_on": "2024-02-16 12:51:54" }, { "id": 2, "code_name": "COMPLETE", "code_value": 1, "code_type": "status", "show_in_screen": "yes", "created_on": "2024-02-16 12:51:54" }, { "id": 3, "code_name": "ACCEPTED_OPEN", "code_value": 2, "code_type": "status", "show_in_screen": "yes", "created_on": "2024-02-16 12:55:55" }, { "id": 4, "code_name": "ACCEPTED_ON_HOLD", "code_value": 3, "code_type": "status", "show_in_screen": "yes", "created_on": "2024-02-16 12:55:55" }, { "id": 5, "code_name": "ESCALATED", "code_value": 4, "code_type": "status", "show_in_screen": "yes", "created_on": "2024-02-16 12:56:40" }, { "id": 6, "code_name": "TRAVEL_START", "code_value": 5, "code_type": "stage", "show_in_screen": "yes", "created_on": "2024-02-16 12:58:41" }, { "id": 7, "code_name": "TRAVEL_END", "code_value": 6, "code_type": "stage", "show_in_screen": "yes", "created_on": "2024-02-16 12:58:41" }, { "id": 8, "code_name": "TASK_START", "code_value": 7, "code_type": "stage", "show_in_screen": "yes", "created_on": "2024-02-16 12:59:07" }, { "id": 9, "code_name": "TASK_END", "code_value": 8, "code_type": "stage", "show_in_screen": "yes", "created_on": "2024-02-16 12:59:07" }, { "id": 10, "code_name": "ACCEPT_PENDING", "code_value": 9, "code_type": "status", "show_in_screen": "no", "created_on": "2024-02-16 13:07:50" }, { "id": 11, "code_name": "IDLE", "code_value": 10, "code_type": "status", "show_in_screen": "no", "created_on": "2024-02-16 16:14:43" }, { "id": 12, "code_name": "NO_CHANGE", "code_value": 11, "code_type": "stage", "show_in_screen": "no", "created_on": "2024-02-17 17:48:24" }, { "id": 13, "code_name": "DELETE", "code_value": 12, "code_type": "status", "show_in_screen": "no", "created_on": "2024-02-22 11:08:48" }, { "id": 14, "code_name": "NOT_ASSIGNED", "code_value": 13, "code_type": "status", "show_in_screen": "no", "created_on": "2024-02-22 11:12:17" }] }
    const historyData = { "status": "get_opened_tasks_success", "opened_tasks_array": [{ "id": 92, "task_id": 38, "task_status": "COMPLETE", "task_status_code": 1, "task_status_description": "", "task_stage": "NO_CHANGE", "task_stage_code": 11, "task_stage_description": "", "employee_name": "akhil", "employee_id": "akhil27", "created_at": "2024-02-22 17:14:01" }, { "id": 91, "task_id": 38, "task_status": "ACCEPTED_OPEN", "task_status_code": 2, "task_status_description": "Completed mplementation", "task_stage": "TASK_END", "task_stage_code": 8, "task_stage_description": "Completed mplementation", "employee_name": "akhil", "employee_id": "akhil27", "created_at": "2024-02-22 17:13:34" }, { "id": 90, "task_id": 38, "task_status": "ACCEPTED_OPEN", "task_status_code": 2, "task_status_description": "Started implementation", "task_stage": "TASK_START", "task_stage_code": 7, "task_stage_description": "Started implementation", "employee_name": "akhil", "employee_id": "akhil27", "created_at": "2024-02-22 17:13:15" }, { "id": 89, "task_id": 38, "task_status": "ACCEPTED_OPEN", "task_status_code": 2, "task_status_description": "", "task_stage": "TRAVEL_END", "task_stage_code": 6, "task_stage_description": "", "employee_name": "akhil", "employee_id": "akhil27", "created_at": "2024-02-22 17:12:45" }, { "id": 88, "task_id": 38, "task_status": "ACCEPTED_OPEN", "task_status_code": 2, "task_status_description": "Going to Al quoz IDS", "task_stage": "TRAVEL_START", "task_stage_code": 5, "task_stage_description": "Going to Al quoz IDS", "employee_name": "akhil", "employee_id": "akhil27", "created_at": "2024-02-22 17:09:12" }, { "id": 87, "task_id": 38, "task_status": "OPEN", "task_status_code": 0, "task_status_description": "", "task_stage": "NO_CHANGE", "task_stage_code": 11, "task_stage_description": "", "employee_name": "akhil", "employee_id": "akhil27", "created_at": "2024-02-22 17:08:12" }] }

    // dummy data


    const buttonClicked = (nameOfFeature) => {
        setShowPopup(prev => !prev)
        setNameOfFeature(nameOfFeature)
    }

    const closePopup = () => {
        setShowPopup(prev => !prev)
        setNameOfFeature("")
    }

    const handleInput = (e) => {
        setInputDescription(e.target.value)
    }

    const callEmployeeListApi = () => {
        axios.get("https://cubixweberp.com:156/api/PersonalInfoList/CPAYS/ALL/YES/ALL/ALL/ALL/ALL").then((res) => {
            console.log("res is ", res)
            setEmployeeList(res.data)
        }).catch((err) => {
            console.log("error ", err)
        })
    }

    const getTaskListApi = () => {

        setIsCallingTaskDetailsAPI(true)
        // axios.get(`${process.env.REACT_APP_BASE_URL}/view-single-task-details.php?id=${id}`).then((res) => {
        //     console.log("res is ", res)

        //     setIsCallingTaskDetailsAPI(false)

        //     if (res.data.status == "get_opened_tasks_success") {
        //         setTaskList(res.data.opened_tasks_array)
        //     }

        // }).catch((err) => {

        //     setIsCallingTaskDetailsAPI(false)
        //     console.log("error ", err)
        // })
        setTaskList(taskListData.opened_tasks_array)
        setIsCallingTaskDetailsAPI(false)
    }

    const getCodeList = () => {
        // axios.get(`${process.env.REACT_APP_BASE_URL}/get-code-list.php`).then((res) => {
        //     console.log("res is ", res)

        //     if (res.data.status == "get_opened_tasks_success") {
        //         setCodeList(res.data.opened_tasks_array)
        //     }

        // }).catch((err) => {
        //     console.log("error ", err)
        // })

        setCodeList(codeListData.opened_tasks_array)
    }

    const clickedOnStatusButton = () => {
        setShowCodeListDropDown(prev => !prev)
    }


    const getHistoryOfTaskApi = () => {

        setIsCallingTaskHistoryAPI(true);

        // axios.get(`${process.env.REACT_APP_BASE_URL}/history-of-single-task.php?id=${id}`).then((res) => {
        //     console.log("res is ", res)

        //     setIsCallingTaskHistoryAPI(false);

        //     if (res.data.status == "get_opened_tasks_success") {
        //         setHistoryTaskList(res.data.opened_tasks_array)
        //     }

        // }).catch((err) => {
        //     setIsCallingTaskHistoryAPI(false);
        //     console.log("error ", err)
        // })

        setHistoryTaskList(historyData.opened_tasks_array)
        setIsCallingTaskHistoryAPI(false);
    }

    const clickedOnEmployeeName = (selectedEmpId, fromClick) => {
        setSelectedEmpId(selectedEmpId)
        setSelectedEmpName(fromClick)
    }

    const resetEntry = () => {
        setInputDescription("")
        setCurrentPickedStatus(null)
        setCurrentPickedStage(null)
    }

    useEffect(() => {

        callEmployeeListApi()
        getTaskListApi()
        getHistoryOfTaskApi()
        getCodeList()

    }, [])

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


    const getImageOfCode = (codeOfImage) => {


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

    const getPriorityImage = (priorityValue) => {

        switch (priorityValue) {
            case "Low":
                return low_priority;
            case "Moderate":
                return medium_priority;
            case "High":
                return high_priority;
        }
    }

    const clickedOnSave = () => {


        //check if latest 

        // NO_CHANGE means no value is there for that status or code

        const username = localStorage.getItem("cubix_taskify_username")
        const userId = localStorage.getItem("cubix_taskify_userid")


        let objectForAPI = {
            input_task_id: id,
            input_task_status: currentPickedStatus != null ? currentPickedStatus.code_name : taskList[0].latest_status,
            input_task_status_code: currentPickedStatus != null ? currentPickedStatus.code_value : taskList[0].latest_status_code,
            input_task_status_description: inputDescription,
            input_task_stage: currentPickedStage != null ? currentPickedStage?.code_name : taskList[0].latest_stage,
            input_task_stage_code: currentPickedStage != null ? currentPickedStage?.code_value : taskList[0].latest_stage_code,
            input_task_stage_description: inputDescription,
            input_employee_name: username,
            input_employee_id: userId
        }

        console.log(" object to api ", objectForAPI)

        setIsCallingTaskStatusStageEntry(true)

        axios.post(`${process.env.REACT_APP_BASE_URL}/edit-task.php`, objectForAPI).then((res) => {

            setIsCallingTaskStatusStageEntry(false)

            if (res.data == "success") {

                // get task_table and task_history
                getTaskListApi()
                getHistoryOfTaskApi()
                resetEntry()

            } else {

            }

        }).catch((err) => {

            setIsCallingTaskStatusStageEntry(false)

        })
    }

    const clickedOnStatusChip = (item) => {

        // in case of status only
        // put some logic then change the status
        // change status only if task end is the selected stage 
        setCurrentPickedStatus(item)
    }

    return (


        <div className="HomePage-root-container">

            {
                console.log("currentPickedStatus , currentPickedStage ", currentPickedStatus, currentPickedStage)
            }

            <div className="HomePage-layer-2 ">
                <Header />

                <div className="TaskOverallWrapper">
                    <SidePanel item='taskHome' />

                    <div className="TaskAdminHomeCont">
                        <div className="position-relative">

                            <img src={home_employee_bg_banner} className="top_image_banner" />

                            <div className="name_wrapper position-absolute h-100 w-100 top-0">

                                <div className="container pt-4">
                                    <div className="d-flex justify-content-center">
                                        <div>
                                            <img src={ic_user_image} />
                                        </div>
                                        <div className="ms-2">
                                            <div className="image_header">Salim</div>
                                            <p className="image_subtitle">Sales Department</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <h5 className="container mt-4">Task Details</h5>

                        {
                            isCallingTaskDetailsAPI ?

                                <div className="common_loader mt-4">
                                    <div class="spinner-border text-success" role="status">

                                    </div>
                                    <span class="sr-only">Loading...</span>
                                </div>
                                :
                                <div className="main_container mt-2 p-2 container">

                                    <div>
                                        <div>
                                            <label className="history_label">task name</label>
                                            <p>
                                                {taskList?.[0]?.task_name}
                                            </p>
                                        </div>
                                        <div>
                                            <label className="history_label">task description</label>
                                            <p>
                                                {taskList?.[0]?.task_description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="taskview_details_grid mt-2">


                                        <div>
                                            <label className="history_label">travel included</label>
                                            <p>
                                                {taskList?.[0]?.include_travel == "Y" ? "Yes" : "No"}
                                            </p>
                                        </div>


                                        {
                                            taskList?.[0]?.task_comes_under == "particular_job" ?
                                                <div>
                                                    <label className="history_label">job details</label>
                                                    <p>
                                                        {taskList?.[0]?.job_name}
                                                    </p>
                                                </div>
                                                :
                                                null
                                        }


                                        <div>
                                            <label className="history_label">priority</label>
                                            <p>
                                                <img className="me-2 prioriy_image" src={getPriorityImage(taskList?.[0]?.priority)} />
                                                {taskList?.[0]?.priority}
                                            </p>
                                        </div>


                                        <div>
                                            <label className="history_label">task start date </label>
                                            <p>
                                                {taskList?.[0]?.selected_date_time}
                                            </p>
                                        </div>

                                        <div>
                                            <label className="history_label">task assigned to </label>
                                            <p>
                                                {taskList?.[0]?.selected_selected_staff}
                                            </p>
                                        </div>


                                        <div>
                                            <label className="history_label">task type </label>
                                            <p>
                                                {taskList?.[0]?.task_type}
                                            </p>
                                        </div>



                                    </div>

                                    {/* task acceptance area */}
                                    <div className="container">




                                        {/* new way to show status and stage */}
                                        <div className="status_and_stage_container">

                                            <span className="d-flex flex-column justify-content-between">

                                                <h6>select status</h6>
                                                <div className="d-flex flex-wrap">
                                                    {
                                                        codeList?.filter((item) => {
                                                            return item.code_type == "status" && item.show_in_screen == "yes"
                                                        }).map((item) => {
                                                            return <label className={currentPickedStatus?.code_value == item.code_value ? " TaskDetailViewStaff-selected-chip TaskDetailView-status-chip" : "TaskDetailView-status-chip"} onClick={() => clickedOnStatusChip(item)}> <img className="TaskDetailViewStaff-image-inside-chip me-1" src={getImageOfCode(item.code_value)} /> {item.code_name}</label>
                                                        })
                                                    }
                                                </div>

                                                <h6 className="mt-3">select stage</h6>
                                                <div className="d-flex flex-wrap">
                                                    {
                                                        codeList?.filter((item) => {
                                                            return item.code_type == "stage" && item.show_in_screen == "yes"
                                                        }).filter((itemTravelFinder) => {
                                                            if (taskList?.[0]?.include_travel == "Y") {
                                                                return itemTravelFinder
                                                            } else {
                                                                console.log("else of code value", itemTravelFinder.code_value)
                                                                // if (itemTravelFinder.code_value != 5 || itemTravelFinder.code_value != 6){

                                                                // }
                                                                return itemTravelFinder.code_value != 5 && itemTravelFinder.code_value != 6
                                                            }
                                                        }).map((item) => {
                                                            return <label className={currentPickedStage?.code_value == item.code_value ? " TaskDetailViewStaff-selected-chip TaskDetailView-status-chip" : "TaskDetailView-status-chip"} onClick={() => setCurrentPickedStage(item)}><img className="TaskDetailViewStaff-image-inside-chip me-1" src={getImageOfCode(item.code_value)} /> {item.code_name}</label>
                                                        })
                                                    }
                                                </div>

                                                <div className="d-flex justify-content-between align-items-baseline">
                                                    <input className="input_description mt-3 me-2 w-100" placeholder="Enter description" onChange={(e) => handleInput(e)} />
                                                    <button className="btn btn-primary mt-4" onClick={() => clickedOnSave()}>Save</button>
                                                </div>
                                            </span>
                                        </div>


                                    </div>

                                </div>
                        }

                        <h5 className="container mt-4">Task timeline</h5>

                        {
                            isCallingTaskHistoryAPI ?

                                <div className="common_loader">
                                    <div class="spinner-border text-success" role="status">

                                    </div>
                                    <span class="sr-only">Loading...</span>
                                </div>

                                :

                                <div className="container mt-4 pb-4">
                                    {
                                        historyTaskList?.map((historyItemRow) => {
                                            return (

                                                <div className="history_list_item_single_wrapper">
                                                    <div className="d-flex">
                                                        <img className="history_line_path_icon" src={getImageOfCode(historyItemRow.task_status_code)} />
                                                        {
                                                            historyItemRow.task_stage != "NO_CHANGE" && <img className="history_line_path_icon" src={getImageOfCode(historyItemRow.task_stage_code)} />
                                                        }

                                                    </div>

                                                    <div className="d-flex flex-column">
                                                        <div className="date_time_label_chip">
                                                            <span className="history_label_date_time">{getShortMonthNameDateFromDate(historyItemRow.created_at)}</span>
                                                            <span className="history_label_date_time">{getReadableTimeWithHourMinute(historyItemRow.created_at)}</span>
                                                        </div>

                                                        <div className="status_stage_card">
                                                            <div className="task_history_single_item position-relative">

                                                                {
                                                                    historyItemRow.task_status != "NO_CHANGE" ?
                                                                        <>
                                                                            <div>
                                                                                {historyItemRow.task_status}
                                                                            </div>
                                                                            <div>
                                                                                {historyItemRow.task_status_description}
                                                                            </div>
                                                                        </>
                                                                        :
                                                                        null
                                                                }



                                                                {
                                                                    historyItemRow.task_stage != "NO_CHANGE" ?
                                                                        <>
                                                                            <div>
                                                                                {historyItemRow.task_stage}
                                                                            </div>
                                                                            <div>
                                                                                {historyItemRow.task_stage_description}
                                                                            </div>
                                                                        </>
                                                                        :
                                                                        null
                                                                }



                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        })
                                    }

                                </div>
                        }
                    </div>
                </div>


            </div>

            {
                isCallingTaskStatusStageEntry &&
                <LoadingUI />
            }

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
                            <CreateTaskPopupNewVersion closepopup={closePopup} empId={selectedEmpId} empName={selectedEmpName} setResultAfterTask={setResultAfterTask} employeeList={employeeList} jobList={jobList} />
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

export default TaskDetailViewStaff;

