import React, { useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import './MetaMaskLogin.css';
import InstallMetaMaskModal from './InstallMetaMaskModal';

const MetaMaskLogin: React.FC = () => {
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

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
            setShowModal(true);
        }
    };

    return (
        <div>
            <button onClick={connectWallet} className="login-button">
                {walletAddress ? `Connected: ${walletAddress}` : 'Connect Wallet'}
            </button>
            <InstallMetaMaskModal show={showModal} onClose={() => setShowModal(false)} />
        </div>
    );
};

export default MetaMaskLogin;