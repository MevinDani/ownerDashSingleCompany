
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
import { PiGitPullRequestDuotone } from "react-icons/pi";

const LeaveApplicationList = () => {
  const { toPDF, targetRef } = usePDF({ filename: "Emplist.pdf" });
  const [data, setData] = useState();
  const [searchdata, setSearchData] = useState();
  const [loader, setLoader] = useState(true);
  const [Division, setDivision] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [grade, setGrade] = useState(false);
  const [selectedgrade, setSelectedGrade] = useState(false);
  const [jobtitle, setJobTitle] = useState(null);
  const [selectedJob, setSelectedJobTitle] = useState(null);
  const [reset, setReset] = useState(false);
  const [filteredData, setFilteredData] = useState();
  const dispatch = useDispatch();
  console.log(data);
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
  }, [reset]);

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
      const response = await axios.get(
        `${base_url}PersonalInfoList/CPAYS/FREETEXT/YES/${searchdata}/ALL/ALL/ALL`
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
          `${base_url}PersonalInfoList/CPAYS/ALL/YES/ALL/ALL/ALL/ALL`
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
      let decode = decodeURI(selectedJob);
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoList/CPAYS/ALL/YES/ALL/${decode}/ALL/ALL`
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

    console.log(selectedJob);
  }, [selectedJob]);

  useEffect(() => {
    const getFilteredData = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoList/CPAYS/ALL/YES/ALL/ALL/ALL/${selectedDivision}`
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
  }, [selectedDivision]);

  useEffect(() => {
    const getFilteredData = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoList/CPAYS/ALL/YES/ALL/ALL/${selectedgrade}/ALL`
      );
      if (response?.data) {
        setData(response.data);
      } else {
        console.log("error");
      }
    };
    if (selectedgrade) {
      getFilteredData();
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
    if (data) {
      setLoader(false);
    }
  }, [data]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7">
          <h6 className="mb-2 head-text">Employee List</h6>
          <div className="row">
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search Here"
                onChange={(e) => setSearchData(e.target.value)}
              />
            </div>
            <div className="col-3">
              <select
                class="form-select"
                onChange={(e) => setSelectedJobTitle(e.target.value)}
                aria-label="Default select example"
              >
                <option selected>Job Title</option>
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
                class="form-select"
                onChange={(e) => setSelectedGrade(e.target.value)}
              >
                <option selected>Grade</option>
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
                class="form-select"
                onChange={(e) => setSelectedDivision(e.target.value)}
                aria-label="Default select example"
              >
                <option selected>Division</option>
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
            </div>
          </div>
        </div>
        <div className="col-md-5 text-end">
          <button className="red-btn" onClick={() => setReset(true)}>
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
        </div>
      </div>

      <div className="list-table pt-2 ">
        <table class="table table-striped border shadow-sm" ref={targetRef}>
          <tbody>
            {data && (
              <tr className="table-primary">
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
                <td>Actions</td>
              </tr>
            )}
            {data
              ? data?.map((d, i) => (
                  <tr key={i}>
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
                    <td>
                    <button
                    className="dash-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <PiGitPullRequestDuotone /> Apply
                  </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
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
};

export default LeaveApplicationList;



