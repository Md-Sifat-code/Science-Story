// main.jsx (or index.jsx) — put this BEFORE all other imports

// Polyfill for `global` and `process` for sockjs-client and related libs
if (typeof global === "undefined") {
  window.global = window;
}

if (typeof process === "undefined") {
  window.process = {
    env: { NODE_ENV: "development" },
  };
}

// Buffer polyfill for some libs that need it
import { Buffer } from "buffer";
if (!window.Buffer) {
  window.Buffer = Buffer;
}

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
import BasicSyntaxQuiz from "./Challenges/BasicSyntaxQuiz";
import Dashboard from "./Pages/Dashboard";
import Chats from "./Pages/Chats";
import Messege_Layout from "./Layout/Messege_Layout";
import Messages from "./components/Fixed_components/Messeges";
import { WebSocketProvider } from "./context/WebSocketContext";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Main_Layout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/home/learn", element: <Learn /> },
      { path: "/home/blog", element: <Blogs /> },
      { path: "/home/about", element: <AboutUs /> },
      { path: "/home/challange", element: <Challanges /> },
      {
        path: "/home/challenge/programming",
        element: <ProgrammingChallengesPage />,
      },
      {
        path: "/home/challange/programming/basic-syntax-quiz",
        element: <BasicSyntaxQuiz />,
      },
      { path: "/home/dashboard", element: <Dashboard /> },
      {
        path: "/home/chat",
        element: <Messege_Layout />,
        children: [{ path: "/home/chat", element: <Messages /> }],
      },
    ],
  },
  {
    path: "/",
    element: <Auth_layout />,
    children: [
      { path: "/", element: <LandingAuth /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signin /> },
      { path: "/verification", element: <Verification /> },
    ],
  },
  {
    path: "/topics",
    element: <Topic_Layout />,
    children: [{ path: "/topics/:selectedTopic", element: <Topic1 /> }],
  },
  {
    path: "/core",
    element: <Core_Layout />,
    children: [{ path: "/core/:selectedTopic", element: <CoreView /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <UserProvider>
        <WebSocketProvider>
          <RouterProvider router={router} />
        </WebSocketProvider>
      </UserProvider>
    </LanguageProvider>
  </React.StrictMode>
);
