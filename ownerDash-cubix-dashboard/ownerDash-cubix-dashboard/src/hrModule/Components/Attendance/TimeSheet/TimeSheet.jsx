import React, { useEffect, useState } from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'
import AddTimeSheetPopup from './AddTimeSheetPopup'
import ViewTimeSheetPopup from './ViewTimeSheetPopup'
import axios from 'axios'
import { base_url } from '../../../utils/AxiosConfig'
import { FallingLines } from 'react-loader-spinner'
import { LuPanelLeftOpen } from "react-icons/lu";
import { LuPanelRightOpen } from "react-icons/lu";

const TimeSheet = () => {
  const [data, setData] = useState();
  const [reset, setReset] = useState(false);
  const [loader, setLoader] = useState(true);
  const [popUpData, setpopUpData] = useState();
  const [Open, setOpen] = useState(false);

    // pagination
    const [currentPage, SetcurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data?.slice(firstIndex, lastIndex);
    const npage = Math.ceil(data?.length / recordsPerPage);
    const numbers = Array.from({ length: npage }, (_, i) => i + 1);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `${base_url}PersonalInfoList/CPAYS/ALL/YES/ALL/ALL/ALL/ALL`
      );
      if (response?.data) {
        setData(response.data);

        setReset(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (data) {
      setLoader(false);
    }
  }, [data]);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
        <h6 className="mb-2 head-text">Timesheet</h6>
        </div>
        <div className="col-6">
        <div className="text-end">
    {Open===true ?<>< LuPanelRightOpen onClick={()=>setOpen(false)}/></>:null}
    {Open===false ?<><LuPanelLeftOpen onClick={()=>setOpen(true)}/></>:null}
   

    </div>
          </div>
      </div>
   
   
    <div className={Open?"table scroll":"table scroll"}>
      {
        records?<><table class="table">
        <tbody>
          <tr className="">
            <td>Si No</td>
            <td>Emp Id</td>
            <td>Alternate Id</td>
            <td>Status</td>
            <td>Name</td>
            <td>Job Title</td>
            <td>Division</td>
            <td>Grade</td>
            <td>Gender </td>
            <td>Nationality</td>
            {Open?<>
              <td>Bank Account</td>
              <td>Bank Name</td>
              <td>Agent Id</td>
              <td>Current Address</td>
              <td>Home Address</td>
              <td>Home Airport</td>
              <td>Work Mobile</td>
              <td>Work Phone</td>
              <td>Personal Phone</td>
              <td>Personal Email</td>
              <td>Passport Number</td>
              <td>Passport Issue Date</td>
              <td>Passport Expiry Date</td>
              <td>Passport Place of Issue</td>
              <td>Passport Country of Issue</td>
              <td>Emirates id</td>
              <td>Expiry Date</td>
              <td>Visa No</td>
              <td>Visa Expiry Date</td>
              <td>Insurance Number</td>
              <td>Insurance Expiry Date</td>
              <td>Driving license No</td>
              <td>Driving license Expiry Date</td>
              <td>Basic Pay</td>
              <td>Allowances_OT</td>
              <td>Allownaces_NOT</td>
              <td>NormalHRS</td>
              <td>HourlyWage</td>
              <td>OTRate</td>
              <td>SplOtRate</td>
              <td>Active</td>
              <td>Memos</td>
              <td>Notes</td>
              <td>Salary Ac</td>
              <td>Advance Ac</td>
              
            </>:null}
            <td>Actions</td>
            
          </tr>
          {records
              ? records?.map((d, i) => (<>
               <tr key={i} className="dataTr">
                    <td>{i + 1}</td>
                    <td>{d?.EmpId}</td>
                    <td>{d?.AlternateID}</td>
                    <td>{d?.Status}</td>
                    <td>{d?.Name}</td>
                    <td>{d?.JobTitle}</td>
                    <td>{d?.Division}</td>
                    <td>{d?.Grade}</td>
                    <td>{d?.Single}</td>
                    <td>{d?.Nationality}</td>
                    {Open?<>
              <td>{d?.BankAccountNo}</td>
              <td>{d?.BankName}</td>
              <td>{d?.AgentID}</td>
              <td>{d?.CurrentAddress}</td>
              <td>{d?.HomeAddress}</td>
              <td>{d?.HomeAirport}</td>
              <td>{d?.WorkMobile}</td>
              <td>{d?.WorkPhone}</td>
              <td>{d?.PersonalPhone}</td>
              <td>{d?.PersonalEmail}</td>
              <td>{d?.PassportNo}</td>
              <td>{d?.PassportIssueDate}</td>
              <td>{d?.PassportExpiryDate}</td>
              <td>{d?.PassportPlaceofIssue}</td>
              <td>{d?.PassportCountryofIssue}</td>
              <td>{d?.EmiratesId}</td>
              <td>{d?.EmiratesIdExpiryDate}</td>
              <td>{d?.VisaNo}</td>
              <td>{d?.VisaExpiryDate}</td>
              <td>{d?.InsuranceNo}</td>
              <td>{d?.InsuranceExpiryDate}</td>
              <td>{d?.DrivingLicenceNo}</td>
              <td>{d?.DrivingLicenceExpiryDate}</td>
              <td>{d?.BasicPay}</td>
              <td>{d?.Allowances_OT}</td>
              <td>{d?.Allowances_NOT}</td>
              <td>{d?.NormalHrs}</td>
              <td>{d?.HourlyWage}</td>
              <td>{d?.OTrate}</td>
              <td>{d?.SplOtRate}</td>
              <td>{d?.Active}</td>
              <td>{d?.Memos}</td>
              <td>{d?.Notes}</td>
              <td>{d?.SalaryA}</td>
              <td>{d?.AdvanceAc}</td>
              
            </>:null}
                    <td>
              <button
                className="dash-btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={()=>setpopUpData(d)}
              >
                <IoIosAddCircleOutline />
                &nbsp;Add
              </button>
              &nbsp;
              <button
                className="dash-btn mt-1"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdropnew"
                onClick={()=>setpopUpData(d)}
              >
                <IoIosAddCircleOutline />
                &nbsp;View
              </button>
            </td>
                    </tr>
              </>)):null}
        
        </tbody>
      </table></>:null
      }
      </div>
       {
          records ?(<>
           <div className="pagination-div">
          <div className="text-end">
             <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                  {
                      currentPage !== 1 ? (
                    <button class="page-link" href="#" onClick={prePage}>
                      Previous
                    </button>
                      ) : ''
                    }
                  </li>
                  {numbers.map((n, i) => (
                    <li
                      className={`page-item ${
                        currentPage === n ? "active" : ""
                      }`}
                      key={i}
                    >
                      <button
                        className="page-link"
                        onClick={() => changeCPage(n)}
                        href="#"
                      >
                        {n}
                      </button>
                    </li>
                  ))}

                  <li class="page-item">
                  {
                    currentPage !== numbers[numbers.length - 1] ? (
                      <button class="page-link" href="#" onClick={nextPage}>
                        Next
                      </button>
                    ) : null
                  }
                  </li>
                </ul>
              </nav>
             </div>
          </div>
          </>):null
        }
    <AddTimeSheetPopup popUpData={popUpData}/>
    <ViewTimeSheetPopup popUpData={popUpData}/>

    <div className="table-nodata-img mtd">
        {loader ? (
          <>
            {" "}
            <div className="table-nodata-img">
              <div className="center">
                <p className="text-center pt-5">
                  Please Wait Loading Data... &nbsp;
                  <FallingLines />
                </p>
              </div>
            </div>
          </>
        ) : null}
      </div>
  </div>
  )
  function prePage() {
    if (currentPage !== firstIndex) {
      SetcurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    SetcurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== lastIndex) {
      SetcurrentPage(currentPage + 1);
    }
  }
}

export default TimeSheet
