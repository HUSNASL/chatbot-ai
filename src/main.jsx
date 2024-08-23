import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import RootLayout from "./layouts/rootLayout/RootLayout";
import HomePage from "./routes/homepage/HomePage";
import DashboardPage from "./routes/dashboardPage/DashboardPage";
import ChatPage from "./routes/chatPage/ChatPage";
import SignInPage from './routes/signInPage/SignInPage';
import SignUpPage from './routes/signUpPage/SignUpPage';
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout";




const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: '/sign-in/*', element: <SignInPage /> },
      { path: '/sign-up/*', element: <SignUpPage /> },
      {
        path: "dashboard", 
        element: <DashboardLayout />,
        children: [
          { path: "/dashboard", element: <DashboardPage /> }, 
          { path: "/dashboard/chats/:id", element: <ChatPage /> }, 
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
