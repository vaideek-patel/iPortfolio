import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import 'sal.js/dist/sal.css';
import sal from 'sal.js';

const Contact = () => {
    useEffect(() => {
        sal({ once: true });
    }, []);

    return (
        <div className="mb-8 p-5">
            <SectionTitle title={"Contact"}/>
            <p className='mt-2 mb-6'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            <div className="flex flex-col lg:flex-row mt-10 space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="flex-[0.9] p-6 h-auto border shadow-xl" data-sal="slide-up" data-sal-duration="1000">
                    <div className="space-y-8">
                        <div className="flex items-center group" data-sal="slide-up" data-sal-delay="200" data-sal-duration="1000">
                            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-sky-50 text-sky-500 text-xl mr-4 group-hover:bg-sky-500 group-hover:text-white transition duration-300">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Address</h3>
                                <p className="text-gray-600">A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>
                        <div className="flex items-center group" data-sal="slide-up" data-sal-delay="400" data-sal-duration="1000">
                            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-sky-50 text-sky-500 text-xl mr-4 group-hover:bg-sky-500 group-hover:text-white transition duration-300">
                                <i className="bi bi-telephone"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Call Us</h3>
                                <p className="text-gray-600">+1 5589 55488 55</p>
                            </div>
                        </div>
                        <div className="flex items-center group" data-sal="slide-up" data-sal-delay="600" data-sal-duration="1000">
                            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-sky-50 text-sky-500 text-xl mr-4 group-hover:bg-sky-500 group-hover:text-white transition duration-300">
                                <i className="bi bi-envelope"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Email Us</h3>
                                <p className="text-gray-600">info@example.com</p>
                            </div>
                        </div>
                        <div className="mt-10" data-sal="slide-up" data-sal-delay="800" data-sal-duration="1000">
                            <iframe
                                title="Google Map"
                                className="w-full h-64"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.095465755421!2d-122.4013070846817!3d37.792349279756616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807c6a4800a7%3A0x59b0114ec1c9b75a!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1625185183421!5m2!1sen!2sus"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="flex-[1.3] bg-white p-8 h-auto border shadow-xl" data-sal="slide-up" data-sal-duration="1000">
                    <form className="space-y-4">
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <div className="flex-1" data-sal="slide-up" data-sal-delay="200" data-sal-duration="1000">
                                <label className="block text-black mb-1" htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-2 border border-gray-300"
                                />
                            </div>
                            <div className="flex-1" data-sal="slide-up" data-sal-delay="400" data-sal-duration="1000">
                                <label className="block text-black mb-1" htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-2 border border-gray-300"
                                />
                            </div>
                        </div>
                        <div data-sal="slide-up" data-sal-delay="600" data-sal-duration="1000">
                            <label className="block text-black mb-1" htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full p-2 border border-gray-300"
                            />
                        </div>
                        <div data-sal="slide-up" data-sal-delay="800" data-sal-duration="1000">
                            <label className="block text-black mb-1" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                className="w-full p-2 border border-gray-300 h-40 overflow-hidden"
                            ></textarea>
                        </div>
                        <div className="text-center" data-sal="slide-up" data-sal-delay="1000" data-sal-duration="1000">
                            <button
                                type="submit"
                                className="bg-blue-500 rounded-full text-white py-2 px-4 hover:bg-blue-600"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
