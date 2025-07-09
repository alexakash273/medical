// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import SearchResults from './pages/SearchResults';
import HospitalDetails from './pages/HospitalDetails';
import Chatbot from './components/Chatbot';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext'; // 🆕
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/hospital/:id" element={<HospitalDetails />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
