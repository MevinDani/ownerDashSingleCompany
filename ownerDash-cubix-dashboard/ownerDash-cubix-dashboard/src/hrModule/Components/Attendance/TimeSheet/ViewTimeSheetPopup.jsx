import React from 'react'

const ViewTimeSheetPopup = ({popUpData}) => {
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
                View TimeSheet
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

               <div className='scroll h-auto' style={{maxHeight:"250px"}}>
                  <table class="table">
                    <tbody>
                      <tr className="">
                        <td>SI Now</td>
                        <td>Date </td>
                        <td>Type</td>
                        <td>Job Code</td>
                        <td>Job Description</td>
                        <td>Nr Hrs</td>
                        <td>Ot Hrs</td>
                        <td>SOt Hrs</td>
                        <td>NR Rate</td>
                        <td>Ot Rate</td>
                        <td>SOt Rate</td>
                        <td>TAL Wage</td>
                        <td>Remarks</td>
                      </tr>
                      <tr className="dataTr">
                      <td>1</td>
                        <td>04/09/2002 </td>
                        <td>-</td>
                        <td>282</td>
                        <td>nn</td>
                        <td>22</td>
                        <td>3</td>
                        <td>4</td>
                        <td>10</td>
                        <td>20</td>
                        <td>30</td>
                        <td>4000</td>
                        <td>-</td>
                      </tr>
                      <tr className="dataTr">
                      <td>1</td>
                        <td>04/09/2002 </td>
                        <td>-</td>
                        <td>282</td>
                        <td>nn</td>
                        <td>22</td>
                        <td>3</td>
                        <td>4</td>
                        <td>10</td>
                        <td>20</td>
                        <td>30</td>
                        <td>4000</td>
                        <td>-</td>
                      </tr>
                      <tr className="dataTr">
                      <td>1</td>
                        <td>04/09/2002 </td>
                        <td>-</td>
                        <td>282</td>
                        <td>nn</td>
                        <td>22</td>
                        <td>3</td>
                        <td>4</td>
                        <td>10</td>
                        <td>20</td>
                        <td>30</td>
                        <td>4000</td>
                        <td>-</td>
                      </tr>
                      <tr className="dataTr">
                      <td>1</td>
                        <td>04/09/2002 </td>
                        <td>-</td>
                        <td>282</td>
                        <td>nn</td>
                        <td>22</td>
                        <td>3</td>
                        <td>4</td>
                        <td>10</td>
                        <td>20</td>
                        <td>30</td>
                        <td>4000</td>
                        <td>-</td>
                      </tr>
                    </tbody>
                  </table>
               </div>
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
  )
}

export default ViewTimeSheetPopup
