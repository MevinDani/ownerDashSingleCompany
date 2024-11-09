import React from "react";

const ViewPayroll = ({ popUpData }) => {
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
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1
                  class="modal-title  text-secondary fs-small"
                  id="staticBackdropLabel"
                >
                  View Payroll
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

                      <tr>
                        <td>Loans And Advance</td>
                        <td>0</td>
                      </tr>

                      <tr>
                        <td>Salary Outstanding</td>
                        <td>2000</td>
                      </tr>
                    </tbody>
                  </table>
                  <table class="table">
                    <tbody>
                      <tr className="">
                        <td>SI Now</td>
                        <td>Category </td>
                        <td>Amount</td>
                        <td>Payroll</td>
                        <td>Remarks</td>
                      </tr>
                      <tr className="dataTr">
                        <td>1</td>
                        <td>Deduction </td>
                        <td>20000</td>
                        <td>-</td>
                        <td>Paid</td>
                      </tr>
                      <tr className="dataTr">
                        <td>1</td>
                        <td>Deduction </td>
                        <td>20000</td>
                        <td>-</td>
                        <td>Paid</td>
                      </tr>
                      <tr className="dataTr">
                        <td>1</td>
                        <td>Deduction </td>
                        <td>20000</td>
                        <td>-</td>
                        <td>Paid</td>
                      </tr>

                      <tr className="dataTr">
                        <td>1</td>
                        <td>Deduction </td>
                        <td>20000</td>
                        <td>-</td>
                        <td>Paid</td>
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

export default ViewPayroll;
