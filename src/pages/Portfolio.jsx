import React, { useState, useEffect } from 'react';
import App1 from "../../public/Images/app-1.jpg";
import Product1 from "../../public/Images/product-1.jpg";
import Branding1 from "../../public/Images/branding-1.jpg";
import Books1 from "../../public/Images/books-1.jpg";
import App2 from "../../public/Images/app-2.jpg";
import Product2 from "../../public/Images/product-2.jpg";
import Branding2 from "../../public/Images/branding-2.jpg";
import Books2 from "../../public/Images/books-2.jpg";
import App3 from "../../public/Images/app-3.jpg";
import Product3 from "../../public/Images/product-3.jpg";
import Branding3 from "../../public/Images/branding-3.jpg";
import Books3 from "../../public/Images/books-3.jpg";
import zoomInIcon from "../../public/Icons/zoom-in.svg";
import linkIcon from "../../public/Icons/link-45deg.svg";
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import 'sal.js/dist/sal.css';
import sal from 'sal.js';

const Portfolio = () => {
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState('ALL');

    const links = ['ALL', 'APP', 'PRODUCT', 'BRANDING', 'BOOKS'];

    const data = [
        { id: 1, name: 'App-1', category: 'App', image: App1, simpleText: "lorem Ipsum, dolor sit amet consectetur" },
        { id: 2, name: 'Product-1', category: 'Product', image: Product1, simpleText: "lorem Ipsum, dolor sit amet consectetur" },
        { id: 3, name: 'Branding-1', category: 'Branding', image: Branding1, simpleText: "lorem Ipsum, dolor sit amet consectetur" },
        { id: 4, name: 'Books-1', category: 'Books', image: Books1, simpleText: "lorem Ipsum, dolor sit amet consectetur" },
        { id: 5, name: 'App-2', category: 'App', image: App2, simpleText: "lorem Ipsum, dolor sit amet consectetur" },
        { id: 6, name: 'Product-2', category: 'Product', image: Product2, simpleText: "lorem Ipsum, dolor sit amet consectetur" },
        { id: 7, name: 'Branding-2', category: 'Branding', image: Branding2, simpleText: "lorem Ipsum, dolor sit amet consectetur" },
        { id: 8, name: 'Books-2', category: 'Books', image: Books2, simpleText: "lorem Ipsum, dolor sit amet consectetur" },
        { id: 9, name: 'App-3', category: 'App', image: App3, simpleText: "lorem Ipsum, dolor sit amet consectetur" },
        { id: 10, name: 'Product-3', category: 'Product', image: Product3, simpleText: "lorem Ipsum, dolor sit amet consectetur" },
        { id: 11, name: 'Branding-3', category: 'Branding', image: Branding3, simpleText: "lorem Ipsum, dolor sit amet consectetur" },
        { id: 12, name: 'Books-3', category: 'Books', image: Books3, simpleText: "lorem Ipsum, dolor sit amet consectetur" },
    ];

    const filteredData = activeLink === 'ALL' ? data : data.filter(item => item.category.toUpperCase() === activeLink);

    const handleZoomInClick = () => {
        console.log(`Zoom in clicked`);
    };

    const handleLinkClick = () => {
        navigate("/portfolio_details");
    };

    useEffect(() => {
        sal({ once: true });
    }, []);

    useEffect(() => {
        sal({ once: true });
    }, [filteredData]);
    
    return (
        <div className="mb-8 p-5 bg-sky-50">
            <SectionTitle title={"Portfolio"} />
            <p data-sal="slide-up" data-sal-duration="1000" className='mt-3'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

            <div className="mt-16">
                <nav className="flex justify-center flex-wrap gap-2 mb-8" data-sal="slide-up" data-sal-duration="1000">
                    {links.map((link) => (
                        <button
                            key={link}
                            onClick={() => setActiveLink(link)}
                            className={`text-sm bg-transparent border-none cursor-pointer ${activeLink === link ? 'text-sky-500' : 'text-gray-800'}`}
                        >
                            {link}
                        </button>
                    ))}
                </nav>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredData.map(item => (
                        <div key={item.id} className="relative" data-sal="slide-up" data-sal-duration="1000">
                            <div className="border bg-black shadow overflow-hidden group">
                                <div className='overflow-hidden'>
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20" />
                                </div>

                                <div className="absolute top-4 left-4 p-2 bg-sky-500 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-xs font-semibold">{item.name}</p>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="" onClick={() => handleZoomInClick(item.name)}>
                                        <img src={zoomInIcon} alt="Zoom In" className="w-6 h-6" />
                                    </button>
                                    <button className="p-5" onClick={() => handleLinkClick(item.name)}>
                                        <img src={linkIcon} alt="Link" className="w-6 h-6" />
                                    </button>
                                    <div className="absolute bottom-4 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-md font-semibold">{item.simpleText}</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;