import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import Container from "./Container";

function About() {
  const [isTruncate, setIsTruncate] = useState(true);
  const [inView, setInView] = useState(false);
  const ref = useRef();

  const fadeInTitle = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50px)",
    config: { duration: 1000 },
  });

  const fadeInSubtitle = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50px)",
    config: { duration: 500 },
  });

  const fadeInParagraph = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50px)",
    config: { duration: 500 },
  });

  const fadeInButton = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50px)",
    config: { duration: 500 },
  });

  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      setInView(entry.isIntersecting);
    };

    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return (
    <animated.div className="h-fit bg-main-200" id="About" ref={ref}>
      <Container>
        <div className="flex max-md:flex-col py-28 max-md:gap-10 gap-20 items-center">
          <div className="w-full md:w-1/2">
            <animated.h6 className="text-lg font-bold text-main-600" style={fadeInTitle}>
              About Us
            </animated.h6>
            <animated.h1 className="text-4xl font-bold" style={fadeInSubtitle}>
              Health is our main concern
            </animated.h1>
            <div className={`${isTruncate ? 'line-clamp-3' : 'line-clamp-none'} mb-7 mt-5 transition duration-300`}>
              <animated.p className="text-gray-500 mb-2" style={fadeInParagraph}>
                Welcome to Ubud Medical Assistance,
                located in the heart of Ubud's lively
                community. Our team of healthcare experts
                is dedicated to offering top-notch care in a
                nurturing environment, ensuring a pleasant
                and calming patient journey. Our guiding
                principle, "Commitment to Excellence in
                Healthcare," drives us to provide superior
                medical services.
              </animated.p>
              <animated.p className="text-gray-500 mb-2" style={fadeInParagraph}>
                We offer a broad
                spectrum of healthcare solutions, including
                cutting-edge rabies vaccines for your
                protection, and personalized homecare
                and on-call services for your utmost
                convenience and comfort.
              </animated.p>
              <animated.p className="text-gray-500 mb-2" style={fadeInParagraph}>
                Additionally, we
                offer health insurance options, underlining
                our commitment to your holistic health. At
                Ubud Medical Assistance, we don't just
                provide healthcare services; we are deeply
                committed to your overall well-being.
              </animated.p>
            </div>
            <animated.button
              className={`${isTruncate ? 'btn-main' : 'btn-nd'} btn-sm`}
              onClick={() => setIsTruncate(!isTruncate)}
              style={fadeInButton}
            >
              {isTruncate ? 'Show more' : 'Show less'}
            </animated.button>
          </div>
          <div
            className="max-md:w-full w-1/2 max-md:h-[300px] h-[400px] bg-cover bg-center bg-slate-600 rounded-3xl"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + './about-sect.jpeg'})` }}
          ></div>
        </div>
      </Container>
    </animated.div>
  );
}

export default About;
