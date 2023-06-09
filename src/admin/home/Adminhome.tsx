import React, { useState, useEffect } from 'react';
import DashMenu from '../../pages/components/DashMenu';
import SitesTable from './components/SitesTable';
import UsersTable from './components/UsersTable';
import './adminhome.css'
import MetricBox from './components/MetricBox';
import { getAdminMetric } from '../../lib/admincalls';

const AdminHome = () => {
  const [sites, setSites] = useState([]);
  const [users, setUsers] = useState([]);
  const [adminMetrics, setAdminMetrics] = useState([]);

  // const [pagination, setPagination] = useState({ totalCount: 0, totalPages: null });
  const fetchAdminMetric = async (): Promise<void> => {
    try {
      const adminMetric = await getAdminMetric();
      console.log('Admin metric:', adminMetric);
      setAdminMetrics(adminMetric)
      // Do something with the admin metric data
    } catch (error) {
      console.error('Error fetching admin metric:', error);
      // Handle the error
    }
  };
  


  useEffect(() => {
    const token = localStorage.getItem('ha_accessToken');
      fetchAdminMetric()
    
    // Fetch sites data
    fetch('http://localhost:5000/admin/sites', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSites(data.sites);
        // setPagination(data.pagination);
      })
      .catch((error) => {
        console.error('Error fetching sites:', error);
      });

    // Fetch users data
    fetch('http://localhost:5000/admin/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <DashMenu />
      <main className="container admin-container">
        <MetricBox metrics={adminMetrics}/>
        <UsersTable users={users} />
        <SitesTable sites={sites} />
        <div className="mt-3">
          {/* <UserRegChart/> */}
        </div>
      </main>
    </div>
  );
};

export default AdminHome;
