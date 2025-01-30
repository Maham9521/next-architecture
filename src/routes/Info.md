# Routes
The `routes` folder contains all the application routes, including protected routes and route guards.

## Structure
- `guards/`: Route guards for authentication and authorization.
- `routes.tsx`: Main routing configuration.

## Example: `routes/guards/AuthGuard.tsx`
```typescript
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthGuard;