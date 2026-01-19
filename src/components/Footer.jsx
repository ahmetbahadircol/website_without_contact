import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-dark-bg border-t border-gray-900 text-center">
            <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Ahmet Col. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
