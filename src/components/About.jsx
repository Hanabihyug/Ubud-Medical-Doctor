import React, { useState } from "react";
import Container from "./Container";

function About() {
  const [isTruncate, setIsTruncate] = useState(true)

  return (
    <div className="h-fit bg-main-100" id="About">
      <Container>
        <div className="flex max-md:flex-col py-28 max-md:gap-10 gap-20 items-center">
          <div className="w-full md:w-1/2">
            <h6 className=" text-lg font-bold text-main-600">About Us</h6>
            <h1 className="text-4xl font-bold">Health is our main concern</h1>
            <div className={`${isTruncate ? 'line-clamp-3' : 'line-clamp-none'} mb-7 mt-5 transition duration-300`}>
              <p className="text-gray-500 mb-2">
                Welcome to Ubud Medical Doctor, conveniently situated in the vibrant
                heart of Ubud's community. Our dedicated team of healthcare experts
                is here to ensure you receive exceptional care within a comforting
                environment, making your patient journey pleasant and calming.
              </p>
              <p className="text-gray-500 mb-2">
                At Ubud Medical Doctor, our guiding principle is a "Commitment to
                Excellence in Healthcare," motivating us to deliver superior medical
                services. We offer a comprehensive range of healthcare solutions,
                including state-of-the-art rabies vaccines for your protection. For
                your convenience and comfort, we provide personalized homecare and
                on-call services.
              </p>
              <p className="text-gray-500 mb-2">
                To further support your well-being, we offer health insurance
                options, emphasizing our commitment to your holistic health. Beyond
                just healthcare services, Ubud Medical Doctor is deeply invested in
                your overall well-being. Trust us to provide top-notch care tailored
                to your needs.
              </p>
            </div>
            <button className={`${isTruncate ? 'btn-main' : 'btn-nd'} btn-sm`} onClick={() => setIsTruncate(!isTruncate)}>{isTruncate ? 'Show more' : 'Show less'}</button>
          </div>
          <div className="max-md:w-full w-1/2 max-md:h-[300px] h-[400px] bg-cover bg-center bg-slate-600 rounded-3xl" style={{backgroundImage: `url(${process.env.PUBLIC_URL + './about-sect.jpeg'})`}}></div>
        </div>
      </Container>
    </div>
  );
}

export default About;
