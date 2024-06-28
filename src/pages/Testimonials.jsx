import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import 'sal.js/dist/sal.css';
import sal from 'sal.js';
import testimonials1 from "../Images/testimonials-1.jpg"
import testimonials2 from "../Images/testimonials-2.jpg"
import testimonials3 from "../Images/testimonials-3.jpg"
import testimonials4 from "../Images/testimonials-4.jpg"
import testimonials5 from "../Images/testimonials-5.jpg"

const testimonialsData = [
    {
        message: "This is an amazing service!",
        name: "Saul Goodman",
        photo: testimonials1,
        position: "CEO & Founder"
    },
    {
        message: "Exceptional quality and service.",
        name: "Sara Wilson",
        photo: testimonials2,
        position: "Desginer"
    },
    {
        message: "I had a wonderful experience.",
        name: "Jena Karlis",
        photo: testimonials3,
        position: "Store Owner"
    },
    {
        message: "Highly recommended!",
        name: "Matt Brandon",
        photo: testimonials4,
        position: "Freelancer"
    },
    {
        message: "Great support and friendly staff.",
        name: "John Larson",
        photo: testimonials5,
        position: "Entrepreneur"
    },

];

const Testimonials = () => {
    const [currentTestimonials, setCurrentTestimonials] = useState(testimonialsData.slice(0, 3));

    useEffect(() => {
        sal({ once: true });

        const interval = setInterval(() => {
            setCurrentTestimonials((prevTestimonials) => {
                const nextIndex = (testimonialsData.indexOf(prevTestimonials[prevTestimonials.length - 1]) + 1) % testimonialsData.length;
                return [...prevTestimonials.slice(1), testimonialsData[nextIndex]];
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mb-8 p-5 bg-sky-50">
            <SectionTitle title={"Testimonials"} />
            <p className='font-roboto mt-3 mb-5'> Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            <div className="testimonial-carousel justify-center flex space-x-4 overflow-hidden">
                {currentTestimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial flex flex-col items-center transition-opacity duration-500 ease-in-out" data-sal="slide-up" data-sal-duration="1000">
                        <div className="relative bg-white p-4 rounded-lg shadow-md max-w-md mt-4">
                            <p className="text-gray-700 text-center">{testimonial.message}</p>
                            <div className="absolute w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white left-1/2 transform -translate-x-1/2 -bottom-2"></div>
                        </div>
                        <div className="user-info flex flex-col items-center mt-4">
                            <img src={testimonial.photo} alt={testimonial.name} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-md" />
                            <p className="text-xl font-semibold mt-2 font-raleway text-black">{testimonial.name}</p>
                            <p className="text-sm text-gray-400">{testimonial.position}</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
