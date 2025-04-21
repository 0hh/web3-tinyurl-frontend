import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [url, setUrl] = React.useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSubmit = () => {
    console.log('URL to shorten:', url);
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <h1>web3 URL Shortener</h1>
      <input
        type="text"
        value={url}
        onChange={handleInputChange}
        placeholder="Enter URL to shorten"
        className="input-field"
      />
      <br />
      <button onClick={handleSubmit} className="shorten-button">
        Shorten URL
      </button>
    </div>
  );
};

export default LandingPage;