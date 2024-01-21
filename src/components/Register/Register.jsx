
import React, { useState } from 'react';

const Register = ({ setSuccessMessage, setErrorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {

    if (email && password) {
      setSuccessMessage('Registration successful. Please log in.');
      setErrorMessage('');
    } else {
      setSuccessMessage('');
      setErrorMessage('Registration failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
