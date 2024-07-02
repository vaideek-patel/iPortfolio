import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import 'sal.js/dist/sal.css';
import sal from 'sal.js';

const summaryData = [
    {
        title: 'BRANDON JOHNSON',
        description: "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
        bullets: [
            'Portland par 127, Orlando, FL',
            '(123) 456-7891',
            'alice.barkley@example.com'
        ]
    }
];

const educationData = [
    {
        title: 'MASTER OF FINE ARTS & GRAPHIC DESIGN',
        company: 'Rochester Institute of Technology, Rochester, NY',
        date: '2015 - 2016',
        description: [
            'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend'
        ]
    },
    {
        title: 'BACHELOR OF FINE ARTS & GRAPHIC DESIGN',
        company: 'Rochester Institute of Technology, Rochester, NY',
        date: '2010 - 2014',
        description: [
            'Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila'
        ]
    }
];

const experienceData = [
    {
        title: 'SENIOR GRAPHIC DESIGN SPECIALIST',
        company: 'Experion, New York, NY',
        date: '2019 - Present',
        bullets: [
            'Lead in the design, development, and implementation of graphic, layout, and production communication materials.',
            'Delegated tasks to 7 members of the design team and provided counsel on all aspects of projects.',
            'Supervised the assessment of all graphic materials to ensure quality and accuracy.',
            'Managed production project budgets ranging from $2,000 - $25,000.'
        ]
    },
    {
        title: 'GRAPHIC DESIGN SPECIALIST',
        company: 'Stepping Stone Advertising, New York, NY',
        date: '2017 - 2018',
        bullets: [
            'Developed numerous marketing programs including logos, brochures, infographics, presentations, and advertisements.',
            'Managed up to 5 projects or tasks concurrently under tight deadlines.',
            'Recommended and consulted with clients on appropriate graphic design solutions.',
            'Created 4+ design presentations and proposals monthly for clients and account managers.'
        ]
    }
];

const Resume = () => {
    useEffect(() => {
        sal({ once: true });
    }, []);

    return (
        <div className="mb-8 p-5">
            <SectionTitle title={"Resume"} />
            <p className="mt-4 text-base text-gray-700" data-sal="slide-up" data-sal-duration="1000">
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h1 className="text-2xl font-bold mb-5 flex items-center font-ralewayBold" data-sal="slide-up" data-sal-duration="1000">
                        Sumary
                    </h1>
                    <ul className="relative">
                        {summaryData.map((item, index) => (
                            <li key={index} className="mb-8 pl-8" data-sal="slide-up" data-sal-duration="1000">
                                <span className="absolute left-0 top-1.4 w-3 h-3 border border-sky-500 rounded-full"></span>
                                <span className="absolute left-1 top-3.5 w-0.5 h-full bg-sky-500"></span>
                                <h3 className="text-lg mb-2 text-gray-600 font-bold font-raleway">{item.title}</h3>
                                <p className="mb-2 font-robotoItalic text-black font-thin">{item.description}</p>
                                <ul className="list-disc ml-4">
                                    {item.bullets.map((point, i) => (
                                        <li key={i} className="mb-1">{point}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>

                    <h1 className="text-2xl font-bold mb-2 mt-8 flex items-center font-ralewayBold" data-sal="slide-up" data-sal-duration="1000">
                        Education
                    </h1>
                    <ul className="relative">
                        {educationData.map((item, index) => (
                            <li key={index} className="mb-8 pl-8 relative" data-sal="slide-up" data-sal-duration="1000">
                                <span className="absolute left-0 top-1.4 w-3 h-3 border border-sky-500 rounded-full"></span>
                                <span className="absolute left-1 top-3.5 w-0.5 h-full bg-sky-500"></span>
                                <h3 className="text-lg mb-2 font-raleway text-gray-600 font-bold">{item.title}</h3>
                                <p className="mb-2 font-raleway text-black font-bold">{item.date}</p>
                                <h4 className="text-base font-robotoItalic mb-5">{item.company}</h4>
                                <div>
                                    {item.description.map((point, i) => (
                                        <p key={i} className="mb-1 font-roboto">{point}</p>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h1 className="text-2xl font-bold mb-2 flex items-center font-ralewayBold" data-sal="slide-up" data-sal-duration="1000">
                        Professional Experience
                    </h1>
                    <ul className="relative ">
                        {experienceData.map((exp, index) => (
                            <li key={index} className="mb-8 pl-8 relative" data-sal="slide-up" data-sal-duration="1000">
                                <span className="absolute left-0 top-1.4 w-3 h-3 border border-sky-500 rounded-full"></span>
                                <span className="absolute left-1 top-3.5 w-0.5 h-full bg-sky-500"></span>
                                <h3 className="text-lg mb-2 font-raleway text-gray-600 font-bold">{exp.title}</h3>
                                <p className="mb-2 mt-2 font-raleway text-black font-bold">{exp.date}</p>
                                <h4 className="text-base font-robotoItalic mt-5 mb-5">{exp.company}</h4>
                                <ul className="list-disc ml-4">
                                    {exp.bullets.map((point, i) => (
                                        <li key={i} className="mb-1 font-roboto">{point}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Resume;
