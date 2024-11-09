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
import { FaPlus } from "react-icons/fa6";

const MachineValidation = () => {
    const [isDeviceValidated, setDeviceValidation] = useState('')

    const [selectedCompany, setSelectedCompany] = useState(null);
    const [companyList, setCompanyList] = useState([]);
    const [isCompanySelectionModalOpen, setIsCompanySelectionModalOpen] = useState(false);

    const [companyStatus, setCompanyStatus] = useState([])

    // const cmpcode = localStorage.getItem("cmpcode")
    // const publick = localStorage.getItem("publick")
    // const privatek = localStorage.getItem("privatek")

    // fake user data
    const user = localStorage.getItem("user")

    // const navigate = useNavigate();

    useEffect(() => {
        console.log('inside loop');
        // Retrieve the array from local storage
        const storedUserDataArray = JSON.parse(localStorage.getItem("userDataArray")) || [];

        if (storedUserDataArray.length === 0) {
            setDeviceValidation('INVALID')
            navigate('/');
            console.log("not validated")
        }

        // Check if there are multiple companies
        if (storedUserDataArray.length > 1) {
            console.log('grtLenght')
            setCompanyList(storedUserDataArray)
            // You can implement your UI logic to prompt the user to select a company
            // For simplicity, let's assume you have a function openCompanySelectionPopup
            openCompanySelectionPopup(storedUserDataArray);
            // openBootstrapModal()
        } else if (storedUserDataArray.length === 1) {
            // If there's only one company, automatically select it
            const company = storedUserDataArray[0];
            setSelectedCompany(company);
            // Save the selected company in local storage
            // localStorage.setItem("selectedCompany", JSON.stringify(company));
            // Validate the selected company
            validateCompany(company);
        } else {
            // No stored companies, navigate to the default page
            navigate('/');
        }

        // Loop through all companies in the stored array and validate them
        storedUserDataArray.forEach(validateCompanyList);
    }, []);


    const validateCompanyList = async (company) => {
        console.log('validateCmp');
        if (company.cmpcode && company.publick && company.privatek) {
            const result = await fetch(`https://cubixweberp.com:199/CheckStatus?cmpcode=${company.cmpcode}&publick=${company.publick}&privatek=${company.privatek}`);
            const data = await result.json();
            // console.log(data)
            const status = data[0].Column1;
            // Set the status for the company
            const companyData = { cmpcode: company.cmpcode, status };
            // Push the company's data object into the array
            setCompanyStatus(prevArray => [...prevArray, companyData]);
        }
    };

    const closeCompanySelectionPopup = () => {
        setIsCompanySelectionModalOpen(false);
    };

    console.log(companyStatus, 'companyStatus')

    const openCompanySelectionPopup = (companies) => {
        // Implement your UI logic to allow the user to select a company
        // You might use a modal or any other UI element for company selection
        // Once a company is selected, call validateCompany(selectedCompany)
        // and set the selected company to state
    };

    const validateCompany = async (company) => {
        console.log('validateCmp')
        if (company.cmpcode && company.publick && company.privatek) {
            const result = await fetch(`https://cubixweberp.com:199/CheckStatus?cmpcode=${company.cmpcode}&publick=${company.publick}&privatek=${company.privatek}`)
            const data = await result.json()
            // console.log(data)
            setDeviceValidation(data[0].Column1)
            if (data[0].Column1 === 'VALIDATED') {
                localStorage.setItem("selectedCompany", JSON.stringify(company));
                navigate('/login')
            }
        } else {
            setDeviceValidation('INVALID')
            navigate('/');
            console.log("not validated")
        }
    };

    // const getDeviceValidation = async () => {
    //     if (cmpcode && publick && privatek) {
    //         const result = await fetch(`https://cubixweberp.com:199/CheckStatus?cmpcode=${cmpcode}&publick=${publick}&privatek=${privatek}`)
    //         const data = await result.json()
    //         // console.log(data)
    //         setDeviceValidation(data[0].Column1)
    //         if (data[0].Column1 === 'VALIDATED') {
    //             navigate('/login')
    //         }
    //     } else {
    //         setDeviceValidation('INVALID')
    //         navigate('/');
    //         console.log("not validated")
    //     }
    // }

    // useEffect(() => {
    //     getDeviceValidation()
    // }, [])

    const [data, setData] = useState(null);

    const [userData, setUserData] = useState({
        username: "",
        privateKey: ""
    })

    const [loginError, setLoginError] = useState(null)

    const [loginClick, setLoginClick] = useState(false)

    const [displayDeviceValid, setDisplayDeviceValid] = useState(true)

    const [pubKey, setPubKey] = useState('')

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        setDisplayDeviceValid(false)

        if (userData.username, userData.privateKey, pubKey) {
            setLoginClick(true);
            // setUserData({
            //     username: "",
            // });

            const url = `https://cubixweberp.com:199/CheckStatus?cmpcode=${userData.username}&publick=${pubKey}&privatek=${userData.privateKey}`;

            console.log(url);
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log('Raw Response:', data);
                    if (data[0].Column1 === 'REGISTERED') {
                        localStorage.setItem("cmpcode", userData.username)
                        localStorage.setItem("publick", pubKey)
                        localStorage.setItem("privatek", userData.privateKey)
                        navigate('/login')
                    } else {
                        setLoginError("Invalid Private Key")
                        setLoginClick(false);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    setLoginError('Error during login. Please try again.');
                    setLoginClick(false);
                });
        }
    }

    const handleRegistration2 = (e) => {
        e.preventDefault();
        setDisplayDeviceValid(false);

        if (userData.username && userData.privateKey && pubKey) {
            setLoginClick(true);

            // Retrieve the existing array from local storage
            const storedUserDataArray = JSON.parse(localStorage.getItem("userDataArray")) || [];

            const url = `https://cubixweberp.com:199/CheckStatus?cmpcode=${userData.username}&publick=${pubKey}&privatek=${userData.privateKey}`;

            console.log(url);
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log('Raw Response:', data);
                    if (data[0].Column1 === 'REGISTERED') {
                        const newCompanyData = {
                            cmpcode: userData.username,
                            publick: pubKey,
                            privatek: userData.privateKey
                        };

                        storedUserDataArray.push(newCompanyData);

                        // Save the updated array back to local storage
                        localStorage.setItem("userDataArray", JSON.stringify(storedUserDataArray));

                        // Set the selectedCompany to the newly pushed data object
                        localStorage.setItem("selectedCompany", JSON.stringify(newCompanyData));
                        // // Push the object with user data to the array
                        // storedUserDataArray.push({
                        //     cmpcode: userData.username,
                        //     publick: pubKey,
                        //     privatek: userData.privateKey
                        // });

                        // // Save the updated array back to local storage
                        // localStorage.setItem("userDataArray", JSON.stringify(storedUserDataArray));

                        // localStorage.setItem("selectedCompany", JSON.stringify(storedUserDataArray[0]));

                        navigate('/login');
                    } else {
                        setLoginError("Invalid Private Key");
                        setLoginClick(false);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    setLoginError('Error during login. Please try again.');
                    setLoginClick(false);
                });
        }
    }


    const handleGetPubKey = (e) => {
        e.preventDefault();
        setDisplayDeviceValid(false)

        if (userData.username) {
            setLoginClick(true);
            // setUserData({
            //     username: "",
            // });

            const url = `https://cubixweberp.com:199/GetPublicKey?cmpcode=${userData.username}`;

            console.log(url);
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log('Raw Response:', data);
                    if (data) {
                        setPubKey(data[0].systemkey)
                        setLoginClick(false);
                    } else {
                        setPubKey('invalid company code')
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    setLoginError('Error during login. Please try again.');
                    setLoginClick(false);
                });
        }
    };

    // Function to open the Bootstrap modal
    const openBootstrapModal = () => {
        const modal = new window.bootstrap.Modal(document.getElementById('cmpnySelection'));
        modal.show();
    };

    const handleCmpnyListClick = (cmp) => {
        validateCompany(cmp);
    }

    // console.log(companyList)

    return (
        <>
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
                                <div class="logo clearfix">
                                    <h2>Machine Validation</h2>
                                    {
                                        displayDeviceValid && isDeviceValidated === '' && companyList.length === 0 ? <div style={{ color: 'green' }}>Checking for Saved Companies<RotatingLines
                                            strokeColor="green"
                                            strokeWidth="5"
                                            animationDuration="0.75"
                                            width="40"
                                            visible={true}
                                        /></div> : ""
                                    }
                                    {
                                        displayDeviceValid && isDeviceValidated === '' && companyList.length > 0 ? <div style={{ color: 'green' }}>Select A Validated Company</div> : ""
                                    }
                                    {
                                        displayDeviceValid && isDeviceValidated === 'INVALID' ? <div style={{ color: 'red' }}>Machine is not Validated Register Machine</div> : ""
                                    }
                                    <h6 style={{ color: 'red' }}>{loginError}</h6>
                                </div>

                                <div class="form-container mt-4">
                                    {/* {
                                        companyList && companyList.length > 0 ?

                                            (
                                                <div className="cmnyListTableCont">

                                                    <div className="addNewCmp" onClick={() => navigate('/newMachineRegistration')}>
                                                        <span className="addNewCmpText">Add New Company</span>
                                                        <span className="addNewCmpIcon"><FaPlus /></span>
                                                    </div>

                                                    {companyList && companyList.map((item, index) => {
                                                        const companyData = companyStatus.find(data => data.cmpcode === item.cmpcode);
                                                        return (
                                                            <div className="cmpnyListCard" onClick={() => handleCmpnyListClick(item)}>
                                                                <div>{item.cmpcode}</div>
                                                                <div className={companyData && companyData.status === 'VALIDATED' ? 'validated' : 'not-validated'}>
                                                                    {companyData && companyData.status === 'VALIDATED' ? 'Active' : 'Inactive'}
                                                                </div>
                                                            </div>

                                                        )
                                                    })}


                                                </div>
                                            )
                                            :
                                            <form>
                                                {
                                                    !pubKey && isDeviceValidated === 'INVALID' ?
                                                        <div class="form-group form-fg">
                                                            <i><CiUser /></i>
                                                            <input type="text" name="username" class="input-text" placeholder="Enter Company Code" value={userData.username}
                                                                onChange={handleInputChange} />
                                                        </div> : <div class="form-group form-fg">
                                                            <i><CiUser /></i>
                                                            <input type="text" name="privateKey" class="input-text" placeholder="Enter Private Key" value={userData.privateKey}
                                                                onChange={handleInputChange} />
                                                        </div>
                                                }

                                                {
                                                    !pubKey && isDeviceValidated === 'INVALID' && (

                                                        <div class="form-group mt-2">
                                                            {
                                                                !loginClick ? <button className="btn-Login" onClick={(e) => handleGetPubKey(e)}><AiOutlineLogin />
                                                                    &nbsp;Get Public Key</button> : <RotatingLines
                                                                    strokeColor="green"
                                                                    strokeWidth="5"
                                                                    animationDuration="0.75"
                                                                    width="40"
                                                                    visible={true}
                                                                />
                                                            }
                                                        </div>
                                                    )
                                                }
                                                {
                                                    pubKey && (

                                                        <div class="form-group mt-2">
                                                            {
                                                                !loginClick ? <button className="btn-Login" onClick={(e) => handleRegistration2(e)}><AiOutlineLogin />
                                                                    &nbsp;Register</button> : <RotatingLines
                                                                    strokeColor="green"
                                                                    strokeWidth="5"
                                                                    animationDuration="0.75"
                                                                    width="40"
                                                                    visible={true}
                                                                />
                                                            }
                                                        </div>
                                                    )
                                                }
                                                {
                                                    pubKey ? <div>
                                                        <div style={{ color: 'green', fontSize: '18px' }}>Your Public key is: {pubKey}</div>
                                                        <div style={{ color: 'green', fontSize: '18px' }}>Your Company Code is: {userData.username}</div>
                                                        <div style={{ color: 'orange', fontSize: '18px' }}>You will receive Private Key from the company</div>
                                                    </div> : ""
                                                }
                                            </form>
                                    } */}

                                    <form>
                                        {
                                            !pubKey && isDeviceValidated === 'INVALID' ?
                                                <div class="form-group form-fg">
                                                    <i><CiUser /></i>
                                                    <input type="text" name="username" class="input-text" placeholder="Enter Company Code" value={userData.username}
                                                        onChange={handleInputChange} />
                                                </div> : <div class="form-group form-fg">
                                                    <i><CiUser /></i>
                                                    <input type="text" name="privateKey" class="input-text" placeholder="Enter Private Key" value={userData.privateKey}
                                                        onChange={handleInputChange} />
                                                </div>
                                        }
                                        {/* <div class="form-group form-fg">
                                                <i><CiLock /></i>
                                                <input type="password" name="password" class="input-text" placeholder="Enter Password" value={userData.password}
                                                    onChange={handleInputChange} />
                                                <i class="fa fa-unlock-alt"></i>
                                            </div> */}
                                        {
                                            !pubKey && isDeviceValidated === 'INVALID' && (

                                                <div class="form-group mt-2">
                                                    {/* <button className="btn-Login">Login</button> */}
                                                    {
                                                        !loginClick ? <button className="btn-Login" onClick={(e) => handleGetPubKey(e)}><AiOutlineLogin />
                                                            &nbsp;Get Public Key</button> : <RotatingLines
                                                            strokeColor="green"
                                                            strokeWidth="5"
                                                            animationDuration="0.75"
                                                            width="40"
                                                            visible={true}
                                                        />
                                                    }
                                                </div>
                                            )
                                        }
                                        {
                                            pubKey && (

                                                <div class="form-group mt-2">
                                                    {/* <button className="btn-Login">Login</button> */}
                                                    {
                                                        !loginClick ? <button className="btn-Login" onClick={(e) => handleRegistration2(e)}><AiOutlineLogin />
                                                            &nbsp;Register</button> : <RotatingLines
                                                            strokeColor="green"
                                                            strokeWidth="5"
                                                            animationDuration="0.75"
                                                            width="40"
                                                            visible={true}
                                                        />
                                                    }
                                                </div>
                                            )
                                        }
                                        {
                                            pubKey ? <div>
                                                <div style={{ color: 'green', fontSize: '18px' }}>Your Public key is: {pubKey}</div>
                                                <div style={{ color: 'green', fontSize: '18px' }}>Your Company Code is: {userData.username}</div>
                                                <div style={{ color: 'orange', fontSize: '18px' }}>You will receive Private Key from the company</div>
                                            </div> : ""
                                        }
                                    </form>
                                </div>
                                <p className="cbx-bot-bann">Cubix Dashboard, Developed by Cubix IT Solutions LLC</p>
                            </div>
                        </div>

                        {/* <div className="modal fade" tabIndex="-1" role="dialog" id="cmpnySelection">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Select a company</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {
                                            companyList && companyList.length > 0 ?
                                                companyList.map((item, index) => (
                                                    <div class="card cmpnyListCard" style={{ display: "flex", justifyContent: "space-between", cursor: 'pointer' }} onClick={() => handleCmpnyListClick(item)} data-bs-dismiss="modal">
                                                        <div class="card-body">
                                                            <h5 class="card-title">{item.cmpcode}</h5>
                                                            <p>{item.publick}</p>
                                                        </div>
                                                    </div>
                                                )) : ""
                                        }
                                    </div>
                                 
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default MachineValidation