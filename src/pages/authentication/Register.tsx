import React, { useState } from 'react';
import './Auth.css';
import Menu from '../components/Menu';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = {
      fullname: fullname,
      username: username,
      email:email,
      password: password
    };
    
    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response:', data);
        // Handle the response data here
      })
      .catch(error => {
        console.log('Error:', error);
        // Handle any errors here
      });
    

  };

  return (
    <div>
      <Menu />

      <div className="auth">
        <div className="auth-left">
          <img
            className="img img-fluid"
            src="https://img.freepik.com/premium-vector/color-modern-illustration-data-analysis_145666-902.jpg?w=740"
            alt=""
          />
        </div>
        <div className="auth-right">
          <div className="">
            <h4 className="text text-secondary">Register</h4>
            <h6 className="text-secondary">Holberton Analytics</h6>
          </div>
          <form onSubmit={handleRegister}>
            <div className="form-group mt-3">
              <label htmlFor="username">Fullname:</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="form-control"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                className="form-control"
                name="fullname"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="username">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                className="form-control"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group mt-2">
              <p>
                Have an account? <a href="/login">Log in here</a>
              </p>
            </div>

            <button type="submit" className="btn btn-primary mt-2">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
