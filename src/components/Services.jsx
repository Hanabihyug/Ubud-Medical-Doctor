import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import { useMediaQuery } from "react-responsive";
import Container from "./Container";
import { RxCheck } from 'react-icons/rx';

function Services() {
  const [isInSection, setIsInSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = document.getElementById('Services');
      if (sectionElement) {
        const sectionRect = sectionElement.getBoundingClientRect();
        const isInside = sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0;

        setIsInSection(isInside);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const fadeInTitle = useSpring({
    opacity: isInSection ? 1 : 0,
    transform: isInSection ? "translateX(0)" : "translateX(-50px)",
    config: { duration: 1000 },
  });

  const fadeInSubtitle = useSpring({
    opacity: isInSection ? 1 : 0,
    transform: isInSection ? "translateX(0)" : "translateX(-50px)",
    config: { duration: 1000 },
  });

  const slideInLeft = useSpring({
    opacity: isInSection ? 1 : 0,
    transform: isInSection ? "translateX(0)" : "translateX(-50px)",
    config: config.molasses,
  });

  return (
    <animated.div className="py-28" id="Services">
      <Container>
        {/* Header */}
        <div className="w-full text-center flex flex-col gap-1.5">
          <animated.h1 className="text-2xl font-bold" style={fadeInTitle}>
            What can we do
          </animated.h1>
          <animated.p className="text-gray-500" style={fadeInSubtitle}>
            "Quality service is the key to meeting customer needs and expectations professionally."
          </animated.p>
        </div>
        {/* Content 1 */}
        <div className={`mt-16 ${isMobile ? "flex-col" : "flex"} ${isMobile ? "items-center" : "items-start"} gap-12 sm:items-center`}>
          <div className={`h-[300px] xl:h-[400px] bg-cover bg-center rounded-3xl sm:w-full sm:max-w-[400px] sm:mx-auto ${isMobile ? "mb-8" : "mr-8"}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + 'service-1.jpeg'})` }}></div>
          <div className="sm:w-full">
            <animated.h1 className="text-xl font-bold mb-4" style={fadeInSubtitle}>
              Health Services
            </animated.h1>
            <animated.ul className="flex flex-col gap-2.5" style={fadeInSubtitle}>
              <li className="flex items-center gap-2">
                <RxCheck className="bg-main-600 p-[2px] text-white text-2xl rounded-full" />
                Doctor Consultation
              </li>
              <li className="flex items-center gap-2">
                <RxCheck className="bg-main-600 p-[2px] text-white text-2xl rounded-full" />
                Intravenous Therapy
              </li>
              <li className="flex items-center gap-2">
                <RxCheck className="bg-main-600 p-[2px] text-white text-2xl rounded-full" />
                Wound Treatment
              </li>
              <li className="flex items-center gap-2">
                <RxCheck className="bg-main-600 p-[2px] text-white text-2xl rounded-full" />
                Doctor On Call
              </li>
              <li className="flex items-center gap-2">
                <RxCheck className="bg-main-600 p-[2px] text-white text-2xl rounded-full" />
                Laboratory
              </li>
              <li className="flex items-center gap-2">
                <RxCheck className="bg-main-600 p-[2px] text-white text-2xl rounded-full" />
                Pharmacy
              </li>
              <li className="flex items-center gap-2">
                <RxCheck className="bg-main-600 p-[2px] text-white text-2xl rounded-full" />
                Vaccine
              </li>
            </animated.ul>
          </div>
        </div>
        {/* Content 2 */}
        <div className={`mt-20 ${isMobile ? "flex-col-reverse" : "flex"} ${isMobile ? "items-center" : "items-start"} gap-12 sm:items-center`}>
          <div className="sm:w-full">
            <animated.h1 className="text-xl font-bold max-sm:mt-8" style={isMobile ? fadeInSubtitle : slideInLeft}>
              Medical and Related Services
            </animated.h1>
            <animated.ul className={`w-full flex flex-col gap-2.5 mt-4 item-start`} style={isMobile ? fadeInSubtitle : slideInLeft}>
              <li className="flex items-center gap-2">
                <RxCheck className="bg-main-600 p-[2px] text-white text-2xl rounded-full" />
                Medical Service for Corporate
              </li>
              <li className="flex items-center gap-2">
                <RxCheck className="bg-main-600 p-[2px] text-white text-2xl rounded-full" />
                Medical Service for Event
              </li>
              <li className="flex items-center gap-2">
                <RxCheck className="bg-main-600 p-[2px] text-white text-2xl rounded-full" />
                First Aid Training
              </li>
            </animated.ul>
          </div>
          <div className={`h-[300px] xl:h-[400px] bg-cover md:bg-center rounded-3xl sm:w-full sm:max-w-[400px] sm:mx-auto ${isMobile ? "mt-8" : ""}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + 'service-2.jpeg'})` }}></div>
        </div>
      </Container>
    </animated.div>
  );
}

export default Services;
