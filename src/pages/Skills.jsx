import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import 'sal.js/dist/sal.css';
import sal from 'sal.js';

const skillsData = [
  { name: 'HTML', percentage: 100 },
  { name: 'CSS', percentage: 90 },
  { name: 'JavaScript', percentage: 75 },
  { name: 'PHP', percentage: 85 },
  { name: 'WORDPRESS/CMS', percentage: 90 },
  { name: 'PHOTOSHOP', percentage: 55 }
];

const Skills = () => {
  useEffect(() => {
    sal({ once: true });
  }, []);

  return (
    <div className="mb-8 p-3 bg-sky-50">
      <SectionTitle title={"Skills"} />
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="mb-1">
            <div className="flex justify-between mb-1" data-sal="slide-up" data-sal-duration="1000">
              <span className="font-normal">{skill.name}</span>
              <span className="font-normal">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-300 h-2" data-sal="slide-up" data-sal-duration="1000">
              <div
                className="bg-sky-500 h-full"
                style={{ width: `${skill.percentage}%`, transition: 'width 1s ease' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
