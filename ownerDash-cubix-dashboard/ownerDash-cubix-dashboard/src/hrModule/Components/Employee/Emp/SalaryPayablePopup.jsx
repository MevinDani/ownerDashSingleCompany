import axios from "axios";
import React, { useEffect, useState } from "react";

const SalaryPayablePopup = ({ SalaryPayable }) => {
  const [SalaryPay, setSalaryPayable] = useState();
  const [SearchData, setSearchData] = useState("A");
  const [SelectData, setSelectData] = useState("A");
  useEffect(() => {}, [SelectData]);

  useEffect(() => {
    const getSalaryPayable = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/Search_Accounts/CPAYS/ALL/${
          SearchData ? SearchData : null
        }`
      );
      if (response?.data) {
        setSalaryPayable(response.data);
      } else {
        console.log("error");
      }
    };

    getSalaryPayable();
  }, [SearchData]);

  return (
    <div>
      <div
        class="modal fade"
        id="exampleModalsalary"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Salary Payable
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="row">
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control box-small"
                    placeholder="Search Here"
                    onChange={(e) => setSearchData(e.target.value)}
                  />
                </div>
              </div>
              <table class="table border">
                <tbody>
                  <tr className="table-primary">
                    <td>Si No</td>
                    <td>Description</td>
                    <td>Account</td>
                    <td>Actions</td>
                  </tr>
                  {SalaryPay
                    ? SalaryPay?.map((d, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{d.Description}</td>
                          <td>{d.Account}</td>
                          {/* <td><FaEdit onClick={()=>seteditData(d)} /></td> */}
                          <td>
                            <button
                              className="dash-btn"
                              onClick={() => SalaryPayable(d.Account)}
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            >
                              Select
                            </button>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryPayablePopup;
