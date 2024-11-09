import React, { useEffect } from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import './CalendarStyles.css'

const ValuePiece = Date | null;

const Value = ValuePiece | [ValuePiece, ValuePiece];

const HolidaySettingPopup = ({popUpData,onDataUpdate}) => {
    const [value, onChange] = useState();
    const [calenderData, SetcalenderData] = useState();
    const valueString=value?.toString()
    const dateArray = valueString?.split(' ');
    const [selectedDates, setSelectedDates] = useState(null);
    const [formatDate,setFormatDate] = useState([])
    const [leaveType,setLeaveType] = useState(null)

  const handleDateChange = date => {
    // console.log(date,'date')
    setSelectedDates(date)

    // const isDateSelected = selectedDates.some(selectedDate =>
    //   selectedDate.toDateString() === date.toDateString()
    // );
  
    // if (isDateSelected) {
    //   setSelectedDates(selectedDates.filter(selectedDate =>
    //     selectedDate.toDateString() !== date.toDateString()
    //   ));
    // } else {
    //   setSelectedDates([...selectedDates, date]);
    // }
  };

  const removeDateAndLeave = () => {
    setFormatDate([])
    setLeaveType(null)
    setSelectedDates(null)
  }

  useEffect(() => {
    if(selectedDates !== null) {
      const formattedDatesArray = selectedDates.map(date =>
        format(date, 'EEE MMM dd yyyy')
      );
      // console.log(formattedDatesArray, 'formattedDatesArray');
      setFormatDate(formattedDatesArray);
    }
  }, [selectedDates]);

  useEffect(() => {
    if(formatDate.length > 0 && leaveType !== null) {
      onDataUpdate(formatDate, leaveType, popUpData?.EmpId);
    }
  },[formatDate,leaveType,popUpData])

  // console.log(selectedDates,'selectedDates')
  // console.log(formatDate,'formatDate')
  // console.log(leaveType,'leaveType')

  // console.log(popUpData,'popUpData')

  
  return (
    <div>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
    <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title  text-secondary fs-small" id="staticBackdropLabel">Holiday Setting</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div className="container-fluid">
        <table class="table border">
  
    <tbody>
    <tr>
     
      <td>Emp ID</td>
      <td>{popUpData?.EmpId}</td>
      <td>Designation</td>
      <td>{popUpData?.JobTitle}</td>
      
    </tr>
    <tr>
      
    <td>Name</td>
      <td>{popUpData?.Name}</td>
      <td>Division</td>
      <td>{popUpData?.Division}</td>
    </tr>
 
  </tbody>
</table>
        </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
          <Calendar onChange={handleDateChange} value={selectedDates} selectRange  className="mt-3" />

{/* <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label fs-small text-secondary">Type</label>
  <select class="form-select" aria-label="Default select example">
  <option selected>Type</option>
  <option value="1">Deduction</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  
</div> */}

          </div>
          <div className="col-md-8">

          <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label fs-small text-secondary">Select leave type</label>
  <select class="form-select" aria-label="Default select example" onChange={(e)=>setLeaveType(e.target.value)}>
  <option selected value=''>Select</option>
  <option value="1">Leave 1</option>
  <option value="2">Leave 2</option>
  <option value="3">Leave 3</option>
</select>
  
</div>
{/* <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label fs-small text-secondary">Select Year</label>
  <select class="form-select" aria-label="Default select example">
  <option selected>2024</option>
  <option value="1">2023</option>
  <option value="2">2022</option>
  <option value="3">2021</option>
</select>
  
</div> */}

<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label fs-small text-secondary">Selected Dates</label>
  <input type="text" class="form-control"  value={formatDate}  disabled/>
  
</div>

  <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label fs-small text-secondary">Remarks</label>
  <input type="text" class="form-control"  />
  
</div>

</div>
</div>
</div>
</div>

    <div class="modal-footer">
      <button type="button" class="btn dash-btn" data-bs-dismiss="modal" aria-label="Close" onClick={()=>removeDateAndLeave()}>Add</button>
    </div>
  </div>
</div>
</div>
  </div>
  )
}

export default HolidaySettingPopup
