import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>About Us</h1>
      <p>
        This is a modern React application built with Vite, featuring secure authentication 
        and a scalable architecture.
      </p>
      <div style={{ marginTop: '30px' }}>
        <h2>Features</h2>
        <ul>
          <li>Secure Admin Authentication</li>
          <li>Modern React 19.1.0</li>
          <li>Fast Development with Vite</li>
          <li>Responsive Design</li>
          <li>Google OAuth Integration</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
