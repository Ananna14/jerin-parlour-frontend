import React from 'react';
// import ReactLoading from 'react-loading';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return (
            <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                {/* <ReactLoading type={"spinningBubbles"} color={"#A99577"} height={100} width={100} /> */}
                {isLoading && <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                        </div>}
            </div>
        )
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;