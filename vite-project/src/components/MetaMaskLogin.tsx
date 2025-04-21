// src/components/MetaMaskLogin.tsx

import React, { useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import './MetaMaskLogin.css'; // Import the CSS file

const MetaMaskLogin: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    const provider = await detectEthereumProvider();

    if (provider) {
      try {
        const accounts = await (window.ethereum as any).request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error('User rejected the request:', error);
      }
    } else {
      console.error('Please install MetaMask!');
    }
  };

  return (
    <div>
      <button onClick={connectWallet} className="login-button">
        {walletAddress ? `Connected: ${walletAddress}` : 'Connect Wallet'}
      </button>
    </div>
  );
};

export default MetaMaskLogin;