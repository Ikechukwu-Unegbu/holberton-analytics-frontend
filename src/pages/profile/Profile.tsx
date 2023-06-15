import React, { useState, useEffect } from 'react';
import DashMenu from '../components/DashMenu';
import './Profile.css'
type ProfileProps = {
  // Define the props you want to pass to the component
};

type UserData = {
  _id: string | undefined;
  fullname: string;
  username:string;
  email: string;
};

const Profile: React.FC<ProfileProps> = (props) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>('');

  useEffect(() => {
    const fetchUserData = async (): Promise<void> => {
      try {
        const accessToken: string | null = localStorage.getItem('ha_accessToken');
        const user: UserData | null = JSON.parse(localStorage.getItem('ha_user') || '{}');
        const userId: string|undefined = user?._id;

        if (!accessToken || !userId) {
          setError('Access token or user ID not found in local storage');
          setIsLoading(false);
          return;
        }

        const response = await fetch(`http://localhost:5000/user/profile/${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data: UserData = await response.json();
        console.log(data)
        setUserData(data);
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching user data');
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <DashMenu />
      {userData && (
        <div className='container profile'>
          <div className="img-div">
            <img className='img img-fluid' src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" />
          </div>
          {/* <div></div> */}
          <div className="">
            <button className="btn btn-sm btn-primary btn_edit">Edit</button>
          </div>
          <br />
          <br />
          <ul className="list-group">
            <li className="list-group-item">
              <h2>User ID: {userData._id}</h2>
            </li>
            <li className="list-group-item">
              <h4>Name: {userData.fullname}</h4>
            </li>
            <li className="list-group-item">
              <h4>Username: {userData.username}</h4>
            </li>
            <li className="list-group-item">
              <h4>Email: {userData.email}</h4>
            </li>
            {/* <li className="list-group-item">And a fifth one</li> */}
          </ul>
          
        </div>
      )}
    </div>
  );
};

export default Profile;
