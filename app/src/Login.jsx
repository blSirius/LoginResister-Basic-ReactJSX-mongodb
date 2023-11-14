// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Make a POST request to the server using Axios
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      // Check if the login was successful
      if (response.status === 200) {
        console.log('Login successful');
        navigate('/');
        
        // You can redirect to another page or perform other actions here
      } else if (response.status === 401) {
        console.error('Invalid credentials');
        // Handle invalid credentials, e.g., display an error message to the user
      } else {
        console.error('Login failed');
        // Handle other errors, e.g., display a generic error message
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;