import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { IoDocumentsOutline } from "react-icons/io5";
import { MdAddCircleOutline, MdContactEmergency } from "react-icons/md";
import { GiThreeLeaves } from "react-icons/gi";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import CreateAllowancePopup from "./CreateAllowancePopup";
import { base_url } from "../../../utils/AxiosConfig";
import { FaFilePdf } from "react-icons/fa6";
import { usePDF } from "react-to-pdf";

const ViewEmp = () => {
  const { toPDF, targetRef } = usePDF({ filename: "EmpDetails.pdf" });
  const [Data, setData] = useState();
  const [AllowanceData, setAllowanceData] = useState(null);
  const [IncrementData, setIncrementData] = useState(null);
  console.log(Data?.EmpId ? Data.EmpId : null);
  const location = useLocation();
  const getEmpid = location.pathname.split("/")[4];

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `${base_url}PersonalInfoList/CPAYS/SINGLE/YES/${getEmpid}/ALL/ALL/ALL`
      );
      if (response?.data) {
        setData(response.data[0]);
      } else {
        console.log("error");
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const getAllwance = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoAllowanceList/CPAYS/${getEmpid}`
      );
      if (response?.data) {
        setAllowanceData(response.data);
      } else {
        console.log("error");
      }
    };

    getAllwance();
  }, []);

  useEffect(() => {
    const getInc = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoIncrementList/CPAYS/${getEmpid}`
      );
      if (response?.data) {
        setIncrementData(response.data);
      } else {
        console.log("error");
      }
    };

    getInc();
  }, []);

  return (
    <>
      {Data ? (
        <>
          <div className="container-fluid mb-5 " ref={targetRef}>
            <div className="row">
              <div className="col-md-6">
                <h6 className="mb-2 head-text">Emp Details</h6>
              </div>
              <div className="col-md-6 text-end">
              <FaFilePdf  onClick={() => toPDF()}/>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={`/admin/emp_list/emp_edit/${getEmpid}`}>
                  {" "}
                  
                  <FaRegEdit className="text-secondary" />
                </Link>
              </div>
            </div>

            <table class="table border mt-2">
              <tbody>
                <tr className="dataTr">
                  <td>Cmp Code</td>
                  <td>1313464</td>
                </tr>
                <tr className="dataTr">
                  <td>Emp Id</td>
                  <td>{Data?.EmpId ? Data?.EmpId : "-"}</td>
                </tr>
                <tr className="dataTr">
                  <td>Alternate Id</td>
                  <td>{Data?.AlternateID ? Data?.AlternateID : "-"}</td>
                </tr>
                <tr className="dataTr">
                  <td>Status</td>
                  <td>{Data?.Status ? Data?.Status : "-"}</td>
                </tr>
              </tbody>
            </table>

            <div className="personal">
              <h6 className="mb-2 sub-head mt-3">
                <IoIosPerson />
                &nbsp;Personal
              </h6>

              <table class="table border mt-2">
                <tbody className="BodyTrTd">
                  <tr>
                    <td>First Name</td>
                    <td>{Data?.FistName ? Data?.FistName : "-"}</td>

                    <td>Middle Name</td>
                    <td>{Data?.MiddleName ? Data?.MiddleName : "-"}</td>

                    <td>LastName</td>
                    <td>{Data?.LastName ? Data?.LastName : "-"}</td>
                  </tr>
                  <tr>
                    {/* <td>Middle Name</td>
                <td>- </td> */}
                    <td>DOB</td>
                    <td>{Data?.DOB ? Data?.DOB : "-"}</td>
                    <td>Gender</td>
                    <td>{Data?.Gender ? Data?.Gender : "-"}</td>
                    <td>Marital Status</td>
                    <td>{Data?.MaritalStatus ? Data?.MaritalStatus : "-"}</td>
                  </tr>
                  <tr>
                    {/* <td>Last Name</td>
                <td>s</td> */}
                    <td>Nationality</td>
                    <td>{Data?.Nationality ? Data?.Nationality : "-"}</td>
                    <td>Weight</td>
                    <td>{Data?.Weight ? Data?.Weight : "-"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="personal">
              <h6 className="mb-2 sub-head mt-3">
                <IoIosPerson />
                &nbsp;Official
              </h6>

              <table class="table border mt-2">
                <tbody className="BodyTrTd">
                  <tr>
                    <td>Joining Date</td>
                    <td>{Data?.JoinDate ? Data?.JoinDate : "-"}</td>
                    <td>Department</td>
                    <td>{Data?.Department ? Data?.Department : "-"}</td>
                  </tr>
                  <tr>
                    <td>Bank Name</td>
                    <td>{Data?.BankName ? Data?.BankName : "-"}</td>
                    <td>Job Title</td>
                    <td>{Data?.JobTitle ? Data?.JobTitle : "-"}</td>
                  </tr>
                  <tr>
                    <td>Division</td>
                    <td>{Data?.Division ? Data?.Division : "-"}</td>
                    <td>Agent Id</td>
                    <td>{Data?.AgentID ? Data?.AgentID : "-"}</td>
                  </tr>
                  <tr>
                    <td>Job Type</td>
                    <td>{Data?.JobType ? Data?.JobType : "-"} </td>
                    <td>Grade</td>
                    <td>{Data?.Grade ? Data?.Grade : "-"}</td>
                  </tr>
                  <tr>
                    <td>Shift Group</td>
                    <td>{Data?.ShiftGroup ? Data?.ShiftGroup : "-"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="personal">
              <h6 className="mb-2 sub-head mt-3">
                <IoIosPerson />
                &nbsp;Bank Details
              </h6>

              <table class="table border mt-2">
                <tbody className="BodyTrTd">
                  <tr>
                    {/* <td> Bank Name</td>
                    <td className="text-danger">Backend Field Missing</td> */}
                    <td>Bank Name </td>
                    <td>{Data?.BankName ? Data?.BankName : "-"} </td>
                  </tr>
                  <tr>
                    <td>Bank Ac Number</td>
                    <td>{Data?.BankAccountNo ? Data?.BankAccountNo : "-"}</td>
                    {/* <td>Bank Ifse Code</td>
                    <td className="text-danger">Backend Field Missing</td> */}
                  </tr>
                  {/* <tr>
                    <td>Bank Branch Name</td>
                    <td className="text-danger">Backend Field Missing</td>
                    <td>-</td>
                    <td>-</td>
                  </tr> */}
                </tbody>
              </table>
            </div>

            <div className="personal">
              <h6 className="mb-2 sub-head mt-3">
                <IoIosPerson />
                &nbsp;Contact Information
              </h6>

              <table class="table border mt-2">
                <tbody className="BodyTrTd">
                  <tr>
                    <td> Home Address</td>
                    <td>{Data?.HomeAddress ? Data?.HomeAddress : "-"}</td>
                  </tr>
                  <tr>
                    <td>Current Address</td>
                    <td>{Data?.CurrentAddress ? Data?.CurrentAddress : "-"}</td>
                  </tr>
                  <tr>
                    <td>Home Airport </td>
                    <td> {Data?.HomeAirport ? Data?.HomeAirport : "-"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="personal">
              <h6 className="mb-2 sub-head mt-3">
                <IoIosPerson />
                &nbsp;Contact Number and Emails
              </h6>

              <table class="table border mt-2">
                <tbody className="BodyTrTd">
                  <tr>
                    <td> Work Mobile</td>
                    <td>{Data?.WorkMobile ? Data?.WorkMobile : "-"} </td>

                    <td> Work Phone</td>
                    <td>{Data?.WorkPhone ? Data?.WorkPhone : "-"} </td>
                  </tr>
                  <tr>
                    <td>Personal Mobile</td>
                    <td>{Data?.PersonalMobile ? Data?.PersonalMobile : "-"}</td>
                    <td>Personal Phone</td>
                    <td>{Data?.PersonalPhone ? Data?.PersonalPhone : "-"}</td>
                  </tr>
                  <tr>
                    <td>Work Email </td>
                    <td>{Data?.WorkEmail ? Data?.WorkEmail : "-"}</td>
                    <td>Personal Email </td>
                    <td>{Data?.PersonalEmail ? Data?.PersonalEmail : "-"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="personal">
              <h6 className="mb-2 sub-head mt-3">
                <IoIosPerson />
                &nbsp;Documents
              </h6>

              <p className="fs-small text-secondary mt-3 ms-1">
                Passport Details
              </p>
              <table class="table border mt-2">
                <tbody className="BodyTrTd">
                  <tr>
                    <td> Passport No</td>
                    <td>{Data?.PassportNo ? Data?.PassportNo : "-"} </td>

                    <td> Passport Place Of Issue</td>
                    <td>
                      {Data?.PassportPlaceofIssue
                        ? Data?.PassportPlaceofIssue
                        : "-"}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Passport Issue Date</td>
                    <td>
                      {Data?.PassportIssueDate ? Data?.PassportIssueDate : "-"}
                    </td>
                    <td>Passport Expiry Date</td>
                    <td>
                      {Data?.PassportExpiryDate
                        ? Data?.PassportExpiryDate
                        : "-"}
                    </td>
                  </tr>
                  <tr>
                    <td>Passport Courty of Issue </td>
                    <td>
                      {Data?.PassportCountryofIssue
                        ? Data?.PassportCountryofIssue
                        : "-"}
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="fs-small text-secondary mt-3 ms-1">Other Details</p>
              <table class="table border mt-2">
                <tbody className="BodyTrTd">
                  <tr>
                    <td> Emirates Id</td>
                    <td>{Data?.EmiratesId ? Data?.EmiratesId : "-"} </td>

                    <td> EmiratesIdExpiryDate</td>
                    <td>
                      {Data?.EmiratesIdExpiryDate
                        ? Data?.EmiratesIdExpiryDate
                        : "-"}
                    </td>
                  </tr>
                  <tr>
                    <td>Driving LicenceNo</td>
                    <td>
                      {Data?.DrivingLicenceNo ? Data?.DrivingLicenceNo : "-"}
                    </td>
                    <td>Driving Licence ExpiryDate</td>
                    <td>
                      {Data?.DrivingLicenceExpiryDate
                        ? Data?.DrivingLicenceExpiryDate
                        : "-"}
                    </td>
                  </tr>
                  <tr>
                    <td>PersonId </td>
                    <td>{Data?.PersonId ? Data?.PersonId : "-"}</td>
                    <td>PersonId ExpiryDate </td>
                    <td>
                      {Data?.PersonIdExpiryDate
                        ? Data?.PersonIdExpiryDate
                        : "-"}
                    </td>
                  </tr>
                  <tr>
                    <td> Insurance No</td>
                    <td>{Data?.InsuranceNo ? Data?.InsuranceNo : "-"}</td>

                    <td>Insurance Expiry Date</td>
                    <td>
                      {Data?.InsuranceExpiryDate
                        ? Data?.InsuranceExpiryDate
                        : "-"}
                    </td>
                  </tr>

                  <tr>
                    <td> VisaNo</td>
                    <td>{Data?.VisaNo ? Data?.VisaNo : "-"}</td>

                    <td>Visa Expiry Date</td>
                    <td>{Data?.VisaExpiryDate ? Data?.VisaExpiryDate : "-"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="personal">
              <h6 className="mb-2 sub-head mt-3">
                <IoIosPerson />
                &nbsp;Payrol Values
              </h6>
              <p className="fs-small text-secondary mt-3 ms-1">
                Salary Information
              </p>
              <table class="table border mt-2">
                <tbody className="BodyTrTd">
                  <tr>
                    <td> Initial Basic Pay</td>
                    <td>{Data?.BasicPay ? Data?.BasicPay : "-"} </td>

                    <td> Increments Total</td>
                    <td>
                      {Data?.Allowances_NOT ? Data?.Allowances_NOT : "-"}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Allowances</td>
                    <td>{Data?.Allowances_OT ? Data?.Allowances_OT : "-"} </td>
                    <td>Net Salary</td>
                    <td>{Data?.NetSalary ? Data?.NetSalary : "-"}</td>
                  </tr>
                  <tr>
                    <td>Normal Hrs </td>
                    <td>{Data?.NormalHrs ? Data?.NormalHrs : "-"}</td>
                    <td>Hourly Wage </td>
                    <td>{Data?.BasicPay ? Data?.BasicPay : "-"}</td>
                  </tr>

                  <tr>
                    <td>Ot Rate </td>
                    <td>{Data?.OTrate ? Data?.OTrate : "-"}</td>
                    <td>Spl Ot Rate </td>
                    <td>{Data?.SplOtRate ? Data?.SplOtRate : "-"}</td>
                  </tr>

                  {/* <tr>
                    <td>TimeSheet Category </td>
                    <td className="text-danger">Backend missing</td>
                  </tr> */}
                </tbody>
              </table>
            </div>

            <div className="row">
              <div className="col-md-6">
                <h6 className="mb-2 sub-head mt-3">
                  <MdContactEmergency />
                  &nbsp;Allowance Details{" "}
                </h6>
              </div>
              <div className="col-md-6">
                <div className="text-end">
                  {/* <button
                    className="dash-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Create
                  </button> */}
                </div>
              </div>
              <div className="col-md-12">
                {AllowanceData ? (
                  <>
                    <table class="table">
                      <thead></thead>
                      <tbody>
                        <tr className="">
                          <td>Si No</td>
                          <td>AllowanceType</td>
                          <td>Amount </td>
                          <td>Date </td>
                          <td>Reason </td>
                        </tr>

                        {AllowanceData
                          ? AllowanceData?.map((d, i) => (
                              <tr key={i} className="dataTr">
                                <td>{i + 1}</td>
                                <td>{d.AllowanceType}</td>
                                <td>{d.Amount}</td>
                                <td>{d.ADate}</td>
                                <td>{d.AffectOTCalc}</td>
                              </tr>
                            ))
                          : null}
                      </tbody>
                    </table>
                    <CreateAllowancePopup />
                  </>
                ) : (
                  <>
                    <p>No Allowance Data</p>
                  </>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <h6 className="mb-2 sub-head mt-3">
                  <MdContactEmergency />
                  &nbsp;Increment Details{" "}
                </h6>
              </div>
              <div className="col-md-6">
                <div className="text-end">
                  {/* <button
                    className="dash-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdropinc"
                  >
                    Create
                  </button> */}
                </div>
              </div>
              <div className="col-md-12">
                <table class="table">
                  <thead></thead>
                  <tbody>
                    <tr className="">
                      <td>Si No</td>
                      <td>Description</td>
                      <td>Amount </td>
                      <td>Date </td>
                      <td>Reason </td>
                    </tr>
                    {IncrementData
                      ? IncrementData?.map((d, i) => (
                          <tr key={i} className="dataTr">
                            <td>{i + 1}</td>
                            <td>{d.AllowanceType}</td>
                            <td>{d.Amount}</td>
                            <td>{d.ADate}</td>
                            <td>{d.AffectOTCalc}</td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <h6 className="mb-2 sub-head mt-3">
                  <GiThreeLeaves />
                  &nbsp;Leave Information{" "}
                </h6>
              </div>
            </div>
            <div class="mt-3">
              <div class="">
                <p className="fs-small text-secondary mt-3 ms-1">
                  <IoDocumentsOutline /> &nbsp;Current Leave Status
                </p>

                <table class="table">
                  <tbody>
                    <tr className="">
                      <td>Leave Category</td>
                      <td>Alloted</td>
                      <td>Consumed </td>
                      <td>Balance</td>
                    </tr>
                    <tr className="dataTr">
                      <td>Annual Leave</td>
                      <td>900</td>
                      <td>0.00</td>
                      <td>900</td>
                    </tr>
                  </tbody>
                </table>

                <p className="fs-small text-secondary mt-3 ms-1">
                  <IoDocumentsOutline /> &nbsp;Leave History of Employee{" "}
                </p>

                <table class="table">
                  <tbody>
                    <tr className="">
                      <td>Leave Category</td>
                      <td>Apln Dt</td>
                      <td>From Dt </td>
                      <td>To Dt</td>
                      <td>Leaves</td>
                      <td>Notes</td>
                      <td>Ticket</td>
                      <td>Status</td>
                      <td>Apprvd By</td>
                      <td>Apprvd Dt</td>
                    </tr>
                    <tr className="dataTr">
                      <td>Annual Leave</td>
                      <td>13/oct/</td>
                      <td>14/oct</td>
                      <td>15/oct</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>Approved</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ViewEmp;
