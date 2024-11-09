import React from "react";

const LeaveSummary = () => {
  return (
    <div>
      <div className="border card container p-1">
        <div className="container ps-2">
          <p className="fs-small text-secondary mt-3">
            Recent Leave Application
          </p>
          <table class="table table-striped border">
            <tbody>
              <tr className="table-primary">
                <td>Leave Type</td>
                <td>Application Date</td>
                <td>Leave from</td>
                <td>Leave To</td>
                <td>Total Days</td>
              </tr>
              <tr>
                <td>Emergency Leave</td>
                <td>19/01/2022</td>
                <td>19/09/2022</td>
                <td>01/01/2022</td>
                <td>16</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="container ps-2">
          <p className="fs-small text-secondary mt-2">Recent Rejoin</p>
          <table class="table table-striped border">
            <tbody>
              <tr className="table-primary">
                <td>Leave Type</td>

                <td>Leave from</td>
                <td>Leave To</td>
                <td>Total Days</td>
                <td>Rejoin Date</td>
              </tr>
              <tr>
                <td>Emergency Leave</td>

                <td>19/09/2022</td>
                <td>01/01/2022</td>
                <td>16</td>
                <td>01/01/2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveSummary;
