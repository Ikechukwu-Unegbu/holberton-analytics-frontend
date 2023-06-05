import React from 'react';
import DashboardMenu from '../components/DashboardMenu';
 
type DashboardProps = {
  // Define the props you want to pass to the component
};

const Dashboard: React.FC<DashboardProps> = (props) => {
  // Access and use the props within the component
  return (
    <div>
        <DashboardMenu/>
    </div>
  );
};

export default Dashboard;
