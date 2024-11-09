import React, { useEffect, useState } from "react";
import "./topstyle.css";
import { AiOutlineLaptop, AiOutlineLogout } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/cubix-logo.png";
import { RxAvatar } from "react-icons/rx";
import { BsArrowDownCircle } from "react-icons/bs";
import { BsCalendar2Week } from "react-icons/bs";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { SiFampay } from "react-icons/si";
import { MdHolidayVillage } from "react-icons/md";
// import { RxAvatar } from "react-icons/rx";
import { IoMdMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";
import { BsCalendarEventFill } from "react-icons/bs";
import { GrTasks } from "react-icons/gr";
import { FaRegWindowClose } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

const SideBar = ({ opn, toggleShowSideBar  }) => {

  const [emp, setEmp] = useState(false);
  const [leave, setLeave] = useState(false);
  const [attendance, setAttendance] = useState(false);
  const [payroll, setPayroll] = useState(false);
  const [holiday, setHoliday] = useState(false);
  const [selected,setSelected] = useState('')

  const navigate = useNavigate()

  const location = useLocation();

  const goBack = () => {
    navigate('/admin/dashboard')
  }

  useEffect(()=>{
    if(location.pathname === '/hrModuleHome/home') {
      setSelected('dashboard')
    } else if(location.pathname === '/hrModuleHome/emp_list') {
      setSelected('empList')
    } else if(location.pathname === '/hrModuleHome/emp_reg') {
      setSelected('empReg')
    } else if(location.pathname === '/hrModuleHome/bigCalendar') {
      setSelected('events')
    } else if(location.pathname === '/hrModuleHome/taskGant') {
      setSelected('taskGant')
    } else if(location.pathname === '/hrModuleHome/leaveallotment') {
      setSelected('leaveAllott')
    } else if(location.pathname === '/hrModuleHome/leaveapplication') {
      setSelected('leaveApp')
    } else if(location.pathname === '/hrModuleHome/leaveapproval') {
      setSelected('leaveApproval')
    } else if(location.pathname === '/hrModuleHome/leaverejoin') {
      setSelected('leaveRejoin')
    } else if(location.pathname === '/hrModuleHome/leavecat') {
      setSelected('leaveCat')
    } else if(location.pathname === '/hrModuleHome/payroll') {
      setSelected('payroll')
    } else if(location.pathname === '/hrModuleHome/holiday') {
      setSelected('holidaySettings')
    } else if(location.pathname === '/hrModuleHome/atdcevaluation') {
      setSelected('evaluation')
    } else if(location.pathname === '/hrModuleHome/timesheet') {
      setSelected('timesheet')
    }
  },[])

  // console.log(location.pathname)
  return (
    <>
      <div className="side">

        {/* mobclose */}
        <div className="sideClose" onClick={toggleShowSideBar}>
        <FaRegWindowClose />
        </div>
        {/* mobclose */}

        <div className="container">
          {/* <div className="text-center main-head sideUserCont">
            <div className="sideUserAvatar">
              <RxAvatar style={{width:"50px",height:"50px"}}/>
            </div>
            <div className="sideUserDetails">
              <div style={{textAlign:"left"}}>Admin</div>
              <div className="sideUserOptions">
                <div><IoMdMail /></div>
                <div><FaUser /></div>
                <div><FaPowerOff /></div>
              </div>
            </div>

            <div className="sideGoBack" onClick={()=>goBack()}>Go Back</div>
          </div> */}

          <div className="menu-section ">
            <Link to={"home"}>
              <p className={selected === 'dashboard' ? `ps-2 sideSelected` : "ps-2"} onClick={() => setSelected('dashboard')}>
                <AiOutlineLaptop className={opn ? `fs-big` : "icon-home"} />{" "}
                <span className={opn ? `hide` : `clr-hvr`}>
                  {" "}
                  &nbsp;Dashboard
                </span>
              </p>
            </Link>
          </div>
          {/* <hr /> */}

          <div className="menu-section ">
            <p className={opn ? `text-center ` : "ps-2 "}>
              <RxAvatar className={opn ? `fs-big` : "icon-home"} />{" "}
              <span
                className={opn ? `hide` : `clr-hvr`}
                onClick={() => setEmp(emp === true ? false : true)}
              >
                {" "}
                &nbsp;Emp Management&nbsp;{" "}
                <BsArrowDownCircle className="ms-1" />
              </span>
            </p>
          </div>
          {/* <hr /> */}

          {emp ? (
            <>
              <div className="menu-section ms-3">
                <Link to={"emp_list"}>
                  <p className={selected === 'empList' ? `ps-2 sideSelected` : "ps-2"} onClick={()=>setSelected('empList')}>
                    {/* <FaRegCircleDot className={opn ? `fs-big` : "icon-home"} />{" "} */}
                    <span className={opn ? `hide` : `clr-hvr`}>
                      {" "}
                      &nbsp;Emp List
                    </span>
                  </p>
                </Link>
              </div>
              {/* <hr /> */}

              <div className="menu-section ms-3">
                <Link to={"emp_reg"}>
                  <p className={selected === 'empReg' ? `ps-2 sideSelected` : "ps-2"} onClick={()=>setSelected('empReg')}>
                    {/* <FaRegCircleDot className={opn ? `fs-big` : "icon-home"} />{" "} */}
                    <span className={opn ? `hide` : `clr-hvr`}>
                      {" "}
                      &nbsp;Emp Registration
                    </span>
                  </p>
                </Link>
              </div>
              {/* <hr /> */}

            </>
          ) : null}

          {/* <div className="menu-section ">
            <Link to={"bigCalendar"}>
              <p className={selected === 'events' ? `ps-2 sideSelected` : "ps-2"} onClick={() => setSelected('events')}>
                <BsCalendarEventFill className={opn ? `fs-big` : "icon-home"} />{" "}
                <span className={opn ? `hide` : `clr-hvr`}>
                  {" "}
                  &nbsp;Events
                </span>
              </p>
            </Link>
          </div> */}

          <div className="menu-section ">
            <Link to={"taskGant"}>
              <p className={selected === 'taskGant' ? `ps-2 sideSelected` : "ps-2"} onClick={() => setSelected('taskGant')}>
                <GrTasks className={opn ? `fs-big` : "icon-home"} />{" "}
                <span className={opn ? `hide` : `clr-hvr`}>
                  {" "}
                  &nbsp;Task View
                </span>
              </p>
            </Link>
          </div>

          <div className="menu-section ">
            <p className={opn ? `text-center ` : "ps-2 "}>
              <BsCalendar2Week className={opn ? `fs-big` : "icon-home"} />{" "}
              <span
                className={opn ? `hide` : `clr-hvr`}
                onClick={() => setLeave(leave === true ? false : true)}
              >
                {" "}
                &nbsp;Leave Management&nbsp;{" "}
                <BsArrowDownCircle className="ms-1" />
              </span>
            </p>
          </div>
          {/* <hr /> */}

          {leave ? (
            <>
              {/* <div className="menu-section ms-3">
                <Link to={"leavemanagement"}>
                  <p className={opn ? `text-center ` : "ps-2 "}>
                    // <FaRegCircleDot className={opn ? `fs-big` : "icon-home"} />{" "}
                    <span className={opn ? `hide` : `clr-hvr`}>
                      {" "}
                      &nbsp;Leave Allotment
                    </span>
                  </p>
                </Link>
              </div>
              <hr /> */}

              <div className="menu-section ms-3">
                <Link to={"leaveallotment"}>
                  <p className={selected === 'leaveAllott' ? `ps-2 sideSelected` : "ps-2"} onClick={()=>setSelected('leaveAllott')}>
                    {/* <FaRegCircleDot className={opn ? `fs-big` : "icon-home"} />{" "} */}
                    <span className={opn ? `hide` : `clr-hvr`}>
                      {" "}
                      &nbsp;Leave Allotment
                    </span>
                  </p>
                </Link>
              </div>
              {/* <hr /> */}

              <div className="menu-section ms-3">
                <Link to={"leaveapplication"}>
                  <p className={selected === 'leaveApp' ? `ps-2 sideSelected` : "ps-2"} onClick={()=>setSelected('leaveApp')}>
                    {/* <FaRegCircleDot className={opn ? `fs-big` : "icon-home"} />{" "} */}
                    <span className={opn ? `hide` : `clr-hvr`}>
                      {" "}
                      &nbsp;Leave Application
                    </span>
                  </p>
                </Link>
              </div>
              {/* <hr /> */}

              <div className="menu-section ms-3">
                <Link to={"leaveapproval"}>
                  <p className={selected === 'leaveApproval' ? `ps-2 sideSelected` : "ps-2"} onClick={()=>setSelected('leaveApproval')}>
                    {/* <FaRegCircleDot className={opn ? `fs-big` : "icon-home"} />{" "} */}
                    <span className={opn ? `hide` : `clr-hvr`}>
                      {" "}
                      &nbsp;Leave Approval
                    </span>
                  </p>
                </Link>
              </div>
              {/* <hr /> */}

              <div className="menu-section ms-3">
                <Link to={"leaverejoin"}>
                  <p className={selected === 'leaveRejoin' ? `ps-2 sideSelected` : "ps-2"} onClick={()=>setSelected('leaveRejoin')}>
                    {/* <FaRegCircleDot className={opn ? `fs-big` : "icon-home"} />{" "} */}
                    <span className={opn ? `hide` : `clr-hvr`}>
                      {" "}
                      &nbsp;Leave Rejoin
                    </span>
                  </p>
                </Link>
              </div>
              {/* <hr /> */}

              <div className="menu-section ms-3">
                <Link to={"leavecat"}>
                  <p className={selected === 'leaveCat' ? `ps-2 sideSelected` : "ps-2"} onClick={()=>setSelected('leaveCat')}>
                    {/* <FaRegCircleDot className={opn ? `fs-big` : "icon-home"} />{" "} */}
                    <span className={opn ? `hide` : `clr-hvr`}>
                      {" "}
                      &nbsp;Leave Category
                    </span>
                  </p>
                </Link>
              </div>
              {/* <hr /> */}
            </>
          ) : null}

          <div className="menu-section ">
            <p className={opn ? `text-center ` : "ps-2 "}>
              <SiFampay className={opn ? `fs-big` : "icon-home"} />{" "}
              <span
                className={opn ? `hide` : `clr-hvr`}
                onClick={() => setPayroll(payroll === true ? false : true)}
              >
                {" "}
                &nbsp;Payroll Management &nbsp;{" "}
                <BsArrowDownCircle className="ms-1" />
              </span>
            </p>
          </div>
          {/* <hr /> */}

          {payroll ? (
            <>
              <div className="menu-section ms-3">
                <Link to={"payroll"}>
                  <p className={selected === 'payroll' ? `ps-2 sideSelected` : "ps-2"} onClick={()=>setSelected('payroll')}>
                    {/* <FaRegCircleDot className={opn ? `fs-big` : "icon-home"} />{" "} */}
                    <span className={opn ? `hide` : `clr-hvr`}>
                      {" "}
                      &nbsp;Payroll
                    </span>
                  </p>
                </Link>
              </div>
              {/* <hr /> */}
            </>
          ) : null}

          <div className="menu-section ">
            <p className={opn ? `text-center ` : "ps-2 "}>
              <MdHolidayVillage className={opn ? `fs-big` : "icon-home"} />{" "}
              <span
                className={opn ? `hide` : `clr-hvr`}
                onClick={() => setHoliday(holiday === true ? false : true)}
              >
                {" "}
                &nbsp;Holiday Management &nbsp;{" "}
                <BsArrowDownCircle className="ms-1" />
              </span>
            </p>
          </div>
          {/* <hr /> */}

          {holiday ? (
            <>
              <div className="menu-section ms-3">
                <Link to={"holiday"}>
                  <p className={selected === 'holidaySettings' ? `ps-2 sideSelected` : "ps-2"} onClick={()=>setSelected('holidaySettings')}>
                    {/* <FaRegCircleDot className={opn ? `fs-big` : "icon-home"} />{" "} */}
                    <span className={opn ? `hide` : `clr-hvr`}>
                      {" "}
                      &nbsp;Holiday Settings
                    </span>
                  </p>
                </Link>
              </div>
              {/* <hr /> */}
            </>
          ) : null}

          <div className="menu-section ">
            <p className={opn ? `text-center ` : "ps-2 "}>
              <IoMdTime className={opn ? `fs-big` : "icon-home"} />{" "}
              <span
                className={opn ? `hide` : `clr-hvr`}
                onClick={() =>
                  setAttendance(attendance === true ? false : true)
                }
              >
                {" "}
                &nbsp;Attendance &nbsp; <BsArrowDownCircle className="ms-1" />
              </span>
            </p>
          </div>
          {/* <hr /> */}

          {attendance ? (
            <>
              {/* <div className="menu-section ms-3">
                <Link to={"leavemanagement"}>
                  <p className={opn ? `text-center ` : "ps-2 "}>
                    // <FaRegCircleDot className={opn ? `fs-big` : "icon-home"} />{" "}
                    <span className={opn ? `hide` : `clr-hvr`}>
                      {" "}
                      &nbsp;Leave Allotment
                    </span>
                  </p>
                </Link>
              </div>
              // <hr /> */}

              <div className="menu-section ms-3">
                <Link to={"atdcevaluation"}>
                  <p className={selected === 'evaluation' ? `ps-2 sideSelected` : "ps-2"} onClick={()=>setSelected('evaluation')}>
                    {/* <FaRegCircleDot className={opn ? `fs-big` : "icon-home"} />{" "} */}
                    <span className={opn ? `hide` : `clr-hvr`}>
                      {" "}
                      &nbsp;Evaluation
                    </span>
                  </p>
                </Link>
              </div>
              {/* <hr /> */}

              <div className="menu-section ms-3">
                <Link to={"timesheet"}>
                  <p className={selected === 'timesheet' ? `ps-2 sideSelected` : "ps-2"} onClick={()=>setSelected('timesheet')}>
                    {/* <FaRegCircleDot className={opn ? `fs-big` : "icon-home"} />{" "} */}
                    <span className={opn ? `hide` : `clr-hvr`}>
                      {" "}
                      &nbsp;TimeSheet
                    </span>
                  </p>
                </Link>
              </div>
              {/* <hr /> */}
            </>
          ) : null}

          {/* <p className="side-head">Authentication</p> */}
          {/* <div className="menu-section">
            <Link to={"/"}>
              <p className={opn ? `text-center ` : "ps-2 "}>
                <AiOutlineLogout className={opn ? `fs-big` : "icon-home"} />{" "}
                <span className={opn ? `hide` : `clr-hvr`}> &nbsp;Log Out</span>
              </p>
            </Link>
          </div> */}

          {/* <hr /> */}
        </div>
      </div>
    </>
  );
};

export default SideBar;
