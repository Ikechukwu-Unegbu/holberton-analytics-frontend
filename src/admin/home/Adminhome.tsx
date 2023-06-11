import React from 'react';
import DashMenu from '../components/DashMenu';
import UsersTable from './components/UsersTable'
import SitesTable from './components/SitesTable'
// import UserRegChart from '../graphs/UserRegChart'
import './adminhome.css'


const AdminHome: React.FC = () => {
  return (
    <div>
      <DashMenu/>
      <main className="container admin-container">
        <UsersTable/>
        <SitesTable/>
        <div className="mt-3">
            {/* <UserRegChart/> */}
        </div>
      </main>
    </div>
  );
};

export default AdminHome;
