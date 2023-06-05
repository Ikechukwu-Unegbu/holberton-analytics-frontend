import React from 'react';
import DashMenu from '../components/DashMenu';
 
type ProfileProps = {
  // Define the props you want to pass to the component
};

const Profile: React.FC<ProfileProps> = (props) => {
  // Access and use the props within the component
  return (
    <div> 
        <DashMenu/>
    </div>
  );
};

export default Profile;
