import React from 'react';
import useUrlStore from '../store/useUrlStore';

const LandingPage: React.FC = () => {
  const { url, setUrl } = useUrlStore();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleSubmit = () => {
    // Logic to shorten the URL goes here
    console.log('URL to shorten:', url);
  };

  return (
    <div
      style={{
        padding: '20px',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, ,rgba(85, 118, 167, 0))',
        color: '#c9d1d9',
        minHeight: '100vh',
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#58a6ff' }}>
        web3 URL Shortener
      </h1>
      <input
        type="text"
        value={url}
        onChange={handleInputChange}
        placeholder="Enter URL to shorten"
        style={{
          padding: '10px',
          width: '300px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solidrgb(200, 226, 255)',
          backgroundColor: 'rgb(236, 236, 236)',
          color: '#c9d1d9',
          outline: 'none',
          fontSize: '1rem',
        }}
      />
      <br />
      <button
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          background: 'linear-gradient(90deg,rgb(88, 216, 255), #1f6feb)',
          color: '#ffffff',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        Shorten URL
      </button>
    </div>
  );
};

export default LandingPage;