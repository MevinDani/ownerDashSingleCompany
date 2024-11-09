import React, { useEffect, useState } from "react";
import { base_url } from "../../../utils/AxiosConfig";
import axios from "axios";
import { FaRegEye } from "react-icons/fa";
import { FallingLines } from "react-loader-spinner";
import LeavePopup from "../LeavePopup";
import { IoPersonAddSharp } from "react-icons/io5";
import AddLeaveCatPopup from "./AddLeaveCatPopup";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { LuPanelLeftOpen, LuPanelRightOpen } from "react-icons/lu";

let Leaveschema = Yup.object().shape({
  CmpCode: Yup.string(),
  EmpId: Yup.string(),
  LeaveCategory: Yup.string(),
  NoOfLeaves: Yup.string(),
});
const LeaveAlotment = () => {
  const [data, setData] = useState();
  const [DataLeave, setDataLeave] = useState();
  const [LeaveEmpId, setLeaveEmpId] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedgrade, setSelectedGrade] = useState(false);
  const [selectedJob, setSelectedJobTitle] = useState(null);
  const [searchdata, setSearchData] = useState();
  const [Division, setDivision] = useState(null);
  const [jobtitle, setJobTitle] = useState(null);
  const [grade, setGrade] = useState(false);
  const [loader, setLoader] = useState(true);
  const [filteredData, setFilteredData] = useState();
  const [EmpId, setEmpId] = useState([]);
  const [filterview, setFilterView] = useState(false);
  const [LeaveData, setLeaveData] = useState();
  const [LeaveCategory, setLeaveCategory] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [addView, setAddView] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [ResetData, setResetData] = useState(false);
  const [alldata, setallData] = useState(false);
  const [resetalldata, setResetallData] = useState(false);
  const [multiSelect, setmultiSelect] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [newStatedata, setnewStatedata] = useState();
  const [employeeIDs, setEmployeeIDs] = useState([]);
  const [key, setKey] = useState([]);
  const [values, setValues] = useState([]);
  const [valueHistory, setValueHistory] = useState();
  const [Open, setOpen] = useState(false);

  // pagination
  const [currentPage, SetcurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data?.length / recordsPerPage);
  const numbers = Array.from({ length: npage }, (_, i) => i + 1);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      CmpCode: "CPAYS",
      EmpId: "",
      LeaveCategory: LeaveCategory,
      NoOfLeaves: "",
    },
    validationSchema: Leaveschema,
    onSubmit: (values) => {
      setValues(values);
    },
  });

  useEffect(() => {
    if (selectedItems) {
      setAddView(true);
    } else if (selectedItems === false) {
      setAddView(false);
    }
  }, [selectedItems]);

  useEffect(() => {
    let newArray = [];

    for (let i = 0; i < selectedItems?.length; i++) {
      newArray.push({
        CmpCode: "CPAYS",
        EmpID: selectedItems[i] || "",
        LeaveCategory: values?.LeaveCategory || "",
        NoOfLeaves: values?.NoOfLeaves || "",
      });
    }

    console.log(newArray);

    setApiData(newArray);

    // setValues(false)
  }, [values, selectedItems]);

  useEffect(() => {
    if (ResetData === true) {
      setApiData(false);

      setSearchData(null);
      setLeaveEmpId(null);
      setEmpId(null);
      setLeaveCategory(null);
      toast.success("Reset Form Data ");
      setResetData(false);
      setallData(true);
    }
  }, [ResetData]);

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
  }, [alldata]);

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

  useEffect(() => {
    // Use an object to store data for each unique EmpID
    const uniqueData = {};

    DataLeave?.forEach((item) => {
      const { EmpID, ...rest } = item;

      if (!uniqueData[EmpID]) {
        uniqueData[EmpID] = { EmpID, data: [] };
      }

      uniqueData[EmpID].data.push(rest);
    });

    // Convert the object values to an array
    const resultArray = Object.values(uniqueData);

    console.log(resultArray);
    setFilteredData(resultArray);
  }, [DataLeave]);

  useEffect(() => {
    // Use an object to store data for each unique EmpID
    const uniqueData = {};

    DataLeave?.forEach((item) => {
      const { EmpID, ...rest } = item;

      if (!uniqueData[EmpID]) {
        uniqueData[EmpID] = { EmpID, data: [] };
      }

      uniqueData[EmpID].data.push(rest);
    });

    // Convert the object values to an array
    const resultArray = Object.values(uniqueData);

    console.log(resultArray);
    setFilteredData(resultArray);
  }, [apiData, DataLeave]);

  function checkBoxHandler(event) {
    const { value, checked } = event.target;

    console.log(value);
    if (checked) {
      setSelectedItems([...selectedItems, value]);
      console.log(selectedItems);
    } else {
      setSelectedItems((prevData) => {
        return prevData.filter((EmpId) => {
          return EmpId !== value;
        });
      });
    }
  }

  function checkAllHandler() {
    if (data.length === selectedItems.length) {
      setSelectedItems([]);
    } else {
      const postIds = data?.map((item) => {
        return item.EmpId;
      });
      setSelectedItems(postIds);
    }
  }

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
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h6 className="head-text">Leave Allotment</h6>
          </div>
          <div className="col-md-6 text-end mb-2">
            <button
              className="dash-btn"
              onClick={() => setFilterView(filterview === true ? false : true)}
            >
              Filters
            </button>
            &nbsp;
            <button
              className="dash-btn"
              onClick={() => setAddView(addView === true ? false : true)}
            >
              <IoPersonAddSharp />
              &nbsp;Add
            </button>&nbsp;&nbsp;&nbsp;
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
            <div className="col-3">
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
            <div className="col-3">
            <button className="red-btn" onClick={() => setResetallData(true)}>
            Reset
          </button>
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
              </>
            ) : null}
            {addView ? (
              <>
                {" "}
                <form action="" onSubmit={formik.handleSubmit}>
                  <div className="row mb-2">
                    <div className="col-md-3">
                      <select
                        onChange={formik.handleChange("LeaveCategory")}
                        onBlur={formik.handleBlur("LeaveCategory")}
                        value={formik.values.LeaveCategory}
                        class="form-select"
                        placeholder="Leave Category"
                      >
                        <option value="">Leave Category </option>
                        {LeaveData
                          ? LeaveData?.map((d, i) => (
                              <>
                                <option
                                  value={LeaveData[i]?.name}
                                  onClick={(e) =>
                                    setLeaveCategory(e.target.value)
                                  }
                                >
                                  {LeaveData[i]?.name}
                                </option>{" "}
                              </>
                            ))
                          : null}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Input Leave No Here.."
                        name="NoOfLeaves"
                        onChange={formik.handleChange("NoOfLeaves")}
                        onBlur={formik.handleBlur("NoOfLeaves")}
                        value={formik.values.NoOfLeaves}
                      />
                    </div>
                    <div className="col-md-2">
                      <button className="dash-btn mt-1" type="submit">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </>
            ) : null}

            {data ? (
              <>
                {" "}<div className={Open?"table scroll list-table mt-2 h-auto":"table scroll list-table mt-2 h-auto"} style={{maxHeight:"450px"}}>
                <table className="table">
                  <tbody>
                    <tr className="">
                      <td>Si No</td>
                      <td>
                        {" "}
                        <input
                          class="form-check-input"
                          type="checkbox"
                          onClick={checkAllHandler}
                          checked={
                            data.length === selectedItems?.length ? true : false
                          }
                        />
                      </td>
                      <td>EmpID</td>
                      <td>Name</td>
                      <td>Job_Title</td>
                      <td>Division</td>
                      <td>Grade</td>
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
                      <td>Leave Details</td>
                      {/* <td>Actions</td> */}
                    </tr>
                    {records
                      ? records?.map((d, i) => (
                          <tr key={i} className="dataTr">
                            <td>{i + 1}</td>
                            <td>
                              {" "}
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value={d?.EmpId}
                                onChange={checkBoxHandler}
                                // onClick={() => setEmpId(d?.EmpId)}
                                // checked={selectAll === true ? true : null}
                                checked={selectedItems.includes(d?.EmpId)}
                              />
                            </td>
                            <td>{d?.EmpId}</td>
                            <td>{d?.Name}</td>
                            <td>{d?.JobTitle}</td>
                            <td>{d?.Division}</td>
                            <td>{d?.Grade}</td>
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
                                data-bs-target="#exampleModal"
                                onClick={() => setLeaveEmpId(d?.EmpId)}
                              >
                                <FaRegEye />
                                &nbsp;View
                              </button>
                              <LeavePopup
                                apiData={apiData}
                                LeaveEmpId={LeaveEmpId}
                                filteredData={filteredData}
                                setLeaveEmpId={setLeaveEmpId}
                              />
                            </td>
                            {/* <td><button className="dash-btn"  data-bs-toggle="modal" data-bs-target="#exampleModalnew" onClick={()=>setEmpIdPopup(d?.EmpId)}>Add</button></td> */}
                          </tr>
                        ))
                      : null}
                    <tr></tr>
                    {/* <AddLeaveCatPopup EmpIdPopUp={EmpIdPopUp} /> */}
                  </tbody>
                </table>
                </div>
               
              </>
            ) : null}

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
          </div>
        </div>
      </div>
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

export default LeaveAlotment;
