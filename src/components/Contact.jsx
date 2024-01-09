import React, { useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import Container from "./Container";

function Contact() {
  const [inView, setInView] = React.useState(false);
  const ref = useRef();

  const fadeInTitle = useSpring({
    opacity: inView ? 1 : 0,
    config: { duration: 1000 },
  });

  const fadeInText = useSpring({
    opacity: inView ? 1 : 0,
    config: { duration: 1000 },
  });

  const fadeInButton = useSpring({
    opacity: inView ? 1 : 0,
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

  // Membuat tautan ke WhatsApp
  const whatsappLink = `https://wa.me/6285100811818?text=Hello%20Ubud%20Medical%20Assistance%2C%20I%20need%20Help%20For%20(Please%20tell%20us%20your%20problem)`;

  return (
    <animated.div
      className="bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "hero.jpeg"})`,
      }}
    >
      <div className="py-28 h-full w-full bg-black/70">
        <Container>
          <animated.div
            className="max-sm:flex max-sm:flex-col max-sm:items-center"
            ref={ref}
          >
            <animated.h1
              className="text-5xl font-bold text-white flex items-center gap-3 mb-6 max-sm:text-center"
              style={fadeInTitle}
            >
              <div className=" max-sm:hidden h-16 w-2.5 bg-main-700"></div> Feel free to Contact Us
            </animated.h1>
            <animated.p
              className="text-white/90 mb-8 md:w-1/2 max-sm:text-center"
              style={fadeInText}
            >
              We believe that optimal health is important. Feel free to get to know us more, and we will provide the best advice for you.
            </animated.p>
            {/* Tautan WhatsApp */}
            <animated.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-main btn-sm"
              style={fadeInButton}
            >
              Contact Us
            </animated.a>
          </animated.div>
        </Container>
      </div>
    </animated.div>
  );
}

export default Contact;
