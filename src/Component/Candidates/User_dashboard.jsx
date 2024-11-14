import React, { useState } from "react";
import { useLocation } from "react-router-dom";  // Import useLocation to access state passed via navigate
import '../Candidates/Css/User_dashboard.css'

function User_dashboard() {
  const [CurrentView, setCurrentView] = useState('Dashboard');
  
  // Access name from location state (passed via navigate)
  const location = useLocation();
  const { name } = location.state || {};

  const handleMenuClick = (view) => {
    setCurrentView(view);
  };

  const renderContent = () => {
    switch (CurrentView) {
      case "setting":
        return <div>Settings</div>;
      case "UDashboard":
        return <div>User Dashboard</div>;
      case "Profile":
        return <div>Profile</div>;
      case "AppliedJobs":
        return <div>AppliedJobs</div>;
      default:
        return <div>Select a view from the menu</div>; // Default case
    }
  };

  return (
    <>
      <div className="dashboard-container">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Sidebar Menu</h3>
          <ul>
            <li onClick={() => handleMenuClick("Dashboard")}>Dashboard</li>
            <li onClick={() => handleMenuClick("Profile")}>Profile</li>
            <li onClick={() => handleMenuClick("AppliedJobs")}>Applied Jobs</li>
            {/* <li onClick={() => handleMenuClick("Selectd")}>Profile</li> */}
            <li onClick={() => handleMenuClick("setting")}>Settings</li>
          </ul>
        </div>
        
        {/* Main Content */}
        <div className="main-content">
          {/* Header */}
          <header className="header">
            <div className="profile-section">
              <img 
                src="https://via.placeholder.com/40" 
                alt="profile" 
                className="profile-picture" 
              />
              <span className="profile-name">{name ? name : "Guest"}</span> 
            </div>
            <h2 className="view-title">{CurrentView}</h2> 
          </header>

          <main className="content">
            {renderContent()}
          </main> 
        </div>
      </div>
    </>
  );
}

export default User_dashboard;
