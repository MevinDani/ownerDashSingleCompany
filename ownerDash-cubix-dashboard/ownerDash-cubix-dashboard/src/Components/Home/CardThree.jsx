import React, { useEffect, useState } from 'react'
import sales from '../../images/card-1.png'
import TodaySales from '../reusables/Sales'
const CardThree = () => {

  const [departmentColors, setDepartmentColors] = useState([]);
  
  useEffect(() => {
    // Get the current date
    const today = new Date();

    // Extract the components of the date (year, month, day)
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Months are zero-based, so add 1
    const day = today.getDate();

    // Format the date as a string (e.g., "YYYY-MM-DD")
    const formattedDate = `${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}-${year}`;
    // console.log(formattedDate);

    const selectedCompanyString = localStorage.getItem("selectedCompany");

    const selectedCompany = JSON.parse(selectedCompanyString);

    const cmpcode = selectedCompany.cmpcode;
    const publick = selectedCompany.publick;
    const privatek = selectedCompany.privatek;


    const url = `https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=TOTAL_SALES&s1=%27%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=${formattedDate}&dt2=${formattedDate}`;
    // console.log(url)
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            if (data.length > 0) {
                const firstItem = data[0];
                const departmentColors = {
                    bgColor: firstItem.bgColor,
                    foreColor: firstItem.foreColor,
                    imgUrl: firstItem.imgUrl,
                };

                setDepartmentColors(departmentColors);
            }
        })
        .catch(error => console.error('Error:', error))
}, []);

// console.log(departmentColors)
  return (
    
       <div className="card-dashboard border p-2 rounded" style={{ backgroundColor: '#B2FEA8',height:"100%" }}>
      <div className="row">
      <div className="col-12">
        <TodaySales/>
      </div>
      </div>

</div>
  
  )
}

export default CardThree
