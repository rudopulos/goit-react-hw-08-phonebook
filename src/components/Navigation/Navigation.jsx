
import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = ({ isAuthenticated }) => {


  const handleLogout = () => {

  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        {isAuthenticated ? (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;