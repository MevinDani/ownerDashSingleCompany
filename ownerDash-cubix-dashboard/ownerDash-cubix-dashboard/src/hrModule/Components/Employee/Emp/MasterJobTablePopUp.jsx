import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";
import EditJobTitle from "./EditJobTitle";
import CreateJob from "./CreateJob";
import { useEffect } from "react";
import { FaStepBackward } from "react-icons/fa";

const MasterJobTablePopUp = ({ empState, SetApi }) => {
  const [close, setCloseData] = useState(false);
  const [editData, seteditData] = useState(false);
  const [createData, setcreateData] = useState(false);

  useEffect(() => {
    if (close === true) {
      seteditData(false);
      setcreateData(false);
    }
  }, [close]);

  function back(data) {
    seteditData(data);
    setcreateData(data);
  }

  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Job Listing
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setcreateData(false)}
              ></button>
            </div>
            <div class="modal-body">
              {editData === false && createData === false ? (
                <>
                  <div className="first">
                    <div className="text-end create-btn">
                      <MdLibraryAdd
                        className="add-i mb-1"
                        onClick={() => setcreateData(true)}
                      />{" "}
                    </div>

                    <table class="table table-striped border shadow-sm ">
                      <tbody>
                        <tr className="table-primary">
                          <td>Si No</td>
                          <td>Job Title</td>
                          <td>Actions</td>
                        </tr>
                        {empState
                          ? empState?.map((d, i) => (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{d.Description}</td>
                                {/* <td>{d.TranId}</td> */}
                                <td>
                                  <FaEdit onClick={() => seteditData(d)} />
                                </td>
                              </tr>
                            ))
                          : null}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : null}

              {editData && createData === false ? (
                <>
                  <h6>Edit Job </h6>
                  <EditJobTitle editData={editData} seteditData={seteditData} />
                </>
              ) : null}

              {createData === true ? (
                <>
                  <h6>Create Job </h6>
                  <CreateJob setcreateData={setcreateData} />
                </>
              ) : null}
            </div>
            <div class="modal-footer">
              {
                createData===false && editData===false ? <></>:<> <button
                type="button"
                class="btn dash-btn"
                
                onClick={() =>
                  back(
                    editData === true
                      ? false
                      : true || createData === true
                      ? false
                      : true || ""
                  )
                }
              >
                <FaStepBackward />Back
                &nbsp;
              </button></>
              }
            
             
             
           
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterJobTablePopUp;
