import { Navigate, Route, Routes } from 'react-router-dom';
import AuthGuard from './authGuard';
import LoginPage from '@/ui/pages/login';


const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LoginPage />} />

            {/* Protected Routes */}
            <Route element={<AuthGuard />}>
                <Route path="/" element={<div>This is the homepage</div>} />
            </Route>

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;