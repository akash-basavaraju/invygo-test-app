export const IS_MOBILE = window.innerWidth <= 800 && window.innerHeight <= 600;

export const NAVIGATION_ROUTE_PATHS: {
  [key: string]: { path: string; name: string };
} = {
  regiform: { path: "/registrationform", name: "Registration Form" },
  admindash: { path: "/admindashboard", name: "Admin Dashboard" },
  reports: { path: "/reports", name: "Reports" },
};
