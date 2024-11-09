import React, { useRef } from "react";

const LeaveRejoinPopup = () => {
  const ref = useRef();
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Rejoin Update
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="leave-application-table mt-2 container-fluid">
                <p className="fs-small text-secondary">Rejoin</p>
                <table class="table">
                  <tbody>
                    <tr>
                      <td>Leave Taken</td>
                      <td>Emergency Leave</td>
                    </tr>

                    <tr>
                      <td>Leave From</td>
                      <td>
                        <input
                          className="form-control small-box"
                          type="text"
                          placeholder="01/10/2022"
                          ref={ref}
                          onChange={(e) => console.log(e.target.value)}
                          onFocus={() => (ref.current.type = "date")}
                          onBlur={() => (ref.current.type = "date")}
                          disabled
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Leave to</td>
                      <td>
                        <input
                          className="form-control small-box"
                          type="text"
                          placeholder="04/10/2022"
                          ref={ref}
                          onChange={(e) => console.log(e.target.value)}
                          onFocus={() => (ref.current.type = "date")}
                          onBlur={() => (ref.current.type = "date")}
                          disabled
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Rejoined On</td>
                      <td>
                        <input
                          className="form-control small-box"
                          type="text"
                          placeholder="Rejoin Date"
                          ref={ref}
                          onChange={(e) => console.log(e.target.value)}
                          onFocus={() => (ref.current.type = "date")}
                          onBlur={() => (ref.current.type = "date")}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Early Or late By</td>
                      <td>
                        <b className="text-primary">429 Days</b>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="text-end">
                        <button className="dash-btn">Save</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="leave-application-table mt-2 container-fluid">
                <p className="fs-small text-secondary">
                  Current Leave Status Of Employee
                </p>
                <table class="table">
                  <tbody>
                    <tr className="">
                      <td>Si No</td>
                      <td>Leave Type</td>
                      <td>From Dt</td>
                      <td>To Dt</td>
                      <td>Leaves</td>
                      <td>Rejoin On </td>
                      <td>Status</td>
                    </tr>

                    <tr className="dataTr">
                      <td>1</td>
                      <td>Annual Leave</td>
                      <td>04/09/2022</td>
                      <td>01/10/2022</td>
                      <td>16</td>
                      <td>-</td>
                      <td>Approved</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="leave-application-table mt-2 container-fluid">
                <p className="fs-small text-secondary">Recent Rejoin History</p>
                <table class="table">
                  <tbody>
                    <tr className="">
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

                    <tr className="dataTr">
                      <td>1</td>
                      <td>Annual Leave</td>
                      <td>04/09/2022</td>
                      <td>01/10/2022</td>
                      <td>16</td>
                      <td>-</td>
                      <td>Approved</td>
                    </tr>
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

export default LeaveRejoinPopup;
