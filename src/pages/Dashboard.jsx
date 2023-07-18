import React, { useEffect } from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";

const Dashboard = ({ isUserLoggedIn, setIsUserLoggedIn }) => {
  useEffect(() => {
    document.title = "Dashboard | KDD";
  }, []);
  return (
    <div>
      <DashboardHeader
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />
    </div>
  );
};

export default Dashboard;
