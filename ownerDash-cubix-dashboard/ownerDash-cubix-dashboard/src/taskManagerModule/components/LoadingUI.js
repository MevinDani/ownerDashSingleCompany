import React from "react";
import "../css/LoadingUI.css";

function LoadingUI(){

    return(
        <div className="LoadingUI-root-container">
                <div className="LoadingUI-loader"></div>
                <div><label className="LoadingUI-loader-label">Please wait...</label></div>
        </div>
    )
}

export default LoadingUI;