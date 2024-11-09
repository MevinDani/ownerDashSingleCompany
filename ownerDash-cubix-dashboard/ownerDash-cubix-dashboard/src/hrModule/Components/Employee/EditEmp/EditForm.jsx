import React, { useEffect, useState } from "react";

import { IoIosPerson } from "react-icons/io";
import { GiOfficeChair } from "react-icons/gi";
import { MdContactEmergency, MdMenuOpen } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { MdAddChart } from "react-icons/md";

import { MdFormatListBulletedAdd } from "react-icons/md";
// import MasterJobTablePopUp from "./MasterJobTablePopUp";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { GetAlv, GetInc, getAllEmp } from "../../../features/Emp/EmpSlice";
import { TbEPassport } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";
import { IoDocumentsOutline } from "react-icons/io5";
import { GiThreeLeaves } from "react-icons/gi";
import { MdAddCircleOutline } from "react-icons/md";
import CreateIncrementPopup from "../ViewEmp/CreateIncrementPopup";
import axios from "axios";
import SalaryPayablePopup from "../Emp/SalaryPayablePopup";
import { base_url } from "../../../utils/AxiosConfig";
import CreateAllowance from "../CreateAllowance/CreateAllowance";
import CreateIncrement from "../CreateIncrement/CreateIncrement";
import MasterJobTablePopUp from "../Emp/MasterJobTablePopUp";

import { toast } from 'react-toastify';


let Empschema = Yup.object().shape({
  CmpCode: Yup.string(),
  EmpId: Yup.string(),
  AlternateID: Yup.string(),
  Status: Yup.string(),
  Title: Yup.string(),
  FistName: Yup.string(),
  MiddleName: Yup.string(),
  LastName: Yup.string(),
  DOB: Yup.string(),
  MaritalStatus: Yup.string(),
  Gender: Yup.string(),
  Nationality: Yup.string(),
  Height: Yup.string(),
  Weight: Yup.string(),
  JoinDate: Yup.string(),
  JobTitle: Yup.string(),
  JobType: Yup.string(),
  ShiftGroup: Yup.string(),
  Department: Yup.string(),
  Division: Yup.string(),
  Grade: Yup.string(),
  BankAccountNo: Yup.string(),
  BankName: Yup.string(),
  AgentID: Yup.string(),
  CurrentAddress: Yup.string(),
  HomeAddress: Yup.string(),
  HomeAirport: Yup.string(),
  WorkMobile: Yup.string(),
  PersonalMobile: Yup.string(),
  WorkPhone: Yup.string(),
  PersonalPhone: Yup.string(),
  WorkEmail: Yup.string(),
  PersonalEmail: Yup.string(),
  PassportNo: Yup.string(),
  PassportIssueDate: Yup.string(),
  PassportExpiryDate: Yup.string(),
  PassportPlaceofIssue: Yup.string(),
  PassportCountryofIssue: Yup.string(),
  EmiratesId: Yup.string(),
  EmiratesIdExpiryDate: Yup.string(),
  VisaNo: Yup.string(),
  VisaExpiryDate: Yup.string(),
  InsuranceNo: Yup.string(),
  InsuranceExpiryDate: Yup.string(),
  DrivingLicenceNo: Yup.string(),
  DrivingLicenceExpiryDate: Yup.string(),
  PersonId: Yup.string(),
  PersonIdExpiryDate: Yup.string(),
  BasicPay: Yup.string(),
  Allowances_OT: Yup.string(),
  Allowances_NOT: Yup.string(),
  NetSalary: Yup.string(),
  NormalHrs: Yup.string(),
  HourlyWage: Yup.string(),
  OTrate: Yup.string(),
  SplOtRate: Yup.string(),
  photo: Yup.string(),
  Active: Yup.string(),
  Memos: Yup.string(),
  Notes: Yup.string(),
  SalaryAc: Yup.string(),
  AdvanceAc: Yup.string(),
  password: Yup.string(),
  onlineallow: Yup.string(),
});
const EditForm = ({ getEmpid }) => {
  const dispatch = useDispatch();

  const [basicPay, setbasicPay] = useState(null);
  const [IncTotal, setIncTotal] = useState(null);
  const [AlvTotal, setAlvTotal] = useState(null);
  const [Category, setCategory] = useState(true);
  const [empState, setempState] = useState();
  const [SalaryPayment, setSalaryPay] = useState();
  const empStateAlv = useSelector((state) => state?.emp.GetAlv);
  const empStateInc = useSelector((state) => state?.emp.GetInc);
  const empStatelist = useSelector((state) => state?.emp?.emplist);

  const [valuedata, setValuedata] = useState();

  const handleButtonClick = (e) => {
    e.preventDefault();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      CmpCode: "",
      EmpId: empState?.EmpId || "",
      AlternateID: empState?.AlternateID || "",
      Status: empState?.Status || "",
      Title: empState?.Title || "",
      FistName: empState?.FistName || "",
      MiddleName: empState?.MiddleName || "",
      LastName: empState?.LastName || "",
      DOB: empState?.DOB || "",
      MaritalStatus: empState?.MaritalStatus || "",
      Gender: empState?.Gender || "",
      Nationality: empState?.Nationality || "",
      Height: empState?.Height || "",
      Weight: empState?.Weight || "",
      JoinDate: empState?.JoinDate || "",
      JobTitle: empState?.JobTitle || "",
      JobType: empState?.JobType || "",
      ShiftGroup: empState?.ShiftGroup || "",
      Department: empState?.Department || "",
      Division: empState?.Division || "",
      Grade: empState?.Grade || "",
      BankAccountNo: empState?.BankAccountNo || "",
      BankName: empState?.BankName || "",
      AgentID: empState?.AgentID || "",
      CurrentAddress: empState?.CurrentAddress || "",
      HomeAddress: empState?.HomeAddress || "",
      HomeAirport: empState?.HomeAirport || "",
      WorkMobile: empState?.WorkMobile || "",
      PersonalMobile: empState?.PersonalMobile || "",
      WorkPhone: empState?.WorkPhone || "",
      PersonalPhone: empState?.PersonalPhone || "",
      WorkEmail: empState?.WorkEmail || "",
      PersonalEmail: empState?.PersonalEmail || "",
      PassportNo: empState?.PassportNo || "",
      PassportIssueDate: empState?.PassportIssueDate || "",
      PassportExpiryDate: empState?.PassportExpiryDate || "",
      PassportPlaceofIssue: empState?.PassportPlaceofIssue || "",
      PassportCountryofIssue: empState?.PassportCountryofIssue || "",
      EmiratesId: empState?.EmiratesId || "",
      EmiratesIdExpiryDate: empState?.EmiratesIdExpiryDate || "",
      VisaNo: empState?.VisaNo || "",
      VisaExpiryDate: empState?.VisaExpiryDate || "",
      InsuranceNo: empState?.InsuranceNo || "",
      InsuranceExpiryDate: empState?.InsuranceExpiryDate || "",
      DrivingLicenceNo: empState?.DrivingLicenceNo || "",
      DrivingLicenceExpiryDate: empState?.DrivingLicenceExpiryDate || "",
      PersonId: empState?.PersonId || "",
      PersonIdExpiryDate: empState?.PersonIdExpiryDate || "",
      BasicPay: basicPay?basicPay:empState?.BasicPay || "",
      Allowances_OT: AlvTotal || "",
      Allowances_NOT: IncTotal || "",
      NetSalary:basicPay+IncTotal+AlvTotal?basicPay+IncTotal+AlvTotal : empState?.NetSalary ||"",
      NormalHrs: empState?.NormalHrs || "",
      HourlyWage: empState?.HourlyWage || "",
      OTrate: empState?.OTrate || "",
      SplOtRate: empState?.SplOtRate || "",
      photo: "",
      Active: empState?.Active || "",
      Memos: empState?.Memos || "",
      Notes: empState?.Notes || "",
      SalaryAc: empState?.SalaryAc || "",
      AdvanceAc: empState?.AdvanceAc || "",
      password: empState?.password || "",
      onlineallow: empState?.onlineallow || "",
    },
    validationSchema: Empschema,
    onSubmit: async(values) => {
      console.log(values)

      setValuedata([values]);

       
      axios.post(
        `https://cubixweberp.com:156/api/PersonalInfoReg/`, [values]
      ).then((response) => {
        if (response.status===200){
           
            toast.success('employee edited Successfully')
            

          }else{
            
            toast.error('Something Went wrong ')
        }
      })
     
  console.log(values);

      // const res = await axios.post(`https://cubixweberp.com:156/api/PersonalInfoReg/`, [values], {
      //   headers: {
      //     // Overwrite Axios's automatically set Content-Type
      //     'Content-Type': 'application/json'
      //   }
      // });
  
      // console.log(res.data) 

      // console.log(valuedata)
      // if(valuedata) {
      //   editEmployee()
      // }
    },
  });

  const editEmployee = async() => {

    // console.log(values,'editEmployee')
    // const json = JSON.stringify(values);
    // setValuedata([values])

    console.log(valuedata)
    const res = await axios.post(`https://cubixweberp.com:156/api/PersonalInfoReg/`, valuedata, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    });

    console.log(res.data)  
  }

  const calculationInc = (Incsum) => {
    // the callback. Use a better name
    console.log(Incsum);
    setIncTotal(Incsum);
  };
  const calculationAlv = (Alvsum) => {
    // the callback. Use a better name
    console.log(Alvsum);
    setAlvTotal(Alvsum);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `${base_url}PersonalInfoList/CPAYS/SINGLE/YES/${getEmpid}/ALL/ALL/ALL`
      );
      if (response?.data) {
        setempState(response.data[0]);
      } else {
        console.log("error");
      }
    };

    getData();
  }, [getEmpid]);

  useEffect(() => {
    dispatch(GetAlv(empState?.EmpId));
    dispatch(GetInc(empState?.EmpId));
  }, [empState?.EmpId]);

  useEffect(() => {
    const getData = async () => {
      dispatch(getAllEmp());
    };

    getData();
  }, []);

  useEffect(() => {
    let Incsum = empStateInc?.reduce((a, v) => (a = a + v.Amount), 0);

    setIncTotal(Incsum);
  }, [empStateInc]);

  useEffect(() => {
    let AlvSum = empStateAlv?.reduce((a, v) => (a = a + v.Amount), 0);

    setAlvTotal(AlvSum);
  }, [empStateAlv]);

  function handleAddrTypeChange(e) {
    setCategory(e.target.value);
    console.log(Category);
  }
  const SalaryPayable = (SalaryPay) => {
    // the callback. Use a better name
    console.log(SalaryPay);
    setSalaryPay(SalaryPay);
  };

  return (
    <div>
      {empState && (
        <>
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="container-fluid">
              <h6 className="mb-2 head-text">
                Edit Employee {empState.EmpId ? empState.EmpId : null}
              </h6>
              <div className="row personal-box p-2 pt-4">
                {/* <div className="col-md-3">
                  <div class="mb-3">
                    <input
                      type="text"
                      name="CmpCode"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="CmpCode"
                      onChange={formik.handleChange("CmpCode")}
                      onBlur={formik.handleBlur("CmpCode")}
                      value={formik.values.CmpCode}
                    />
                  </div>
                </div> */}
                <div className="col-md-3">
                  <div class="mb-3">
                    <input
                      type="text"
                      name="EmpId"
                      class="form-control"
                      placeholder="EmpId"
                      onChange={formik.handleChange("EmpId")}
                      onBlur={formik.handleBlur("EmpId")}
                      value={formik.values.EmpId}
                    />
                    <div className="error">
                      {formik.touched.EmpId && formik.errors.EmpId}
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div class="mb-3">
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      placeholder="Password"
                      onChange={formik.handleChange("password")}
                      onBlur={formik.handleBlur("password")}
                      value={formik.values.password}
                    />
                    <div className="error">
                      {formik.touched.password && formik.errors.password}
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div class="mb-3">
                    <input
                      type="text"
                      name="AlternateID"
                      class="form-control"
                      placeholder="AlternateID"
                      onChange={formik.handleChange("AlternateID")}
                      onBlur={formik.handleBlur("AlternateID")}
                      value={formik.values.AlternateID}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div class="mb-3">
                    <select
                      class="form-select form-control"
                      aria-label="Default select example"
                      name="Status"
                      onChange={formik.handleChange("Status")}
                      onBlur={formik.handleBlur("Status")}
                      value={formik.values.Status}
                    >
                      <option selected placeholder="Select Status">
                        Status
                      </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="personal">
                <h6 className="mb-2 sub-head mt-3">
                  <IoIosPerson />
                  &nbsp;Personal
                </h6>
                <div className="row ">
                  <div className="col-md-4">
                    <div class="mb-2">
                      <label for="exampleInputEmail1" class="form-label">
                        Title
                      </label>
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                        name="Title"
                        onChange={formik.handleChange("Title")}
                        onBlur={formik.handleBlur("Title")}
                        value={formik.values.Title}
                      >
                        <option selected>Title</option>
                        <option value="1">Mr</option>
                        <option value="2">Sri</option>
                      </select>
                    </div>

                    <div class="mb-2">
                      <label for="exampleInputPassword1" class="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        name="LastName"
                        placeholder="LastName"
                        onChange={formik.handleChange("LastName")}
                        onBlur={formik.handleBlur("LastName")}
                        value={formik.values.LastName}
                      />
                      <div className="error">
                        {formik.touched.LastName && formik.errors.LastName}
                      </div>
                    </div>

                    <div class="mb-2">
                      <label for="exampleInputPassword1" class="form-label">
                        Nationality
                      </label>
                      <input
                        type="text"
                        class="form-control"
                    
                        name="Nationality"
                        onChange={formik.handleChange("Nationality")}
                        onBlur={formik.handleBlur("Nationality")}
                        value={formik.values.Nationality}
                      />
                      <div className="error">
                        {formik.touched.Nationality &&
                          formik.errors.Nationality}
                      </div>
                    </div>

                    <div class="mb-2">
                      <label for="exampleInputPassword1" class="form-label">
                        Height
                      </label>
                      <input
                        name="Height"
                        type="text"
                        class="form-control"
                        onChange={formik.handleChange("Height")}
                        onBlur={formik.handleBlur("Height")}
                        value={formik.values.Height}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div class="mb-2">
                      <label for="exampleInputPassword1" class="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        name="FistName"
                        onChange={formik.handleChange("FistName")}
                        onBlur={formik.handleBlur("FistName")}
                        value={formik.values.FistName}
                      />
                      <div className="error">
                        {formik.touched.FistName && formik.errors.FistName}
                      </div>
                    </div>
                    <div class="mb-2">
                      <label for="exampleInputEmail1" class="form-label">
                        Date Of Birth
                      </label>
                      <input
                        type="text"
                        placeholder="Select Dob"
                        class="form-control"
                        onFocus={(e) => (e.target.type = "date")}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="DOB"
                        onChange={formik.handleChange("DOB")}
                        onBlur={formik.handleBlur("DOB")}
                        value={formik.values.DOB}
                      />
                    </div>

                    <div class="mb-2">
                      <label for="exampleInputPassword1" class="form-label">
                        Marital Status
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        name="MaritalStatus"
                        onChange={formik.handleChange("MaritalStatus")}
                        onBlur={formik.handleBlur("MaritalStatus")}
                        value={formik.values.MaritalStatus}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div class="mb-2">
                      <label for="exampleInputPassword1" class="form-label">
                        Middle Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        name="MiddleName"
                        placeholder="MiddleName"
                        onChange={formik.handleChange("MiddleName")}
                        onBlur={formik.handleBlur("MiddleName")}
                        value={formik.values.MiddleName}
                      />
                    </div>
                    <div class="mb-2">
                      <label for="exampleInputEmail1" class="form-label">
                        Gender{" "}
                      </label>
                      <input
                        name="Gender"
                        type="text"
                        class="form-control"
                        onChange={formik.handleChange("Gender")}
                        onBlur={formik.handleBlur("Gender")}
                        value={formik.values.Gender}
                      />
                      <div className="error">
                        {formik.touched.Gender && formik.errors.Gender}
                      </div>
                    </div>
                    <div class="mb-2">
                      <label for="exampleInputPassword1" class="form-label">
                        Weight
                      </label>
                      <input
                        name="Weight"
                        type="number"
                        class="form-control"
                        onChange={formik.handleChange("Weight")}
                        onBlur={formik.handleBlur("Weight")}
                        value={formik.values.Weight}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="personal">
                <h6 className="mb-2 sub-head mt-3">
                  <GiOfficeChair />
                  &nbsp;Official
                </h6>
                <div className="row ">
                  <div className="col-md-4">
                    <div class="mb-2">
                      <label for="exampleInputEmail1" class="form-label">
                        Join Date
                      </label>
                      <input
                        type="text"
                        placeholder="Joining Date"
                        class="form-control"
                        name="JoinDate"
                        onFocus={(e) => (e.target.type = "date")}
                        onChange={formik.handleChange("JoinDate")}
                        onBlur={formik.handleBlur("JoinDate")}
                        value={formik.values.JoinDate}
                      />
                      <div className="error">
                        {formik.touched.JoinDate && formik.errors.JoinDate}
                      </div>
                    </div>

                    <div class="mb-2">
                      <label for="exampleInputPassword1" class="form-label">
                        Shift Group
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        name="ShiftGroup"
                        onChange={formik.handleChange("ShiftGroup")}
                        onBlur={formik.handleBlur("ShiftGroup")}
                        value={formik.values.ShiftGroup}
                      />
                    </div>

                    <div class="mb-2">
                      <label for="exampleInputPassword1" class="form-label">
                        Agent Id{" "}
                      </label>
                      <input
                        name="AgentID"
                        type="text"
                        class="form-control"
                        onChange={formik.handleChange("AgentID")}
                        onBlur={formik.handleBlur("AgentID")}
                        value={formik.values.AgentID}
                      />
                    </div>

                    {/* <div class="mb-2">
                      <label for="exampleInputPassword1" class="form-label">
                        Bank Ifse Code{" "}
                      </label>
                      <input
                        type="text"
                        name="BankName"
                        class="form-control"
                        placeholder="Backend field missing"
                      />
                    </div> */}
                  </div>

                  <div className="col-md-4">
                    <div class="mb-2">
                      <label for="exampleInputPassword1" class="form-label">
                        Job Title
                      </label>
                      <div className="row">
                        <div className="col-9">
                          <select
                            class="form-select form-control"
                            aria-label="Default select example"
                            name="JobTitle"
                            onChange={formik.handleChange("JobTitle")}
                            onBlur={formik.handleBlur("JobTitle")}
                            value={formik.values.JobTitle}
                          >
                            <option selected>Select Job</option>

                            {empStatelist
                      ? empStatelist?.map((d, i) => (
                          <option key={i} value={d.Description}>
                            {d.Description}
                          </option>
                        ))
                      : null}
                          </select>
                        </div>
                        <div className="col-3">
                          <button
                            className="form-control"
                            onClick={handleButtonClick}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            data-bs-whatever="@mdo"
                          >
                            <MdFormatListBulletedAdd />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="mb-2">
                      <label for="exampleInputPassword1" class="form-label">
                        Division
                      </label>
                      <input
                        name="Division"
                        type="text"
                        class="form-control"
                        onChange={formik.handleChange("Division")}
                        onBlur={formik.handleBlur("Division")}
                        value={formik.values.Division}
                      />
                    </div>
                    <div class="mb-2">
                      <label for="exampleInputPassword1" class="form-label">
                        BankName{" "}
                      </label>
                      <input
                        type="text"
                        name="BankName"
                        class="form-control"
                        onChange={formik.handleChange("BankName")}
                        onBlur={formik.handleBlur("BankName")}
                        value={formik.values.BankName}
                      />
                    </div>

                    {/* <div class="mb-2">
                      <label for="exampleInputPassword1" class="form-label">
                        Bank Branch Name{" "}
                      </label>
                      <input
                        type="text"
                        name="BankName"
                        class="form-control"
                        placeholder="Backend field missing"
                      />
                    </div> */}
                  </div>

                  <div className="col-md-4">
                    <div class="mb-2">
                      <label for="exampleInputPassword1" class="form-label">
                        Job Type
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        name="JobType"
                        onChange={formik.handleChange("JobType")}
                        onBlur={formik.handleBlur("JobType")}
                        value={formik.values.JobType}
                      />
                    </div>
                    <div class="mb-2">
                      <label for="exampleInputPassword1" class="form-label">
                        Grade
                      </label>
                      <input
                        name="Grade"
                        type="text"
                        class="form-control"
                        onChange={formik.handleChange("Grade")}
                        onBlur={formik.handleBlur("Grade")}
                        value={formik.values.Grade}
                      />
                    </div>

                    <div class="mb-2">
                      <label for="exampleInputPassword1" class="form-label">
                        BankAccountNo{" "}
                      </label>
                      <input
                        name="BankAccountNo"
                        type="number"
                        class="form-control"
                        onChange={formik.handleChange("BankAccountNo")}
                        onBlur={formik.handleBlur("BankAccountNo")}
                        value={formik.values.BankAccountNo}
                      />
                    </div>

                    {/* <div class="mb-2">
                      <label for="exampleInputPassword1" class="form-label">
                        Bank Ac Holder Name{" "}
                      </label>
                      <input
                        type="text"
                        name="BankName"
                        class="form-control"
                        placeholder="Backend field missing"
                      />
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="expantadable-box shadow-sm rounded p-2 mt-2 mb-2 personal contact">
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="mt-2">
                      <IoIosContact /> &nbsp;Contact Information
                    </h6>
                  </div>
                  <div className="col-md-6">
                    <div className="expand text-end">
                      <MdAddCircleOutline
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      />
                    </div>
                  </div>
                </div>
                <div class="collapse mt-3" id="collapseExample">
                  <div class="card card-body">
                    <div className="personal">
                      <h6 className="mb-2 sub-head mt-1 mb-3">
                        <MdContactEmergency />
                        &nbsp;Contact Information
                      </h6>

                      <div className="row mt-2">
                        <div className="col-md-6">
                          <h6 className=" sub-head-scnd mb-2">
                            <GoDotFill />
                            &nbsp;Home Address
                          </h6>
                          <div class="mb-2">
                            <textarea
                              class="form-control"
                              placeholder="Type Your Address Here"
                              id="floatingTextarea"
                              name="HomeAddress"
                              onChange={formik.handleChange("HomeAddress")}
                              onBlur={formik.handleBlur("HomeAddress")}
                              value={formik.values.HomeAddress}
                            ></textarea>
                          </div>

                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              Home Airport
                            </label>
                            <input
                              type="password"
                              class="form-control"
                              name="HomeAirport"
                              onChange={formik.handleChange("HomeAirport")}
                              onBlur={formik.handleBlur("HomeAirport")}
                              value={formik.values.HomeAirport}
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h6 className=" sub-head-scnd mb-2">
                            <GoDotFill />
                            &nbsp;Current Address
                          </h6>
                          <div class="mb-2">
                            <textarea
                              class="form-control"
                              placeholder="Type Your Address Here"
                              id="floatingTextarea"
                              name="CurrentAddress"
                              onChange={formik.handleChange("CurrentAddress")}
                              onBlur={formik.handleBlur("CurrentAddress")}
                              value={formik.values.CurrentAddress}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="personal">
                      <h6 className="mb-2 sub-head mt-3">
                        <MdContactEmergency />
                        &nbsp;Contact{" "}
                      </h6>

                      <div className="row ">
                        <div className="col-md-4">
                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              Work Mobile
                            </label>
                            <input
                              type="number"
                              class="form-control"
                              name="WorkMobile"
                              onChange={formik.handleChange("WorkMobile")}
                              onBlur={formik.handleBlur("WorkMobile")}
                              value={formik.values.WorkMobile}
                            />
                          </div>

                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              Work Phone
                            </label>
                            <input
                              type="number"
                              class="form-control"
                              name="WorkPhone"
                              onChange={formik.handleChange("WorkPhone")}
                              onBlur={formik.handleBlur("WorkPhone")}
                              value={formik.values.WorkPhone}
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div class="mb-2">
                            <label for="exampleInputEmail1" class="form-label">
                              Personal Mobile
                            </label>
                            <input
                              type="number"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              name="PersonalMobile"
                              onChange={formik.handleChange("PersonalMobile")}
                              onBlur={formik.handleBlur("PersonalMobile")}
                              value={formik.values.PersonalMobile}
                            />
                          </div>
                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              Personal Phone{" "}
                            </label>
                            <input
                              type="password"
                              class="form-control"
                              id="exampleInputPassword1"
                              name="PersonalPhone"
                              onChange={formik.handleChange("PersonalPhone")}
                              onBlur={formik.handleBlur("PersonalPhone")}
                              value={formik.values.PersonalPhone}
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              Work Email
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputPassword1"
                              name="WorkEmail"
                              onChange={formik.handleChange("WorkEmail")}
                              onBlur={formik.handleBlur("WorkEmail")}
                              value={formik.values.WorkEmail}
                            />
                          </div>

                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              Personal Email
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              name="PersonalEmail"
                              onChange={formik.handleChange("PersonalEmail")}
                              onBlur={formik.handleBlur("PersonalEmail")}
                              value={formik.values.PersonalEmail}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="expantadable-box shadow-sm rounded p-2 mt-2 mb-2 personal documents">
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="mt-2">
                      <IoDocumentsOutline />
                      &nbsp;Documents
                    </h6>
                  </div>
                  <div className="col-md-6">
                    <div className="expand text-end">
                      <MdAddCircleOutline
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      />
                    </div>
                  </div>
                </div>
                <div class="collapse mt-3" id="collapseExample1">
                  <div class="card card-body">
                    <h6 className="mb-2 sub-head mt-1 mb-3">
                      <MdContactEmergency />
                      &nbsp;Passport
                    </h6>
                    <div className="row ">
                      <div className="col-md-4">
                        <div class="mb-2">
                          <label for="exampleInputPassword1" class="form-label">
                            Passport No
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            name="PassportNo"
                            onChange={formik.handleChange("PassportNo")}
                            onBlur={formik.handleBlur("PassportNo")}
                            value={formik.values.PassportNo}
                          />
                        </div>

                        <div class="mb-2">
                          <label for="exampleInputPassword1" class="form-label">
                            Passport ExpiryDate
                          </label>
                          <input
                            type="text"
                            onFocus={(e) => (e.target.type = "date")}
                            class="form-control"
                            placeholder=" Passport Exp Date"
                            name="PassportExpiryDate"
                            onChange={formik.handleChange("PassportExpiryDate")}
                            onBlur={formik.handleBlur("PassportExpiryDate")}
                            value={formik.values.PassportExpiryDate}
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div class="mb-2">
                          <label for="exampleInputPassword1" class="form-label">
                            Passport Place of Issue
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                            name="PassportPlaceofIssue"
                            onChange={formik.handleChange(
                              "PassportPlaceofIssue"
                            )}
                            onBlur={formik.handleBlur("PassportPlaceofIssue")}
                            value={formik.values.PassportPlaceofIssue}
                          />
                        </div>
                        <div class="mb-2">
                          <label for="exampleInputEmail1" class="form-label">
                            Passport Country of Issue
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            aria-describedby="emailHelp"
                            name="PassportCountryofIssue"
                            onChange={formik.handleChange(
                              "PassportCountryofIssue"
                            )}
                            onBlur={formik.handleBlur("PassportCountryofIssue")}
                            value={formik.values.PassportCountryofIssue}
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div class="mb-2">
                          <label for="exampleInputPassword1" class="form-label">
                            Passport Issue Date
                          </label>
                          <input
                            type="text"
                            onFocus={(e) => (e.target.type = "date")}
                            placeholder="Passport Issue Date"
                            class="form-control"
                            name="PassportIssueDate"
                            onChange={formik.handleChange("PassportIssueDate")}
                            onBlur={formik.handleBlur("PassportIssueDate")}
                            value={formik.values.PassportIssueDate}
                          />
                        </div>

                        <div class="mb-2">
                          <label for="exampleInputPassword1" class="form-label">
                            Passport Image
                          </label>
                          <input
                            type="file"
                            placeholder="Passport Image"
                            class="form-control"
                            name="photo"
                            onChange={formik.handleChange("photo")}
                            onBlur={formik.handleBlur("photo")}
                            value={formik.values.photo}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="personal">
                      <h6 className="mb-2 sub-head mt-3">
                        <MdContactEmergency />
                        &nbsp;Other Details{" "}
                      </h6>

                      <div className="row ">
                        <div className="col-md-4">
                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              EmiratesId{" "}
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputPassword1"
                              name="EmiratesId"
                              onChange={formik.handleChange("EmiratesId")}
                              onBlur={formik.handleBlur("EmiratesId")}
                              value={formik.values.EmiratesId}
                            />
                          </div>

                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              EmiratesIdExpiryDate
                            </label>
                            <input
                              type="text"
                              onFocus={(e) => (e.target.type = "date")}
                              placeholder="EmiratesId Exp Date"
                              class="form-control"
                              name="EmiratesIdExpiryDate"
                              onChange={formik.handleChange(
                                "EmiratesIdExpiryDate"
                              )}
                              onBlur={formik.handleBlur("EmiratesIdExpiryDate")}
                              value={formik.values.EmiratesIdExpiryDate}
                            />
                          </div>
                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              Insurance No
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputPassword1"
                              name="InsuranceNo"
                              onChange={formik.handleChange("InsuranceNo")}
                              onBlur={formik.handleBlur("InsuranceNo")}
                              value={formik.values.InsuranceNo}
                            />
                          </div>

                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              Insurance Expiry Date
                            </label>
                            <input
                              type="text"
                              onFocus={(e) => (e.target.type = "date")}
                              placeholder="Insurance Exp Date"
                              class="form-control"
                              name="InsuranceExpiryDate"
                              onChange={formik.handleChange(
                                "InsuranceExpiryDate"
                              )}
                              onBlur={formik.handleBlur("InsuranceExpiryDate")}
                              value={formik.values.InsuranceExpiryDate}
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              DrivingLicenceNo
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputPassword1"
                              name="DrivingLicenceNo"
                              onChange={formik.handleChange("DrivingLicenceNo")}
                              onBlur={formik.handleBlur("DrivingLicenceNo")}
                              value={formik.values.DrivingLicenceNo}
                            />
                          </div>

                          <div class="mb-2">
                            <label for="exampleInputEmail1" class="form-label">
                              Driving Licence ExpiryDate
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              aria-describedby="emailHelp"
                              onFocus={(e) => (e.target.type = "date")}
                              placeholder="Licence Exp Date"
                              name="DrivingLicenceExpiryDate"
                              onChange={formik.handleChange(
                                "DrivingLicenceExpiryDate"
                              )}
                              onBlur={formik.handleBlur(
                                "DrivingLicenceExpiryDate"
                              )}
                              value={formik.values.DrivingLicenceExpiryDate}
                            />
                          </div>

                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              VisaNo{" "}
                            </label>
                            <input
                              type="number"
                              class="form-control"
                              id="exampleInputPassword1"
                              name="VisaNo"
                              onChange={formik.handleChange("VisaNo")}
                              onBlur={formik.handleBlur("VisaNo")}
                              value={formik.values.VisaNo}
                            />
                          </div>

                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              Visa Expiry Date{" "}
                            </label>
                            <input
                              type="text"
                              onFocus={(e) => (e.target.type = "date")}
                              class="form-control"
                              placeholder="Visa Exp Date"
                              id="exampleInputPassword1"
                              name="VisaExpiryDate"
                              onChange={formik.handleChange("VisaExpiryDate")}
                              onBlur={formik.handleBlur("VisaExpiryDate")}
                              value={formik.values.VisaExpiryDate}
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              PersonId{" "}
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputPassword1"
                              name="PersonId"
                              onChange={formik.handleChange("PersonId")}
                              onBlur={formik.handleBlur("PersonId")}
                              value={formik.values.PersonId}
                            />
                          </div>

                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              PersonId ExpiryDate
                            </label>
                            <input
                              type="text"
                              onFocus={(e) => (e.target.type = "date")}
                              placeholder="PersonId Exp Date"
                              class="form-control"
                              name="PersonIdExpiryDate"
                              onChange={formik.handleChange(
                                "PersonIdExpiryDate"
                              )}
                              onBlur={formik.handleBlur("PersonIdExpiryDate")}
                              value={formik.values.PersonIdExpiryDate}
                            />
                          </div>

                          {/* <div class="mb-2">
              <label for="exampleInputPassword1" class="form-label">
               Parttime Labour{" "}
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleInputPassword1"
                name="VisaNo"
                onChange={formik.handleChange("VisaNo")}
                onBlur={formik.handleBlur("VisaNo")}
                value={formik.values.VisaNo}
              />
            </div>

            <div class="mb-2">
              <label for="exampleInputPassword1" class="form-label">
                PartTime Labour Expiry Date{" "}
              </label>
              <input
                type="text"
                onFocus={(e) => (e.target.type = "date")}
                class="form-control"
                placeholder="Exp Date"
                id="exampleInputPassword1"
                name="VisaExpiryDate"
                onChange={formik.handleChange("VisaExpiryDate")}
                onBlur={formik.handleBlur("VisaExpiryDate")}
                value={formik.values.VisaExpiryDate}
              />
            </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="expantadable-box shadow-sm rounded p-2 mt-2 mb-2 personal Payrol">
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="mt-2">
                      <TbEPassport />
                      &nbsp;Payrol Values
                    </h6>
                  </div>
                  <div className="col-md-6">
                    <div className="expand text-end">
                      <MdAddCircleOutline
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample3"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      />
                    </div>
                  </div>
                </div>
                <div class="collapse mt-3" id="collapseExample3">
                  <div class="card card-body">
                    <div className="personal">
                      <h6 className="mb-2 sub-head mt-3">
                        <MdContactEmergency />
                        &nbsp;Salary Information{" "}
                      </h6>

                      <div className="row ">
                        <div className="col-md-4">
                        <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              Input Basic Pay Here
                            </label>
                            <div className="row">
                              <div className="col-12">
                                <input
                                  type="number"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  name="BasicPay"
                                  onChange={(e) => setbasicPay(parseInt(e.target.value))}
                                 
                                />
                              </div>
                            
                            </div>
                          </div>


                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              Initial Basic Pay
                            </label>
                            <div className="row">
                              <div className="col-12">
                                <input
                                  type="number"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  name="BasicPay"
                                  onChange={formik.handleChange("BasicPay")}
                                  onBlur={formik.handleBlur("BasicPay")}
                                  value={formik.values.BasicPay}
                                  disabled
                                />
                              </div>
                              {/* <div className="col-2">
                                <button className="form-control p-1 w-100">
                                  <MdAddChart
                                    onClick={() =>
                                      setbasicPay(
                                        formik.values.BasicPay + IncTotal
                                      )
                                    }
                                  />
                                </button>
                              </div> */}
                            </div>
                          </div>

                       
                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              Increments Total
                            </label>
                            <input
                              type="number"
                              class="form-control"
                              name="Allowances_NOT"
                              onChange={formik.handleChange("Allowances_NOT")}
                              onBlur={formik.handleBlur("Allowances_NOT")}
                              placeholder={IncTotal}
                              value={IncTotal}
                              disabled
                            />
                          </div>

                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              NetBasic Salary
                            </label>
                            <input
                              type="number"
                              class="form-control"
                              name="NetBasicSalary"
                              onChange={formik.handleChange("NetBasicSalary")}
                              onBlur={formik.handleBlur("NetBasicSalary")}
                              // value={empState?.BasicPay+IncTotal}
                              placeholder={basicPay+IncTotal?basicPay+IncTotal:empState?.BasicPay+IncTotal}
                              value={basicPay+IncTotal?basicPay+IncTotal:empState?.BasicPay+IncTotal}
                              disabled
                            />
                          </div>

                          {/* <div class="mb-2">
                  <label for="exampleInputPassword1" class="form-label">
                    NetBasic Salary
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputPassword1"
                    name="OTrate"
                    onChange={formik.handleChange("OTrate")}
                    onBlur={formik.handleBlur("OTrate")}
                    value={formik.values.OTrate}
                  />
                </div> */}

                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              Allowances
                            </label>
                            <input
                              type="number"
                              class="form-control"
                              name="Allowances_OT"
                              onChange={formik.handleChange("Allowances_OT")}
                              onBlur={formik.handleBlur("Allowances_OT")}
                              value={AlvTotal}
                              placeholder={AlvTotal}
                              disabled
                            />
                          </div>

                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              Net Salary
                            </label>
                            <input
                              type="number"
                              class="form-control"
                              name="NetSalary"
                              onChange={formik.handleChange("NetSalary")}
                              onBlur={formik.handleBlur("NetSalary")}
                              value={formik.values.NetSalary}
                              placeholder={formik.values.NetSalary}
                              disabled
                              
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              TimeSheet Category
                            </label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                              onChange={handleAddrTypeChange}
                            >
                              <option selected>Select Category</option>
                              <option value="1">Calender Days</option>
                              <option value="2">Hourly Wage</option>
                            </select>
                            {/* <select
                          class="form-select form-control"
                          aria-label="Default select example"
                          name="ShiftGroup"
                         
                          onBlur={formik.handleBlur("ShiftGroup")}
                          value={formik.values.ShiftGroup}
                          onChange={handleAddrTypeChange}
                        >
                               <option >Select Category</option>
                               <option name="Calender Days"  value={"1"}>Calender Days</option>
                          <option  name="Hourly Wage" value={"2"} >Hourly Wage</option>
                       
                        </select> */}
                          </div>

                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              Normal Hrs
                            </label>
                            <input
                              type="number"
                              class="form-control"
                              name="NormalHrs"
                              onChange={formik.handleChange("NormalHrs")}
                              onBlur={formik.handleBlur("NormalHrs")}
                              value={formik.values.NormalHrs}
                              disabled={formik.values.NormalHrs}
                            />
                          </div>
                          <div class="mb-2">
                            <label for="exampleInputEmail1" class="form-label">
                              Hourly Wage
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              aria-describedby="emailHelp"
                              name="HourlyWage"
                              onChange={formik.handleChange("HourlyWage")}
                              onBlur={formik.handleBlur("HourlyWage")}
                              value={formik.values.HourlyWage}
                              placeholder="0.00"
                              disabled={Category === "2" ? false : true}
                            />
                          </div>

                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              Ot Rate
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              aria-describedby="emailHelp"
                              name="OTrate"
                              onChange={formik.handleChange("OTrate")}
                              onBlur={formik.handleBlur("OTrate")}
                              value={formik.values.OTrate}
                            />
                          </div>

                          <div class="mb-2">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              Spl Ot Rate
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              name="SplOtRate"
                              onChange={formik.handleChange("SplOtRate")}
                              onBlur={formik.handleBlur("SplOtRate")}
                              value={formik.values.SplOtRate}
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="border p-3">
                            <h6 className="mb-2 sub-head mt-3">
                              <MdContactEmergency />
                              &nbsp;Account Setting{" "}
                            </h6>
                            {/* <div class="mb-2 ">
              <label for="exampleInputPassword1" class="form-label">
                Hourly Wage
              </label>
              <input
                type="text"
                onFocus={(e) => (e.target.type = "date")}
                class="form-control"
                id="exampleInputPassword1"
                name="HourlyWage"
                onChange={formik.handleChange("HourlyWage")}
                onBlur={formik.handleBlur("HourlyWage")}
                value={formik.values.HourlyWage}
              />
            </div> */}

                            <div class="mb-2">
                              <label
                                for="exampleInputPassword1"
                                class="form-label"
                              >
                                Salary Payable
                              </label>
                              <div className="row">
                            <div className="col-10">
                              <input
                                type="text"
                                class="form-control"
                                name="SalaryAc"
                                // placeholder={SalaryPayment}
                                onChange={formik.handleChange("SalaryAc")}
                                onBlur={formik.handleBlur("SalaryAc")}
                                value={
                                  SalaryPayment
                                    ? SalaryPayment
                                    : formik.values.SalaryAc
                                }
                                disabled
                              />
                            </div>
                            <div className="col-2">
                              <button
                                className="p-1 form-control"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalsalary"
                              >
                                <MdMenuOpen />
                              </button>{" "}
                              <SalaryPayablePopup
                                SalaryPayable={SalaryPayable}
                              />
                            </div>
                          </div>
                            </div>

                            <div class="mb-2">
                              <label
                                for="exampleInputPassword1"
                                class="form-label"
                              >
                                Salary Expense
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                name="AdvanceAc"
                                onChange={formik.handleChange("AdvanceAc")}
                                onBlur={formik.handleBlur("AdvanceAc")}
                                value={formik.values.AdvanceAc}
                              />
                            </div>

                            <div class="mb-2">
                              <label
                                for="exampleInputPassword1"
                                class="form-label"
                              >
                                Loans & Advances
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                name="Notes"
                                onChange={formik.handleChange("Notes")}
                                onBlur={formik.handleBlur("Notes")}
                                value={formik.values.Notes}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col-md-6">
                          <h6 className="mb-2 sub-head mt-3">
                            <MdContactEmergency />
                            &nbsp;Allowance Details{" "}
                          </h6>
                        </div>
                        <div className="col-md-6">
                          <div className="text-end">
                            {/* <Link to={'/admin/emp_list/emp_edit/createAllowance'}>
                        <button
                          className="dash-btn"
                          // data-bs-toggle="modal"
                          // data-bs-target="#staticBackdrop"
                        >
                          Create
                        </button>
                        </Link> */}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <CreateAllowance  calculationAlv={calculationAlv}  EmpIdTop={empState?.EmpId} />
                      
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col-md-6">
                          <h6 className="mb-2 sub-head mt-3">
                            <MdContactEmergency />
                            &nbsp;Increment Details{" "}
                          </h6>
                        </div>
                        <div className="col-md-6">
                          <div className="text-end">
                            {/* <button
                          className="dash-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdropinc"
                        >
                          Create
                        </button> */}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <CreateIncrement calculationInc={calculationInc}  EmpIdTop={empState?.EmpId} />
                          {/* <table class="table table-striped border">
                            <thead></thead>
                            <tbody>
                              <tr className="table-primary ">
                                <td>EmpId</td>
                                <td>AllowanceType</td>
                                <td>Amount </td>
                                <td>Date </td>
                                <td>Reason </td>
                                <td>Actions</td>
                              </tr>
                              {empStateInc
                                ? empStateInc?.map((d, i) => (
                                    <tr key={i}>
                                      <td>{d.EmpID}</td>
                                      <td>{d.AllowanceType}</td>
                                      <td>{d.Amount}</td>
                                      <td>{d.ADate}</td>
                                      <td>{d.AffectOTCalc}</td>
                                      <td>
                                        <button className="red-btn">
                                          Remove
                                        </button>
                                      </td>
                                    </tr>
                                  ))
                                : null}
                            </tbody>
                          </table> */}
                          <CreateIncrementPopup />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="expantadable-box shadow-sm rounded p-2 mt-2 mb-2 personal leave">
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="mt-2">
                      <GiThreeLeaves />
                      &nbsp;Leave Information
                    </h6>
                  </div>
                  <div className="col-md-6">
                    <div className="expand text-end">
                      <MdAddCircleOutline
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample4"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      />
                    </div>
                  </div>
                </div>
                <div class="collapse mt-3" id="collapseExample4">
                  <div class="card card-body">
                    <h6 className="mt-2">
                      <IoDocumentsOutline />
                      &nbsp;Current Leave Status{" "}
                    </h6>

                    <table class="table table-striped shadow-sm border">
                      <tbody>
                        <tr className="table-primary">
                          <td>Leave Category</td>
                          <td>Alloted</td>
                          <td>Consumed </td>
                          <td>Balance</td>
                        </tr>
                        <tr>
                          <td>Annual Leave</td>
                          <td>900</td>
                          <td>0.00</td>
                          <td>900</td>
                        </tr>
                      </tbody>
                    </table>

                    <h6 className="mt-2">
                      <IoDocumentsOutline />
                      &nbsp;Leave History of Employee{" "}
                    </h6>
                    <table class="table table-striped shadow-sm border">
                      <tbody>
                        <tr className="table-primary">
                          <td>Leave Category</td>
                          <td>Apln Dt</td>
                          <td>From Dt </td>
                          <td>To Dt</td>
                          <td>Leaves</td>
                          <td>Notes</td>
                          <td>Ticket</td>
                          <td>Status</td>
                          <td>Apprvd By</td>
                          <td>Apprvd Dt</td>
                        </tr>
                        <tr>
                          <td>Annual Leave</td>
                          <td>13/oct/</td>
                          <td>14/oct</td>
                          <td>15/oct</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                          <td>Approved</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="online-switch personal">
                <div className="container"></div>
              </div>

              <div className="text-end mb-3 ">
                <button className="dash-btn mt-3" type="submit">
                  <MdAddChart />
                  &nbsp;Submit
                </button>
              </div>
            </div>
          </form>
        </>
      )}

      <MasterJobTablePopUp empState={empStatelist} />
    </div>
  );
};

export default EditForm;
