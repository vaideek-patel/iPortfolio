import React, { useEffect } from 'react';
import profileImage from '../../public/iPortFolioImage1.jpg';
import chevronRightIcon from '../../public/Icons/chevron-right.svg';
import happyClients from '../../public/Icons/emoji-smile.svg';
import Projects from '../../public/Icons/journal-richtext.svg';
import HoursOfSupport from '../../public/Icons/headset.svg';
import HardWorkers from '../../public/Icons/people.svg';
import SectionTitle from '../components/SectionTitle';
import 'sal.js/dist/sal.css';
import sal from 'sal.js';
import CountUp from 'react-countup';

const About = () => {
  useEffect(() => {
    sal({ once: true });
  }, []);

  const infoItems = [
    { label: 'Birthday:', value: '1 May 1995' },
    { label: 'Website:', value: 'www.example.com', link: 'http://www.example.com' },
    { label: 'Phone:', value: '+123 456 7890' },
    { label: 'City:', value: 'New York, USA' },
    { label: 'Age:', value: '30' },
    { label: 'Degree:', value: 'Master' },
    { label: 'Email:', value: 'email@example.com', email: true },
    { label: 'Freelance:', value: 'Available' }
  ];

  const skills = [
    { number: 232, name: 'Happy Clients', icon: happyClients, description: 'consequuntur quae' },
    { number: 521, name: 'Projects Completed', icon: Projects, description: 'atque cum quia aut' },
    { number: 1453, name: 'Hours of Support', icon: HoursOfSupport, description: 'aut commodi quaerat' },
    { number: 32, name: 'Hard Workers', icon: HardWorkers, description: 'rerum asperiores dolor' }
  ];

  return (
    <div className="mb-8 p-5">
      <div data-sal="slide-up" data-sal-duration="1000">
        <SectionTitle title={"About"} />
      </div>
      <p className="mt-4 text-base text-gray-700" data-sal="slide-up" data-sal-duration="1000">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="flex flex-col sm:flex-row mt-8" data-sal="slide-up" data-sal-duration="1000">
        <div className="sm:w-80 sm:h-80 mb-4 sm:mr-8 flex-shrink-0">
          <img className="w-full h-full object-cover rounded-lg" src={profileImage} alt="Profile" />
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl mb-4 font-ralewayBold">UI/UX Designer & Web Developer.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mt-5">
            {infoItems.map((item, index) => (
              <div key={index} className="flex items-center" data-sal="slide-up" data-sal-duration="1000">
                <img src={chevronRightIcon} alt="Chevron Right" className="w-4 h-4 mr-2 " />
                {item.link ? (
                  <p><span className="font-semibold">{item.label}</span> <a href={item.link} className="text-blue-600 hover:underline">{item.value}</a></p>
                ) : item.email ? (
                  <p><span className="font-semibold">{item.label}</span> <a href={`mailto:${item.value}`} className="text-blue-600 hover:underline">{item.value}</a></p>
                ) : (
                  <p><span className="font-semibold">{item.label}</span> {item.value}</p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg" data-sal="slide-up" data-sal-duration="1000">Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.</p>
        </div>
      </div>
      <div className="flex flex-wrap  mt-40 mb-20 sm:space-x-12" data-sal="slide-up" data-sal-duration="1750">
        {skills.map((skill, index) => (
          <div key={index} className="flex lg:flex-col md:flex-wrap sm:flex-wrap  mb-6 sm:mb-5" data-sal="slide-up" data-sal-duration="1000">
            <div className="flex items-center mb-2 ml-16">
              <img src={skill.icon} alt={skill.name} className="w-10 h-10 mr-2" />
              <p className="text-3xl sm:text-5xl font-bold ">
                <CountUp end={skill.number} duration={6} separator="" />
              </p>
            </div>
            <div className='text-center'>
              <p className="text-base sm:text-sm">{skill.name}</p>
              <p className="text-xs text-gray-600">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
