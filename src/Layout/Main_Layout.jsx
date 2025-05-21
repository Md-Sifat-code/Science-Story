import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Re_useComponents/Navbar";


function Main_Layout() {
  return (
    <div>
      <Navbar/>
      
      <Outlet />
    </div>
  );
}

export default Main_Layout;
