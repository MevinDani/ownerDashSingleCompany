import React from "react";

const AddLeavePopup = () => {
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModalcreate"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Leave Allotment
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Leave Category{" "}
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Annual Leave</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Alloted Leaves{" "}
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Notes
                  </label>
                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                    ></textarea>
                    <label for="floatingTextarea">Your Notes Here</label>
                  </div>
                </div>

                <div className="text-end ">
                  <button type="submit" class="btn btn-primary dash-btn">
                    Save
                  </button>
                  &nbsp;&nbsp;&nbsp;
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLeavePopup;
