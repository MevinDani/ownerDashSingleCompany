import React from "react";

const ViewHolidayPopUp = ({ popUpData }) => {
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
                  Holiday List
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
                        <td>SI Now</td>
                        <td>Date </td>
                        <td>Remarks</td>
                        <td>Delete</td>
                      </tr>
                      <tr className="dataTr">
                        <td>1</td>
                        <td>04/09/2024 </td>
                        <td>Anniversary</td>
                        <td>
                          <button className="red-btn">Delete</button>
                        </td>
                      </tr>

                      <tr className="dataTr">
                        <td>1</td>
                        <td>04/09/2024 </td>
                        <td>Anniversary</td>
                        <td>
                          <button className="red-btn">Delete</button>
                        </td>
                      </tr>
                      <tr className="dataTr">
                        <td>1</td>
                        <td>04/09/2024 </td>
                        <td>Anniversary</td>
                        <td>
                          <button className="red-btn">Delete</button>
                        </td>
                      </tr>
                      <tr className="dataTr">
                        <td>1</td>
                        <td>04/09/2024 </td>
                        <td>Anniversary</td>
                        <td>
                          <button className="red-btn">Delete</button>
                        </td>
                      </tr>
                      <tr className="dataTr">
                        <td>1</td>
                        <td>04/09/2024 </td>
                        <td>Anniversary</td>
                        <td>
                          <button className="red-btn">Delete</button>
                        </td>
                      </tr>
                      <tr className="dataTr">
                        <td>1</td>
                        <td>04/09/2024 </td>
                        <td>Anniversary</td>
                        <td>
                          <button className="red-btn">Delete</button>
                        </td>
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

export default ViewHolidayPopUp;
