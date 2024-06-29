import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import iPortFolioImage from "../../public/iPortFolioImage1.jpg";
import dropdownIcon from "../../public/Icons/menu-button.svg";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const [activeLink, setActiveLink] = useState('Home');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [subDropdownOpen, setSubDropdownOpen] = useState(false);

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
        toggleSidebar();
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleSubDropdown = () => {
        setSubDropdownOpen(!subDropdownOpen);
    };

    useEffect(() => {
        const sections = ['home', 'about', 'resume', 'portfolio', 'services', 'contact'];
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                console.log(`Section: ${entry.target.id}, isIntersecting: ${entry.isIntersecting}`);
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    setActiveLink(sectionId.charAt(0).toUpperCase() + sectionId.slice(1));
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                console.log(`Observing section: ${section}`);
                observer.observe(element);
            } else {
                console.error(`Element with ID ${section} not found`);
            }
        });

        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    return (
        <div>
            <div className={`fixed inset-y-0 left-0 lg:relative transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out w-[300px] h-screen bg-gray-950 text-white flex flex-col items-center overflow-y-auto overflow-x-hidden z-50`}>
                <div className="p-4 flex flex-col items-center">
                    <img
                        className="w-28 h-28 rounded-full border-8 border-gray-800"
                        src={iPortFolioImage}
                        alt="Profile"
                    />
                    <h2 className="mt-4 text-2xl font-semibold">Alex Smith</h2>
                </div>
                <div className="flex space-x-2">
                    <a href="https://twitter.com" target="_blank" className="bg-gray-800 p-3 rounded-full">
                        <FaXTwitter />
                    </a>
                    <a href="https://facebook.com" target="_blank" className="bg-gray-800 p-3 rounded-full">
                        <FaFacebook />
                    </a>
                    <a href="https://instagram.com" target="_blank" className="bg-gray-800 p-3 rounded-full">
                        <FaInstagram />
                    </a>
                    <a href="https://skype.com" target="_blank" className="bg-gray-800 p-3 rounded-full">
                        <FaSkype />
                    </a>
                    <a href="https://linkedin.com" target="_blank" className="bg-gray-800 p-3 rounded-full">
                        <FaLinkedin />
                    </a>
                </div>
                <ul className="mt-4 w-[270px]">
                    {['Home', 'About', 'Resume', 'Portfolio', 'Services'].map((link) => (
                        <li key={link} className={`p-5 flex items-center space-x-2 text-lg group ${activeLink === link ? 'text-white' : 'text-gray-400'} transition-all duration-300`}>
                            <i className={`bi bi-${getIconName(link)} ${activeLink === link ? 'text-sky-500' : 'text-gray-400'}`}></i>
                            <a href={`#${link.toLowerCase()}`} onClick={() => handleSetActiveLink(link)} className={`${activeLink === link ? 'text-white' : 'text-gray-400'} group-hover:text-white font-poppins text-md`}>
                                {link}
                            </a>
                        </li>
                    ))}
                    <li className="p-4 flex items-center space-x-2 group">
                        <img src={dropdownIcon} alt="Dropdown Icon" className="w-6 h-6" />
                        <button onClick={toggleDropdown} className="flex items-center group-hover:text-white text-gray-400 focus:outline-none">
                            Dropdown
                        </button>
                    </li>
                    {dropdownOpen && (
                        <ul className="pl-8 mt-2 space-y-2">
                            <li className="flex items-center space-x-2 group">
                                <a href="#" className="group-hover:text-white text-gray-400">Dropdown 1</a>
                            </li>
                            <li className="flex items-center space-x-2 group">
                                <button onClick={toggleSubDropdown} className="flex items-center group-hover:text-white text-gray-400 focus:outline-none">
                                    Deep Dropdown
                                </button>
                            </li>
                            {subDropdownOpen && (
                                <ul className="pl-8 mt-2 space-y-2">
                                    <li className="flex items-center space-x-2 group">
                                        <a href="#" className="group-hover:text-white text-gray-400">Dropdown 2</a>
                                    </li>
                                    <li className="flex items-center space-x-2 group">
                                        <a href="#" className="group-hover:text-white text-gray-400">Dropdown 3</a>
                                    </li>
                                    <li className="flex items-center space-x-2 group">
                                        <a href="#" className="group-hover:text-white text-gray-400">Dropdown 4</a>
                                    </li>
                                </ul>
                            )}
                        </ul>
                    )}
                    <li key="Contact" className={`p-4 flex items-center space-x-2 text-lg  group ${activeLink === 'Contact' ? 'text-white' : 'text-gray-400'} transition-all duration-300`}>
                        <i className={`bi bi-envelope ${activeLink === 'Contact' ? 'text-sky-500' : 'text-gray-400 group-hover:text-sky-500'}`}></i>
                        <a href="#contact" onClick={() => handleSetActiveLink('Contact')} className={`${activeLink === 'Contact' ? 'text-white' : 'text-gray-400'} group-hover:text-white`}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );

    function getIconName(link) {
        switch (link) {
            case 'Home': return 'house';
            case 'About': return 'person';
            case 'Resume': return 'file-earmark-text';
            case 'Portfolio': return 'images';
            case 'Services': return 'hdd-stack';
            case 'Contact': return 'envelope';
            default: return 'house-door';
        }
    }
};

export default Sidebar;
