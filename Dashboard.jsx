import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    visits: 3,
    upcomingAppointments: 1,
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>

      <div className="dashboard-stats">
        <div className="stat-box">
          <h3>Hospital Visits</h3>
          <p>{user.visits}</p>
        </div>
        <div className="stat-box">
          <h3>Upcoming Appointments</h3>
          <p>{user.upcomingAppointments}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
