import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import 'sal.js/dist/sal.css';
import sal from 'sal.js';
import { scrollToTop } from '../utils/functions';

const Services = () => {
    const navigate = useNavigate();

    const services = [
        {
            icon: 'bi-briefcase',
            title: 'Lorem Impsum',
            description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
        },
        {
            icon: 'bi-card-checklist',
            title: 'Dolor Sitema',
            description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',
        },
        {
            icon: 'bi-bar-chart',
            title: 'Sed ut perspiciatis',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        },
        {
            icon: 'bi-binoculars',
            title: 'Magni Dolores',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
        {
            icon: 'bi-brightness-high',
            title: 'Nemo Enim',
            description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
        },
        {
            icon: 'bi-calendar-week',
            title: 'Eiusmod Tempor',
            description: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi',
        },
    ];

    const handleServiceClick = () => {
        scrollToTop();
        navigate('/service_details');
    };

    useEffect(() => {
        sal({ once: true });
    }, []);

    return (
        <div className="mb-8 p-5">
            <SectionTitle title={"Services"} />
            <p data-sal="slide-up" data-sal-duration="1000" className='font-roboto mt-5'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex items-center cursor-pointer group"
                        onClick={handleServiceClick}
                        data-sal="slide-up"
                        data-sal-duration="1000"
                    >
                        <div className="rounded-full p-6 w-12 h-12 flex items-center justify-center transition-all duration-300 bg-sky-500 group-hover:bg-white group-hover:border border-sky-500 mb-10">
                            <i className={`bi ${service.icon} text-white text-2xl group-hover:text-sky-500`}></i>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-bold mb-2 font-raleway">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
