import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px',
        marginTop: '20px'
      }}>
        <div style={{
          background: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #dee2e6'
        }}>
          <h3>Quick Stats</h3>
          <p>Your application statistics will appear here.</p>
        </div>
        <div style={{
          background: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #dee2e6'
        }}>
          <h3>Recent Activity</h3>
          <p>Recent activities will be shown here.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
