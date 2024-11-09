import { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const navigate = useNavigate()
    const userDataArray = JSON.parse(localStorage.getItem("userDataArray")) || [];

    // useEffect(() => {
    //     if (userDataArray.length === 0) {
    //         navigate('/login');
    //     }
    // }, []);

    return userDataArray.length > 0 ? children : <Navigate to="/login" />;
};


export default PrivateRoute