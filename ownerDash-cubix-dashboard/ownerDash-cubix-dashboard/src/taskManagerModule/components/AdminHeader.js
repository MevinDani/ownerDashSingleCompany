import React, { useState } from "react";
import ic_app_logo_outline from "../img/ic_app_logo_outline.png";
import ic_hamburger from "../img/ic_hamburger.svg";
import "../css/Header.css";
import AdminSideBar from "../components/AdminSideBar";
import { useNavigate } from "react-router-dom";

function AdminHeader() {

    const [showSidebar, setShowSidebar] = useState();

    const clickedOnhamburger = () => {
        setShowSidebar(prev => !prev)
    }

    const navigate = useNavigate()

    return (

        <div className="Header-root-container d-flex justify-content-between py-4 px-2">
            <img className="Header-company-logo" src={ic_app_logo_outline} onClick={() => navigate('/admin/dashboard')} />
            <span className="Header-root-container-menu-button">
                <img onClick={() => clickedOnhamburger()} src={ic_hamburger} />
            </span>


            {
                showSidebar && <AdminSideBar clickedOnhamburger={clickedOnhamburger} />
            }

        </div>

    )
}

export default AdminHeader;