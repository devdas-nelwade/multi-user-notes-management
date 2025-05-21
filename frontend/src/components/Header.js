import React from 'react';
import { Link } from 'react-router-dom';
//import './Header.css'; // Optional: You can include this if Header-specific styles are added separately

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Notes App</h1>
      </div>
      <nav className="header-right">
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
      </nav>
    </header>
  );
}

export default Header;
