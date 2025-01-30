import { useAuth } from '@/shared/context/authContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';


/**
 * AuthGuard Component
 * 
 * This component protects routes by checking if the user is authenticated.
 * If the user is not authenticated, they are redirected to the login page.
 * 
 * @returns {JSX.Element} - The protected route or a redirect to the login page.
 */
const AuthGuard = () => {
    const { isAuthenticated } = useAuth(); // Use your authentication context or state
    const location = useLocation();

    // If the user is not authenticated, redirect to the login page
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // If the user is authenticated, render the child routes
    return <Outlet />;
};

export default AuthGuard;