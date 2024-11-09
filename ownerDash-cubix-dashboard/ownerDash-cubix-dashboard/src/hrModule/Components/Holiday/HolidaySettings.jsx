import React, { useEffect, useState } from 'react'
import { FaEye } from 'react-icons/fa6';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { FallingLines } from 'react-loader-spinner'
import { base_url } from '../../utils/AxiosConfig';
import axios from 'axios';
import HolidaySettingPopup from './HolidaySettingPopup';
import ViewHolidayPopUp from './ViewHolidayPopUp';
import { LuPanelLeftOpen, LuPanelRightOpen } from 'react-icons/lu';
import { IoPersonAddSharp } from "react-icons/io5";
import { toast } from "react-toastify";



const HolidaySettings = () => {
    const [data, setData] = useState();
    const [popUpData, setpopUpData] = useState();
    const [Open, setOpen] = useState(false);
    const [reset, setReset] = useState(false);
    const [loader, setLoader] = useState(true);
    const [filterview, setFilterView] = useState(false);
    const [addView, setAddView] = useState(false);
    const [searchdata, setSearchData] = useState();
    const [selectedJob, setSelectedJobTitle] = useState(null);
    const [jobtitle, setJobTitle] = useState(null);
    const [selectedgrade, setSelectedGrade] = useState(false);
    const [grade, setGrade] = useState(false);
    const [selectedDivision, setSelectedDivision] = useState(null);
    const [Division, setDivision] = useState(null);
    const [resetalldata, setResetallData] = useState(false);
    const [alldata, setallData] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const [LeaveData, setLeaveData] = useState();
    const [DataLeave, setDataLeave] = useState();

    const [leaveDate, setleaveDate] = useState([]);
    const [leaveType, setLeaveType] = useState('');

    const [combinedData,setCombinedData] = useState([])
    const [EmpId,setEmpId] = useState('')

  const handleChildData = (formattedDates, selectedLeaveType, EmpId) => {
    // console.log(formattedDates, selectedLeaveType, EmpId,'from child')
    setleaveDate(formattedDates);
    setLeaveType(selectedLeaveType);
    setEmpId(EmpId)
  };

// console.log(leaveDate,leaveType,'states')
    // pagination
    const [currentPage, SetcurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data?.slice(firstIndex, lastIndex);
    const npage = Math.ceil(data?.length / recordsPerPage);
    const numbers = Array.from({ length: npage }, (_, i) => i + 1);

    useEffect(() => {
        if (data) {
          setLoader(false);
        }
      }, [data]);
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
        const getData = async () => {
          const response = await axios.get(
            `${base_url}PersonalInfoList/CPAYS/ALL/YES/ALL/ALL/ALL/ALL`
          );
          if (response?.data) {
            setData(response.data);
            setallData(false);
          }
        };
    
        getData();
      }, [alldata, apiData]);
    
      useEffect(() => {
        const getData = async () => {
          const response = await axios.get(
            `${base_url}PersonalInfoList/CPAYS/ALL/YES/ALL/ALL/ALL/ALL`
          );
          if (response?.data) {
            setData(response.data);
            setSearchData("");
            setSelectedJobTitle("");
            setSelectedDivision("");
            setSelectedGrade("");
            setResetallData(false);
          }
        };
        if (resetalldata === true || selectedJob === '' && selectedDivision === '' && selectedgrade === '') {
          getData();
          console.log("Reset All Data");
        }
      }, [resetalldata,selectedDivision,selectedJob,selectedgrade]);
    
      useEffect(() => {
        const getData = async () => {
          let decode = decodeURI(selectedJob ? selectedJob : null);
          const response = await axios.get(
            `${base_url}PersonalInfoList/CPAYS/ALL/YES/${
              searchdata ? searchdata : "ALL"
            }/${selectedJob ? selectedJob : "ALL"}/${
              selectedgrade ? selectedgrade : "ALL"
            }/${selectedDivision ? selectedDivision : "ALL"}`
          );
          if (response?.data) {
            setData(response.data);
          }
        };
    
        getData();
      }, [selectedDivision,selectedJob,selectedgrade]);
    
    
      useEffect(() => {
        if (selectAll === true) {
          setAddView(true);
        } else {
          setAddView(false);
        }
      }, [selectAll]);
    
      useEffect(() => {
        const LeavePostData = async () => {
          try {
            const Res = await axios
              .post(
                `https://cubixweberp.com:156/api/PersonalInfoLeaveAllotmentReg`,
                apiData
              )
              .then((Res) => {
                if (Res.status === 200) {
                  toast.success("Leave Alloted Successfully");
                } else if (Res.status === 408) {
                  toast.error("Something Went wrong ");
                } else if (Res.status === 415) {
                  toast.error("Something Went wrong ");
                } else {
                  toast.error("Something Went wrong ");
                }
              });
          } catch (error) {
            console.log(error);
          }
        };
    
        if (apiData) {
          LeavePostData();
        }
      }, [apiData]);
    
      useEffect(() => {
        const getLeave = async () => {
          const response = await axios.get(
            `https://cubixweberp.com:156/api/PersonalInfoLeaveCategoryList/CPAYS/ALL/-`
          );
          if (response?.data) {
            setLeaveData(response.data);
          } else {
            console.log("error");
          }
        };
    
        getLeave();
      }, [apiData]);
    
      useEffect(() => {
        const getData = async () => {
          const response = await axios.get(
            `${base_url}PersonalInfoList/CPAYS/ALL/YES/ALL/ALL/ALL/ALL`
          );
          if (response?.data) {
            setData(response.data);
          }
        };
    
        getData();
      }, []);
    
      useEffect(() => {
        const getSearch = async () => {
          let decode = decodeURI(selectedJob ? selectedJob : null);
          const response = await axios.get(
            `${base_url}PersonalInfoList/CPAYS/FREETEXT/YES/${
              searchdata ? searchdata : "ALL"
            }/${selectedJob ? selectedJob : "ALL"}/${
              selectedgrade ? selectedgrade : "ALL"
            }/${selectedDivision ? selectedDivision : "ALL"}`
          );
          if (response?.data) {
            setData(response.data);
          } else {
            console.log("error");
          }
        };
        if (searchdata) {
          setTimeout(() => {
            getSearch();
          }, 10);
        } else {
          const getData = async () => {
            const response = await axios.get(
              `${base_url}PersonalInfoList/CPAYS/ALL/YES/${
                searchdata ? searchdata : "ALL"
              }/${selectedJob ? selectedJob : "ALL"}/${
                selectedgrade ? selectedgrade : "ALL"
              }/${selectedDivision ? selectedDivision : "ALL"}`
            );
            if (response?.data) {
              setData(response.data);
            }
          };
    
          getData();
        }
      }, [searchdata]);
    
      useEffect(() => {
        const getFilteredData = async () => {
          const response = await axios.get(
            `${base_url}PersonalInfoList/CPAYS/ALL/YES/${
              searchdata ? searchdata : "ALL"
            }/${selectedJob ? selectedJob : "ALL"}/${
              selectedgrade ? selectedgrade : "ALL"
            }/${selectedDivision ? selectedDivision : "ALL"}`
          );
          if (response?.data) {
            setData(response.data);
          } else {
            console.log("error");
          }
        };
        if (selectedJob) {
          console.log(selectedJob,'selectedJob')
          getFilteredData();
        } else if(selectedJob === '' && selectedDivision === '' && selectedgrade === ''){
          console.log('reset activated')
          setResetallData(true);
        }
    
        console.log(selectedJob);
      }, [selectedJob]);
    
    
      useEffect(() => {
        const getFilteredData = async () => {
          let decode = decodeURI(selectedJob ? selectedJob : null);
          const response = await axios.get(
            `${base_url}PersonalInfoList/CPAYS/ALL/YES/${
              searchdata ? searchdata : "ALL"
            }/${selectedJob ? selectedJob : "ALL"}/${
              selectedgrade ? selectedgrade : "ALL"
            }/${selectedDivision ? selectedDivision : "ALL"}`
          );
          if (response?.data) {
            setData(response.data);
          } else {
            console.log("error");
          }
        };
        if (selectedDivision) {
          console.log(selectedDivision,'selectedDivision')
          console.log((typeof(selectedDivision)),'selectedDivisionType')
          getFilteredData();
        } else if(selectedJob === '' && selectedDivision === '' && selectedgrade === ''){
          console.log('reset activated')
          setResetallData(true);
        }
    
        console.log(selectedJob);
      }, [selectedDivision]);
    
      useEffect(() => {
        const getFilteredData = async () => {
          let decode = decodeURI(selectedJob ? selectedJob : null);
          const response = await axios.get(
            `https://cubixweberp.com:156/api/PersonalInfoList/CPAYS/ALL/YES/${
              searchdata ? searchdata : "ALL"
            }/${selectedJob ? selectedJob : "ALL"}/${
              selectedgrade !== "Grade" ? selectedgrade : "ALL"
            }/${selectedDivision ? selectedDivision : "ALL"}`
          );
          if (response?.data) {
            setData(response.data);
          } else {
            console.log("error");
          }
        };
        if (selectedgrade) {
          console.log(selectedgrade,'selectedgrade')
          getFilteredData();
        }  else if(selectedJob === '' && selectedDivision === '' && selectedgrade === ''){
          console.log('reset activated')
          setResetallData(true);
        }
    
        console.log(selectedgrade);
      }, [selectedgrade]);
    
      useEffect(() => {
        const getData = async () => {
          const response = await axios.get(
            `https://cubixweberp.com:156/api/MASTERLIST/CPAYS/DIVISION`
          );
          if (response?.data) {
            setDivision(response.data);
          } else {
            console.log("error");
          }
        };
    
        getData();
      }, []);
    
      useEffect(() => {
        const getData = async () => {
          const response = await axios.get(
            `https://cubixweberp.com:156/api/MasterList/CPAYS/JOBTITLE`
          );
          if (response?.data) {
            setJobTitle(response.data);
          } else {
            console.log("error");
          }
        };
    
        getData();
      }, []);
    
      useEffect(() => {
        const getData = async () => {
          const response = await axios.get(
            `https://cubixweberp.com:156/api/MASTERLIST/CPAYS/GRADE`
          );
          if (response?.data) {
            setGrade(response.data);
          } else {
            console.log("error");
          }
        };
    
        getData();
      }, []);
    
      useEffect(() => {
        if (searchdata && data === null) {
          setLoader(true);
        } else if (searchdata && data) {
          setLoader(false);
        }
      }, [searchdata, data]);
    
      useEffect(() => {
        if (records) {
          setLoader(false);
        }
      }, [records]);
    
      useEffect(() => {
        const getData = async () => {
          const response = await axios.get(
            `${base_url}PersonalInfoLeaveAllotment/CPAYS/ALL/-`
          );
          if (response?.data) {
            setDataLeave(response.data);
          } else {
            console.log("error");
          }
        };
    
        getData();
      }, []);

      // console.log(selectedJob,selectedDivision,selectedgrade,leaveType,leaveDate,EmpId)

      useEffect(() => {
         // Only proceed if all necessary data is available
        if (leaveType && leaveDate && EmpId) {
          // Create an object with the selected data
          const employeeObject = {
            selectedJob: selectedJob || 'All',
            selectedDivision: selectedDivision || 'All',
            selectedgrade: selectedgrade || 'All',
            leaveType,
            leaveDate,
            EmpId,
          };

          // Find the index of the employee in the array
          const index = combinedData.findIndex((employee) => employee.EmpId === EmpId);

          // Update or add the employee object in the array
          if (index !== -1) {
            // Employee already exists, update the object at the index
            const updatedEmployeeData = [...combinedData];
            updatedEmployeeData[index] = employeeObject;
            setCombinedData(updatedEmployeeData);
          } else {
            // Employee does not exist, add a new object to the array
            setCombinedData([...combinedData, employeeObject]);
          }
        }
      },[selectedJob,selectedDivision,selectedgrade,leaveType,leaveDate,EmpId])

      console.log(combinedData,'combinedData')
    
  return (
    <div>
    <div className="container-fluid">

    <div className="row">
          <div className="col-md-6">
            <h6 className="head-text">Holiday Management</h6>
          </div>
          <div className="col-md-6 text-end mb-2">
            <button
              className="dash-btn"
              onClick={() => setFilterView(filterview === true ? false : true)}
            >
              Filters
            </button>
            &nbsp;
            {/* <button
              className="dash-btn"
              onClick={() => setAddView(addView === true ? false : true)}
            > */}
              {/* <IoPersonAddSharp /> */}
              {/* &nbsp;Add */}
            {/* </button>&nbsp;&nbsp;&nbsp; */}
            {Open===true ?<>< LuPanelRightOpen onClick={()=>setOpen(false)}/></>:null}
    {Open===false ?<><LuPanelLeftOpen onClick={()=>setOpen(true)}/></>:null}
            {/* &nbsp;
            <button
              className="dash-btn"
              onClick={() => setSelectAll(selectAll === true ? false : true)}
            >
              Select All
            </button> */}
            &nbsp;
          </div>
    </div>

    <div className="row">
          <div className="container">
            {filterview ? (
              <>
                {" "}
          <div className="row">
            <div className="col-2">
              <input
                type="text"
                value={searchdata}
                className="form-control"
                placeholder="Search Here"
                onChange={(e) => setSearchData(e.target.value)}
              />
            </div>
            <div className="col-2">
              <select
                class="form-select"
                onChange={(e) => setSelectedJobTitle(decodeURI(e.target.value))}
                value={selectedJob}
                aria-label="Default select example"
                placeholder="Select Job Title"
              >
                <option
                  value=""
                  selected
                  onClick={() => setSelectedJobTitle(null)}
                >
                  Job Title
                </option>
                {jobtitle
                  ? jobtitle?.map((d, i) => (
                      <>
                        <option
                          value={d.Description}
                          onClick={(e) => setSelectedJobTitle(e.target.value)}
                        >
                          {d.Description}
                        </option>{" "}
                      </>
                    ))
                  : null}
              </select>
            </div>
            <div className="col-2">
              <select
                value={selectedgrade}
                class="form-select"
                onChange={(e) => setSelectedGrade(e.target.value)}
                aria-label="Default select example"
                placeholder="Select Job Title"
              >
                <option
                  value=""
                  selected
                  onClick={() => setSelectedGrade(null)}
                >
                  Grade
                </option>
                {grade
                  ? grade?.map((d, i) => (
                      <>
                        <option
                          value={d?.Description}
                          onClick={(e) => setSelectedGrade(e.target.value)}
                        >
                          {d?.Description}
                        </option>{" "}
                      </>
                    ))
                  : null}
              </select>
            </div>
            <div className="col-2">
              <select
                value={selectedDivision}
                class="form-select"
                onChange={(e) => setSelectedDivision(decodeURI(e.target.value))}
                aria-label="Default select example"
                placeholder="Select Job Title"
              >
                <option
                  value=""
                  selected
                  onChange={() => setSelectedDivision(null)}
                >
                  Division
                </option>
                {Division
                  ? Division?.map((d, i) => (
                      <>
                        <option
                          value={d.Description}
                          // onClick={(e) => setSelectedDivision(e.target.value)}
                        >
                          {d.Description}
                        </option>{" "}
                      </>
                    ))
                  : null}
              </select>
            </div>
            <div className="col-2">
              <select
                value={selectedDivision}
                class="form-select"
                onChange={(e) => setSelectedDivision(decodeURI(e.target.value))}
                aria-label="Default select example"
                placeholder="Select Job Title"
              >
                <option
                  value=""
                  selected
                  onChange={() => setSelectedDivision(null)}
                >
                  Religion
                </option>
                {Division
                  ? Division?.map((d, i) => (
                      <>
                        <option
                          value={d.Description}
                          // onClick={(e) => setSelectedDivision(e.target.value)}
                        >
                          {d.Description}
                        </option>{" "}
                      </>
                    ))
                  : null}
              </select>
            </div>
            <div className="col-2">
            <button className="red-btn" onClick={() => setResetallData(true)}>
            Reset
            </button>
            </div>
          </div>
              </>
            ) : null} 
          </div>
      </div>
      
    {/* <div className="row">
        <div className="col-6">
        <h6 className="mb-2 head-text">Holiday Management</h6>
        </div>
        <div className="col-6">
        <div className="text-end">
    {Open===true ?<>< LuPanelRightOpen onClick={()=>setOpen(false)}/></>:null}
    {Open===false ?<><LuPanelLeftOpen onClick={()=>setOpen(true)}/></>:null}
   

    </div>
          </div>
      </div> */}
  
   <div className={Open?"table scroll h-auto":"table scroll h-auto"} style={{maxHeight:"450px"}}>
     {records ? (
       <>
         <table class="table">
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
               ? records?.map((d, i) => (
                   <>
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
                           &nbsp;Setting
                         </button>
                         &nbsp;
                         <button
                           className="dash-btn mt-2"
                           data-bs-toggle="modal"
                           data-bs-target="#staticBackdropnew"
                           onClick={()=>setpopUpData(d)}
                         >
                           <FaEye />
                           &nbsp;View
                         </button>
                       </td>
                     </tr>
                   </>
                 ))
               : null}


           </tbody>
         </table>
       </>
     ) : null}
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

   <HolidaySettingPopup popUpData={popUpData} onDataUpdate={handleChildData}/>
   <ViewHolidayPopUp popUpData={popUpData} />

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

export default HolidaySettings
