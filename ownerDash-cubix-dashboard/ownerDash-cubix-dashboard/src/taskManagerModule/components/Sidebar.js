import React, { useContext, useEffect, useState } from "react";
import "../css/Sidebar.css";
import { useNavigate } from "react-router-dom";
import "../css/CommonStyle.css";

function Sidebar(props) {

    const { clickedOnhamburger } = props;
    const [showLogoutPopup, setShowLogoutPopup] = useState(false)
    const [nameOfUser, setNameOfUser] = useState("");

    const navigate = useNavigate()

    const logoutAction = (e) => {
        localStorage.setItem("cubix_taskify_isLoggedIn", JSON.stringify(false));
        
        navigate('/')
    }

    const clickedOnRightSideMenu = (path) => {
        navigate(`/${path}`)
    }

    useEffect(() => {
        if (localStorage.getItem("cubix_textile_staffName")) {
            //setNameOfUser(localStorage.getItem("cubix_textile_staffName").trim());
        }
    }, [])



    return (
        <div className="Sidebar-root-container" >

            <div onClick={clickedOnhamburger} className="Sidebar-left-container">

            </div>

            <div className="Sidebar-right-container">
                <h4 className="m-4">{nameOfUser}</h4>

                <div>
                    <label className="p-2 ms-4" onClick={() => clickedOnRightSideMenu("completed_tasks")}>My Completed Task</label>
                </div>

                <button onClick={() => { setShowLogoutPopup(true) }} className="btn btn-light ms-4 mt-4">Logout</button>
            </div>


            {
                showLogoutPopup &&
                <div className="Logout-popup-root-container">

                    <div className="Logout-popup-inner-container">
                        <h5>Logout</h5>
                        <p>Are you sure?</p>
                        <div className="Logout-cta-container">
                            <button onClick={() => setShowLogoutPopup(false)} className="btn btn-light me-4">Cancel</button>
                            <button onClick={logoutAction} className="btn btn-primary">Logout</button>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}

export default Sidebar;