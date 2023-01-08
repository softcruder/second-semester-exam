import React from 'react';

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="content-container">
          <h1>
            AltSchool Africa Second Semester Exam Project by{' '}
            <a
              className="home-link"
              href="https://softcruder.github.io"
              rel="noopener"
            >
              Softcruder
            </a>
          </h1>
        </div>
      </div>
      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>
            Custom counter hook with increment, decrement, reset, setValue
            functions
          </li>
          <li>
            Combination of states with a useReducer that implements a counter
          </li>
          <li>404 page</li>
          <li>Error boundary to handle errors and display a fallback UI</li>
          <li>Good SEO practices</li>
        </ul>
      </div>
    </>
  );
};

export default Home;
