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

function MyCompletedTask(props) {

    const { id } = props;
    const navigate = useNavigate();

    const [taskList, setTaskList] = useState(null)
    const [resultAfterTask, setResultAfterTask] = useState("")
    const [selectedEmpId, setSelectedEmpId] = useState("")
    const [selectedEmpName, setSelectedEmpName] = useState("")

    const [employeeList, setEmployeeList] = useState(null)

    const [showPopup, setShowPopup] = useState(false)

    const [nameOfFeature, setNameOfFeature] = useState("")


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

        let userId = localStorage.getItem("cubix_taskify_userid")

        axios.get(`${process.env.REACT_APP_BASE_URL}/view-my-completed-task-list.php?id=${userId}`).then((res) => {
            console.log("res is ", res)

            if (res.data.status == "get_opened_tasks_success") {
                setTaskList(res.data.opened_tasks_array)
            } else {
                setTaskList(res.data)
            }

        }).catch((err) => {
            console.log("error ", err)
        })
    }

    const clickedOnEmployeeName = (selectedEmpId, fromClick) => {
        setSelectedEmpId(selectedEmpId)
        setSelectedEmpName(fromClick)
    }

    useEffect(() => {

        callEmployeeListApi()
        getTaskListApi()

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


    const clickedOnTaskRow = (clickedTasKid) => {

        let userId = localStorage.getItem("cubix_taskify_userid")
        let userName = localStorage.getItem("cubix_taskify_username")

        // navigate(`/task_details/${clickedTasKid}/${userId}/${userName}`)
        navigate(`/task_details/${clickedTasKid}`)

        console.log(`/task_details/${clickedTasKid}`)

    }

    return (
        <div className="HomePage-root-container">


            <div className="HomePage-layer-2 ">
                <Header />

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

                <div className="main_container p-2 container">

                    <div className="mt-2">

                        <h5>My Completed Task</h5>

                        <table className="task_list_table">
                            <thead>
                                <tr>
                                    <th><div>Name</div></th>
                                    <th><div>Description</div></th>
                                    <th><div>Latest Status</div></th>
                                    <th><div>Latest Stage</div></th>
                                </tr>
                            </thead>

                            <tbody>
                                {

                                    taskList != null &&
                                    taskList.map((item) => {
                                        return (

                                            <tr onClick={() => clickedOnTaskRow(item.id)}>
                                                <td>
                                                    <div>
                                                        {item.task_name}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {item.task_description}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {item.latest_status}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {item.latest_stage}
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

export default MyCompletedTask;

