import React, { useState } from "react";
import { useLocation } from "react-router-dom";  // Import useLocation to access state passed via navigate
import '../Candidates/Css/User_dashboard.css'

function Recruiter() {
  const [CurrentView, setCurrentView] = useState('RDashboard');
  
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
      case "RDashboard":
        return <div>User Dashboard</div>;
      case "Profile":
        return <div>Profile</div>;
      case "Candidates":
        return <div>Candidates</div>;
      case "post_jobs":
        return <div>post_jobs</div>;
      case "asign_task":
        return <div>asign_task</div>;
    }
  };

  return (
    <>
      <div className="dashboard-container">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Sidebar Menu</h3>
          <ul>
            <li onClick={() => handleMenuClick("RDashboard")}>Dashboard</li>
            <li onClick={() => handleMenuClick("Profile")}>Profile</li>
            <li onClick={() => handleMenuClick("Candidates")}>Candidates</li>
            <li onClick={() => handleMenuClick("post_jobs")}>Post  Jobs</li>
            {/* <li onClick={() => handleMenuClick("asign_task")}>Asign Task</li> */}
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
              <span className="profile-name">{name ? name : "Guest"} ( !!Recruiter!! )</span> 
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

export default Recruiter;
