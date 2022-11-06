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
            <NavLink
              to="/reducer"
              className={(isActive) => (isActive ? 'active' : 'inactive')}
            >
              Reducer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/custom"
              className={(isActive) => (isActive ? 'active' : 'inactive')}
            >
              Custom
            </NavLink>
          </li>
          <li>
            <NavLink
              to="notfound"
              className={(isActive) => (isActive ? 'active' : 'inactive')}
            >
              404page
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
