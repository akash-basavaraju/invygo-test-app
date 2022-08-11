import { useCallback, useState } from "react";
import { IS_MOBILE } from "../../utils/AppConstants";
import "./AppNavigation.css";

export default function AppNavigation() {
  const [isLeftBarOpen, setIsLeftBarOpen] = useState<boolean>(false);

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
      {IS_MOBILE ? (
        <div
          className={`app-leftbar-mobile ${
            isLeftBarOpen ? "leftbar-show" : "leftbar-hidden"
          }`}
        >
          <div className="app-leftbar-list">
            <div className="app-leftbar-item">Registration Form</div>
            <div className="app-leftbar-item">Admin Dashboard</div>
            <div className="app-leftbar-item">Reports</div>
          </div>
        </div>
      ) : (
        <div className="app-navigation-leftbar">
          <div className="app-leftbar-list">
            <div className="app-leftbar-item">Registration Form</div>
            <div className="app-leftbar-item">Admin Dashboard</div>
            <div className="app-leftbar-item">Reports</div>
          </div>
        </div>
      )}
      <div
        className={`app-navigation-page-container-${IS_MOBILE ? "mobile" : ""}`}
      >
        This is the Page
      </div>
    </div>
  );
}
