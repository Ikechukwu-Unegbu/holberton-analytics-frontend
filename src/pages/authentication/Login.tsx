import React, { useState } from 'react';
import './Auth.css';
import Menu from '../components/Menu';

interface LoginProps {
  // Define any props you need for the component
}

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = () => {
    // Handle the registration logic here
    // You can access the values of username, password, and email using their respective state variables
  };

  const loginUser = async (credentials: { username: string; password: string }) => {
    return fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(data => data.json());
  };

  async function onLogin(event:React.FormEvent){
    event.preventDefault()
    const response = await loginUser({
      username:username,
      password:password
    });
    console.log(response)
    if ('accessToken' in response) {
        localStorage.setItem('ha_accessToken', response['accessToken']);
        localStorage.setItem('ha_user', JSON.stringify(response['user']));
        window.location.href = "/dashboard";
    }else{
      console.log("Failed to login")
    }
    
    
  }

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
            <h4 className="text text-secondary">Log in</h4>
            <h6 className="text-secondary">Holberton Analytics</h6>
          </div>
          <form onSubmit={onLogin}>
          <div className="form-group mt-3">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <button type="submit" className="btn btn-primary mt-2" onClick={handleRegister}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
