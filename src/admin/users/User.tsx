import React, { Fragment } from 'react';
import DashMenu from '../components/DashMenu';
import './index.css';


interface User {
  id: number;
  name: string;
  email: string;
}

interface UserProps {
  // users: User[][];
}

const User: React.FC<UserProps> = () => {

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
            <span>Mr. John Doe</span>
          </div>
          <div className="user-deet">
              <span className='deet-key'>Username: </span>
              <span>Mr.JohnDoe</span>
          </div>
          <div className="user-deet">
              <span className='deet-key'>Email: </span>
              <span>email@email.com</span>
          </div>
        </div>
        <div className="mt-3 user-sites">
          <h4 className="text-center">User's Sites </h4>
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
        </div>
      </main>
    </Fragment>
  );
};

export default User;
