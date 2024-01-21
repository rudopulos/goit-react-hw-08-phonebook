// src/components/Navigation/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
//import { setFilter } from '../AppRedux/slice';

const Navigation = ({ isAuthenticated }) => {
  //const dispatch = useDispatch();

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