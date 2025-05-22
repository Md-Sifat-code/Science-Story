import React from "react";
import { Outlet } from "react-router-dom";

function Core_Layout() {
  return (
    <section>
      <div>
        <Outlet />
      </div>
    </section>
  );
}

export default Core_Layout;
