import React, { useEffect, useState } from "react";
import "../css/LoginPage.css";
import "../css/CommonStyle.css";
import ic_footer_bg from "../img/footer_bg.png";
import cloud_bg from "../img/cloud_svg.svg";
import ic_app_logo from "../img/ic_app_logo_outline.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function LoginPage() {


    const [showLoginScreen, setShowLoginScreen] = useState(false);

    const navigate = useNavigate();

    const initialUserDetails = {
        username: "",
        password: ""
    }

    const [userDetails, setUserDetails] = useState(initialUserDetails)

    const handleInput = (e) => {

        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }

    const login = () => {

        console.log("userDetails ", userDetails)

        axios.post(`${process.env.REACT_APP_BASE_URL}/login.php`, userDetails).then((res) => {
            console.log(" res ", res)

            // save credentials to local storage 
            localStorage.setItem("cubix_taskify_username", res.data.username)
            localStorage.setItem("cubix_taskify_userid", res.data.user_id)
            localStorage.setItem("cubix_taskify_usertype", res.data.user_type)
            localStorage.setItem("cubix_taskify_isLoggedIn", JSON.stringify(true));
            if (res.data.user_type != "administrator") {
                navigate("/home")
            } else {
                navigate("/admin_home")
            }

        }).catch((err) => {
            console.log(" err ", err)
        })
    }

    useEffect(() => {

        //check if already logged in
        let loggedInStatus = JSON.parse(localStorage.getItem("cubix_taskify_isLoggedIn"));

        if (loggedInStatus != null) {
            if (loggedInStatus) {

                setTimeout(() => {

                    let cubixUserType = localStorage.getItem("cubix_taskify_usertype");

                    if (cubixUserType != null) {
                        if (cubixUserType == "administrator") {
                            navigate("/admin_home")
                        } else {
                            navigate("/home")
                        }
                    } else {
                        navigate("/home")
                    }

                }, 3000)

            } else {
                console.log("else of loggedIn")
                setShowLoginScreen(true)
            }
        } else {
            setShowLoginScreen(true)
        }

    }, [])

    return (
        <div className="LoginPage-root-container pt-4">

            <div className="Login_bg_image_layer">
                <img className="footer_image" src={ic_footer_bg} />
                <img src={cloud_bg} />
            </div>

            {
                showLoginScreen ?


                    <div className="LoginPage-content-layer">

                        <div className="container d-flex flex-column ps-4">
                            <h4 className="Login-app-name">Taskify</h4>
                            <label className="app_logo_label">
                                <img className="app_logo" src={ic_app_logo} />
                            </label>
                        </div>

                        <div className="LoginPage-form-box">
                            <label>Username</label>
                            <input name="username" className="common_input mt-1" onChange={(e) => handleInput(e)} />
                            <label className="mt-3">Password</label>
                            <input name="password" className="common_input mt-1" onChange={(e) => handleInput(e)} />
                            <button className="btn btn-primary mt-4" onClick={() => login()}>Login</button>
                        </div>


                    </div>
                    :
                    <div className="LoginPage-content-layer container  ">

                        <div className="container d-flex flex-column ps-4">
                            <h4 className="Login-app-name">Taskify</h4>
                            <label className="app_logo_label">
                                <img className="app_logo" src={ic_app_logo} />
                            </label>
                        </div>

                        <div className="d-flex justify-content-center align-items-center">

                            <div class="spinner-border text-danger" role="status">
                            </div>
                            <p className="LoginPage-checking-text ms-2">Checking...</p>
                        </div>


                    </div>

            }

        </div>
    )
}

export default LoginPage;