import React, { useState } from "react";
import ic_app_logo_outline from "../img/ic_app_logo_outline.png";
import ic_hamburger from "../img/ic_hamburger.svg";
import "../css/Header.css";
import Sidebar from "../components/Sidebar";

function Header() {

    const [showSidebar, setShowSidebar] = useState();

    const clickedOnhamburger = () => {
        setShowSidebar(prev => !prev)
    }

    return (

        <div className="Header-root-container d-flex justify-content-between py-4 px-2" style={{ margin: "0px" }}>
            <img className="Header-company-logo" src={ic_app_logo_outline} />
            <span className="Header-root-container-menu-button">
                <img onClick={() => clickedOnhamburger()} src={ic_hamburger} />
            </span>


            {
                showSidebar && <Sidebar clickedOnhamburger={clickedOnhamburger} />
            }

        </div>

    )
}

export default Header;