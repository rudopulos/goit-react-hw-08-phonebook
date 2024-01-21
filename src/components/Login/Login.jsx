
import React, { useState } from 'react';

const Login = ({ setIsAuthenticated, setSuccessMessage, setErrorMessage, setUserName, handleAuthentication }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    console.log('Attempting login with email:', email);
    console.log('Attempting login with password:', password);
   
    if (email === 'user@example.com' && password === 'password') {
      handleAuthentication(true, `Welcome, ${email}!`);
      setUserName(email);
      setSuccessMessage('Login successful.'); 
    } else {
      handleAuthentication(false, 'Login failed. Please check your credentials.');
      setUserName('');
      setErrorMessage('Invalid credentials.'); 
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
