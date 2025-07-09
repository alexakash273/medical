import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { FaHome, FaSearch, FaSignInAlt, FaUserPlus, FaTools, FaRobot, FaMoon, FaSun } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h1 className="logo">docU</h1>
      <ul className="nav-links">
        <li>
          <Link to="/"><FaHome /> Home</Link>
        </li>
        <li>
          <Link to="/search"><FaSearch /> Search</Link>
        </li>
        <li>
          <Link to="/login"><FaSignInAlt /> Login</Link>
        </li>
        <li>
          <Link to="/register"><FaUserPlus /> Register</Link>
        </li>
        <li>
          <Link to="/admin"><FaTools /> Admin</Link>
        </li>
        <li>
          <Link to="/chatbot"><FaRobot /> Chatbot</Link>
        </li>
        <li>
          <button className="theme-toggle-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? 'Light' : 'Dark'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
