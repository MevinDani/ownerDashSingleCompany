import React, { useEffect, useState } from "react";
import profile from "../../images/profile_welcome.png";
import "../Employee/emstyle.css";

import { Link } from "react-router-dom";
import { MdAssignmentAdd } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";
import { GrView } from "react-icons/gr";
import axios from "axios";
import { usePDF } from "react-to-pdf";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { FallingLines } from "react-loader-spinner";
import { base_url } from "../../utils/AxiosConfig";
import { toast } from "react-toastify";
import { LuPanelLeftOpen, LuPanelRightOpen } from "react-icons/lu";

const Employee = () => {
  const { toPDF, targetRef } = usePDF({ filename: "Emplist.pdf" });
  const [data, setData] = useState();
  const [searchdata, setSearchData] = useState();
  const [loader, setLoader] = useState(true);
  const [Division, setDivision] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [grade, setGrade] = useState(null);
  const [selectedgrade, setSelectedGrade] = useState(null);
  const [jobtitle, setJobTitle] = useState(null);
  const [selectedJob, setSelectedJobTitle] = useState(null);
  const [reset, setReset] = useState(false);
  const [filteredData, setFilteredData] = useState();
  const [resetalldata, setResetallData] = useState(false);
  const [Open, setOpen] = useState(false);
  const dispatch = useDispatch();

  // pagination
  const [currentPage, SetcurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data?.length / recordsPerPage);
  const numbers = Array.from({ length: npage }, (_, i) => i + 1);
  // console.log(numbers,'numbers')
  // console.log(data);
  useEffect(() => {
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

        setReset(false);
      }
    };
    if (reset) {
      getData();
    }
  }, [reset]);

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

  // useEffect(() => {
  //   const getFilteredData = async () => {
  //     let decode = decodeURI(selectedJob?selectedJob:null);
  //     const response = await axios.get(
  //       `${base_url}PersonalInfoList/CPAYS/ALL/YES/${searchdata?searchdata:"ALL"}/${selectedJob?selectedJob:"ALL"}/${selectedgrade?selectedgrade:"ALL"}/${selectedDivision?selectedDivision:"ALL"}`
  //     );
  //     if (response?.data) {
  //       setData(response.data);
  //     } else {
  //       console.log("error");
  //     }
  //   };
  //   if (selectedDivision) {
  //     getFilteredData();
  //   }else{
  //     setResetallData(true)
  //   }

  //   console.log(selectedDivision);
  // }, [selectedDivision]);

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

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7">
          <h6 className="mb-2 head-text">Employee List</h6>
          <div className="row">
            <div className="col-3">
              <input
                type="text"
                value={searchdata}
                className="form-control"
                placeholder="Search Here"
                onChange={(e) => setSearchData(e.target.value)}
              />
            </div>
            <div className="col-3">
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
            <div className="col-3">
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
            <div className="col-3">
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

            {/* <div className="col-3">
              <select
                class="form-select"
                onChange={(e) => setSelectedDivision(e.target.value)}
                aria-label="Default select example"
              >
                  <option value={null} selected onClick={() => setResetallData(true)}>
                       Division
                      </option>
                {Division
                  ? Division?.map((d, i) => (
                      <>
                        <option
                          value={d?.Description}
                          onChange={(e) => setSelectedDivision(e.target.value)}
                        >
                          {d?.Description}
                        </option>{" "}
                      </>
                    ))
                  : null}
              </select>
            </div> */}
          </div>
        </div>
        <div className="col-md-5 text-end">
          <button className="red-btn" onClick={() => setResetallData(true)}>
            Reset
          </button>
          &nbsp;&nbsp;
          <button className="dash-btn" onClick={() => toPDF()}>
            <FaRegFilePdf />
            &nbsp;&nbsp;Export
          </button>
          &nbsp;&nbsp;
          <Link to={"emp_reg"}>
            <button className="dash-btn">
              <MdAssignmentAdd />
              &nbsp;&nbsp;Create
            </button>
          </Link>
          &nbsp;&nbsp;
          {Open === true ? (
            <>
              <LuPanelRightOpen onClick={() => setOpen(false)} />
            </>
          ) : null}
          {Open === false ? (
            <>
              <LuPanelLeftOpen onClick={() => setOpen(true)} />
            </>
          ) : null}
        </div>
      </div>

      <div
        className={
          Open ? "table scroll list-table mt-2 h-auto" : "table scroll list-table mt-2 h-auto"
        } style={{maxHeight:"550px"}}
      >
        <table class="table" ref={targetRef}>
          <tbody>
            {records && (
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
                {Open ? (
                  <>
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
                  </>
                ) : null}
                <td>Actions</td>
              </tr>
            )}
            {records
              ? records?.map((d, i) => (
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

                    {Open ? (
                      <>
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
                      </>
                    ) : null}
                    <td>
                      {" "}
                      <Link to={`view_emp/${encodeURIComponent(d?.EmpId)}`}>
                        <GrView />
                      </Link>
                      &nbsp;&nbsp;&nbsp;
                      <Link to={`emp_edit/${encodeURIComponent(d?.EmpId)}`}>
                        <FaRegEdit />
                      </Link>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>

      {records ? (
        <>
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
        </>
      ) : null}

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
  );

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
};

export default Employee;
