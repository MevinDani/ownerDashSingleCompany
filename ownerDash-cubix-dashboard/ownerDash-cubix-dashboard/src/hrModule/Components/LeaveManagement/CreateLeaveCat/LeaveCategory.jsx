import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineCreateNewFolder, MdOutlineDelete } from "react-icons/md";
import CreateLeaveCatPopup from "./CreateLeaveCatPopup";
import { base_url } from "../../../utils/AxiosConfig";
import { FallingLines } from "react-loader-spinner";
import EditLeaveCatPopup from "./EditLeaveCatPopup";

const LeaveCategory = () => {
  const [loader, setLoader] = useState(true);
  const [LeaveData, setLeaveData] = useState();
  const [SearchData, setSearchData] = useState(null);
  const [LeaveCatName, setLeaveCatName] = useState(null);
  const [CloseUpdate, setCloseUpdate] = useState(false);

  // pagination
  const [currentPage, SetcurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = LeaveData?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(LeaveData?.length / recordsPerPage);
  const numbers = Array.from({ length: npage }, (_, i) => i + 1);

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

  const handleClose = () => {
    setCloseUpdate(CloseUpdate === true ? false : true);
  };

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
  }, [CloseUpdate]);

  useEffect(() => {
    if (LeaveData === null) {
      setLoader(true);
    } else if (LeaveData) {
      setLoader(false);
    }
  }, [LeaveData]);

  useEffect(() => {
    const getSearchData = async () => {
      const response = await axios.get(
        `${base_url}PersonalInfoLeaveCategoryList/CPAYS/FREETEXT/${SearchData}`
      );
      if (response?.data) {
        setLeaveData(response.data);
      } else {
        console.log("error");
      }
    };
    if (SearchData) {
      getSearchData();
    } else {
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
    }
  }, [SearchData]);

  return (
    <div>
      <div className="container-fluid scroll">
        <div className="row">
          <div className="col-8">
            <h6 className="head-text">Leave Category</h6>
          </div>
          <div className="col-4 text-end">
            <button
              className="dash-btn mb-1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <MdOutlineCreateNewFolder />
              &nbsp;Create
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="search here"
              onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
        </div>
        <CreateLeaveCatPopup handleClose={handleClose} />
        <div className="table-section mt-1">
          {records ? (
            <>
              <table class="table">
                <tbody>
                  <tr className="">
                    <td>Si </td>
                    <td>Code</td>
                    <td>Leave Category</td>
                    <td>Validity From</td>
                    <td>Validity To</td>
                    <td>Type</td>
                    <td>Actions</td>
                  </tr>

                  {records
                    ? records?.map((d, i) => (
                        <tr key={i}  className="dataTr">
                          <td>{i + 1}</td>
                          <td>{d?.code}</td>
                          <td>{d?.name}</td>
                          <td>{d?.validity_From}</td>
                          <td>{d?.Validity_To}</td>
                          <td>{d?.type}</td>
                          <td>
                            <button className="red-btn">
                              <MdOutlineDelete />
                              &nbsp;Delete
                            </button>
                            &nbsp;&nbsp;
                            <button
                              className="dash-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalsecond"
                              onClick={() => setLeaveCatName(d?.name)}
                            >
                              <FaRegEdit />
                              &nbsp;Edit
                            </button>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
        
              <EditLeaveCatPopup
                LeaveCatName={LeaveCatName}
                handleClose={handleClose}
              />
            </>
          ) : null}
        </div>

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

export default LeaveCategory;
