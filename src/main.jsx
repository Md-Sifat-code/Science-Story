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
import Learn from "./Pages/Learn";
import Topic_Layout from "./Layout/Topic_Layout";
import Topic1 from "./Select/Topic1";
import Core_Layout from "./Layout/Core_Layout";
import CoreView from "./Pages/CoreView";
import Blogs from "./Pages/Blogs";
import AboutUs from "./Pages/AboutUs";
import Challanges from "./Pages/Challanges";
import { UserProvider } from "./context/UserContext";
import ProgrammingChallengesPage from "./Pages/ProgrammingChallengesPage";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Main_Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/home/learn",
        element: <Learn />,
      },
      {
        path: "/home/blog",
        element: <Blogs />,
      },
      {
        path: "/home/about",
        element: <AboutUs />,
      },
      {
        path: "/home/challange",
        element: <Challanges />,
      },
      { // NEW: Route for the specific programming challenges page
        path: "/home/challenge/programming", // Adjusted path to be nested under /home/challange
        element: <ProgrammingChallengesPage />,
      }
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
  {
    path: "/topics",
    element: <Topic_Layout />,
    children: [
      {
        path: "/topics/:selectedTopic",
        element: <Topic1 />,
      },
    ],
  },
  {
    path: "/core",
    element: <Core_Layout />,
    children: [
      {
        path: "/core/:selectedTopic",
        element: <CoreView />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </LanguageProvider>
  </React.StrictMode>
);
