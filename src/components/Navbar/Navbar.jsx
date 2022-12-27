import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-2">
      <div className="container mx-auto flex items-center justify-between flex-wrap p-2">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to="/">
              <h2 className="logo">Softcruder</h2>
            </Link>
            <Link
              to="/reducer"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              useReducer
            </Link>
            <Link
              to="/custom"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Custom Hook
            </Link>
            <Link
              to="/error"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Not Found
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
