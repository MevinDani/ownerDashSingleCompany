import React, { useEffect, useState } from "react";
import { FaBullseye, FaEye } from "react-icons/fa";
import LeavePopup from "./LeavePopup";
import "../LeaveManagement/leaveallotmentstyle.css";
import AddLeavePopup from "./AddLeavePopup";
import axios from "axios";
import { FaRegEye } from "react-icons/fa";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { FallingLines } from "react-loader-spinner";

let Leaveschema = Yup.object().shape({
  CmpCode: Yup.string(),
  EmpId: Yup.string(),
  LeaveCategory: Yup.string(),
  NoOfLeaves: Yup.string(),
});
const LeaveAllotment = () => {
  const [Data, setData] = useState();
  const [LeaveData, setLeaveData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [EmpId, setEmpId] = useState(null);
  const [LeaveEmpId, setLeaveEmpId] = useState(null);
  const [LeaveCategory, setLeaveCategory] = useState(null);
  const [allotedLeaves, setAllotedLeaves] = useState();
  const [SelectAll, setSelectAll] = useState(false);
  const [ApiData, setApiData] = useState(false);
  const [ResetData, setResetData] = useState(false);
  const [loader, setLoader] = useState(true);
  const [searchData, setSearchData] = useState(null);
  const [jobtitle, setJobTitle] = useState(null);
  const [selectedJob, setSelectedJobTitle] = useState(null);
  const [formsubmit, setFormSubmit] = useState(false);
  const [grade, setGrade] = useState(false);
  const [Division, setDivision] = useState(null);
  const [selectedgrade, setSelectedGrade] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [alldata, setallData] = useState(false);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      CmpCode: "CPAYS",
      EmpId: EmpId,
      LeaveCategory: LeaveCategory,
      NoOfLeaves: "",
    },
    validationSchema: Leaveschema,
    onSubmit: (values) => {
      console.log(values);
      setApiData([values]);
    },
  });

  useEffect(() => {
    if (Data === null) {
      setLoader(true);
    } else if (Data) {
      setLoader(false);
    }
  }, [Data]);

  useEffect(() => {
    setApiData(false);
  }, [LeaveEmpId]);

  useEffect(() => {
    const LeavePostData = async () => {
      const Res = await axios
        .post(
          `https://cubixweberp.com:156/api/PersonalInfoLeaveAllotmentReg`,
          ApiData
        )
        .then((Res) => {
          if (Res.status === 200) {
            toast.success("Leave Alloted Successfully");
            setFormSubmit(true);
          } else if (Res.status === 408) {
            toast.error("Something Went wrong ");
          } else if (Res.status === 415) {
            toast.error("Something Went wrong ");
          } else {
            toast.error("Something Went wrong ");
          }
        });
    };

    if (ApiData && LeaveEmpId === null) {
      LeavePostData();
    }
  }, [ApiData, EmpId, LeaveCategory]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveAllotment/CPAYS/ALL/-`
      );
      if (response?.data) {
        setData(response.data);
        setEmpId(null);
        setFormSubmit(false);
        setLeaveCategory(false);
      } else {
        console.log("error");
      }
    };

    getData();
  }, [formsubmit]);

  useEffect(() => {
    if (ResetData === true) {
      setApiData(false);
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
        `https://cubixweberp.com:156/api/PersonalInfoLeaveAllotment/CPAYS/FREETEXT/${searchData}`
      );
      if (response?.data) {
        setData(response.data);
      } else {
        console.log("error");
      }
    };
    if (searchData) {
      getData();
    }
  }, [searchData]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveAllotment/CPAYS/ALL/-`
      );
      if (response?.data) {
        setData(response.data);
      } else {
        console.log("error");
      }
    };

    getData();
  }, []);

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

  useEffect(() => {
    const getFilteredData = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoList/CPAYS/all/yes/freetext/all/${
          selectedgrade ? selectedgrade : "all"
        }/${selectedDivision ? selectedDivision : "all"}`
      );
      if (response?.data) {
        setData(response.data);
      } else {
        console.log("error");
      }
    };
    if (selectedDivision) {
      getFilteredData();
    }

    console.log(selectedDivision);
  }, [selectedDivision, selectedgrade]);

  useEffect(() => {
    const getFilteredData = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveAllotment/CPAYS/ALL/-`
      );
      if (response?.data) {
        setData(response.data);
      } else {
        console.log("error");
      }
    };
    if (selectedDivision) {
      getFilteredData();
    }

    console.log(selectedDivision);
  }, [alldata]);

  useEffect(() => {
    const getFilteredData = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoList/CPAYS/all/yes/freetext/${
          selectedJob ? selectedJob : "all"
        }/${selectedgrade ? selectedgrade : "all"}/${
          selectedDivision ? selectedDivision : "all"
        }`
      );
      if (response?.data) {
        setData(response.data);
      } else {
        console.log("error");
      }
    };
    if (selectedJob) {
      getFilteredData();
    }
  }, [selectedJob]);

  useEffect(() => {
    // Use an object to store data for each unique EmpID
    const uniqueData = {};

    Data?.forEach((item) => {
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
  }, [Data]);

  return (
    <div>
      <div className="container ps-2">
        <div className="row">
          <div className="col-8">
            <h6 className="head-text">Leave Allotment</h6>
          </div>
          <div className="col-4 text-end">
            {/* <AiOutlineNodeExpand
              className="fs-big"
              onClick={() => setOpen(Open === true ? false : true)}
            /> */}
          </div>
        </div>
        {Data && (
          <>
            {" "}
            <form action="" onSubmit={formik.handleSubmit}>
              <div className="container">
                <div className="row filter-section border p-2 ">
                  <div className="col-md-3">
                    <div className="mt-2">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        placeholder="Job Title"
                        onChange={(e) => setSelectedJobTitle(e.target.value)}
                      >
                        <option selected>Job Title</option>
                        {jobtitle
                          ? jobtitle?.map((d, i) => (
                              <>
                                <option
                                  value={d.Description}
                                  onClick={(e) =>
                                    setSelectedJobTitle(e.target.value)
                                  }
                                >
                                  {d.Description}
                                </option>{" "}
                              </>
                            ))
                          : null}
                      </select>
                    </div>
                    <div className="mt-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Name"
                        onChange={(e) => setSearchData(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="mt-2">
                      <select
                        class="form-select "
                        aria-label="Default select example"
                        placeholder="Grade"
                      >
                        <option selected>Grade</option>
                        {grade
                          ? grade?.map((d, i) => (
                              <>
                                <option
                                  value={d?.Description}
                                  onClick={(e) =>
                                    setSelectedGrade(e.target.value)
                                  }
                                >
                                  {d?.Description}
                                </option>{" "}
                              </>
                            ))
                          : null}
                      </select>
                    </div>
                    <div className="mt-2">
                      <select
                        class="form-select "
                        aria-label="Default select example"
                        placeholder="Division"
                        onChange={(e) => setSelectedDivision(e.target.value)}
                      >
                        <option selected value={null}>
                          Division
                        </option>
                        {Division
                          ? Division?.map((d, i) => (
                              <>
                                <option
                                  value={d?.Description}
                                  onChange={(e) =>
                                    setSelectedDivision(e.target.value)
                                  }
                                >
                                  {d?.Description}
                                </option>{" "}
                              </>
                            ))
                          : null}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="mt-2">
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

                    <div className="mt-3">
                      <button
                        className={
                          SelectAll === true ? `red-btn-1 ` : `dash-btn-1`
                        }
                        onClick={() =>
                          setSelectAll(SelectAll === true ? false : true)
                        }
                      >
                        {SelectAll === true ? `DeSelect` : `Select All`}
                      </button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mt-2">
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
                    <div className="mt-2">
                      <div className="row">
                        <div className="col-6">
                          <button className="dash-btn mt-2" type="submit">
                            Save
                          </button>
                        </div>
                        <div className="col-6">
                          <button
                            className="red-btn mt-2"
                            onClick={() => setResetData(true)}
                          >
                            Reset{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <table class="table table-striped border">
                <tbody>
                  <tr className="table-primary">
                    <td>Si No</td>
                    <td>Select</td>
                    <td>EmpID</td>
                    <td>Name</td>
                    <td>Job_Title</td>
                    <td>Division</td>
                    <td>Grade</td>
                    <td>Leave Details</td>
                  </tr>

                  {filteredData
                    ? filteredData?.map((d, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>
                            <div class="form-check mb-2">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                onChange={formik.handleChange("EmpID")}
                                onBlur={formik.handleBlur("EmpID")}
                                value={d?.EmpID}
                                onClick={() => setEmpId(d?.EmpID)}
                                checked={
                                  EmpId && SelectAll === true ? true : null
                                }
                              />
                            </div>
                          </td>
                          <td>{d?.EmpID}</td>
                          {/* <td>
                    <div>
                      <p>{d?.EmpID}</p>
                      <p>
                        {d.data.map((dItem) => {
                          return (
                            <span>
                              <label>{dItem.LeaveCategory}</label>
                              <label>{dItem.NoOfLeaves}</label>
                            </span>
                          );
                        })}
                      </p>
                    </div>
                  </td> */}

                          <td>{d?.data[0]?.Name}</td>
                          <td>{d?.data[0]?.Job_Title}</td>
                          <td>{d?.data[0]?.Division}</td>
                          <td>{d?.data[0]?.Grade}</td>
                          {/* {d.data.map((dItem) => {
                    return (
                      <>
                        <table class="table table-striped border">
                          <tbody>
                            <tr>
                              <td>{dItem.LeaveCategory}</td>
                            </tr>
                            <tr>
                              <td>{dItem.NoOfLeaves}</td>
                            </tr>
                          </tbody>
                        </table>
                      </>
                    );
                  })} */}

                          <td>
                            <button
                              className="dash-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => setLeaveEmpId(d?.EmpID)}
                            >
                              <FaRegEye />
                              &nbsp;View
                            </button>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </form>
          </>
        )}
      </div>

      <LeavePopup
        LeaveEmpId={LeaveEmpId}
        filteredData={filteredData}
        setLeaveEmpId={setLeaveEmpId}
      />
      <AddLeavePopup />

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
};

export default LeaveAllotment;
