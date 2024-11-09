import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

let Leavepopupschema = Yup.object().shape({
  CmpCode: Yup.string(),
  EmpId: Yup.string(),
  LeaveCategory: Yup.string(),
  NoOfLeaves: Yup.string(),
});
const AddLeaveCatPopup = ({EmpIdPopUp}) => {
  const [LeaveCategory, setLeaveCategory] = useState(null);
  const [LeaveData, setLeaveData] = useState();

  

  useEffect(() => {
    const getLeave = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveCategoryList/CPAYS/ALL/-`
      );
      if (response?.data) {
        setLeaveData(response.data);
      } else {
        console.log("error");
      }
    };

    getLeave();
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      CmpCode: "CPAYS",
      EmpId:EmpIdPopUp|| "",
      LeaveCategory: LeaveCategory,
      NoOfLeaves: "",
    },
    validationSchema: Leavepopupschema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div
      class="modal fade"
      id="exampleModalnew"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1
              class="modal-title fs-small text-secondary"
              id="exampleModalLabel"
            >
              Add Leave
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">

            
       <form action="" onSubmit={formik.handleSubmit}>
       <div className="mb-3">
              <label
                for="exampleInputEmail1"
                class="form-label fs-small text-secondary mb-1"
              >
                EmpId
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Emp Id"
                name="EmpId"
                onChange={formik.handleChange("EmpId")}
                onBlur={formik.handleBlur("EmpId")}
                value={formik.values.EmpId}
                disabled
              />
            </div>
            <div class="mb-3 mt-2">
              <label
                for="exampleInputEmail1"
                class="form-label fs-small text-secondary mb-1"
              >
                Leave Category
              </label>
              <select
                onChange={formik.handleChange("LeaveCategory")}
                onBlur={formik.handleBlur("LeaveCategory")}
                value={formik.values.LeaveCategory}
                class="form-select"
                placeholder="Leave Category"
              >
                <option value="">Leave Category </option>
                {LeaveData
                  ? LeaveData?.map((d, i) => (
                      <>
                        <option
                          value={LeaveData[i]?.name}
                          onClick={(e) => setLeaveCategory(e.target.value)}
                        >
                          {LeaveData[i]?.name}
                        </option>{" "}
                      </>
                    ))
                  : null}
              </select>
            </div>


            <div className="mt-2">
              <label
                for="exampleInputEmail1"
                class="form-label fs-small text-secondary mb-1"
              >
                No Of Leaves
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Input Leave No Here.."
                name="NoOfLeaves"
                onChange={formik.handleChange("NoOfLeaves")}
                onBlur={formik.handleBlur("NoOfLeaves")}
                value={formik.values.NoOfLeaves}
              />
            </div>

            <div className="mt-3 text-end">
              <button className="dash-btn">Save</button>
            </div>
       </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLeaveCatPopup;
