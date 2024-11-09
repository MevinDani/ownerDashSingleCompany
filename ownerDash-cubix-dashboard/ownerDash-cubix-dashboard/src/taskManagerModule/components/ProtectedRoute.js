import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

    const authed = localStorage.getItem("cubix_taskify_isLoggedIn")
    return JSON.parse(authed) ? children : <Navigate to="admin/taskManagerLogin" />;
}

export default ProtectedRoute;