import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayOut from "./components/LayOut";
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import PostDetail from "./pages/PostDetail"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Authors from "./pages/Authors"
import AuthorPost from "./pages/AuthorPost"
import EditPost from "./pages/EditPost"
import LogOut from "./pages/LogOut"
import DashBoard from "./pages/DashBoard"
import CategaryPost from "./pages/CategaryPost"
import CreatePost from "./pages/CreatePost"
import UserProfile from "./pages/UserProfile"



const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "post/:id",
        element: <PostDetail />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "profile/:id",
        element: <UserProfile />
      },
      {
        path: "authors",
        element: <Authors />
      },
      {
        path: "create",
        element: <CreatePost />
      },
      {
        path: "post/categaries/:categary",
        element: <CategaryPost />
      },
      {
        path: "post/users/:id",
        element: <AuthorPost />
      },
      {
        path: "myposts/:id",
        element: <DashBoard />
      },
      {
        path: "post/:id/edit",
        element: <EditPost />
      },
      {
        path: "logout",
        element: <LogOut/>
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


