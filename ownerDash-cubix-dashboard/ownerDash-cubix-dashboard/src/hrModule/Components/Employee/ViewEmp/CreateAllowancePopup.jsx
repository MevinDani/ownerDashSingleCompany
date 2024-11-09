import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

let Alvanceschema = Yup.object().shape({
   
  CmpCode: Yup.string(),
  EmpId:Yup.string(),
  AllowanceType:Yup.string(),
  Amount:Yup.string(),
  ADate: Yup.string(),
  AffectOTCalc:Yup.string()
});
const CreateAllowancePopup = (setAllowanceData) => {
  const formik = useFormik({
    initialValues: {
        CmpCode: 'CPAYZ',
        EmpId:'',
        AllowanceType:'',
        Amount:'',
        ADate: '',
        AffectOTCalc:''
    },
    validationSchema:Alvanceschema,
    onSubmit: (values) => {
      console.log(values)
      setAllowanceData(values)

      
     
      
    },
  });
  return (
    <div>
     
<div class="modal fade" id="exampleModalcreate"  data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-small text-secondary" id="staticBackdropLabel">Create Allowance</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-md-6">

      
                <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label fs-small text-secondary">EmpId</label>
    <input type="number" class="form-control"   name="EmpId"
                  onChange={formik.handleChange("EmpId")}
                  onBlur={formik.handleBlur("EmpId")}
                  value={formik.values.EmpId}/>
                  
  
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label fs-small text-secondary">AllowanceType</label>
    <input type="text" class="form-control" name="AllowanceType"
                  onChange={formik.handleChange("AllowanceType")}
                  onBlur={formik.handleBlur("AllowanceType")}
                  value={formik.values.AllowanceType}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label fs-small text-secondary">Amount</label>
    <input type="number" class="form-control" name="Amount"
                  onChange={formik.handleChange("Amount")}
                  onBlur={formik.handleBlur("Amount")}
                  value={formik.values.Amount}/>
  </div>
  

                </div>
                <div className="col-md-6">
    


  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label fs-small text-secondary">Date</label>
    <input type="date" class="form-control" name="ADate"
                  onChange={formik.handleChange("ADate")}
                  onBlur={formik.handleBlur("ADate")}
                  value={formik.values.ADate} />
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label fs-small text-secondary">Remarks</label>
    <input type="text" class="form-control" name="AffectOTCalc"
                  onChange={formik.handleChange("AffectOTCalc")}
                  onBlur={formik.handleBlur("AffectOTCalc")}
                  value={formik.values.AffectOTCalc}/>
  </div>
  

                </div>
            </div>


 
 
  <div className="text-end">
  <button type="submit" class="btn dash-btn" onClick={formik.handleSubmit}>Submit</button>
  </div>
</form>
      </div>
  
    </div>
  </div>
</div>
    </div>
  )
}

export default CreateAllowancePopup
