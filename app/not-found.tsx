import React from 'react';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '10vh' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" style={{ color: '#2563eb', textDecoration: 'underline', marginTop: '2rem', display: 'inline-block' }}>
        Go back home
      </a>
    </div>
  );
} 