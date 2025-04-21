import React from 'react';
import './App.css'; // Assuming you have some styles defined here
import './components/LandingPage.css';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap"
          rel="stylesheet"
        />
        <LandingPage />
      
        </div>
        </div>
  );
};

export default App;