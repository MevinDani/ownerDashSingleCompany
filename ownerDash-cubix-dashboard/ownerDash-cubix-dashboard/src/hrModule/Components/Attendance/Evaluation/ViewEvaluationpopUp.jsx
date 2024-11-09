import React from "react";

const ViewEvaluationpopUp = ({popUpData}) => {
  return (
    <div>
      <div>
        <div
          class="modal fade"
          id="staticBackdropnew"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h1
                  class="modal-title  text-secondary fs-small"
                  id="staticBackdropLabel"
                >
                  View Attendance
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="container-fluid">
                  <table class="table border">
                    <tbody>
                      <tr>
                        <td>EmpID</td>
                        <td>{popUpData?.EmpId}</td>
                      </tr>
                      <tr>
                        <td>Name</td>
                        <td>{popUpData?.Name}</td>
                      </tr>
                      <tr>
                        <td>Designation</td>
                        <td>{popUpData?.JobTitle}</td>
                      </tr>
                    </tbody>
                  </table>
                  <table class="table">
                    <tbody>
                      <tr className="">
                        <td>Date</td>
                        <td>Reg Time </td>
                        <td>Type</td>
                        <td>Total Minutes</td>
                        <td>Total Hours</td>
                      </tr>
                      <tr className="dataTr">
                        <td>04/09/2024</td>
                        <td>4:03 pm</td>
                        <td>-</td>
                        <td>24</td>
                        <td>8</td>
                      </tr>
                      <tr className="dataTr">
                        <td>04/09/2024</td>
                        <td>4:03 pm</td>
                        <td>-</td>
                        <td>24</td>
                        <td>8</td>
                      </tr>
                      <tr className="dataTr">
                        <td>04/09/2024</td>
                        <td>4:03 pm</td>
                        <td>-</td>
                        <td>24</td>
                        <td>8</td>
                      </tr>
                      <tr className="dataTr">
                        <td>04/09/2024</td>
                        <td>4:03 pm</td>
                        <td>-</td>
                        <td>24</td>
                        <td>8</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <div class="modal-footer">
       
        <button type="button" class="btn dash-btn">Save</button>
      </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEvaluationpopUp;
