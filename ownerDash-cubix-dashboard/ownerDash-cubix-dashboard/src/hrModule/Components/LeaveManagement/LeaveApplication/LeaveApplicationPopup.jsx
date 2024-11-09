import React, { useEffect, useRef, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { base_url } from "../../../utils/AxiosConfig";
import axios from "axios";

let LeaveApplicationschema = Yup.object().shape({
  CmpCode: Yup.string(),

  EmpID: Yup.string(),
  Leave_Category: Yup.string(),
  ApplicationDAte: Yup.string(),
  FromDate: Yup.string(),
  ToDate: Yup.string(),
  NoOfDays: Yup.string(),
  Notes: Yup.string(),
  ApprovalSatus: Yup.string(),
  ApprovalBy: Yup.string(),
  ApprovalDate: Yup.string(),
  RejoinDate: Yup.string(),
  RejoinComments: Yup.string(),
  Ticket: Yup.string(),
  Approvalnote: Yup.string(),
  Designation: Yup.string(),
  CDL_Address: Yup.string(),
  CDL_Street: Yup.string(),
  CDL_City: Yup.string(),
  CDL_State: Yup.string(),
  CDL_Zip: Yup.string(),
  CDL_Phone: Yup.string(),
  CDL_Email: Yup.string(),
});

const LeaveApplicationPopup = ({ empPopup }) => {
  const [Data, setData] = useState();
  const fromDate = useRef();
  const toDate = useRef();
  const [Today, setToday] = useState();
  const [Value, setValue] = useState();
  const [FromDate, setFromDate] = useState();
  const [ToDate, setToDate] = useState();
  const [DiffDays, setDiffDays] = useState("0");
  const [LeaveData, setLeaveData] = useState();
  const [LeaveHistoryData, setLeaveHistoryData] = useState();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      CmpCode: "CPAYS",
      EmpID: empPopup.EmpId ? empPopup.EmpId : "",
      Leave_Category: "",
      // name: empPopup.Name?empPopup.Name :"",
      ApplicationDAte: Today,
      FromDate: FromDate || "",
      ToDate: ToDate || "",
      NoOfDays: DiffDays || "1",
      Notes: "",
      ApprovalSatus: "-",
      ApprovalBy: "HR Manager",
      ApprovalDate: "-",
      RejoinDate: "-",
      RejoinComments: "-",
      Ticket: "-",
      Approvalnote: "-",
      Designation: empPopup.JobTitle ? empPopup.JobTitle : "-",
      CDL_Address: "-",
      CDL_Street: "-",
      CDL_City: "-",
      CDL_State: "-",
      CDL_Zip: "-",
      CDL_Phone: "-",
      CDL_Email: "-",
    },
    validationSchema: LeaveApplicationschema,
    onSubmit: (values) => {
      console.log(values);
      setValue([values]);
    },
  });

  useEffect(() => {
    const LeaveHistory = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveStatusList/CPAYS/LEAVEHISTORY/${empPopup?.EmpId?empPopup?.EmpId:null}/${FromDate}/${ToDate}/-`
      );
      if (response?.data) {
        setLeaveHistoryData(response.data);

      } else {
        console.log("error");
      }
    };

    if(empPopup?.EmpId && FromDate && ToDate){
      LeaveHistory();
     }
   
    
  },  [empPopup?.EmpId,FromDate,ToDate])

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setToday(formattedDate);
  }, []);
  useEffect(() => {
    console.log(empPopup);
  }, [empPopup]);

  useEffect(() => {
    const startDateObj = new Date(FromDate);
    const endDateObj = new Date(ToDate);

    var Difference_In_Time = startDateObj - endDateObj;
    let Difference_In_Days = Math.floor(
      Difference_In_Time / (1000 * 60 * 60 * 24)
    );
    let difday = Math.abs(Difference_In_Days);
    setDiffDays(difday);
    console.log(difday);
  }, [FromDate, ToDate]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.post(
        `${base_url}PersonalInfoLeaveApplicationReg`,
        Value
      );
      if (response?.data) {
        setData(response.data);
        toast.success("Leave Application Send Successfully");
      } else {
        toast.error("Something Went Wrong");
      }
    };
    if (Value) {
      getData();
    }
  }, [Value]);

  useEffect(() => {
    const getLeave = async () => {
      const response = await axios.get(
        `${base_url}PersonalInfoLeaveCategoryList/CPAYS/ALL/-`
      );
      if (response?.data) {
        setLeaveData(response.data);
      } else {
        console.log("error");
      }
    };

    getLeave();
  }, []);

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
                Leave Application
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form action="" onSubmit={formik.handleSubmit}>
                <div className="add-form">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>Date of Request</td>
                        <td>
                          <input
                            type="text"
                            placeholder="Request Date"
                            className="form-control small-box"
                            onChange={formik.handleChange("ApplicationDAte")}
                            onBlur={formik.handleBlur("ApplicationDAte")}
                            value={formik.values.ApplicationDAte}
                            disabled
                          />
                        </td>
                        <td>Emp Id</td>
                        <td>
                          <input
                            type="text"
                            placeholder="Emp Id"
                            className="form-control small-box"
                            onChange={formik.handleChange("EmpID")}
                            onBlur={formik.handleBlur("EmpID")}
                            value={formik.values.EmpID}
                            disabled
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Emp Name</td>
                        <td>
                          <input
                            type="text"
                            placeholder="Emp Name"
                            className="form-control small-box"
                            onChange={formik.handleChange("name")}
                            onBlur={formik.handleBlur("name")}
                            value={empPopup.Name ? empPopup.Name : "-"}
                            disabled
                          />
                        </td>
                        <td>Designation</td>
                        <td>
                          <input
                            type="text"
                            placeholder="Designation"
                            className="form-control small-box"
                            onChange={formik.handleChange("Designation")}
                            onBlur={formik.handleBlur("Designation")}
                            value={formik.values.Designation}
                            disabled
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Leave From</td>
                        <td>
                          <input
                            type="text"
                            placeholder="Leave From"
                            ref={fromDate}
                            onFocus={() => (fromDate.current.type = "date")}
                            onBlur={() => (fromDate.current.type = "date")}
                            className="form-control small-box"
                            onChange={(e) => setFromDate(e.target.value)}
                          />
                        </td>
                        <td>Leave To</td>
                        <td>
                          <input
                            type="text"
                            placeholder="Leave To"
                            ref={toDate}
                            onFocus={() => (toDate.current.type = "date")}
                            onBlur={() => (toDate.current.type = "date")}
                            className="form-control small-box"
                            onChange={(e) => setToDate(e.target.value)}
                          />
                        </td>
                        <td>
                          <p className="text-danger">
                            <b> Days {DiffDays+1 ? DiffDays+1 : 0}</b>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>Leave Category</td>
                        <td>
                          <select
                            class="form-select "
                            aria-label="Default select example"
                            onChange={formik.handleChange("Leave_Category")}
                            onBlur={formik.handleBlur("Leave_Category")}
                            value={formik.values.Leave_Category}
                            placeholder="Leave Category"
                          >
                            <option selected="selected">Select Catgeory</option>
                            {LeaveData
                              ? LeaveData?.map((d, i) => (
                                  <>
                                    <option value={d?.name}>{d?.name}</option>
                                  </>
                                ))
                              : null}
                          </select>
                        </td>

                        <td>
                          <p className="text-primary">
                            <b>Availiable Days 896</b>
                          </p>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Leave Reason</td>
                        <td>
                          <input
                            type="text"
                            className="form-control small-box"
                            onChange={formik.handleChange("Notes")}
                            onBlur={formik.handleBlur("Notes")}
                            value={formik.values.Notes}
                          />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container-fluid">
                    <div className="row">
                      <p className="fs-small text-secondary">
                        Contact Information
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <div class="mb-3">
                            <label class="form-label fs-small text-secondary">
                              Address
                            </label>
                            <textarea
                              class="form-control"
                              placeholder="Address Here.."
                              onChange={formik.handleChange("CDL_Address")}
                              onBlur={formik.handleBlur("CDL_Address")}
                              value={formik.values.CDL_Address}
                            ></textarea>
                          </div>
                          <div class="mb-3">
                            <label class="form-label fs-small text-secondary">
                              Street Address
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={formik.handleChange("CDL_Street")}
                              onBlur={formik.handleBlur("CDL_Street")}
                              value={formik.values.CDL_Street}
                            />
                          </div>
                          <div class="mb-3">
                            <label class="form-label fs-small text-secondary">
                              ZIP/Postel Code
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              onChange={formik.handleChange("CDL_Zip")}
                              onBlur={formik.handleBlur("CDL_Zip")}
                              value={formik.values.CDL_Zip}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div class="mb-3">
                            <label
                              for="exampleInputEmail1"
                              class="form-label fs-small text-secondary"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={formik.handleChange("CDL_City")}
                              onBlur={formik.handleBlur("CDL_City")}
                              value={formik.values.CDL_City}
                            />
                          </div>

                          <div class="mb-3">
                            <label
                              for="exampleInputEmail1"
                              class="form-label fs-small text-secondary"
                            >
                              Phone Number
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              onChange={formik.handleChange("CDL_Phone")}
                              onBlur={formik.handleBlur("CDL_Phone")}
                              value={formik.values.CDL_Phone}
                            />
                          </div>
                          <div class="mb-3">
                            <label class="form-label fs-small text-secondary">
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              onChange={formik.handleChange("CDL_Email")}
                              onBlur={formik.handleBlur("CDL_Email")}
                              value={formik.values.CDL_Email}
                            />
                          </div>
                          <div class="mb-3">
                            <label class="form-label fs-small text-secondary">
                              State
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={formik.handleChange("CDL_State")}
                              onBlur={formik.handleBlur("CDL_State")}
                              value={formik.values.CDL_State}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <button className="dash-btn">
                      <IoIosAddCircleOutline />
                      &nbsp;Apply
                    </button>
                  </div>
                </div>
              </form>
              <div className="current-leavestatus mt-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveApplicationPopup;
