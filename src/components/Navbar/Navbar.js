import React from 'react';
import './navbar.css';

function Navbar(props) {
  return (
    <nav class="navbar">
      <div className="logo">
        <h2>RUDRA.</h2>
      </div>
      <ul className="nav-list">
        <li><a href="/#">blog</a></li>
        <li><a href="/#">about</a></li>
        <li><a href="/#">education</a></li>
        <li><a href="/#">skills</a></li>
        <li><a href="/#">projects</a></li>
        <li><a href="/#">contact</a></li>
      </ul>
      <div className="sm-links">
        <a href="/#">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="/#">
          <i class="fa fa-github"></i>
        </a>
        <a href="/#">
          <i class="fa fa-linkedin"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;