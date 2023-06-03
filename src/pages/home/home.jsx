import React from 'react';
import Menu from '../components/Menu';
import './Home.css'

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
      <Menu/>
      <div className="hero">
        <h1 className="text-center text-light  title">Holberton Analytics</h1>
      </div>
     
      </header>
    </div>
  );
}

export default Home;
