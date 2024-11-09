import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { base_url } from "../../../utils/AxiosConfig";

let LeaveCatschema = Yup.object().shape({
  CmpCode: Yup.string(),
  name: Yup.string(),
  icon: Yup.string(),
  code: Yup.string(),
  type: Yup.string(),
  unit: Yup.string(),
  validity_From: Yup.string(),
  validity_To: Yup.string(),
  effectiveAfter_Input: Yup.string(),
  effectiveAfter_List: Yup.string(),
  reset_List: Yup.string(),
  carryForward_Input: Yup.string(),
  carryForward_List: Yup.string(),
  carryForward_Max: Yup.string(),
  encashment_Input: Yup.string(),
  encashment_List: Yup.string(),
  encashment_Max: Yup.string(),
  appl_Departments: Yup.string(),
  appl_Designations: Yup.string(),
  appl_Locations: Yup.string(),
  appl_role: Yup.string(),
  appl_Gender: Yup.string(),
  appl_MaritalStatus: Yup.string(),
  appl_EmployementType: Yup.string(),
});
const EditLeaveCatPopup = ({ LeaveCatName, handleClose }) => {
  const [Data, setData] = useState();
  const [LeaveCatData, setLeaveCatData] = useState();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      CmpCode: "CPAYS",
      name: LeaveCatData?.name || "",
      icon: LeaveCatData?.icon || "-",
      code: LeaveCatData?.code || "",
      type: LeaveCatData?.type || "",
      unit: LeaveCatData?.unit || "",
      validity_From: LeaveCatData?.validity_From || "-",
      validity_To: LeaveCatData?.validity_To || "-",
      effectiveAfter_Input: LeaveCatData?.effectiveAfter_Input || "0",
      effectiveAfter_List: LeaveCatData?.effectiveAfter_List || "",
      reset_List: LeaveCatData?.reset_List || "-",
      carryForward_Input: LeaveCatData?.carryForward_Input || "0",
      carryForward_List: LeaveCatData?.carryForward_List || "-",
      carryForward_Max: LeaveCatData?.carryForward_Max || "0",
      encashment_Input: LeaveCatData?.encashment_Input || "0",
      encashment_List: LeaveCatData?.encashment_List || "",
      encashment_Max: LeaveCatData?.encashment_Max || "0",
      appl_Departments: LeaveCatData?.appl_Departments || "-",
      appl_Designations: LeaveCatData?.appl_Designations || "-",
      appl_Locations: LeaveCatData?.appl_Locations || "-",
      appl_role: LeaveCatData?.appl_role || "",
      appl_Gender: LeaveCatData?.appl_Gender || "-",
      appl_MaritalStatus: LeaveCatData?.appl_MaritalStatus || "-",
      appl_EmployementType: LeaveCatData?.appl_EmployementType || "",
    },
    validationSchema: LeaveCatschema,

    onSubmit: (values) => {
      console.log(values);
      setData([values]);
    },
  });

  useEffect(() => {
    const getLeaveCat = async () => {
      const response = await axios.get(
        `https://cubixweberp.com:156/api/PersonalInfoLeaveCategoryList/CPAYS/SINGLE/${LeaveCatName}`
      );
      console.log(response.data[0]);
      if (response?.data) {
        setLeaveCatData(response.data[0]);
      } else {
        console.log("error");
      }
    };

    getLeaveCat();
  }, [LeaveCatName]);

  useEffect(() => {
    const CreateLeave = async () => {
      const response = await axios.post(
        `${base_url}PersonalInfoLeaveCategory`,Data
      );
      if (response?.status===200) {
        toast.success("Leave Category Created Successfully")
      } else {
        console.log("error");
        toast.error("Something went wrong")
      }
    };
if(Data){
  CreateLeave();
}
 
  }, [Data])



  return (
    <div>
      <div
        class="modal fade"
        id="exampleModalsecond"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h1
                class="modal-title fs-small text-secondary "
                id="exampleModalLabel"
              >
                Edit Leave Category
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => handleClose()}
              ></button>
            </div>
            <div class="modal-body">
              <div className="container-fluid">
                <form onSubmit={formik.handleSubmit}>
                  <div className="row">
                    <div className="col-md-4">
                      <div class="mb-3">
                        <label for="name" className="form-label fs-small">
                          Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          onChange={formik.handleChange("name")}
                          onBlur={formik.handleBlur("name")}
                          value={formik.values.name}
                          disabled

                        />
                      </div>

                      <div class="mb-3">
                        <label for="icon" className="form-label fs-small">
                          Icon
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="icon"
                          onChange={formik.handleChange("icon")}
                          onBlur={formik.handleBlur("icon")}
                          value={formik.values.icon}
                        />
                      </div>

                      <div class="mb-3">
                        <label for="code" className="form-label fs-small">
                          Code
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="code"
                          onChange={formik.handleChange("code")}
                          onBlur={formik.handleBlur("code")}
                          value={formik.values.code}
                          disabled
                        />
                      </div>

                      <div class="mb-3">
                        <label for="name" className="form-label fs-small">
                          Type
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          name="type"
                          onChange={formik.handleChange("type")}
                          onBlur={formik.handleBlur("type")}
                          value={formik.values.type}
                        >
                          <option  selected>{LeaveCatData?.type || "Select Type"}</option>
                          <option value="1">Paid</option>
                          <option value="2">Unpaid</option>
                          <option value="3">On Duty</option>
                          <option value="3">Restricted Holiday</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div class="mb-3">
                        <label for="units" className="form-label fs-small">
                          Units
                        </label>
                        <select
                          class="form-select"
                          name="unit"
                          onChange={formik.handleChange("unit")}
                          onBlur={formik.handleBlur("unit")}
                          value={formik.values.unit}
                        >
                          <option selected>{LeaveCatData?.unit || "Units"}</option>
                          <option value="1">Days</option>
                        </select>
                      </div>

                      <div class="mb-3">
                        <div className="row">
                          <div className="col-6">
                            <label for="code" className="form-label fs-small">
                              From Date
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              name="validity_From"
                              placeholder="Date"
                              onFocus={(e) => (e.target.type = "date")}
                              onChange={formik.handleChange("validity_From")}
                              onBlur={formik.handleBlur("validity_From")}
                              value={formik.values.validity_From}
                            />
                          </div>

                          <div className="col-6">
                            <label for="code" className="form-label fs-small">
                              To Date
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              name="validity_To"
                              placeholder="Date"
                              onFocus={(e) => (e.target.type = "date")}
                              onChange={formik.handleChange("validity_To")}
                              onBlur={formik.handleBlur("validity_To")}
                              value={formik.values.validity_To}
                            />
                          </div>
                        </div>
                      </div>

                      <div class="mb-3">
                        <label for="code" className="form-label fs-small">
                          Effective After
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="effectiveAfter_Input"
                          placeholder="Date"
                          onFocus={(e) => (e.target.type = "date")}
                          onChange={formik.handleChange("effectiveAfter_Input")}
                          onBlur={formik.handleBlur("effectiveAfter_Input")}
                          value={formik.values.effectiveAfter_Input}
                        />
                      </div>

                      <div class="mb-3">
                        <label for="code" className="form-label fs-small">
                          Reset
                        </label>
                        <select
                          class="form-select"
                          name="reset_List"
                          onChange={formik.handleChange("reset_List")}
                          onBlur={formik.handleBlur("reset_List")}
                          value={formik.values.reset_List}
                        >
                          <option selected>Select Type</option>
                          <option value="1">yearly</option>
                          <option value="1">monthly</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div class="mb-3">
                        <label for="units" className="form-label fs-small">
                          Carry forward
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="carryForward_Input"
                          onChange={formik.handleChange("carryForward_Input")}
                          onBlur={formik.handleBlur("carryForward_Input")}
                          value={formik.values.carryForward_Input}
                        />
                      </div>

                      <div class="mb-3">
                        <label for="code" className="form-label fs-small">
                          Encachement
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="encashment_Input"
                          onChange={formik.handleChange("encashment_Input")}
                          onBlur={formik.handleBlur("encashment_Input")}
                          value={formik.values.encashment_Input}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <p className="fs-small text-secondary mt-2">
                      Applicable to
                    </p>
                    <div className="col-md-4">
                      <div class="mb-3">
                        <label for="name" className="form-label fs-small">
                          Departments
                        </label>
                        <select
                          class="form-select"
                          name="appl_Departments"
                          onChange={formik.handleChange("appl_Departments")}
                          onBlur={formik.handleBlur("appl_Departments")}
                          value={formik.values.appl_Departments}
                        >
                          <option value={LeaveCatData?.appl_Departments || "Select Department"} selected>{LeaveCatData?.appl_Departments || "Select Department"}</option>
                          <option value="1">yearly</option>
                          <option value="1">monthly</option>
                        </select>
                      </div>

                      <div class="mb-3">
                        <label for="name" className="form-label fs-small">
                          Designations
                        </label>
                        <select
                          class="form-select"
                          name="appl_Designations"
                          onChange={formik.handleChange("appl_Designations")}
                          onBlur={formik.handleBlur("appl_Designations")}
                          value={formik.values.appl_Designations}
                        >
                          <option value={LeaveCatData?.appl_Designations || "Select Department"} selected>{LeaveCatData?.appl_Designations || "Select Department"}</option>
                          <option value="1">yearly</option>
                          <option value="1">monthly</option>
                        </select>
                      </div>

                      <div class="mb-3">
                        <label for="name" className="form-label fs-small">
                          Locations
                        </label>
                        <select
                          class="form-select"
                          name="appl_Locations"
                          onChange={formik.handleChange("appl_Locations")}
                          onBlur={formik.handleBlur("appl_Locations")}
                          value={formik.values.appl_Locations}
                        >
                          <option selected>{LeaveCatData?.appl_Designations || "appl_Locations"}</option>
                          <option value="1">yearly</option>
                          <option value="1">monthly</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div class="mb-3">
                        <label for="name" className="form-label fs-small">
                          Role
                        </label>
                        <select
                          class="form-select"
                          name="appl_role"
                          onChange={formik.handleChange("appl_role")}
                          onBlur={formik.handleBlur("appl_role")}
                          value={formik.values.appl_role}
                        >
                          <option value={LeaveCatData?.appl_Designations || "Select Role"} selected>{LeaveCatData?.appl_Designations || "Select Role"}</option>
                          <option value="yearly">yearly</option>
                          <option value="monthly">monthly</option>
                        </select>
                      </div>

                      <div class="mb-3">
                        <label for="name" className="form-label fs-small">
                          Gender
                        </label>
                        <select
                          class="form-select"
                          name="appl_Gender"
                          onChange={formik.handleChange("appl_Gender")}
                          onBlur={formik.handleBlur("appl_Gender")}
                          value={formik.values.appl_Gender}
                        >
                          <option value={LeaveCatData?.appl_Gender || "Select Role"} selected>{LeaveCatData?.appl_Gender || "Select Role"}</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>

                      <div class="mb-3">
                        <label for="name" className="form-label fs-small">
                          Marital Status
                        </label>
                        <select
                          class="form-select"
                          name="appl_MaritalStatus"
                          onChange={formik.handleChange("appl_MaritalStatus")}
                          onBlur={formik.handleBlur("appl_MaritalStatus")}
                          value={formik.values.appl_MaritalStatus}
                        >
                          <option value={LeaveCatData?.appl_MaritalStatus || "Select Status"} selected>{LeaveCatData?.appl_MaritalStatus || "Select Status"}</option>
                          <option value="Single">Single</option>
                          <option value="Married">Married</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div class="mb-3">
                        <label for="name" className="form-label fs-small">
                          Employment type
                        </label>
                        <select
                          class="form-select"
                          name="appl_EmployementType"
                          onChange={formik.handleChange("appl_EmployementType")}
                          onBlur={formik.handleBlur("appl_EmployementType")}
                          value={formik.values.appl_EmployementType}
                        >
                          <option value={LeaveCatData?.appl_EmployementType|| "Select EmpType"} selected>{LeaveCatData?.appl_EmployementType || "Select EmpType"}</option>
                          <option value="Permanent">Permanent</option>
                          <option value="on Contract">on Contract</option>
                          <option value="Temporary">Temporary</option>
                          <option value="Trainee">Trainee</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <button type="submit" class="btn dash-btn">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLeaveCatPopup;
