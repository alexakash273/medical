import React, { useState } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  const [hospitals, setHospitals] = useState([
    { id: 1, name: 'City Hospital', location: 'Ahmedabad', specialty: 'Cardiology' },
    { id: 2, name: 'Metro Health', location: 'Delhi', specialty: 'Neurology' }
  ]);

  const [form, setForm] = useState({ name: '', location: '', specialty: '' });

  const handleAdd = (e) => {
    e.preventDefault();
    const newHospital = {
      id: Date.now(),
      ...form,
    };
    setHospitals([...hospitals, newHospital]);
    setForm({ name: '', location: '', specialty: '' });
  };

  const handleDelete = (id) => {
    setHospitals(hospitals.filter((h) => h.id !== id));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel: Manage Hospitals</h2>
      <form onSubmit={handleAdd} className="admin-form">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Hospital Name" required />
        <input name="location" value={form.location} onChange={handleChange} placeholder="Location" required />
        <input name="specialty" value={form.specialty} onChange={handleChange} placeholder="Specialty" required />
        <button type="submit">Add Hospital</button>
      </form>

      <div className="hospital-list">
        {hospitals.map((hospital) => (
          <div key={hospital.id} className="hospital-card">
            <h3>{hospital.name}</h3>
            <p>Location: {hospital.location}</p>
            <p>Specialty: {hospital.specialty}</p>
            <button onClick={() => handleDelete(hospital.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
