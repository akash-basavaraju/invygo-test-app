import { NavigationRoutePathTypes } from "../types/NavigationPathTypes";

export const IS_MOBILE = window.innerWidth <= 800 && window.innerHeight <= 700;

export const NAVIGATION_ROUTE_PATHS: NavigationRoutePathTypes = {
  regiform: { path: "/registrationform", name: "Registration Form" },
  admindash: { path: "/admindashboard", name: "Admin Dashboard" },
  reports: { path: "/reports", name: "Reports" },
};

export const ProfessionOptions = [
  "Business Man",
  "Lawyer",
  "Doctor",
  "Engineer",
  "Student",
];
