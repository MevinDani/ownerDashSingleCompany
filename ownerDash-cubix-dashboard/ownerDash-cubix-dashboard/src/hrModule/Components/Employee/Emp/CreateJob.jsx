import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { CreateEmp, resetState } from "../../../features/Emp/EmpSlice";
import { useDispatch, useSelector } from "react-redux";

let schema = Yup.object().shape({
  description: Yup.string(),
});
const CreateJob = ({setcreateData}) => {
  const dispatch = useDispatch();
  const empState = useSelector((state) => state?.emp);
  const formik = useFormik({
    initialValues: {
      description: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(CreateEmp(values));

      if (empState.isSuccess) {
        console.log("SUCCESSS");
        toast.success("Job Created Successfully");
        setcreateData(false)
        resetState();
      } else if (empState.isError) {
        console.log("SOMETHING WENT WRONG");
        toast.error("Something Went wrong ");
      }
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <table class="table">
          <tbody>
            <tr>
              <td className="mt-2">Job Title</td>
              <td>
                {" "}
                <input
                  type="text"
                  class="form-control update-input"
                  placeholder=""
                  name="description"
                  onChange={formik.handleChange("description")}
                  onBlur={formik.handleBlur("description")}
                  value={formik.values.description}
                />
              </td>
              <td>
                <button
                  type="submit"
                  className="dash-btn form-control update-input"
                >
                  Create
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default CreateJob;
