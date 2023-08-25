import React, { useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// CONTEXT
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = () => {

    const authContext = useContext(AuthContext);
    const { isAuthenticated, loading } = authContext;
    // console.log(authContext);

    useEffect(() => {
        authContext.loadUser();

        //eslint-disable-next-line
    }, []);

    return (

        // loading === false && 
        isAuthenticated ? <Outlet /> : <Navigate to='/login' />

    )

}

export default PrivateRoute