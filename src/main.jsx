import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Auth_layout from "./Layout/Auth_layout";
import Login from "./Auth/Components_auth/Login";
import Signin from "./Auth/Components_auth/Signin";
import { LanguageProvider } from "./LanguageContext";
import Main_Layout from "./Layout/Main_Layout";
import Home from "./Pages/Home";
import LandingAuth from "./Auth/Components_auth/LandingAuth";
import Verification from "./Auth/Components_auth/Verification";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Main_Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <Auth_layout />,
    children: [
      {
        path: "/",
        element: <LandingAuth />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signin />,
      },
      {
        path: "/verification",
        element: <Verification />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>
);
