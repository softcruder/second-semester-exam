import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <h2 className="logo">Softcruder</h2>
      </Link>
      <div className="nav-link">
        <ul>
          <li>
            <NavLink to="reducer">Reducer</NavLink>
          </li>
          <li>
            <NavLink to="custom">Custom</NavLink>
          </li>
          <li>
            <NavLink to="error">404page</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
