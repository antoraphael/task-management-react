// src/guards/RequireGuest.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const RequireGuest: React.FC = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Checking session…</div>;
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default RequireGuest;
