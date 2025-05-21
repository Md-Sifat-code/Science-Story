import React from "react";
import { Outlet } from "react-router-dom";
import LanguageSelector from "../LanguageSelector";

function Main_Layout() {
  return (
    <div>
      <LanguageSelector/>
      <Outlet />
    </div>
  );
}

export default Main_Layout;
