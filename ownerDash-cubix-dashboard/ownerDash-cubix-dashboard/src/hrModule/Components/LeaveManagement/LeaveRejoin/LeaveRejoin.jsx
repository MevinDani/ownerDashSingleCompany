import React, { useState } from "react";
import LeaveRejoinPopup from "./LeaveRejoinPopup";
import { AiOutlineNodeExpand } from "react-icons/ai";

const LeaveRejoin = () => {
  const [Open, setOpen] = useState(false);
  return (
    <div>
      <div
        className={
          Open
            ? "leave-allotment container ps-2 expand-scroll"
            : "container ps-2 scroll"
        }
      >
        <div className="row">
          <div className="col-6">
            <h6 className="head-text">Leave Rejoin</h6>
          </div>
          <div className="col-6 text-end">
            <AiOutlineNodeExpand
              className="fs-big"
              onClick={() => setOpen(Open === true ? false : true)}
            />
          </div>
        </div>
        <p className="fs-small text-secondary mt-3">Approved Leave</p>
        <table class="table">
          <tbody>
            <tr className="">
              <td>Si No</td>
              <td>Leave Type</td>
              <td>Application Date</td>
              <td>Leave from</td>
              <td>Leave To</td>
              <td>Total Days</td>
              <td>Emp Id</td>
              <td>Name</td>
              <td>Notes</td>
              <td>Approval Status</td>
              {Open ? (
                <>
                  <td>Join Date</td>
                  <td>Job Title</td>
                  <td>Department</td>

                  <td>Division</td>
                  <td>Grade</td>
                  <td>Nationality</td>
                  <td>Serial Code</td>
                </>
              ) : null}
              <td>Actions</td>
            </tr>
            <tr className="dataTr">
              <td>1</td>
              <td>Emergency Leave</td>
              <td>19/01/2022</td>
              <td>19/09/2022</td>
              <td>01/01/2022</td>
              <td>16</td>
              <td>45555</td>
              <td>Anu</td>
              <td>-</td>

              <td>Approved</td>
              {Open ? (
                <>
                  <td>04/09/1998</td>
                  <td>Sodtware developer</td>
                  <td>it</td>

                  <td>B</td>
                  <td>C</td>
                  <td>Indian</td>
                  <td>12445</td>
                </>
              ) : null}

              <td>
                <button
                  className="dash-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Rejoin
                </button>
              </td>
            </tr>
            <tr className="dataTr">
              <td>1</td>
              <td>Emergency Leave</td>
              <td>19/01/2022</td>
              <td>19/09/2022</td>
              <td>01/01/2022</td>
              <td>16</td>
              <td>45555</td>
              <td>Anu</td>
              <td>-</td>

              <td>Approved</td>
              {Open ? (
                <>
                  <td>04/09/1998</td>
                  <td>Sodtware developer</td>
                  <td>it</td>

                  <td>B</td>
                  <td>C</td>
                  <td>Indian</td>
                  <td>12445</td>
                </>
              ) : null}

              <td>
                <button
                  className="dash-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Rejoin
                </button>
              </td>
            </tr>

            <tr className="dataTr">
              <td>1</td>
              <td>Emergency Leave</td>
              <td>19/01/2022</td>
              <td>19/09/2022</td>
              <td>01/01/2022</td>
              <td>16</td>
              <td>45555</td>
              <td>Anu</td>
              <td>-</td>

              <td>Approved</td>
              {Open ? (
                <>
                  <td>04/09/1998</td>
                  <td>Sodtware developer</td>
                  <td>it</td>

                  <td>B</td>
                  <td>C</td>
                  <td>Indian</td>
                  <td>12445</td>
                </>
              ) : null}

              <td>
                <button
                  className="dash-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Rejoin
                </button>
              </td>
            </tr>
            <tr className="dataTr">
              <td>1</td>
              <td>Emergency Leave</td>
              <td>19/01/2022</td>
              <td>19/09/2022</td>
              <td>01/01/2022</td>
              <td>16</td>
              <td>45555</td>
              <td>Anu</td>
              <td>-</td>

              <td>Approved</td>
              {Open ? (
                <>
                  <td>04/09/1998</td>
                  <td>Sodtware developer</td>
                  <td>it</td>

                  <td>B</td>
                  <td>C</td>
                  <td>Indian</td>
                  <td>12445</td>
                </>
              ) : null}

              <td>
                <button
                  className="dash-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Rejoin
                </button>
              </td>
            </tr>
            <tr className="dataTr">
              <td>1</td>
              <td>Emergency Leave</td>
              <td>19/01/2022</td>
              <td>19/09/2022</td>
              <td>01/01/2022</td>
              <td>16</td>
              <td>45555</td>
              <td>Anu</td>
              <td>-</td>

              <td>Approved</td>
              {Open ? (
                <>
                  <td>04/09/1998</td>
                  <td>Sodtware developer</td>
                  <td>it</td>

                  <td>B</td>
                  <td>C</td>
                  <td>Indian</td>
                  <td>12445</td>
                </>
              ) : null}

              <td>
                <button
                  className="dash-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Rejoin
                </button>
              </td>
            </tr>
            <tr className="dataTr">
              <td>1</td>
              <td>Emergency Leave</td>
              <td>19/01/2022</td>
              <td>19/09/2022</td>
              <td>01/01/2022</td>
              <td>16</td>
              <td>45555</td>
              <td>Anu</td>
              <td>-</td>

              <td>Approved</td>
              {Open ? (
                <>
                  <td>04/09/1998</td>
                  <td>Sodtware developer</td>
                  <td>it</td>

                  <td>B</td>
                  <td>C</td>
                  <td>Indian</td>
                  <td>12445</td>
                </>
              ) : null}

              <td>
                <button
                  className="dash-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Rejoin
                </button>
              </td>
            </tr>
            <tr className="dataTr">
              <td>1</td>
              <td>Emergency Leave</td>
              <td>19/01/2022</td>
              <td>19/09/2022</td>
              <td>01/01/2022</td>
              <td>16</td>
              <td>45555</td>
              <td>Anu</td>
              <td>-</td>

              <td>Approved</td>
              {Open ? (
                <>
                  <td>04/09/1998</td>
                  <td>Sodtware developer</td>
                  <td>it</td>

                  <td>B</td>
                  <td>C</td>
                  <td>Indian</td>
                  <td>12445</td>
                </>
              ) : null}

              <td>
                <button
                  className="dash-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Rejoin
                </button>
              </td>
            </tr>
            <tr className="dataTr">
              <td>1</td>
              <td>Emergency Leave</td>
              <td>19/01/2022</td>
              <td>19/09/2022</td>
              <td>01/01/2022</td>
              <td>16</td>
              <td>45555</td>
              <td>Anu</td>
              <td>-</td>

              <td>Approved</td>
              {Open ? (
                <>
                  <td>04/09/1998</td>
                  <td>Sodtware developer</td>
                  <td>it</td>

                  <td>B</td>
                  <td>C</td>
                  <td>Indian</td>
                  <td>12445</td>
                </>
              ) : null}

              <td>
                <button
                  className="dash-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Rejoin
                </button>
              </td>
            </tr>
            <tr className="dataTr">
              <td>1</td>
              <td>Emergency Leave</td>
              <td>19/01/2022</td>
              <td>19/09/2022</td>
              <td>01/01/2022</td>
              <td>16</td>
              <td>45555</td>
              <td>Anu</td>
              <td>-</td>

              <td>Approved</td>
              {Open ? (
                <>
                  <td>04/09/1998</td>
                  <td>Sodtware developer</td>
                  <td>it</td>

                  <td>B</td>
                  <td>C</td>
                  <td>Indian</td>
                  <td>12445</td>
                </>
              ) : null}

              <td>
                <button
                  className="dash-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Rejoin
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="leave-application-table mt-2 container-fluid">
        <p className="fs-small text-secondary">Recent Rejoin</p>
        <table class="table table-striped border ">
          <tbody>
            <tr className="table-primary">
              <td>Si No</td>
              <td>Leave Type</td>
              <td>Apl DT</td>
              <td>From Dt</td>
              <td>To Dt</td>
              <td>Leaves </td>
              <td>Notes</td>
              <td>Ticket</td>
              <td>Status</td>
              <td></td>
            </tr>

            <tr>
              <td>1</td>
              <td>Annual Leave</td>
              <td>04/09/2022</td>
              <td>01/10/2022</td>
              <td>16</td>
              <td>-</td>
              <td>Approved</td>
              <td></td>
              <td>Joined</td>
            </tr>
          </tbody>
        </table>
      </div>

      <LeaveRejoinPopup />
    </div>
  );
};

export default LeaveRejoin;
