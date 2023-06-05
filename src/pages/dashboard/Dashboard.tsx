import React from 'react';
import DashMenu from '../components/DashMenu';
 
type DashboardProps = {
  // Define the props you want to pass to the component
};

const Dashboard: React.FC<DashboardProps> = (props) => {
  // Access and use the props within the component
  return (
    <div> 
        <DashMenu/>
    </div>
  );
};

export default Dashboard;
