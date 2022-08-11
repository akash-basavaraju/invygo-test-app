import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../routes/AppRoutes";
import { IS_MOBILE, NAVIGATION_ROUTE_PATHS } from "../../utils/AppConstants";
import "./AppNavigation.css";

export default function AppNavigation() {
  const [isLeftBarOpen, setIsLeftBarOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLeftBarToggle = useCallback(() => {
    setIsLeftBarOpen((value) => {
      return !value;
    });
  }, []);

  return (
    <div className="app-navigation-container">
      <div
        className={`app-navigation-header ${
          IS_MOBILE ? "app-header-mobile" : ""
        }`}
      >
        {IS_MOBILE && (
          <div className="app-header-toggle" onClick={handleLeftBarToggle}>
            &#8801;
          </div>
        )}
        Meetup RSVP App
      </div>
      <div
        className={
          IS_MOBILE
            ? `app-leftbar-mobile ${
                isLeftBarOpen ? "leftbar-show" : "leftbar-hidden"
              }`
            : "app-navigation-leftbar"
        }
      >
        <div className="app-leftbar-list">
          {Object.keys(NAVIGATION_ROUTE_PATHS).map((key) => {
            const { name, path } = NAVIGATION_ROUTE_PATHS[key];
            return (
              <div
                key={path}
                className="app-leftbar-item"
                onClick={() => {
                  setIsLeftBarOpen((value) => {
                    return !value;
                  });
                  navigate(path);
                }}
              >
                {name}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`app-navigation-page-container${IS_MOBILE ? "-mobile" : ""}`}
      >
        <AppRoutes />
      </div>
    </div>
  );
}
