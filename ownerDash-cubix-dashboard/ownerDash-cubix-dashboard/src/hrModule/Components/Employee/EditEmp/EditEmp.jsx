import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { EmpDetails} from "../../../features/Emp/EmpSlice";
import { useLocation } from "react-router-dom";
import EditForm from "./EditForm";

const EditEmp = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const getEmpid = location.pathname.split("/")[4];


  useEffect(() => {
    dispatch(EmpDetails(getEmpid));
  }, []);

  return (
    <>
      <EditForm getEmpid={getEmpid} />
    </>
  );
};

export default EditEmp;
