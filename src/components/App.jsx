/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFilter,
  fetchContacts,
  addContact,
  deleteContact,
} from './AppRedux/slice';
import { selectContacts, selectFilter } from '../components/AppRedux/selectors';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Login from './Login/Login';
import Register from './Register/Register';
import Navigation from './Navigation/Navigation';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { Routes, Route, Navigate } from 'react-router-dom';


const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAuthentication = (isAuthenticated, message) => {

    setIsAuthenticated(isAuthenticated);
    setSuccessMessage(message);
  };

  useEffect(() => {
    console.log('Current userName:', userName);
    if (!isInitialLoad) {
      dispatch(fetchContacts());
    }
    setIsInitialLoad(false);
  }, [dispatch, filter, isInitialLoad, userName]);

  const addContactHandler = (newContact) => {
    dispatch(addContact(newContact));
  };

  const deleteContactHandler = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const filteredContacts = contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Navigation isAuthenticated={isAuthenticated} />
      <h1>Phonebook</h1>
      <p>{successMessage}</p>
      <Routes>
        <Route
          path="/contacts"
          element={
            <ProtectedRoute
              element={() => (
                <>
                  <ContactForm
                    contacts={contacts.items}
                    onAddContact={addContactHandler}
                  />
                  <h2>Contacts</h2>
                  <Filter value={filter} onChange={handleFilterChange} />
                  {contacts.isLoading ? (
                    <p>Loading...</p>
                  ) : contacts.error ? (
                    <p>Error: {contacts.error}</p>
                  ) : filteredContacts.length === 0 ? (
                    <p>No contacts found.</p>
                  ) : (
                    <ContactList
                      contacts={filteredContacts}
                      onDelete={deleteContactHandler}
                    />
                  )}
                </>
              )}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              setIsAuthenticated={setIsAuthenticated}
              setSuccessMessage={setSuccessMessage}
              setErrorMessage={setErrorMessage}
              setUserName={setUserName}
              handleAuthentication={handleAuthentication}
            />
          }
        />
        <Route
          path="/register"
          element={<Register setSuccessMessage={setSuccessMessage} setErrorMessage={setErrorMessage} />}
        />
        <Route path="/protected" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
};

export default App;