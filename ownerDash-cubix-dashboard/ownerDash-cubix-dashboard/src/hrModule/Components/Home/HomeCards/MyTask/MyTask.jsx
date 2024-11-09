import React from "react";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
const MyTask = () => {
  return (
    <div>
      <div className="card border p-2 mb-2 ch">
        <p className="fs-small text-secondary mt-1">
          <VscGitPullRequestGoToChanges />
          &nbsp;My Tasks
        </p>
        <div className="row text-center">
          <div className="col-6">
            <h6 className="text-secondary">2</h6>
            <p className="text-secondary fs-small">Pending</p>
          </div>
          <div className="col-6">
            <h6 className="text-secondary">10</h6>
            <p className="text-secondary fs-small">Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTask;
