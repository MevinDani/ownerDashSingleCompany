import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import "./loginstyle.css";
import './Login2.css'
import { RotatingLines } from 'react-loader-spinner'
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import leftImg from '../../images/login-image.png'
import blob from '../../images/pattern.svg'
import blob2 from '../../images/blob2.svg'
import Blob2 from "../reusables/Blob2";
import axios from 'axios';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoPlayBackCircle } from "react-icons/io5";
import { toast } from 'react-toastify';


const Login = () => {

  const [data, setData] = useState(null);
  const [exData, setExData] = useState(null)

  const [cmpcode, setCmpCode] = useState('')
  const [publick, setpublick] = useState('')
  const [privatek, setprivatek] = useState('')

  const [showPassword, setShowPassword] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    password: ""
  })

  const [loginError, setLoginError] = useState(null)

  const [loginClick, setLoginClick] = useState(false)

  const navigate = useNavigate()

  const handleTogglePassword = () => {
    console.log('psswdToggleClick')
    setShowPassword(prevState => !prevState);
  };

  useEffect(() => {
    // Retrieve the selected company details from local storage
    const selectedCompanyString = localStorage.getItem("selectedCompany");

    // Check if a selected company is stored in local storage
    if (selectedCompanyString) {
      const selectedCompany = JSON.parse(selectedCompanyString);

      // Access the company details and set them as states
      setCmpCode(selectedCompany.cmpcode);
      setpublick(selectedCompany.publick);
      setprivatek(selectedCompany.privatek);
    } else {
      // Handle the case where no selected company is found
      console.error("No selected company found in local storage");
    }
  }, []);

  // console.log(cmpcode, publick, privatek)

  useEffect(() => {
    const storedUserDataArray = JSON.parse(localStorage.getItem("userDataArray")) || [];

    if (storedUserDataArray.length === 0) {
      // setDeviceValidation('INVALID')
      navigate('/');
      console.log("not validated")
    }
  }, [])

  const user = localStorage.getItem('User')

  // console.log(user)

  // useEffect(() => {
  //   // Check if the user is already logged in (e.g., 'User' key exists in localStorage)
  //   const isLoggedIn = localStorage.getItem('User') !== null;
  //   console.log(isLoggedIn)
  //   // If user is already logged in, redirect to admin/dashboard
  //   if (isLoggedIn) {
  //     navigate('/admin/dashboard');
  //   }
  // }, [navigate]);

  const userDataArray = JSON.parse(localStorage.getItem("userDataArray")) || [];
  // Find the index of the selected company in userDataArray (assuming cmpcode is unique)
  const selectedCompany = userDataArray.find(company => company.cmpcode === cmpcode);

  if (selectedCompany && selectedCompany.User) {

    console.log(selectedCompany, selectedCompany.User)

    toast.success(`Welcome ${selectedCompany.User}`, {
      autoClose: 1500
    })
    // User is logged in, redirect to dashboard
    navigate('/admin/dashboard');
  }

  // console.log(selectedCompany)

  // useEffect(() => {

  //   console.log(selectedCompany, 'from useEffect')
  //   if (selectedCompany && selectedCompany.User && selectedCompany.User.trim() !== "") {

  //     toast.success(`Welcome ${selectedCompany.User}`, {
  //       autoClose: 1500
  //     })
  //     // User is logged in, redirect to dashboard
  //     navigate('/admin/dashboard');
  //   }
  // }, [selectedCompany]);


  const handleInputChange = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (userData.username && userData.password) {
      setLoginClick(true);
      setUserData({
        username: "",
        password: ""
      });

      const url = `https://cubixweberp.com:199/api/Login/UserLogin?cmpcode=${cmpcode}&guid=${privatek}&user=${userData.username}&pass=${userData.password}`;

      console.log(url);
      axios.get(url)
        .then(response => {
          // Handle the response data here
          // console.log(response.data);
          if (response.data[0].UserInfo === null) {
            setLoginError("Invalid Username or Password")
            setLoginClick(false)
          } else {
            const newdata = response.data;
            setData(response.data)
            const startPattern = '[{"UserInfo":"';
            const endPattern = '"}]';

            // Check if data is defined
            if (newdata) {
              // Find the start position
              const startIndex = newdata.indexOf(startPattern);

              if (startIndex !== -1) {
                // Find the end position
                const endIndex = newdata.lastIndexOf(endPattern);

                if (endIndex !== -1) {
                  // Extract the desired substring
                  const extractedData = newdata.substring(startIndex + startPattern.length, endIndex);

                  // Now, extractedData contains the cleaned JSON string
                  // console.log(extractedData);
                  const parseData = JSON.parse(extractedData)
                  setExData(parseData)

                  // Retrieve the existing array from local storage
                  let userDataArray = JSON.parse(localStorage.getItem("userDataArray")) || [];

                  // Find the index of the selected company in userDataArray (assuming cmpcode is unique)
                  const selectedCompanyIndex = userDataArray.findIndex(company => company.cmpcode === cmpcode);

                  // Check if the selected company is found in the array
                  if (selectedCompanyIndex !== -1) {
                    // Update the properties of the selected company with new values
                    userDataArray[selectedCompanyIndex].Roles = parseData.UserList[0].Roles;
                    userDataArray[selectedCompanyIndex].User = parseData.UserList[0].User;
                    userDataArray[selectedCompanyIndex].Image = parseData.UserList[0].Image;
                    userDataArray[selectedCompanyIndex].CmpName = parseData.UserList[0].CmpName;
                    userDataArray[selectedCompanyIndex].AllowDept = parseData.UserList[0].AllowDept;

                    // Save the updated array back to local storage
                    localStorage.setItem("userDataArray", JSON.stringify(userDataArray));


                    toast.success(`Welcome ${exData.UserList[0].User}`, {
                      autoClose: 1500
                    })
                    navigate('/admin/dashboard')

                    // // Update the component states with the modified company details
                    // setCmpCode(userDataArray[selectedCompanyIndex].cmpcode);
                    // setpublick(userDataArray[selectedCompanyIndex].publick);
                    // setprivatek(userDataArray[selectedCompanyIndex].privatek);
                  } else {
                    console.error("Selected company not found in userDataArray");
                  }

                  // // console.log(parseData.UserList[0].User)
                  // localStorage.setItem('Roles', parseData.UserList[0].Roles)
                  // localStorage.setItem('User', parseData.UserList[0].User)
                  // localStorage.setItem('Image', parseData.UserList[0].Image)
                } else {
                  console.error(`End pattern "${endPattern}" not found`);
                }
              } else {
                console.error(`Start pattern "${startPattern}" not found`);
              }
            } else {
              console.error('newdata is undefined');
            }

          }


          // If you want to convert it to a JavaScript object
          // const parsedData = JSON.parse(extractedData);
          // console.log(parsedData);
        })
        .catch(error => {
          // Handle errors
          console.error('Error fetching data:', error);
        });
    }
  };

  // useEffect(() => {
  //   if (exData !== null) {
  //     if (exData.UserList[0].User) {
  //       // console.log(exData.UserList[0])
  //       toast.success(`Welcome ${exData.UserList[0].User}`, {
  //         autoClose: 1500
  //       })
  //       navigate('/admin/dashboard')
  //     }
  //   }
  // }, [exData])

  // console.log(apiData[0].UserInfo.UserList)

  // console.log(data)
  // console.log(exData && exData)
  // console.log(exData && exData.UserList[0].User)
  // console.log(data && typeof (data))
  // console.log(userData.username, userData.password)


  return (

    // <div class="wrapper">
    //   <div class="sct brand"><h3>YOUR LOGO</h3></div>
    //   <div class="sct login">
    //     <form>
    //       <h3>Member Login</h3>
    //       <input type="email" name="email" placeholder="Email" />
    //       <input type="password" name="password" placeholder="Password" />
    //       <div class="forgot-remember">
    //         <label class="control control-checkbox">
    //           Remember me
    //           <input type="checkbox" />
    //           <div class="control_indicator"></div>
    //         </label>
    //         <div class="forgot">
    //           <a href="#">Forgot Password?</a>
    //         </div>
    //       </div>
    //       <input type="submit" name="send" value="Send" />
    //       <p class="text-center">Sign up with<br /><i class="fa fa-hand-o-down" aria-hidden="true"></i></p>
    //       <div class="social-sign">
    //         <a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
    //         <a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
    //         <a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div class="login-fg" style={{ height: '100vh', overflowY: 'scroll' }}>
      <div class="container-fluid" style={{ height: '100%' }}>
        <div class="row" style={{ height: '100%' }}>
          <div
            className="col-lg-6 col-md-6 col-sm-12"
            style={{
              // backgroundImage: "url('https://images.unsplash.com/photo-1538475711279-0373b6bc754e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ad852715b5223db487fe48eef21df4ce&auto=format&fit=crop&w=1308&q=80')",
              // backgroundSize: 'cover',
              backgroundColor: "#F1F1FB",
              display: 'flex',
              flexDirection: "column",
              alignItems: 'center', // Vertically center the content
              // justifyContent: 'space-evenly',
            }}
            id="imgContLogin">
            <div class="info">
              <h2 style={{ color: '#549BFF' }}>Cubix Dashboard</h2>
              <p> By Cubix It Solutions LLC <br />
                For More Details +71 44561145211<br></br>
                info@salescubix@gmail.com<br></br>
                cubixitsolutions.com</p>
            </div>
            <div className="leftImgCont" style={{ position: 'relative' }}>
              <img src={blob2} alt="" className="leftblob" />
              {/* <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <Blob2 />
              </div> */}
              <img src={leftImg} alt="" className="leftImg" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12"
            style={{
              display: 'flex',
              alignItems: 'center', // Vertically center the content
              justifyContent: 'center',
              backgroundColor: "white"
              // Horizontally center the content
            }}
            // class="col-xl-4 col-lg-5 col-md-12 login"
            id="LoginCont">
            <div class="login-section">
              {/* <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "50%", cursor: "pointer" }} onClick={() => navigate('/')}>
                  <span><IoPlayBackCircle /></span><span>Select Company</span>
                </div>
              </div> */}
              <div class="logo clearfix">
                <h2>Login</h2>
                {
                  cmpcode && publick && privatek ? <div style={{ color: 'green', fontSize: "18px" }}>Machine   Validated</div> : ""
                }
                {/* {
                  isDeviceValidated === 'VALIDATED' ? <div style={{ color: 'green' }}>Machine Validated</div> : ""
                } */}
                <h6 style={{ color: 'red' }}>{loginError}</h6>
                <h4 style={{ color: "orange", fontSize: "15px", fontWeight: "bold" }}>Company Code:{'  '}{cmpcode}</h4>
              </div>

              <div class="form-container mt-4">
                <form>
                  <div class="form-group form-fg">
                    <i><CiUser /></i>
                    <input type="text" name="username" class="input-text" placeholder="Enter Username" value={userData.username}
                      onChange={handleInputChange} />
                  </div>
                  <div class="form-group form-fg">
                    <i><CiLock /></i>
                    <input type={showPassword ? "text" : "password"} name="password" class="input-text" placeholder="Enter Password" value={userData.password}
                      onChange={handleInputChange} />
                    {/* <i class="fa fa-unlock-alt"></i> */}
                    <i className="fa fa-unlock-alt" ></i>
                    {
                      showPassword ?
                        <i id="eyePass" onClick={handleTogglePassword}><FaRegEye /></i>
                        :
                        <i id="eyePass" onClick={handleTogglePassword}><FaRegEyeSlash /></i>
                    }
                  </div>
                  <div class="form-group mt-2">
                    {/* <button className="btn-Login">Login</button> */}
                    {
                      !loginClick ? <button className="btn-Login" onClick={(e) => handleLogin(e)}><AiOutlineLogin />
                        &nbsp;Login</button> : <RotatingLines
                        strokeColor="green"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="40"
                        visible={true}
                      />
                    }
                  </div>
                </form>
              </div>
              <p className="cbx-bot-bann">Cubix Dashboard, Developed by Cubix IT Solutions LLC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="loginWrapper">
    //   <div className="login-box-section">
    //     <div className="container main-box">
    //       <div className="login-box rounded border shadow-sm">
    //         <div className="row">
    //           <div className="col-md-8 left-part rounded">
    //             <p className="text-white p-3 cubix-text ">
    //               <h4 className="mt-2">Cubix Dashboard</h4> <br></br>Developed
    //               By Cubix It Solutions LLC <br />
    //               For More Details +71 44561145211<br></br>
    //               info@salescubix@gmail.com<br></br>
    //               cubixitsolutions.com
    //             </p>
    //           </div>
    //           <div className="col-md-4" id="loginInpCont">
    //             <div className="login-content border rounded text-center">
    //               <p className="text-gray mt-3">Cubix Dashboard</p>
    //               <h6 style={{ color: 'red' }}>{loginError}</h6>
    //               <div className="container p-4">
    //                 {/* <div class="mb-3">
    //                   <input
    //                     type="email"
    //                     class="form-control"
    //                     id="exampleInputEmail1"
    //                     aria-describedby="emailHelp"
    //                     placeholder="Company Name"
    //                   />
    //                 </div>
    //                 <div class="mb-3">
    //                   <input
    //                     type="email"
    //                     class="form-control"
    //                     id="exampleInputEmail1"
    //                     aria-describedby="emailHelp"
    //                     placeholder="Mobile Number"
    //                   />
    //                 </div> */}

    //                 <div class="mb-3">
    //                   <input
    //                     type="text"
    //                     class="form-control"
    //                     placeholder="User Name"
    //                     name="username"
    //                     value={userData.username}
    //                     onChange={handleInputChange}
    //                   />
    //                 </div>

    //                 <div class="mb-3">
    //                   <input
    //                     type="password"
    //                     class="form-control"
    //                     id="exampleInputEmail1"
    //                     aria-describedby="emailHelp"
    //                     placeholder="Password"
    //                     name="password"
    //                     value={userData.password}
    //                     onChange={handleInputChange}
    //                   />
    //                 </div>

    //                 <div class="mb-3">

    // {
    //   !loginClick ? <button className="main-btn" onClick={(e) => handleLogin(e)}><AiOutlineLogin />
    //     &nbsp;Login</button> : <RotatingLines
    //     strokeColor="green"
    //     strokeWidth="5"
    //     animationDuration="0.75"
    //     width="40"
    //     visible={true}
    //   />
    // }
    //                   {/* <Link to={"admin/home"}> */}
    //                   {" "}
    //                   {/* <button className="main-btn">
    //                     <AiOutlineLogin />
    //                     &nbsp;Login
    //                   </button> */}
    //                   {/* </Link> */}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Login;
