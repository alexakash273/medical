import React, { useState } from 'react';
import './Auth.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '', email: '', password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert('Please complete all fields');
      return;
    }
    alert(`Welcome, ${formData.name}!`);
    // Add real registration logic here
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
