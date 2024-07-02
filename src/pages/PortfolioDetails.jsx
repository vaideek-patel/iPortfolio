import React, { useEffect } from 'react';
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import App1 from "../Images/app-1.jpg";
import Product1 from "../Images/product-1.jpg";
import Branding1 from "../Images/branding-1.jpg";
import Books1 from "../Images/books-1.jpg";
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/functions';

const PortfolioDetails = () => {
    useEffect(() => {
        sal({
            threshold: 0.1,
            once: true,
        });
        scrollToTop()
    }, []);

    return (
        <div>
            <div className="p-3 mb-15 bg-gray-900 flex flex-col lg:flex-row justify-between items-start lg:items-center">
                <h2 className="text-2xl mt-2 mb-3 font-ralewayBold"><strong className='text-white'>Portfolio Details</strong></h2>
                <nav className="breadcrumb text-sm text-gray-600 lg:ml-4">
                    <Link to="/" className="text-sky-500 mr-3">Home</Link> / <span className='ml-2 text-white'>Portfolio Details</span>
                </nav>
            </div>

            <div className="mx-auto my-8 p-3">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-2/3 px-4 lg:mb-0" data-sal="slide-up" data-sal-delay="800" data-sal-duration="1000">
                        <div>
                            <Carousel
                                showThumbs={false}
                                showStatus={false}
                                infiniteLoop={true}
                                useKeyboardArrows={true}
                                autoPlay={true}
                                interval={3000}
                            >
                                <div>
                                    <img src={App1} alt="Project 1" className="rounded shadow-lg" />
                                </div>
                                <div>
                                    <img src={Product1} alt="Project 2" className="rounded shadow-lg" />
                                </div>
                                <div>
                                    <img src={Branding1} alt="Project 3" className="rounded shadow-lg" />
                                </div>
                                <div>
                                    <img src={Books1} alt="Project 4" className="rounded shadow-lg" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-4" data-sal="slide-up" data-sal-delay="800" data-sal-duration="1000">
                        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                            <h3 className="text-2xl mb-4 font-ralewayBold">Project information</h3>
                            <div className="border-b border-gray-300 mb-4"></div>
                            <ul className="mb-4">
                                <li className="mb-2 font-roboto"><strong>Category:</strong> Web design</li>
                                <li className="mb-2 font-roboto"><strong>Client:</strong> ASU Company</li>
                                <li className="mb-2 font-roboto"><strong>Project date:</strong> 01 March, 2020</li>
                                <li className="mb-2 font-roboto"><strong>Project URL:</strong> <a href="http://www.example.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">www.example.com</a></li>
                            </ul>
                        </div>
                        <div data-sal="slide-up" data-sal-delay="800" data-sal-duration="1000">
                            <h2 className="text-3xl mb-4 font-ralewayBold">Exercitationem repudiandae officiis neque suscipit</h2>
                            <p className='font-roboto'>
                                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia.
                                Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia
                                accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt
                                eius.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioDetails;
