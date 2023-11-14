// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Add additional routes as needed */}
    </Routes>
  </Router>
);
