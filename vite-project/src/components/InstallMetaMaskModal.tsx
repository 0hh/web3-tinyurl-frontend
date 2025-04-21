import React from 'react';
import './InstallMetaMaskModal.css'; // Corrected CSS file import

interface InstallMetaMaskModalProps {
    show: boolean;
    onClose: () => void;
}

const InstallMetaMaskModal: React.FC<InstallMetaMaskModalProps> = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                {/* MetaMask Logo */}
                <div className="logo-container">
                    <img src="src/assets/Metamask_logo.svg" alt="MetaMask Logo" className="logo" />
                </div>

                {/* Message and QR Code */}
                <p>
                    No Wallet detected. Please install the MetaMask extension to continue.
                </p>
                <div className="qr-code-container">
                    <img src="src/assets/metamask_mobile_qr.png" alt="MetaMask QR Code" className="qr-code" />
                </div>

                {/* Buttons */}
                <button onClick={onClose} className="button">
                    <a
                        href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?utm_source=www.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                    >
                        Get the MetaMask Browser Extension
                    </a>
                </button>
                <div>
                    <button onClick={onClose} className="button">X</button>
                </div>
            </div>
        </div>
    );
};

export default InstallMetaMaskModal;