import React, { useEffect, useState } from "react";

const LeavePopup = ({ LeaveEmpId, filteredData,setLeaveEmpId ,apiData}) => {
  const [popupData, setpopupData] = useState();
  const [newData, setnewData] = useState();
  useEffect(() => {
    const LeaveDataofemp = filteredData?.filter(
      (data) => data.EmpID === LeaveEmpId
    );
    console.log(LeaveDataofemp)
    setpopupData(LeaveDataofemp);
   
  }, [LeaveEmpId, filteredData]);


  useEffect(() => {
    setnewData(popupData?popupData[0]:null)
  }, [popupData])

  useEffect(() => {
    const LeaveDataofemp = filteredData?.filter(
      (data) => data.EmpID === LeaveEmpId
    );
    console.log(LeaveDataofemp)
    setpopupData(LeaveDataofemp);
   
  }, [LeaveEmpId, filteredData,apiData]);
  

  useEffect(() => {
    setnewData(popupData?popupData[0]:null)
  }, [apiData])

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
              <h5 class="modal-title fs-small text-secondary" id="exampleModalLabel">
                Alloted Leave Details
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={()=>setLeaveEmpId(null)}
              ></button>
            </div>
            <div class="modal-body">
              <div className="leave-allotment container ps-2">
               
                <table class="table">
                  <tbody>
                    <tr className="">
                      <td>Si No</td>
                      <td>Leave Category </td>
                      <td>Alloted Leaves</td>
                    </tr>
                  
                    {newData
                      ? newData.data.map((d, i) => (
                          <>
                            <tr key={i} className="dataTr">
                              <td>{i + 1}</td>
                              <td>{d.LeaveCategory}</td>
                              <td>{d.NoOfLeaves}</td>
                            </tr>
                          </>
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

export default LeavePopup;
