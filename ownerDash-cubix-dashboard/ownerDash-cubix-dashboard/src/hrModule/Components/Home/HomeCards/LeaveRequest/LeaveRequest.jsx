import React from "react";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import "../LeaveRequest/leaverequeststyle.css";
const LeaveRequest = () => {
  return (
    <div>
      <div className="card border p-2 mb-2 ch">
        <p className="fs-small text-secondary mt-1">
          <VscGitPullRequestGoToChanges />
          &nbsp;Leave Requests
        </p>
        <div className="row text-center">
          <div className="col-6">
            <h6 className="text-secondary">1</h6>
            <p className="text-secondary fs-small">Pending</p>
          </div>
          <div className="col-6">
            <h6 className="text-secondary">3</h6>
            <p className="text-secondary fs-small">Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequest;
