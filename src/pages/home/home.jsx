import React from 'react';
import Menu from '../components/Menu';
import './Home.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="Home">
     
      <Menu/>
      <div className="hero">
        <h1 className="text-center text-light  title">Holberton Analytics</h1>
      </div>

      <div className="intro">

      </div>
      {/* PRICE CONTAINER */}
      <div className="price container">
        <div className="card plan-card">
          <div className="card-body">

              <h3 className="text-center">Basic</h3>
              <div className='center'>
                <small className='text-center text-secondary'><b>free</b></small>
              </div>
             <div className="deet-container">
             <div className="deets">
                <span className="key">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
                <span className="val">Web Origin</span>
              </div>
              <div className="deets">
                <span className="key">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
                <span className="val">Geolocation</span>
              </div>
              <div className="deets">
                <span className="key">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
                <span className="val">Exit</span>
              </div>
              <div className="deets">
                <span className="key">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
                <span className="val">User Agent</span>
              </div>
             </div>
              <div className="button_holder">
              <Link className="btn btn-primary" to="/register" >Get Started</Link>
                {/* <a href='/register' className="btn btn-primary">Get Started </a> */}
              </div>
          </div>
        </div>
        <div className="card plan-card">
          <div className="card-body">

              <h3 className="text-center">Basic</h3>
              <div className='center'>
                <small className='text-center text-secondary'><b>$2/month</b></small>
              </div>
             <div className="deet-container">
             <div className="deets">
                <span className="key">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
                <span className="val">Web Origin</span>
              </div>
              <div className="deets">
                <span className="key">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
                <span className="val">Geolocation</span>
              </div>
              <div className="deets">
                <span className="key">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
                <span className="val">Exit</span>
              </div>
              <div className="deets">
                <span className="key">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
                <span className="val">User Agent</span>
              </div>
             </div>
              <div className="button_holder">
                <Link className="btn btn-primary" to="/register" >Get Started</Link>
                {/* <a href="/register" className="btn btn-primary">Get Started </a> */}
              </div>
          </div>
        </div>
      </div>
     {/* END OF PRICE CONTAINER */}
      <Footer/>
    </div>
  );
}

export default Home;
