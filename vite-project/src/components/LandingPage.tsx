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
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap"
        rel="stylesheet"
      />
      {/* Moving band */}
      <div className="band-top">
        <span>/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</span>
      </div>
      <h1>WEB3 URL Shortener</h1>
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
      {/* Moving band */}
      <div className="band-bottom">
        <span>\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</span>
      </div>
    </div>
  );
};

export default LandingPage;