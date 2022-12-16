import React from "react";
import { Outlet } from "react-router-dom"; 
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <div className="p-5 grid grid-cols-[1fr_5fr] gap-3 ">
      <SideBar /> 
      <Outlet />
    </div>
  );
};

export default Dashboard;