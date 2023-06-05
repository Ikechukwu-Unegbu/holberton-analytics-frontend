import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/home';
import 'bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './pages/authentication/Register';
import Login from './pages/authentication/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Newsite from './pages/dashboard/sites/Newsite';
import Profile from './pages/profile/Profile';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path:'/register', 
    element: <Register/>
  }, 
  {
    path:'/login', 
    element: <Login/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  },
  {
    path:'/dashboard/new-site',
    element: <Newsite/>
  },
  {
    path:'/dashboard/profile',
    element: <Profile/>
  }

]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
