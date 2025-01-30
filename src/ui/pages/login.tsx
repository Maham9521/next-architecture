import { useAuth } from '@/shared/context/authContext';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = () => {
        login(); // Authenticate the user
        const from = location.state?.from || '/'; // Redirect to the original route or home
        navigate(from, { replace: true });
    };

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
};

export default LoginPage;