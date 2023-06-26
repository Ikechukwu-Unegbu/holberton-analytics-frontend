import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DashMenu from '../components/DashMenu';
import './index.css';
import { getUserById, getSitesByOwner } from '../../lib/admincalls';

interface Site {
  // Define the properties of the Site model
  _id:string;
  name:string;
  url:string;
}

interface UserProps {
  // users: User[][];
  // fullname: string;
  // username: string;
  // email: string;
}

const User: React.FC<UserProps> = () => {
  
  const [user, setUser] = useState({
    fullname: '',
    username: '',
    email: '',
  });
  // console.log(userid)
  const [sites, setSites] = useState<Site[]>([]);

  const { userid } = useParams<{ userid: string }>();
  useEffect(() => {
    
    const fetchUser = async () => {
       
      try {
        // const userId = '123'; // Replace with the actual user ID
        const fetchedUser = await getUserById(userid);
        setUser(fetchedUser);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    const fetchSites = async () => {
      try {
        const fetchedSites = await getSitesByOwner(userid);
        setSites(fetchedSites);
        console.log(fetchedSites)
      } catch (error) {
        console.error('Error fetching sites:', error);
      }
    };

    fetchUser();
    fetchSites()
  }, [userid]);
  return (
    <Fragment>
      <DashMenu/>
      <main className="container user-container">
       {/* <div className="img_div"> */}
        <img className='img img-fluid' src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
       {/* </div> */}
        <div className="mt-4 action-div">
          <button className="btn btn-warning text-dark">Suspend Account</button>
          <button className="btn btn-danger text-light">Delete Account</button>
        </div>
        <div className="deet-container">
          <div className="user-deet mt-4">
            <span className='deet-key'>Fullname: </span>
            <span>{user.fullname}</span>
          </div>
          <div className="user-deet">
              <span className='deet-key'>Username: </span>
              <span>{user.username}</span>
          </div>
          <div className="user-deet">
              <span className='deet-key'>Email: </span>
              <span>{user.email}</span>
          </div>
        </div>
        <div className="mt-3 user-sites">
          <h4 className="text-center">User's Sites </h4>
        <ul className="list-group">
          {sites.map((site) => (
            <li className="list-group-item" key={site._id}>
              <Link to={`/site/analytics/${site._id}`}>{site.name} - {site.url}</Link>
            </li>
          ))}


        </ul>
        </div>
      </main>
    </Fragment>
  );
};

export default User;
