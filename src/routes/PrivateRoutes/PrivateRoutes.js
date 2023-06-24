import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div style={{ minHeight: '600px' }} className='flex justify-center items-center'>
            <progress className="progress progress-primary w-56"></progress>
        </div>
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;