import React, { useEffect, useState } from "react";
import ApprovePopup from "./ApprovePopup";
import { AiOutlineNodeExpand } from "react-icons/ai";
import axios from "axios";
import { FallingLines } from "react-loader-spinner";
import { LuPanelLeftOpen, LuPanelRightOpen } from "react-icons/lu";

const LeaveApproval = () => {
  const [Open, setOpen] = useState(false);
  const [DataPending, setDataPending] = useState();
  const [DataApproved, setDataApproved] = useState();
  const [DataRejected, setDataRejected] = useState();
  const [PopUpData, setPopUpData] = useState();
  const [SearchData, setSearchData] = useState();
  const [SearchDataApproved, setSearchDataApproved] = useState();
  const [SearchDataRejected, setSearchDataRejected] = useState();
  const [loader, setLoader] = useState(true);
  const [reloadapiData, setReloadApi] = useState(false);

  // pagination
  const [currentPage, SetcurrentPage] = useState(1);
  const [currentPageApproved, SetcurrentPageApproved] = useState(1);
  const [currentPageRejected, SetcurrentPageRejected] = useState(1);
  const recordsPerPage = 10;


  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const lastIndexApproved = currentPageApproved * recordsPerPage;
  const firstIndexApproved = lastIndexApproved - recordsPerPage;

  const lastIndexRejected = currentPageRejected * recordsPerPage;
  const firstIndexRejected = lastIndexRejected - recordsPerPage;


  const dataPendingrecords = DataPending?.slice(firstIndex, lastIndex);
  const dataApprovedrecords = DataApproved?.slice(firstIndex, lastIndex);
  const dataRejectedrecords = DataRejected?.slice(firstIndex, lastIndex);


  const npage = Math.ceil(DataPending?.length / recordsPerPage);
  const npageApproved = Math.ceil(DataApproved?.length / recordsPerPage);
  const npageRejected = Math.ceil(DataRejected?.length / recordsPerPage);


  const numbers = Array.from({ length:npage }, (_, i) => i + 1);
  const numbersApproved = Array.from({ length:npageApproved }, (_, i) => i + 1);
  const numbersRejected = Array.from({ length:npageRejected }, (_, i) => i + 1);


  useEffect(() => {
    if (DataPending && DataApproved === null) {
      setLoader(true);
    } else if (DataRejected && DataPending && DataApproved) {
      setLoader(false);
    }
  }, [DataPending, DataApproved, DataRejected]);
  useEffect(() => {
    const getDataPending = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveApplicationList/CPAYS/PENDING/-`
      );
      if (response?.data) {
        setDataPending(response.data);
      } else {
        console.log("error");
      }
    };

    getDataPending();
  }, []);

  useEffect(() => {
    const getDataApproved = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveApplicationList/CPAYS/APPROVED/-`
      );
      if (response?.data) {
        setDataApproved(response.data);
      } else {
        console.log("error");
      }
    };

    getDataApproved();
  }, []);

  useEffect(() => {
    const getDataRejected = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveApplicationList/CPAYS/REJECTED/-`
      );
      if (response?.data) {
        setDataRejected(response.data);
      } else {
        console.log("error");
      }
    };

    getDataRejected();
  }, []);

  useEffect(() => {
    const getSearch = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveApplicationList/CPAYS/PENDING/${
          SearchData ? SearchData : "-"
        }`
      );
      if (response?.data) {
        setDataPending(response.data);
      } else {
        console.log("error");
      }
    };

    getSearch();
  }, [SearchData]);

  useEffect(() => {
    const getSearchDataApproved = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveApplicationList/CPAYS/APPROVED/${
          SearchDataApproved ? SearchDataApproved : "-"
        }`
      );
      if (response?.data) {
        setDataApproved(response.data);
      } else {
        console.log("error");
      }
    };

    getSearchDataApproved();
  }, [SearchDataApproved]);

  useEffect(() => {
    const getSearchDataRejected = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveApplicationList/CPAYS/REJECTED/${
          SearchDataRejected ? SearchDataRejected : "-"
        }`
      );
      if (response?.data) {
        setDataRejected(response.data);
      } else {
        console.log("error");
      }
    };

    getSearchDataRejected();
  }, [SearchDataRejected]);

  const reloadApi = (status) => {
    setReloadApi(status);
  };

  useEffect(() => {
    const getDataPending = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveApplicationList/CPAYS/PENDING/-`
      );
      if (response?.data) {
        setDataPending(response.data);
        setReloadApi(false)
      } else {
        console.log("error");
      }
    };
if(reloadapiData && SearchData===null){
  getDataPending();
}
    
  }, [reloadapiData]);

  useEffect(() => {
    const getDataApproved = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveApplicationList/CPAYS/APPROVED/-`
      );
      if (response?.data) {
        setDataApproved(response.data);
      } else {
        console.log("error");
      }
    };

    if(reloadapiData && SearchDataApproved===null){
      getDataApproved();
    }
   
  }, [reloadapiData]);

  useEffect(() => {
    const getDataRejected = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveApplicationList/CPAYS/REJECTED/-`
      );
      if (response?.data) {
        setDataRejected(response.data);
      } else {
        console.log("error");
      }
    };
if(reloadapiData&& SearchDataRejected===null){
  getDataRejected();
}
   
  }, [reloadapiData]);

  return (
    <div>
      <div
        className={
          Open ? "leave-allotment container-fluid ps-2" : "container-fluid ps-2"
        }
      >
        <div className="row">
          <div className="col-6">
            <h6 className="head-text">Leave Approval</h6>
          </div>
          <div className="col-6 text-end">
          {Open===true ?<>< LuPanelRightOpen onClick={()=>setOpen(false)}/></>:null}
    {Open===false ?<><LuPanelLeftOpen onClick={()=>setOpen(true)}/></>:null}
            
          </div>
        </div>
        {dataPendingrecords ? (
          <>
            <div>
              <div className="leave-application-table mt-2">
                <p className="fs-small text-secondary">
                  Leave Request For Approval
                </p>
                <div className="row">
                  <div className="col-3">
                    <input
                      placeholder="Search Here"
                      type="text"
                      className="form-control fs-small mb-2"
                      onChange={(e) => setSearchData(e.target.value)}
                    />
                  </div>
                </div>
                <div className={Open?"table scroll":"table scroll"} style={{height:"auto"}}>
                <table class="table ">
                  <tbody>
                    <tr className="">
                      <td>Si No</td>
                      <td>Name</td>
                      <td>Leave Category</td>
                      <td>Application Date</td>
                      <td>Leave From</td>
                      <td>Leave To</td>
                      <td>Total Days</td>
                     
                    
                  

                      {Open ? (
                        <>
                          {/* <td>Approved By</td>
                          <td>Approval Date</td>
                          <td>Rejoin Date</td> */}
                          
                          <td>Serialcode</td>
                       
                        </>
                      ) : null}
                        <td>Actions</td>
                     
                    </tr>

                    {dataPendingrecords
                      ? dataPendingrecords?.map((d, i) => (
                          <tr className="dataTr">
                            <td>{i + 1}</td>
                            <td>{d.Name}</td>
                            <td>{d.Leave_Category}</td>
                            <td>{d.ApplicationDate}</td>
                            <td>{d.FromDate}</td>
                            <td>{d.ToDate}</td>
                            <td>{d.Days}</td>
                            {/* <td><input type="text" className="form-control"/></td> */}
                            

                            {Open ? (
                              <>
                                {/* <td>{d.ApprovedBy}</td> */}
                                {/* <td>{d.ApprovalDate}</td>
                                <td>{d.RejoinDate}</td> */}
                                <td>{d.Serialcode}</td>
                              </>
                            ) : null}

                            <td>
                              <button
                                className="dash-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={() => setPopUpData(d)}
                              >
                                Approve
                              </button>
                            </td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </table>
                </div>
                {
          dataPendingrecords ?(<>
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

              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link fs-small text-secondary active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    Leave Approved List
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link fs-small text-secondary"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    Leave Rejected List
                  </button>
                </li>
                {/* <li class="nav-item" role="presentation">
              <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>Disabled</button>
            </li> */}
              </ul>
              <div class="tab-content" id="myTabContent">
              <div
                  class="tab-pane fade"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabindex="0"
                >
                            <div className="leave-application-table mt-4 container scroll" style={{height:"auto",maxHeight:"250px"}}>
                    {/* <p className="fs-small text-secondary">Leave Approved List</p> */}
                    <div className="row">
                      <div className="col-3">
                        <input
                          type="text"
                          className="form-control fs-small mb-2"
                          placeholder="Search Here"
                          onChange={(e) =>
                            setSearchDataRejected(e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <table class="table">
                      <tbody>
                        <tr className="">
                          <td>Si No</td>
                          <td>Name</td>
                          <td>Leave Category</td>
                          <td>Application Date</td>
                          <td>Leave From</td>
                          <td>Leave To</td>
                          <td>Total Days</td>
                          {/* <td>Notes</td> */}
                          <td>Ticket Status</td>
                          <td>Approval Status</td>
                        </tr>

                        {dataRejectedrecords
                          ? dataRejectedrecords?.map((d, i) => (
                              <tr className="dataTr">
                                <td>{i + 1}</td>
                                <td>{d.Name}</td>
                                <td>{d.Leave_Category}</td>
                                <td>{d.ApplicationDate}</td>
                                <td>{d.FromDate}</td>
                                <td>{d.ToDate}</td>
                                <td>{d.Days}</td>
                                {/* <td><input type="text" className="form-control"/></td> */}
                                <td>{d.Ticket}</td>
                                <td>{d.ApprovalStatus}</td>
                              </tr>
                            ))
                          : null}
                      </tbody>
                    </table>
                  </div>
                  {
          dataRejectedrecords ?(<>
           <div className="pagination-div">
          <div className="text-end">
             <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    {
                      currentPageRejected !== 1 ? (
                    <button class="page-link" href="#" onClick={prePageRejected}>
                      Previous
                    </button>
                      ) : ''
                    }
                  </li>
                  {numbersRejected.map((n, i) => (
                    <li
                      className={`page-item ${
                        currentPage === n ? "active" : ""
                      }`}
                      key={i}
                    >
                      <button
                        className="page-link"
                        onClick={() => changeCPageRejected(n)}
                        href="#"
                      >
                        {n}
                      </button>
                    </li>
                  ))}

                  <li class="page-item">
                    {
                      currentPageRejected !== numbersRejected[numbersRejected.length - 1] ? (
                    <button class="page-link" href="#" onClick={nextPageRejected}>
                      Next
                    </button>
                      ) : ""
                    }
                  </li>
                </ul>
              </nav>
             </div>
          </div>
          </>):null
        }
              
                </div>
                <div
                  class="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabindex="0"
                >
                     <div className="leave-application-table mt-4 container scroll" style={{height:"auto",maxHeight:"250px"}}>
                    {/* <p className="fs-small text-secondary">Leave Rejected List</p> */}
                    <div className="row">
                      <div className="col-3">
                        <input
                          type="text"
                          className="form-control fs-small mb-2"
                          placeholder="Search Here"
                          onChange={(e) =>
                            setSearchDataApproved(e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <table class="table">
                      <tbody>
                        <tr className="">
                          <td>Si No</td>
                          <td>Name</td>
                          <td>Leave Category</td>
                          <td>Application Date</td>
                          <td>Leave From</td>
                          <td>Leave To</td>
                          <td>Total Days</td>
                          {/* <td>Notes</td> */}
                          <td>Ticket Status</td>
                          <td>Approval Status</td>
                        </tr>

                        {dataApprovedrecords
                          ? dataApprovedrecords?.map((d, i) => (
                              <tr className="dataTr">
                                <td>{i + 1}</td>
                                <td>{d.Name}</td>
                                <td>{d.Leave_Category}</td>
                                <td>{d.ApplicationDate}</td>
                                <td>{d.FromDate}</td>
                                <td>{d.ToDate}</td>
                                <td>{d.Days}</td>
                                {/* <td><input type="text" className="form-control"/></td> */}
                                <td>{d.Ticket}</td>
                                <td>{d.ApprovalStatus}</td>
                              </tr>
                            ))
                          : null}
                      </tbody>
                    </table>
                  </div>
                  {
          dataApprovedrecords ?(<>
           <div className="pagination-div">
          <div className="text-end">
             <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                  {
                      currentPageApproved !== 1 ? (
                    <button class="page-link" href="#" onClick={prePageApproved}>
                      Previous
                    </button>
                      ) : ''
                    }
                  </li>
                  {numbersApproved.map((n, i) => (
                    <li
                      className={`page-item ${
                        currentPage === n ? "active" : ""
                      }`}
                      key={i}
                    >
                      <button
                        className="page-link"
                        onClick={() => changeCPageApproved(n)}
                        href="#"
                      >
                        {n}
                      </button>
                    </li>
                  ))}

                  <li class="page-item">
                  {
                      currentPageApproved !== numbersApproved[numbersApproved.length - 1] ? (
                    <button class="page-link" href="#" onClick={nextPageApproved}>
                      Next
                    </button>
                      ) : ""
                    }
                  </li>
                </ul>
              </nav>
             </div>
          </div>
          </>):null
        }
                </div>
              
                {/* <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
            <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div> */}
              </div>
            </div>
          </>
        ) : null}
        
      </div>
      <ApprovePopup PopUpData={PopUpData} reloadApi={reloadApi}/>
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

  // pending
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

  // approved
  function prePageApproved() {
    if (currentPageApproved !== firstIndexApproved) {
      SetcurrentPageApproved(currentPageApproved - 1);
    }
  }

  function changeCPageApproved(id) {
    SetcurrentPageApproved(id);
  }

  function nextPageApproved() {
    if (currentPageApproved !== lastIndexApproved) {
      SetcurrentPageApproved(currentPageApproved + 1);
    }
  }

  // rejected
  function prePageRejected() {
    if (currentPageRejected !== firstIndexRejected) {
      SetcurrentPageRejected(currentPageRejected - 1);
    }
  }

  function changeCPageRejected(id) {
    SetcurrentPageRejected(id);
  }

  function nextPageRejected() {
    if (currentPageRejected !== lastIndexRejected) {
      SetcurrentPageRejected(currentPageRejected + 1);
    }
  }

};

export default LeaveApproval;
