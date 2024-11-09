import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import { format } from 'date-fns';

let leaveStatusSchema = Yup.object().shape({
  CmpCode: Yup.string(),
  approvalNotes: Yup.string(),
  ticketStatus: Yup.string(),
  userName: Yup.string(),
});
const ApprovePopup = ({ PopUpData, reloadApi }) => {
  
  const [Data, setData] = useState();
  const [LeaveStatusData, setLeaveStatusData] = useState();
  const [FromDate, setFromDate] = useState();
  const [ToDate, setToDate] = useState();
    const [LeaveHistoryData, setLeaveHistoryData] = useState();
    const [LeaveHistoryOtherData, setLeaveHistoryOtherData] = useState();
  const [Approved, setApproved] = useState(false);
  const [Rejected, setRejected] = useState(false);
 
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      CmpCode: "CPAYS",
      SerialNo: PopUpData?.SerialNo,
      approvalNotes: "",
      ticketStatus: "",
      userName: "Hr Manager",
    },
    validationSchema: leaveStatusSchema,
    onSubmit: (values) => {
      // console.log(values);
      setData(values);
    },
  });

  useEffect(() => {
  //  console.log(dateObject)
  const dateObjectFrom = new Date(PopUpData?.FromDate?PopUpData?.FromDate:null);
  const formattedDateFrom = format(dateObjectFrom, 'yyyy-MM-dd');
    // console.log(formattedDateFrom)
    setFromDate(formattedDateFrom)

  }, [PopUpData?.FromDate])

  useEffect(() => {
    //  console.log(dateObject)
    const dateObjectTo = new Date(PopUpData?.ToDate
      ?PopUpData?.ToDate
      :null);
    const formattedDateTo = format(dateObjectTo, 'yyyy-MM-dd');
      // console.log(formattedDateTo)
      setToDate(formattedDateTo)
  // console.log(PopUpData)
    }, [PopUpData?.ToDate])
  

  useEffect(() => {
    const LeaveHistoryOther = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveStatusList/CPAYS/LEAVEHISTORYOTHER/${PopUpData?.EmpId?PopUpData?.EmpId:null}/${FromDate}/${ToDate}/-`
      );
      if (response?.data) {
        setLeaveHistoryOtherData(response.data);

      } else {
        console.log("error");
      }
    };

    if(PopUpData?.EmpId){
      LeaveHistoryOther();
     }
    
    
  }, [PopUpData?.EmpId,FromDate,ToDate])
  

  useEffect(() => {
    const LeaveStatus = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveStatusList/CPAYS/LEAVESTATUS/${PopUpData?.EmpId?PopUpData?.EmpId:null}/${FromDate}/${ToDate}/-`
      );
      if (response?.data) {
        setLeaveStatusData(response.data);

      } else {
        console.log("error");
      }
    };

   if(PopUpData?.EmpId){
    LeaveStatus();
   }
     
    
  }, [PopUpData?.EmpId,FromDate,ToDate])

  useEffect(() => {
    const LeaveHistory = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveStatusList/CPAYS/LEAVEHISTORY/${PopUpData?.EmpId?PopUpData?.EmpId:null}/${FromDate}/${ToDate}/-`
      );
      if (response?.data) {
        setLeaveHistoryData(response.data);

      } else {
        console.log("error");
      }
    };

    if(PopUpData?.EmpId){
      LeaveHistory();
     }
   
    
  },  [PopUpData?.EmpId,FromDate,ToDate])


  useEffect(() => {
    const LeaveHistory = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveStatusList/CPAYS/LEAVEHISTORY/${PopUpData?.EmpId?PopUpData?.EmpId:null}/${FromDate}/${ToDate}/-`
      );
      if (response?.data) {
        setLeaveHistoryData(response.data);

      } else {
        console.log("error");
      }
    };

    if(PopUpData?.EmpId){
      LeaveHistory();
     }
   
    
    
  },  [PopUpData?.EmpId,FromDate,ToDate])
  

  useEffect(() => {
    const postData = async () => {
      const response = await axios.post(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveStatusUpdate/CPAYS/APPROVED/${
          PopUpData?.serialcode
          ? PopUpData?.serialcode
          : null
        }/${Data?.userName}/${Data?.ticketStatus}/${Data?.approvalNotes}`
      );
      if (response?.data) {
        setData(response.data);
        toast.success("Approved Successfull");
        setApproved(false)
      } else {
        console.log("error");
      }
    };

    if (Approved===true) {
      postData();
    }
  }, [Data, PopUpData?.SerialNo, Approved]);

  useEffect(() => {
    const postData = async () => {
      const response = await axios.post(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveStatusUpdate/CPAYS/REJECTED/${
          PopUpData?.serialcode
          ? PopUpData?.serialcode
          : null
        }/${Data?.userName}/${Data?.ticketStatus}/${Data?.approvalNotes}`
      );
      if (response?.data) {
        setData(response.data);
        toast.success("Leave Rejected ");
        setRejected(false)
      } else {
        console.log("error");
      }
    };

    if (Rejected===true) {
      postData();
    }
  }, [Data, PopUpData?.serialcode
    , Rejected]);

  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Status Update
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={reloadApi(true)}

              ></button>
            </div>
            <div class="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="current-leavestatus mt-2">
                    <p className="fs-small text-secondary">
                      Current Leave Status Of Employee
                    </p>
                    <table class="table">
                      <tbody>
                        <tr className="">
                          <td>Si No</td>
                          <td>Leave Category</td>
                          <td>Alloted</td>
                          <td>Consumed</td>
                          <td>Balance</td>
                        </tr>
                        {LeaveStatusData
              ? LeaveStatusData?.map((d, i) => (
                  <tr key={i} className="dataTr">
                    <td>{i + 1}</td>
                    <td>{d?.LEAVECATEGORY}</td>
                    <td>{d?.ALLOTED}</td>
                    <td>{d?.CONSUMED}</td>
                    <td>{d?.Balance}</td>
                    
                  
                  </tr>
                ))
              : null}
                      
                      </tbody>
                    </table>
                  </div>

                
                </div>

                <div className="col-md-6">
                  <form onSubmit={formik.handleSubmit}>
                    <div class="mb-3 mt-2">
                      <label
                        for="exampleInputEmail1"
                        class="form-label fs-small text-secondary"
                      >
                        Flight Ticket{" "}
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        name="ticketStatus"
                        onBlur={formik.handleBlur("ticketStatus")}
                        value={formik.values.ticketStatus}
                        onChange={formik.handleChange("ticketStatus")}
                      >
                        <option selected>Not Applicable</option>
                        <option value="One Way">One Way</option>
                        <option value="Two Way">Two Way</option>
                        {/* <option value="3">Three</option> */}
                      </select>
                    </div>
                    <div class="mb-3">
                      <label
                        for="exampleInputPassword1"
                        class="form-label fs-small text-secondary"
                      >
                        Notes
                      </label>
                      <div class="form-floating">
                        <textarea
                          class="form-control"
                          placeholder="Leave a comment here"
                          id="floatingTextarea"
                          name="approvalNotes"
                          onBlur={formik.handleBlur("approvalNotes")}
                          value={formik.values.approvalNotes}
                          onChange={formik.handleChange("approvalNotes")}
                        ></textarea>
                        <label for="floatingTextarea">Your Notes Here</label>
                      </div>
                    </div>

                    <div className="text-end mt-4">
                      <button
                        type="submit"
                        class="btn btn-primary geen-btn"
                        onClick={() => setApproved(true)}
                      >
                        Approved
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button
                        type="submit"
                        class="btn btn-primary red-btn"
                        onClick={() => setRejected(true)}
                      >
                        Rejected
                      </button>
                    </div>
                  </form>
                  <div className="current-leavestatus mt-4 scroll h-auto" style={{maxHeight:"250px"}}>
                    <p className="fs-small text-secondary">
                      Leave History of Employee
                    </p>
                    <table class="table">
                      <tbody>
                        <tr className="">
                          <td>Si No</td>
                          <td>Leave Type</td>
                          <td>From Dt</td>
                          <td>To Dt</td>
                          <td>Leaves</td>
                          <td>Rejoin </td>
                          <td>Status</td>
                          <td>Ticket</td>
                        </tr>
                        {LeaveHistoryData
              ? LeaveHistoryData?.map((d, i) => (
                  <tr key={i} className="dataTr">
                    <td>{i + 1}</td>
                    <td>{d?.Leave_Type}</td>
                    <td>{d['FROM-DT']}</td>
                    <td>{d['TO-DATE']}</td>
                    <td>{d?.LEAVES}</td>
                    <td>{d?.Re_joinOn}</td>
                    <td>{d?.Status}</td>
                    <td>{d?.Ticket}</td>
                  
                  </tr>
                ))
              : null}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="otheremp-table mt-4 scroll h-auto" style={{maxHeight:"250px"}}>
                  <p className="fs-small text-secondary">
                    Other Employees Approved Leaves in the selected Period
                  </p>
                  <table class="table">
                    <tbody>
                      <tr className="">
                        <td>Si No</td>
                        <td>Emp Id</td>
                        <td>Name</td>
                        <td>Job Title</td>
                        <td>Leave Name</td>
                        <td>Application Date</td>
                        <td>Leave From </td>
                        <td>Leave to</td>
                      </tr>
                      {LeaveHistoryOtherData
              ? LeaveHistoryOtherData?.map((d, i) => (
                  <tr key={i} className="dataTr">
                    <td>{i + 1}</td>
                    <td>{d?.EmpId}</td>
                    <td>{d?.Name}</td>
                    <td>{d?.JobTitle}</td>
                    <td>{d?.Leave_Name}</td>
                    <td>{d?.ApplicationDate}</td>
                    <td>{d?.Leave_From}</td>
                    <td>{d?.Leave_To}</td>
                    
                  </tr>
                ))
              : null}
                   
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovePopup;
