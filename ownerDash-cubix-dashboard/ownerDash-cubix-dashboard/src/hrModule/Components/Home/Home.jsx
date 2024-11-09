import React from "react";
// import Profile from "./HomeCards/Profile";
// import LeaveSummary from "./HomeCards/LeaveSummary/LeaveSummary";
// import LeaveRequest from "./HomeCards/LeaveRequest/LeaveRequest";
// import MyTask from "./HomeCards/MyTask/MyTask";
// import UpcomingBirthday from "./HomeCards/Birthdays/UpcomingBirthday";
import './Home.css'
import AdminCard from "../HomeComponents/AdminCard";
import LeaveSummary from "../HomeComponents/LeaveSummary";
import LeaveComparison from "../HomeComponents/LeaveComparison";
import Attendance from "../HomeComponents/Attendance";
import BirthDay from "../HomeComponents/BirthDay";
import EmpOnLeave from "../HomeComponents/EmpOnLeave";
import Approvals from "../HomeComponents/Approvals";
import AttendanceOverview from "../HomeComponents/AttendanceOverview";
import TaskForMe from "../HomeComponents/TaskForMe";
import QuickLink from "../HomeComponents/QuickLink";
import PendingJobs from "../HomeComponents/PendingJobs";
import WorkAnniversary from "../HomeComponents/WorkAnniversary";
import NewHires from "../HomeComponents/NewHires";
import SpecialAlerts from "../HomeComponents/SpecialAlerts";


const Home = () => {
  return (
    <>
     <div className='DashGridWrapper'>
    
    <div className='DashGridCont'>

        <div className='DashAdminCard'>
            <AdminCard />
        </div>
        <div className='DashLeaveSummary'>
            <LeaveSummary />
        </div>
        <div className='DashLeaveComparison'>
            <LeaveComparison />
        </div>
        <div className='DashAttendance'>
            <Attendance />
        </div>
        <div className='DashBirthDay'>
            <BirthDay />
        </div>
        <div className='DashEmpOnLeave'>
            <EmpOnLeave />
        </div>
        <div className='DashApprovals'>
            <Approvals />
        </div>
        <div className='DashAttendanceOver'>
            <AttendanceOverview />
        </div>
        <div className='DashGridMyTasks'>
            <TaskForMe taskAssigned='My Tasks' />
        </div>
        <div className='DashGridTasksByMe'>
            <TaskForMe taskAssigned='Task Assigned By Me' />
        </div>
        <div className='DashQuickLink'>
            <QuickLink />
        </div>
        <div className='DashPendingJobs'>
            <PendingJobs />
        </div>
        <div className='DashWorkAnniversary'>
            <WorkAnniversary anniversary='Work Anniversary' />
        </div>
        <div className='DashWeddingAnniversary'>
            <WorkAnniversary anniversary='Wedding Anniversary' />
        </div>
        <div className='DashNewHires'>
            <NewHires />
        </div>
        <div className='DashSpecialAlerts'>
            <SpecialAlerts />
        </div>
    </div>
</div>
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Profile />
          </div>
          <div className="col-md-4 ">
            <LeaveRequest />
            <LeaveRequest />
          </div>
          <div className="col-md-4 ">
            <MyTask />
            <MyTask />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <UpcomingBirthday />
          </div>
          <div className="col-md-8">
            <LeaveSummary />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
