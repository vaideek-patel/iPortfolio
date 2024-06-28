import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-white text-center p-10">
            <div className="text-sm text-black">
                © Copyright <strong>VaideekPatel</strong> All Rights Reserved
            </div>
            <div className="text-sm text-black">
                Designed by{' '}
                <a
                    href="https://vaideekpatel.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 focus:outline-none"
                >
                    Vaideek Patel
                </a>
            </div>
        </footer>
    );
}

export default Footer;
