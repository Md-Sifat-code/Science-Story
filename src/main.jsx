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
    path: "/",
    element: <Main_Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth_layout />,
    children: [
      {
        path: "/auth",
        element: <LandingAuth />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        element: <Signin />,
      },
      {
        path: "/auth/verification",
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
