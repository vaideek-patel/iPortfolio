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
        "I'm a <span class='underline-typed'>Designer</span>",
        "I'm a <span class='underline-typed'>Developer</span>",
        "I'm a <span class='underline-typed'>Freelancer</span>",
        "I'm a <span class='underline-typed'>Photographer</span>"
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
        <h2 className="md:text-[64px] text-[32px] font-bold font-ralewayBold ml-3 mt-1" data-sal="slide-up" data-sal-duration="1000">Alex Smith</h2>
        <p className="text-[26px] ml-3 font-roboto mb-7" data-sal="slide-up" data-sal-duration="1000">
          <span ref={typedRef}></span>
        </p>
      </div>
    </div>
  );
}

export default Initial;
