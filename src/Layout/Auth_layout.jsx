import React from "react";
import { Outlet } from "react-router-dom";
import LanguageSelector from "../LanguageSelector";

function Auth_layout() {
  return (
    <div>
      <LanguageSelector />
      <Outlet />
    </div>
  );
}

export default Auth_layout;
