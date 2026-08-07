import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

function GuestRoute() {
  const { isAuthenticated, isLoading } = useSelector((store) => store.auth);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/feed" replace />;
  }

  return <Outlet />;
}

export default GuestRoute;