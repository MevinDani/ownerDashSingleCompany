
import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { resetState } from "../../../features/Emp/EmpSlice";


let schema = Yup.object().shape({
  description: Yup.string(),
});

const EditJobTitle = ({ editData, seteditData }) => {
    
    
  const formik = useFormik({
    initialValues: {
        description: editData.Description,
    },
    validationSchema: schema,
    onSubmit: (values) => {
       
        axios.post(
            `https://cubixweberp.com:156/api/MasterReg/EDIT/CPAYS/JOBTITLE/${values.description}/${editData.TranId}`
          ).then((response) => {
            if (response.status===200){
               
                toast.success('Job Title Updated Successfully')
                seteditData(false);
                resetState()
                

              }else if(response.status === 408){
                
                toast.error('Something Went wrong ')
            }
          })
         
      console.log(values);
      
    },
  });

 
  

  

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <table class="table">
          <tbody>
            <tr>
              <td className="mt-2">Tran Id</td>
              <td>
                {" "}
                <input
                  type="text"
                  class="form-control update-input"
                 
                  placeholder={editData.TranId}
                
                  disabled="true"
                />
              </td>
            </tr>

            <tr>
              <td className="mt-2">Job Title</td>
              <td>
                {" "}
                <input
                  type="text"
                  class="form-control update-input"
                 
                  placeholder={editData.Description}
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
                  Update
                </button>
               
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default EditJobTitle;
