import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

let incschema = Yup.object().shape({
  description: Yup.string(),
  CmpCode: Yup.string(),
  EmpId: Yup.string(),
  AllowanceType: Yup.string(),
  Amount: Yup.string(),
  ADate: Yup.string(),
  AffectOTCalc: Yup.string(),
});
const CreateIncrementPopup = () => {
  const formik = useFormik({
    initialValues: {
      CmpCode: "CPAYS",
      EmpId: "",
      AllowanceType: "",
      Amount: "",
      ADate: "",
      AffectOTCalc: "",
    },

    validationSchema: incschema,
    onSubmit: (values) => {
      values.preventDefault();
      alert(values);
    },
  });

  return (
    <div>
      <div
        class="modal fade"
        id="staticBackdropinc"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1
                class="modal-title fs-small text-secondary"
                id="staticBackdropLabel"
              >
                Create Increment
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={formik.handleSubmit}>
                <div class="mb-3">
                  <label
                    for="exampleInputEmail1"
                    class="form-label fs-small text-secondary"
                  >
                    AllowanceType
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="EmpId"
                    onChange={formik.handleChange("EmpId")}
                    onBlur={formik.handleBlur("EmpId")}
                    value={formik.values.EmpId}
                  />
                </div>
                <div class="mb-3">
                  <label
                    for="exampleInputPassword1"
                    class="form-label fs-small text-secondary"
                  >
                    Amount
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="AllowanceType"
                    onChange={formik.handleChange("AllowanceType")}
                    onBlur={formik.handleBlur("AllowanceType")}
                    value={formik.values.AllowanceType}
                  />
                </div>

                <div class="mb-3">
                  <label
                    for="exampleInputPassword1"
                    class="form-label fs-small text-secondary"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    name="ADate"
                    onChange={formik.handleChange("ADate")}
                    onBlur={formik.handleBlur("ADate")}
                    value={formik.values.ADate}
                  />
                </div>

                <div class="mb-3">
                  <label
                    for="exampleInputPassword1"
                    class="form-label fs-small text-secondary"
                  >
                    Remarks
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="AffectOTCalc"
                    onChange={formik.handleChange("AffectOTCalc")}
                    onBlur={formik.handleBlur("AffectOTCalc")}
                    value={formik.values.AffectOTCalc}
                  />
                </div>

                <div className="text-end">
                  <div type="submit" class="btn dash-btn" onClick={()=>formik.handleSubmit}>
                    Save
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateIncrementPopup;
