// Login.jsx
import React, { useState } from 'react';

const Login = ({ setIsAuthenticated, setSuccessMessage, setErrorMessage, setUserName, handleAuthentication }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    console.log('Attempting login with email:', email);
    console.log('Attempting login with password:', password);
    // Simulează logica de logare
    // Aici ar trebui să apelezi o funcție de logare pe server
    // care verifică datele introduse și returnează rezultatele

    // Verificare simplă: dacă emailul și parola sunt corecte, considerăm autentificarea ca reușită
    if (email === 'user@example.com' && password === 'password') {
      handleAuthentication(true, `Welcome, ${email}!`);
      setUserName(email);
      setSuccessMessage('Login successful.'); // Adaugă un mesaj de succes
    } else {
      handleAuthentication(false, 'Login failed. Please check your credentials.');
      setUserName('');
      setErrorMessage('Invalid credentials.'); // Adaugă un mesaj de eroare
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
