import React from 'react'

const AddTimeSheetPopup = ({popUpData}) => {
  return (
    <div>
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title  text-secondary fs-small" id="staticBackdropLabel">Add Timesheet</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label fs-small text-secondary">Emp ID</label>
    <input type="text" class="form-control" value={popUpData?.EmpId}  disabled/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label fs-small text-secondary">Emp Name</label>
    <input type="text" class="form-control" value={popUpData?.Name}  disabled/>
    
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label fs-small text-secondary">Designation</label>
    <input type="text" class="form-control"  value={popUpData?.JobTitle}  disabled/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label fs-small text-secondary">Date</label>
    <input type="text" class="form-control"  disabled/>
    
  </div>
            </div>
            <div className="col-md-6">

            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label fs-small text-secondary">Time</label>
    <input type="text" class="form-control" disabled />
    
  </div>
 

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label fs-small text-secondary">Department</label>
    <input type="text" class="form-control"  />
    
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label fs-small text-secondary">Month</label>
    <input type="text" class="form-control"  />
    
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label fs-small text-secondary">Grade</label>
    <input type="text" class="form-control"  />
    
  </div>
            </div>
          </div>
       

        </div>
      </div>
      <div class="modal-footer">
       
        <button type="button" class="btn dash-btn">Save</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default AddTimeSheetPopup
