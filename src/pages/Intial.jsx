import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import 'sal.js/dist/sal.css';
import sal from 'sal.js';
import iPortFolioImage from "../../public/Images/IntialImage.jpg";

const Initial = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "I'm a Designer",
        "I'm a Developer",
        "I'm a Freelancer",
        "I'm a Photographer"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    sal({ once: true });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${iPortFolioImage})`,
        }}
      ></div>
      <div className="absolute inset-0 flex flex-col justify-center text-white">
        <h1 className="text-6xl font-bold mb-5 font-raleway ml-3" data-sal="slide-up" data-sal-duration="1000">Alex Smith</h1>
        <p className="text-2xl ml-3" data-sal="slide-up" data-sal-duration="1000">
          <span ref={typedRef} className='border-b-[2px] border-sky-500'></span>
        </p>
      </div>
    </div>
  );
}

export default Initial;
