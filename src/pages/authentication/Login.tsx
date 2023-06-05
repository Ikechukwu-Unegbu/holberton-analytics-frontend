import React, { useState } from 'react';
import './Auth.css'
import Menu from '../components/Menu';

interface LoginProps {
  // Define any props you need for the component
}

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    // Handle the registration logic here
    // You can access the values of username, password, and email using their respective state variables
  };

  return (
    <div>
      <Menu/>
      
      <div className="auth"> 
        <div className="auth-left">
          <img className="img img-fluid" src="https://img.freepik.com/premium-vector/color-modern-illustration-data-analysis_145666-902.jpg?w=740" alt="" />
        </div>
        <div className="auth-right">
          <div className=""> 
            <h4 className='text text-secondary'>Log in</h4>
            <h6 className='text-secondary'>Holberton Analytics</h6>
          </div>
          <form>
          
            <div className="form-group mt-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input 
                className='form-control'
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

           <div className='form-group mt-3'>
            <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
           </div>

            <button type="button" className="btn btn-primary mt-2" onClick={handleRegister}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
