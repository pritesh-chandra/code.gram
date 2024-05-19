import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import MyFeed from './components/MyFeedPage/MyFeed';
import SignUp from './components/SignUp/SignUp';
import Messages from './components/Messages/Messages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/myfeed",
    element: <MyFeed />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/messages",
    element: <Messages />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
