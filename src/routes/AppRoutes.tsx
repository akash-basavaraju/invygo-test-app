import { Route, Routes, Navigate } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import RegistrationForm from "../pages/RegistrationForm";
import Reports from "../pages/Reports";
import { NAVIGATION_ROUTE_PATHS } from "../utils/AppConstants";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={NAVIGATION_ROUTE_PATHS.regiform.path} />}
        />
        <Route
          path={NAVIGATION_ROUTE_PATHS.admindash.path}
          element={<AdminDashboard />}
        />
        <Route
          path={NAVIGATION_ROUTE_PATHS.regiform.path}
          element={<RegistrationForm />}
        />
        <Route
          path={NAVIGATION_ROUTE_PATHS.reports.path}
          element={<Reports />}
        />
      </Routes>
    </>
  );
}
