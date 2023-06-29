import React, { useState, useEffect } from 'react';
import DashMenu from '../components/DashMenu';
import './Profile.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { API_BASE_URL } from '../../config';

type ProfileProps = {
  // Define the props you want to pass to the component
};

type UserData = {
  _id: string | undefined;
  fullname: string;
  username: string;
  email: string;
};

const Profile: React.FC<ProfileProps> = (props) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>('');

  const [show, setShow] = useState<boolean>(false);

  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    // console.log

    try {
      const accessToken: string | null = localStorage.getItem('ha_accessToken');
      const user: UserData | null = JSON.parse(localStorage.getItem('ha_user') || '{}');
      const userId: string | undefined = user?._id;

      if (!accessToken || !userId) {
        setError('Access token or user ID not found in local storage');
        return;
      }

      const formData = new FormData(event.currentTarget);
      const formValues: Partial<UserData> = {};

      formData.forEach((value, key) => {
        formValues[key as keyof UserData] = value.toString();
      });
      // console.log(formValues);
      // return;
      const response = await fetch(`${API_BASE_URL}/user/edit/${userId}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error('Failed to update user data');
      }

      const updatedData: UserData = await response.json();
      setUserData(updatedData);
      handleClose();
    } catch (error) {
      setError('Error updating user data');
    }
  };

  useEffect(() => {
    const fetchUserData = async (): Promise<void> => {
      try {
        const accessToken: string | null = localStorage.getItem('ha_accessToken');
        const user: UserData | null = JSON.parse(localStorage.getItem('ha_user') || '{}');
        const userId: string | undefined = user?._id;

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
        <div className="container profile">
          <div className="img-div">
            <img className="img img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" />
          </div>
          <div className="">
            <Button variant="primary" className="btn-sm" onClick={handleShow}>
              Edit
            </Button>
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
          </ul>
        </div>
      )}
      <div className="container">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
            {userData &&(
             
              <div className="">
                 <input type="text" name='user_id' defaultValue={userData._id}  style={{display:'none'}} />
                     <div className="form-group mt-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input type="text" name="username" defaultValue={userData.username} className="form-control" />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="fullname" className="form-label">
                  Fullname
                </label>
                <input type="text" name="fullname" defaultValue={userData.fullname} className="form-control" />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="text" name="email" defaultValue={userData.email} className="form-control" />
              </div>
              <div className="form-group mt-3">
                <button type="submit" className="btn btn-primary" style={{ float: 'right' }}>
                  Save
                </button>
              </div>
              </div>
             
               
            )}
            
            </form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Profile;
