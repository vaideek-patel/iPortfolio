import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import 'sal.js/dist/sal.css';
import sal from 'sal.js';
import testimonials1 from "../Images/testimonials-1.jpg";
import testimonials2 from "../Images/testimonials-2.jpg";
import testimonials3 from "../Images/testimonials-3.jpg";
import testimonials4 from "../Images/testimonials-4.jpg";
import testimonials5 from "../Images/testimonials-5.jpg";

const testimonialsData = [
    {
        message: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
        name: "Saul Goodman",
        photo: testimonials1,
        position: "CEO & Founder"
    },
    {
        message: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
        name: "Sara Wilson",
        photo: testimonials2,
        position: "Desginer"
    },
    {
        message: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
        name: "Jena Karlis",
        photo: testimonials3,
        position: "Store Owner"
    },
    {
        message: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
        name: "Matt Brandon",
        photo: testimonials4,
        position: "Freelancer"
    },
    {
        message: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
        name: "John Larson",
        photo: testimonials5,
        position: "Entrepreneur"
    },
];

const Testimonials = () => {
    const [currentTestimonials, setCurrentTestimonials] = useState(testimonialsData.slice(0, 3));
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        sal({ once: true });

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        const interval = setInterval(() => {
            setCurrentTestimonials((prevTestimonials) => {
                const nextIndex = (testimonialsData.indexOf(prevTestimonials[prevTestimonials.length - 1]) + 1) % testimonialsData.length;
                return windowWidth >= 1024 ? [...prevTestimonials.slice(1), testimonialsData[nextIndex]] : [testimonialsData[nextIndex]];
            });
        }, 3000);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(interval);
        };
    }, [windowWidth]);

    return (
        <div className="mb-8 p-5 bg-sky-50">
            <SectionTitle title={"Testimonials"} />
            <p className='font-roboto mt-3 mb-5'> Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            <div className="testimonial-carousel flex justify-center space-x-4 overflow-hidden">
                {currentTestimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial flex flex-col items-center transition-opacity duration-500 ease-in-out" data-sal="slide-up" data-sal-duration="1000">
                        <div className="relative bg-white p-4 rounded-lg shadow-md max-w-md mt-4">
                            <p className="text-gray-700 text-center font-roboto text-[16px] testimonial-message">
                            <i class="bi bi-quote quote-icon-left text-sky-400 text-[26px]"></i> {testimonial.message} <i className="bi bi-quote quote-icon-right text-sky-400 text-[26px]"></i>
                            </p>
                            <div className="absolute w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white left-1/2 transform -translate-x-1/2 -bottom-2"></div>
                        </div>
                        <div className="user-info flex flex-col items-center mt-4">
                            <img src={testimonial.photo} alt={testimonial.name} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full" />
                            <p className="text-xl font-semibold mt-2 font-raleway text-black">{testimonial.name}</p>
                            <p className="text-sm text-gray-400">{testimonial.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
