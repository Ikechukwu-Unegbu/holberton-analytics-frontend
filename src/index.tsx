import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/home';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Routerr,
  Routes,
  Route,
} from "react-router-dom";
// import 
// import {RegisterProps} from './pages/authentication/Register'
import Register from './pages/authentication/Register';
import Login from './pages/authentication/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Newsite from './pages/dashboard/sites/Newsite';
import Profile from './pages/profile/Profile';
import AdminHome from './admin/home/Adminhome'
import Users from './admin/users/Users'
import Search from './admin/search/Search';
import Sites from './admin/sites/Sites';
import User from './admin/users/User';
import ProtectedRoute from './ProtectedRoute';
import SiteList from './pages/dashboard/sites/SiteList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Routerr>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        
        <Route path="/dashboard" element={<ProtectedRoute user={{}}><Dashboard/></ProtectedRoute>} />
        <Route path="/dashboard/profile" element={<ProtectedRoute user={{}}><Profile/></ProtectedRoute>} />
        <Route path="/dashboard/sites" element={<ProtectedRoute user={{}}><SiteList/></ProtectedRoute>} />
        <Route path="/dashboard/new-site" element={<ProtectedRoute user={{}}><Newsite/></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute user={{}}><AdminHome/></ProtectedRoute>} />
        <Route path="/admin/sites" element={<ProtectedRoute user={{}}><Sites/></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute user={{}}><Users users={[]}/></ProtectedRoute>} />
        <Route path="/admin/user/:userid" element={<ProtectedRoute user={{}}><User/></ProtectedRoute>} />
        <Route path="/admin/search" element={<ProtectedRoute user={{}}><Search/></ProtectedRoute>} />

      </Routes>
    </Routerr>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
