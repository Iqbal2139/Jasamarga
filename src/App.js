import logo from './logo.svg';
import './App.css';
// src/App.js
import React from 'react';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import LalinPage from './LalinPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lalin" element={<LalinPage />} />
      </Routes>
    </div>
  );
}

export default App;
