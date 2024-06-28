import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <h1 className="relative after:absolute after:top-[130%] after:left-0 after:bg-sky-500 after:w-1/2 after:h-[3px] text-3xl font-semibold inline-block mt-10 font-ralewayBold mb-5">
            {title}
        </h1>
    );
};

export default SectionTitle;
