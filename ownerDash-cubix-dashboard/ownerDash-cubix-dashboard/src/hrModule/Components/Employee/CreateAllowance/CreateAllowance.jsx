import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CreateAlvnce, GetAlv } from "../../../features/Emp/EmpSlice";
import axios from "axios";

let alvnceschema = Yup.object().shape({
  CmpCode: Yup.string(),
  EmpId: Yup.string(),
  AllowanceType: Yup.string(),
  Amount: Yup.string(),
  ADate: Yup.string(),
  AffectOTCalc: Yup.string(),
});
const CreateAllowance = ({ calculationAlv ,EmpIdTop}) => {
  const ref = useRef();
  const empStateAlv = useSelector((state) => state?.emp.GetAlv);
  const [emp, setEmp] = useState(null);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      CmpCode: "CPAYS",
      EmpId: EmpIdTop||"",
      AllowanceType: "",
      Amount: "",
      ADate: "",
      AffectOTCalc: "",
    },
    validationSchema: alvnceschema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setEmp(values.EmpId);
      setData(values)

      dispatch(CreateAlvnce([values]));
      resetForm();
    },
  });

  useEffect(() => {
    dispatch(GetAlv(emp));
  }, [emp]);

  useEffect(() => {
    dispatch(CreateAlvnce([data]));
  }, [data])
  

  useEffect(() => {
    // let Incsum=IncrementDat?.reduce((a,v) =>  a = a + v.Amount , 0 )
    let AlvSum = empStateAlv?.reduce((a, v) => (a = a + v.Amount), 0);

    calculationAlv(AlvSum);
    // setAlvTotal(AlvSum)
  }, [empStateAlv]);

  return (
    <div className="alowance-data">
      <form action="" onSubmit={formik.handleSubmit}>
        <table class="table table-striped border">
          <thead></thead>
          <tbody>
            <tr className="table-primary ">
              {/* <td>EmpId</td> */}
              <td>AllowanceType</td>
              <td>Amount </td>
              <td>Date </td>
              <td>Reason </td>
              <td>Actions</td>
            </tr>

            <tr>
              {/* <td>
                <input
                  type="text"
                  className="form-control"
                  name="EmpId"
                  onBlur={formik.handleBlur("EmpId")}
                  value={formik.values.EmpId}
                  onChange={formik.handleChange("EmpId")}
                  disabled
                />
              </td> */}
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="AllowanceType"
                  onChange={formik.handleChange("AllowanceType")}
                  onBlur={formik.handleBlur("AllowanceType")}
                  value={formik.values.AllowanceType}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="Amount"
                  onChange={formik.handleChange("Amount")}
                  onBlur={formik.handleBlur("Amount")}
                  value={formik.values.Amount}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  ref={ref}
                  name="ADate"
                  placeholder="Date"
                  onFocus={() => (ref.current.type = "date")}
                  onChange={formik.handleChange("ADate")}
                  onBlur={formik.handleBlur("ADate")}
                  value={formik.values.ADate}
                />{" "}
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="AffectOTCalc"
                  onChange={formik.handleChange("AffectOTCalc")}
                  onBlur={formik.handleBlur("AffectOTCalc")}
                  value={formik.values.AffectOTCalc}
                />
              </td>
              <td>
                <button
                  className="dash-btn"
                  type="submit"
                  onClick={formik.handleSubmit}
                >
                  Create
                </button>
              </td>
            </tr>

            {empStateAlv
              ? empStateAlv?.map((d, i) => (
                  <tr key={i}>
                    {/* <td>{d.EmpID}</td> */}
                    <td>{d.AllowanceType}</td>
                    <td>{d.Amount}</td>
                    <td>{d.ADate}</td>
                    <td>{d.AffectOTCalc}</td>
                    <td>
                      <button className="red-btn">Remove</button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>

        {/* <table className="table table-striped border">
                          <tbody>
                          <tr className="table-primary ">
                            <td>Si No</td>
                            <td>Description</td>
                            <td>Amount </td>
                            <td>Date </td>
                            <td>Reason </td>
                          </tr>
                          
                        </tbody>
                          </table> */}
      </form>
    </div>
  );
};

export default CreateAllowance;
