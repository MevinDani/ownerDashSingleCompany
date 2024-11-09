import React, { useEffect, useState,forwardRef,useRef } from 'react'
import sales from '../../images/card-3.png'
import TotalPendingPdc from '../reusables/TotalPendindPdc'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import arrowDown from '../../images/total_received_svg_file.svg'

const CardFive = () => {

  const [departmentColors, setDepartmentColors] = useState([]);
  const [startDate, setStartDate] = useState(new Date('2050-01-01'));
  const [totalPendingPdcData,setTotalPendingPdc] = useState(null)
  const [formatteddate,setformdate]=useState(null)

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref} style={{backgroundColor:"#007bff",color:"#fff",padding:"6px",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px"}}>
        {value}
    </button>
));


const datePickerRef = useRef(null);

// useEffect(() => {
//   setTotalPendingPdc(null)
//   // Get today's date
//   const today = new Date();
  
//   // Format the date as 'MM-DD-YYYY'
//   const formattedDate = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;

//   // Function to format the date as MM-DD-YYYY
// const formatDate = (date) => {
//   const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
//   return date.toLocaleDateString(undefined, options).replace(/\//g, '-');
// };

// // Use the formatDate function to get the formatted date
// const formattedDateFrom = formatDate(startDate);

//   const url = `https://cubixweberp.com:164/api/Dashboard/DashBoard?cmpcode=PENDULUM&guid=C39F6BCB-86DE-42F2-95B3-3D4DD4278CDA&mod=TOTAL_PDCR&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=${formattedDateFrom}&dt2=${formattedDate}`;
//   // console.log(url)
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       setTotalPendingPdc(data)
//       if (data.length > 0) {
//         const firstItem = data[0];
//         const departmentColors = {
//           bgColor: firstItem.bgColor,
//           foreColor: firstItem.foreColor,
//           imgUrl: firstItem.imgUrl,
//         };

//         setDepartmentColors(departmentColors);
//       }
//     })
//     .catch(error => console.error('Error:', error));
// }, [startDate]);
  
// useEffect(() => {
//   // Get today's date
//   const today = new Date();
  
//   // Format the date as 'MM-DD-YYYY'
//   const formattedDate = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;

//   const url = `https://cubixweberp.com:164/api/Dashboard/DashBoard?cmpcode=PENDULUM&guid=C39F6BCB-86DE-42F2-95B3-3D4DD4278CDA&mod=TOTAL_PDCR&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=100&i2=0&dt1=${formattedDate}&dt2=${formattedDate}`;

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       setTotalPendingPdc(data)
//       if (data.length > 0) {
//         const firstItem = data[0];
//         const departmentColors = {
//           bgColor: firstItem.bgColor,
//           foreColor: firstItem.foreColor,
//           imgUrl: firstItem.imgUrl,
//         };

//         setDepartmentColors(departmentColors);
//       }
//     })
//     .catch(error => console.error('Error:', error));
// }, []);

useEffect(()=>{
  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = date.toLocaleDateString('en-US', options).replace(/\//g, '-');
    return formattedDate;
  };
  
  
  // Use the formatDate function to get the formatted date
  const formattedDateFrom = formatDate(startDate);
  setformdate(formattedDateFrom)
},[startDate])



// console.log(formatteddate)

  return (
    <div className="card-dashboard border p-2 rounded" style={{ backgroundColor: 'white', height: "100%", backgroundImage: 'linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)' }}>
    <div className="row">
    <div className="col-12">

    <div className='arrowImgCont'>
                    <img className='arrDImg' src={arrowDown} alt="" />
                    <div style={{marginLeft:'auto'}}>
                      <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          customInput={<ExampleCustomInput />}
                          showYearDropdown
                          yearDropdownItemNumber={100}
                          scrollableYearDropdown
                      />
                    </div>
    </div>
    {
      formatteddate && <TotalPendingPdc formatteddate={formatteddate}/> 
    }

        
      </div>

      {/* totalPendingPdcData={totalPendingPdcData} */}
      {/* <div className="col-8">
      <h6>854</h6>
      <p className='mt-3'>Cash Balance</p>
      </div>
      <div className="col-4">
      <img src={sales} alt="" srcset="" className='img-fluid mt-2' />
      </div> */}
    </div>

</div>
  )
}

export default CardFive
